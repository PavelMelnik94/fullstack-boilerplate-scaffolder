export const CheckPassword = (value): boolean => {
	if (!value) return false;

	// password pattern - 8 symbols and more, and 1 uppercase, 1 lowercase, 1 number, 1 special symbol
	//* Ваш пароль должен содержать не менее 8 символов, прописные и строчные буквы, цифры и хотя бы один специальный символ.
	const rule = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,}$/gm;
	return rule.test(value);
};
