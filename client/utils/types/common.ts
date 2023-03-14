import React                            from "react";
import { IValidateRules }               from "../validator/validator.interface";
import { EAutocomplete, IAutoComplete } from "./autocomplete";

export interface IBaseVariants {
	primary: "primary";
	secondary: "secondary";
}
export interface IDirection {
	row: "row";
	column: "column";
}
export enum ESort {
	date = "date",
	desc = "desc",
	asc = "asc",
}

export interface ISort {
	date: "date" | ESort.date;
	desc: "desc" | ESort.desc;
	asc: "asc" | ESort.asc;
}

export interface IFieldType {
	accordion: "accordion";
	button: "button";
	text: "text";
	h1: "h1";
	h2: "h2";
	h3: "h3";
	input: "input";
	inputPassword: "inputPassword";
	colorList: "colorList";
	list: "list";
	sort: "sort";
	divider: "divider";
	empty: "empty";
	radioAsButton: "radioAsButton";
	checkbox: "checkbox";
	selectedGroupDate: "selectedGroupDate";
	select: "select";
	alert: "alert";
	mark: "mark";
}

interface IPosition {
	left: "left";
	right: "right";
	center: "center";
	top: "top";
	bottom: "bottom";
}


export type TID = string | number;

export type Readonly<T> = {
	readonly [P in keyof T]: T[P];
};



export interface IAxis {
	horizontal: "horizontal";
	vertical: "vertical";
}

export interface ISizes {
	xs: "xs";
	sm: "sm";
	md: "md";
	lg: "lg";
}

export interface IBaseListItem extends Omit<IBaseProps, "children"> {
	isActive?: boolean;
	isDisabled?: boolean;
}

export interface IFormField {
	id?: TID;
	value?: any;
	autoComplete?: IAutoComplete[keyof IAutoComplete] | EAutocomplete[keyof EAutocomplete];
	type: IFieldType[keyof IFieldType];
	rules?: IValidateRules[keyof IValidateRules];
	errorMessage?: string;
	rulesArgs?: {
		from: number;
		to: number;
	};

	ariaLabel?: string;
	colProps?: {
		xs?: number;
		sm?: number;
		md?: number;
		lg?: number;
	};
	isRequired?: boolean;
	[key: string]: any;
}

export interface IActionButton {
	label: string;
	callback: () => void;
}

export interface IAccount {
	id: TID;
	firstName: string;
	lastName: string;
	phoneNumber: string;
	email: string;
	birthday: string;
	password: string;
	state: string;
	city: string;
	zipCode: string;
	address: string;
}

export interface IAccountLogin extends Pick<IAccount, "email" | "password"> {}

export interface IAccountEdit extends Pick<IAccount, "email" | "id" | "firstName" | "lastName" | "birthday" | "phoneNumber"> {
	terms: boolean;
}

export interface IBaseResponse {
	status: number;
	message?: string;
	error?: string;
	headers?: Record<string, string>;
	data?: any;
	[key: string]: any;
}
export interface IBaseAccessibilityProps {
	"aria-label"?: string;
	"aria-labelledby"?: string;
	"aria-describedby"?: string;
	tabIndex?: number;
}

export interface IBaseMarginProps {
	mt?: number | string;
	mb?: number | string;
	mr?: number | string;
	ml?: number | string;
	m?: number | string;
}

export interface IBasePaddingsProps {
	pt?: number | string;
	pb?: number | string;
	pr?: number | string;
	pl?: number | string;
	p?: number | string;
}

export interface IBaseSizeProps {
	w?: number | string;
	width?: number | string;
	height?: number | string;
	h?: number | string;
	minWidth?: number | string;
	miw?: number | string;
	maxWidth?: number | string;
	maw?: number | string;
	minHeight?: number | string;
	mih?: number | string;
	maxHeight?: number | string;
	mah?: number | string;
}

export interface IPositionProps {
	position?: "relative" | "absolute" | "fixed";
	top?: number | string;
	right?: number | string;
	bottom?: number | string;
	left?: number | string;
}

export interface IBaseUniProps extends IBaseAccessibilityProps, IBaseMarginProps, IBasePaddingsProps, IBaseSizeProps, IPositionProps {}

export interface IBaseProps extends IBaseUniProps {
	className?: string;
	children?: React.ReactNode;
	id?: TID;
	style?: React.CSSProperties;
}

export interface IColorProps {
	color?: string;
	backgroundColor?: string;
	borderColor?: string;
	textDecorationColor?: string;
}

export interface ITextProps {
	fontSize?: number | string;
	fontWeight?: number | string;
	lineHeight?: number | string;
	letterSpacing?: number | string;
	textAlign?: IPosition["center" | "left" | "right"];
}

export interface IBaseStateVariants {
	success: "success";
	error: "error";
	warning: "warning";
	info: "info";
}
