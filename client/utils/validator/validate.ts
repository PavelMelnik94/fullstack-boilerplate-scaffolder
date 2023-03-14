import { IFormField }    from "../types/common";
import { CheckPassword } from "./helpers/CheckPassword";
import { CheckPhone }    from "./helpers/CheckPhone";
import { CheckEmail }    from "./helpers/CheckEmail";
import { CheckRange }    from "./helpers/CheckRange";

import { EValidateRules } from "./validator.interface";

export const validatorMsgsTemplate = {
	fieldNotMatch: (duplicateFieldLabel): string => `Your ${duplicateFieldLabel} don’t match`,
	required     : (fieldType): string => {
		switch (fieldType) {
			case "dropdown":
				return "Select a value";
			default:
				return "Field is required";
		}
	},
	mustBeQuantityDigit: (quantity): string => `Must be a ${quantity}-digit number`,
	minMaxValue        : (min = null, max = null): string => `Value must be between ${min} and ${max}`,
	minMaxLength       : (min = null, max = null): string => {
		if (min && !max) return `Minimum ${min} characters`;
		else if (!min && max) return `Maximum ${max} characters`;
	},
	newPasswordWrong: (): string => "At least 8 chars: upper and lowercase letters, numbers, and symbols",
	invalidEntity   : (whatIsNotValid): string => `Invalid ${whatIsNotValid}`,
};

export interface IValidator {
	field: IFormField;
	fields: {
		[key: string]: IFormField;
	};
}
type ReturnType = { isValid: boolean; field: IFormField };
export const validate = ({ field, fields }: IValidator): ReturnType => {
	let isValid = true;
	const newField = { ...field };
	const isNullValue = Array.isArray(newField.value) ? !newField.value?.length : !newField.value || newField.value === "";
	const isMatchRule = (rule): boolean => newField.rules === rule;

	if (isNullValue && newField.isRequired) {
		newField.errorMessage = validatorMsgsTemplate.required(newField.type);
		isValid = false;
	}

	//password
	else if ((isMatchRule(EValidateRules.password) || isMatchRule(EValidateRules.newPassword)) && !CheckPassword(newField.value)) {
		newField.errorMessage = validatorMsgsTemplate.newPasswordWrong();
		isValid = false;
	}

	//confirm password
	else if (isMatchRule(EValidateRules.confirmPassword) && Object.values(fields).find((el) => el.id === "password")?.value !== newField.value) {
		newField.errorMessage = validatorMsgsTemplate.fieldNotMatch("passwords");
		isValid = false;
	}

	//confirm new password
	else if (isMatchRule(EValidateRules.confirmNewPassword) && Object.values(fields).find((el) => el.id === "newPassword")?.value !== newField.value) {
		newField.errorMessage = validatorMsgsTemplate.fieldNotMatch("passwords");
		isValid = false;
	}

	// phone
	else if (isMatchRule(EValidateRules.phone) && !CheckPhone(newField?.value)) {
		const isShort = newField?.value?.toString().replace(/^D/gi, "")?.length !== 10;
		if (isShort) {
			isValid = false;
			newField.errorMessage = validatorMsgsTemplate.mustBeQuantityDigit("10");
		} else {
			isValid = false;
			newField.errorMessage = validatorMsgsTemplate.invalidEntity("phone number");
		}
	}

	// email
	else if ((isMatchRule(EValidateRules.email) && !CheckEmail(newField.value)) || (isMatchRule(EValidateRules.email) && !CheckEmail(newField.value))) {
		newField.errorMessage = validatorMsgsTemplate.invalidEntity("email format");
		isValid = false;
	}

	// check on - float, int, string, length, int value
	else if (
		(isMatchRule(EValidateRules.floatRange) || isMatchRule(EValidateRules.intRange) || isMatchRule(EValidateRules.strLength)) &&
		!CheckRange(newField.value, newField.rulesArgs, EValidateRules[newField.rules])
	) {
		const floatRules = newField.rules === EValidateRules.floatRange;
		const intRules = newField.rules === EValidateRules.intRange;
		const stringRules = newField.rules === EValidateRules.strLength;

		const stringLengthShort = typeof newField.value === "string" && newField.value?.length < newField.rulesArgs.from && stringRules;
		const stringLengthLong = typeof newField.value === "string" && newField.value?.length > newField.rulesArgs.to && stringRules;
		if ((newField.value && floatRules && newField?.value?.toString().includes(",")) || newField?.value?.toString?.()?.slice?.(-1) === ".") {
			newField.errorMessage = validatorMsgsTemplate.invalidEntity("symbol");
		} else if (stringLengthShort) {
			newField.errorMessage = validatorMsgsTemplate.minMaxLength(newField.rulesArgs.from, null);
		} else if (stringLengthLong) {
			newField.errorMessage = validatorMsgsTemplate.minMaxLength(null, newField.rulesArgs.to);
		} else if (intRules || (typeof newField.value === "string" && floatRules && isNaN(parseInt(newField.value)))) {
			newField.errorMessage = validatorMsgsTemplate.minMaxValue(newField.rulesArgs.from, newField.rulesArgs.to);
		} else if (((newField.value < newField.rulesArgs.from || newField.value > newField.rulesArgs.to) && intRules) || floatRules) {
			newField.errorMessage = validatorMsgsTemplate.minMaxValue(newField.rulesArgs.from, newField.rulesArgs.to);
		}
		isValid = false;
	} else if (typeof newField.value === "string" && newField.rules === "notEmptyArray" && !newField.value?.length) {
		newField.errorMessage = validatorMsgsTemplate.required(newField.type);
		isValid = false;
	} else {
		newField.errorMessage = "";
	}

	return { field: newField, isValid };
};

const validateFields = (fields, fieldsOrder?: []) => {
	let isValid = true;
	const arrayToCheck = fieldsOrder || Object.keys(fields);

	const newForm = arrayToCheck?.map((fieldKey) => {
		const result = validate({
			field: fields[fieldKey],
			fields,
		});
		isValid = isValid && result.isValid;

		return result.field;
	});

	return { isValid, newForm };
};

export default validateFields;
