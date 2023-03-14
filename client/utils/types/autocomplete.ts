export enum EAutocomplete {
	off = "off",
	/*
	The browser is not permitted to automatically enter or select a value for this field.
	It is possible that the document or application provides its own autocomplete feature,
	or that security concerns require that the field's value not be automatically entered.
	-------------------------------------------------------------------------------------
	Браузер не может автоматически вводить или выбирать значение для этого поля.
	Возможно, документ или приложение предоставляет собственную функцию автозаполнения,
	или что причины безопасности требуют, чтобы значение поля не вводилось автоматически.
	*/

	on = "on",
	/*
	 The browser is allowed to automatically complete the input.
	 No guidance is provided as to the type of data expected in the field,
	 so the browser may use its own judgement.
	 ---------------------------------------------------------------------
	 Браузер может автоматически завершить ввод.
	 Не предоставляется никаких рекомендаций по типу данных, ожидаемых в поле,
	 поэтому браузер может использовать свое собственное мнение.
	*/

	name = "name",
	/*
	 The field expects the value to be a person's full name.
	 Using "name" rather than breaking the name down into its components is generally
	 preferred because it avoids dealing with the wide diversity of human names and
	 how they are structured; however, you can use the following autocomplete values
	 if you do need to break the name down into its components:
	 --------------------------------------------------------------------------------
	 Поле ожидает, что значение будет полным именем человека.
	 Использование "имени" вместо разбиения имени на его компоненты обычно предпочтительно,
	 потому что это позволяет избежать работы с широким разнообразием человеческих имен
	 и как они структурированы; однако вы можете использовать следующие значения автозаполнения
	 если вам действительно нужно разбить имя на его компоненты:
	*/

	"honorific-prefix" = "honorific-prefix",
	//The prefix or title, such as "Mrs.", "Mr.", "Miss", "Ms.", "Dr.", or "Mlle.".
	//Префикс или титул, например «Г-жа», «Г-н», «Мисс», «Миссис», «Доктор» или «Мадам».

	"given-name" = "given-name",
	// The given (or "first") name.
	// Данное (или «первое») имя.

	"additional-name" = "additional-name",
	//The middle name.
	//Второе имя.

	"family-name" = "family-name",
	//The family (or "last") name.
	//Фамилия (или «последнее») имя.

	"honorific-suffix" = "honorific-suffix",
	//The suffix, such as "Jr.", "B.Sc.", "PhD.", "MBASW", or "IV".
	//Суффикс, например «Jr», «B.Sc», «PhD», «MBASW» или «IV».

	"nickname" = "nickname",
	//A nickname or handle.
	//Прозвище или ник.

	"email" = "email",
	//An email address.
	//Адрес электронной почты.

	"username" = "username",
	//A username or account name.
	//Имя пользователя или имя учетной записи.

	"new-password" = "new-password",
	/* A new password. When creating a new account or changing passwords,
	this should be used for an "Enter your new password" or "Confirm new password" field,
	as opposed to a general "Enter your current password" field that might be present.
	This may be used by the browser both to avoid accidentally filling in an existing
	password and to offer assistance in creating a secure password
	 --------------------------------------------------------------------------------
	Новый пароль. При создании новой учетной записи или изменении паролей
	это должно использоваться для поля «Введите свой новый пароль» или «Подтвердите новый пароль»,
	в отличие от общего поля «Введите свой текущий пароль», которое может присутствовать.
	Это может использоваться браузером как для того, чтобы случайно не заполнить существующий
	пароль, так и для предоставления помощи в создании безопасного пароля
	*/

	"current-password" = "current-password",
	//The user's current password.
	//Текущий пароль пользователя.

	"one-time-code" = "one-time-code",
	//A one-time code used for verifying user identity.
	//Одноразовый код, используемый для проверки личности пользователя.

	"organization-title" = "organization-title",
	/*
	A job title, or the title a person has within an organization,
	such as "Senior Technical Writer", "President", or "Assistant Troop Leader".
	 --------------------------------------------------------------------------------
	Должность, или должность, которую человек имеет в организации,
	например «Старший технический писатель», «Президент» или «Помощник лидера отряда».
	*/

	"organization" = "organization",
	//A company or organization name, such as "Acme Widget Company" or "Girl Scouts of America".
	//Название компании или организации, например «Acme Widget Company» или «Девочки США».

	"street-address" = "street-address",
	/*
	A street address. This can be multiple lines of text, and should fully identify
	the location of the address within its second administrative level (typically a city or town),
	but should not include the city name, ZIP or postal code, or country name.
	 --------------------------------------------------------------------------------
	Адрес улицы. Это может быть несколько строк текста и должно полностью идентифицировать
	местоположение адреса во втором административном уровне (обычно город или деревня),
	но не должно включать название города, почтовый индекс или почтовый индекс или название страны.
	*/

	"address-line1" = "address-line1",
	"address-line2" = "address-line2",
	"address-line3" = "address-line3",
	//Each individual line of the street address. These should only be present if the "street-address" is not present.
	//Каждая отдельная строка улицы. Они должны присутствовать только в том случае, если «адрес улицы» отсутствует.

	"address-level4" = "address-level4",
	//The finest-grained administrative level, in addresses which have four levels.
	//Наименьший административный уровень в адресах, которые имеют четыре уровня.

	"address-level3" = "address-level3",
	//The third administrative level, in addresses with at least three administrative levels.
	//Третий административный уровень в адресах с не менее чем тремя административными уровнями.

	"address-level2" = "address-level2",
	/*
	The second administrative level, in addresses with at least two of them.
	In countries with two administrative levels, this would typically be
	the city, town, village, or other locality in which the address is located.
	 --------------------------------------------------------------------------
	Второй административный уровень в адресах с не менее чем двумя из них.
	В странах с двумя административными уровнями это обычно будет
	город, деревня, деревня или другое место, в котором находится адрес.
	*/

	"address-level1" = "address-level1",
	/*The first administrative level in the address.
	This is typically the province in which the address is located.
	In the United States, this would be the state. In Switzerland, the canton.
	In the United Kingdom, the post-town.
	-----------------------------------------------------------------------
	Первый административный уровень в адресе.
	Обычно это провинция, в которой находится адрес.
	В США это будет штат. В Швейцарии, кантон.
	В Великобритании, почтовый город.
	*/

	"country" = "country",
	//A country or territory code.
	//Код страны или территории.

	"country-name" = "country-name",
	//A country or territory name.
	//Название страны или территории.

	"postal-code" = "postal-code",
	//A postal code (in the United States, this is the ZIP code).
	//Почтовый индекс (в США это почтовый индекс).

	"cc-name" = "cc-name",
	/*
	The full name as printed on or associated with a payment instrument such as a credit card.
	Using a full name field is preferred, typically, over breaking the name into pieces.
	--------------------------------------------------------------------------------------------
	Полное имя, напечатанное на или связанное с платежным средством, таким как кредитная карта.
	Использование поля полного имени предпочтительнее, обычно, чем разбивание имени на части.
	*/

	"cc-given-name" = "cc-given-name",
	//A given (first) name as given on a payment instrument like a credit card.
	//Данное (первое) имя, как указано на платежном средстве, например, кредитной карте.

	"cc-additional-name" = "cc-additional-name",
	//A middle name as given on a payment instrument or credit card.
	//Отчество, как указано на платежном средстве или кредитной карте.

	"cc-family-name" = "cc-family-name",
	//A family name, as given on a credit card.
	//Фамилия, как указано на кредитной карте.

	"cc-number" = "cc-number",
	//A credit card number or other number identifying a payment method, such as an account number.
	//Номер кредитной карты или другой номер, идентифицирующий способ оплаты, например, номер счета.

	"cc-exp" = "cc-exp",
	//A payment method expiration date, typically in the form "MM/YY" or "MM/YYYY".
	//Срок действия платежного средства, обычно в форме "ММ/ГГ" или "ММ/ГГГГ".

	"cc-exp-month" = "cc-exp-month",
	//The month in which the payment method expires.
	//Месяц, в котором истекает срок действия платежного средства.

	"cc-exp-year" = "cc-exp-year",
	//The year in which the payment method expires.
	//Год, в котором истекает срок действия платежного средства.

	"cc-csc" = "cc-csc",
	/*
	The security code for the payment instrument; on credit cards,
	this is the 3-digit verification number on the back of the card.
	-----------------------------------------------------------------
	Код безопасности для платежного средства; на кредитных картах,
	это 3-значный код подтверждения на обратной стороне карты.
	*/

	"cc-type" = "cc-type",
	//The type of payment instrument (such as "Visa" or "Master Card").
	//Тип платежного средства (например, "Visa" или "Master Card").

	"transaction-currency" = "transaction-currency",
	//The currency in which the transaction is to take place.
	//Валюта, в которой будет проводиться транзакция.

	"transaction-amount" = "transaction-amount",
	/*
	The amount, given in the currency specified by "transaction-currency",
	of the transaction, for a payment form.
	-----------------------------------------------------------------------
	Сумма, указанная в валюте, указанной в "transaction-currency",
	транзакции, для формы оплаты.
	*/

	"language" = "language",
	//A preferred language, given as a valid BCP 47 language tag.
	//Предпочитаемый язык, указанный как действительный языковой тег BCP 47.

	"bday" = "bday",
	//A birthdate, as a full date.
	//Дата рождения, как полная дата.

	"bday-day" = "bday-day",
	//The day of the month of a birthdate.
	//День месяца даты рождения.

	"bday-month" = "bday-month",
	//The month of the year of a birthdate.
	//Месяц года даты рождения.

	"bday-year" = "bday-year",
	//The year of a birthdate.
	//Год даты рождения.

	sex = "sex",
	/*A gender identity (such as "Female", "Fa'afafine", "Hijra", "Male", "Nonbinary"),
	 as freeform text without newlines.
	------------------------------------------------------------------------------------
	Половая идентичность (например, "Женский", "Fa'afafine", "Hijra", "Мужской", "Nonbinary"),
	как свободный текст без переносов строк.
	*/

	"tel" = "tel",
	/*
	A full telephone number, including the country code.
	If you need to break the phone number up into its components,
	you can use these values for those fields:
	------------------------------------------------------------
	Полный номер телефона, включая код страны.
	Если вам нужно разбить номер телефона на его компоненты,
	вы можете использовать эти значения для этих полей:
	*/

	"tel-country-code" = "tel-country-code",
	/*The country code, such as "1" for the United States, Canada,
	and other areas in North America and parts of the Caribbean.
	-------------------------------------------------------------
	Код страны, например, "1" для США, Канады и других районов Северной Америки
	и частей Карибского моря.
	*/

	"tel-national" = "tel-national",
	/*The entire phone number without the country code component,
	including a country-internal prefix. For the phone number "1-855-555-6502",
	this field's value would be "855-555-6502".
	---------------------------------------------------------------------------
	Весь номер телефона без компонента кода страны, включая внутренний префикс страны.
	Для номера телефона "1-855-555-6502" значение этого поля будет "855-555-6502".
	*/

	"tel-area-code" = "tel-area-code",
	//The area code, with any country-internal prefix applied if appropriate.
	//Код региона, с применением внутреннего префикса страны, если это необходимо.

	"tel-local" = "tel-local",
	/*The phone number without the country or area code.
	This can be split further into two parts, for phone numbers which have an
	exchange number and then a number within the exchange.
	For the phone number "555-6502", use "tel-local-prefix" for "555"
	and "tel-local-suffix" for "6502".
	--------------------------------------------------------------------------------
	Номер телефона без кода страны или региона.
	Это можно разделить дальше на две части для телефонных номеров, которые имеют
	обменный номер, а затем номер внутри обмена.
	Для телефонного номера "555-6502" используйте "tel-local-prefix" для "555"
	и "tel-local-suffix" для "6502".
	*/

	"tel-extension" = "tel-extension",
	/*A telephone extension code within the phone number,
	such as a room or suite number in a hotel or an office extension in a company.
	--------------------------------------------------------------------------------
	Код телефонного номера внутри телефонного номера,
	например номер комнаты или номер номера в отеле или
	номер внутреннего телефона в компании.
	*/

	"impp" = "impp",
	//A URL for an instant messaging protocol endpoint, such as "xmpp:username@example.net".
	//URL для конечной точки протокола мгновенных сообщений, например "xmpp:

	"url" = "url",
	/*
	A URL, such as a home page or company website address as
	appropriate given the context of the other fields in the form.
	---------------------------------------------------------------
	URL, например, домашняя страница или адрес веб-сайта компании,
	как соответствует контексту других полей в форме.
	*/

	"photo" = "photo",
	/*
	The URL of an image representing the person, company,
	or contact information given in the other fields in the form.
	--------------------------------------------------------------
	URL изображения, представляющего человека, компанию или
	контактную информацию, указанную в других полях формы.
	*/
}

export interface IAutoComplete {
	on: "on";
	off: "off";
	name: "name";
	"honorific-prefix": "honorific-prefix";
	"given-name": "given-name";
	"additional-name": "additional-name";
	"family-name": "family-name";
	"honorific-suffix": "honorific-suffix";
	nickname: "nickname";
	email: "email";
	username: "username";
	"new-password": "new-password";
	"current-password": "current-password";
	"organization-title": "organization-title";
	organization: "organization";
	"street-address": "street-address";
	"address-line1": "address-line1";
	"address-line2": "address-line2";
	"address-line3": "address-line3";
	"address-level4": "address-level4";
	"address-level3": "address-level3";
	"address-level2": "address-level2";
	"address-level1": "address-level1";
	country: "country";
	"country-name": "country-name";
	"postal-code": "postal-code";
	"cc-name": "cc-name";
	"cc-given-name": "cc-given-name";
	"cc-additional-name": "cc-additional-name";
	"cc-family-name": "cc-family-name";
	"cc-number": "cc-number";
	"cc-exp": "cc-exp";
	"cc-exp-month": "cc-exp-month";
	"cc-exp-year": "cc-exp-year";
	"cc-csc": "cc-csc";
	"cc-type": "cc-type";
	"transaction-currency": "transaction-currency";
	"transaction-amount": "transaction-amount";
	language: "language";
	bday: "bday";
	"bday-day": "bday-day";
	"bday-month": "bday-month";
	"bday-year": "bday-year";
	sex: "sex";
	tel: "tel";
	"tel-country-code": "tel-country-code";
	"tel-national": "tel-national";
	"tel-area-code": "tel-area-code";
	"tel-local": "tel-local";
	"tel-local-prefix": "tel-local-prefix";
	"tel-local-suffix": "tel-local-suffix";
	"tel-extension": "tel-extension";
	impp: "impp";
	url: "url";
	photo: "photo";
}
