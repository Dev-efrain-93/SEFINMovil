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
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[48], {
        /***/ "./node_modules/@ionic/core/dist/esm/ion-range-ios.entry.js": 
        /*!******************************************************************!*\
          !*** ./node_modules/@ionic/core/dist/esm/ion-range-ios.entry.js ***!
          \******************************************************************/
        /*! exports provided: ion_range */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_range", function () { return Range; });
            /* harmony import */ var _core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-ca0488fc.js */ "./node_modules/@ionic/core/dist/esm/core-ca0488fc.js");
            /* harmony import */ var _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config-3c7f3790.js */ "./node_modules/@ionic/core/dist/esm/config-3c7f3790.js");
            /* harmony import */ var _helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers-46f4a262.js */ "./node_modules/@ionic/core/dist/esm/helpers-46f4a262.js");
            /* harmony import */ var _theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./theme-18cbe2cc.js */ "./node_modules/@ionic/core/dist/esm/theme-18cbe2cc.js");
            var Range = /** @class */ (function () {
                function class_1(hostRef) {
                    var _this = this;
                    Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
                    this.noUpdate = false;
                    this.hasFocus = false;
                    this.ratioA = 0;
                    this.ratioB = 0;
                    /**
                     * How long, in milliseconds, to wait to trigger the
                     * `ionChange` event after each change in the range value.
                     */
                    this.debounce = 0;
                    /**
                     * The name of the control, which is submitted with the form data.
                     */
                    this.name = '';
                    /**
                     * Show two knobs.
                     */
                    this.dualKnobs = false;
                    /**
                     * Minimum integer value of the range.
                     */
                    this.min = 0;
                    /**
                     * Maximum integer value of the range.
                     */
                    this.max = 100;
                    /**
                     * If `true`, a pin with integer value is shown when the knob
                     * is pressed.
                     */
                    this.pin = false;
                    /**
                     * If `true`, the knob snaps to tick marks evenly spaced based
                     * on the step property value.
                     */
                    this.snaps = false;
                    /**
                     * Specifies the value granularity.
                     */
                    this.step = 1;
                    /**
                     * If `true`, tick marks are displayed based on the step value.
                     * Only applies when `snaps` is `true`.
                     */
                    this.ticks = true;
                    /**
                     * If `true`, the user cannot interact with the range.
                     */
                    this.disabled = false;
                    /**
                     * the value of the range.
                     */
                    this.value = 0;
                    this.clampBounds = function (value) {
                        return Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["c"])(_this.min, value, _this.max);
                    };
                    this.ensureValueInBounds = function (value) {
                        if (_this.dualKnobs) {
                            return {
                                lower: _this.clampBounds(value.lower),
                                upper: _this.clampBounds(value.upper)
                            };
                        }
                        else {
                            return _this.clampBounds(value);
                        }
                    };
                    this.handleKeyboard = function (knob, isIncrease) {
                        var step = _this.step;
                        step = step > 0 ? step : 1;
                        step = step / (_this.max - _this.min);
                        if (!isIncrease) {
                            step *= -1;
                        }
                        if (knob === 'A') {
                            _this.ratioA = Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["c"])(0, _this.ratioA + step, 1);
                        }
                        else {
                            _this.ratioB = Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["c"])(0, _this.ratioB + step, 1);
                        }
                        _this.updateValue();
                    };
                    this.onBlur = function () {
                        if (_this.hasFocus) {
                            _this.hasFocus = false;
                            _this.ionBlur.emit();
                            _this.emitStyle();
                        }
                    };
                    this.onFocus = function () {
                        if (!_this.hasFocus) {
                            _this.hasFocus = true;
                            _this.ionFocus.emit();
                            _this.emitStyle();
                        }
                    };
                    this.ionChange = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionChange", 7);
                    this.ionStyle = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionStyle", 7);
                    this.ionFocus = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionFocus", 7);
                    this.ionBlur = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionBlur", 7);
                }
                class_1.prototype.debounceChanged = function () {
                    this.ionChange = Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["d"])(this.ionChange, this.debounce);
                };
                class_1.prototype.minChanged = function () {
                    if (!this.noUpdate) {
                        this.updateRatio();
                    }
                };
                class_1.prototype.maxChanged = function () {
                    if (!this.noUpdate) {
                        this.updateRatio();
                    }
                };
                class_1.prototype.disabledChanged = function () {
                    if (this.gesture) {
                        this.gesture.setDisabled(this.disabled);
                    }
                    this.emitStyle();
                };
                class_1.prototype.valueChanged = function (value) {
                    if (!this.noUpdate) {
                        this.updateRatio();
                    }
                    value = this.ensureValueInBounds(value);
                    this.ionChange.emit({ value: value });
                };
                class_1.prototype.connectedCallback = function () {
                    this.updateRatio();
                    this.debounceChanged();
                    this.disabledChanged();
                };
                class_1.prototype.disconnectedCallback = function () {
                    if (this.gesture) {
                        this.gesture.destroy();
                        this.gesture = undefined;
                    }
                };
                class_1.prototype.componentDidLoad = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        var rangeSlider, _a;
                        var _this = this;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    rangeSlider = this.rangeSlider;
                                    if (!rangeSlider) return [3 /*break*/, 2];
                                    _a = this;
                                    return [4 /*yield*/, Promise.resolve( /*! import() */).then(__webpack_require__.bind(null, /*! ./index-624eea58.js */ "./node_modules/@ionic/core/dist/esm/index-624eea58.js"))];
                                case 1:
                                    _a.gesture = (_b.sent()).createGesture({
                                        el: rangeSlider,
                                        gestureName: 'range',
                                        gesturePriority: 100,
                                        threshold: 0,
                                        onStart: function (ev) { return _this.onStart(ev); },
                                        onMove: function (ev) { return _this.onMove(ev); },
                                        onEnd: function (ev) { return _this.onEnd(ev); },
                                    });
                                    this.gesture.setDisabled(this.disabled);
                                    _b.label = 2;
                                case 2: return [2 /*return*/];
                            }
                        });
                    });
                };
                class_1.prototype.getValue = function () {
                    var value = this.value || 0;
                    if (this.dualKnobs) {
                        if (typeof value === 'object') {
                            return value;
                        }
                        return {
                            lower: 0,
                            upper: value
                        };
                    }
                    else {
                        if (typeof value === 'object') {
                            return value.upper;
                        }
                        return value;
                    }
                };
                class_1.prototype.emitStyle = function () {
                    this.ionStyle.emit({
                        'interactive': true,
                        'interactive-disabled': this.disabled
                    });
                };
                class_1.prototype.onStart = function (detail) {
                    var rect = this.rect = this.rangeSlider.getBoundingClientRect();
                    var currentX = detail.currentX;
                    // figure out which knob they started closer to
                    var ratio = Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["c"])(0, (currentX - rect.left) / rect.width, 1);
                    if (document.dir === 'rtl') {
                        ratio = 1 - ratio;
                    }
                    this.pressedKnob =
                        !this.dualKnobs ||
                            Math.abs(this.ratioA - ratio) < Math.abs(this.ratioB - ratio)
                            ? 'A'
                            : 'B';
                    this.setFocus(this.pressedKnob);
                    // update the active knob's position
                    this.update(currentX);
                };
                class_1.prototype.onMove = function (detail) {
                    this.update(detail.currentX);
                };
                class_1.prototype.onEnd = function (detail) {
                    this.update(detail.currentX);
                    this.pressedKnob = undefined;
                };
                class_1.prototype.update = function (currentX) {
                    // figure out where the pointer is currently at
                    // update the knob being interacted with
                    var rect = this.rect;
                    var ratio = Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["c"])(0, (currentX - rect.left) / rect.width, 1);
                    if (document.dir === 'rtl') {
                        ratio = 1 - ratio;
                    }
                    if (this.snaps) {
                        // snaps the ratio to the current value
                        ratio = valueToRatio(ratioToValue(ratio, this.min, this.max, this.step), this.min, this.max);
                    }
                    // update which knob is pressed
                    if (this.pressedKnob === 'A') {
                        this.ratioA = ratio;
                    }
                    else {
                        this.ratioB = ratio;
                    }
                    // Update input value
                    this.updateValue();
                };
                Object.defineProperty(class_1.prototype, "valA", {
                    get: function () {
                        return ratioToValue(this.ratioA, this.min, this.max, this.step);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(class_1.prototype, "valB", {
                    get: function () {
                        return ratioToValue(this.ratioB, this.min, this.max, this.step);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(class_1.prototype, "ratioLower", {
                    get: function () {
                        if (this.dualKnobs) {
                            return Math.min(this.ratioA, this.ratioB);
                        }
                        return 0;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(class_1.prototype, "ratioUpper", {
                    get: function () {
                        if (this.dualKnobs) {
                            return Math.max(this.ratioA, this.ratioB);
                        }
                        return this.ratioA;
                    },
                    enumerable: true,
                    configurable: true
                });
                class_1.prototype.updateRatio = function () {
                    var value = this.getValue();
                    var _a = this, min = _a.min, max = _a.max;
                    if (this.dualKnobs) {
                        this.ratioA = valueToRatio(value.lower, min, max);
                        this.ratioB = valueToRatio(value.upper, min, max);
                    }
                    else {
                        this.ratioA = valueToRatio(value, min, max);
                    }
                };
                class_1.prototype.updateValue = function () {
                    this.noUpdate = true;
                    var _a = this, valA = _a.valA, valB = _a.valB;
                    this.value = !this.dualKnobs
                        ? valA
                        : {
                            lower: Math.min(valA, valB),
                            upper: Math.max(valA, valB)
                        };
                    this.noUpdate = false;
                };
                class_1.prototype.setFocus = function (knob) {
                    if (this.el.shadowRoot) {
                        var knobEl = this.el.shadowRoot.querySelector(knob === 'A' ? '.range-knob-a' : '.range-knob-b');
                        if (knobEl) {
                            knobEl.focus();
                        }
                    }
                };
                class_1.prototype.render = function () {
                    var _this = this;
                    var _a, _b;
                    var _c = this, min = _c.min, max = _c.max, step = _c.step, el = _c.el, handleKeyboard = _c.handleKeyboard, pressedKnob = _c.pressedKnob, disabled = _c.disabled, pin = _c.pin, ratioLower = _c.ratioLower, ratioUpper = _c.ratioUpper;
                    var mode = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
                    var barStart = ratioLower * 100 + "%";
                    var barEnd = 100 - ratioUpper * 100 + "%";
                    var doc = document;
                    var isRTL = doc.dir === 'rtl';
                    var start = isRTL ? 'right' : 'left';
                    var end = isRTL ? 'left' : 'right';
                    var tickStyle = function (tick) {
                        var _a;
                        return _a = {},
                            _a[start] = tick[start],
                            _a;
                    };
                    var barStyle = (_a = {},
                        _a[start] = barStart,
                        _a[end] = barEnd,
                        _a);
                    var ticks = [];
                    if (this.snaps && this.ticks) {
                        for (var value = min; value <= max; value += step) {
                            var ratio = valueToRatio(value, min, max);
                            var tick = {
                                ratio: ratio,
                                active: ratio >= ratioLower && ratio <= ratioUpper,
                            };
                            tick[start] = ratio * 100 + "%";
                            ticks.push(tick);
                        }
                    }
                    Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["a"])(true, el, this.name, JSON.stringify(this.getValue()), disabled);
                    return (Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["H"], { onFocusin: this.onFocus, onFocusout: this.onBlur, class: Object.assign(Object.assign({}, Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_3__["c"])(this.color)), (_b = {}, _b[mode] = true, _b['in-item'] = Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_3__["h"])('ion-item', el), _b['range-disabled'] = disabled, _b['range-pressed'] = pressedKnob !== undefined, _b['range-has-pin'] = pin, _b)) }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "start" }), Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "range-slider", ref: function (rangeEl) { return _this.rangeSlider = rangeEl; } }, ticks.map(function (tick) { return (Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { style: tickStyle(tick), role: "presentation", class: {
                            'range-tick': true,
                            'range-tick-active': tick.active
                        } })); }), Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "range-bar", role: "presentation" }), Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "range-bar range-bar-active", role: "presentation", style: barStyle }), renderKnob(isRTL, {
                        knob: 'A',
                        pressed: pressedKnob === 'A',
                        value: this.valA,
                        ratio: this.ratioA,
                        pin: pin,
                        disabled: disabled,
                        handleKeyboard: handleKeyboard,
                        min: min,
                        max: max
                    }), this.dualKnobs && renderKnob(isRTL, {
                        knob: 'B',
                        pressed: pressedKnob === 'B',
                        value: this.valB,
                        ratio: this.ratioB,
                        pin: pin,
                        disabled: disabled,
                        handleKeyboard: handleKeyboard,
                        min: min,
                        max: max
                    })), Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "end" })));
                };
                Object.defineProperty(class_1.prototype, "el", {
                    get: function () { return Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this); },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(class_1, "watchers", {
                    get: function () {
                        return {
                            "debounce": ["debounceChanged"],
                            "min": ["minChanged"],
                            "max": ["maxChanged"],
                            "disabled": ["disabledChanged"],
                            "value": ["valueChanged"]
                        };
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(class_1, "style", {
                    get: function () { return ":host{--knob-handle-size:calc(var(--knob-size) * 2);display:-ms-flexbox;display:flex;position:relative;-ms-flex:3;flex:3;-ms-flex-align:center;align-items:center;font-family:var(--ion-font-family,inherit);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.range-disabled){pointer-events:none}::slotted(ion-label){-ms-flex:initial;flex:initial}::slotted(ion-icon[slot]){font-size:24px}.range-slider{position:relative;-ms-flex:1;flex:1;width:100%;height:var(--height);contain:size layout style;cursor:-webkit-grab;cursor:grab;-ms-touch-action:pan-y;touch-action:pan-y}:host(.range-pressed) .range-slider{cursor:-webkit-grabbing;cursor:grabbing}.range-pin{position:absolute;background:var(--ion-color-base);color:var(--ion-color-contrast);-webkit-box-sizing:border-box;box-sizing:border-box}.range-knob-handle{left:0;top:calc((var(--height) - var(--knob-handle-size)) / 2);margin-left:calc(0px - var(--knob-handle-size) / 2);position:absolute;width:var(--knob-handle-size);height:var(--knob-handle-size);text-align:center}:host-context([dir=rtl]) .range-knob-handle,[dir=rtl] .range-knob-handle{right:unset;right:0}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.range-knob-handle{margin-left:unset;-webkit-margin-start:calc(0px - var(--knob-handle-size) / 2);margin-inline-start:calc(0px - var(--knob-handle-size) / 2)}}:host-context([dir=rtl]) .range-knob-handle,[dir=rtl] .range-knob-handle{left:unset}.range-knob-handle:active,.range-knob-handle:focus{outline:none}.range-bar{border-radius:var(--bar-border-radius);left:0;top:calc((var(--height) - var(--bar-height)) / 2);position:absolute;width:100%;height:var(--bar-height);background:var(--bar-background);pointer-events:none}:host-context([dir=rtl]) .range-bar,[dir=rtl] .range-bar{right:unset;right:0;left:unset}.range-knob{border-radius:var(--knob-border-radius);left:calc(50% - var(--knob-size) / 2);top:calc(50% - var(--knob-size) / 2);position:absolute;width:var(--knob-size);height:var(--knob-size);background:var(--knob-background);-webkit-box-shadow:var(--knob-box-shadow);box-shadow:var(--knob-box-shadow);z-index:2;pointer-events:none}:host-context([dir=rtl]) .range-knob,[dir=rtl] .range-knob{right:unset;right:calc(50% - var(--knob-size) / 2);left:unset}:host(.range-pressed) .range-bar-active{will-change:left,right}:host(.in-item){width:100%}:host(.in-item) ::slotted(ion-label){-ms-flex-item-align:center;align-self:center}:host{--knob-border-radius:50%;--knob-background:#fff;--knob-box-shadow:0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02);--knob-size:28px;--bar-height:2px;--bar-background:rgba(var(--ion-text-color-rgb,0,0,0),0.1);--bar-background-active:var(--ion-color-primary,#3880ff);--bar-border-radius:0;--height:42px;padding-left:16px;padding-right:16px;padding-top:8px;padding-bottom:8px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}:host(.ion-color) .range-bar-active,:host(.ion-color) .range-tick-active{background:var(--ion-color-base)}::slotted([slot=start]){margin-left:0;margin-right:16px;margin-top:0;margin-bottom:0}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted([slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px}}::slotted([slot=end]){margin-left:16px;margin-right:0;margin-top:0;margin-bottom:0}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted([slot=end]){margin-left:unset;margin-right:unset;-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:0;margin-inline-end:0}}:host(.range-has-pin){padding-top:20px}.range-bar-active{bottom:0;width:auto;background:var(--bar-background-active)}.range-tick{margin-left:-1px;border-radius:0;position:absolute;top:18px;width:2px;height:8px;background:rgba(var(--ion-text-color-rgb,0,0,0),.1);pointer-events:none}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.range-tick{margin-left:unset;-webkit-margin-start:-1px;margin-inline-start:-1px}}.range-tick-active{background:var(--bar-background-active)}.range-pin{-webkit-transform:translate3d(0,28px,0) scale(.01);transform:translate3d(0,28px,0) scale(.01);padding-left:8px;padding-right:8px;padding-top:8px;padding-bottom:8px;display:inline-block;position:relative;top:-20px;min-width:28px;-webkit-transition:-webkit-transform .12s ease;transition:-webkit-transform .12s ease;transition:transform .12s ease;transition:transform .12s ease,-webkit-transform .12s ease;background:transparent;color:var(--ion-text-color,#000);font-size:12px;text-align:center}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.range-pin{padding-left:unset;padding-right:unset;-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px}}.range-knob-pressed .range-pin{-webkit-transform:translateZ(0) scale(1);transform:translateZ(0) scale(1)}:host(.range-disabled){opacity:.5}"; },
                    enumerable: true,
                    configurable: true
                });
                return class_1;
            }());
            var renderKnob = function (isRTL, _a) {
                var knob = _a.knob, value = _a.value, ratio = _a.ratio, min = _a.min, max = _a.max, disabled = _a.disabled, pressed = _a.pressed, pin = _a.pin, handleKeyboard = _a.handleKeyboard;
                var start = isRTL ? 'right' : 'left';
                var knobStyle = function () {
                    var style = {};
                    style[start] = ratio * 100 + "%";
                    return style;
                };
                return (Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { onKeyDown: function (ev) {
                        var key = ev.key;
                        if (key === 'ArrowLeft' || key === 'ArrowDown') {
                            handleKeyboard(knob, false);
                            ev.preventDefault();
                            ev.stopPropagation();
                        }
                        else if (key === 'ArrowRight' || key === 'ArrowUp') {
                            handleKeyboard(knob, true);
                            ev.preventDefault();
                            ev.stopPropagation();
                        }
                    }, class: {
                        'range-knob-handle': true,
                        'range-knob-a': knob === 'A',
                        'range-knob-b': knob === 'B',
                        'range-knob-pressed': pressed,
                        'range-knob-min': value === min,
                        'range-knob-max': value === max
                    }, style: knobStyle(), role: "slider", tabindex: disabled ? -1 : 0, "aria-valuemin": min, "aria-valuemax": max, "aria-disabled": disabled ? 'true' : null, "aria-valuenow": value }, pin && Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "range-pin", role: "presentation" }, Math.round(value)), Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "range-knob", role: "presentation" })));
            };
            var ratioToValue = function (ratio, min, max, step) {
                var value = (max - min) * ratio;
                if (step > 0) {
                    value = Math.round(value / step) * step + min;
                }
                return Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["c"])(min, value, max);
            };
            var valueToRatio = function (value, min, max) {
                return Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["c"])(0, (value - min) / (max - min), 1);
            };
            /***/ 
        })
    }]);
//# sourceMappingURL=48-es2015.js.map
//# sourceMappingURL=48-es5.js.map
//# sourceMappingURL=48-es5.js.map