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
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[71], {
        /***/ "./node_modules/@ionic/core/dist/esm/ion-textarea-ios.entry.js": 
        /*!*********************************************************************!*\
          !*** ./node_modules/@ionic/core/dist/esm/ion-textarea-ios.entry.js ***!
          \*********************************************************************/
        /*! exports provided: ion_textarea */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_textarea", function () { return Textarea; });
            /* harmony import */ var _core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-ca0488fc.js */ "./node_modules/@ionic/core/dist/esm/core-ca0488fc.js");
            /* harmony import */ var _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config-3c7f3790.js */ "./node_modules/@ionic/core/dist/esm/config-3c7f3790.js");
            /* harmony import */ var _helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers-46f4a262.js */ "./node_modules/@ionic/core/dist/esm/helpers-46f4a262.js");
            /* harmony import */ var _theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./theme-18cbe2cc.js */ "./node_modules/@ionic/core/dist/esm/theme-18cbe2cc.js");
            var Textarea = /** @class */ (function () {
                function class_1(hostRef) {
                    var _this = this;
                    Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
                    this.inputId = "ion-input-" + textareaIds++;
                    this.didBlurAfterEdit = false;
                    this.hasFocus = false;
                    /**
                     * Indicates whether and how the text value should be automatically capitalized as it is entered/edited by the user.
                     */
                    this.autocapitalize = 'none';
                    /**
                     * This Boolean attribute lets you specify that a form control should have input focus when the page loads.
                     */
                    this.autofocus = false;
                    /**
                     * If `true`, the value will be cleared after focus upon edit. Defaults to `true` when `type` is `"password"`, `false` for all other types.
                     */
                    this.clearOnEdit = false;
                    /**
                     * Set the amount of time, in milliseconds, to wait to trigger the `ionChange` event after each keystroke.
                     */
                    this.debounce = 0;
                    /**
                     * If `true`, the user cannot interact with the textarea.
                     */
                    this.disabled = false;
                    /**
                     * The name of the control, which is submitted with the form data.
                     */
                    this.name = this.inputId;
                    /**
                     * If `true`, the user cannot modify the value.
                     */
                    this.readonly = false;
                    /**
                     * If `true`, the user must fill in a value before submitting a form.
                     */
                    this.required = false;
                    /**
                     * If `true`, the element will have its spelling and grammar checked.
                     */
                    this.spellcheck = false;
                    /**
                     * If `true`, the element height will increase based on the value.
                     */
                    this.autoGrow = false;
                    /**
                     * The value of the textarea.
                     */
                    this.value = '';
                    this.onInput = function (ev) {
                        if (_this.nativeInput) {
                            _this.value = _this.nativeInput.value;
                        }
                        _this.emitStyle();
                        _this.ionInput.emit(ev);
                    };
                    this.onFocus = function () {
                        _this.hasFocus = true;
                        _this.focusChange();
                        _this.ionFocus.emit();
                    };
                    this.onBlur = function () {
                        _this.hasFocus = false;
                        _this.focusChange();
                        _this.ionBlur.emit();
                    };
                    this.onKeyDown = function () {
                        _this.checkClearOnEdit();
                    };
                    this.ionChange = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionChange", 7);
                    this.ionInput = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionInput", 7);
                    this.ionStyle = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionStyle", 7);
                    this.ionBlur = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionBlur", 7);
                    this.ionFocus = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionFocus", 7);
                }
                class_1.prototype.debounceChanged = function () {
                    this.ionChange = Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["d"])(this.ionChange, this.debounce);
                };
                class_1.prototype.disabledChanged = function () {
                    this.emitStyle();
                };
                /**
                 * Update the native input element when the value changes
                 */
                class_1.prototype.valueChanged = function () {
                    var nativeInput = this.nativeInput;
                    var value = this.getValue();
                    if (nativeInput && nativeInput.value !== value) {
                        nativeInput.value = value;
                    }
                    this.runAutoGrow();
                    this.emitStyle();
                    this.ionChange.emit({ value: value });
                };
                class_1.prototype.connectedCallback = function () {
                    this.emitStyle();
                    this.debounceChanged();
                    {
                        this.el.dispatchEvent(new CustomEvent('ionInputDidLoad', {
                            detail: this.el
                        }));
                    }
                };
                class_1.prototype.disconnectedCallback = function () {
                    {
                        document.dispatchEvent(new CustomEvent('ionInputDidUnload', {
                            detail: this.el
                        }));
                    }
                };
                class_1.prototype.componentDidLoad = function () {
                    this.runAutoGrow();
                };
                // TODO: performance hit, this cause layout thrashing
                class_1.prototype.runAutoGrow = function () {
                    var nativeInput = this.nativeInput;
                    if (nativeInput && this.autoGrow) {
                        Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["f"])(function () {
                            nativeInput.style.height = 'inherit';
                            nativeInput.style.height = nativeInput.scrollHeight + 'px';
                        });
                    }
                };
                /**
                 * Sets focus on the specified `ion-textarea`. Use this method instead of the global
                 * `input.focus()`.
                 */
                class_1.prototype.setFocus = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            if (this.nativeInput) {
                                this.nativeInput.focus();
                            }
                            return [2 /*return*/];
                        });
                    });
                };
                /**
                 * Returns the native `<textarea>` element used under the hood.
                 */
                class_1.prototype.getInputElement = function () {
                    return Promise.resolve(this.nativeInput);
                };
                class_1.prototype.emitStyle = function () {
                    this.ionStyle.emit({
                        'interactive': true,
                        'textarea': true,
                        'input': true,
                        'interactive-disabled': this.disabled,
                        'has-placeholder': this.placeholder != null,
                        'has-value': this.hasValue(),
                        'has-focus': this.hasFocus
                    });
                };
                /**
                 * Check if we need to clear the text input if clearOnEdit is enabled
                 */
                class_1.prototype.checkClearOnEdit = function () {
                    if (!this.clearOnEdit) {
                        return;
                    }
                    // Did the input value change after it was blurred and edited?
                    if (this.didBlurAfterEdit && this.hasValue()) {
                        // Clear the input
                        this.value = '';
                    }
                    // Reset the flag
                    this.didBlurAfterEdit = false;
                };
                class_1.prototype.focusChange = function () {
                    // If clearOnEdit is enabled and the input blurred but has a value, set a flag
                    if (this.clearOnEdit && !this.hasFocus && this.hasValue()) {
                        this.didBlurAfterEdit = true;
                    }
                    this.emitStyle();
                };
                class_1.prototype.hasValue = function () {
                    return this.getValue() !== '';
                };
                class_1.prototype.getValue = function () {
                    return this.value || '';
                };
                class_1.prototype.render = function () {
                    var _this = this;
                    var _a;
                    var mode = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
                    var value = this.getValue();
                    var labelId = this.inputId + '-lbl';
                    var label = Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["f"])(this.el);
                    if (label) {
                        label.id = labelId;
                    }
                    return (Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["H"], { "aria-disabled": this.disabled ? 'true' : null, class: Object.assign(Object.assign({}, Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_3__["c"])(this.color)), (_a = {}, _a[mode] = true, _a)) }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("textarea", { class: "native-textarea", ref: function (el) { return _this.nativeInput = el; }, autoCapitalize: this.autocapitalize, autoFocus: this.autofocus, disabled: this.disabled, maxLength: this.maxlength, minLength: this.minlength, name: this.name, placeholder: this.placeholder || '', readOnly: this.readonly, required: this.required, spellCheck: this.spellcheck, cols: this.cols, rows: this.rows, wrap: this.wrap, onInput: this.onInput, onBlur: this.onBlur, onFocus: this.onFocus, onKeyDown: this.onKeyDown }, value)));
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
                            "disabled": ["disabledChanged"],
                            "value": ["valueChanged"]
                        };
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(class_1, "style", {
                    get: function () { return ".sc-ion-textarea-ios-h{--background:initial;--color:initial;--placeholder-color:initial;--placeholder-font-style:initial;--placeholder-font-weight:initial;--placeholder-opacity:.5;--padding-top:0;--padding-end:0;--padding-bottom:0;--border-radius:0;display:block;position:relative;-ms-flex:1;flex:1;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;background:var(--background);color:var(--color);font-family:var(--ion-font-family,inherit);white-space:pre-wrap;z-index:2}.ion-color.sc-ion-textarea-ios-h{background:initial;color:var(--ion-color-base)}ion-item.sc-ion-textarea-ios-h, ion-item .sc-ion-textarea-ios-h{-ms-flex-item-align:baseline;align-self:baseline}ion-item.sc-ion-textarea-ios-h:not(.item-label), ion-item:not(.item-label) .sc-ion-textarea-ios-h{--padding-start:0}.native-textarea.sc-ion-textarea-ios{border-radius:var(--border-radius);margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:block;width:100%;max-width:100%;max-height:100%;border:0;outline:none;background:transparent;-webkit-box-sizing:border-box;box-sizing:border-box;resize:none;-webkit-appearance:none;-moz-appearance:none;appearance:none}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.native-textarea.sc-ion-textarea-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.native-textarea.sc-ion-textarea-ios::-webkit-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea.sc-ion-textarea-ios::-moz-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea.sc-ion-textarea-ios:-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea.sc-ion-textarea-ios::-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea.sc-ion-textarea-ios::placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea[disabled].sc-ion-textarea-ios{opacity:.4}.cloned-input.sc-ion-textarea-ios{left:0;top:0;position:absolute;pointer-events:none}[dir=rtl].sc-ion-textarea-ios-h .cloned-input.sc-ion-textarea-ios, [dir=rtl] .sc-ion-textarea-ios-h .cloned-input.sc-ion-textarea-ios, [dir=rtl].sc-ion-textarea-ios .cloned-input.sc-ion-textarea-ios{left:unset;right:unset;right:0}.sc-ion-textarea-ios-h{--padding-top:10px;--padding-end:8px;--padding-bottom:10px;--padding-start:0;font-size:inherit}.item-label-floating.sc-ion-textarea-ios-h, .item-label-floating .sc-ion-textarea-ios-h, .item-label-stacked.sc-ion-textarea-ios-h, .item-label-stacked .sc-ion-textarea-ios-h{--padding-top:8px;--padding-bottom:8px;--padding-start:0px}"; },
                    enumerable: true,
                    configurable: true
                });
                return class_1;
            }());
            var textareaIds = 0;
            /***/ 
        })
    }]);
//# sourceMappingURL=71-es2015.js.map
//# sourceMappingURL=71-es5.js.map
//# sourceMappingURL=71-es5.js.map