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
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[57], {
        /***/ "./node_modules/@ionic/core/dist/esm/ion-searchbar-md.entry.js": 
        /*!*********************************************************************!*\
          !*** ./node_modules/@ionic/core/dist/esm/ion-searchbar-md.entry.js ***!
          \*********************************************************************/
        /*! exports provided: ion_searchbar */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_searchbar", function () { return Searchbar; });
            /* harmony import */ var _core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-ca0488fc.js */ "./node_modules/@ionic/core/dist/esm/core-ca0488fc.js");
            /* harmony import */ var _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config-3c7f3790.js */ "./node_modules/@ionic/core/dist/esm/config-3c7f3790.js");
            /* harmony import */ var _helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers-46f4a262.js */ "./node_modules/@ionic/core/dist/esm/helpers-46f4a262.js");
            /* harmony import */ var _theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./theme-18cbe2cc.js */ "./node_modules/@ionic/core/dist/esm/theme-18cbe2cc.js");
            /* harmony import */ var _index_3476b023_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index-3476b023.js */ "./node_modules/@ionic/core/dist/esm/index-3476b023.js");
            var Searchbar = /** @class */ (function () {
                function class_1(hostRef) {
                    var _this = this;
                    Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
                    this.isCancelVisible = false;
                    this.shouldAlignLeft = true;
                    this.focused = false;
                    this.noAnimate = true;
                    /**
                     * If `true`, enable searchbar animation.
                     */
                    this.animated = false;
                    /**
                     * Set the input's autocomplete property.
                     */
                    this.autocomplete = 'off';
                    /**
                     * Set the input's autocorrect property.
                     */
                    this.autocorrect = 'off';
                    /**
                     * Set the cancel button icon. Only applies to `md` mode.
                     */
                    this.cancelButtonIcon = 'md-arrow-back';
                    /**
                     * Set the the cancel button text. Only applies to `ios` mode.
                     */
                    this.cancelButtonText = 'Cancel';
                    /**
                     * Set the amount of time, in milliseconds, to wait to trigger the `ionChange` event after each keystroke.
                     */
                    this.debounce = 250;
                    /**
                     * If `true`, the user cannot interact with the input.
                     */
                    this.disabled = false;
                    /**
                     * A hint to the browser for which keyboard to display.
                     * Possible values: `"none"`, `"text"`, `"tel"`, `"url"`,
                     * `"email"`, `"numeric"`, `"decimal"`, and `"search"`.
                     */
                    this.inputmode = 'search';
                    /**
                     * Set the input's placeholder.
                     * `placeholder` can accept either plaintext or HTML as a string.
                     * To display characters normally reserved for HTML, they
                     * must be escaped. For example `<Ionic>` would become
                     * `&lt;Ionic&gt;`
                     *
                     * For more information: [Security Documentation](https://ionicframework.com/docs/faq/security)
                     */
                    this.placeholder = 'Search';
                    /**
                     * The icon to use as the search icon.
                     */
                    this.searchIcon = 'search';
                    /**
                     * Sets the behavior for the cancel button. Defaults to `"never"`.
                     * Setting to `"focus"` shows the cancel button on focus.
                     * Setting to `"never"` hides the cancel button.
                     * Setting to `"always"` shows the cancel button regardless
                     * of focus state.
                     */
                    this.showCancelButton = 'never';
                    /**
                     * If `true`, enable spellcheck on the input.
                     */
                    this.spellcheck = false;
                    /**
                     * Set the type of the input.
                     */
                    this.type = 'search';
                    /**
                     * the value of the searchbar.
                     */
                    this.value = '';
                    /**
                     * Clears the input field and triggers the control change.
                     */
                    this.onClearInput = function (ev) {
                        _this.ionClear.emit();
                        if (ev) {
                            ev.preventDefault();
                            ev.stopPropagation();
                        }
                        // setTimeout() fixes https://github.com/ionic-team/ionic/issues/7527
                        // wait for 4 frames
                        setTimeout(function () {
                            var value = _this.getValue();
                            if (value !== '') {
                                _this.value = '';
                                _this.ionInput.emit();
                            }
                        }, 16 * 4);
                    };
                    /**
                     * Clears the input field and tells the input to blur since
                     * the clearInput function doesn't want the input to blur
                     * then calls the custom cancel function if the user passed one in.
                     */
                    this.onCancelSearchbar = function (ev) {
                        if (ev) {
                            ev.preventDefault();
                            ev.stopPropagation();
                        }
                        _this.ionCancel.emit();
                        _this.onClearInput();
                        if (_this.nativeInput) {
                            _this.nativeInput.blur();
                        }
                    };
                    /**
                     * Update the Searchbar input value when the input changes
                     */
                    this.onInput = function (ev) {
                        var input = ev.target;
                        if (input) {
                            _this.value = input.value;
                        }
                        _this.ionInput.emit(ev);
                    };
                    /**
                     * Sets the Searchbar to not focused and checks if it should align left
                     * based on whether there is a value in the searchbar or not.
                     */
                    this.onBlur = function () {
                        _this.focused = false;
                        _this.ionBlur.emit();
                        _this.positionElements();
                    };
                    /**
                     * Sets the Searchbar to focused and active on input focus.
                     */
                    this.onFocus = function () {
                        _this.focused = true;
                        _this.ionFocus.emit();
                        _this.positionElements();
                    };
                    this.ionInput = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionInput", 7);
                    this.ionChange = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionChange", 7);
                    this.ionCancel = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionCancel", 7);
                    this.ionClear = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionClear", 7);
                    this.ionBlur = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionBlur", 7);
                    this.ionFocus = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionFocus", 7);
                    this.ionStyle = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionStyle", 7);
                }
                class_1.prototype.debounceChanged = function () {
                    this.ionChange = Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["d"])(this.ionChange, this.debounce);
                };
                class_1.prototype.valueChanged = function () {
                    var inputEl = this.nativeInput;
                    var value = this.getValue();
                    if (inputEl && inputEl.value !== value) {
                        inputEl.value = value;
                    }
                    this.ionChange.emit({ value: value });
                };
                class_1.prototype.showCancelButtonChanged = function () {
                    var _this = this;
                    requestAnimationFrame(function () {
                        _this.positionElements();
                        _this.el.forceUpdate();
                    });
                };
                class_1.prototype.connectedCallback = function () {
                    this.emitStyle();
                };
                class_1.prototype.componentDidLoad = function () {
                    var _this = this;
                    if (this.showCancelButton === 'false' || this.showCancelButton === false) {
                        console.warn('The boolean values of showCancelButton are deprecated. Please use "never" instead of "false".');
                    }
                    if (this.showCancelButton === '' || this.showCancelButton === 'true' || this.showCancelButton === true) {
                        console.warn('The boolean values of showCancelButton are deprecated. Please use "focus" instead of "true".');
                    }
                    this.positionElements();
                    this.debounceChanged();
                    setTimeout(function () {
                        _this.noAnimate = false;
                    }, 300);
                };
                class_1.prototype.emitStyle = function () {
                    this.ionStyle.emit({
                        'searchbar': true
                    });
                };
                /**
                 * Sets focus on the specified `ion-searchbar`. Use this method instead of the global
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
                 * Returns the native `<input>` element used under the hood.
                 */
                class_1.prototype.getInputElement = function () {
                    return Promise.resolve(this.nativeInput);
                };
                /**
                 * Positions the input search icon, placeholder, and the cancel button
                 * based on the input value and if it is focused. (ios only)
                 */
                class_1.prototype.positionElements = function () {
                    var value = this.getValue();
                    var prevAlignLeft = this.shouldAlignLeft;
                    var mode = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
                    var shouldAlignLeft = (!this.animated || value.trim() !== '' || !!this.focused);
                    this.shouldAlignLeft = shouldAlignLeft;
                    if (mode !== 'ios') {
                        return;
                    }
                    if (prevAlignLeft !== shouldAlignLeft) {
                        this.positionPlaceholder();
                    }
                    if (this.animated) {
                        this.positionCancelButton();
                    }
                };
                /**
                 * Positions the input placeholder
                 */
                class_1.prototype.positionPlaceholder = function () {
                    var inputEl = this.nativeInput;
                    if (!inputEl) {
                        return;
                    }
                    var isRTL = document.dir === 'rtl';
                    var iconEl = (this.el.shadowRoot || this.el).querySelector('.searchbar-search-icon');
                    if (this.shouldAlignLeft) {
                        inputEl.removeAttribute('style');
                        iconEl.removeAttribute('style');
                    }
                    else {
                        // Create a dummy span to get the placeholder width
                        var doc = document;
                        var tempSpan = doc.createElement('span');
                        tempSpan.innerHTML = Object(_index_3476b023_js__WEBPACK_IMPORTED_MODULE_4__["s"])(this.placeholder) || '';
                        doc.body.appendChild(tempSpan);
                        // Get the width of the span then remove it
                        var textWidth = tempSpan.offsetWidth;
                        tempSpan.remove();
                        // Calculate the input padding
                        var inputLeft = 'calc(50% - ' + (textWidth / 2) + 'px)';
                        // Calculate the icon margin
                        var iconLeft = 'calc(50% - ' + ((textWidth / 2) + 30) + 'px)';
                        // Set the input padding start and icon margin start
                        if (isRTL) {
                            inputEl.style.paddingRight = inputLeft;
                            iconEl.style.marginRight = iconLeft;
                        }
                        else {
                            inputEl.style.paddingLeft = inputLeft;
                            iconEl.style.marginLeft = iconLeft;
                        }
                    }
                };
                /**
                 * Show the iOS Cancel button on focus, hide it offscreen otherwise
                 */
                class_1.prototype.positionCancelButton = function () {
                    var isRTL = document.dir === 'rtl';
                    var cancelButton = (this.el.shadowRoot || this.el).querySelector('.searchbar-cancel-button');
                    var shouldShowCancel = this.shouldShowCancelButton();
                    if (cancelButton && shouldShowCancel !== this.isCancelVisible) {
                        var cancelStyle = cancelButton.style;
                        this.isCancelVisible = shouldShowCancel;
                        if (shouldShowCancel) {
                            if (isRTL) {
                                cancelStyle.marginLeft = '0';
                            }
                            else {
                                cancelStyle.marginRight = '0';
                            }
                        }
                        else {
                            var offset = cancelButton.offsetWidth;
                            if (offset > 0) {
                                if (isRTL) {
                                    cancelStyle.marginLeft = -offset + 'px';
                                }
                                else {
                                    cancelStyle.marginRight = -offset + 'px';
                                }
                            }
                        }
                    }
                };
                class_1.prototype.getValue = function () {
                    return this.value || '';
                };
                class_1.prototype.hasValue = function () {
                    return this.getValue() !== '';
                };
                /**
                 * Determines whether or not the cancel button should be visible onscreen.
                 * Cancel button should be shown if one of two conditions applies:
                 * 1. `showCancelButton` is set to `always`.
                 * 2. `showCancelButton` is set to `focus`, and the searchbar has been focused.
                 */
                class_1.prototype.shouldShowCancelButton = function () {
                    if (isCancelButtonSetToNever(this.showCancelButton) ||
                        (isCancelButtonSetToFocus(this.showCancelButton) && !this.focused)) {
                        return false;
                    }
                    return true;
                };
                class_1.prototype.render = function () {
                    var _this = this;
                    var _a;
                    var animated = this.animated && _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__["b"].getBoolean('animated', true);
                    var mode = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
                    var clearIcon = this.clearIcon || (mode === 'ios' ? 'ios-close-circle' : 'md-close');
                    var searchIcon = this.searchIcon;
                    var cancelButton = !isCancelButtonSetToNever(this.showCancelButton) && (Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", { "aria-label": "cancel", type: "button", tabIndex: mode === 'ios' && !this.shouldShowCancelButton() ? -1 : undefined, onMouseDown: this.onCancelSearchbar, onTouchStart: this.onCancelSearchbar, class: "searchbar-cancel-button" }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, mode === 'md'
                        ? Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-icon", { "aria-hidden": "true", mode: mode, icon: this.cancelButtonIcon, lazy: false })
                        : this.cancelButtonText)));
                    return (Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["H"], { role: "search", "aria-disabled": this.disabled ? 'true' : null, class: Object.assign(Object.assign({}, Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_3__["c"])(this.color)), (_a = {}, _a[mode] = true, _a['searchbar-animated'] = animated, _a['searchbar-disabled'] = this.disabled, _a['searchbar-no-animate'] = animated && this.noAnimate, _a['searchbar-has-value'] = this.hasValue(), _a['searchbar-left-aligned'] = this.shouldAlignLeft, _a['searchbar-has-focus'] = this.focused, _a['searchbar-should-show-cancel'] = this.shouldShowCancelButton(), _a)) }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "searchbar-input-container" }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("input", { "aria-label": "search text", disabled: this.disabled, ref: function (el) { return _this.nativeInput = el; }, class: "searchbar-input", inputMode: this.inputmode, onInput: this.onInput, onBlur: this.onBlur, onFocus: this.onFocus, placeholder: this.placeholder, type: this.type, value: this.getValue(), autoComplete: this.autocomplete, autoCorrect: this.autocorrect, spellCheck: this.spellcheck }), mode === 'md' && cancelButton, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-icon", { mode: mode, icon: searchIcon, lazy: false, class: "searchbar-search-icon" }), Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", { "aria-label": "reset", type: "button", "no-blur": true, class: "searchbar-clear-button", onMouseDown: this.onClearInput, onTouchStart: this.onClearInput }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-icon", { "aria-hidden": "true", mode: mode, icon: clearIcon, lazy: false, class: "searchbar-clear-icon" }))), mode === 'ios' && cancelButton));
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
                            "value": ["valueChanged"],
                            "showCancelButton": ["showCancelButtonChanged"]
                        };
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(class_1, "style", {
                    get: function () { return ".sc-ion-searchbar-md-h{--placeholder-color:initial;--placeholder-font-style:initial;--placeholder-font-weight:initial;--placeholder-opacity:.5;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;width:100%;color:var(--color);font-family:var(--ion-font-family,inherit);-webkit-box-sizing:border-box;box-sizing:border-box}.ion-color.sc-ion-searchbar-md-h{color:var(--ion-color-contrast)}.ion-color.sc-ion-searchbar-md-h .searchbar-input.sc-ion-searchbar-md{background:var(--ion-color-base)}.ion-color.sc-ion-searchbar-md-h .searchbar-cancel-button.sc-ion-searchbar-md, .ion-color.sc-ion-searchbar-md-h .searchbar-clear-button.sc-ion-searchbar-md, .ion-color.sc-ion-searchbar-md-h .searchbar-search-icon.sc-ion-searchbar-md{color:inherit}.searchbar-search-icon.sc-ion-searchbar-md{color:var(--icon-color);pointer-events:none}.searchbar-input-container.sc-ion-searchbar-md{display:block;position:relative;-ms-flex-negative:1;flex-shrink:1;width:100%}.searchbar-input.sc-ion-searchbar-md{font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;-webkit-box-sizing:border-box;box-sizing:border-box;display:block;width:100%;border:0;outline:none;background:var(--background);font-family:inherit;-webkit-appearance:none;-moz-appearance:none;appearance:none}.searchbar-input.sc-ion-searchbar-md::-webkit-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-md::-moz-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-md:-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-md::-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-md::placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-md::-ms-clear, .searchbar-input.sc-ion-searchbar-md::-webkit-search-cancel-button{display:none}.searchbar-cancel-button.sc-ion-searchbar-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:none;height:100%;border:0;outline:none;color:var(--cancel-button-color);cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none}.searchbar-cancel-button.sc-ion-searchbar-md > div.sc-ion-searchbar-md{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}.searchbar-clear-button.sc-ion-searchbar-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:none;min-height:0;outline:none;color:var(--clear-button-color);-webkit-appearance:none;-moz-appearance:none;appearance:none}.searchbar-has-value.searchbar-has-focus.sc-ion-searchbar-md-h .searchbar-clear-button.sc-ion-searchbar-md{display:block}.searchbar-disabled.sc-ion-searchbar-md-h{cursor:default;opacity:.4;pointer-events:none}.sc-ion-searchbar-md-h{--clear-button-color:initial;--cancel-button-color:var(--ion-color-step-900,#1a1a1a);--color:var(--ion-color-step-850,#262626);--icon-color:var(--ion-color-step-600,#666);--background:var(--ion-background-color,#fff);padding-left:8px;padding-right:8px;padding-top:8px;padding-bottom:8px;background:inherit}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-searchbar-md-h{padding-left:unset;padding-right:unset;-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px}}.searchbar-search-icon.sc-ion-searchbar-md{left:16px;top:11px;width:21px;height:21px}[dir=rtl].sc-ion-searchbar-md-h .searchbar-search-icon.sc-ion-searchbar-md, [dir=rtl] .sc-ion-searchbar-md-h .searchbar-search-icon.sc-ion-searchbar-md, [dir=rtl].sc-ion-searchbar-md .searchbar-search-icon.sc-ion-searchbar-md{left:unset;right:unset;right:16px}.searchbar-cancel-button.sc-ion-searchbar-md{left:5px;top:0;background-color:transparent;font-size:1.6em}[dir=rtl].sc-ion-searchbar-md-h .searchbar-cancel-button.sc-ion-searchbar-md, [dir=rtl] .sc-ion-searchbar-md-h .searchbar-cancel-button.sc-ion-searchbar-md, [dir=rtl].sc-ion-searchbar-md .searchbar-cancel-button.sc-ion-searchbar-md{left:unset;right:unset;right:5px}.searchbar-cancel-button.sc-ion-searchbar-md, .searchbar-search-icon.sc-ion-searchbar-md{position:absolute}.searchbar-cancel-button.activated.sc-ion-searchbar-md, .searchbar-search-icon.activated.sc-ion-searchbar-md{background-color:transparent}.searchbar-input.sc-ion-searchbar-md{padding-left:55px;padding-right:55px;padding-top:6px;padding-bottom:6px;border-radius:2px;background-position:left 8px center;height:auto;font-size:16px;font-weight:400;line-height:30px;-webkit-box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12);box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12)}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.searchbar-input.sc-ion-searchbar-md{padding-left:unset;padding-right:unset;-webkit-padding-start:55px;padding-inline-start:55px;-webkit-padding-end:55px;padding-inline-end:55px}}[dir=rtl].sc-ion-searchbar-md-h .searchbar-input.sc-ion-searchbar-md, [dir=rtl] .sc-ion-searchbar-md-h .searchbar-input.sc-ion-searchbar-md, [dir=rtl].sc-ion-searchbar-md .searchbar-input.sc-ion-searchbar-md{background-position:right 8px center}.searchbar-clear-button.sc-ion-searchbar-md{right:13px;top:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;position:absolute;height:100%;border:0;background-color:transparent}[dir=rtl].sc-ion-searchbar-md-h .searchbar-clear-button.sc-ion-searchbar-md, [dir=rtl] .sc-ion-searchbar-md-h .searchbar-clear-button.sc-ion-searchbar-md, [dir=rtl].sc-ion-searchbar-md .searchbar-clear-button.sc-ion-searchbar-md{left:unset;right:unset;left:13px}.searchbar-clear-button.activated.sc-ion-searchbar-md{background-color:transparent}.searchbar-clear-icon.sc-ion-searchbar-md{width:22px;height:100%}.searchbar-has-focus.sc-ion-searchbar-md-h .searchbar-cancel-button.sc-ion-searchbar-md, .searchbar-has-focus.sc-ion-searchbar-md-h .searchbar-search-icon.sc-ion-searchbar-md, .searchbar-should-show-cancel.sc-ion-searchbar-md-h .searchbar-cancel-button.sc-ion-searchbar-md{display:block}.searchbar-has-focus.sc-ion-searchbar-md-h .searchbar-cancel-button.sc-ion-searchbar-md + .searchbar-search-icon.sc-ion-searchbar-md, .searchbar-should-show-cancel.sc-ion-searchbar-md-h .searchbar-cancel-button.sc-ion-searchbar-md + .searchbar-search-icon.sc-ion-searchbar-md{display:none}ion-toolbar.sc-ion-searchbar-md-h, ion-toolbar .sc-ion-searchbar-md-h{padding-left:7px;padding-right:7px;padding-top:3px;padding-bottom:3px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){ion-toolbar.sc-ion-searchbar-md-h, ion-toolbar .sc-ion-searchbar-md-h{padding-left:unset;padding-right:unset;-webkit-padding-start:7px;padding-inline-start:7px;-webkit-padding-end:7px;padding-inline-end:7px}}"; },
                    enumerable: true,
                    configurable: true
                });
                return class_1;
            }());
            /**
             * Check if the cancel button should never be shown.
             *
             * TODO: Remove this when the `true` and `false`
             * options are removed.
             */
            var isCancelButtonSetToNever = function (showCancelButton) {
                return (showCancelButton === 'never' ||
                    showCancelButton === 'false' ||
                    showCancelButton === false);
            };
            /**
             * Check if the cancel button should be shown on focus.
             *
             * TODO: Remove this when the `true` and `false`
             * options are removed.
             */
            var isCancelButtonSetToFocus = function (showCancelButton) {
                return (showCancelButton === 'focus' ||
                    showCancelButton === 'true' ||
                    showCancelButton === true ||
                    showCancelButton === '');
            };
            /***/ 
        })
    }]);
//# sourceMappingURL=57-es2015.js.map
//# sourceMappingURL=57-es5.js.map
//# sourceMappingURL=57-es5.js.map