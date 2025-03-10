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
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[63], {
        /***/ "./node_modules/@ionic/core/dist/esm/ion-slide_2-md.entry.js": 
        /*!*******************************************************************!*\
          !*** ./node_modules/@ionic/core/dist/esm/ion-slide_2-md.entry.js ***!
          \*******************************************************************/
        /*! exports provided: ion_slide, ion_slides */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_slide", function () { return Slide; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_slides", function () { return Slides; });
            /* harmony import */ var _core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-ca0488fc.js */ "./node_modules/@ionic/core/dist/esm/core-ca0488fc.js");
            /* harmony import */ var _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config-3c7f3790.js */ "./node_modules/@ionic/core/dist/esm/config-3c7f3790.js");
            var Slide = /** @class */ (function () {
                function class_1(hostRef) {
                    Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
                }
                class_1.prototype.render = function () {
                    var _a;
                    var mode = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
                    return (Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["H"], { class: (_a = {},
                            _a[mode] = true,
                            _a['swiper-slide'] = true,
                            _a['swiper-zoom-container'] = true,
                            _a) }));
                };
                Object.defineProperty(class_1, "style", {
                    get: function () { return "ion-slide{height:100%}.slide-zoom,ion-slide{display:block;width:100%}.slide-zoom,.swiper-slide{text-align:center}.swiper-slide{display:-ms-flexbox;display:flex;position:relative;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;font-size:18px;-webkit-box-sizing:border-box;box-sizing:border-box}.swiper-slide img{width:auto;max-width:100%;height:auto;max-height:100%}"; },
                    enumerable: true,
                    configurable: true
                });
                return class_1;
            }());
            var Slides = /** @class */ (function () {
                function class_2(hostRef) {
                    var _this = this;
                    Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
                    this.swiperReady = false;
                    this.swiper = new Promise(function (resolve) { _this.readySwiper = resolve; });
                    /**
                     * Options to pass to the swiper instance.
                     * See http://idangero.us/swiper/api/ for valid options
                     */
                    this.options = {}; // SwiperOptions;  // TODO
                    /**
                     * If `true`, show the pagination.
                     */
                    this.pager = false;
                    /**
                     * If `true`, show the scrollbar.
                     */
                    this.scrollbar = false;
                    this.ionSlidesDidLoad = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionSlidesDidLoad", 7);
                    this.ionSlideTap = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionSlideTap", 7);
                    this.ionSlideDoubleTap = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionSlideDoubleTap", 7);
                    this.ionSlideWillChange = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionSlideWillChange", 7);
                    this.ionSlideDidChange = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionSlideDidChange", 7);
                    this.ionSlideNextStart = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionSlideNextStart", 7);
                    this.ionSlidePrevStart = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionSlidePrevStart", 7);
                    this.ionSlideNextEnd = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionSlideNextEnd", 7);
                    this.ionSlidePrevEnd = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionSlidePrevEnd", 7);
                    this.ionSlideTransitionStart = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionSlideTransitionStart", 7);
                    this.ionSlideTransitionEnd = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionSlideTransitionEnd", 7);
                    this.ionSlideDrag = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionSlideDrag", 7);
                    this.ionSlideReachStart = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionSlideReachStart", 7);
                    this.ionSlideReachEnd = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionSlideReachEnd", 7);
                    this.ionSlideTouchStart = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionSlideTouchStart", 7);
                    this.ionSlideTouchEnd = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionSlideTouchEnd", 7);
                }
                class_2.prototype.optionsChanged = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        var swiper;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    if (!this.swiperReady) return [3 /*break*/, 3];
                                    return [4 /*yield*/, this.getSwiper()];
                                case 1:
                                    swiper = _a.sent();
                                    Object.assign(swiper.params, this.options);
                                    return [4 /*yield*/, this.update()];
                                case 2:
                                    _a.sent();
                                    _a.label = 3;
                                case 3: return [2 /*return*/];
                            }
                        });
                    });
                };
                class_2.prototype.connectedCallback = function () {
                    var _this = this;
                    var mut = this.mutationO = new MutationObserver(function () {
                        if (_this.swiperReady) {
                            _this.update();
                        }
                    });
                    mut.observe(this.el, {
                        childList: true,
                        subtree: true
                    });
                    this.el.componentOnReady().then(function () { return _this.initSwiper(); });
                };
                class_2.prototype.disconnectedCallback = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        var swiper;
                        var _this = this;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    if (this.mutationO) {
                                        this.mutationO.disconnect();
                                        this.mutationO = undefined;
                                    }
                                    return [4 /*yield*/, this.getSwiper()];
                                case 1:
                                    swiper = _a.sent();
                                    swiper.destroy(true, true);
                                    this.swiper = new Promise(function (resolve) { _this.readySwiper = resolve; });
                                    this.swiperReady = false;
                                    return [2 /*return*/];
                            }
                        });
                    });
                };
                /**
                 * Update the underlying slider implementation. Call this if you've added or removed
                 * child slides.
                 */
                class_2.prototype.update = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        var _a, swiper;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0: return [4 /*yield*/, Promise.all([
                                        this.getSwiper(),
                                        waitForSlides(this.el)
                                    ])];
                                case 1:
                                    _a = __read.apply(void 0, [_b.sent(), 1]), swiper = _a[0];
                                    swiper.update();
                                    return [2 /*return*/];
                            }
                        });
                    });
                };
                /**
                 * Force swiper to update its height (when autoHeight is enabled) for the duration
                 * equal to 'speed' parameter.
                 *
                 * @param speed The transition duration (in ms).
                 */
                class_2.prototype.updateAutoHeight = function (speed) {
                    return __awaiter(this, void 0, void 0, function () {
                        var swiper;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.getSwiper()];
                                case 1:
                                    swiper = _a.sent();
                                    swiper.updateAutoHeight(speed);
                                    return [2 /*return*/];
                            }
                        });
                    });
                };
                /**
                 * Transition to the specified slide.
                 *
                 * @param index The index of the slide to transition to.
                 * @param speed The transition duration (in ms).
                 * @param runCallbacks If true, the transition will produce [Transition/SlideChange][Start/End] transition events.
                 */
                class_2.prototype.slideTo = function (index, speed, runCallbacks) {
                    return __awaiter(this, void 0, void 0, function () {
                        var swiper;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.getSwiper()];
                                case 1:
                                    swiper = _a.sent();
                                    swiper.slideTo(index, speed, runCallbacks);
                                    return [2 /*return*/];
                            }
                        });
                    });
                };
                /**
                 * Transition to the next slide.
                 *
                 * @param speed The transition duration (in ms).
                 * @param runCallbacks If true, the transition will produce [Transition/SlideChange][Start/End] transition events.
                 */
                class_2.prototype.slideNext = function (speed, runCallbacks) {
                    return __awaiter(this, void 0, void 0, function () {
                        var swiper;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.getSwiper()];
                                case 1:
                                    swiper = _a.sent();
                                    swiper.slideNext(speed, runCallbacks);
                                    return [2 /*return*/];
                            }
                        });
                    });
                };
                /**
                 * Transition to the previous slide.
                 *
                 * @param speed The transition duration (in ms).
                 * @param runCallbacks If true, the transition will produce the [Transition/SlideChange][Start/End] transition events.
                 */
                class_2.prototype.slidePrev = function (speed, runCallbacks) {
                    return __awaiter(this, void 0, void 0, function () {
                        var swiper;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.getSwiper()];
                                case 1:
                                    swiper = _a.sent();
                                    swiper.slidePrev(speed, runCallbacks);
                                    return [2 /*return*/];
                            }
                        });
                    });
                };
                /**
                 * Get the index of the active slide.
                 */
                class_2.prototype.getActiveIndex = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        var swiper;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.getSwiper()];
                                case 1:
                                    swiper = _a.sent();
                                    return [2 /*return*/, swiper.activeIndex];
                            }
                        });
                    });
                };
                /**
                 * Get the index of the previous slide.
                 */
                class_2.prototype.getPreviousIndex = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        var swiper;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.getSwiper()];
                                case 1:
                                    swiper = _a.sent();
                                    return [2 /*return*/, swiper.previousIndex];
                            }
                        });
                    });
                };
                /**
                 * Get the total number of slides.
                 */
                class_2.prototype.length = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        var swiper;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.getSwiper()];
                                case 1:
                                    swiper = _a.sent();
                                    return [2 /*return*/, swiper.slides.length];
                            }
                        });
                    });
                };
                /**
                 * Get whether or not the current slide is the last slide.
                 */
                class_2.prototype.isEnd = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        var swiper;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.getSwiper()];
                                case 1:
                                    swiper = _a.sent();
                                    return [2 /*return*/, swiper.isEnd];
                            }
                        });
                    });
                };
                /**
                 * Get whether or not the current slide is the first slide.
                 */
                class_2.prototype.isBeginning = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        var swiper;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.getSwiper()];
                                case 1:
                                    swiper = _a.sent();
                                    return [2 /*return*/, swiper.isBeginning];
                            }
                        });
                    });
                };
                /**
                 * Start auto play.
                 */
                class_2.prototype.startAutoplay = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        var swiper;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.getSwiper()];
                                case 1:
                                    swiper = _a.sent();
                                    if (swiper.autoplay) {
                                        swiper.autoplay.start();
                                    }
                                    return [2 /*return*/];
                            }
                        });
                    });
                };
                /**
                 * Stop auto play.
                 */
                class_2.prototype.stopAutoplay = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        var swiper;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.getSwiper()];
                                case 1:
                                    swiper = _a.sent();
                                    if (swiper.autoplay) {
                                        swiper.autoplay.stop();
                                    }
                                    return [2 /*return*/];
                            }
                        });
                    });
                };
                /**
                 * Lock or unlock the ability to slide to the next slide.
                 *
                 * @param lock If `true`, disable swiping to the next slide.
                 */
                class_2.prototype.lockSwipeToNext = function (lock) {
                    return __awaiter(this, void 0, void 0, function () {
                        var swiper;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.getSwiper()];
                                case 1:
                                    swiper = _a.sent();
                                    swiper.allowSlideNext = !lock;
                                    return [2 /*return*/];
                            }
                        });
                    });
                };
                /**
                 * Lock or unlock the ability to slide to the previous slide.
                 *
                 * @param lock If `true`, disable swiping to the previous slide.
                 */
                class_2.prototype.lockSwipeToPrev = function (lock) {
                    return __awaiter(this, void 0, void 0, function () {
                        var swiper;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.getSwiper()];
                                case 1:
                                    swiper = _a.sent();
                                    swiper.allowSlidePrev = !lock;
                                    return [2 /*return*/];
                            }
                        });
                    });
                };
                /**
                 * Lock or unlock the ability to slide to the next or previous slide.
                 *
                 * @param lock If `true`, disable swiping to the next and previous slide.
                 */
                class_2.prototype.lockSwipes = function (lock) {
                    return __awaiter(this, void 0, void 0, function () {
                        var swiper;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.getSwiper()];
                                case 1:
                                    swiper = _a.sent();
                                    swiper.allowSlideNext = !lock;
                                    swiper.allowSlidePrev = !lock;
                                    swiper.allowTouchMove = !lock;
                                    return [2 /*return*/];
                            }
                        });
                    });
                };
                /**
                 * Get the Swiper instance.
                 * Use this to access the full Swiper API.
                 * See https://idangero.us/swiper/api/ for all API options.
                 */
                class_2.prototype.getSwiper = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            return [2 /*return*/, this.swiper];
                        });
                    });
                };
                class_2.prototype.initSwiper = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        var finalOptions, Swiper, swiper;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    finalOptions = this.normalizeOptions();
                                    return [4 /*yield*/, __webpack_require__.e(/*! import() | swiper-bundle-ccdaac54-js */ "swiper-bundle-ccdaac54-js").then(__webpack_require__.bind(null, /*! ./swiper.bundle-ccdaac54.js */ "./node_modules/@ionic/core/dist/esm/swiper.bundle-ccdaac54.js"))];
                                case 1:
                                    Swiper = (_a.sent()).Swiper;
                                    return [4 /*yield*/, waitForSlides(this.el)];
                                case 2:
                                    _a.sent();
                                    swiper = new Swiper(this.el, finalOptions);
                                    this.swiperReady = true;
                                    this.readySwiper(swiper);
                                    return [2 /*return*/];
                            }
                        });
                    });
                };
                class_2.prototype.normalizeOptions = function () {
                    var _this = this;
                    // Base options, can be changed
                    // TODO Add interface SwiperOptions
                    var swiperOptions = {
                        effect: undefined,
                        direction: 'horizontal',
                        initialSlide: 0,
                        loop: false,
                        parallax: false,
                        slidesPerView: 1,
                        spaceBetween: 0,
                        speed: 300,
                        slidesPerColumn: 1,
                        slidesPerColumnFill: 'column',
                        slidesPerGroup: 1,
                        centeredSlides: false,
                        slidesOffsetBefore: 0,
                        slidesOffsetAfter: 0,
                        touchEventsTarget: 'container',
                        autoplay: false,
                        freeMode: false,
                        freeModeMomentum: true,
                        freeModeMomentumRatio: 1,
                        freeModeMomentumBounce: true,
                        freeModeMomentumBounceRatio: 1,
                        freeModeMomentumVelocityRatio: 1,
                        freeModeSticky: false,
                        freeModeMinimumVelocity: 0.02,
                        autoHeight: false,
                        setWrapperSize: false,
                        zoom: {
                            maxRatio: 3,
                            minRatio: 1,
                            toggle: false,
                        },
                        touchRatio: 1,
                        touchAngle: 45,
                        simulateTouch: true,
                        touchStartPreventDefault: false,
                        shortSwipes: true,
                        longSwipes: true,
                        longSwipesRatio: 0.5,
                        longSwipesMs: 300,
                        followFinger: true,
                        threshold: 0,
                        touchMoveStopPropagation: true,
                        touchReleaseOnEdges: false,
                        iOSEdgeSwipeDetection: false,
                        iOSEdgeSwipeThreshold: 20,
                        resistance: true,
                        resistanceRatio: 0.85,
                        watchSlidesProgress: false,
                        watchSlidesVisibility: false,
                        preventClicks: true,
                        preventClicksPropagation: true,
                        slideToClickedSlide: false,
                        loopAdditionalSlides: 0,
                        noSwiping: true,
                        runCallbacksOnInit: true,
                        coverflowEffect: {
                            rotate: 50,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: true
                        },
                        flipEffect: {
                            slideShadows: true,
                            limitRotation: true
                        },
                        cubeEffect: {
                            slideShadows: true,
                            shadow: true,
                            shadowOffset: 20,
                            shadowScale: 0.94
                        },
                        fadeEffect: {
                            crossfade: false
                        },
                        a11y: {
                            prevSlideMessage: 'Previous slide',
                            nextSlideMessage: 'Next slide',
                            firstSlideMessage: 'This is the first slide',
                            lastSlideMessage: 'This is the last slide'
                        }
                    };
                    if (this.pager) {
                        swiperOptions.pagination = {
                            el: this.paginationEl,
                            type: 'bullets',
                            clickable: false,
                            hideOnClick: false,
                        };
                    }
                    if (this.scrollbar) {
                        swiperOptions.scrollbar = {
                            el: this.scrollbarEl,
                            hide: true,
                        };
                    }
                    // Keep the event options separate, we dont want users
                    // overwriting these
                    var eventOptions = {
                        on: {
                            init: function () {
                                setTimeout(function () {
                                    _this.ionSlidesDidLoad.emit();
                                }, 20);
                            },
                            slideChangeTransitionStart: this.ionSlideWillChange.emit,
                            slideChangeTransitionEnd: this.ionSlideDidChange.emit,
                            slideNextTransitionStart: this.ionSlideNextStart.emit,
                            slidePrevTransitionStart: this.ionSlidePrevStart.emit,
                            slideNextTransitionEnd: this.ionSlideNextEnd.emit,
                            slidePrevTransitionEnd: this.ionSlidePrevEnd.emit,
                            transitionStart: this.ionSlideTransitionStart.emit,
                            transitionEnd: this.ionSlideTransitionEnd.emit,
                            sliderMove: this.ionSlideDrag.emit,
                            reachBeginning: this.ionSlideReachStart.emit,
                            reachEnd: this.ionSlideReachEnd.emit,
                            touchStart: this.ionSlideTouchStart.emit,
                            touchEnd: this.ionSlideTouchEnd.emit,
                            tap: this.ionSlideTap.emit,
                            doubleTap: this.ionSlideDoubleTap.emit
                        }
                    };
                    var customEvents = (!!this.options && !!this.options.on) ? this.options.on : {};
                    // merge "on" event listeners, while giving our event listeners priority
                    var mergedEventOptions = { on: Object.assign(Object.assign({}, customEvents), eventOptions.on) };
                    // Merge the base, user options, and events together then pas to swiper
                    return Object.assign(Object.assign(Object.assign({}, swiperOptions), this.options), mergedEventOptions);
                };
                class_2.prototype.render = function () {
                    var _this = this;
                    var _a;
                    var mode = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
                    return (Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["H"], { class: (_a = {},
                            _a["" + mode] = true,
                            // Used internally for styling
                            _a["slides-" + mode] = true,
                            _a['swiper-container'] = true,
                            _a) }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "swiper-wrapper" }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)), this.pager && Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "swiper-pagination", ref: function (el) { return _this.paginationEl = el; } }), this.scrollbar && Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "swiper-scrollbar", ref: function (el) { return _this.scrollbarEl = el; } })));
                };
                Object.defineProperty(class_2, "assetsDirs", {
                    get: function () { return ["swiper"]; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(class_2.prototype, "el", {
                    get: function () { return Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this); },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(class_2, "watchers", {
                    get: function () {
                        return {
                            "options": ["optionsChanged"]
                        };
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(class_2, "style", {
                    get: function () { return ".swiper-container{margin:0 auto;position:relative;overflow:hidden;list-style:none;padding:0;z-index:1}.swiper-container-no-flexbox .swiper-slide{float:left}.swiper-container-vertical>.swiper-wrapper{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.swiper-wrapper{position:relative;width:100%;height:100%;z-index:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-transition-property:-webkit-transform;transition-property:-webkit-transform;-o-transition-property:transform;transition-property:transform;transition-property:transform,-webkit-transform;-webkit-box-sizing:content-box;box-sizing:content-box}.swiper-container-android .swiper-slide,.swiper-wrapper{-webkit-transform:translateZ(0);transform:translateZ(0)}.swiper-container-multirow>.swiper-wrapper{-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.swiper-container-free-mode>.swiper-wrapper{-webkit-transition-timing-function:ease-out;-o-transition-timing-function:ease-out;transition-timing-function:ease-out;margin:0 auto}.swiper-slide{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;width:100%;height:100%;position:relative;-webkit-transition-property:-webkit-transform;transition-property:-webkit-transform;-o-transition-property:transform;transition-property:transform;transition-property:transform,-webkit-transform}.swiper-invisible-blank-slide{visibility:hidden}.swiper-container-autoheight,.swiper-container-autoheight .swiper-slide{height:auto}.swiper-container-autoheight .swiper-wrapper{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-transition-property:height,-webkit-transform;transition-property:height,-webkit-transform;-o-transition-property:transform,height;transition-property:transform,height;transition-property:transform,height,-webkit-transform}.swiper-container-3d{-webkit-perspective:1200px;perspective:1200px}.swiper-container-3d .swiper-cube-shadow,.swiper-container-3d .swiper-slide,.swiper-container-3d .swiper-slide-shadow-bottom,.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top,.swiper-container-3d .swiper-wrapper{-webkit-transform-style:preserve-3d;transform-style:preserve-3d}.swiper-container-3d .swiper-slide-shadow-bottom,.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top{position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:10}.swiper-container-3d .swiper-slide-shadow-left{background-image:-webkit-gradient(linear,right top,left top,from(rgba(0,0,0,.5)),to(transparent));background-image:-webkit-linear-gradient(right,rgba(0,0,0,.5),transparent);background-image:-o-linear-gradient(right,rgba(0,0,0,.5),transparent);background-image:linear-gradient(270deg,rgba(0,0,0,.5),transparent)}.swiper-container-3d .swiper-slide-shadow-right{background-image:-webkit-gradient(linear,left top,right top,from(rgba(0,0,0,.5)),to(transparent));background-image:-webkit-linear-gradient(left,rgba(0,0,0,.5),transparent);background-image:-o-linear-gradient(left,rgba(0,0,0,.5),transparent);background-image:linear-gradient(90deg,rgba(0,0,0,.5),transparent)}.swiper-container-3d .swiper-slide-shadow-top{background-image:-webkit-gradient(linear,left bottom,left top,from(rgba(0,0,0,.5)),to(transparent));background-image:-webkit-linear-gradient(bottom,rgba(0,0,0,.5),transparent);background-image:-o-linear-gradient(bottom,rgba(0,0,0,.5),transparent);background-image:linear-gradient(0deg,rgba(0,0,0,.5),transparent)}.swiper-container-3d .swiper-slide-shadow-bottom{background-image:-webkit-gradient(linear,left top,left bottom,from(rgba(0,0,0,.5)),to(transparent));background-image:-webkit-linear-gradient(top,rgba(0,0,0,.5),transparent);background-image:-o-linear-gradient(top,rgba(0,0,0,.5),transparent);background-image:linear-gradient(180deg,rgba(0,0,0,.5),transparent)}.swiper-container-wp8-horizontal,.swiper-container-wp8-horizontal>.swiper-wrapper{-ms-touch-action:pan-y;touch-action:pan-y}.swiper-container-wp8-vertical,.swiper-container-wp8-vertical>.swiper-wrapper{-ms-touch-action:pan-x;touch-action:pan-x}.swiper-button-next,.swiper-button-prev{position:absolute;top:50%;width:27px;height:44px;margin-top:-22px;z-index:10;cursor:pointer;background-size:27px 44px;background-position:50%;background-repeat:no-repeat}.swiper-button-next.swiper-button-disabled,.swiper-button-prev.swiper-button-disabled{opacity:.35;cursor:auto;pointer-events:none}.swiper-button-prev,.swiper-container-rtl .swiper-button-next{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D\'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\'%20viewBox%3D\'0%200%2027%2044\'%3E%3Cpath%20d%3D\'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z\'%20fill%3D\'%23007aff\'%2F%3E%3C%2Fsvg%3E\");left:10px;right:auto}.swiper-button-next,.swiper-container-rtl .swiper-button-prev{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D\'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\'%20viewBox%3D\'0%200%2027%2044\'%3E%3Cpath%20d%3D\'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z\'%20fill%3D\'%23007aff\'%2F%3E%3C%2Fsvg%3E\");right:10px;left:auto}.swiper-button-prev.swiper-button-white,.swiper-container-rtl .swiper-button-next.swiper-button-white{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D\'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\'%20viewBox%3D\'0%200%2027%2044\'%3E%3Cpath%20d%3D\'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z\'%20fill%3D\'%23ffffff\'%2F%3E%3C%2Fsvg%3E\")}.swiper-button-next.swiper-button-white,.swiper-container-rtl .swiper-button-prev.swiper-button-white{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D\'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\'%20viewBox%3D\'0%200%2027%2044\'%3E%3Cpath%20d%3D\'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z\'%20fill%3D\'%23ffffff\'%2F%3E%3C%2Fsvg%3E\")}.swiper-button-prev.swiper-button-black,.swiper-container-rtl .swiper-button-next.swiper-button-black{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D\'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\'%20viewBox%3D\'0%200%2027%2044\'%3E%3Cpath%20d%3D\'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z\'%20fill%3D\'%23000000\'%2F%3E%3C%2Fsvg%3E\")}.swiper-button-next.swiper-button-black,.swiper-container-rtl .swiper-button-prev.swiper-button-black{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D\'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\'%20viewBox%3D\'0%200%2027%2044\'%3E%3Cpath%20d%3D\'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z\'%20fill%3D\'%23000000\'%2F%3E%3C%2Fsvg%3E\")}.swiper-button-lock{display:none}.swiper-pagination{position:absolute;text-align:center;-webkit-transition:opacity .3s;-o-transition:.3s opacity;transition:opacity .3s;-webkit-transform:translateZ(0);transform:translateZ(0);z-index:10}.swiper-pagination.swiper-pagination-hidden{opacity:0}.swiper-container-horizontal>.swiper-pagination-bullets,.swiper-pagination-custom,.swiper-pagination-fraction{bottom:10px;left:0;width:100%}.swiper-pagination-bullets-dynamic{overflow:hidden;font-size:0}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{-webkit-transform:scale(.33);-ms-transform:scale(.33);transform:scale(.33);position:relative}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active,.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev{-webkit-transform:scale(.66);-ms-transform:scale(.66);transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev{-webkit-transform:scale(.33);-ms-transform:scale(.33);transform:scale(.33)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next{-webkit-transform:scale(.66);-ms-transform:scale(.66);transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next{-webkit-transform:scale(.33);-ms-transform:scale(.33);transform:scale(.33)}.swiper-pagination-bullet{width:8px;height:8px;display:inline-block;border-radius:100%;background:#000;opacity:.2}button.swiper-pagination-bullet{border:none;margin:0;padding:0;-webkit-box-shadow:none;box-shadow:none;-webkit-appearance:none;-moz-appearance:none;appearance:none}.swiper-pagination-clickable .swiper-pagination-bullet{cursor:pointer}.swiper-pagination-bullet-active{opacity:1;background:#007aff}.swiper-container-vertical>.swiper-pagination-bullets{right:10px;top:50%;-webkit-transform:translate3d(0,-50%,0);transform:translate3d(0,-50%,0)}.swiper-container-vertical>.swiper-pagination-bullets .swiper-pagination-bullet{margin:6px 0;display:block}.swiper-container-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);width:8px}.swiper-container-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{display:inline-block;-webkit-transition:top .2s,-webkit-transform .2s;transition:top .2s,-webkit-transform .2s;-o-transition:.2s transform,.2s top;transition:transform .2s,top .2s;transition:transform .2s,top .2s,-webkit-transform .2s}.swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet{margin:0 4px}.swiper-container-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);white-space:nowrap}.swiper-container-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{-webkit-transition:left .2s,-webkit-transform .2s;transition:left .2s,-webkit-transform .2s;-o-transition:.2s transform,.2s left;transition:transform .2s,left .2s;transition:transform .2s,left .2s,-webkit-transform .2s}.swiper-container-horizontal.swiper-container-rtl>.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{-webkit-transition:right .2s,-webkit-transform .2s;transition:right .2s,-webkit-transform .2s;-o-transition:.2s transform,.2s right;transition:transform .2s,right .2s;transition:transform .2s,right .2s,-webkit-transform .2s}.swiper-pagination-progressbar{background:rgba(0,0,0,.25);position:absolute}.swiper-pagination-progressbar .swiper-pagination-progressbar-fill{background:#007aff;position:absolute;left:0;top:0;width:100%;height:100%;-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);-webkit-transform-origin:left top;-ms-transform-origin:left top;transform-origin:left top}.swiper-container-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill{-webkit-transform-origin:right top;-ms-transform-origin:right top;transform-origin:right top}.swiper-container-horizontal>.swiper-pagination-progressbar,.swiper-container-vertical>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite{width:100%;height:4px;left:0;top:0}.swiper-container-horizontal>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,.swiper-container-vertical>.swiper-pagination-progressbar{width:4px;height:100%;left:0;top:0}.swiper-pagination-white .swiper-pagination-bullet-active{background:#fff}.swiper-pagination-progressbar.swiper-pagination-white{background:hsla(0,0%,100%,.25)}.swiper-pagination-progressbar.swiper-pagination-white .swiper-pagination-progressbar-fill{background:#fff}.swiper-pagination-black .swiper-pagination-bullet-active{background:#000}.swiper-pagination-progressbar.swiper-pagination-black{background:rgba(0,0,0,.25)}.swiper-pagination-progressbar.swiper-pagination-black .swiper-pagination-progressbar-fill{background:#000}.swiper-pagination-lock{display:none}.swiper-scrollbar{border-radius:10px;position:relative;-ms-touch-action:none;background:rgba(0,0,0,.1)}.swiper-container-horizontal>.swiper-scrollbar{position:absolute;left:1%;bottom:3px;z-index:50;height:5px;width:98%}.swiper-container-vertical>.swiper-scrollbar{position:absolute;right:3px;top:1%;z-index:50;width:5px;height:98%}.swiper-scrollbar-drag{height:100%;width:100%;position:relative;background:rgba(0,0,0,.5);border-radius:10px;left:0;top:0}.swiper-scrollbar-cursor-drag{cursor:move}.swiper-scrollbar-lock{display:none}.swiper-zoom-container{width:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;text-align:center}.swiper-zoom-container>canvas,.swiper-zoom-container>img,.swiper-zoom-container>svg{max-width:100%;max-height:100%;-o-object-fit:contain;object-fit:contain}.swiper-slide-zoomed{cursor:move}.swiper-lazy-preloader{width:42px;height:42px;position:absolute;left:50%;top:50%;margin-left:-21px;margin-top:-21px;z-index:10;-webkit-transform-origin:50%;-ms-transform-origin:50%;transform-origin:50%;-webkit-animation:swiper-preloader-spin 1s steps(12,end) infinite;animation:swiper-preloader-spin 1s steps(12,end) infinite}.swiper-lazy-preloader:after{display:block;content:\"\";width:100%;height:100%;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D\'0%200%20120%20120\'%20xmlns%3D\'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\'%20xmlns%3Axlink%3D\'http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink\'%3E%3Cdefs%3E%3Cline%20id%3D\'l\'%20x1%3D\'60\'%20x2%3D\'60\'%20y1%3D\'7\'%20y2%3D\'27\'%20stroke%3D\'%236c6c6c\'%20stroke-width%3D\'11\'%20stroke-linecap%3D\'round\'%2F%3E%3C%2Fdefs%3E%3Cg%3E%3Cuse%20xlink%3Ahref%3D\'%23l\'%20opacity%3D\'.27\'%2F%3E%3Cuse%20xlink%3Ahref%3D\'%23l\'%20opacity%3D\'.27\'%20transform%3D\'rotate(30%2060%2C60)\'%2F%3E%3Cuse%20xlink%3Ahref%3D\'%23l\'%20opacity%3D\'.27\'%20transform%3D\'rotate(60%2060%2C60)\'%2F%3E%3Cuse%20xlink%3Ahref%3D\'%23l\'%20opacity%3D\'.27\'%20transform%3D\'rotate(90%2060%2C60)\'%2F%3E%3Cuse%20xlink%3Ahref%3D\'%23l\'%20opacity%3D\'.27\'%20transform%3D\'rotate(120%2060%2C60)\'%2F%3E%3Cuse%20xlink%3Ahref%3D\'%23l\'%20opacity%3D\'.27\'%20transform%3D\'rotate(150%2060%2C60)\'%2F%3E%3Cuse%20xlink%3Ahref%3D\'%23l\'%20opacity%3D\'.37\'%20transform%3D\'rotate(180%2060%2C60)\'%2F%3E%3Cuse%20xlink%3Ahref%3D\'%23l\'%20opacity%3D\'.46\'%20transform%3D\'rotate(210%2060%2C60)\'%2F%3E%3Cuse%20xlink%3Ahref%3D\'%23l\'%20opacity%3D\'.56\'%20transform%3D\'rotate(240%2060%2C60)\'%2F%3E%3Cuse%20xlink%3Ahref%3D\'%23l\'%20opacity%3D\'.66\'%20transform%3D\'rotate(270%2060%2C60)\'%2F%3E%3Cuse%20xlink%3Ahref%3D\'%23l\'%20opacity%3D\'.75\'%20transform%3D\'rotate(300%2060%2C60)\'%2F%3E%3Cuse%20xlink%3Ahref%3D\'%23l\'%20opacity%3D\'.85\'%20transform%3D\'rotate(330%2060%2C60)\'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\");background-position:50%;background-size:100%;background-repeat:no-repeat}.swiper-lazy-preloader-white:after{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D\'0%200%20120%20120\'%20xmlns%3D\'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\'%20xmlns%3Axlink%3D\'http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink\'%3E%3Cdefs%3E%3Cline%20id%3D\'l\'%20x1%3D\'60\'%20x2%3D\'60\'%20y1%3D\'7\'%20y2%3D\'27\'%20stroke%3D\'%23fff\'%20stroke-width%3D\'11\'%20stroke-linecap%3D\'round\'%2F%3E%3C%2Fdefs%3E%3Cg%3E%3Cuse%20xlink%3Ahref%3D\'%23l\'%20opacity%3D\'.27\'%2F%3E%3Cuse%20xlink%3Ahref%3D\'%23l\'%20opacity%3D\'.27\'%20transform%3D\'rotate(30%2060%2C60)\'%2F%3E%3Cuse%20xlink%3Ahref%3D\'%23l\'%20opacity%3D\'.27\'%20transform%3D\'rotate(60%2060%2C60)\'%2F%3E%3Cuse%20xlink%3Ahref%3D\'%23l\'%20opacity%3D\'.27\'%20transform%3D\'rotate(90%2060%2C60)\'%2F%3E%3Cuse%20xlink%3Ahref%3D\'%23l\'%20opacity%3D\'.27\'%20transform%3D\'rotate(120%2060%2C60)\'%2F%3E%3Cuse%20xlink%3Ahref%3D\'%23l\'%20opacity%3D\'.27\'%20transform%3D\'rotate(150%2060%2C60)\'%2F%3E%3Cuse%20xlink%3Ahref%3D\'%23l\'%20opacity%3D\'.37\'%20transform%3D\'rotate(180%2060%2C60)\'%2F%3E%3Cuse%20xlink%3Ahref%3D\'%23l\'%20opacity%3D\'.46\'%20transform%3D\'rotate(210%2060%2C60)\'%2F%3E%3Cuse%20xlink%3Ahref%3D\'%23l\'%20opacity%3D\'.56\'%20transform%3D\'rotate(240%2060%2C60)\'%2F%3E%3Cuse%20xlink%3Ahref%3D\'%23l\'%20opacity%3D\'.66\'%20transform%3D\'rotate(270%2060%2C60)\'%2F%3E%3Cuse%20xlink%3Ahref%3D\'%23l\'%20opacity%3D\'.75\'%20transform%3D\'rotate(300%2060%2C60)\'%2F%3E%3Cuse%20xlink%3Ahref%3D\'%23l\'%20opacity%3D\'.85\'%20transform%3D\'rotate(330%2060%2C60)\'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\")}\@-webkit-keyframes swiper-preloader-spin{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}\@keyframes swiper-preloader-spin{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.swiper-container .swiper-notification{position:absolute;left:0;top:0;pointer-events:none;opacity:0;z-index:-1000}.swiper-container-fade.swiper-container-free-mode .swiper-slide{-webkit-transition-timing-function:ease-out;-o-transition-timing-function:ease-out;transition-timing-function:ease-out}.swiper-container-fade .swiper-slide{pointer-events:none;-webkit-transition-property:opacity;-o-transition-property:opacity;transition-property:opacity}.swiper-container-fade .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-fade .swiper-slide-active,.swiper-container-fade .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-cube{overflow:visible}.swiper-container-cube .swiper-slide{pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1;visibility:hidden;-webkit-transform-origin:0 0;-ms-transform-origin:0 0;transform-origin:0 0;width:100%;height:100%}.swiper-container-cube .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-cube.swiper-container-rtl .swiper-slide{-webkit-transform-origin:100% 0;-ms-transform-origin:100% 0;transform-origin:100% 0}.swiper-container-cube .swiper-slide-active,.swiper-container-cube .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-cube .swiper-slide-active,.swiper-container-cube .swiper-slide-next,.swiper-container-cube .swiper-slide-next+.swiper-slide,.swiper-container-cube .swiper-slide-prev{pointer-events:auto;visibility:visible}.swiper-container-cube .swiper-slide-shadow-bottom,.swiper-container-cube .swiper-slide-shadow-left,.swiper-container-cube .swiper-slide-shadow-right,.swiper-container-cube .swiper-slide-shadow-top{z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}.swiper-container-cube .swiper-cube-shadow{position:absolute;left:0;bottom:0;width:100%;height:100%;background:#000;opacity:.6;-webkit-filter:blur(50px);filter:blur(50px);z-index:0}.swiper-container-flip{overflow:visible}.swiper-container-flip .swiper-slide{pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1}.swiper-container-flip .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-flip .swiper-slide-active,.swiper-container-flip .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-flip .swiper-slide-shadow-bottom,.swiper-container-flip .swiper-slide-shadow-left,.swiper-container-flip .swiper-slide-shadow-right,.swiper-container-flip .swiper-slide-shadow-top{z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}.swiper-container-coverflow .swiper-wrapper{-ms-perspective:1200px}ion-slides{display:block;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swiper-pagination-bullet{background:var(--bullet-background)}.swiper-pagination-bullet-active{background:var(--bullet-background-active)}.swiper-pagination-progressbar{background:var(--progress-bar-background)}.swiper-pagination-progressbar .swiper-pagination-progressbar-fill{background:var(--progress-bar-background-active)}.swiper-scrollbar{background:var(--scroll-bar-background)}.swiper-scrollbar-drag{background:var(--scroll-bar-background-active)}.slides-md{--bullet-background:var(--ion-color-step-200,#ccc);--bullet-background-active:var(--ion-color-primary,#3880ff);--progress-bar-background:rgba(var(--ion-text-color-rgb,0,0,0),0.25);--progress-bar-background-active:var(--ion-color-primary-shade,#3171e0);--scroll-bar-background:rgba(var(--ion-text-color-rgb,0,0,0),0.1);--scroll-bar-background-active:rgba(var(--ion-text-color-rgb,0,0,0),0.5)}"; },
                    enumerable: true,
                    configurable: true
                });
                return class_2;
            }());
            var waitForSlides = function (el) {
                return Promise.all(Array.from(el.querySelectorAll('ion-slide')).map(function (s) { return s.componentOnReady(); }));
            };
            /***/ 
        })
    }]);
//# sourceMappingURL=63-es2015.js.map
//# sourceMappingURL=63-es5.js.map
//# sourceMappingURL=63-es5.js.map