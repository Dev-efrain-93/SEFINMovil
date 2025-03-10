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
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[50], {
        /***/ "./node_modules/@ionic/core/dist/esm/ion-refresher_2-ios.entry.js": 
        /*!************************************************************************!*\
          !*** ./node_modules/@ionic/core/dist/esm/ion-refresher_2-ios.entry.js ***!
          \************************************************************************/
        /*! exports provided: ion_refresher, ion_refresher_content */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_refresher", function () { return Refresher; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_refresher_content", function () { return RefresherContent; });
            /* harmony import */ var _core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-ca0488fc.js */ "./node_modules/@ionic/core/dist/esm/core-ca0488fc.js");
            /* harmony import */ var _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config-3c7f3790.js */ "./node_modules/@ionic/core/dist/esm/config-3c7f3790.js");
            /* harmony import */ var _index_3476b023_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-3476b023.js */ "./node_modules/@ionic/core/dist/esm/index-3476b023.js");
            var Refresher = /** @class */ (function () {
                function class_1(hostRef) {
                    Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
                    this.appliedStyles = false;
                    this.didStart = false;
                    this.progress = 0;
                    /**
                     * The current state which the refresher is in. The refresher's states include:
                     *
                     * - `inactive` - The refresher is not being pulled down or refreshing and is currently hidden.
                     * - `pulling` - The user is actively pulling down the refresher, but has not reached the point yet that if the user lets go, it'll refresh.
                     * - `cancelling` - The user pulled down the refresher and let go, but did not pull down far enough to kick off the `refreshing` state. After letting go, the refresher is in the `cancelling` state while it is closing, and will go back to the `inactive` state once closed.
                     * - `ready` - The user has pulled down the refresher far enough that if they let go, it'll begin the `refreshing` state.
                     * - `refreshing` - The refresher is actively waiting on the async operation to end. Once the refresh handler calls `complete()` it will begin the `completing` state.
                     * - `completing` - The `refreshing` state has finished and the refresher is in the way of closing itself. Once closed, the refresher will go back to the `inactive` state.
                     */
                    this.state = 1 /* Inactive */;
                    /**
                     * The minimum distance the user must pull down until the
                     * refresher will go into the `refreshing` state.
                     */
                    this.pullMin = 60;
                    /**
                     * The maximum distance of the pull until the refresher
                     * will automatically go into the `refreshing` state.
                     * Defaults to the result of `pullMin + 60`.
                     */
                    this.pullMax = this.pullMin + 60;
                    /**
                     * Time it takes to close the refresher.
                     */
                    this.closeDuration = '280ms';
                    /**
                     * Time it takes the refresher to to snap back to the `refreshing` state.
                     */
                    this.snapbackDuration = '280ms';
                    /**
                     * How much to multiply the pull speed by. To slow the pull animation down,
                     * pass a number less than `1`. To speed up the pull, pass a number greater
                     * than `1`. The default value is `1` which is equal to the speed of the cursor.
                     * If a negative value is passed in, the factor will be `1` instead.
                     *
                     * For example: If the value passed is `1.2` and the content is dragged by
                     * `10` pixels, instead of `10` pixels the content will be pulled by `12` pixels
                     * (an increase of 20 percent). If the value passed is `0.8`, the dragged amount
                     * will be `8` pixels, less than the amount the cursor has moved.
                     */
                    this.pullFactor = 1;
                    /**
                     * If `true`, the refresher will be hidden.
                     */
                    this.disabled = false;
                    this.ionRefresh = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionRefresh", 7);
                    this.ionPull = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionPull", 7);
                    this.ionStart = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionStart", 7);
                }
                class_1.prototype.disabledChanged = function () {
                    if (this.gesture) {
                        this.gesture.setDisabled(this.disabled);
                    }
                };
                class_1.prototype.connectedCallback = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        var contentEl, _a, _b;
                        var _this = this;
                        return __generator(this, function (_c) {
                            switch (_c.label) {
                                case 0:
                                    if (this.el.getAttribute('slot') !== 'fixed') {
                                        console.error('Make sure you use: <ion-refresher slot="fixed">');
                                        return [2 /*return*/];
                                    }
                                    contentEl = this.el.closest('ion-content');
                                    if (!contentEl) {
                                        console.error('<ion-refresher> must be used inside an <ion-content>');
                                        return [2 /*return*/];
                                    }
                                    _a = this;
                                    return [4 /*yield*/, contentEl.getScrollElement()];
                                case 1:
                                    _a.scrollEl = _c.sent();
                                    _b = this;
                                    return [4 /*yield*/, Promise.resolve( /*! import() */).then(__webpack_require__.bind(null, /*! ./index-624eea58.js */ "./node_modules/@ionic/core/dist/esm/index-624eea58.js"))];
                                case 2:
                                    _b.gesture = (_c.sent()).createGesture({
                                        el: contentEl,
                                        gestureName: 'refresher',
                                        gesturePriority: 10,
                                        direction: 'y',
                                        threshold: 20,
                                        passive: false,
                                        canStart: function () { return _this.canStart(); },
                                        onStart: function () { return _this.onStart(); },
                                        onMove: function (ev) { return _this.onMove(ev); },
                                        onEnd: function () { return _this.onEnd(); },
                                    });
                                    this.disabledChanged();
                                    return [2 /*return*/];
                            }
                        });
                    });
                };
                class_1.prototype.disconnectedCallback = function () {
                    this.scrollEl = undefined;
                    if (this.gesture) {
                        this.gesture.destroy();
                        this.gesture = undefined;
                    }
                };
                /**
                 * Call `complete()` when your async operation has completed.
                 * For example, the `refreshing` state is while the app is performing
                 * an asynchronous operation, such as receiving more data from an
                 * AJAX request. Once the data has been received, you then call this
                 * method to signify that the refreshing has completed and to close
                 * the refresher. This method also changes the refresher's state from
                 * `refreshing` to `completing`.
                 */
                class_1.prototype.complete = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            this.close(32 /* Completing */, '120ms');
                            return [2 /*return*/];
                        });
                    });
                };
                /**
                 * Changes the refresher's state from `refreshing` to `cancelling`.
                 */
                class_1.prototype.cancel = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            this.close(16 /* Cancelling */, '');
                            return [2 /*return*/];
                        });
                    });
                };
                /**
                 * A number representing how far down the user has pulled.
                 * The number `0` represents the user hasn't pulled down at all. The
                 * number `1`, and anything greater than `1`, represents that the user
                 * has pulled far enough down that when they let go then the refresh will
                 * happen. If they let go and the number is less than `1`, then the
                 * refresh will not happen, and the content will return to it's original
                 * position.
                 */
                class_1.prototype.getProgress = function () {
                    return Promise.resolve(this.progress);
                };
                class_1.prototype.canStart = function () {
                    if (!this.scrollEl) {
                        return false;
                    }
                    if (this.state !== 1 /* Inactive */) {
                        return false;
                    }
                    // if the scrollTop is greater than zero then it's
                    // not possible to pull the content down yet
                    if (this.scrollEl.scrollTop > 0) {
                        return false;
                    }
                    return true;
                };
                class_1.prototype.onStart = function () {
                    this.progress = 0;
                    this.state = 1 /* Inactive */;
                };
                class_1.prototype.onMove = function (detail) {
                    if (!this.scrollEl) {
                        return;
                    }
                    // this method can get called like a bazillion times per second,
                    // so it's built to be as efficient as possible, and does its
                    // best to do any DOM read/writes only when absolutely necessary
                    // if multi-touch then get out immediately
                    var ev = detail.event;
                    if (ev.touches && ev.touches.length > 1) {
                        return;
                    }
                    // do nothing if it's actively refreshing
                    // or it's in the way of closing
                    // or this was never a startY
                    if ((this.state & 56 /* _BUSY_ */) !== 0) {
                        return;
                    }
                    var pullFactor = (Number.isNaN(this.pullFactor) || this.pullFactor < 0) ? 1 : this.pullFactor;
                    var deltaY = detail.deltaY * pullFactor;
                    // don't bother if they're scrolling up
                    // and have not already started dragging
                    if (deltaY <= 0) {
                        // the current Y is higher than the starting Y
                        // so they scrolled up enough to be ignored
                        this.progress = 0;
                        this.state = 1 /* Inactive */;
                        if (this.appliedStyles) {
                            // reset the styles only if they were applied
                            this.setCss(0, '', false, '');
                            return;
                        }
                        return;
                    }
                    if (this.state === 1 /* Inactive */) {
                        // this refresh is not already actively pulling down
                        // get the content's scrollTop
                        var scrollHostScrollTop = this.scrollEl.scrollTop;
                        // if the scrollTop is greater than zero then it's
                        // not possible to pull the content down yet
                        if (scrollHostScrollTop > 0) {
                            this.progress = 0;
                            return;
                        }
                        // content scrolled all the way to the top, and dragging down
                        this.state = 2 /* Pulling */;
                    }
                    // prevent native scroll events
                    if (ev.cancelable) {
                        ev.preventDefault();
                    }
                    // the refresher is actively pulling at this point
                    // move the scroll element within the content element
                    this.setCss(deltaY, '0ms', true, '');
                    if (deltaY === 0) {
                        // don't continue if there's no delta yet
                        this.progress = 0;
                        return;
                    }
                    var pullMin = this.pullMin;
                    // set pull progress
                    this.progress = deltaY / pullMin;
                    // emit "start" if it hasn't started yet
                    if (!this.didStart) {
                        this.didStart = true;
                        this.ionStart.emit();
                    }
                    // emit "pulling" on every move
                    this.ionPull.emit();
                    // do nothing if the delta is less than the pull threshold
                    if (deltaY < pullMin) {
                        // ensure it stays in the pulling state, cuz its not ready yet
                        this.state = 2 /* Pulling */;
                        return;
                    }
                    if (deltaY > this.pullMax) {
                        // they pulled farther than the max, so kick off the refresh
                        this.beginRefresh();
                        return;
                    }
                    // pulled farther than the pull min!!
                    // it is now in the `ready` state!!
                    // if they let go then it'll refresh, kerpow!!
                    this.state = 4 /* Ready */;
                    return;
                };
                class_1.prototype.onEnd = function () {
                    // only run in a zone when absolutely necessary
                    if (this.state === 4 /* Ready */) {
                        // they pulled down far enough, so it's ready to refresh
                        this.beginRefresh();
                    }
                    else if (this.state === 2 /* Pulling */) {
                        // they were pulling down, but didn't pull down far enough
                        // set the content back to it's original location
                        // and close the refresher
                        // set that the refresh is actively cancelling
                        this.cancel();
                    }
                };
                class_1.prototype.beginRefresh = function () {
                    // assumes we're already back in a zone
                    // they pulled down far enough, so it's ready to refresh
                    this.state = 8 /* Refreshing */;
                    // place the content in a hangout position while it thinks
                    this.setCss(this.pullMin, this.snapbackDuration, true, '');
                    // emit "refresh" because it was pulled down far enough
                    // and they let go to begin refreshing
                    this.ionRefresh.emit({
                        complete: this.complete.bind(this)
                    });
                };
                class_1.prototype.close = function (state, delay) {
                    var _this = this;
                    // create fallback timer incase something goes wrong with transitionEnd event
                    setTimeout(function () {
                        _this.state = 1 /* Inactive */;
                        _this.progress = 0;
                        _this.didStart = false;
                        _this.setCss(0, '0ms', false, '');
                    }, 600);
                    // reset set the styles on the scroll element
                    // set that the refresh is actively cancelling/completing
                    this.state = state;
                    this.setCss(0, this.closeDuration, true, delay);
                    // TODO: stop gesture
                };
                class_1.prototype.setCss = function (y, duration, overflowVisible, delay) {
                    var _this = this;
                    this.appliedStyles = (y > 0);
                    Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["w"])(function () {
                        if (_this.scrollEl) {
                            var style = _this.scrollEl.style;
                            style.transform = ((y > 0) ? "translateY(" + y + "px) translateZ(0px)" : 'translateZ(0px)');
                            style.transitionDuration = duration;
                            style.transitionDelay = delay;
                            style.overflow = (overflowVisible ? 'hidden' : '');
                        }
                    });
                };
                class_1.prototype.render = function () {
                    var _a;
                    var mode = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
                    return (Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["H"], { slot: "fixed", class: (_a = {},
                            _a[mode] = true,
                            // Used internally for styling
                            _a["refresher-" + mode] = true,
                            _a['refresher-active'] = this.state !== 1 /* Inactive */,
                            _a['refresher-pulling'] = this.state === 2 /* Pulling */,
                            _a['refresher-ready'] = this.state === 4 /* Ready */,
                            _a['refresher-refreshing'] = this.state === 8 /* Refreshing */,
                            _a['refresher-cancelling'] = this.state === 16 /* Cancelling */,
                            _a['refresher-completing'] = this.state === 32 /* Completing */,
                            _a) }));
                };
                Object.defineProperty(class_1.prototype, "el", {
                    get: function () { return Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this); },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(class_1, "watchers", {
                    get: function () {
                        return {
                            "disabled": ["disabledChanged"]
                        };
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(class_1, "style", {
                    get: function () { return "ion-refresher{left:0;top:0;display:none;position:absolute;width:100%;height:60px;z-index:-1}:host-context([dir=rtl]) ion-refresher,[dir=rtl] ion-refresher{left:unset;right:unset;right:0}ion-refresher.refresher-active{display:block}ion-refresher-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;height:100%}.refresher-pulling,.refresher-refreshing{display:none;width:100%}.refresher-pulling-icon,.refresher-refreshing-icon{-webkit-transform-origin:center;transform-origin:center;-webkit-transition:.2s;transition:.2s;font-size:30px;text-align:center}:host-context([dir=rtl]) .refresher-pulling-icon,:host-context([dir=rtl]) .refresher-refreshing-icon,[dir=rtl] .refresher-pulling-icon,[dir=rtl] .refresher-refreshing-icon{-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}.refresher-pulling-text,.refresher-refreshing-text{font-size:16px;text-align:center}.refresher-pulling ion-refresher-content .refresher-pulling,.refresher-ready ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling-icon{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.refresher-cancelling ion-refresher-content .refresher-pulling,.refresher-refreshing ion-refresher-content .refresher-refreshing{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-completing ion-refresher-content .refresher-refreshing{display:block}.refresher-completing ion-refresher-content .refresher-refreshing-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-ios .refresher-pulling-icon,.refresher-ios .refresher-pulling-text,.refresher-ios .refresher-refreshing-icon,.refresher-ios .refresher-refreshing-text{color:var(--ion-text-color,#000)}.refresher-ios .refresher-refreshing .spinner-crescent circle,.refresher-ios .refresher-refreshing .spinner-lines-ios line,.refresher-ios .refresher-refreshing .spinner-lines-small-ios line{stroke:var(--ion-text-color,#000)}.refresher-ios .refresher-refreshing .spinner-bubbles circle,.refresher-ios .refresher-refreshing .spinner-circles circle,.refresher-ios .refresher-refreshing .spinner-dots circle{fill:var(--ion-text-color,#000)}"; },
                    enumerable: true,
                    configurable: true
                });
                return class_1;
            }());
            var RefresherContent = /** @class */ (function () {
                function class_2(hostRef) {
                    Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
                }
                class_2.prototype.componentWillLoad = function () {
                    if (this.pullingIcon === undefined) {
                        this.pullingIcon = _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__["b"].get('refreshingIcon', 'arrow-down');
                    }
                    if (this.refreshingSpinner === undefined) {
                        var mode = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
                        this.refreshingSpinner = _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__["b"].get('refreshingSpinner', _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__["b"].get('spinner', mode === 'ios' ? 'lines' : 'crescent'));
                    }
                };
                class_2.prototype.render = function () {
                    return (Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["H"], { class: Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this) }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "refresher-pulling" }, this.pullingIcon &&
                        Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "refresher-pulling-icon" }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-icon", { icon: this.pullingIcon, lazy: false })), this.pullingText &&
                        Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "refresher-pulling-text", innerHTML: Object(_index_3476b023_js__WEBPACK_IMPORTED_MODULE_2__["s"])(this.pullingText) })), Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "refresher-refreshing" }, this.refreshingSpinner &&
                        Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "refresher-refreshing-icon" }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-spinner", { name: this.refreshingSpinner })), this.refreshingText &&
                        Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "refresher-refreshing-text", innerHTML: Object(_index_3476b023_js__WEBPACK_IMPORTED_MODULE_2__["s"])(this.refreshingText) }))));
                };
                return class_2;
            }());
            /***/ 
        })
    }]);
//# sourceMappingURL=50-es2015.js.map
//# sourceMappingURL=50-es5.js.map
//# sourceMappingURL=50-es5.js.map