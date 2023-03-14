import { EValidateRules } from "../validator.interface";

export function CheckRange(value: any, args: { from: number; to: number }, rules: EValidateRules): boolean {
	const { from, to } = args;

	function isFloat(n): boolean {
		return Number(n) === n && n % 1 !== 0;
	}

	function isInt(n): boolean {
		return Number(n) === n && n % 1 === 0;
	}

	switch (EValidateRules[rules]) {
		case EValidateRules.floatRange:
			if (isFloat(value)) {
				return false;
			} else if (!(value >= from && value <= to)) {
				return false;
			}
			break;
		case EValidateRules.intRange:
			if (isInt(value)) {
				return false;
			} else if (!(value >= from && value <= to)) {
				return false;
			}
			break;
		case EValidateRules.strLength:
			return value?.length >= from && value?.length <= to;
		default:
			break;
	}

	return true;
}
