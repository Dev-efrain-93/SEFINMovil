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
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5], {
        /***/ "./node_modules/@ionic/core/dist/esm/ion-app_8-ios.entry.js": 
        /*!******************************************************************!*\
          !*** ./node_modules/@ionic/core/dist/esm/ion-app_8-ios.entry.js ***!
          \******************************************************************/
        /*! exports provided: ion_app, ion_buttons, ion_content, ion_footer, ion_header, ion_router_outlet, ion_title, ion_toolbar */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_app", function () { return App; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_buttons", function () { return Buttons; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_content", function () { return Content; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_footer", function () { return Footer; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_header", function () { return Header; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_router_outlet", function () { return RouterOutlet; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_title", function () { return ToolbarTitle; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_toolbar", function () { return Toolbar; });
            /* harmony import */ var _core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-ca0488fc.js */ "./node_modules/@ionic/core/dist/esm/core-ca0488fc.js");
            /* harmony import */ var _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config-3c7f3790.js */ "./node_modules/@ionic/core/dist/esm/config-3c7f3790.js");
            /* harmony import */ var _helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers-46f4a262.js */ "./node_modules/@ionic/core/dist/esm/helpers-46f4a262.js");
            /* harmony import */ var _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants-3c3e1099.js */ "./node_modules/@ionic/core/dist/esm/constants-3c3e1099.js");
            /* harmony import */ var _theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./theme-18cbe2cc.js */ "./node_modules/@ionic/core/dist/esm/theme-18cbe2cc.js");
            /* harmony import */ var _framework_delegate_c2e2e1f4_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./framework-delegate-c2e2e1f4.js */ "./node_modules/@ionic/core/dist/esm/framework-delegate-c2e2e1f4.js");
            /* harmony import */ var _index_6826f2f6_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index-6826f2f6.js */ "./node_modules/@ionic/core/dist/esm/index-6826f2f6.js");
            /* harmony import */ var _cubic_bezier_2812fda3_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cubic-bezier-2812fda3.js */ "./node_modules/@ionic/core/dist/esm/cubic-bezier-2812fda3.js");
            var App = /** @class */ (function () {
                function class_1(hostRef) {
                    Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
                }
                class_1.prototype.componentDidLoad = function () {
                    {
                        rIC(function () {
                            var isHybrid = Object(_config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__["i"])(window, 'hybrid');
                            if (!_config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__["b"].getBoolean('_testing')) {
                                __webpack_require__.e(/*! import() | tap-click-ca00ce7f-js */ "tap-click-ca00ce7f-js").then(__webpack_require__.bind(null, /*! ./tap-click-ca00ce7f.js */ "./node_modules/@ionic/core/dist/esm/tap-click-ca00ce7f.js")).then(function (module) { return module.startTapClick(_config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__["b"]); });
                            }
                            if (_config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__["b"].getBoolean('statusTap', isHybrid)) {
                                __webpack_require__.e(/*! import() | status-tap-a0df8284-js */ "status-tap-a0df8284-js").then(__webpack_require__.bind(null, /*! ./status-tap-a0df8284.js */ "./node_modules/@ionic/core/dist/esm/status-tap-a0df8284.js")).then(function (module) { return module.startStatusTap(); });
                            }
                            if (_config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__["b"].getBoolean('inputShims', needInputShims())) {
                                __webpack_require__.e(/*! import() | input-shims-a4fc53ac-js */ "input-shims-a4fc53ac-js").then(__webpack_require__.bind(null, /*! ./input-shims-a4fc53ac.js */ "./node_modules/@ionic/core/dist/esm/input-shims-a4fc53ac.js")).then(function (module) { return module.startInputShims(_config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__["b"]); });
                            }
                            if (_config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__["b"].getBoolean('hardwareBackButton', isHybrid)) {
                                __webpack_require__.e(/*! import() | hardware-back-button-5afe3cb0-js */ "hardware-back-button-5afe3cb0-js").then(__webpack_require__.bind(null, /*! ./hardware-back-button-5afe3cb0.js */ "./node_modules/@ionic/core/dist/esm/hardware-back-button-5afe3cb0.js")).then(function (module) { return module.startHardwareBackButton(); });
                            }
                            __webpack_require__.e(/*! import() | focus-visible-70713a0c-js */ "focus-visible-70713a0c-js").then(__webpack_require__.bind(null, /*! ./focus-visible-70713a0c.js */ "./node_modules/@ionic/core/dist/esm/focus-visible-70713a0c.js")).then(function (module) { return module.startFocusVisible(); });
                        });
                    }
                };
                class_1.prototype.render = function () {
                    var _a;
                    var mode = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
                    return (Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["H"], { class: (_a = {},
                            _a[mode] = true,
                            _a['ion-page'] = true,
                            _a['force-statusbar-padding'] = _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__["b"].getBoolean('_forceStatusbarPadding'),
                            _a) }));
                };
                Object.defineProperty(class_1.prototype, "el", {
                    get: function () { return Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this); },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(class_1, "style", {
                    get: function () { return "html.plt-mobile ion-app{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ion-app.force-statusbar-padding{--ion-safe-area-top:20px}"; },
                    enumerable: true,
                    configurable: true
                });
                return class_1;
            }());
            var needInputShims = function () {
                return Object(_config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__["i"])(window, 'ios') && Object(_config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__["i"])(window, 'mobile');
            };
            var rIC = function (callback) {
                if ('requestIdleCallback' in window) {
                    window.requestIdleCallback(callback);
                }
                else {
                    setTimeout(callback, 32);
                }
            };
            var Buttons = /** @class */ (function () {
                function class_2(hostRef) {
                    Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
                    /**
                     * If true, buttons will disappear when its
                     * parent toolbar has fully collapsed if the toolbar
                     * is not the first toolbar. If the toolbar is the
                     * first toolbar, the buttons will be hidden and will
                     * only be shown once all toolbars have fully collapsed.
                     *
                     * Only applies in `ios` mode with `collapse` set to
                     * `true` on `ion-header`.
                     *
                     * Typically used for [Collapsible Large Titles](https://ionicframework.com/docs/api/title#collapsible-large-titles)
                     */
                    this.collapse = false;
                }
                class_2.prototype.render = function () {
                    var _a;
                    var mode = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
                    return (Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["H"], { class: (_a = {},
                            _a[mode] = true,
                            _a['buttons-collapse'] = this.collapse,
                            _a) }));
                };
                Object.defineProperty(class_2, "style", {
                    get: function () { return ".sc-ion-buttons-ios-h{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-webkit-transform:translateZ(0);transform:translateZ(0);z-index:99}.sc-ion-buttons-ios-s  ion-button {--padding-top:0;--padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;--padding-start:5px;--padding-end:5px;margin-left:2px;margin-right:2px;height:32px;font-size:17px;font-weight:400}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-buttons-ios-s  ion-button {margin-left:unset;margin-right:unset;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px}}.sc-ion-buttons-ios-s  ion-button:not(.button-round) {--border-radius:4px}.sc-ion-buttons-ios-h.ion-color.sc-ion-buttons-ios-s  .button , .ion-color .sc-ion-buttons-ios-h.sc-ion-buttons-ios-s  .button {--color:initial;--border-color:initial;--background-focused:rgba(var(--ion-color-contrast-rgb),0.1)}.sc-ion-buttons-ios-h.ion-color.sc-ion-buttons-ios-s  .button-solid , .ion-color .sc-ion-buttons-ios-h.sc-ion-buttons-ios-s  .button-solid {--background:var(--ion-color-contrast);--background-activated:rgba(var(--ion-color-contrast-rgb),0.8);--background-focused:rgba(var(--ion-color-contrast-rgb),0.6);--color:var(--ion-color-base);--color-focused:var(--ion-color-base)}.sc-ion-buttons-ios-h.ion-color.sc-ion-buttons-ios-s  .button-clear , .ion-color .sc-ion-buttons-ios-h.sc-ion-buttons-ios-s  .button-clear {--background-focused:rgba(var(--ion-color-contrast-rgb),0.1);--color-activated:var(--ion-color-contrast);--color-focused:var(--ion-color-contrast)}.sc-ion-buttons-ios-h.ion-color.sc-ion-buttons-ios-s  .button-outline , .ion-color .sc-ion-buttons-ios-h.sc-ion-buttons-ios-s  .button-outline {--background-activated:var(--ion-color-contrast);--background-focused:rgba(var(--ion-color-contrast-rgb),0.1);--color-activated:var(--ion-color-base);--color-focused:var(--ion-color-contrast)}.sc-ion-buttons-ios-hion-toolbar:not(.ion-color).sc-ion-buttons-ios-s  .button-clear , ion-toolbar:not(.ion-color) .sc-ion-buttons-ios-h.sc-ion-buttons-ios-s  .button-clear {--color:var(--ion-toolbar-color,var(--ion-color-primary,#3880ff));--color-activated:var(--ion-toolbar-color-activated,var(--ion-color-primary,#3880ff));--color-focused:var(--ion-toolbar-color,var(--ion-color-primary,#3880ff))}.sc-ion-buttons-ios-hion-toolbar:not(.ion-color).sc-ion-buttons-ios-s  .button-outline , ion-toolbar:not(.ion-color) .sc-ion-buttons-ios-h.sc-ion-buttons-ios-s  .button-outline {--color:var(--ion-toolbar-color,var(--ion-color-primary,#3880ff));--color-activated:var(--ion-toolbar-background,var(--ion-color-primary-contrast,#fff));--color-focused:var(--ion-toolbar-color,var(--ion-color-primary,#3880ff));--border-color:var(--ion-toolbar-color,var(--ion-color-primary,#3880ff));--background-activated:var(--ion-toolbar-color,var(--ion-color-primary,#3880ff))}.sc-ion-buttons-ios-hion-toolbar:not(.ion-color).sc-ion-buttons-ios-s  .button-solid , ion-toolbar:not(.ion-color) .sc-ion-buttons-ios-h.sc-ion-buttons-ios-s  .button-solid {--color:var(--ion-toolbar-background,var(--ion-color-step-50,#fff));--color-activated:var(--ion-toolbar-background,var(--ion-color-step-50,#fff));--color-focused:var(--ion-toolbar-background,var(--ion-color-step-50,#fff));--background:var(--ion-toolbar-color,var(--ion-color-primary,#3880ff));--background-activated:var(--ion-toolbar-color-activated,var(--ion-color-primary-shade,#3171e0));--background-focused:var(--ion-toolbar-color-activated,var(--ion-color-primary-shade,#3171e0))}.sc-ion-buttons-ios-s  ion-icon[slot=start] {margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;margin-right:.3em;font-size:24px;line-height:.67}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-buttons-ios-s  ion-icon[slot=start] {margin-right:unset;-webkit-margin-end:.3em;margin-inline-end:.3em}}.sc-ion-buttons-ios-s  ion-icon[slot=end] {margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;margin-left:.4em;font-size:24px;line-height:.67}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-buttons-ios-s  ion-icon[slot=end] {margin-left:unset;-webkit-margin-start:.4em;margin-inline-start:.4em}}.sc-ion-buttons-ios-s  ion-icon[slot=icon-only] {padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;font-size:31px;line-height:.67}"; },
                    enumerable: true,
                    configurable: true
                });
                return class_2;
            }());
            var Content = /** @class */ (function () {
                function class_3(hostRef) {
                    Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
                    this.isScrolling = false;
                    this.lastScroll = 0;
                    this.queued = false;
                    this.cTop = -1;
                    this.cBottom = -1;
                    this.mode = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
                    // Detail is used in a hot loop in the scroll event, by allocating it here
                    // V8 will be able to inline any read/write to it since it's a monomorphic class.
                    // https://mrale.ph/blog/2015/01/11/whats-up-with-monomorphism.html
                    this.detail = {
                        scrollTop: 0,
                        scrollLeft: 0,
                        type: 'scroll',
                        event: undefined,
                        startX: 0,
                        startY: 0,
                        startTimeStamp: 0,
                        currentX: 0,
                        currentY: 0,
                        velocityX: 0,
                        velocityY: 0,
                        deltaX: 0,
                        deltaY: 0,
                        timeStamp: 0,
                        data: undefined,
                        isScrolling: true,
                    };
                    /**
                     * If `true`, the content will scroll behind the headers
                     * and footers. This effect can easily be seen by setting the toolbar
                     * to transparent.
                     */
                    this.fullscreen = false;
                    /**
                     * If you want to enable the content scrolling in the X axis, set this property to `true`.
                     */
                    this.scrollX = false;
                    /**
                     * If you want to disable the content scrolling in the Y axis, set this property to `false`.
                     */
                    this.scrollY = true;
                    /**
                     * Because of performance reasons, ionScroll events are disabled by default, in order to enable them
                     * and start listening from (ionScroll), set this property to `true`.
                     */
                    this.scrollEvents = false;
                    this.ionScrollStart = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionScrollStart", 7);
                    this.ionScroll = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionScroll", 7);
                    this.ionScrollEnd = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionScrollEnd", 7);
                }
                class_3.prototype.disconnectedCallback = function () {
                    this.onScrollEnd();
                };
                class_3.prototype.componentDidLoad = function () {
                    this.resize();
                };
                class_3.prototype.onClick = function (ev) {
                    if (this.isScrolling) {
                        ev.preventDefault();
                        ev.stopPropagation();
                    }
                };
                class_3.prototype.shouldForceOverscroll = function () {
                    var _a = this, forceOverscroll = _a.forceOverscroll, mode = _a.mode;
                    return forceOverscroll === undefined
                        ? mode === 'ios' && Object(_config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__["i"])('ios')
                        : forceOverscroll;
                };
                class_3.prototype.resize = function () {
                    if (this.fullscreen) {
                        Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["f"])(this.readDimensions.bind(this));
                    }
                    else if (this.cTop !== 0 || this.cBottom !== 0) {
                        this.cTop = this.cBottom = 0;
                        this.el.forceUpdate();
                    }
                };
                class_3.prototype.readDimensions = function () {
                    var page = getPageElement(this.el);
                    var top = Math.max(this.el.offsetTop, 0);
                    var bottom = Math.max(page.offsetHeight - top - this.el.offsetHeight, 0);
                    var dirty = top !== this.cTop || bottom !== this.cBottom;
                    if (dirty) {
                        this.cTop = top;
                        this.cBottom = bottom;
                        this.el.forceUpdate();
                    }
                };
                class_3.prototype.onScroll = function (ev) {
                    var _this = this;
                    var timeStamp = Date.now();
                    var shouldStart = !this.isScrolling;
                    this.lastScroll = timeStamp;
                    if (shouldStart) {
                        this.onScrollStart();
                    }
                    if (!this.queued && this.scrollEvents) {
                        this.queued = true;
                        Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["f"])(function (ts) {
                            _this.queued = false;
                            _this.detail.event = ev;
                            updateScrollDetail(_this.detail, _this.scrollEl, ts, shouldStart);
                            _this.ionScroll.emit(_this.detail);
                        });
                    }
                };
                /**
                 * Get the element where the actual scrolling takes place.
                 * This element can be used to subscribe to `scroll` events or manually modify
                 * `scrollTop`. However, it's recommended to use the API provided by `ion-content`:
                 *
                 * i.e. Using `ionScroll`, `ionScrollStart`, `ionScrollEnd` for scrolling events
                 * and `scrollToPoint()` to scroll the content into a certain point.
                 */
                class_3.prototype.getScrollElement = function () {
                    return Promise.resolve(this.scrollEl);
                };
                /**
                 * Scroll to the top of the component.
                 *
                 * @param duration The amount of time to take scrolling to the top. Defaults to `0`.
                 */
                class_3.prototype.scrollToTop = function (duration) {
                    if (duration === void 0) { duration = 0; }
                    return this.scrollToPoint(undefined, 0, duration);
                };
                /**
                 * Scroll to the bottom of the component.
                 *
                 * @param duration The amount of time to take scrolling to the bottom. Defaults to `0`.
                 */
                class_3.prototype.scrollToBottom = function (duration) {
                    if (duration === void 0) { duration = 0; }
                    var y = this.scrollEl.scrollHeight - this.scrollEl.clientHeight;
                    return this.scrollToPoint(undefined, y, duration);
                };
                /**
                 * Scroll by a specified X/Y distance in the component.
                 *
                 * @param x The amount to scroll by on the horizontal axis.
                 * @param y The amount to scroll by on the vertical axis.
                 * @param duration The amount of time to take scrolling by that amount.
                 */
                class_3.prototype.scrollByPoint = function (x, y, duration) {
                    return this.scrollToPoint(x + this.scrollEl.scrollLeft, y + this.scrollEl.scrollTop, duration);
                };
                /**
                 * Scroll to a specified X/Y location in the component.
                 *
                 * @param x The point to scroll to on the horizontal axis.
                 * @param y The point to scroll to on the vertical axis.
                 * @param duration The amount of time to take scrolling to that point. Defaults to `0`.
                 */
                class_3.prototype.scrollToPoint = function (x, y, duration) {
                    if (duration === void 0) { duration = 0; }
                    return __awaiter(this, void 0, void 0, function () {
                        var el, resolve, startTime, promise, fromY, fromX, deltaY, deltaX, step;
                        return __generator(this, function (_a) {
                            el = this.scrollEl;
                            if (duration < 32) {
                                if (y != null) {
                                    el.scrollTop = y;
                                }
                                if (x != null) {
                                    el.scrollLeft = x;
                                }
                                return [2 /*return*/];
                            }
                            startTime = 0;
                            promise = new Promise(function (r) { return resolve = r; });
                            fromY = el.scrollTop;
                            fromX = el.scrollLeft;
                            deltaY = y != null ? y - fromY : 0;
                            deltaX = x != null ? x - fromX : 0;
                            step = function (timeStamp) {
                                var linearTime = Math.min(1, ((timeStamp - startTime) / duration)) - 1;
                                var easedT = Math.pow(linearTime, 3) + 1;
                                if (deltaY !== 0) {
                                    el.scrollTop = Math.floor((easedT * deltaY) + fromY);
                                }
                                if (deltaX !== 0) {
                                    el.scrollLeft = Math.floor((easedT * deltaX) + fromX);
                                }
                                if (easedT < 1) {
                                    // do not use DomController here
                                    // must use nativeRaf in order to fire in the next frame
                                    // TODO: remove as any
                                    requestAnimationFrame(step);
                                }
                                else {
                                    resolve();
                                }
                            };
                            // chill out for a frame first
                            requestAnimationFrame(function (ts) {
                                startTime = ts;
                                step(ts);
                            });
                            return [2 /*return*/, promise];
                        });
                    });
                };
                class_3.prototype.onScrollStart = function () {
                    var _this = this;
                    this.isScrolling = true;
                    this.ionScrollStart.emit({
                        isScrolling: true
                    });
                    if (this.watchDog) {
                        clearInterval(this.watchDog);
                    }
                    // watchdog
                    this.watchDog = setInterval(function () {
                        if (_this.lastScroll < Date.now() - 120) {
                            _this.onScrollEnd();
                        }
                    }, 100);
                };
                class_3.prototype.onScrollEnd = function () {
                    clearInterval(this.watchDog);
                    this.watchDog = null;
                    if (this.isScrolling) {
                        this.isScrolling = false;
                        this.ionScrollEnd.emit({
                            isScrolling: false
                        });
                    }
                };
                class_3.prototype.render = function () {
                    var _this = this;
                    var _a;
                    var _b = this, scrollX = _b.scrollX, scrollY = _b.scrollY;
                    var mode = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
                    var forceOverscroll = this.shouldForceOverscroll();
                    var transitionShadow = (mode === 'ios' && _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__["b"].getBoolean('experimentalTransitionShadow', true));
                    this.resize();
                    return (Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["H"], { class: Object.assign(Object.assign({}, Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_4__["c"])(this.color)), (_a = {}, _a[mode] = true, _a['content-sizing'] = Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_4__["h"])('ion-popover', this.el), _a['overscroll'] = forceOverscroll, _a)), style: {
                            '--offset-top': this.cTop + "px",
                            '--offset-bottom': this.cBottom + "px",
                        } }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("main", { class: {
                            'inner-scroll': true,
                            'scroll-x': scrollX,
                            'scroll-y': scrollY,
                            'overscroll': (scrollX || scrollY) && forceOverscroll
                        }, ref: function (el) { return _this.scrollEl = el; }, onScroll: function (ev) { return _this.onScroll(ev); } }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)), transitionShadow ? (Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "transition-effect" }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "transition-cover" }), Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "transition-shadow" }))) : null, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "fixed" })));
                };
                Object.defineProperty(class_3.prototype, "el", {
                    get: function () { return Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this); },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(class_3, "style", {
                    get: function () { return ":host{--background:var(--ion-background-color,#fff);--color:var(--ion-text-color,#000);--padding-top:0px;--padding-bottom:0px;--padding-start:0px;--padding-end:0px;--keyboard-offset:0px;--offset-top:0px;--offset-bottom:0px;--overflow:auto;display:block;position:relative;-ms-flex:1;flex:1;width:100%;height:100%;margin:0!important;padding:0!important;font-family:var(--ion-font-family,inherit);contain:size style}:host(.ion-color) .inner-scroll{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.outer-content){--background:var(--ion-color-step-50,#f2f2f2)}.inner-scroll{left:0;right:0;top:calc(var(--offset-top) * -1);bottom:calc(var(--offset-bottom) * -1);padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:calc(var(--padding-top) + var(--offset-top));padding-bottom:calc(var(--padding-bottom) + var(--keyboard-offset) + var(--offset-bottom));position:absolute;background:var(--background);color:var(--color);-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.inner-scroll{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.scroll-x,.scroll-y{-webkit-overflow-scrolling:touch;will-change:scroll-position;-ms-scroll-chaining:none;overscroll-behavior:contain}.scroll-y{-ms-touch-action:pan-y;touch-action:pan-y;overflow-y:var(--overflow)}.scroll-x{-ms-touch-action:pan-x;touch-action:pan-x;overflow-x:var(--overflow)}.scroll-x.scroll-y{-ms-touch-action:auto;touch-action:auto}.overscroll:after,.overscroll:before{position:absolute;width:1px;height:1px;content:\"\"}.overscroll:before{bottom:-1px}.overscroll:after{top:-1px}:host(.content-sizing){contain:none}:host(.content-sizing) .inner-scroll{position:relative}.transition-effect{left:-100%;opacity:0;pointer-events:none}.transition-cover,.transition-effect{position:absolute;width:100%;height:100%}.transition-cover{right:0;background:#000;opacity:.1}.transition-shadow{display:block;position:absolute;right:0;width:10px;height:100%;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAgCAYAAAAIXrg4AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTE3MDgzRkQ5QTkyMTFFOUEwNzQ5MkJFREE1NUY2MjQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTE3MDgzRkU5QTkyMTFFOUEwNzQ5MkJFREE1NUY2MjQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxMTcwODNGQjlBOTIxMUU5QTA3NDkyQkVEQTU1RjYyNCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxMTcwODNGQzlBOTIxMUU5QTA3NDkyQkVEQTU1RjYyNCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PmePEuQAAABNSURBVHjaYvz//z8DIxAwMDAwATGMhmFmPDQuOSZks0AMmoJBaQHjkPfB0Lfg/2gQjVow+HPy/yHvg9GiYjQfjMbBqAWjFgy/4hogwADYqwdzxy5BuwAAAABJRU5ErkJggg==);background-repeat:repeat-y;background-size:10px 16px}"; },
                    enumerable: true,
                    configurable: true
                });
                return class_3;
            }());
            var getParentElement = function (el) {
                if (el.parentElement) {
                    // normal element with a parent element
                    return el.parentElement;
                }
                if (el.parentNode && el.parentNode.host) {
                    // shadow dom's document fragment
                    return el.parentNode.host;
                }
                return null;
            };
            var getPageElement = function (el) {
                var tabs = el.closest('ion-tabs');
                if (tabs) {
                    return tabs;
                }
                var page = el.closest('ion-app,ion-page,.ion-page,page-inner');
                if (page) {
                    return page;
                }
                return getParentElement(el);
            };
            // ******** DOM READ ****************
            var updateScrollDetail = function (detail, el, timestamp, shouldStart) {
                var prevX = detail.currentX;
                var prevY = detail.currentY;
                var prevT = detail.timeStamp;
                var currentX = el.scrollLeft;
                var currentY = el.scrollTop;
                var timeDelta = timestamp - prevT;
                if (shouldStart) {
                    // remember the start positions
                    detail.startTimeStamp = timestamp;
                    detail.startX = currentX;
                    detail.startY = currentY;
                    detail.velocityX = detail.velocityY = 0;
                }
                detail.timeStamp = timestamp;
                detail.currentX = detail.scrollLeft = currentX;
                detail.currentY = detail.scrollTop = currentY;
                detail.deltaX = currentX - detail.startX;
                detail.deltaY = currentY - detail.startY;
                if (timeDelta > 0 && timeDelta < 100) {
                    var velocityX = (currentX - prevX) / timeDelta;
                    var velocityY = (currentY - prevY) / timeDelta;
                    detail.velocityX = velocityX * 0.7 + detail.velocityX * 0.3;
                    detail.velocityY = velocityY * 0.7 + detail.velocityY * 0.3;
                }
            };
            var Footer = /** @class */ (function () {
                function class_4(hostRef) {
                    Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
                    /**
                     * If `true`, the footer will be translucent.
                     * Only applies when the mode is `"ios"` and the device supports
                     * [`backdrop-filter`](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#Browser_compatibility).
                     *
                     * Note: In order to scroll content behind the footer, the `fullscreen`
                     * attribute needs to be set on the content.
                     */
                    this.translucent = false;
                }
                class_4.prototype.render = function () {
                    var _a;
                    var mode = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
                    var translucent = this.translucent;
                    return (Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["H"], { role: "contentinfo", class: (_a = {},
                            _a[mode] = true,
                            // Used internally for styling
                            _a["footer-" + mode] = true,
                            _a["footer-translucent"] = translucent,
                            _a["footer-translucent-" + mode] = translucent,
                            _a) }));
                };
                Object.defineProperty(class_4, "style", {
                    get: function () { return "ion-footer{display:block;position:relative;-ms-flex-order:1;order:1;width:100%;z-index:10}ion-footer ion-toolbar:last-child{padding-bottom:var(--ion-safe-area-bottom,0)}.footer-ios ion-toolbar:first-child{--border-width:0.55px 0 0}.footer-ios[no-border] ion-toolbar:first-child{--border-width:0}\@supports ((-webkit-backdrop-filter:blur(0)) or (backdrop-filter:blur(0))){.footer-translucent-ios{-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}.footer-translucent-ios ion-toolbar{--opacity:.8;--backdrop-filter:saturate(180%) blur(20px)}}"; },
                    enumerable: true,
                    configurable: true
                });
                return class_4;
            }());
            var TRANSITION = 'all 0.2s ease-in-out';
            var cloneElement = function (tagName) {
                var getCachedEl = document.querySelector(tagName + ".ion-cloned-element");
                if (getCachedEl !== null) {
                    return getCachedEl;
                }
                var clonedEl = document.createElement(tagName);
                clonedEl.classList.add('ion-cloned-element');
                clonedEl.style.setProperty('display', 'none');
                document.body.appendChild(clonedEl);
                return clonedEl;
            };
            var createHeaderIndex = function (headerEl) {
                if (!headerEl) {
                    return;
                }
                var toolbars = headerEl.querySelectorAll('ion-toolbar');
                return {
                    el: headerEl,
                    toolbars: Array.from(toolbars).map(function (toolbar) {
                        var ionTitleEl = toolbar.querySelector('ion-title');
                        return {
                            el: toolbar,
                            background: toolbar.shadowRoot.querySelector('.toolbar-background'),
                            ionTitleEl: ionTitleEl,
                            innerTitleEl: (ionTitleEl) ? ionTitleEl.shadowRoot.querySelector('.toolbar-title') : null,
                            ionButtonsEl: Array.from(toolbar.querySelectorAll('ion-buttons')) || []
                        };
                    }) || [[]]
                };
            };
            var handleContentScroll = function (scrollEl, scrollHeaderIndex) {
                Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["f"])(function () {
                    var scrollTop = scrollEl.scrollTop;
                    var scale = Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["c"])(1, 1 + (-scrollTop / 500), 1.1);
                    Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["w"])(function () {
                        scaleLargeTitles(scrollHeaderIndex.toolbars, scale);
                    });
                });
            };
            var setToolbarBackgroundOpacity = function (toolbar, opacity) {
                if (opacity === undefined) {
                    toolbar.background.style.removeProperty('--opacity');
                }
                else {
                    toolbar.background.style.setProperty('--opacity', opacity.toString());
                }
            };
            var handleToolbarBorderIntersection = function (ev, mainHeaderIndex) {
                if (!ev[0].isIntersecting) {
                    return;
                }
                var scale = ((1 - ev[0].intersectionRatio) * 100) / 75;
                setToolbarBackgroundOpacity(mainHeaderIndex.toolbars[0], (scale === 1) ? undefined : scale);
            };
            /**
             * If toolbars are intersecting, hide the scrollable toolbar content
             * and show the primary toolbar content. If the toolbars are not intersecting,
             * hide the primary toolbar content and show the scrollable toolbar content
             */
            var handleToolbarIntersection = function (ev, mainHeaderIndex, scrollHeaderIndex) {
                Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["w"])(function () {
                    handleToolbarBorderIntersection(ev, mainHeaderIndex);
                    var event = ev[0];
                    var intersection = event.intersectionRect;
                    var intersectionArea = intersection.width * intersection.height;
                    var rootArea = event.rootBounds.width * event.rootBounds.height;
                    var isPageHidden = intersectionArea === 0 && rootArea === 0;
                    var leftDiff = Math.abs(intersection.left - event.boundingClientRect.left);
                    var rightDiff = Math.abs(intersection.right - event.boundingClientRect.right);
                    var isPageTransitioning = intersectionArea > 0 && (leftDiff >= 5 || rightDiff >= 5);
                    if (isPageHidden || isPageTransitioning) {
                        return;
                    }
                    if (event.isIntersecting) {
                        setHeaderActive(mainHeaderIndex, false);
                        setHeaderActive(scrollHeaderIndex);
                    }
                    else {
                        /**
                         * There is a bug with IntersectionObserver on Safari
                         * where `event.isIntersecting === false` when cancelling
                         * a swipe to go back gesture. Checking the intersection
                         * x, y, width, and height provides a workaround. This bug
                         * does not happen when using Safari + Web Animations,
                         * only Safari + CSS Animations.
                         */
                        var hasValidIntersection = (intersection.x === 0 && intersection.y === 0) || (intersection.width !== 0 && intersection.height !== 0);
                        if (hasValidIntersection) {
                            setHeaderActive(mainHeaderIndex);
                            setHeaderActive(scrollHeaderIndex, false);
                            setToolbarBackgroundOpacity(mainHeaderIndex.toolbars[0], 1);
                        }
                    }
                });
            };
            var setHeaderActive = function (headerIndex, active) {
                if (active === void 0) { active = true; }
                Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["w"])(function () {
                    if (active) {
                        headerIndex.el.classList.remove('header-collapse-condense-inactive');
                    }
                    else {
                        headerIndex.el.classList.add('header-collapse-condense-inactive');
                    }
                });
            };
            var scaleLargeTitles = function (toolbars, scale, transition) {
                if (toolbars === void 0) { toolbars = []; }
                if (scale === void 0) { scale = 1; }
                if (transition === void 0) { transition = false; }
                toolbars.forEach(function (toolbar) {
                    var ionTitle = toolbar.ionTitleEl;
                    var titleDiv = toolbar.innerTitleEl;
                    if (!ionTitle || ionTitle.size !== 'large') {
                        return;
                    }
                    titleDiv.style.transformOrigin = 'left center';
                    titleDiv.style.transition = (transition) ? TRANSITION : '';
                    titleDiv.style.transform = "scale3d(" + scale + ", " + scale + ", 1)";
                });
            };
            var Header = /** @class */ (function () {
                function class_5(hostRef) {
                    Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
                    this.collapsibleHeaderInitialized = false;
                    /**
                     * If `true`, the header will be translucent.
                     * Only applies when the mode is `"ios"` and the device supports
                     * [`backdrop-filter`](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#Browser_compatibility).
                     *
                     * Note: In order to scroll content behind the header, the `fullscreen`
                     * attribute needs to be set on the content.
                     */
                    this.translucent = false;
                }
                class_5.prototype.componentDidLoad = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.checkCollapsibleHeader()];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    });
                };
                class_5.prototype.componentDidUpdate = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.checkCollapsibleHeader()];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    });
                };
                class_5.prototype.componentDidUnload = function () {
                    this.destroyCollapsibleHeader();
                };
                class_5.prototype.checkCollapsibleHeader = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        var hasCollapse, canCollapse, pageEl, contentEl;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    hasCollapse = this.collapse === 'condense';
                                    canCollapse = (hasCollapse && Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this) === 'ios') ? hasCollapse : false;
                                    if (!(!canCollapse && this.collapsibleHeaderInitialized)) return [3 /*break*/, 1];
                                    this.destroyCollapsibleHeader();
                                    return [3 /*break*/, 3];
                                case 1:
                                    if (!(canCollapse && !this.collapsibleHeaderInitialized)) return [3 /*break*/, 3];
                                    pageEl = this.el.closest('ion-app,ion-page,.ion-page,page-inner');
                                    contentEl = (pageEl) ? pageEl.querySelector('ion-content') : null;
                                    return [4 /*yield*/, this.setupCollapsibleHeader(contentEl, pageEl)];
                                case 2:
                                    _a.sent();
                                    _a.label = 3;
                                case 3: return [2 /*return*/];
                            }
                        });
                    });
                };
                class_5.prototype.destroyCollapsibleHeader = function () {
                    if (this.intersectionObserver) {
                        this.intersectionObserver.disconnect();
                        this.intersectionObserver = undefined;
                    }
                    if (this.scrollEl && this.contentScrollCallback) {
                        this.scrollEl.removeEventListener('scroll', this.contentScrollCallback);
                        this.contentScrollCallback = undefined;
                    }
                };
                class_5.prototype.setupCollapsibleHeader = function (contentEl, pageEl) {
                    return __awaiter(this, void 0, void 0, function () {
                        var _a;
                        var _this = this;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    if (!contentEl || !pageEl) {
                                        console.error('ion-header requires a content to collapse, make sure there is an ion-content.');
                                        return [2 /*return*/];
                                    }
                                    _a = this;
                                    return [4 /*yield*/, contentEl.getScrollElement()];
                                case 1:
                                    _a.scrollEl = _b.sent();
                                    Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["f"])(function () {
                                        var headers = pageEl.querySelectorAll('ion-header');
                                        var mainHeader = Array.from(headers).find(function (header) { return header.collapse !== 'condense'; });
                                        if (!mainHeader || !_this.scrollEl) {
                                            return;
                                        }
                                        var mainHeaderIndex = createHeaderIndex(mainHeader);
                                        var scrollHeaderIndex = createHeaderIndex(_this.el);
                                        if (!mainHeaderIndex || !scrollHeaderIndex) {
                                            return;
                                        }
                                        setHeaderActive(mainHeaderIndex, false);
                                        Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["f"])(function () {
                                            var mainHeaderHeight = mainHeaderIndex.el.clientHeight;
                                            /**
                                             * Handle interaction between toolbar collapse and
                                             * showing/hiding content in the primary ion-header
                                             * as well as progressively showing/hiding the main header
                                             * border as the top-most toolbar collapses or expands.
                                             */
                                            var toolbarIntersection = function (ev) { handleToolbarIntersection(ev, mainHeaderIndex, scrollHeaderIndex); };
                                            _this.intersectionObserver = new IntersectionObserver(toolbarIntersection, { threshold: [0.25, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], rootMargin: "-" + mainHeaderHeight + "px 0px 0px 0px" });
                                            _this.intersectionObserver.observe(scrollHeaderIndex.toolbars[0].el);
                                        });
                                        /**
                                         * Handle scaling of large iOS titles and
                                         * showing/hiding border on last toolbar
                                         * in primary header
                                         */
                                        _this.contentScrollCallback = function () { handleContentScroll(_this.scrollEl, scrollHeaderIndex); };
                                        _this.scrollEl.addEventListener('scroll', _this.contentScrollCallback);
                                    });
                                    Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["w"])(function () {
                                        cloneElement('ion-title');
                                        cloneElement('ion-back-button');
                                    });
                                    this.collapsibleHeaderInitialized = true;
                                    return [2 /*return*/];
                            }
                        });
                    });
                };
                class_5.prototype.render = function () {
                    var _a;
                    var mode = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
                    var collapse = this.collapse || 'none';
                    return (Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["H"], { role: "banner", class: (_a = {},
                            _a[mode] = true,
                            // Used internally for styling
                            _a["header-" + mode] = true,
                            _a["header-translucent"] = this.translucent,
                            _a["header-collapse-" + collapse] = true,
                            _a["header-translucent-" + mode] = this.translucent,
                            _a) }));
                };
                Object.defineProperty(class_5.prototype, "el", {
                    get: function () { return Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this); },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(class_5, "style", {
                    get: function () { return "ion-header{display:block;position:relative;-ms-flex-order:-1;order:-1;width:100%;z-index:10}ion-header ion-toolbar:first-child{padding-top:var(--ion-safe-area-top,0)}.header-ios ion-toolbar:last-child{--border-width:0 0 0.55px}.header-ios[no-border] ion-toolbar:last-child{--border-width:0}\@supports ((-webkit-backdrop-filter:blur(0)) or (backdrop-filter:blur(0))){.header-translucent-ios{-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}.header-translucent-ios ion-toolbar{--opacity:.8;--backdrop-filter:saturate(180%) blur(20px)}}.header-collapse-condense{z-index:9}.header-collapse-condense ion-toolbar{position:-webkit-sticky;position:sticky;top:0}.header-collapse-condense ion-toolbar:first-child{padding-top:7px;z-index:1}.header-collapse-condense ion-toolbar{z-index:0}.header-collapse-condense ion-toolbar ion-searchbar{height:48px;padding-top:0;padding-bottom:13px}ion-toolbar.in-toolbar ion-buttons,ion-toolbar.in-toolbar ion-title{-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out}.header-collapse-condense ion-toolbar ion-buttons,.header-collapse-condense ion-toolbar ion-title{-webkit-transition:none;transition:none}.header-collapse-condense-inactive ion-toolbar.in-toolbar ion-buttons.buttons-collapse,.header-collapse-condense-inactive ion-toolbar.in-toolbar ion-title{opacity:0;pointer-events:none}"; },
                    enumerable: true,
                    configurable: true
                });
                return class_5;
            }());
            var RouterOutlet = /** @class */ (function () {
                function class_6(hostRef) {
                    Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
                    this.animationEnabled = true;
                    /**
                     * The mode determines which platform styles to use.
                     */
                    this.mode = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
                    /**
                     * If `true`, the router-outlet should animate the transition of components.
                     */
                    this.animated = true;
                    this.ionNavWillLoad = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionNavWillLoad", 7);
                    this.ionNavWillChange = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionNavWillChange", 3);
                    this.ionNavDidChange = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionNavDidChange", 3);
                }
                class_6.prototype.swipeHandlerChanged = function () {
                    if (this.gesture) {
                        this.gesture.setDisabled(this.swipeHandler === undefined);
                    }
                };
                class_6.prototype.connectedCallback = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        var _a;
                        var _this = this;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    _a = this;
                                    return [4 /*yield*/, __webpack_require__.e(/*! import() | swipe-back-35ad8e37-js */ "swipe-back-35ad8e37-js").then(__webpack_require__.bind(null, /*! ./swipe-back-35ad8e37.js */ "./node_modules/@ionic/core/dist/esm/swipe-back-35ad8e37.js"))];
                                case 1:
                                    _a.gesture = (_b.sent()).createSwipeBackGesture(this.el, function () { return !!_this.swipeHandler && _this.swipeHandler.canStart() && _this.animationEnabled; }, function () { return _this.swipeHandler && _this.swipeHandler.onStart(); }, function (step) { return _this.ani && _this.ani.progressStep(step); }, function (shouldComplete, step, dur) {
                                        if (_this.ani) {
                                            _this.animationEnabled = false;
                                            _this.ani.onFinish(function () {
                                                _this.animationEnabled = true;
                                                if (_this.swipeHandler) {
                                                    _this.swipeHandler.onEnd(shouldComplete);
                                                }
                                            }, { oneTimeCallback: true });
                                            // Account for rounding errors in JS
                                            var newStepValue = (shouldComplete) ? -0.001 : 0.001;
                                            /**
                                             * Animation will be reversed here, so need to
                                             * reverse the easing curve as well
                                             *
                                             * Additionally, we need to account for the time relative
                                             * to the new easing curve, as `stepValue` is going to be given
                                             * in terms of a linear curve.
                                             */
                                            if (!shouldComplete) {
                                                _this.ani.easing('cubic-bezier(1, 0, 0.68, 0.28)');
                                                newStepValue += Object(_cubic_bezier_2812fda3_js__WEBPACK_IMPORTED_MODULE_7__["g"])(new _cubic_bezier_2812fda3_js__WEBPACK_IMPORTED_MODULE_7__["P"](0, 0), new _cubic_bezier_2812fda3_js__WEBPACK_IMPORTED_MODULE_7__["P"](1, 0), new _cubic_bezier_2812fda3_js__WEBPACK_IMPORTED_MODULE_7__["P"](0.68, 0.28), new _cubic_bezier_2812fda3_js__WEBPACK_IMPORTED_MODULE_7__["P"](1, 1), step);
                                            }
                                            else {
                                                newStepValue += Object(_cubic_bezier_2812fda3_js__WEBPACK_IMPORTED_MODULE_7__["g"])(new _cubic_bezier_2812fda3_js__WEBPACK_IMPORTED_MODULE_7__["P"](0, 0), new _cubic_bezier_2812fda3_js__WEBPACK_IMPORTED_MODULE_7__["P"](0.32, 0.72), new _cubic_bezier_2812fda3_js__WEBPACK_IMPORTED_MODULE_7__["P"](0, 1), new _cubic_bezier_2812fda3_js__WEBPACK_IMPORTED_MODULE_7__["P"](1, 1), step);
                                            }
                                            _this.ani.progressEnd(shouldComplete ? 1 : 0, newStepValue, dur);
                                        }
                                    });
                                    this.swipeHandlerChanged();
                                    return [2 /*return*/];
                            }
                        });
                    });
                };
                class_6.prototype.componentWillLoad = function () {
                    this.ionNavWillLoad.emit();
                };
                class_6.prototype.disconnectedCallback = function () {
                    if (this.gesture) {
                        this.gesture.destroy();
                        this.gesture = undefined;
                    }
                };
                /** @internal */
                class_6.prototype.commit = function (enteringEl, leavingEl, opts) {
                    return __awaiter(this, void 0, void 0, function () {
                        var unlock, changed, e_1;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.lock()];
                                case 1:
                                    unlock = _a.sent();
                                    changed = false;
                                    _a.label = 2;
                                case 2:
                                    _a.trys.push([2, 4, , 5]);
                                    return [4 /*yield*/, this.transition(enteringEl, leavingEl, opts)];
                                case 3:
                                    changed = _a.sent();
                                    return [3 /*break*/, 5];
                                case 4:
                                    e_1 = _a.sent();
                                    console.error(e_1);
                                    return [3 /*break*/, 5];
                                case 5:
                                    unlock();
                                    return [2 /*return*/, changed];
                            }
                        });
                    });
                };
                /** @internal */
                class_6.prototype.setRouteId = function (id, params, direction) {
                    return __awaiter(this, void 0, void 0, function () {
                        var changed;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.setRoot(id, params, {
                                        duration: direction === 'root' ? 0 : undefined,
                                        direction: direction === 'back' ? 'back' : 'forward',
                                    })];
                                case 1:
                                    changed = _a.sent();
                                    return [2 /*return*/, {
                                            changed: changed,
                                            element: this.activeEl
                                        }];
                            }
                        });
                    });
                };
                /** @internal */
                class_6.prototype.getRouteId = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        var active;
                        return __generator(this, function (_a) {
                            active = this.activeEl;
                            return [2 /*return*/, active ? {
                                    id: active.tagName,
                                    element: active,
                                } : undefined];
                        });
                    });
                };
                class_6.prototype.setRoot = function (component, params, opts) {
                    return __awaiter(this, void 0, void 0, function () {
                        var leavingEl, enteringEl;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    if (this.activeComponent === component) {
                                        return [2 /*return*/, false];
                                    }
                                    leavingEl = this.activeEl;
                                    return [4 /*yield*/, Object(_framework_delegate_c2e2e1f4_js__WEBPACK_IMPORTED_MODULE_5__["a"])(this.delegate, this.el, component, ['ion-page', 'ion-page-invisible'], params)];
                                case 1:
                                    enteringEl = _a.sent();
                                    this.activeComponent = component;
                                    this.activeEl = enteringEl;
                                    // commit animation
                                    return [4 /*yield*/, this.commit(enteringEl, leavingEl, opts)];
                                case 2:
                                    // commit animation
                                    _a.sent();
                                    return [4 /*yield*/, Object(_framework_delegate_c2e2e1f4_js__WEBPACK_IMPORTED_MODULE_5__["d"])(this.delegate, leavingEl)];
                                case 3:
                                    _a.sent();
                                    return [2 /*return*/, true];
                            }
                        });
                    });
                };
                class_6.prototype.transition = function (enteringEl, leavingEl, opts) {
                    if (opts === void 0) { opts = {}; }
                    return __awaiter(this, void 0, void 0, function () {
                        var _a, el, mode, animated, animationBuilder;
                        var _this = this;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    if (leavingEl === enteringEl) {
                                        return [2 /*return*/, false];
                                    }
                                    // emit nav will change event
                                    this.ionNavWillChange.emit();
                                    _a = this, el = _a.el, mode = _a.mode;
                                    animated = this.animated && _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__["b"].getBoolean('animated', true);
                                    animationBuilder = this.animation || opts.animationBuilder || _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__["b"].get('navAnimation');
                                    return [4 /*yield*/, Object(_index_6826f2f6_js__WEBPACK_IMPORTED_MODULE_6__["t"])(Object.assign({ mode: mode,
                                            animated: animated,
                                            animationBuilder: animationBuilder,
                                            enteringEl: enteringEl,
                                            leavingEl: leavingEl, baseEl: el, progressCallback: (opts.progressAnimation
                                                ? function (ani) { return _this.ani = ani; }
                                                : undefined) }, opts))];
                                case 1:
                                    _b.sent();
                                    // emit nav changed event
                                    this.ionNavDidChange.emit();
                                    return [2 /*return*/, true];
                            }
                        });
                    });
                };
                class_6.prototype.lock = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        var p, resolve;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    p = this.waitPromise;
                                    this.waitPromise = new Promise(function (r) { return resolve = r; });
                                    if (!(p !== undefined)) return [3 /*break*/, 2];
                                    return [4 /*yield*/, p];
                                case 1:
                                    _a.sent();
                                    _a.label = 2;
                                case 2: return [2 /*return*/, resolve];
                            }
                        });
                    });
                };
                class_6.prototype.render = function () {
                    return (Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null));
                };
                Object.defineProperty(class_6.prototype, "el", {
                    get: function () { return Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this); },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(class_6, "watchers", {
                    get: function () {
                        return {
                            "swipeHandler": ["swipeHandlerChanged"]
                        };
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(class_6, "style", {
                    get: function () { return ":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;overflow:hidden;z-index:0}"; },
                    enumerable: true,
                    configurable: true
                });
                return class_6;
            }());
            var ToolbarTitle = /** @class */ (function () {
                function class_7(hostRef) {
                    Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
                    this.ionStyle = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionStyle", 7);
                }
                class_7.prototype.sizeChanged = function () {
                    this.emitStyle();
                };
                class_7.prototype.connectedCallback = function () {
                    this.emitStyle();
                };
                class_7.prototype.emitStyle = function () {
                    var _a;
                    var size = this.getSize();
                    this.ionStyle.emit((_a = {},
                        _a["title-" + size] = true,
                        _a));
                };
                class_7.prototype.getSize = function () {
                    return (this.size !== undefined) ? this.size : 'default';
                };
                class_7.prototype.getMode = function () {
                    var mode = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
                    var toolbar = this.el.closest('ion-toolbar');
                    return (toolbar && toolbar.mode) || mode;
                };
                class_7.prototype.render = function () {
                    var _a;
                    var mode = this.getMode();
                    var size = this.getSize();
                    return (Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["H"], { class: Object.assign((_a = {}, _a[mode] = true, _a["title-" + mode] = true, _a["title-" + size] = true, _a), Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_4__["c"])(this.color)) }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "toolbar-title" }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null))));
                };
                Object.defineProperty(class_7.prototype, "el", {
                    get: function () { return Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this); },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(class_7, "watchers", {
                    get: function () {
                        return {
                            "size": ["sizeChanged"]
                        };
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(class_7, "style", {
                    get: function () { return ":host{--color:initial;display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-align:center;align-items:center;-webkit-transform:translateZ(0);transform:translateZ(0);color:var(--color)}:host(.title-ios.title-default),:host(.title-ios.title-large){left:0;top:0;padding-left:90px;padding-right:90px;padding-top:0;padding-bottom:0;position:absolute;width:100%;height:100%;-webkit-transform:translateZ(0);transform:translateZ(0);font-size:17px;font-weight:600;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;pointer-events:none}:host-context([dir=rtl]).title-ios.title-default,:host-context([dir=rtl]).title-ios.title-large,:host-context([dir=rtl]):host(.title-ios.title-default),:host-context([dir=rtl]):host(.title-ios.title-large){left:unset;right:unset;right:0}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.title-ios.title-default),:host(.title-ios.title-large){padding-left:unset;padding-right:unset;-webkit-padding-start:90px;padding-inline-start:90px;-webkit-padding-end:90px;padding-inline-end:90px}}:host(.title-md){padding-left:20px;padding-right:20px;padding-top:0;padding-bottom:0;font-size:20px;font-weight:500;letter-spacing:.0125em}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.title-md){padding-left:unset;padding-right:unset;-webkit-padding-start:20px;padding-inline-start:20px;-webkit-padding-end:20px;padding-inline-end:20px}}:host(.ion-color){color:var(--ion-color-base)}.toolbar-title{display:block;width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;pointer-events:auto}:host(.title-small) .toolbar-title{white-space:normal}:host(.title-ios.title-small){padding-left:9px;padding-right:9px;padding-top:6px;padding-bottom:16px;width:100%;height:100%;font-size:13px;text-align:center}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.title-ios.title-small){padding-left:unset;padding-right:unset;-webkit-padding-start:9px;padding-inline-start:9px;-webkit-padding-end:9px;padding-inline-end:9px}}:host(.title-md.title-small){width:100%;height:100%;font-size:15px;font-weight:400}:host(.title-ios.title-large){padding-left:16px;padding-right:16px;padding-top:0;padding-bottom:0;bottom:0;-ms-flex-align:end;align-items:flex-end;min-width:100%;padding-bottom:6px;font-size:34px;font-weight:700;text-align:start}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.title-ios.title-large){padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}"; },
                    enumerable: true,
                    configurable: true
                });
                return class_7;
            }());
            var Toolbar = /** @class */ (function () {
                function class_8(hostRef) {
                    Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
                    this.childrenStyles = new Map();
                }
                class_8.prototype.componentWillLoad = function () {
                    var buttons = Array.from(this.el.querySelectorAll('ion-buttons'));
                    var firstButtons = buttons.find(function (button) {
                        return button.slot === 'start';
                    });
                    if (firstButtons) {
                        firstButtons.classList.add('buttons-first-slot');
                    }
                    var buttonsReversed = buttons.reverse();
                    var lastButtons = buttonsReversed.find(function (button) { return button.slot === 'end'; }) ||
                        buttonsReversed.find(function (button) { return button.slot === 'primary'; }) ||
                        buttonsReversed.find(function (button) { return button.slot === 'secondary'; });
                    if (lastButtons) {
                        lastButtons.classList.add('buttons-last-slot');
                    }
                };
                class_8.prototype.childrenStyle = function (ev) {
                    ev.stopPropagation();
                    var tagName = ev.target.tagName;
                    var updatedStyles = ev.detail;
                    var newStyles = {};
                    var childStyles = this.childrenStyles.get(tagName) || {};
                    var hasStyleChange = false;
                    Object.keys(updatedStyles).forEach(function (key) {
                        var childKey = "toolbar-" + key;
                        var newValue = updatedStyles[key];
                        if (newValue !== childStyles[childKey]) {
                            hasStyleChange = true;
                        }
                        if (newValue) {
                            newStyles[childKey] = true;
                        }
                    });
                    if (hasStyleChange) {
                        this.childrenStyles.set(tagName, newStyles);
                        this.el.forceUpdate();
                    }
                };
                class_8.prototype.render = function () {
                    var _a;
                    var mode = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
                    var childStyles = {};
                    this.childrenStyles.forEach(function (value) {
                        Object.assign(childStyles, value);
                    });
                    return (Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["H"], { class: Object.assign(Object.assign((_a = { 'in-toolbar': Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_4__["h"])('ion-toolbar', this.el) }, _a[mode] = true, _a), childStyles), Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_4__["c"])(this.color)) }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "toolbar-background" }), Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "toolbar-container" }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "start" }), Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "secondary" }), Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "toolbar-content" }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)), Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "primary" }), Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "end" }))));
                };
                Object.defineProperty(class_8.prototype, "el", {
                    get: function () { return Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this); },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(class_8, "style", {
                    get: function () { return ":host{--border-width:0;--border-style:solid;--opacity:1;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;padding-left:var(--ion-safe-area-left);padding-right:var(--ion-safe-area-right);display:block;position:relative;width:100%;color:var(--color);font-family:var(--ion-font-family,inherit);contain:content;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-safe-area-left);padding-inline-start:var(--ion-safe-area-left);-webkit-padding-end:var(--ion-safe-area-right);padding-inline-end:var(--ion-safe-area-right)}}:host(.ion-color){color:var(--ion-color-contrast)}:host(.ion-color) .toolbar-background{background:var(--ion-color-base)}.toolbar-container{padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;width:100%;min-height:var(--min-height);contain:content;overflow:hidden;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.toolbar-container{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.toolbar-background{top:0;-webkit-transform:translateZ(0);transform:translateZ(0);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict;opacity:var(--opacity);z-index:-1;pointer-events:none}.toolbar-background,::slotted(ion-progress-bar){left:0;right:0;bottom:0;position:absolute}:host{--background:var(--ion-toolbar-background,var(--ion-color-step-50,#fff));--color:var(--ion-toolbar-color,var(--ion-text-color,#000));--border-color:var(--ion-toolbar-border-color,var(--ion-border-color,var(--ion-color-step-150,rgba(0,0,0,0.2))));--padding-top:3px;--padding-bottom:3px;--padding-start:4px;--padding-end:4px;--min-height:44px}.toolbar-content{-ms-flex:1;flex:1;-ms-flex-order:4;order:4;min-width:0}:host(.toolbar-segment){--min-height:auto}:host(.toolbar-searchbar) .toolbar-container{padding-top:0;padding-bottom:0}:host(.toolbar-searchbar) ::slotted(*){-ms-flex-item-align:start;align-self:start}:host(.toolbar-searchbar) ::slotted(ion-chip){margin-top:3px}:host(.toolbar-searchbar) ::slotted(ion-back-button){height:38px}::slotted(ion-buttons){min-height:38px}::slotted([slot=start]){-ms-flex-order:2;order:2}::slotted([slot=secondary]){-ms-flex-order:3;order:3}::slotted([slot=primary]){-ms-flex-order:5;order:5;text-align:end}::slotted([slot=end]){-ms-flex-order:6;order:6;text-align:end}:host(.toolbar-title-large) .toolbar-container{-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:start;align-items:flex-start}:host(.toolbar-title-large) .toolbar-content ion-title{-ms-flex:1;flex:1;-ms-flex-order:8;order:8;min-width:100%}"; },
                    enumerable: true,
                    configurable: true
                });
                return class_8;
            }());
            /***/ 
        })
    }]);
//# sourceMappingURL=5-es2015.js.map
//# sourceMappingURL=5-es5.js.map
//# sourceMappingURL=5-es5.js.map