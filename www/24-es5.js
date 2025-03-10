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
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[24], {
        /***/ "./node_modules/@ionic/core/dist/esm/ion-fab_3-ios.entry.js": 
        /*!******************************************************************!*\
          !*** ./node_modules/@ionic/core/dist/esm/ion-fab_3-ios.entry.js ***!
          \******************************************************************/
        /*! exports provided: ion_fab, ion_fab_button, ion_fab_list */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_fab", function () { return Fab; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_fab_button", function () { return FabButton; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_fab_list", function () { return FabList; });
            /* harmony import */ var _core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-ca0488fc.js */ "./node_modules/@ionic/core/dist/esm/core-ca0488fc.js");
            /* harmony import */ var _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config-3c7f3790.js */ "./node_modules/@ionic/core/dist/esm/config-3c7f3790.js");
            /* harmony import */ var _theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./theme-18cbe2cc.js */ "./node_modules/@ionic/core/dist/esm/theme-18cbe2cc.js");
            var Fab = /** @class */ (function () {
                function class_1(hostRef) {
                    var _this = this;
                    Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
                    /**
                     * If `true`, the fab will display on the edge of the header if
                     * `vertical` is `"top"`, and on the edge of the footer if
                     * it is `"bottom"`. Should be used with a `fixed` slot.
                     */
                    this.edge = false;
                    /**
                     * If `true`, both the `ion-fab-button` and all `ion-fab-list` inside `ion-fab` will become active.
                     * That means `ion-fab-button` will become a `close` icon and `ion-fab-list` will become visible.
                     */
                    this.activated = false;
                    this.onClick = function () {
                        var hasList = !!_this.el.querySelector('ion-fab-list');
                        var getButton = _this.getFab();
                        var isButtonDisabled = getButton && getButton.disabled;
                        if (hasList && !isButtonDisabled) {
                            _this.activated = !_this.activated;
                        }
                    };
                }
                class_1.prototype.activatedChanged = function () {
                    var activated = this.activated;
                    var fab = this.getFab();
                    if (fab) {
                        fab.activated = activated;
                    }
                    Array.from(this.el.querySelectorAll('ion-fab-list')).forEach(function (list) {
                        list.activated = activated;
                    });
                };
                class_1.prototype.componentDidLoad = function () {
                    if (this.activated) {
                        this.activatedChanged();
                    }
                };
                /**
                 * Close an active FAB list container.
                 */
                class_1.prototype.close = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            this.activated = false;
                            return [2 /*return*/];
                        });
                    });
                };
                class_1.prototype.getFab = function () {
                    return this.el.querySelector('ion-fab-button');
                };
                class_1.prototype.render = function () {
                    var _a;
                    var _b = this, horizontal = _b.horizontal, vertical = _b.vertical, edge = _b.edge;
                    var mode = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
                    return (Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["H"], { onClick: this.onClick, class: (_a = {},
                            _a[mode] = true,
                            _a["fab-horizontal-" + horizontal] = horizontal !== undefined,
                            _a["fab-vertical-" + vertical] = vertical !== undefined,
                            _a['fab-edge'] = edge,
                            _a) }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)));
                };
                Object.defineProperty(class_1.prototype, "el", {
                    get: function () { return Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this); },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(class_1, "watchers", {
                    get: function () {
                        return {
                            "activated": ["activatedChanged"]
                        };
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(class_1, "style", {
                    get: function () { return ":host{position:absolute;z-index:999}:host(.fab-horizontal-center){left:50%;margin-left:-28px}:host-context([dir=rtl]).fab-horizontal-center,:host-context([dir=rtl]):host(.fab-horizontal-center){left:unset;right:unset;right:50%}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.fab-horizontal-center){margin-left:unset;-webkit-margin-start:-28px;margin-inline-start:-28px}}:host(.fab-horizontal-start){left:calc(10px + var(--ion-safe-area-left, 0px))}:host-context([dir=rtl]).fab-horizontal-start,:host-context([dir=rtl]):host(.fab-horizontal-start){left:unset;right:unset;right:calc(10px + var(--ion-safe-area-left, 0px))}:host(.fab-horizontal-end){right:calc(10px + var(--ion-safe-area-right, 0px))}:host-context([dir=rtl]).fab-horizontal-end,:host-context([dir=rtl]):host(.fab-horizontal-end){left:unset;right:unset;left:calc(10px + var(--ion-safe-area-right, 0px))}:host(.fab-vertical-top){top:10px}:host(.fab-vertical-top.fab-edge){top:-28px}:host(.fab-vertical-bottom){bottom:10px}:host(.fab-vertical-bottom.fab-edge){bottom:-28px}:host(.fab-vertical-center){margin-top:-28px;top:50%}"; },
                    enumerable: true,
                    configurable: true
                });
                return class_1;
            }());
            var FabButton = /** @class */ (function () {
                function class_2(hostRef) {
                    var _this = this;
                    Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
                    /**
                     * If `true`, the fab button will be show a close icon.
                     */
                    this.activated = false;
                    /**
                     * If `true`, the user cannot interact with the fab button.
                     */
                    this.disabled = false;
                    /**
                     * When using a router, it specifies the transition direction when navigating to
                     * another page using `href`.
                     */
                    this.routerDirection = 'forward';
                    /**
                     * If `true`, the fab button will show when in a fab-list.
                     */
                    this.show = false;
                    /**
                     * If `true`, the fab button will be translucent.
                     * Only applies when the mode is `"ios"` and the device supports
                     * [`backdrop-filter`](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#Browser_compatibility).
                     */
                    this.translucent = false;
                    /**
                     * The type of the button.
                     */
                    this.type = 'button';
                    this.onFocus = function () {
                        _this.ionFocus.emit();
                    };
                    this.onBlur = function () {
                        _this.ionBlur.emit();
                    };
                    this.ionFocus = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionFocus", 7);
                    this.ionBlur = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionBlur", 7);
                }
                class_2.prototype.render = function () {
                    var _this = this;
                    var _a;
                    var _b = this, el = _b.el, disabled = _b.disabled, color = _b.color, href = _b.href, activated = _b.activated, show = _b.show, translucent = _b.translucent, size = _b.size;
                    var inList = Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_2__["h"])('ion-fab-list', el);
                    var mode = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
                    var TagType = href === undefined ? 'button' : 'a';
                    var attrs = (TagType === 'button')
                        ? { type: this.type }
                        : {
                            download: this.download,
                            href: href,
                            rel: this.rel,
                            target: this.target
                        };
                    return (Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["H"], { "aria-disabled": disabled ? 'true' : null, class: Object.assign(Object.assign({}, Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_2__["c"])(color)), (_a = {}, _a[mode] = true, _a['fab-button-in-list'] = inList, _a['fab-button-translucent-in-list'] = inList && translucent, _a['fab-button-close-active'] = activated, _a['fab-button-show'] = show, _a['fab-button-disabled'] = disabled, _a['fab-button-translucent'] = translucent, _a['ion-activatable'] = true, _a['ion-focusable'] = true, _a["fab-button-" + size] = size !== undefined, _a)) }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])(TagType, Object.assign({}, attrs, { class: "button-native", disabled: disabled, onFocus: this.onFocus, onBlur: this.onBlur, onClick: function (ev) { return Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_2__["o"])(href, ev, _this.routerDirection); } }), Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "close-icon" }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-icon", { name: "close", lazy: false })), Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "button-inner" }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)), mode === 'md' && Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-ripple-effect", null))));
                };
                Object.defineProperty(class_2.prototype, "el", {
                    get: function () { return Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this); },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(class_2, "style", {
                    get: function () { return ":host{--color-hover:var(--color);--background-hover:var(--ion-color-primary-tint,#4c8dff);--transition:background-color,opacity 100ms linear;--ripple-color:currentColor;--border-radius:50%;--border-width:0;--border-style:none;--border-color:initial;--padding-top:0;--padding-end:0;--padding-bottom:0;--padding-start:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:block;width:56px;height:56px;font-size:14px;text-align:center;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-font-kerning:none;font-kerning:none}.button-native{border-radius:var(--border-radius);padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:block;position:relative;width:100%;height:100%;-webkit-transform:var(--transform);transform:var(--transform);-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:var(--background);background-clip:padding-box;color:var(--color);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);contain:strict;cursor:pointer;overflow:hidden;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-box-sizing:border-box;box-sizing:border-box}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.button-inner{left:0;right:0;top:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:100%;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out;-webkit-transition-property:opacity,-webkit-transform;transition-property:opacity,-webkit-transform;transition-property:transform,opacity;transition-property:transform,opacity,-webkit-transform}:host(.ion-color) .button-native{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.fab-button-disabled){opacity:.5;pointer-events:none}:host(.fab-button-disabled) .button-native{cursor:default;pointer-events:none}\@media (any-hover:hover){:host(:hover) .button-native{background:var(--background-hover);color:var(--color-hover)}:host(.ion-color:hover) .button-native{background:var(--ion-color-tint);color:var(--ion-color-contrast)}}:host(.ion-focused) .button-native{background:var(--background-focused);color:var(--color-focused)}:host(.ion-color.ion-focused) .button-native{background:var(--ion-color-shade)}:host(.activated) .button-native{background:var(--background-activated);color:var(--color-activated)}:host(.ion-color.activated) .button-native,:host(.ion-color.ion-focused) .button-native{background:var(--ion-color-shade);color:var(--ion-color-contrast)}::slotted(ion-icon){line-height:1}:host(.fab-button-small){margin-left:8px;margin-right:8px;margin-top:8px;margin-bottom:8px;width:40px;height:40px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.fab-button-small){margin-left:unset;margin-right:unset;-webkit-margin-start:8px;margin-inline-start:8px;-webkit-margin-end:8px;margin-inline-end:8px}}.close-icon{left:0;right:0;top:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:100%;-webkit-transform:scale(.4) rotate(-45deg);transform:scale(.4) rotate(-45deg);-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out;-webkit-transition-property:opacity,-webkit-transform;transition-property:opacity,-webkit-transform;transition-property:transform,opacity;transition-property:transform,opacity,-webkit-transform;opacity:0}:host(.fab-button-close-active) .close-icon{-webkit-transform:scale(1) rotate(0deg);transform:scale(1) rotate(0deg);opacity:1}:host(.fab-button-close-active) .button-inner{-webkit-transform:scale(.4) rotate(45deg);transform:scale(.4) rotate(45deg);opacity:0}ion-ripple-effect{color:var(--ripple-color)}\@supports ((-webkit-backdrop-filter:blur(0)) or (backdrop-filter:blur(0))){:host(.fab-button-translucent) .button-native{-webkit-backdrop-filter:var(--backdrop-filter);backdrop-filter:var(--backdrop-filter)}}:host{--background:var(--ion-color-primary,#3880ff);--background-activated:var(--ion-color-primary-shade,#3171e0);--background-focused:var(--background-activated);--color:var(--ion-color-primary-contrast,#fff);--color-activated:var(--ion-color-primary-contrast,#fff);--color-focused:var(--color-activated);--transition:0.2s transform cubic-bezier(0.25,1.11,0.78,1.59)}:host,:host(.activated){--box-shadow:0 4px 16px rgba(0,0,0,0.12)}:host(.activated){--transform:scale(1.1);--transition:0.2s transform ease-out}.close-icon,::slotted(ion-icon){font-size:28px}:host(.fab-button-in-list){--background:var(--ion-color-light,#f4f5f8);--background-activated:var(--ion-color-light-shade,#d7d8da);--background-focused:var(--background-activated);--background-hover:var(--ion-color-light-tint,#f5f6f9);--color:var(--ion-color-light-contrast,#000);--color-activated:var(--ion-color-light-contrast,#000);--color-focused:var(--color-activated);--transition:transform 200ms ease 10ms,opacity 200ms ease 10ms}:host(.fab-button-in-list) ::slotted(ion-icon){font-size:18px}\@supports ((-webkit-backdrop-filter:blur(0)) or (backdrop-filter:blur(0))){:host(.fab-button-translucent){--background:rgba(var(--ion-color-primary-rgb,56,128,255),0.9);--background-hover:rgba(var(--ion-color-primary-rgb,56,128,255),0.8);--background-focused:rgba(var(--ion-color-primary-rgb,56,128,255),0.82);--backdrop-filter:saturate(180%) blur(20px)}:host(.fab-button-translucent-in-list){--background:rgba(var(--ion-color-light-rgb,244,245,248),0.9);--background-hover:rgba(var(--ion-color-light-rgb,244,245,248),0.8);--background-focused:rgba(var(--ion-color-light-rgb,244,245,248),0.82)}}\@supports ((-webkit-backdrop-filter:blur(0)) or (backdrop-filter:blur(0))){\@media (any-hover:hover){:host(.fab-button-translucent.ion-color:hover) .button-native{background:rgba(var(--ion-color-base-rgb),.8)}}:host(.ion-color.fab-button-translucent) .button-native{background:rgba(var(--ion-color-base-rgb),.9)}:host(.ion-color.activated.fab-button-translucent) .button-native,:host(.ion-color.ion-focused.fab-button-translucent) .button-native{background:var(--ion-color-base)}}"; },
                    enumerable: true,
                    configurable: true
                });
                return class_2;
            }());
            var FabList = /** @class */ (function () {
                function class_3(hostRef) {
                    Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
                    /**
                     * If `true`, the fab list will show all fab buttons in the list.
                     */
                    this.activated = false;
                    /**
                     * The side the fab list will show on relative to the main fab button.
                     */
                    this.side = 'bottom';
                }
                class_3.prototype.activatedChanged = function (activated) {
                    var fabs = Array.from(this.el.querySelectorAll('ion-fab-button'));
                    // if showing the fabs add a timeout, else show immediately
                    var timeout = activated ? 30 : 0;
                    fabs.forEach(function (fab, i) {
                        setTimeout(function () { return fab.show = activated; }, i * timeout);
                    });
                };
                class_3.prototype.render = function () {
                    var _a;
                    var mode = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
                    return (Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["H"], { class: (_a = {},
                            _a[mode] = true,
                            _a['fab-list-active'] = this.activated,
                            _a["fab-list-side-" + this.side] = true,
                            _a) }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)));
                };
                Object.defineProperty(class_3.prototype, "el", {
                    get: function () { return Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this); },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(class_3, "watchers", {
                    get: function () {
                        return {
                            "activated": ["activatedChanged"]
                        };
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(class_3, "style", {
                    get: function () { return ":host{margin-left:0;margin-right:0;margin-top:66px;margin-bottom:66px;display:none;position:absolute;top:0;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;min-width:56px;min-height:56px}:host(.fab-list-active){display:-ms-flexbox;display:flex}::slotted(.fab-button-in-list){margin-left:0;margin-right:0;margin-top:8px;margin-bottom:8px;width:40px;height:40px;-webkit-transform:scale(0);transform:scale(0);opacity:0;visibility:hidden}:host(.fab-list-side-bottom) ::slotted(.fab-button-in-list),:host(.fab-list-side-top) ::slotted(.fab-button-in-list){margin-left:0;margin-right:0;margin-top:5px;margin-bottom:5px}:host(.fab-list-side-end) ::slotted(.fab-button-in-list),:host(.fab-list-side-start) ::slotted(.fab-button-in-list){margin-left:5px;margin-right:5px;margin-top:0;margin-bottom:0}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.fab-list-side-end) ::slotted(.fab-button-in-list),:host(.fab-list-side-start) ::slotted(.fab-button-in-list){margin-left:unset;margin-right:unset;-webkit-margin-start:5px;margin-inline-start:5px;-webkit-margin-end:5px;margin-inline-end:5px}}::slotted(.fab-button-in-list.fab-button-show){-webkit-transform:scale(1);transform:scale(1);opacity:1;visibility:visible}:host(.fab-list-side-top){top:auto;bottom:0;-ms-flex-direction:column-reverse;flex-direction:column-reverse}:host(.fab-list-side-start){margin-left:66px;margin-right:66px;margin-top:0;margin-bottom:0;right:0;-ms-flex-direction:row-reverse;flex-direction:row-reverse}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.fab-list-side-start){margin-left:unset;margin-right:unset;-webkit-margin-start:66px;margin-inline-start:66px;-webkit-margin-end:66px;margin-inline-end:66px}}:host-context([dir=rtl]).fab-list-side-start,:host-context([dir=rtl]):host(.fab-list-side-start){left:unset;right:unset;left:0}:host(.fab-list-side-end){margin-left:66px;margin-right:66px;margin-top:0;margin-bottom:0;left:0;-ms-flex-direction:row;flex-direction:row}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.fab-list-side-end){margin-left:unset;margin-right:unset;-webkit-margin-start:66px;margin-inline-start:66px;-webkit-margin-end:66px;margin-inline-end:66px}}:host-context([dir=rtl]).fab-list-side-end,:host-context([dir=rtl]):host(.fab-list-side-end){left:unset;right:unset;right:0}"; },
                    enumerable: true,
                    configurable: true
                });
                return class_3;
            }());
            /***/ 
        })
    }]);
//# sourceMappingURL=24-es2015.js.map
//# sourceMappingURL=24-es5.js.map
//# sourceMappingURL=24-es5.js.map