export const CheckEmail = (value): boolean => {
	const cleanValue = value?.toString().toLowerCase().trim();

	// Regex to check email
	const rule = /^([a-z0-9_-]+\.)*[a-z0-9+_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/i;
	return rule.test(cleanValue);
};
