export enum EValidateRules {
	email = "email",
	password = "password",
	newPassword = "newPassword",
	confirmPassword = "confirmPassword",
	confirmNewPassword = "confirmNewPassword",
	phone = "phone",
	floatRange = "floatRange",
	intRange = "intRange",
	strLength = "strLength",
	notEmptyArray = "notEmptyArray",
}

export interface IValidateRules {
	email: "email" | EValidateRules.email;
	password: "password" | EValidateRules.password;
	newPassword: "newPassword" | EValidateRules.newPassword;
	confirmPassword: "confirmPassword" | EValidateRules.confirmPassword;
	confirmNewPassword: "confirmNewPassword" | EValidateRules.confirmNewPassword;
	phone: "phone" | EValidateRules.phone;
	floatRange: "floatRange" | EValidateRules.floatRange;
	intRange: "intRange" | EValidateRules.intRange;
	strLength: "strLength" | EValidateRules.strLength;
	notEmptyArray: "notEmptyArray" | EValidateRules.notEmptyArray;
}
