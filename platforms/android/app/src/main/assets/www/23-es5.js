var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[23], {
        /***/ "./node_modules/@ionic/core/dist/esm/ion-datetime_3-md.entry.js": 
        /*!**********************************************************************!*\
          !*** ./node_modules/@ionic/core/dist/esm/ion-datetime_3-md.entry.js ***!
          \**********************************************************************/
        /*! exports provided: ion_datetime, ion_picker, ion_picker_column */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_datetime", function () { return Datetime; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_picker", function () { return Picker; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_picker_column", function () { return PickerColumnCmp; });
            /* harmony import */ var _core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-ca0488fc.js */ "./node_modules/@ionic/core/dist/esm/core-ca0488fc.js");
            /* harmony import */ var _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config-3c7f3790.js */ "./node_modules/@ionic/core/dist/esm/config-3c7f3790.js");
            /* harmony import */ var _helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers-46f4a262.js */ "./node_modules/@ionic/core/dist/esm/helpers-46f4a262.js");
            /* harmony import */ var _animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./animation-af478fe9.js */ "./node_modules/@ionic/core/dist/esm/animation-af478fe9.js");
            /* harmony import */ var _overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./overlays-10640d86.js */ "./node_modules/@ionic/core/dist/esm/overlays-10640d86.js");
            /* harmony import */ var _theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./theme-18cbe2cc.js */ "./node_modules/@ionic/core/dist/esm/theme-18cbe2cc.js");
            /* harmony import */ var _haptic_c8f1473e_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./haptic-c8f1473e.js */ "./node_modules/@ionic/core/dist/esm/haptic-c8f1473e.js");
            /**
             * Gets a date value given a format
             * Defaults to the current date if
             * no date given
             */
            var getDateValue = function (date, format) {
                var getValue = getValueFromFormat(date, format);
                if (getValue !== undefined) {
                    return getValue;
                }
                var defaultDate = parseDate(new Date().toISOString());
                return getValueFromFormat(defaultDate, format);
            };
            var renderDatetime = function (template, value, locale) {
                if (value === undefined) {
                    return undefined;
                }
                var tokens = [];
                var hasText = false;
                FORMAT_KEYS.forEach(function (format, index) {
                    if (template.indexOf(format.f) > -1) {
                        var token = '{' + index + '}';
                        var text = renderTextFormat(format.f, value[format.k], value, locale);
                        if (!hasText && text !== undefined && value[format.k] != null) {
                            hasText = true;
                        }
                        tokens.push(token, text || '');
                        template = template.replace(format.f, token);
                    }
                });
                if (!hasText) {
                    return undefined;
                }
                for (var i = 0; i < tokens.length; i += 2) {
                    template = template.replace(tokens[i], tokens[i + 1]);
                }
                return template;
            };
            var renderTextFormat = function (format, value, date, locale) {
                if ((format === FORMAT_DDDD || format === FORMAT_DDD)) {
                    try {
                        value = (new Date(date.year, date.month - 1, date.day)).getDay();
                        if (format === FORMAT_DDDD) {
                            return (locale.dayNames ? locale.dayNames : DAY_NAMES)[value];
                        }
                        return (locale.dayShortNames ? locale.dayShortNames : DAY_SHORT_NAMES)[value];
                    }
                    catch (e) {
                        // ignore
                    }
                    return undefined;
                }
                if (format === FORMAT_A) {
                    return date !== undefined && date.hour !== undefined
                        ? (date.hour < 12 ? 'AM' : 'PM')
                        : value ? value.toUpperCase() : '';
                }
                if (format === FORMAT_a) {
                    return date !== undefined && date.hour !== undefined
                        ? (date.hour < 12 ? 'am' : 'pm')
                        : value || '';
                }
                if (value == null) {
                    return '';
                }
                if (format === FORMAT_YY || format === FORMAT_MM ||
                    format === FORMAT_DD || format === FORMAT_HH ||
                    format === FORMAT_mm || format === FORMAT_ss) {
                    return twoDigit(value);
                }
                if (format === FORMAT_YYYY) {
                    return fourDigit(value);
                }
                if (format === FORMAT_MMMM) {
                    return (locale.monthNames ? locale.monthNames : MONTH_NAMES)[value - 1];
                }
                if (format === FORMAT_MMM) {
                    return (locale.monthShortNames ? locale.monthShortNames : MONTH_SHORT_NAMES)[value - 1];
                }
                if (format === FORMAT_hh || format === FORMAT_h) {
                    if (value === 0) {
                        return '12';
                    }
                    if (value > 12) {
                        value -= 12;
                    }
                    if (format === FORMAT_hh && value < 10) {
                        return ('0' + value);
                    }
                }
                return value.toString();
            };
            var dateValueRange = function (format, min, max) {
                var opts = [];
                if (format === FORMAT_YYYY || format === FORMAT_YY) {
                    // year
                    if (max.year === undefined || min.year === undefined) {
                        throw new Error('min and max year is undefined');
                    }
                    for (var i = max.year; i >= min.year; i--) {
                        opts.push(i);
                    }
                }
                else if (format === FORMAT_MMMM || format === FORMAT_MMM ||
                    format === FORMAT_MM || format === FORMAT_M ||
                    format === FORMAT_hh || format === FORMAT_h) {
                    // month or 12-hour
                    for (var i = 1; i < 13; i++) {
                        opts.push(i);
                    }
                }
                else if (format === FORMAT_DDDD || format === FORMAT_DDD ||
                    format === FORMAT_DD || format === FORMAT_D) {
                    // day
                    for (var i = 1; i < 32; i++) {
                        opts.push(i);
                    }
                }
                else if (format === FORMAT_HH || format === FORMAT_H) {
                    // 24-hour
                    for (var i = 0; i < 24; i++) {
                        opts.push(i);
                    }
                }
                else if (format === FORMAT_mm || format === FORMAT_m) {
                    // minutes
                    for (var i = 0; i < 60; i++) {
                        opts.push(i);
                    }
                }
                else if (format === FORMAT_ss || format === FORMAT_s) {
                    // seconds
                    for (var i = 0; i < 60; i++) {
                        opts.push(i);
                    }
                }
                else if (format === FORMAT_A || format === FORMAT_a) {
                    // AM/PM
                    opts.push('am', 'pm');
                }
                return opts;
            };
            var dateSortValue = function (year, month, day, hour, minute) {
                if (hour === void 0) { hour = 0; }
                if (minute === void 0) { minute = 0; }
                return parseInt("1" + fourDigit(year) + twoDigit(month) + twoDigit(day) + twoDigit(hour) + twoDigit(minute), 10);
            };
            var dateDataSortValue = function (data) {
                return dateSortValue(data.year, data.month, data.day, data.hour, data.minute);
            };
            var daysInMonth = function (month, year) {
                return (month === 4 || month === 6 || month === 9 || month === 11) ? 30 : (month === 2) ? isLeapYear(year) ? 29 : 28 : 31;
            };
            var isLeapYear = function (year) {
                return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
            };
            var ISO_8601_REGEXP = /^(\d{4}|[+\-]\d{6})(?:-(\d{2})(?:-(\d{2}))?)?(?:T(\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{3}))?)?(?:(Z)|([+\-])(\d{2})(?::(\d{2}))?)?)?$/;
            var TIME_REGEXP = /^((\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{3}))?)?(?:(Z)|([+\-])(\d{2})(?::(\d{2}))?)?)?$/;
            var parseDate = function (val) {
                // manually parse IS0 cuz Date.parse cannot be trusted
                // ISO 8601 format: 1994-12-15T13:47:20Z
                var parse = null;
                if (val != null && val !== '') {
                    // try parsing for just time first, HH:MM
                    parse = TIME_REGEXP.exec(val);
                    if (parse) {
                        // adjust the array so it fits nicely with the datetime parse
                        parse.unshift(undefined, undefined);
                        parse[2] = parse[3] = undefined;
                    }
                    else {
                        // try parsing for full ISO datetime
                        parse = ISO_8601_REGEXP.exec(val);
                    }
                }
                if (parse === null) {
                    // wasn't able to parse the ISO datetime
                    return undefined;
                }
                // ensure all the parse values exist with at least 0
                for (var i = 1; i < 8; i++) {
                    parse[i] = parse[i] !== undefined ? parseInt(parse[i], 10) : undefined;
                }
                var tzOffset = 0;
                if (parse[9] && parse[10]) {
                    // hours
                    tzOffset = parseInt(parse[10], 10) * 60;
                    if (parse[11]) {
                        // minutes
                        tzOffset += parseInt(parse[11], 10);
                    }
                    if (parse[9] === '-') {
                        // + or -
                        tzOffset *= -1;
                    }
                }
                return {
                    year: parse[1],
                    month: parse[2],
                    day: parse[3],
                    hour: parse[4],
                    minute: parse[5],
                    second: parse[6],
                    millisecond: parse[7],
                    tzOffset: tzOffset,
                };
            };
            /**
             * Converts a valid UTC datetime string
             * To the user's local timezone
             * Note: This is not meant for time strings
             * such as "01:47"
             */
            var getLocalDateTime = function (dateString) {
                if (dateString === void 0) { dateString = ''; }
                /**
                 * If user passed in undefined
                 * or null, convert it to the
                 * empty string since the rest
                 * of this functions expects
                 * a string
                 */
                if (dateString === undefined || dateString === null) {
                    dateString = '';
                }
                /**
                 * Ensures that YYYY-MM-DD, YYYY-MM,
                 * YYYY-DD, etc does not get affected
                 * by timezones and stays on the day/month
                 * that the user provided
                 */
                if (dateString.length === 10 ||
                    dateString.length === 7) {
                    dateString += ' ';
                }
                var date = (typeof dateString === 'string' && dateString.length > 0) ? new Date(dateString) : new Date();
                return new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
            };
            var updateDate = function (existingData, newData) {
                var e_1, _a;
                if (!newData || typeof newData === 'string') {
                    var localDateTime = getLocalDateTime(newData);
                    if (!Number.isNaN(localDateTime.getTime())) {
                        newData = localDateTime.toISOString();
                    }
                }
                if (newData && newData !== '') {
                    if (typeof newData === 'string') {
                        // new date is a string, and hopefully in the ISO format
                        // convert it to our DatetimeData if a valid ISO
                        newData = parseDate(newData);
                        if (newData) {
                            // successfully parsed the ISO string to our DatetimeData
                            Object.assign(existingData, newData);
                            return true;
                        }
                    }
                    else if ((newData.year || newData.hour || newData.month || newData.day || newData.minute || newData.second)) {
                        // newData is from of a datetime picker's selected values
                        // update the existing DatetimeData data with the new values
                        // do some magic for 12-hour values
                        if (newData.ampm && newData.hour) {
                            newData.hour.value = (newData.ampm.value === 'pm')
                                ? (newData.hour.value === 12 ? 12 : newData.hour.value + 12)
                                : (newData.hour.value === 12 ? 0 : newData.hour.value);
                        }
                        try {
                            // merge new values from the picker's selection
                            // to the existing DatetimeData values
                            for (var _b = __values(Object.keys(newData)), _c = _b.next(); !_c.done; _c = _b.next()) {
                                var key = _c.value;
                                existingData[key] = newData[key].value;
                            }
                        }
                        catch (e_1_1) { e_1 = { error: e_1_1 }; }
                        finally {
                            try {
                                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                            }
                            finally { if (e_1) throw e_1.error; }
                        }
                        return true;
                    }
                    else if (newData.ampm) {
                        // Even though in the picker column hour values are between 1 and 12, the hour value is actually normalized
                        // to [0, 23] interval. Because of this when changing between AM and PM we have to update the hour so it points
                        // to the correct HH hour
                        newData.hour = {
                            value: newData.hour
                                ? newData.hour.value
                                : (newData.ampm.value === 'pm'
                                    ? (existingData.hour < 12 ? existingData.hour + 12 : existingData.hour)
                                    : (existingData.hour >= 12 ? existingData.hour - 12 : existingData.hour))
                        };
                        existingData['hour'] = newData['hour'].value;
                        return true;
                    }
                    // eww, invalid data
                    console.warn("Error parsing date: \"" + newData + "\". Please provide a valid ISO 8601 datetime format: https://www.w3.org/TR/NOTE-datetime");
                }
                else {
                    // blank data, clear everything out
                    for (var k in existingData) {
                        if (existingData.hasOwnProperty(k)) {
                            delete existingData[k];
                        }
                    }
                }
                return false;
            };
            var parseTemplate = function (template) {
                var formats = [];
                template = template.replace(/[^\w\s]/gi, ' ');
                FORMAT_KEYS.forEach(function (format) {
                    if (format.f.length > 1 && template.indexOf(format.f) > -1 && template.indexOf(format.f + format.f.charAt(0)) < 0) {
                        template = template.replace(format.f, ' ' + format.f + ' ');
                    }
                });
                var words = template.split(' ').filter(function (w) { return w.length > 0; });
                words.forEach(function (word, i) {
                    FORMAT_KEYS.forEach(function (format) {
                        if (word === format.f) {
                            if (word === FORMAT_A || word === FORMAT_a) {
                                // this format is an am/pm format, so it's an "a" or "A"
                                if ((formats.indexOf(FORMAT_h) < 0 && formats.indexOf(FORMAT_hh) < 0) ||
                                    VALID_AMPM_PREFIX.indexOf(words[i - 1]) === -1) {
                                    // template does not already have a 12-hour format
                                    // or this am/pm format doesn't have a hour, minute, or second format immediately before it
                                    // so do not treat this word "a" or "A" as the am/pm format
                                    return;
                                }
                            }
                            formats.push(word);
                        }
                    });
                });
                return formats;
            };
            var getValueFromFormat = function (date, format) {
                if (format === FORMAT_A || format === FORMAT_a) {
                    return (date.hour < 12 ? 'am' : 'pm');
                }
                if (format === FORMAT_hh || format === FORMAT_h) {
                    return (date.hour > 12 ? date.hour - 12 : (date.hour === 0 ? 12 : date.hour));
                }
                return date[convertFormatToKey(format)];
            };
            var convertFormatToKey = function (format) {
                for (var k in FORMAT_KEYS) {
                    if (FORMAT_KEYS[k].f === format) {
                        return FORMAT_KEYS[k].k;
                    }
                }
                return undefined;
            };
            var convertDataToISO = function (data) {
                // https://www.w3.org/TR/NOTE-datetime
                var rtn = '';
                if (data.year !== undefined) {
                    // YYYY
                    rtn = fourDigit(data.year);
                    if (data.month !== undefined) {
                        // YYYY-MM
                        rtn += '-' + twoDigit(data.month);
                        if (data.day !== undefined) {
                            // YYYY-MM-DD
                            rtn += '-' + twoDigit(data.day);
                            if (data.hour !== undefined) {
                                // YYYY-MM-DDTHH:mm:SS
                                rtn += "T" + twoDigit(data.hour) + ":" + twoDigit(data.minute) + ":" + twoDigit(data.second);
                                if (data.millisecond > 0) {
                                    // YYYY-MM-DDTHH:mm:SS.SSS
                                    rtn += '.' + threeDigit(data.millisecond);
                                }
                                if (data.tzOffset === undefined) {
                                    // YYYY-MM-DDTHH:mm:SSZ
                                    rtn += 'Z';
                                }
                                else {
                                    // YYYY-MM-DDTHH:mm:SS+/-HH:mm
                                    rtn += (data.tzOffset > 0 ? '+' : '-') + twoDigit(Math.floor(Math.abs(data.tzOffset / 60))) + ':' + twoDigit(data.tzOffset % 60);
                                }
                            }
                        }
                    }
                }
                else if (data.hour !== undefined) {
                    // HH:mm
                    rtn = twoDigit(data.hour) + ':' + twoDigit(data.minute);
                    if (data.second !== undefined) {
                        // HH:mm:SS
                        rtn += ':' + twoDigit(data.second);
                        if (data.millisecond !== undefined) {
                            // HH:mm:SS.SSS
                            rtn += '.' + threeDigit(data.millisecond);
                        }
                    }
                }
                return rtn;
            };
            /**
             * Use to convert a string of comma separated strings or
             * an array of strings, and clean up any user input
             */
            var convertToArrayOfStrings = function (input, type) {
                if (input == null) {
                    return undefined;
                }
                if (typeof input === 'string') {
                    // convert the string to an array of strings
                    // auto remove any [] characters
                    input = input.replace(/\[|\]/g, '').split(',');
                }
                var values;
                if (Array.isArray(input)) {
                    // trim up each string value
                    values = input.map(function (val) { return val.toString().trim(); });
                }
                if (values === undefined || values.length === 0) {
                    console.warn("Invalid \"" + type + "Names\". Must be an array of strings, or a comma separated string.");
                }
                return values;
            };
            /**
             * Use to convert a string of comma separated numbers or
             * an array of numbers, and clean up any user input
             */
            var convertToArrayOfNumbers = function (input, type) {
                if (typeof input === 'string') {
                    // convert the string to an array of strings
                    // auto remove any whitespace and [] characters
                    input = input.replace(/\[|\]|\s/g, '').split(',');
                }
                var values;
                if (Array.isArray(input)) {
                    // ensure each value is an actual number in the returned array
                    values = input
                        .map(function (num) { return parseInt(num, 10); })
                        .filter(isFinite);
                }
                else {
                    values = [input];
                }
                if (values.length === 0) {
                    console.warn("Invalid \"" + type + "Values\". Must be an array of numbers, or a comma separated string of numbers.");
                }
                return values;
            };
            var twoDigit = function (val) {
                return ('0' + (val !== undefined ? Math.abs(val) : '0')).slice(-2);
            };
            var threeDigit = function (val) {
                return ('00' + (val !== undefined ? Math.abs(val) : '0')).slice(-3);
            };
            var fourDigit = function (val) {
                return ('000' + (val !== undefined ? Math.abs(val) : '0')).slice(-4);
            };
            var FORMAT_YYYY = 'YYYY';
            var FORMAT_YY = 'YY';
            var FORMAT_MMMM = 'MMMM';
            var FORMAT_MMM = 'MMM';
            var FORMAT_MM = 'MM';
            var FORMAT_M = 'M';
            var FORMAT_DDDD = 'DDDD';
            var FORMAT_DDD = 'DDD';
            var FORMAT_DD = 'DD';
            var FORMAT_D = 'D';
            var FORMAT_HH = 'HH';
            var FORMAT_H = 'H';
            var FORMAT_hh = 'hh';
            var FORMAT_h = 'h';
            var FORMAT_mm = 'mm';
            var FORMAT_m = 'm';
            var FORMAT_ss = 'ss';
            var FORMAT_s = 's';
            var FORMAT_A = 'A';
            var FORMAT_a = 'a';
            var FORMAT_KEYS = [
                { f: FORMAT_YYYY, k: 'year' },
                { f: FORMAT_MMMM, k: 'month' },
                { f: FORMAT_DDDD, k: 'day' },
                { f: FORMAT_MMM, k: 'month' },
                { f: FORMAT_DDD, k: 'day' },
                { f: FORMAT_YY, k: 'year' },
                { f: FORMAT_MM, k: 'month' },
                { f: FORMAT_DD, k: 'day' },
                { f: FORMAT_HH, k: 'hour' },
                { f: FORMAT_hh, k: 'hour' },
                { f: FORMAT_mm, k: 'minute' },
                { f: FORMAT_ss, k: 'second' },
                { f: FORMAT_M, k: 'month' },
                { f: FORMAT_D, k: 'day' },
                { f: FORMAT_H, k: 'hour' },
                { f: FORMAT_h, k: 'hour' },
                { f: FORMAT_m, k: 'minute' },
                { f: FORMAT_s, k: 'second' },
                { f: FORMAT_A, k: 'ampm' },
                { f: FORMAT_a, k: 'ampm' },
            ];
            var DAY_NAMES = [
                'Sunday',
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday',
            ];
            var DAY_SHORT_NAMES = [
                'Sun',
                'Mon',
                'Tue',
                'Wed',
                'Thu',
                'Fri',
                'Sat',
            ];
            var MONTH_NAMES = [
                'January',
                'February',
                'March',
                'April',
                'May',
                'June',
                'July',
                'August',
                'September',
                'October',
                'November',
                'December',
            ];
            var MONTH_SHORT_NAMES = [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Sep',
                'Oct',
                'Nov',
                'Dec',
            ];
            var VALID_AMPM_PREFIX = [
                FORMAT_hh, FORMAT_h, FORMAT_mm, FORMAT_m, FORMAT_ss, FORMAT_s
            ];
            var Datetime = /** @class */ (function () {
                function class_1(hostRef) {
                    var _this = this;
                    Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
                    this.inputId = "ion-dt-" + datetimeIds++;
                    this.locale = {};
                    this.datetimeMin = {};
                    this.datetimeMax = {};
                    this.datetimeValue = {};
                    this.isExpanded = false;
                    /**
                     * The name of the control, which is submitted with the form data.
                     */
                    this.name = this.inputId;
                    /**
                     * If `true`, the user cannot interact with the datetime.
                     */
                    this.disabled = false;
                    /**
                     * If `true`, the datetime appears normal but is not interactive.
                     */
                    this.readonly = false;
                    /**
                     * The display format of the date and time as text that shows
                     * within the item. When the `pickerFormat` input is not used, then the
                     * `displayFormat` is used for both display the formatted text, and determining
                     * the datetime picker's columns. See the `pickerFormat` input description for
                     * more info. Defaults to `MMM D, YYYY`.
                     */
                    this.displayFormat = 'MMM D, YYYY';
                    /**
                     * The text to display on the picker's cancel button.
                     */
                    this.cancelText = 'Cancel';
                    /**
                     * The text to display on the picker's "Done" button.
                     */
                    this.doneText = 'Done';
                    this.onClick = function () {
                        _this.setFocus();
                        _this.open();
                    };
                    this.onFocus = function () {
                        _this.ionFocus.emit();
                    };
                    this.onBlur = function () {
                        _this.ionBlur.emit();
                    };
                    this.ionCancel = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionCancel", 7);
                    this.ionChange = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionChange", 7);
                    this.ionFocus = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionFocus", 7);
                    this.ionBlur = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionBlur", 7);
                    this.ionStyle = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionStyle", 7);
                }
                class_1.prototype.disabledChanged = function () {
                    this.emitStyle();
                };
                /**
                 * Update the datetime value when the value changes
                 */
                class_1.prototype.valueChanged = function () {
                    this.updateDatetimeValue(this.value);
                    this.emitStyle();
                    this.ionChange.emit({
                        value: this.value
                    });
                };
                class_1.prototype.componentWillLoad = function () {
                    // first see if locale names were provided in the inputs
                    // then check to see if they're in the config
                    // if neither were provided then it will use default English names
                    this.locale = {
                        // this.locale[type] = convertToArrayOfStrings((this[type] ? this[type] : this.config.get(type), type);
                        monthNames: convertToArrayOfStrings(this.monthNames, 'monthNames'),
                        monthShortNames: convertToArrayOfStrings(this.monthShortNames, 'monthShortNames'),
                        dayNames: convertToArrayOfStrings(this.dayNames, 'dayNames'),
                        dayShortNames: convertToArrayOfStrings(this.dayShortNames, 'dayShortNames')
                    };
                    this.updateDatetimeValue(this.value);
                    this.emitStyle();
                };
                /**
                 * Opens the datetime overlay.
                 */
                class_1.prototype.open = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        var pickerOptions, picker;
                        var _this = this;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    if (this.disabled || this.isExpanded) {
                                        return [2 /*return*/];
                                    }
                                    pickerOptions = this.generatePickerOptions();
                                    return [4 /*yield*/, _overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_4__["p"].create(pickerOptions)];
                                case 1:
                                    picker = _a.sent();
                                    this.isExpanded = true;
                                    picker.onDidDismiss().then(function () {
                                        _this.isExpanded = false;
                                        _this.setFocus();
                                    });
                                    picker.addEventListener('ionPickerColChange', function (event) { return __awaiter(_this, void 0, void 0, function () {
                                        var data, colSelectedIndex, colOptions, changeData;
                                        return __generator(this, function (_a) {
                                            data = event.detail;
                                            colSelectedIndex = data.selectedIndex;
                                            colOptions = data.options;
                                            changeData = {};
                                            changeData[data.name] = {
                                                value: colOptions[colSelectedIndex].value
                                            };
                                            this.updateDatetimeValue(changeData);
                                            picker.columns = this.generateColumns();
                                            return [2 /*return*/];
                                        });
                                    }); });
                                    return [4 /*yield*/, picker.present()];
                                case 2:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    });
                };
                class_1.prototype.emitStyle = function () {
                    this.ionStyle.emit({
                        'interactive': true,
                        'datetime': true,
                        'has-placeholder': this.placeholder != null,
                        'has-value': this.hasValue(),
                        'interactive-disabled': this.disabled,
                    });
                };
                class_1.prototype.updateDatetimeValue = function (value) {
                    updateDate(this.datetimeValue, value);
                };
                class_1.prototype.generatePickerOptions = function () {
                    var _this = this;
                    var mode = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
                    var pickerOptions = Object.assign(Object.assign({ mode: mode }, this.pickerOptions), { columns: this.generateColumns() });
                    // If the user has not passed in picker buttons,
                    // add a cancel and ok button to the picker
                    var buttons = pickerOptions.buttons;
                    if (!buttons || buttons.length === 0) {
                        pickerOptions.buttons = [
                            {
                                text: this.cancelText,
                                role: 'cancel',
                                handler: function () {
                                    _this.updateDatetimeValue(_this.value);
                                    _this.ionCancel.emit();
                                }
                            },
                            {
                                text: this.doneText,
                                handler: function (data) {
                                    _this.updateDatetimeValue(data);
                                    /**
                                     * Prevent convertDataToISO from doing any
                                     * kind of transformation based on timezone
                                     * This cancels out any change it attempts to make
                                     *
                                     * Important: Take the timezone offset based on
                                     * the date that is currently selected, otherwise
                                     * there can be 1 hr difference when dealing w/ DST
                                     */
                                    var date = new Date(convertDataToISO(_this.datetimeValue));
                                    _this.datetimeValue.tzOffset = date.getTimezoneOffset() * -1;
                                    _this.value = convertDataToISO(_this.datetimeValue);
                                }
                            }
                        ];
                    }
                    return pickerOptions;
                };
                class_1.prototype.generateColumns = function () {
                    var _this = this;
                    // if a picker format wasn't provided, then fallback
                    // to use the display format
                    var template = this.pickerFormat || this.displayFormat || DEFAULT_FORMAT;
                    if (template.length === 0) {
                        return [];
                    }
                    // make sure we've got up to date sizing information
                    this.calcMinMax();
                    // does not support selecting by day name
                    // automatically remove any day name formats
                    template = template.replace('DDDD', '{~}').replace('DDD', '{~}');
                    if (template.indexOf('D') === -1) {
                        // there is not a day in the template
                        // replace the day name with a numeric one if it exists
                        template = template.replace('{~}', 'D');
                    }
                    // make sure no day name replacer is left in the string
                    template = template.replace(/{~}/g, '');
                    // parse apart the given template into an array of "formats"
                    var columns = parseTemplate(template).map(function (format) {
                        // loop through each format in the template
                        // create a new picker column to build up with data
                        var key = convertFormatToKey(format);
                        var values;
                        // check if they have exact values to use for this date part
                        // otherwise use the default date part values
                        var self = _this;
                        values = self[key + 'Values']
                            ? convertToArrayOfNumbers(self[key + 'Values'], key)
                            : dateValueRange(format, _this.datetimeMin, _this.datetimeMax);
                        var colOptions = values.map(function (val) {
                            return {
                                value: val,
                                text: renderTextFormat(format, val, undefined, _this.locale),
                            };
                        });
                        // cool, we've loaded up the columns with options
                        // preselect the option for this column
                        var optValue = getDateValue(_this.datetimeValue, format);
                        var selectedIndex = colOptions.findIndex(function (opt) { return opt.value === optValue; });
                        return {
                            name: key,
                            selectedIndex: selectedIndex >= 0 ? selectedIndex : 0,
                            options: colOptions
                        };
                    });
                    // Normalize min/max
                    var min = this.datetimeMin;
                    var max = this.datetimeMax;
                    ['month', 'day', 'hour', 'minute']
                        .filter(function (name) { return !columns.find(function (column) { return column.name === name; }); })
                        .forEach(function (name) {
                        min[name] = 0;
                        max[name] = 0;
                    });
                    return this.validateColumns(divyColumns(columns));
                };
                class_1.prototype.validateColumns = function (columns) {
                    var today = new Date();
                    var minCompareVal = dateDataSortValue(this.datetimeMin);
                    var maxCompareVal = dateDataSortValue(this.datetimeMax);
                    var yearCol = columns.find(function (c) { return c.name === 'year'; });
                    var selectedYear = today.getFullYear();
                    if (yearCol) {
                        // default to the first value if the current year doesn't exist in the options
                        if (!yearCol.options.find(function (col) { return col.value === today.getFullYear(); })) {
                            selectedYear = yearCol.options[0].value;
                        }
                        var selectedIndex = yearCol.selectedIndex;
                        if (selectedIndex !== undefined) {
                            var yearOpt = yearCol.options[selectedIndex];
                            if (yearOpt) {
                                // they have a selected year value
                                selectedYear = yearOpt.value;
                            }
                        }
                    }
                    var selectedMonth = this.validateColumn(columns, 'month', 1, minCompareVal, maxCompareVal, [selectedYear, 0, 0, 0, 0], [selectedYear, 12, 31, 23, 59]);
                    var numDaysInMonth = daysInMonth(selectedMonth, selectedYear);
                    var selectedDay = this.validateColumn(columns, 'day', 2, minCompareVal, maxCompareVal, [selectedYear, selectedMonth, 0, 0, 0], [selectedYear, selectedMonth, numDaysInMonth, 23, 59]);
                    var selectedHour = this.validateColumn(columns, 'hour', 3, minCompareVal, maxCompareVal, [selectedYear, selectedMonth, selectedDay, 0, 0], [selectedYear, selectedMonth, selectedDay, 23, 59]);
                    this.validateColumn(columns, 'minute', 4, minCompareVal, maxCompareVal, [selectedYear, selectedMonth, selectedDay, selectedHour, 0], [selectedYear, selectedMonth, selectedDay, selectedHour, 59]);
                    return columns;
                };
                class_1.prototype.calcMinMax = function () {
                    var todaysYear = new Date().getFullYear();
                    if (this.yearValues !== undefined) {
                        var years = convertToArrayOfNumbers(this.yearValues, 'year');
                        if (this.min === undefined) {
                            this.min = Math.min.apply(Math, __spread(years)).toString();
                        }
                        if (this.max === undefined) {
                            this.max = Math.max.apply(Math, __spread(years)).toString();
                        }
                    }
                    else {
                        if (this.min === undefined) {
                            this.min = (todaysYear - 100).toString();
                        }
                        if (this.max === undefined) {
                            this.max = todaysYear.toString();
                        }
                    }
                    var min = this.datetimeMin = parseDate(this.min);
                    var max = this.datetimeMax = parseDate(this.max);
                    min.year = min.year || todaysYear;
                    max.year = max.year || todaysYear;
                    min.month = min.month || 1;
                    max.month = max.month || 12;
                    min.day = min.day || 1;
                    max.day = max.day || 31;
                    min.hour = min.hour || 0;
                    max.hour = max.hour || 23;
                    min.minute = min.minute || 0;
                    max.minute = max.minute || 59;
                    min.second = min.second || 0;
                    max.second = max.second || 59;
                    // Ensure min/max constraints
                    if (min.year > max.year) {
                        console.error('min.year > max.year');
                        min.year = max.year - 100;
                    }
                    if (min.year === max.year) {
                        if (min.month > max.month) {
                            console.error('min.month > max.month');
                            min.month = 1;
                        }
                        else if (min.month === max.month && min.day > max.day) {
                            console.error('min.day > max.day');
                            min.day = 1;
                        }
                    }
                };
                class_1.prototype.validateColumn = function (columns, name, index, min, max, lowerBounds, upperBounds) {
                    var column = columns.find(function (c) { return c.name === name; });
                    if (!column) {
                        return 0;
                    }
                    var lb = lowerBounds.slice();
                    var ub = upperBounds.slice();
                    var options = column.options;
                    var indexMin = options.length - 1;
                    var indexMax = 0;
                    for (var i = 0; i < options.length; i++) {
                        var opts = options[i];
                        var value = opts.value;
                        lb[index] = opts.value;
                        ub[index] = opts.value;
                        var disabled = opts.disabled = (value < lowerBounds[index] ||
                            value > upperBounds[index] ||
                            dateSortValue(ub[0], ub[1], ub[2], ub[3], ub[4]) < min ||
                            dateSortValue(lb[0], lb[1], lb[2], lb[3], lb[4]) > max);
                        if (!disabled) {
                            indexMin = Math.min(indexMin, i);
                            indexMax = Math.max(indexMax, i);
                        }
                    }
                    var selectedIndex = column.selectedIndex = Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["c"])(indexMin, column.selectedIndex, indexMax);
                    var opt = column.options[selectedIndex];
                    if (opt) {
                        return opt.value;
                    }
                    return 0;
                };
                Object.defineProperty(class_1.prototype, "text", {
                    get: function () {
                        // create the text of the formatted data
                        var template = this.displayFormat || this.pickerFormat || DEFAULT_FORMAT;
                        if (this.value === undefined ||
                            this.value === null ||
                            this.value.length === 0) {
                            return;
                        }
                        return renderDatetime(template, this.datetimeValue, this.locale);
                    },
                    enumerable: true,
                    configurable: true
                });
                class_1.prototype.hasValue = function () {
                    return this.text !== undefined;
                };
                class_1.prototype.setFocus = function () {
                    if (this.buttonEl) {
                        this.buttonEl.focus();
                    }
                };
                class_1.prototype.render = function () {
                    var _this = this;
                    var _a;
                    var _b = this, inputId = _b.inputId, text = _b.text, disabled = _b.disabled, readonly = _b.readonly, isExpanded = _b.isExpanded, el = _b.el, placeholder = _b.placeholder;
                    var mode = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
                    var labelId = inputId + '-lbl';
                    var label = Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["f"])(el);
                    var addPlaceholderClass = (text === undefined && placeholder != null) ? true : false;
                    // If selected text has been passed in, use that first
                    // otherwise use the placeholder
                    var datetimeText = text === undefined
                        ? (placeholder != null ? placeholder : '')
                        : text;
                    if (label) {
                        label.id = labelId;
                    }
                    Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["a"])(true, el, this.name, this.value, this.disabled);
                    return (Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["H"], { onClick: this.onClick, role: "combobox", "aria-disabled": disabled ? 'true' : null, "aria-expanded": "" + isExpanded, "aria-haspopup": "true", "aria-labelledby": labelId, class: (_a = {},
                            _a[mode] = true,
                            _a['datetime-disabled'] = disabled,
                            _a['datetime-readonly'] = readonly,
                            _a['datetime-placeholder'] = addPlaceholderClass,
                            _a['in-item'] = Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_5__["h"])('ion-item', el),
                            _a) }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "datetime-text" }, datetimeText), Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", { type: "button", onFocus: this.onFocus, onBlur: this.onBlur, disabled: this.disabled, ref: function (btnEl) { return _this.buttonEl = btnEl; } })));
                };
                Object.defineProperty(class_1.prototype, "el", {
                    get: function () { return Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this); },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(class_1, "watchers", {
                    get: function () {
                        return {
                            "disabled": ["disabledChanged"],
                            "value": ["valueChanged"]
                        };
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(class_1, "style", {
                    get: function () { return ":host{padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;min-width:16px;min-height:1.2em;font-family:var(--ion-font-family,inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;z-index:2}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}:host(.in-item){position:static}:host(.datetime-placeholder){color:var(--placeholder-color)}:host(.datetime-disabled){opacity:.3;pointer-events:none}:host(.datetime-readonly){pointer-events:none}button{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}:host-context([dir=rtl]) button,[dir=rtl] button{left:unset;right:unset;right:0}button::-moz-focus-inner{border:0}.datetime-text{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;-ms-flex:1;flex:1;min-height:inherit;direction:ltr;overflow:inherit}:host-context([dir=rtl]) .datetime-text,[dir=rtl] .datetime-text{direction:rtl}:host{--placeholder-color:var(--ion-placeholder-color,var(--ion-color-step-400,#999));--padding-top:10px;--padding-end:0;--padding-bottom:11px;--padding-start:16px}"; },
                    enumerable: true,
                    configurable: true
                });
                return class_1;
            }());
            var divyColumns = function (columns) {
                var e_2, _a;
                var columnsWidth = [];
                var col;
                var width;
                for (var i = 0; i < columns.length; i++) {
                    col = columns[i];
                    columnsWidth.push(0);
                    try {
                        for (var _b = __values(col.options), _c = _b.next(); !_c.done; _c = _b.next()) {
                            var option = _c.value;
                            width = option.text.length;
                            if (width > columnsWidth[i]) {
                                columnsWidth[i] = width;
                            }
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                }
                if (columnsWidth.length === 2) {
                    width = Math.max(columnsWidth[0], columnsWidth[1]);
                    columns[0].align = 'right';
                    columns[1].align = 'left';
                    columns[0].optionsWidth = columns[1].optionsWidth = width * 17 + "px";
                }
                else if (columnsWidth.length === 3) {
                    width = Math.max(columnsWidth[0], columnsWidth[2]);
                    columns[0].align = 'right';
                    columns[1].columnWidth = columnsWidth[1] * 17 + "px";
                    columns[0].optionsWidth = columns[2].optionsWidth = width * 17 + "px";
                    columns[2].align = 'left';
                }
                return columns;
            };
            var DEFAULT_FORMAT = 'MMM D, YYYY';
            var datetimeIds = 0;
            /**
             * iOS Picker Enter Animation
             */
            var iosEnterAnimation = function (baseEl) {
                var baseAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
                var backdropAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
                var wrapperAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
                backdropAnimation
                    .addElement(baseEl.querySelector('ion-backdrop'))
                    .fromTo('opacity', 0.01, 0.26);
                wrapperAnimation
                    .addElement(baseEl.querySelector('.picker-wrapper'))
                    .fromTo('transform', 'translateY(100%)', 'translateY(0%)');
                return baseAnimation
                    .addElement(baseEl)
                    .easing('cubic-bezier(.36,.66,.04,1)')
                    .duration(400)
                    .addAnimation([backdropAnimation, wrapperAnimation]);
            };
            /**
             * iOS Picker Leave Animation
             */
            var iosLeaveAnimation = function (baseEl) {
                var baseAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
                var backdropAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
                var wrapperAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
                backdropAnimation
                    .addElement(baseEl.querySelector('ion-backdrop'))
                    .fromTo('opacity', 0.26, 0.01);
                wrapperAnimation
                    .addElement(baseEl.querySelector('.picker-wrapper'))
                    .fromTo('transform', 'translateY(0%)', 'translateY(100%)');
                return baseAnimation
                    .addElement(baseEl)
                    .easing('cubic-bezier(.36,.66,.04,1)')
                    .duration(400)
                    .addAnimation([backdropAnimation, wrapperAnimation]);
            };
            var Picker = /** @class */ (function () {
                function class_2(hostRef) {
                    var _this = this;
                    Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
                    this.mode = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
                    this.presented = false;
                    /**
                     * If `true`, the keyboard will be automatically dismissed when the overlay is presented.
                     */
                    this.keyboardClose = true;
                    /**
                     * Array of buttons to be displayed at the top of the picker.
                     */
                    this.buttons = [];
                    /**
                     * Array of columns to be displayed in the picker.
                     */
                    this.columns = [];
                    /**
                     * Number of milliseconds to wait before dismissing the picker.
                     */
                    this.duration = 0;
                    /**
                     * If `true`, a backdrop will be displayed behind the picker.
                     */
                    this.showBackdrop = true;
                    /**
                     * If `true`, the picker will be dismissed when the backdrop is clicked.
                     */
                    this.backdropDismiss = true;
                    /**
                     * If `true`, the picker will animate.
                     */
                    this.animated = true;
                    this.onBackdropTap = function () {
                        var cancelBtn = _this.buttons.find(function (b) { return b.role === 'cancel'; });
                        if (cancelBtn) {
                            _this.buttonClick(cancelBtn);
                        }
                        else {
                            _this.dismiss();
                        }
                    };
                    Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_4__["d"])(this.el);
                    this.didPresent = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionPickerDidPresent", 7);
                    this.willPresent = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionPickerWillPresent", 7);
                    this.willDismiss = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionPickerWillDismiss", 7);
                    this.didDismiss = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionPickerDidDismiss", 7);
                }
                /**
                 * Present the picker overlay after it has been created.
                 */
                class_2.prototype.present = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        var _this = this;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_4__["e"])(this, 'pickerEnter', iosEnterAnimation, iosEnterAnimation, undefined)];
                                case 1:
                                    _a.sent();
                                    if (this.duration > 0) {
                                        this.durationTimeout = setTimeout(function () { return _this.dismiss(); }, this.duration);
                                    }
                                    return [2 /*return*/];
                            }
                        });
                    });
                };
                /**
                 * Dismiss the picker overlay after it has been presented.
                 *
                 * @param data Any data to emit in the dismiss events.
                 * @param role The role of the element that is dismissing the picker.
                 * This can be useful in a button handler for determining which button was
                 * clicked to dismiss the picker.
                 * Some examples include: ``"cancel"`, `"destructive"`, "selected"`, and `"backdrop"`.
                 */
                class_2.prototype.dismiss = function (data, role) {
                    if (this.durationTimeout) {
                        clearTimeout(this.durationTimeout);
                    }
                    return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_4__["f"])(this, data, role, 'pickerLeave', iosLeaveAnimation, iosLeaveAnimation);
                };
                /**
                 * Returns a promise that resolves when the picker did dismiss.
                 */
                class_2.prototype.onDidDismiss = function () {
                    return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_4__["g"])(this.el, 'ionPickerDidDismiss');
                };
                /**
                 * Returns a promise that resolves when the picker will dismiss.
                 */
                class_2.prototype.onWillDismiss = function () {
                    return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_4__["g"])(this.el, 'ionPickerWillDismiss');
                };
                /**
                 * Get the column that matches the specified name.
                 *
                 * @param name The name of the column.
                 */
                class_2.prototype.getColumn = function (name) {
                    return Promise.resolve(this.columns.find(function (column) { return column.name === name; }));
                };
                class_2.prototype.buttonClick = function (button) {
                    // if (this.disabled) {
                    //   return;
                    // }
                    // keep the time of the most recent button click
                    // a handler has been provided, execute it
                    // pass the handler the values from the inputs
                    var shouldDismiss = Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_4__["s"])(button.handler, this.getSelected()) !== false;
                    if (shouldDismiss) {
                        return this.dismiss();
                    }
                    return Promise.resolve(false);
                };
                class_2.prototype.getSelected = function () {
                    var selected = {};
                    this.columns.forEach(function (col, index) {
                        var selectedColumn = col.selectedIndex !== undefined
                            ? col.options[col.selectedIndex]
                            : undefined;
                        selected[col.name] = {
                            text: selectedColumn ? selectedColumn.text : undefined,
                            value: selectedColumn ? selectedColumn.value : undefined,
                            columnIndex: index
                        };
                    });
                    return selected;
                };
                class_2.prototype.render = function () {
                    var _this = this;
                    var _a;
                    var mode = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
                    return (Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["H"], { "aria-modal": "true", class: Object.assign((_a = {}, _a[mode] = true, 
                        // Used internally for styling
                        _a["picker-" + mode] = true, _a), Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_5__["g"])(this.cssClass)), style: {
                            zIndex: "" + (20000 + this.overlayIndex)
                        }, onIonBackdropTap: this.onBackdropTap }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-backdrop", { visible: this.showBackdrop, tappable: this.backdropDismiss }), Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "picker-wrapper", role: "dialog" }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "picker-toolbar" }, this.buttons.map(function (b) { return (Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: buttonWrapperClass(b) }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", { type: "button", onClick: function () { return _this.buttonClick(b); }, class: buttonClass(b) }, b.text))); })), Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "picker-columns" }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "picker-above-highlight" }), this.presented && this.columns.map(function (c) { return Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-picker-column", { col: c }); }), Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "picker-below-highlight" })))));
                };
                Object.defineProperty(class_2.prototype, "el", {
                    get: function () { return Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this); },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(class_2, "style", {
                    get: function () { return ".sc-ion-picker-md-h{--border-radius:0;--border-style:solid;--min-width:auto;--width:100%;--max-width:500px;--min-height:auto;--max-height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;top:0;display:block;position:absolute;width:100%;height:100%;font-family:var(--ion-font-family,inherit);contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}[dir=rtl].sc-ion-picker-md-h, [dir=rtl] .sc-ion-picker-md-h{left:unset;right:unset;right:0}.overlay-hidden.sc-ion-picker-md-h{display:none}.picker-wrapper.sc-ion-picker-md{border-radius:var(--border-radius);left:0;right:0;bottom:0;margin-left:auto;margin-right:auto;margin-top:auto;margin-bottom:auto;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict;overflow:hidden;z-index:10}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.picker-wrapper.sc-ion-picker-md{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}.picker-toolbar.sc-ion-picker-md{width:100%;background:transparent;contain:strict;z-index:1}.picker-button.sc-ion-picker-md{border:0;font-family:inherit}.picker-button.sc-ion-picker-md:active, .picker-button.sc-ion-picker-md:focus{outline:none}.picker-columns.sc-ion-picker-md{display:-ms-flexbox;display:flex;position:relative;-ms-flex-pack:center;justify-content:center;margin-bottom:var(--ion-safe-area-bottom,0);contain:strict;direction:ltr;overflow:hidden}.picker-above-highlight.sc-ion-picker-md, .picker-below-highlight.sc-ion-picker-md{display:none;pointer-events:none}.sc-ion-picker-md-h{--background:var(--ion-background-color,#fff);--border-width:0.55px 0 0;--border-color:var(--ion-item-border-color,var(--ion-border-color,var(--ion-color-step-150,rgba(0,0,0,0.13))));--height:260px;color:var(--ion-item-color,var(--ion-text-color,#000))}.picker-toolbar.sc-ion-picker-md{display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end;height:44px}.picker-button.sc-ion-picker-md, .picker-button.activated.sc-ion-picker-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:1.1em;padding-right:1.1em;padding-top:0;padding-bottom:0;height:44px;background:transparent;color:var(--ion-color-primary,#3880ff);font-size:14px;font-weight:500;text-transform:uppercase;-webkit-box-shadow:none;box-shadow:none}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.picker-button.sc-ion-picker-md, .picker-button.activated.sc-ion-picker-md{padding-left:unset;padding-right:unset;-webkit-padding-start:1.1em;padding-inline-start:1.1em;-webkit-padding-end:1.1em;padding-inline-end:1.1em}}.picker-columns.sc-ion-picker-md{height:216px;-webkit-perspective:1800px;perspective:1800px}.picker-above-highlight.sc-ion-picker-md{left:0;top:0;-webkit-transform:translateZ(90px);transform:translateZ(90px);position:absolute;width:100%;height:81px;border-bottom:1px solid var(--ion-item-border-color,var(--ion-border-color,var(--ion-color-step-150,rgba(0,0,0,.13))));background:-webkit-gradient(linear,left top,left bottom,color-stop(20%,var(--ion-background-color,#fff)),to(rgba(var(--ion-background-color-rgb,255,255,255),.8)));background:linear-gradient(180deg,var(--ion-background-color,#fff) 20%,rgba(var(--ion-background-color-rgb,255,255,255),.8));z-index:10}[dir=rtl].sc-ion-picker-md-h .picker-above-highlight.sc-ion-picker-md, [dir=rtl] .sc-ion-picker-md-h .picker-above-highlight.sc-ion-picker-md, [dir=rtl].sc-ion-picker-md .picker-above-highlight.sc-ion-picker-md{left:unset;right:unset;right:0}.picker-below-highlight.sc-ion-picker-md{left:0;top:115px;-webkit-transform:translateZ(90px);transform:translateZ(90px);position:absolute;width:100%;height:119px;border-top:1px solid var(--ion-item-border-color,var(--ion-border-color,var(--ion-color-step-150,rgba(0,0,0,.13))));background:-webkit-gradient(linear,left bottom,left top,color-stop(30%,var(--ion-background-color,#fff)),to(rgba(var(--ion-background-color-rgb,255,255,255),.8)));background:linear-gradient(0deg,var(--ion-background-color,#fff) 30%,rgba(var(--ion-background-color-rgb,255,255,255),.8));z-index:11}[dir=rtl].sc-ion-picker-md-h .picker-below-highlight.sc-ion-picker-md, [dir=rtl] .sc-ion-picker-md-h .picker-below-highlight.sc-ion-picker-md, [dir=rtl].sc-ion-picker-md .picker-below-highlight.sc-ion-picker-md{left:unset;right:unset;right:0}"; },
                    enumerable: true,
                    configurable: true
                });
                return class_2;
            }());
            var buttonWrapperClass = function (button) {
                var _a;
                return _a = {},
                    _a["picker-toolbar-" + button.role] = button.role !== undefined,
                    _a['picker-toolbar-button'] = true,
                    _a;
            };
            var buttonClass = function (button) {
                return Object.assign({ 'picker-button': true, 'ion-activatable': true }, Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_5__["g"])(button.cssClass));
            };
            var PickerColumnCmp = /** @class */ (function () {
                function class_3(hostRef) {
                    Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
                    this.optHeight = 0;
                    this.rotateFactor = 0;
                    this.scaleFactor = 1;
                    this.velocity = 0;
                    this.y = 0;
                    this.noAnimate = true;
                    this.ionPickerColChange = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionPickerColChange", 7);
                }
                class_3.prototype.colChanged = function () {
                    this.refresh();
                };
                class_3.prototype.connectedCallback = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        var pickerRotateFactor, pickerScaleFactor, mode, _a;
                        var _this = this;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    pickerRotateFactor = 0;
                                    pickerScaleFactor = 0.81;
                                    mode = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
                                    if (mode === 'ios') {
                                        pickerRotateFactor = -0.46;
                                        pickerScaleFactor = 1;
                                    }
                                    this.rotateFactor = pickerRotateFactor;
                                    this.scaleFactor = pickerScaleFactor;
                                    _a = this;
                                    return [4 /*yield*/, Promise.resolve( /*! import() */).then(__webpack_require__.bind(null, /*! ./index-624eea58.js */ "./node_modules/@ionic/core/dist/esm/index-624eea58.js"))];
                                case 1:
                                    _a.gesture = (_b.sent()).createGesture({
                                        el: this.el,
                                        gestureName: 'picker-swipe',
                                        gesturePriority: 100,
                                        threshold: 0,
                                        onStart: function (ev) { return _this.onStart(ev); },
                                        onMove: function (ev) { return _this.onMove(ev); },
                                        onEnd: function (ev) { return _this.onEnd(ev); },
                                    });
                                    this.gesture.setDisabled(false);
                                    this.tmrId = setTimeout(function () {
                                        _this.noAnimate = false;
                                        _this.refresh(true);
                                    }, 250);
                                    return [2 /*return*/];
                            }
                        });
                    });
                };
                class_3.prototype.componentDidLoad = function () {
                    var colEl = this.optsEl;
                    if (colEl) {
                        // DOM READ
                        // We perfom a DOM read over a rendered item, this needs to happen after the first render
                        this.optHeight = (colEl.firstElementChild ? colEl.firstElementChild.clientHeight : 0);
                    }
                    this.refresh();
                };
                class_3.prototype.disconnectedCallback = function () {
                    cancelAnimationFrame(this.rafId);
                    clearTimeout(this.tmrId);
                    if (this.gesture) {
                        this.gesture.destroy();
                        this.gesture = undefined;
                    }
                };
                class_3.prototype.emitColChange = function () {
                    this.ionPickerColChange.emit(this.col);
                };
                class_3.prototype.setSelected = function (selectedIndex, duration) {
                    // if there is a selected index, then figure out it's y position
                    // if there isn't a selected index, then just use the top y position
                    var y = (selectedIndex > -1) ? -(selectedIndex * this.optHeight) : 0;
                    this.velocity = 0;
                    // set what y position we're at
                    cancelAnimationFrame(this.rafId);
                    this.update(y, duration, true);
                    this.emitColChange();
                };
                class_3.prototype.update = function (y, duration, saveY) {
                    if (!this.optsEl) {
                        return;
                    }
                    // ensure we've got a good round number :)
                    var translateY = 0;
                    var translateZ = 0;
                    var _a = this, col = _a.col, rotateFactor = _a.rotateFactor;
                    var selectedIndex = col.selectedIndex = this.indexForY(-y);
                    var durationStr = (duration === 0) ? '' : duration + 'ms';
                    var scaleStr = "scale(" + this.scaleFactor + ")";
                    var children = this.optsEl.children;
                    for (var i = 0; i < children.length; i++) {
                        var button = children[i];
                        var opt = col.options[i];
                        var optOffset = (i * this.optHeight) + y;
                        var transform = '';
                        if (rotateFactor !== 0) {
                            var rotateX = optOffset * rotateFactor;
                            if (Math.abs(rotateX) <= 90) {
                                translateY = 0;
                                translateZ = 90;
                                transform = "rotateX(" + rotateX + "deg) ";
                            }
                            else {
                                translateY = -9999;
                            }
                        }
                        else {
                            translateZ = 0;
                            translateY = optOffset;
                        }
                        var selected = selectedIndex === i;
                        transform += "translate3d(0px," + translateY + "px," + translateZ + "px) ";
                        if (this.scaleFactor !== 1 && !selected) {
                            transform += scaleStr;
                        }
                        // Update transition duration
                        if (this.noAnimate) {
                            opt.duration = 0;
                            button.style.transitionDuration = '';
                        }
                        else if (duration !== opt.duration) {
                            opt.duration = duration;
                            button.style.transitionDuration = durationStr;
                        }
                        // Update transform
                        if (transform !== opt.transform) {
                            opt.transform = transform;
                            button.style.transform = transform;
                        }
                        // Update selected item
                        if (selected !== opt.selected) {
                            opt.selected = selected;
                            if (selected) {
                                button.classList.add(PICKER_OPT_SELECTED);
                            }
                            else {
                                button.classList.remove(PICKER_OPT_SELECTED);
                            }
                        }
                    }
                    this.col.prevSelected = selectedIndex;
                    if (saveY) {
                        this.y = y;
                    }
                    if (this.lastIndex !== selectedIndex) {
                        // have not set a last index yet
                        Object(_haptic_c8f1473e_js__WEBPACK_IMPORTED_MODULE_6__["b"])();
                        this.lastIndex = selectedIndex;
                    }
                };
                class_3.prototype.decelerate = function () {
                    var _this = this;
                    if (this.velocity !== 0) {
                        // still decelerating
                        this.velocity *= DECELERATION_FRICTION;
                        // do not let it go slower than a velocity of 1
                        this.velocity = (this.velocity > 0)
                            ? Math.max(this.velocity, 1)
                            : Math.min(this.velocity, -1);
                        var y = this.y + this.velocity;
                        if (y > this.minY) {
                            // whoops, it's trying to scroll up farther than the options we have!
                            y = this.minY;
                            this.velocity = 0;
                        }
                        else if (y < this.maxY) {
                            // gahh, it's trying to scroll down farther than we can!
                            y = this.maxY;
                            this.velocity = 0;
                        }
                        this.update(y, 0, true);
                        var notLockedIn = (Math.round(y) % this.optHeight !== 0) || (Math.abs(this.velocity) > 1);
                        if (notLockedIn) {
                            // isn't locked in yet, keep decelerating until it is
                            this.rafId = requestAnimationFrame(function () { return _this.decelerate(); });
                        }
                        else {
                            this.velocity = 0;
                            this.emitColChange();
                        }
                    }
                    else if (this.y % this.optHeight !== 0) {
                        // needs to still get locked into a position so options line up
                        var currentPos = Math.abs(this.y % this.optHeight);
                        // create a velocity in the direction it needs to scroll
                        this.velocity = (currentPos > (this.optHeight / 2) ? 1 : -1);
                        this.decelerate();
                    }
                };
                class_3.prototype.indexForY = function (y) {
                    return Math.min(Math.max(Math.abs(Math.round(y / this.optHeight)), 0), this.col.options.length - 1);
                };
                // TODO should this check disabled?
                class_3.prototype.onStart = function (detail) {
                    // We have to prevent default in order to block scrolling under the picker
                    // but we DO NOT have to stop propagation, since we still want
                    // some "click" events to capture
                    detail.event.preventDefault();
                    detail.event.stopPropagation();
                    // reset everything
                    cancelAnimationFrame(this.rafId);
                    var options = this.col.options;
                    var minY = (options.length - 1);
                    var maxY = 0;
                    for (var i = 0; i < options.length; i++) {
                        if (!options[i].disabled) {
                            minY = Math.min(minY, i);
                            maxY = Math.max(maxY, i);
                        }
                    }
                    this.minY = -(minY * this.optHeight);
                    this.maxY = -(maxY * this.optHeight);
                };
                class_3.prototype.onMove = function (detail) {
                    detail.event.preventDefault();
                    detail.event.stopPropagation();
                    // update the scroll position relative to pointer start position
                    var y = this.y + detail.deltaY;
                    if (y > this.minY) {
                        // scrolling up higher than scroll area
                        y = Math.pow(y, 0.8);
                        this.bounceFrom = y;
                    }
                    else if (y < this.maxY) {
                        // scrolling down below scroll area
                        y += Math.pow(this.maxY - y, 0.9);
                        this.bounceFrom = y;
                    }
                    else {
                        this.bounceFrom = 0;
                    }
                    this.update(y, 0, false);
                };
                class_3.prototype.onEnd = function (detail) {
                    if (this.bounceFrom > 0) {
                        // bounce back up
                        this.update(this.minY, 100, true);
                        this.emitColChange();
                        return;
                    }
                    else if (this.bounceFrom < 0) {
                        // bounce back down
                        this.update(this.maxY, 100, true);
                        this.emitColChange();
                        return;
                    }
                    this.velocity = Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["c"])(-MAX_PICKER_SPEED, detail.velocityY * 23, MAX_PICKER_SPEED);
                    if (this.velocity === 0 && detail.deltaY === 0) {
                        var opt = detail.event.target.closest('.picker-opt');
                        if (opt && opt.hasAttribute('opt-index')) {
                            this.setSelected(parseInt(opt.getAttribute('opt-index'), 10), TRANSITION_DURATION);
                        }
                    }
                    else {
                        this.y += detail.deltaY;
                        this.decelerate();
                    }
                };
                class_3.prototype.refresh = function (forceRefresh) {
                    var min = this.col.options.length - 1;
                    var max = 0;
                    var options = this.col.options;
                    for (var i = 0; i < options.length; i++) {
                        if (!options[i].disabled) {
                            min = Math.min(min, i);
                            max = Math.max(max, i);
                        }
                    }
                    /**
                     * Only update selected value if column has a
                     * velocity of 0. If it does not, then the
                     * column is animating might land on
                     * a value different than the value at
                     * selectedIndex
                     */
                    if (this.velocity !== 0) {
                        return;
                    }
                    var selectedIndex = Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["c"])(min, this.col.selectedIndex || 0, max);
                    if (this.col.prevSelected !== selectedIndex || forceRefresh) {
                        var y = (selectedIndex * this.optHeight) * -1;
                        this.velocity = 0;
                        this.update(y, TRANSITION_DURATION, true);
                    }
                };
                class_3.prototype.render = function () {
                    var _this = this;
                    var _a;
                    var col = this.col;
                    var Button = 'button';
                    var mode = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
                    return (Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["H"], { class: (_a = {},
                            _a[mode] = true,
                            _a['picker-col'] = true,
                            _a['picker-opts-left'] = this.col.align === 'left',
                            _a['picker-opts-right'] = this.col.align === 'right',
                            _a), style: {
                            'max-width': this.col.columnWidth
                        } }, col.prefix && (Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "picker-prefix", style: { width: col.prefixWidth } }, col.prefix)), Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "picker-opts", style: { maxWidth: col.optionsWidth }, ref: function (el) { return _this.optsEl = el; } }, col.options.map(function (o, index) { return Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])(Button, { type: "button", class: { 'picker-opt': true, 'picker-opt-disabled': !!o.disabled }, "opt-index": index }, o.text); })), col.suffix && (Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "picker-suffix", style: { width: col.suffixWidth } }, col.suffix))));
                };
                Object.defineProperty(class_3.prototype, "el", {
                    get: function () { return Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this); },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(class_3, "watchers", {
                    get: function () {
                        return {
                            "col": ["colChanged"]
                        };
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(class_3, "style", {
                    get: function () { return ".picker-col{display:-ms-flexbox;display:flex;position:relative;-ms-flex:1;flex:1;-ms-flex-pack:center;justify-content:center;height:100%;-webkit-box-sizing:content-box;box-sizing:content-box;contain:content}.picker-opts{position:relative;-ms-flex:1;flex:1;max-width:100%}.picker-opt{left:0;top:0;display:block;position:absolute;width:100%;border:0;text-align:center;text-overflow:ellipsis;white-space:nowrap;contain:strict;overflow:hidden;will-change:transform}:host-context([dir=rtl]) .picker-opt,[dir=rtl] .picker-opt{left:unset;right:unset;right:0}.picker-opt.picker-opt-disabled{pointer-events:none}.picker-opt-disabled{opacity:0}.picker-opts-left{-ms-flex-pack:start;justify-content:flex-start}.picker-opts-right{-ms-flex-pack:end;justify-content:flex-end}.picker-opt:active,.picker-opt:focus{outline:none}.picker-prefix{text-align:end}.picker-prefix,.picker-suffix{position:relative;-ms-flex:1;flex:1;white-space:nowrap}.picker-suffix{text-align:start}.picker-col{padding-left:8px;padding-right:8px;padding-top:0;padding-bottom:0;-webkit-transform-style:preserve-3d;transform-style:preserve-3d}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.picker-col{padding-left:unset;padding-right:unset;-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px}}.picker-opts,.picker-prefix,.picker-suffix{top:77px;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;color:inherit;font-size:22px;line-height:42px;pointer-events:none}.picker-opt{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;height:43px;-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out;background:transparent;color:inherit;font-size:22px;line-height:42px;-webkit-backface-visibility:hidden;backface-visibility:hidden;pointer-events:auto}.picker-opt.picker-opt-selected,.picker-prefix,.picker-suffix{color:var(--ion-color-primary,#3880ff)}"; },
                    enumerable: true,
                    configurable: true
                });
                return class_3;
            }());
            var PICKER_OPT_SELECTED = 'picker-opt-selected';
            var DECELERATION_FRICTION = 0.97;
            var MAX_PICKER_SPEED = 90;
            var TRANSITION_DURATION = 150;
            /***/ 
        })
    }]);
//# sourceMappingURL=23-es2015.js.map
//# sourceMappingURL=23-es5.js.map
//# sourceMappingURL=23-es5.js.map