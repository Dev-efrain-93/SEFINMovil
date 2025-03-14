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
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4], {
        /***/ "./node_modules/@ionic/core/dist/esm/ion-alert-md.entry.js": 
        /*!*****************************************************************!*\
          !*** ./node_modules/@ionic/core/dist/esm/ion-alert-md.entry.js ***!
          \*****************************************************************/
        /*! exports provided: ion_alert */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_alert", function () { return Alert; });
            /* harmony import */ var _core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-ca0488fc.js */ "./node_modules/@ionic/core/dist/esm/core-ca0488fc.js");
            /* harmony import */ var _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config-3c7f3790.js */ "./node_modules/@ionic/core/dist/esm/config-3c7f3790.js");
            /* harmony import */ var _helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers-46f4a262.js */ "./node_modules/@ionic/core/dist/esm/helpers-46f4a262.js");
            /* harmony import */ var _animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./animation-af478fe9.js */ "./node_modules/@ionic/core/dist/esm/animation-af478fe9.js");
            /* harmony import */ var _overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./overlays-10640d86.js */ "./node_modules/@ionic/core/dist/esm/overlays-10640d86.js");
            /* harmony import */ var _theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./theme-18cbe2cc.js */ "./node_modules/@ionic/core/dist/esm/theme-18cbe2cc.js");
            /* harmony import */ var _index_3476b023_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index-3476b023.js */ "./node_modules/@ionic/core/dist/esm/index-3476b023.js");
            /**
             * iOS Alert Enter Animation
             */
            var iosEnterAnimation = function (baseEl) {
                var baseAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
                var backdropAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
                var wrapperAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
                backdropAnimation
                    .addElement(baseEl.querySelector('ion-backdrop'))
                    .fromTo('opacity', 0.01, 0.3);
                wrapperAnimation
                    .addElement(baseEl.querySelector('.alert-wrapper'))
                    .keyframes([
                    { offset: 0, opacity: '0.01', transform: 'scale(1.1)' },
                    { offset: 1, opacity: '1', transform: 'scale(1)' }
                ]);
                return baseAnimation
                    .addElement(baseEl)
                    .easing('ease-in-out')
                    .duration(200)
                    .addAnimation([backdropAnimation, wrapperAnimation]);
            };
            /**
             * iOS Alert Leave Animation
             */
            var iosLeaveAnimation = function (baseEl) {
                var baseAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
                var backdropAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
                var wrapperAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
                backdropAnimation
                    .addElement(baseEl.querySelector('ion-backdrop'))
                    .fromTo('opacity', 0.3, 0);
                wrapperAnimation
                    .addElement(baseEl.querySelector('.alert-wrapper'))
                    .keyframes([
                    { offset: 0, opacity: 0.99, transform: 'scale(1)' },
                    { offset: 1, opacity: 0, transform: 'scale(0.9)' }
                ]);
                return baseAnimation
                    .addElement(baseEl)
                    .easing('ease-in-out')
                    .duration(200)
                    .addAnimation([backdropAnimation, wrapperAnimation]);
            };
            /**
             * Md Alert Enter Animation
             */
            var mdEnterAnimation = function (baseEl) {
                var baseAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
                var backdropAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
                var wrapperAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
                backdropAnimation
                    .addElement(baseEl.querySelector('ion-backdrop'))
                    .fromTo('opacity', 0.01, 0.32);
                wrapperAnimation
                    .addElement(baseEl.querySelector('.alert-wrapper'))
                    .keyframes([
                    { offset: 0, opacity: '0.01', transform: 'scale(0.9)' },
                    { offset: 1, opacity: '1', transform: 'scale(1)' }
                ]);
                return baseAnimation
                    .addElement(baseEl)
                    .easing('ease-in-out')
                    .duration(150)
                    .addAnimation([backdropAnimation, wrapperAnimation]);
            };
            /**
             * Md Alert Leave Animation
             */
            var mdLeaveAnimation = function (baseEl) {
                var baseAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
                var backdropAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
                var wrapperAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
                backdropAnimation
                    .addElement(baseEl.querySelector('ion-backdrop'))
                    .fromTo('opacity', 0.32, 0);
                wrapperAnimation
                    .addElement(baseEl.querySelector('.alert-wrapper'))
                    .fromTo('opacity', 0.99, 0);
                return baseAnimation
                    .addElement(baseEl)
                    .easing('ease-in-out')
                    .duration(150)
                    .addAnimation([backdropAnimation, wrapperAnimation]);
            };
            var Alert = /** @class */ (function () {
                function class_1(hostRef) {
                    var _this = this;
                    Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
                    this.processedInputs = [];
                    this.processedButtons = [];
                    this.presented = false;
                    this.mode = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
                    /**
                     * If `true`, the keyboard will be automatically dismissed when the overlay is presented.
                     */
                    this.keyboardClose = true;
                    /**
                     * Array of buttons to be added to the alert.
                     */
                    this.buttons = [];
                    /**
                     * Array of input to show in the alert.
                     */
                    this.inputs = [];
                    /**
                     * If `true`, the alert will be dismissed when the backdrop is clicked.
                     */
                    this.backdropDismiss = true;
                    /**
                     * If `true`, the alert will be translucent.
                     * Only applies when the mode is `"ios"` and the device supports
                     * [`backdrop-filter`](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#Browser_compatibility).
                     */
                    this.translucent = false;
                    /**
                     * If `true`, the alert will animate.
                     */
                    this.animated = true;
                    this.onBackdropTap = function () {
                        _this.dismiss(undefined, _overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_4__["B"]);
                    };
                    this.dispatchCancelHandler = function (ev) {
                        var role = ev.detail.role;
                        if (Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_4__["i"])(role)) {
                            var cancelButton = _this.processedButtons.find(function (b) { return b.role === 'cancel'; });
                            _this.callButtonHandler(cancelButton);
                        }
                    };
                    Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_4__["d"])(this.el);
                    this.didPresent = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionAlertDidPresent", 7);
                    this.willPresent = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionAlertWillPresent", 7);
                    this.willDismiss = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionAlertWillDismiss", 7);
                    this.didDismiss = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionAlertDidDismiss", 7);
                }
                class_1.prototype.buttonsChanged = function () {
                    var buttons = this.buttons;
                    this.processedButtons = buttons.map(function (btn) {
                        return (typeof btn === 'string')
                            ? { text: btn, role: btn.toLowerCase() === 'cancel' ? 'cancel' : undefined }
                            : btn;
                    });
                };
                class_1.prototype.inputsChanged = function () {
                    var _this = this;
                    var inputs = this.inputs;
                    // An alert can be created with several different inputs. Radios,
                    // checkboxes and inputs are all accepted, but they cannot be mixed.
                    var inputTypes = new Set(inputs.map(function (i) { return i.type; }));
                    if (inputTypes.has('checkbox') && inputTypes.has('radio')) {
                        console.warn("Alert cannot mix input types: " + (Array.from(inputTypes.values()).join('/')) + ". Please see alert docs for more info.");
                    }
                    this.inputType = inputTypes.values().next().value;
                    this.processedInputs = inputs.map(function (i, index) { return ({
                        type: i.type || 'text',
                        name: i.name || "" + index,
                        placeholder: i.placeholder || '',
                        value: i.value,
                        label: i.label,
                        checked: !!i.checked,
                        disabled: !!i.disabled,
                        id: i.id || "alert-input-" + _this.overlayIndex + "-" + index,
                        handler: i.handler,
                        min: i.min,
                        max: i.max
                    }); });
                };
                class_1.prototype.componentWillLoad = function () {
                    this.inputsChanged();
                    this.buttonsChanged();
                };
                /**
                 * Present the alert overlay after it has been created.
                 */
                class_1.prototype.present = function () {
                    return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_4__["e"])(this, 'alertEnter', iosEnterAnimation, mdEnterAnimation);
                };
                /**
                 * Dismiss the alert overlay after it has been presented.
                 *
                 * @param data Any data to emit in the dismiss events.
                 * @param role The role of the element that is dismissing the alert.
                 * This can be useful in a button handler for determining which button was
                 * clicked to dismiss the alert.
                 * Some examples include: ``"cancel"`, `"destructive"`, "selected"`, and `"backdrop"`.
                 */
                class_1.prototype.dismiss = function (data, role) {
                    return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_4__["f"])(this, data, role, 'alertLeave', iosLeaveAnimation, mdLeaveAnimation);
                };
                /**
                 * Returns a promise that resolves when the alert did dismiss.
                 */
                class_1.prototype.onDidDismiss = function () {
                    return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_4__["g"])(this.el, 'ionAlertDidDismiss');
                };
                /**
                 * Returns a promise that resolves when the alert will dismiss.
                 */
                class_1.prototype.onWillDismiss = function () {
                    return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_4__["g"])(this.el, 'ionAlertWillDismiss');
                };
                class_1.prototype.rbClick = function (selectedInput) {
                    var e_1, _a;
                    try {
                        for (var _b = __values(this.processedInputs), _c = _b.next(); !_c.done; _c = _b.next()) {
                            var input = _c.value;
                            input.checked = input === selectedInput;
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                    this.activeId = selectedInput.id;
                    Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_4__["s"])(selectedInput.handler, selectedInput);
                    this.el.forceUpdate();
                };
                class_1.prototype.cbClick = function (selectedInput) {
                    selectedInput.checked = !selectedInput.checked;
                    Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_4__["s"])(selectedInput.handler, selectedInput);
                    this.el.forceUpdate();
                };
                class_1.prototype.buttonClick = function (button) {
                    var role = button.role;
                    var values = this.getValues();
                    if (Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_4__["i"])(role)) {
                        return this.dismiss({ values: values }, role);
                    }
                    var returnData = this.callButtonHandler(button, values);
                    if (returnData !== false) {
                        return this.dismiss(Object.assign({ values: values }, returnData), button.role);
                    }
                    return Promise.resolve(false);
                };
                class_1.prototype.callButtonHandler = function (button, data) {
                    if (button && button.handler) {
                        // a handler has been provided, execute it
                        // pass the handler the values from the inputs
                        var returnData = Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_4__["s"])(button.handler, data);
                        if (returnData === false) {
                            // if the return value of the handler is false then do not dismiss
                            return false;
                        }
                        if (typeof returnData === 'object') {
                            return returnData;
                        }
                    }
                    return {};
                };
                class_1.prototype.getValues = function () {
                    if (this.processedInputs.length === 0) {
                        // this is an alert without any options/inputs at all
                        return undefined;
                    }
                    if (this.inputType === 'radio') {
                        // this is an alert with radio buttons (single value select)
                        // return the one value which is checked, otherwise undefined
                        var checkedInput = this.processedInputs.find(function (i) { return !!i.checked; });
                        return checkedInput ? checkedInput.value : undefined;
                    }
                    if (this.inputType === 'checkbox') {
                        // this is an alert with checkboxes (multiple value select)
                        // return an array of all the checked values
                        return this.processedInputs.filter(function (i) { return i.checked; }).map(function (i) { return i.value; });
                    }
                    // this is an alert with text inputs
                    // return an object of all the values with the input name as the key
                    var values = {};
                    this.processedInputs.forEach(function (i) {
                        values[i.name] = i.value || '';
                    });
                    return values;
                };
                class_1.prototype.renderAlertInputs = function (labelledBy) {
                    switch (this.inputType) {
                        case 'checkbox': return this.renderCheckbox(labelledBy);
                        case 'radio': return this.renderRadio(labelledBy);
                        default: return this.renderInput(labelledBy);
                    }
                };
                class_1.prototype.renderCheckbox = function (labelledby) {
                    var _this = this;
                    var inputs = this.processedInputs;
                    var mode = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
                    if (inputs.length === 0) {
                        return null;
                    }
                    return (Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "alert-checkbox-group", "aria-labelledby": labelledby }, inputs.map(function (i) { return (Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", { type: "button", onClick: function () { return _this.cbClick(i); }, "aria-checked": "" + i.checked, id: i.id, disabled: i.disabled, tabIndex: 0, role: "checkbox", class: {
                            'alert-tappable': true,
                            'alert-checkbox': true,
                            'alert-checkbox-button': true,
                            'ion-focusable': true,
                            'alert-checkbox-button-disabled': i.disabled || false
                        } }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "alert-button-inner" }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "alert-checkbox-icon" }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "alert-checkbox-inner" })), Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "alert-checkbox-label" }, i.label)), mode === 'md' && Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-ripple-effect", null))); })));
                };
                class_1.prototype.renderRadio = function (labelledby) {
                    var _this = this;
                    var inputs = this.processedInputs;
                    if (inputs.length === 0) {
                        return null;
                    }
                    return (Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "alert-radio-group", role: "radiogroup", "aria-labelledby": labelledby, "aria-activedescendant": this.activeId }, inputs.map(function (i) { return (Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", { type: "button", onClick: function () { return _this.rbClick(i); }, "aria-checked": "" + i.checked, disabled: i.disabled, id: i.id, tabIndex: 0, class: {
                            'alert-radio-button': true,
                            'alert-tappable': true,
                            'alert-radio': true,
                            'ion-focusable': true,
                            'alert-radio-button-disabled': i.disabled || false
                        }, role: "radio" }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "alert-button-inner" }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "alert-radio-icon" }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "alert-radio-inner" })), Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "alert-radio-label" }, i.label)))); })));
                };
                class_1.prototype.renderInput = function (labelledby) {
                    var inputs = this.processedInputs;
                    if (inputs.length === 0) {
                        return null;
                    }
                    return (Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "alert-input-group", "aria-labelledby": labelledby }, inputs.map(function (i) { return (Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "alert-input-wrapper" }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("input", { placeholder: i.placeholder, value: i.value, type: i.type, min: i.min, max: i.max, onInput: function (e) { return i.value = e.target.value; }, id: i.id, disabled: i.disabled, tabIndex: 0, class: {
                            'alert-input': true,
                            'alert-input-disabled': i.disabled || false
                        } }))); })));
                };
                class_1.prototype.renderAlertButtons = function () {
                    var _this = this;
                    var buttons = this.processedButtons;
                    var mode = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
                    var alertButtonGroupClass = {
                        'alert-button-group': true,
                        'alert-button-group-vertical': buttons.length > 2
                    };
                    return (Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: alertButtonGroupClass }, buttons.map(function (button) { return Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", { type: "button", class: buttonClass(button), tabIndex: 0, onClick: function () { return _this.buttonClick(button); } }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "alert-button-inner" }, button.text), mode === 'md' && Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-ripple-effect", null)); })));
                };
                class_1.prototype.render = function () {
                    var _a;
                    var _b = this, overlayIndex = _b.overlayIndex, header = _b.header, subHeader = _b.subHeader;
                    var mode = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
                    var hdrId = "alert-" + overlayIndex + "-hdr";
                    var subHdrId = "alert-" + overlayIndex + "-sub-hdr";
                    var msgId = "alert-" + overlayIndex + "-msg";
                    var labelledById;
                    if (header !== undefined) {
                        labelledById = hdrId;
                    }
                    else if (subHeader !== undefined) {
                        labelledById = subHdrId;
                    }
                    return (Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["H"], { role: "dialog", "aria-modal": "true", style: {
                            zIndex: "" + (20000 + overlayIndex),
                        }, class: Object.assign(Object.assign({}, Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_5__["g"])(this.cssClass)), (_a = {}, _a[mode] = true, _a['alert-translucent'] = this.translucent, _a)), onIonAlertWillDismiss: this.dispatchCancelHandler, onIonBackdropTap: this.onBackdropTap }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-backdrop", { tappable: this.backdropDismiss }), Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "alert-wrapper" }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "alert-head" }, header && Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("h2", { id: hdrId, class: "alert-title" }, header), subHeader && Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("h2", { id: subHdrId, class: "alert-sub-title" }, subHeader)), Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { id: msgId, class: "alert-message", innerHTML: Object(_index_3476b023_js__WEBPACK_IMPORTED_MODULE_6__["s"])(this.message) }), this.renderAlertInputs(labelledById), this.renderAlertButtons())));
                };
                Object.defineProperty(class_1.prototype, "el", {
                    get: function () { return Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this); },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(class_1, "watchers", {
                    get: function () {
                        return {
                            "buttons": ["buttonsChanged"],
                            "inputs": ["inputsChanged"]
                        };
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(class_1, "style", {
                    get: function () { return ".sc-ion-alert-md-h{--min-width:250px;--width:auto;--min-height:auto;--height:auto;--max-height:90%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;font-family:var(--ion-font-family,inherit);contain:strict;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-alert-md-h{display:none}.alert-top.sc-ion-alert-md-h{padding-top:50px;-ms-flex-align:start;align-items:flex-start}.alert-wrapper.sc-ion-alert-md{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);contain:content;opacity:0;z-index:10}.alert-title.sc-ion-alert-md{margin-top:0}.alert-sub-title.sc-ion-alert-md, .alert-title.sc-ion-alert-md{margin-left:0;margin-right:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0}.alert-sub-title.sc-ion-alert-md{margin-top:5px;font-weight:400}.alert-message.sc-ion-alert-md{-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-overflow-scrolling:touch;overflow-y:auto;overscroll-behavior-y:contain}.alert-checkbox-group.sc-ion-alert-md::-webkit-scrollbar, .alert-message.sc-ion-alert-md::-webkit-scrollbar, .alert-radio-group.sc-ion-alert-md::-webkit-scrollbar{display:none}.alert-input.sc-ion-alert-md{padding-left:0;padding-right:0;padding-top:10px;padding-bottom:10px;width:100%;border:0;background:inherit;font:inherit;-webkit-box-sizing:border-box;box-sizing:border-box}.alert-button-group.sc-ion-alert-md{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;width:100%}.alert-button-group-vertical.sc-ion-alert-md{-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap}.alert-button.sc-ion-alert-md{margin-right:0;display:block;border:0;font-size:14px;line-height:20px;z-index:0}.alert-button.ion-focused.sc-ion-alert-md, .alert-tappable.ion-focused.sc-ion-alert-md{background:var(--ion-color-step-100,#e6e6e6)}.alert-button-inner.sc-ion-alert-md{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}.alert-checkbox-button-disabled.sc-ion-alert-md .alert-button-inner.sc-ion-alert-md, .alert-input-disabled.sc-ion-alert-md, .alert-radio-button-disabled.sc-ion-alert-md .alert-button-inner.sc-ion-alert-md{cursor:default;opacity:.5;pointer-events:none}.alert-tappable.sc-ion-alert-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;display:-ms-flexbox;display:flex;width:100%;border:0;background:transparent;font-size:inherit;line-height:normal;text-align:start;-webkit-appearance:none;-moz-appearance:none;appearance:none;contain:strict}.alert-button.sc-ion-alert-md, .alert-checkbox.sc-ion-alert-md, .alert-input.sc-ion-alert-md, .alert-radio.sc-ion-alert-md{outline:none}.alert-checkbox-icon.sc-ion-alert-md, .alert-checkbox-inner.sc-ion-alert-md, .alert-radio-icon.sc-ion-alert-md{-webkit-box-sizing:border-box;box-sizing:border-box}.sc-ion-alert-md-h{--background:var(--ion-overlay-background-color,var(--ion-background-color,#fff));--max-width:280px;font-size:14px}.alert-wrapper.sc-ion-alert-md{border-radius:4px;-webkit-box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12);box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)}.alert-head.sc-ion-alert-md{padding-left:23px;padding-right:23px;padding-top:20px;padding-bottom:15px;text-align:start}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.alert-head.sc-ion-alert-md{padding-left:unset;padding-right:unset;-webkit-padding-start:23px;padding-inline-start:23px;-webkit-padding-end:23px;padding-inline-end:23px}}.alert-title.sc-ion-alert-md{font-size:20px;font-weight:500}.alert-sub-title.sc-ion-alert-md, .alert-title.sc-ion-alert-md{color:var(--ion-text-color,#000)}.alert-sub-title.sc-ion-alert-md{font-size:16px}.alert-input-group.sc-ion-alert-md, .alert-message.sc-ion-alert-md{padding-left:24px;padding-right:24px;padding-top:20px;padding-bottom:20px;color:var(--ion-color-step-550,#737373)}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.alert-input-group.sc-ion-alert-md, .alert-message.sc-ion-alert-md{padding-left:unset;padding-right:unset;-webkit-padding-start:24px;padding-inline-start:24px;-webkit-padding-end:24px;padding-inline-end:24px}}.alert-message.sc-ion-alert-md{max-height:240px;font-size:16px}.alert-message.sc-ion-alert-md:empty{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0}.alert-head.sc-ion-alert-md + .alert-message.sc-ion-alert-md{padding-top:0}.alert-input.sc-ion-alert-md{margin-left:0;margin-right:0;margin-top:5px;margin-bottom:5px;border-bottom:1px solid var(--ion-color-step-150,#d9d9d9);color:var(--ion-text-color,#000)}.alert-input.sc-ion-alert-md::-webkit-input-placeholder{color:var(--ion-placeholder-color,var(--ion-color-step-400,#999));font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-md::-moz-placeholder{color:var(--ion-placeholder-color,var(--ion-color-step-400,#999));font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-md:-ms-input-placeholder{color:var(--ion-placeholder-color,var(--ion-color-step-400,#999));font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-md::-ms-input-placeholder{color:var(--ion-placeholder-color,var(--ion-color-step-400,#999));font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-md::placeholder{color:var(--ion-placeholder-color,var(--ion-color-step-400,#999));font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-md::-ms-clear{display:none}.alert-input.sc-ion-alert-md:focus{margin-bottom:4px;border-bottom:2px solid var(--ion-color-primary,#3880ff)}.alert-checkbox-group.sc-ion-alert-md, .alert-radio-group.sc-ion-alert-md{position:relative;max-height:240px;border-top:1px solid var(--ion-color-step-150,#d9d9d9);border-bottom:1px solid var(--ion-color-step-150,#d9d9d9);overflow:auto}.alert-tappable.sc-ion-alert-md{position:relative;height:48px;overflow:hidden}.alert-radio-label.sc-ion-alert-md{padding-left:52px;padding-right:26px;padding-top:13px;padding-bottom:13px;-ms-flex:1;flex:1;color:var(--ion-color-step-850,#262626);font-size:16px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.alert-radio-label.sc-ion-alert-md{padding-left:unset;padding-right:unset;-webkit-padding-start:52px;padding-inline-start:52px;-webkit-padding-end:26px;padding-inline-end:26px}}.alert-radio-icon.sc-ion-alert-md{left:26px;top:0;border-radius:50%;display:block;position:relative;width:20px;height:20px;border-width:2px;border-style:solid;border-color:var(--ion-color-step-550,#737373)}[dir=rtl].sc-ion-alert-md-h .alert-radio-icon.sc-ion-alert-md, [dir=rtl] .sc-ion-alert-md-h .alert-radio-icon.sc-ion-alert-md, [dir=rtl].sc-ion-alert-md .alert-radio-icon.sc-ion-alert-md{left:unset;right:unset;right:26px}.alert-radio-inner.sc-ion-alert-md{left:3px;top:3px;border-radius:50%;position:absolute;width:10px;height:10px;-webkit-transform:scale3d(0,0,0);transform:scale3d(0,0,0);-webkit-transition:-webkit-transform .28s cubic-bezier(.4,0,.2,1);transition:-webkit-transform .28s cubic-bezier(.4,0,.2,1);transition:transform .28s cubic-bezier(.4,0,.2,1);transition:transform .28s cubic-bezier(.4,0,.2,1),-webkit-transform .28s cubic-bezier(.4,0,.2,1);background-color:var(--ion-color-primary,#3880ff)}[dir=rtl].sc-ion-alert-md-h .alert-radio-inner.sc-ion-alert-md, [dir=rtl] .sc-ion-alert-md-h .alert-radio-inner.sc-ion-alert-md, [dir=rtl].sc-ion-alert-md .alert-radio-inner.sc-ion-alert-md{left:unset;right:unset;right:3px}[aria-checked=true].sc-ion-alert-md .alert-radio-label.sc-ion-alert-md{color:var(--ion-color-step-850,#262626)}[aria-checked=true].sc-ion-alert-md .alert-radio-icon.sc-ion-alert-md{border-color:var(--ion-color-primary,#3880ff)}[aria-checked=true].sc-ion-alert-md .alert-radio-inner.sc-ion-alert-md{-webkit-transform:scaleX(1);transform:scaleX(1)}.alert-checkbox-label.sc-ion-alert-md{padding-left:53px;padding-right:26px;padding-top:13px;padding-bottom:13px;-ms-flex:1;flex:1;color:var(--ion-color-step-850,#262626);font-size:16px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.alert-checkbox-label.sc-ion-alert-md{padding-left:unset;padding-right:unset;-webkit-padding-start:53px;padding-inline-start:53px;-webkit-padding-end:26px;padding-inline-end:26px}}.alert-checkbox-icon.sc-ion-alert-md{left:26px;top:0;border-radius:2px;position:relative;width:16px;height:16px;border-width:2px;border-style:solid;border-color:var(--ion-color-step-550,#737373);contain:strict}[dir=rtl].sc-ion-alert-md-h .alert-checkbox-icon.sc-ion-alert-md, [dir=rtl] .sc-ion-alert-md-h .alert-checkbox-icon.sc-ion-alert-md, [dir=rtl].sc-ion-alert-md .alert-checkbox-icon.sc-ion-alert-md{left:unset;right:unset;right:26px}[aria-checked=true].sc-ion-alert-md .alert-checkbox-icon.sc-ion-alert-md{border-color:var(--ion-color-primary,#3880ff);background-color:var(--ion-color-primary,#3880ff)}[aria-checked=true].sc-ion-alert-md .alert-checkbox-inner.sc-ion-alert-md{left:3px;top:0;position:absolute;width:6px;height:10px;-webkit-transform:rotate(45deg);transform:rotate(45deg);border-width:2px;border-top-width:0;border-left-width:0;border-style:solid;border-color:var(--ion-color-primary-contrast,#fff)}[dir=rtl].sc-ion-alert-md-h [aria-checked=true].sc-ion-alert-md .alert-checkbox-inner.sc-ion-alert-md, [dir=rtl] .sc-ion-alert-md-h [aria-checked=true].sc-ion-alert-md .alert-checkbox-inner.sc-ion-alert-md, [dir=rtl].sc-ion-alert-md [aria-checked=true].sc-ion-alert-md .alert-checkbox-inner.sc-ion-alert-md{left:unset;right:unset;right:3px}.alert-button-group.sc-ion-alert-md{padding-left:8px;padding-right:8px;padding-top:8px;padding-bottom:8px;-webkit-box-sizing:border-box;box-sizing:border-box;-ms-flex-wrap:wrap-reverse;flex-wrap:wrap-reverse;-ms-flex-pack:end;justify-content:flex-end}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.alert-button-group.sc-ion-alert-md{padding-left:unset;padding-right:unset;-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px}}.alert-button.sc-ion-alert-md{border-radius:2px;margin-left:0;margin-right:8px;margin-top:0;margin-bottom:0;padding-left:10px;padding-right:10px;padding-top:10px;padding-bottom:10px;position:relative;background-color:transparent;color:var(--ion-color-primary,#3880ff);font-weight:500;text-align:end;text-transform:uppercase;overflow:hidden}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.alert-button.sc-ion-alert-md{margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:8px;margin-inline-end:8px;padding-left:unset;padding-right:unset;-webkit-padding-start:10px;padding-inline-start:10px;-webkit-padding-end:10px;padding-inline-end:10px}}.alert-button-inner.sc-ion-alert-md{-ms-flex-pack:end;justify-content:flex-end}"; },
                    enumerable: true,
                    configurable: true
                });
                return class_1;
            }());
            var buttonClass = function (button) {
                return Object.assign({ 'alert-button': true, 'ion-focusable': true, 'ion-activatable': true }, Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_5__["g"])(button.cssClass));
            };
            /***/ 
        })
    }]);
//# sourceMappingURL=4-es2015.js.map
//# sourceMappingURL=4-es5.js.map
//# sourceMappingURL=4-es5.js.map