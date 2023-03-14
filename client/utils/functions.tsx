import React                 from 'react';

export const formatToPrice = (value: any): string => {
	const safelyValue = !value ? "" : value;
	return new Intl.NumberFormat("en-HOSSDDG", {
		style                : "currency",
		currency             : "USD",
		minimumFractionDigits: 0,
		maximumFractionDigits: 2,
	}).format(safelyValue);
};

export const clone = (obj) => {
	const data = obj instanceof Array ? [] : {};
	for (const i in obj) {
			data[i] = typeof obj[i] === "object" && obj[i] != null ? clone(obj[i]) : obj[i];
	}
	return data;
};

export const copy = (arr) => (arr ? (JSON.parse(JSON.stringify(arr)) as typeof arr) : null);

export const getSafelyArray = (value)=> (isArray(value) ? value : []);

export function makeKey(length = 5): string {
	let result = "";
	const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	const charactersLength = characters.length;
	for (let i = 0; i < length; i++) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength));
	}
	return result;
}

export const goToTop = () => {
	window.scrollTo({
		top     : 0,
		behavior: "smooth",
	});
};

export function throttle(callee, timeout) {
	let timer = null;

	return function perform(...args) {
		if (timer) return;

		timer = setTimeout(() => {
			callee(...args);

			clearTimeout(timer);
			timer = null;
		}, timeout);
	};
}

export function randomInteger(min, max) {
	//max +1
	let rand = min + Math.random() * (max + 1 - min);
	return Math.floor(rand);
}

export const parseDate = (date) => {
	const [day, month, year] = date.split("/");
	return { day, month, year };
};

export const toUpperFirst = (str) => str.charAt(0).toUpperCase() + str.slice(1);

export function isEmptyObject(obj) {
	for (let i in obj) {
		if (obj.hasOwnProperty(i)) {
			return false;
		}
	}
	return true;
}

export function SafeHydrate({ children }) {
	return <div suppressHydrationWarning>{typeof window === "undefined" ? "Loading..." : children}</div>;
}

export function isFunction(functionToCheck) {
	let getType = {};
	return functionToCheck && getType.toString.call(functionToCheck) === "[object Function]";
}

export function isNumber(x: any): x is number {
	return typeof x === "number";
}

export function isString(x: any): x is string {
	return typeof x === "string";
}

export function isBoolean(x: any): x is boolean {
	return typeof x === "boolean";
}

export function isObject(x: any): x is object {
	return typeof x === "object" && x !== null;
}

export function isArray(x: any): x is any[] {
	return Array.isArray(x);
}
export const pipe =
	(...functions: Function[]) =>
	(value: any) =>
		functions.reduce((acc, func) => func(acc), value);
