export const CheckPhone = (value): boolean => {
	// Regex to check phone - 10 digits
	if (!value) return false;
	const rule = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10}(\s*)?$/;
	return rule.test(value.toLowerCase());
};
