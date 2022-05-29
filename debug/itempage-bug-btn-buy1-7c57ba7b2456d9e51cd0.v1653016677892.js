console.log("---debug---");
(window.webpackJsonp = window.webpackJsonp || []).push([[32, 2, 3], {
    210: function(t, e, i) {},
    211: function(t, e, i) {},
    212: function(t, e, i) {},
    213: function(t, e, i) {},
    214: function(t, e, i) {},
    215: function(t, e, i) {},
    216: function(t, e, i) {},
    217: function(t, e, i) {},
    218: function(t, e, i) {},
    219: function(t, e, i) {
        "use strict";
        var a = i(28);
        const s = i(224);
        var n = {
            data: ()=>({
                defaultHead: s
            }),
            computed: {
                ...Object(a.e)("ethereum", ["userInfo", "account", "chain"]),
                ...Object(a.e)(["uid"])
            },
            mounted() {
                this.$forceUpdate();

                setTimeout(() => {
                    console.log("===time mouted user===",this)
                    // this.toUser()
                    this.login()
                }, 2000);
            },
            methods: {
                async toUser() {
                    console.log("===login touser===",this);
                    return;
                    const {uid: t} = this
                      , {path: e} = this.$route;
                    await this.$router.push(`/zh-cn/account/?id=${t}`),
                    e.includes("/account/") && (document.documentElement.scrollTop = 0)
                }
            }
        };

        // ----- 自定义代码逻辑---- 
        setTimeout(() => {
            console.log("===time user===")
            // n.methods.toUser()
        }, 3000);
        var o = (i(225),
        i(10))
          , r = Object(o.a)(n, (function() {
            var t, e = this, i = e.$createElement, a = e._self._c || i;
            return a("div", {
                staticClass: "wallet-button"
            }, [a("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: !e.account,
                    expression: "!account"
                }]
            }, [a("button", {
                on: {
                    click: e.login
                }
            }, [a("span", {
                staticClass: "text"
            }, [e._v("\n                登录11\n            ")])])]), e._v(" "), a("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.account,
                    expression: "account"
                }],
                staticClass: "account-info",
                on: {
                    click: e.toUser
                }
            }, [a("div", {
                staticClass: "chain-info",
                class: (t = {},
                t["type-" + e.chain.id] = e.chain.id,
                t)
            }, [a("div", {
                staticClass: "logo"
            }, [a("client-only", [e.userInfo.headImage ? a("img", {
                attrs: {
                    src: e.baseUrl(e.userInfo.headImage),
                    alt: "用户头像"
                }
            }) : e._e()])], 1)]), e._v(" "), a("div", {
                staticClass: "address"
            }, [e._v("\n            " + e._s(e._f("address")(e.account)) + "\n        ")]), e._v(" "), a("div", {
                staticClass: "arrow"
            })])])
        }
        ), [], !1, null, "cbe80e40", null).exports
          , l = [function() {
            var t = this.$createElement
              , e = this._self._c || t;
            return e("span", [e("img", {
                attrs: {
                    src: i(226)
                }
            })])
        }
        ]
          , c = {
            data: ()=>({}),
            mounted() {},
            methods: {
                clickWechat(t) {
                    this.$emit("wechat", t)
                }
            }
        }
          , d = (i(228),
        Object(o.a)(c, (function() {
            var t = this
              , e = t.$createElement
              , a = t._self._c || e;
            return a("div", {
                ref: "sharePlat",
                staticClass: "sharePlat"
            }, [a("ul", [a("li", {
                on: {
                    click: function(e) {
                        return t.clickWechat("2")
                    }
                }
            }, [a("img", {
                attrs: {
                    src: i(227)
                }
            }), a("p", [t._v("长按图片发送好友")])])])])
        }
        ), [], !1, null, "d945c586", null).exports)
          , u = i(9)
          , h = {
            components: {
                SharePlat: d
            },
            data: ()=>({
                mask: !1,
                selIndex: 0,
                startPoint: {},
                centerIndex: 0,
                offsetWid: 0,
                MenuList: [{
                    url: u.g
                }, {
                    url: u.h
                }, {
                    url: u.i
                }]
            }),
            mounted() {
                this.initPic()
            },
            methods: {
                initPic() {},
                wechatFn(t) {
                    this.toast("请长按图片", "info")
                },
                touchstart(t) {
                    t || window.event;
                    this.startPoint = t.touches[0]
                },
                touchmove(t) {},
                touchend(t) {
                    let e = (t || window.event).changedTouches[0].clientX - this.startPoint.clientX;
                    if (Math.abs(e) > 10)
                        if (e > 0) {
                            if (0 !== this.centerIndex) {
                                this.centerIndex--,
                                this.centerIndex < 0 && (this.centerIndex = 0);
                                let t = parseInt(this.$refs.moveDis.offsetLeft) + 505;
                                this.$refs.moveDis.style.left = `${t}px`
                            }
                        } else if (this.centerIndex < this.MenuList.length - 1) {
                            this.centerIndex++,
                            this.centerIndex > this.MenuList.length && (this.centerIndex = this.MenuList.length - 1);
                            let t = parseInt(this.$refs.moveDis.offsetLeft) - 505;
                            this.$refs.moveDis.style.left = `${t}px`
                        }
                },
                sharePic(t) {
                    this.selIndex = t
                },
                hideMask() {
                    this.mask = !1,
                    document.documentElement.style.cssText = ""
                },
                toggleShareM() {
                    this.mask = !0,
                    document.documentElement.style.cssText = "height:100%;overflow:hidden;position: relative;"
                }
            }
        }
          , v = (i(229),
        Object(o.a)(h, (function() {
            var t = this
              , e = t.$createElement
              , i = t._self._c || e;
            return t.mask ? i("div", {
                staticClass: "shareMenu"
            }, [i("div", {
                staticClass: "mask",
                on: {
                    click: t.hideMask
                }
            }, [i("div", {
                staticClass: "banner"
            }, [i("ul", {
                ref: "moveDis",
                on: {
                    touchstart: t.touchstart,
                    touchmove: t.touchmove,
                    touchend: t.touchend
                }
            }, t._l(t.MenuList, (function(e, a) {
                return i("li", {
                    key: a,
                    class: {
                        selected: t.selIndex === a,
                        center: a === t.centerIndex
                    },
                    on: {
                        click: function(e) {
                            return e.stopPropagation(),
                            t.sharePic(a)
                        }
                    }
                }, [e.url ? i("img", {
                    attrs: {
                        src: t.baseUrl(e.url)
                    }
                }) : i("a"), t._v(" "), t._m(0, !0)])
            }
            )), 0)])]), t._v(" "), i("share-plat", {
                on: {
                    wechat: t.wechatFn
                }
            })], 1) : t._e()
        }
        ), l, !1, null, "58e94628", null).exports)
          , p = i(4)
          , f = i.n(p)
          , m = i(16)
          , _ = i.n(m)
          , g = i(17)
          , b = i.n(g)
          , y = i(68)
          , C = i.n(y)
          , w = i(69)
          , k = i.n(w)
          , x = i(43)
          , S = i.n(x)
          , I = i(49)
          , $ = i.n(I)
          , O = i(0)
          , M = i.n(O)
          , L = i(208)
          , N = i(2)
          , E = (i(257),
        i(245),
        i(247),
        i(786))
          , T = i(209);
        function j(t) {
            var e = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (t) {
                    return !1
                }
            }();
            return function() {
                var i, a = S()(t);
                if (e) {
                    var s = S()(this).constructor;
                    i = Reflect.construct(a, arguments, s)
                } else
                    i = a.apply(this, arguments);
                return k()(this, i)
            }
        }
        var P = function(t, e, i, a) {
            var s, n = arguments.length, o = n < 3 ? e : null === a ? a = Object.getOwnPropertyDescriptor(e, i) : a;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : $()(Reflect)) && "function" == typeof Reflect.decorate)
                o = Reflect.decorate(t, e, i, a);
            else
                for (var r = t.length - 1; r >= 0; r--)
                    (s = t[r]) && (o = (n < 3 ? s(o) : n > 3 ? s(e, i, o) : s(e, i)) || o);
            return n > 3 && o && Object.defineProperty(e, i, o),
            o
        }
          , R = function(t) {
            C()(a, t);
            var e, i = j(a);
            function a() {
                var t;
                return _()(this, a),
                (t = i.apply(this, arguments)).value = "",
                t.showMask = !1,
                t._popstateTimer = null,
                t
            }
            return b()(a, [{
                key: "inResult",
                get: function() {
                    return ~this.$route.path.indexOf("/find/result")
                }
            }, {
                key: "urlKeywords",
                get: function() {
                    var t, e = (null === (t = this.$route.query) || void 0 === t ? void 0 : t.kw) || "";
                    return decodeURIComponent(e)
                }
            }, {
                key: "created",
                value: (e = f()(M.a.mark((function t() {
                    return M.a.wrap((function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                this._initSearch();
                            case 1:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t, this)
                }
                ))),
                function() {
                    return e.apply(this, arguments)
                }
                )
            }, {
                key: "_initSearch",
                value: function() {
                    this._initRouterListener(),
                    this.value = this.keywords,
                    this.inResult && (this.value = this.urlKeywords,
                    this.$store.commit("SET_KEYWORD", this.value))
                }
            }, {
                key: "_initRouterListener",
                value: function() {
                    this._popstateTimer || (window.addEventListener("popstate", this._onStateChange.bind(this)),
                    this._popstateTimer = !0)
                }
            }, {
                key: "_onStateChange",
                value: function(t) {
                    var e = this;
                    clearTimeout(this._popstateTimer),
                    this._popstateTimer = setTimeout((function() {
                        e.inResult ? (e.value = e.urlKeywords,
                        e.$store.commit("SET_KEYWORD", e.value)) : e.onBack()
                    }
                    ), 500)
                }
            }, {
                key: "_removePopState",
                value: function() {
                    window.removeEventListener("popstate", this._onStateChange.bind(this)),
                    this._popstateTimer = null
                }
            }, {
                key: "beforeDestroy",
                value: function() {
                    this._removePopState(),
                    this.$store.commit("SET_KEYWORD", "")
                }
            }, {
                key: "onFocus",
                value: function(t) {
                    return this.showMask = !this.inResult,
                    this.$store.commit("SET_IN_SEARCH", !0),
                    t
                }
            }, {
                key: "onSearch",
                value: function() {
                    this.value && (this.$store.commit("SET_KEYWORD", this.value),
                    this.$router.push("/zh-cn/find/result/?kw=".concat(encodeURIComponent(this.value))))
                }
            }, {
                key: "onInput",
                value: function() {}
            }, {
                key: "onBack",
                value: function() {
                    this.showMask = !1,
                    this.value = "",
                    this.$store.commit("SET_IN_SEARCH", !1)
                }
            }]),
            a
        }(N.default);
        P([T.a], R.prototype, "inSearch", void 0),
        P([T.a], R.prototype, "keywords", void 0);
        var A = R = P([Object(L.a)({
            components: {
                Search: E.a
            }
        })], R)
          , B = (i(230),
        Object(o.a)(A, (function() {
            var t = this
              , e = t.$createElement
              , i = t._self._c || e;
            return i("div", {
                staticClass: "mobile-search-box"
            }, [i("a", {
                staticClass: "back",
                on: {
                    click: t.onBack
                }
            }), t._v(" "), i("search", {
                attrs: {
                    shape: "round",
                    "show-action": t.inSearch,
                    placeholder: "搜索商品、专辑、盲盒"
                },
                on: {
                    focus: t.onFocus,
                    search: t.onSearch,
                    input: t.onInput
                },
                nativeOn: {
                    keyup: function(e) {
                        return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : t.onSearch.apply(null, arguments)
                    }
                },
                model: {
                    value: t.value,
                    callback: function(e) {
                        t.value = e
                    },
                    expression: "value"
                }
            }, [i("template", {
                slot: "action"
            }, [i("button", {
                staticClass: "btn-search",
                on: {
                    click: t.onSearch
                }
            }, [t._v("\n                搜索\n            ")])])], 2), t._v(" "), t.showMask ? i("div", {
                staticClass: "result-mask"
            }) : t._e()], 1)
        }
        ), [], !1, null, "4f66889e", null))
          , D = B.exports;
        i(248);
        function U(t) {
            var e = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (t) {
                    return !1
                }
            }();
            return function() {
                var i, a = S()(t);
                if (e) {
                    var s = S()(this).constructor;
                    i = Reflect.construct(a, arguments, s)
                } else
                    i = a.apply(this, arguments);
                return k()(this, i)
            }
        }
        var G = function(t, e, i, a) {
            var s, n = arguments.length, o = n < 3 ? e : null === a ? a = Object.getOwnPropertyDescriptor(e, i) : a;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : $()(Reflect)) && "function" == typeof Reflect.decorate)
                o = Reflect.decorate(t, e, i, a);
            else
                for (var r = t.length - 1; r >= 0; r--)
                    (s = t[r]) && (o = (n < 3 ? s(o) : n > 3 ? s(e, i, o) : s(e, i)) || o);
            return n > 3 && o && Object.defineProperty(e, i, o),
            o
        }
          , W = function(t) {
            C()(a, t);
            var e, i = U(a);
            function a() {
                var t;
                return _()(this, a),
                (t = i.apply(this, arguments))._timer = null,
                t._popstateTimer = null,
                t._maskEl = null,
                t.value = "",
                t.focus = !1,
                t
            }
            return b()(a, [{
                key: "inResult",
                get: function() {
                    return ~this.$route.path.indexOf("/find/result")
                }
            }, {
                key: "urlKeywords",
                get: function() {
                    var t, e = (null === (t = this.$route.query) || void 0 === t ? void 0 : t.kw) || "";
                    return decodeURIComponent(e)
                }
            }, {
                key: "created",
                value: (e = f()(M.a.mark((function t() {
                    return M.a.wrap((function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                this._initSearch();
                            case 1:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t, this)
                }
                ))),
                function() {
                    return e.apply(this, arguments)
                }
                )
            }, {
                key: "_initSearch",
                value: function() {
                    this._initRouterListener(),
                    this._initKw(),
                    this._initMask()
                }
            }, {
                key: "_initKw",
                value: function() {
                    this.value = this.keywords,
                    this.inResult && (this.value = this.urlKeywords,
                    this.$store.commit("SET_KEYWORD", this.value))
                }
            }, {
                key: "_initMask",
                value: function() {
                    if (this._maskEl = document.getElementById("search-mask-id"),
                    !this._maskEl) {
                        var t = document.createElement("div");
                        t.className = "search-mask-pc",
                        t.id = "search-mask-id",
                        this._maskEl = t,
                        document.body.append(this._maskEl)
                    }
                    this._maskEl.addEventListener("click", this.onClickMask, !1)
                }
            }, {
                key: "_initRouterListener",
                value: function() {
                    this._popstateTimer || (window.addEventListener("popstate", this._onStateChange.bind(this)),
                    this._popstateTimer = !0)
                }
            }, {
                key: "_onStateChange",
                value: function(t) {
                    var e = this;
                    clearTimeout(this._popstateTimer),
                    this._popstateTimer = setTimeout((function() {
                        e.inResult ? (e.hideMask(),
                        e.value = e.urlKeywords,
                        e.$store.commit("SET_KEYWORD", e.value)) : e.onCancel(t)
                    }
                    ), 500)
                }
            }, {
                key: "_removePopState",
                value: function() {
                    window.removeEventListener("popstate", this._onStateChange.bind(this)),
                    this._popstateTimer = null
                }
            }, {
                key: "beforeDestroy",
                value: function() {
                    this._removePopState(),
                    this._maskEl && this._maskEl.removeEventListener("click", this.onClickMask, !1),
                    this.$store.commit("SET_KEYWORD", "")
                }
            }, {
                key: "onClickMask",
                value: function(t) {
                    this.hideMask()
                }
            }, {
                key: "onFocus",
                value: function(t) {
                    return this.showMask(),
                    this.focus = !0,
                    this.$store.commit("SET_IN_SEARCH", !0),
                    t
                }
            }, {
                key: "onBlur",
                value: function(t) {
                    this.hideMask(),
                    this.focus = !1,
                    this.$store.commit("SET_IN_SEARCH", !1)
                }
            }, {
                key: "onInput",
                value: function() {
                    this.focus = !0,
                    this.showMask()
                }
            }, {
                key: "onCancel",
                value: function(t) {
                    return this.hideMask(),
                    this.focus = !1,
                    this.value = "",
                    this.$store.commit("SET_IN_SEARCH", !1),
                    t
                }
            }, {
                key: "onSearch",
                value: function() {
                    this.value && (this.hideMask(),
                    this.$store.commit("SET_KEYWORD", this.value),
                    this.$router.push("/zh-cn/find/result/?kw=".concat(encodeURIComponent(this.value))))
                }
            }, {
                key: "onChange",
                value: function() {
                    var t = this;
                    clearTimeout(this._timer),
                    this._timer = setTimeout((function() {
                        t.value && t.focus && t.onSearch()
                    }
                    ), 300)
                }
            }, {
                key: "hideMask",
                value: function() {
                    this._maskEl && (this._maskEl.style.display = "none")
                }
            }, {
                key: "showMask",
                value: function() {
                    this._maskEl && (this._maskEl.style.display = "block")
                }
            }]),
            a
        }(N.default);
        G([T.a], W.prototype, "inSearch", void 0),
        G([T.a], W.prototype, "keywords", void 0);
        var H = W = G([Object(L.a)({
            components: {
                ElInput: i(249).default
            }
        })], W)
          , z = (i(231),
        Object(o.a)(H, (function() {
            var t = this
              , e = t.$createElement
              , i = t._self._c || e;
            return i("div", {
                staticClass: "search-box"
            }, [i("el-input", {
                attrs: {
                    placeholder: "搜索商品、专辑、盲盒",
                    clearable: "",
                    "prefix-icon": "el-icon-search"
                },
                on: {
                    focus: t.onFocus,
                    blur: t.onBlur,
                    input: t.onInput
                },
                nativeOn: {
                    keyup: function(e) {
                        return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : t.onChange.apply(null, arguments)
                    }
                },
                model: {
                    value: t.value,
                    callback: function(e) {
                        t.value = e
                    },
                    expression: "value"
                }
            })], 1)
        }
        ), [], !1, null, "9ca2b392", null))
          , V = {
            name: "Header",
            components: {
                WalletButton: r,
                ShareMenu: v,
                SearchBox: z.exports,
                MobileSearchBox: D
            },
            props: {
                showBack: {
                    type: Boolean,
                    default: !1
                },
                showSearchInMobile: {
                    type: Boolean,
                    default: !1
                }
            },
            computed: {
                ...Object(a.e)(["isMobile", "appConfig"]),
                ...Object(a.e)("ethereum", ["account"]),
                noticeCenterUrl() {
                    return (this.appConfig || {}).noticeCenterUrl
                },
                helpCenterUrl() {
                    return (this.appConfig || {}).helpCenterUrl
                }
            },
            data() {
                return {
                    show: !1,
                    hiding: !1,
                    isPC: !this.isMobile
                }
            },
            mounted() {
                this.isPC = !this.isMobile
            },
            methods: {
                toggleSlider() {
                    clearTimeout(this.timer),
                    this.show = !this.show,
                    this.show || (this.hiding = !0,
                    this.timer = setTimeout((()=>{
                        this.hiding = !1
                    }
                    ), 200)),
                    this.$emit("show", this.show)
                },
                goBack() {
                    this.$emit("back")
                },
                toHome() {
                    this.$router.push("/zh-cn/")
                },
                shareMenu() {
                    this.$refs.shareMenu.toggleShareM()
                },
                logout() {
                    this.$store.dispatch("logout")
                }
            }
        }
          , F = (i(232),
        i(233),
        Object(o.a)(V, (function() {
            var t = this
              , e = t.$createElement
              , i = t._self._c || e;
            return i("header", {
                staticClass: "header",
                class: {
                    show: t.show,
                    hiding: t.hiding,
                    showSearchInMobile: t.showSearchInMobile
                }
            }, [i("div", {
                staticClass: "inner"
            }, [i("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: !t.showBack,
                    expression: "!showBack"
                }],
                staticClass: "btn-nav-control",
                on: {
                    click: t.toggleSlider
                }
            }), t._v(" "), i("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.showBack,
                    expression: "showBack"
                }],
                staticClass: "btn-back",
                on: {
                    click: t.goBack
                }
            }), t._v(" "), i("div", {
                staticClass: "logo"
            }, [i("div", {
                staticClass: "img",
                on: {
                    click: t.toHome
                }
            })]), t._v(" "), t.isPC ? i("div", {
                staticClass: "search-container"
            }, [i("client-only", [i("search-box")], 1)], 1) : t._e(), t._v(" "), i("ul", {
                staticClass: "navs"
            }, [i("li", [i("nuxt-link", {
                attrs: {
                    to: "/zh-cn/"
                }
            }, [t._v("\n                    首页\n                ")])], 1), t._v(" "), i("li", [i("nuxt-link", {
                attrs: {
                    to: "/zh-cn/find/"
                }
            }, [t._v("\n                    新品\n                ")])], 1), t._v(" "), i("li", [i("nuxt-link", {
                attrs: {
                    to: "/zh-cn/mbox/"
                }
            }, [t._v("\n                    盲盒\n                ")])], 1), t._v(" "), i("li", [i("nuxt-link", {
                attrs: {
                    to: "/zh-cn/market/"
                }
            }, [t._v("\n                    市场\n                ")])], 1), t._v(" "), i("li", [i("nuxt-link", {
                attrs: {
                    to: "/zh-cn/market/game/"
                }
            }, [t._v("\n                    元宇宙\n                ")])], 1), t._v(" "), i("li", [i("nuxt-link", {
                attrs: {
                    to: "/zh-cn/account/"
                }
            }, [t._v("\n                    我的\n                ")])], 1), t._v(" "), t.helpCenterUrl ? i("li", [i("a", {
                attrs: {
                    target: "_blank",
                    rel: "noopener noreferrer",
                    href: t.helpCenterUrl
                }
            }, [t._v("\n                    帮助\n                ")])]) : t._e(), t._v(" "), i("li", [i("nuxt-link", {
                attrs: {
                    to: "/zh-cn/notice/"
                }
            }, [t._v("\n                    公告\n                ")])], 1), t._v(" "), i("li", [i("nuxt-link", {
                attrs: {
                    to: "/zh-cn/download/"
                }
            }, [t._v("\n                    下载APP\n                ")])], 1)]), t._v(" "), i("wallet-button")], 1), t._v(" "), !t.isPC && t.showSearchInMobile ? i("div", [i("client-only", [i("mobile-search-box")], 1)], 1) : t._e(), t._v(" "), i("div", {
                staticClass: "slider-mask",
                on: {
                    click: t.toggleSlider
                }
            }), t._v(" "), i("ul", {
                staticClass: "slider",
                on: {
                    click: t.toggleSlider
                }
            }, [i("li", [i("nuxt-link", {
                attrs: {
                    to: "/zh-cn/"
                }
            }, [t._v("\n                首页\n            ")])], 1), t._v(" "), i("li", [i("nuxt-link", {
                attrs: {
                    to: "/zh-cn/find/"
                }
            }, [t._v("\n                新品\n            ")])], 1), t._v(" "), i("li", [i("nuxt-link", {
                attrs: {
                    to: "/zh-cn/mbox/"
                }
            }, [t._v("\n                盲盒\n            ")])], 1), t._v(" "), i("li", [i("nuxt-link", {
                attrs: {
                    to: "/zh-cn/market/"
                }
            }, [t._v("\n                市场\n            ")])], 1), t._v(" "), i("li", [i("nuxt-link", {
                attrs: {
                    to: "/zh-cn/market/game/"
                }
            }, [t._v("\n                元宇宙\n            ")])], 1), t._v(" "), i("li", [i("nuxt-link", {
                attrs: {
                    to: "/zh-cn/account/"
                }
            }, [t._v("\n                我的\n            ")])], 1), t._v(" "), t.helpCenterUrl ? i("li", [i("a", {
                attrs: {
                    target: "_blank",
                    rel: "noopener noreferrer",
                    href: t.helpCenterUrl
                }
            }, [t._v("\n                帮助\n            ")])]) : t._e(), t._v(" "), i("li", [i("nuxt-link", {
                attrs: {
                    to: "/zh-cn/notice/"
                }
            }, [t._v("\n                公告\n            ")])], 1), t._v(" "), i("li", [i("nuxt-link", {
                attrs: {
                    to: "/zh-cn/download/"
                }
            }, [t._v("\n                下载APP\n            ")])], 1), t._v(" "), i("li", [i("nuxt-link", {
                attrs: {
                    to: "/zh-cn/feedback/"
                }
            }, [t._v("\n                投诉\n            ")])], 1), t._v(" "), i("li", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.account,
                    expression: "account"
                }]
            }, [i("a", {
                on: {
                    click: t.logout
                }
            }, [t._v("\n                退出\n            ")])])]), t._v(" "), i("share-menu", {
                ref: "shareMenu"
            })], 1)
        }
        ), [], !1, null, "2782c4dd", null).exports)
          , q = {
            name: "Footer",
            data: ()=>({
                status: {
                    0: !1,
                    1: !1,
                    2: !1
                }
            }),
            computed: {
                ...Object(a.e)(["appConfig"]),
                contractUs() {
                    return (this.appConfig || {}).orderComplainUrl
                },
                bussinessLink() {
                    return (this.appConfig || {}).aboutUsUrl
                },
                aboutUs() {
                    return (this.appConfig || {}).aboutUsUrl
                },
                userAgreement() {
                    return (this.appConfig || {}).userAgreementUrl
                }
            },
            methods: {
                toggleLink(t) {
                    this.status[t] = !this.status[t]
                }
            }
        }
          , Y = (i(234),
        Object(o.a)(q, (function() {
            var t = this
              , e = t.$createElement
              , i = t._self._c || e;
            return i("footer", {
                staticClass: "footer"
            }, [i("div", {
                staticClass: "inner"
            }, [t._m(0), t._v(" "), t._m(1), t._v(" "), i("div", {
                staticClass: "links"
            }, [i("div", {
                staticClass: "group"
            }, [i("ul", {
                staticClass: "list"
            }, [i("li", [i("a", {
                attrs: {
                    target: "_blank",
                    rel: "noopener noreferrer",
                    href: t.contractUs
                }
            }, [t._v("\n                            联系我们\n                        ")])]), t._v(" "), i("li", [i("a", {
                attrs: {
                    target: "_blank",
                    rel: "noopener noreferrer",
                    href: t.bussinessLink
                }
            }, [t._v("\n                            商务合作\n                        ")])]), t._v(" "), i("li", [i("a", {
                attrs: {
                    target: "_blank",
                    rel: "noopener noreferrer",
                    href: t.aboutUs
                }
            }, [t._v("\n                            关于我们\n                        ")])]), t._v(" "), i("li", [i("a", {
                attrs: {
                    target: "_blank",
                    rel: "noopener noreferrer",
                    href: t.userAgreement
                }
            }, [t._v("\n                            用户协议\n                        ")])])])])]), t._v(" "), t._m(2)])])
        }
        ), [function() {
            var t = this
              , e = t.$createElement
              , i = t._self._c || e;
            return i("div", {
                staticClass: "creator-mobile"
            }, [i("div", {
                staticClass: "creator-title"
            }, [t._v("\n                加入创作者生态\n            ")]), t._v(" "), i("div", {
                staticClass: "creator-detail"
            }, [t._v("\n                若您和您的团队想发行推⼴数字藏品，请联系： "), i("br"), t._v("\n                iboxservice@ibox.com\n            ")])])
        }
        , function() {
            var t = this
              , e = t.$createElement
              , i = t._self._c || e;
            return i("div", {
                staticClass: "platform-info"
            }, [i("div", {
                staticClass: "logo"
            }), t._v(" "), i("div", {
                staticClass: "creator"
            }, [i("div", {
                staticClass: "title"
            }, [t._v("\n                    加入创作者生态\n                ")]), t._v(" "), i("div", {
                staticClass: "c-info"
            }, [t._v("\n                    若您和您的团队想发行推⼴数字藏品，请联系iboxservice@ibox.com\n                ")])]), t._v(" "), i("div", {
                staticClass: "s-line"
            }), t._v(" "), i("div", {
                staticClass: "detail"
            }, [i("div", {
                staticClass: "beian-info"
            }, [i("a", {
                attrs: {
                    href: "https://beian.miit.gov.cn",
                    rel: "noopener noreferrer",
                    target: "_blank"
                }
            }, [t._v("\n                        琼ICP备2021003935号\n                    ")])]), t._v(" "), i("a", {
                staticClass: "police-right",
                attrs: {
                    target: "_blank",
                    href: "http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=46902302000560"
                }
            }, [i("span", {
                staticClass: "icon"
            }), t._v(" "), i("span", {
                staticClass: "text"
            }, [t._v("\n                        琼公网安备 46902302000560号\n                    ")])]), t._v(" "), i("div", {
                staticClass: "copyright"
            }, [t._v("\n                    ©2021 海南链盒科技有限公司\n                ")])])])
        }
        , function() {
            var t = this
              , e = t.$createElement
              , i = t._self._c || e;
            return i("div", {
                staticClass: "platform-mobile"
            }, [i("div", {
                staticClass: "logo"
            }), t._v(" "), i("div", {
                staticClass: "copyright"
            }, [i("a", {
                attrs: {
                    href: "https://beian.miit.gov.cn",
                    rel: "noopener noreferrer",
                    target: "_blank"
                }
            }, [t._v("\n                    琼ICP备2021003935号\n                ")])]), t._v(" "), i("a", {
                staticClass: "police-right",
                attrs: {
                    target: "_blank",
                    href: "http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=46902302000560"
                }
            }, [i("span", {
                staticClass: "icon"
            }), t._v(" "), i("span", {
                staticClass: "text"
            }, [t._v("\n                    琼公网安备 46902302000560号\n                ")])]), t._v(" "), i("div", {
                staticClass: "copyright"
            }, [t._v("\n                ©2021 海南链盒科技有限公司\n            ")])])
        }
        ], !1, null, "0fb889d5", null).exports)
          , K = i(237)
          , X = i(221);
        i(7);
        const J = 1
          , Q = 0
          , Z = -1;
        var tt = {
            name: "ResponsiveLayout",
            props: {
                showSearchInMobile: {
                    type: Boolean,
                    default: !1
                },
                showBack: {
                    type: Boolean,
                    default: !1
                },
                showLoadingInMobile: {
                    type: Boolean,
                    default: !1
                },
                showHeaderInMobile: {
                    type: Boolean,
                    default: !0
                },
                showFooterInMobile: {
                    type: Boolean,
                    default: !0
                },
                paddingBottom: {
                    type: Number,
                    default: 0
                },
                showHeaderBorder: {
                    type: Boolean,
                    default: !1
                }
            },
            components: {
                Loading: K.a,
                Header: F,
                Footer: Y
            },
            computed: {
                ...Object(a.e)(["isMobile", "inSearch", "isApp"]),
                scrollDirection() {
                    if (this.showMenu || this.inSearch)
                        return Q;
                    let t = this.isMobile ? 100 : 60;
                    return this.isMobile && this.showSearchInMobile && (t = 204),
                    this.scrollTop > t ? this.scrollDistance >= 0 ? J : Z : Q
                },
                showHeader() {
                    const {showHeaderInMobile: t, isMobile: e} = this;
                    return !e || t
                },
                showFooter() {
                    const {showFooterInMobile: t, isMobile: e} = this;
                    return !e || t
                },
                showLoading() {
                    const {showLoadingInMobile: t, isMobile: e, innerLoading: i} = this;
                    return !!e && (t || i)
                }
            },
            data: ()=>({
                scrollTop: 0,
                scrollDistance: 0,
                innerLoading: !1,
                showMask: !1,
                showMenu: !1
            }),
            mounted() {
                window.addEventListener("scroll", this.onScroll),
                this.onScroll(),
                this.$root.$on(X.a.Loading, this.toggleLoading),
                this.$root.$on(X.a.ShowMask, this.toggleMask)
            },
            beforeDestroy() {
                window.removeEventListener("scroll", this.onScroll),
                this.$root.$off(X.a.Loading, this.toggleLoading),
                this.$root.$off(X.a.ShowMask, this.toggleMask)
            },
            methods: {
                toggleMask(t=!1) {
                    this.isMobile && (this.showMask = t)
                },
                toggleLoading(t=!1) {
                    this.innerLoading = t
                },
                onScroll() {
                    const t = Math.floor(window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop);
                    this.scrollDistance = t - this.scrollTop,
                    this.scrollTop = t
                },
                onBack() {
                    this.$emit("back")
                },
                onShow(t) {
                    this.showMenu = t
                }
            }
        }
          , et = (i(235),
        Object(o.a)(tt, (function() {
            var t = this
              , e = t.$createElement
              , i = t._self._c || e;
            return i("section", {
                staticClass: "main",
                class: {
                    "in-sticky": t.scrollTop > 0,
                    "in-search": t.inSearch,
                    "up-sticky": 1 === t.scrollDirection,
                    "down-sticky": -1 === t.scrollDirection,
                    "hide-header": !t.showHeader,
                    "hide-footer": !t.showFooter,
                    "header-border": t.showHeaderBorder,
                    "has-search": t.showSearchInMobile
                },
                style: {
                    paddingBottom: (t.isMobile ? t.paddingBottom : "none") + "px"
                }
            }, [i("Header", {
                attrs: {
                    "show-back": t.showBack,
                    "show-search-in-mobile": t.showSearchInMobile
                },
                on: {
                    back: t.onBack,
                    show: t.onShow
                }
            }), t._v(" "), i("section", {
                staticClass: "page"
            }, [i("loading", {
                attrs: {
                    show: t.showLoading,
                    "custom-class": "layout-loading"
                }
            }), t._v(" "), i("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.showMask,
                    expression: "showMask"
                }],
                staticClass: "mask"
            }, [i("div", {
                staticClass: "top-tips"
            })]), t._v(" "), t._t("default")], 2), t._v(" "), i("Footer")], 1)
        }
        ), [], !1, null, "70fd3a58", null));
        e.a = et.exports
    },
    220: function(t, e, i) {},
    221: function(t, e, i) {
        "use strict";
        var a;
        i.d(e, "a", (function() {
            return a
        }
        )),
        function(t) {
            t.Loading = "loading",
            t.HashChange = "hashchange",
            t.ShowMask = "showmask"
        }(a || (a = {}))
    },
    224: function(t, e, i) {
        t.exports = i.p + "img/1ce3e5c.v1653016677892.svg"
    },
    225: function(t, e, i) {
        "use strict";
        i(210)
    },
    226: function(t, e, i) {
        t.exports = i.p + "img/94baf74.v1653016677892.svg"
    },
    227: function(t, e, i) {
        t.exports = i.p + "img/48ed8ef.v1653016677892.svg"
    },
    228: function(t, e, i) {
        "use strict";
        i(211)
    },
    229: function(t, e, i) {
        "use strict";
        i(212)
    },
    230: function(t, e, i) {
        "use strict";
        i(213)
    },
    231: function(t, e, i) {
        "use strict";
        i(214)
    },
    232: function(t, e, i) {
        "use strict";
        i(215)
    },
    233: function(t, e, i) {
        "use strict";
        i(216)
    },
    234: function(t, e, i) {
        "use strict";
        i(217)
    },
    235: function(t, e, i) {
        "use strict";
        i(218)
    },
    236: function(t, e, i) {
        "use strict";
        var a = i(9)
          , s = {
            props: {
                type: {
                    type: Number,
                    default: 1
                },
                src: {
                    type: String,
                    default: ""
                },
                alt: {
                    type: String,
                    default: ""
                },
                playable: {
                    type: Boolean,
                    default: !1
                },
                lazy: {
                    type: Boolean,
                    default: !0
                },
                origin: {
                    type: Boolean,
                    default: !0
                }
            },
            data: ()=>({
                vBase: a.j
            }),
            computed: {
                url() {
                    const {src: t, vBase: e, origin: i} = this;
                    let a = t ? `${e || ""}${t}` : "";
                    if (!a)
                        return "";
                    if (i) {
                        const t = a.includes("?") ? "&" : "?";
                        a += t + "style=st6"
                    }
                    return a
                }
            },
            methods: {
                onLoad() {
                    const {obj: t} = this.$refs;
                    t && this.$emit("load", {
                        height: t.clientHeight,
                        width: t.clientWidth
                    })
                }
            }
        }
          , n = (i(240),
        i(10))
          , o = Object(n.a)(s, (function() {
            var t = this
              , e = t.$createElement
              , i = t._self._c || e;
            return i("div", {
                staticClass: "media-wrapper"
            }, [t.url ? [t.lazy ? i("img", {
                directives: [{
                    name: "lazy",
                    rawName: "v-lazy",
                    value: t.baseUrl(t.url),
                    expression: "baseUrl(url)"
                }],
                ref: "obj",
                attrs: {
                    alt: t.alt
                },
                on: {
                    load: t.onLoad
                }
            }) : i("img", {
                ref: "obj",
                attrs: {
                    alt: t.alt,
                    src: t.baseUrl(t.url)
                },
                on: {
                    load: t.onLoad
                }
            })] : t._e(), t._v(" "), t.playable && 2 === t.type ? i("div", {
                staticClass: "btn-play"
            }) : t._e()], 2)
        }
        ), [], !1, null, "291dfea4", null);
        e.a = o.exports
    },
    237: function(t, e, i) {
        "use strict";
        var a = i(17)
          , s = i.n(a)
          , n = i(16)
          , o = i.n(n)
          , r = i(68)
          , l = i.n(r)
          , c = i(69)
          , d = i.n(c)
          , u = i(43)
          , h = i.n(u)
          , v = i(49)
          , p = i.n(v)
          , f = i(208)
          , m = i(207);
        function _(t) {
            var e = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (t) {
                    return !1
                }
            }();
            return function() {
                var i, a = h()(t);
                if (e) {
                    var s = h()(this).constructor;
                    i = Reflect.construct(a, arguments, s)
                } else
                    i = a.apply(this, arguments);
                return d()(this, i)
            }
        }
        var g = function(t, e, i, a) {
            var s, n = arguments.length, o = n < 3 ? e : null === a ? a = Object.getOwnPropertyDescriptor(e, i) : a;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : p()(Reflect)) && "function" == typeof Reflect.decorate)
                o = Reflect.decorate(t, e, i, a);
            else
                for (var r = t.length - 1; r >= 0; r--)
                    (s = t[r]) && (o = (n < 3 ? s(o) : n > 3 ? s(e, i, o) : s(e, i)) || o);
            return n > 3 && o && Object.defineProperty(e, i, o),
            o
        }
          , b = function(t) {
            l()(i, t);
            var e = _(i);
            function i() {
                return o()(this, i),
                e.apply(this, arguments)
            }
            return s()(i)
        }(f.e);
        g([Object(f.d)({
            required: !0,
            default: !1,
            type: Boolean
        })], b.prototype, "show", void 0),
        g([Object(f.d)({
            required: !0,
            default: "",
            type: String
        })], b.prototype, "customClass", void 0),
        g([Object(f.d)({
            required: !1,
            default: "加载中",
            type: String
        })], b.prototype, "text", void 0);
        var y = b = g([Object(m.b)({
            name: "Loading"
        })], b)
          , C = (i(258),
        i(10))
          , w = Object(C.a)(y, (function() {
            var t = this
              , e = t.$createElement
              , i = t._self._c || e;
            return i("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.show,
                    expression: "show"
                }],
                class: ["loading-container", t.customClass]
            }, [i("div", {
                staticClass: "loading"
            }), t._v(" "), i("div", {
                staticClass: "text"
            }, [t._v("\n        " + t._s(t.text) + "\n    ")])])
        }
        ), [], !1, null, "47e065c2", null);
        e.a = w.exports
    },
    240: function(t, e, i) {
        "use strict";
        i(220)
    },
    243: function(t, e, i) {},
    252: function(t, e, i) {},
    255: function(t, e, i) {
        "use strict";
        var a = i(263)
          , s = i.n(a)
          , n = {
            name: "Clipboard",
            props: {
                text: {
                    type: String,
                    default: ""
                },
                success: {
                    type: Function,
                    default: ()=>{}
                },
                error: {
                    type: Function,
                    default: ()=>{}
                }
            },
            mounted() {
                let t = new s.a(this.$refs.copyBox);
                t.on("success", (t=>{
                    this.success(t),
                    t.clearSelection()
                }
                )),
                t.on("error", (t=>{
                    this.error(t)
                }
                )),
                this.$once("hook:beforeDestroy", (()=>{
                    t.destroy()
                }
                ))
            }
        }
          , o = i(10)
          , r = Object(o.a)(n, (function() {
            var t = this
              , e = t.$createElement;
            return (t._self._c || e)("div", {
                ref: "copyBox",
                staticClass: "copy-box",
                attrs: {
                    "data-clipboard-text": t.text
                }
            }, [t._t("default")], 2)
        }
        ), [], !1, null, null, null);
        e.a = r.exports
    },
    258: function(t, e, i) {
        "use strict";
        i(243)
    },
    261: function(t, e, i) {},
    269: function(t, e, i) {
        "use strict";
        i(252)
    },
    270: function(t, e, i) {},
    271: function(t, e, i) {},
    272: function(t, e, i) {},
    273: function(t, e, i) {
        "use strict";
        var a = i(23)
          , s = i(9)
          , n = i(7)
          , o = {
            name: "VideoPlayerV2",
            props: {
                data: {
                    type: Object,
                    default: ()=>{}
                },
                fitSize: {
                    type: Boolean,
                    default: !0
                },
                albumId: {
                    type: [Number, String],
                    default: ""
                }
            },
            data() {
                return {
                    videoId: Object(n.h)(),
                    sign: "",
                    playing: !1,
                    loading: !0,
                    width: this.data.width || 300,
                    height: this.data.height || 0
                }
            },
            computed: {
                mediaPlayMode() {
                    return this.data.mediaPlayMode
                },
                videoUrl() {
                    return this.data.videoUrl
                },
                cover() {
                    return this.data.url
                },
                showCover() {
                    return 1 !== this.mediaPlayMode || !this.videoUrl
                },
                fitWidth() {
                    const {width: t} = this;
                    return t
                },
                fitHeight() {
                    const {height: t} = this;
                    return t
                }
            },
            async mounted() {
                this.resize(),
                await this.getSign(),
                this.initPlayer()
            },
            beforeDestroy() {
                document.removeEventListener("WeixinJSBridgeReady", this.playVideo, !1),
                this.dispose()
            },
            methods: {
                dispose() {
                    const {player: t} = this;
                    t && "function" == typeof t.dispose && t.dispose()
                },
                resize() {
                    const {container: t} = this.$refs
                      , {width: e, height: i} = this.data
                      , a = t.parentNode.offsetWidth;
                    e > a && (this.width = a,
                    this.height = i * (this.width / e))
                },
                play() {
                    this.loading ? this.$tips("视频加载中...", "info") : this.player && (this.player.play(),
                    this.playing = !0)
                },
                playControl() {
                    1 === this.mediaPlayMode && (this.playing ? this.player.pause() : this.player.play(),
                    this.playing = !this.playing)
                },
                onCoverLoad() {
                    this.$emit("load")
                },
                async getSign() {
                    if (!this.data.id)
                        return;
                    const {success: t, data: e} = await a.g.videoSignature({
                        id: this.data.id,
                        albumId: this.albumId
                    });
                    t && (this.sign = e)
                },
                playVideo() {
                    const {player: t} = this;
                    WeixinJSBridge.invoke("getNetworkType", {}, (function(e) {
                        t.play()
                    }
                    ), !1)
                },
                initPlayer() {
                    this.loading = !0,
                    Promise.all([Object(n.l)("tcplayer-4.1", "//imgcache.qq.com/open/qcloud/video/tcplayer/tcplayer.v4.1.min.js"), Object(n.l)("hls-0.13.2", "//imgcache.qq.com/open/qcloud/video/tcplayer/libs/hls.min.0.13.2m.js"), Object(n.m)("tcplayer-css", "//cloudcache.tencent-cloud.com/open/qcloud/video/tcplayer/tcplayer.css")]).then((t=>{
                        this.loading = !1,
                        this.videoId = Object(n.h)(),
                        this.$nextTick().then((()=>{
                            const {data: t, videoId: e, sign: i} = this;
                            if (this.mediaPlayMode) {
                                if (1 === this.mediaPlayMode) {
                                    if (this.loading = !1,
                                    !this.videoUrl)
                                        return;
                                    this.player = document.getElementById(`player-${e}`),
                                    window.WeixinJSBridge ? this.playVideo() : document.addEventListener("WeixinJSBridgeReady", this.playVideo, !1),
                                    this.player.play(),
                                    this.playing = !0
                                }
                            } else
                                this.player = window.TCPlayer && window.TCPlayer(`player-${e}`, {
                                    fileID: t.id,
                                    appID: s.f,
                                    psign: i,
                                    loop: !0,
                                    autoplay: !0,
                                    plugins: {
                                        ContinuePlay: {},
                                        ProgressMarker: !0,
                                        ContextMenu: {
                                            statistic: !0,
                                            levelSwitch: {
                                                open: !0
                                            }
                                        }
                                    }
                                }),
                                this.loading = !1
                        }
                        ))
                    }
                    ))
                }
            }
        }
          , r = (i(269),
        i(10))
          , l = Object(r.a)(o, (function() {
            var t = this
              , e = t.$createElement
              , i = t._self._c || e;
            return i("div", {
                ref: "container",
                staticClass: "video-player",
                class: {
                    playing: t.playing
                },
                style: "width: " + t.fitWidth + "px;height: " + t.fitHeight + "px;"
            }, [t.showCover ? i("img", {
                attrs: {
                    src: t.baseUrl(t.cover + "?style=st6"),
                    alt: "视频封面"
                },
                on: {
                    load: t.onCoverLoad,
                    click: function(e) {
                        return e.stopPropagation(),
                        t.play.apply(null, arguments)
                    }
                }
            }) : t._e(), t._v(" "), i("div", {
                staticClass: "player",
                on: {
                    click: t.playControl
                }
            }, [t.mediaPlayMode ? 1 === t.mediaPlayMode ? i("video", {
                attrs: {
                    id: "player-" + t.videoId,
                    width: "" + t.fitWidth,
                    height: "" + t.fitHeight,
                    autoplay: "",
                    loop: "",
                    "x5-video-player-type": "h5",
                    "x5-playsinline": "",
                    "webkit-playsinline": "",
                    playsinline: ""
                }
            }, [i("source", {
                attrs: {
                    src: t.videoUrl,
                    type: "video/mp4"
                }
            })]) : t._e() : i("video", {
                attrs: {
                    id: "player-" + t.videoId,
                    preload: "auto",
                    playsinline: "",
                    "webkit-playsinline": ""
                }
            })]), t._v(" "), i("button", {
                staticClass: "btn-play",
                on: {
                    click: t.play
                }
            })])
        }
        ), [], !1, null, "465b7e9c", null);
        e.a = l.exports
    },
    277: function(t) {
        t.exports = JSON.parse('{"v":"5.7.8","fr":25,"ip":0,"op":375,"w":58,"h":58,"nm":"合成 1","ddd":0,"assets":[{"id":"image_0","w":116,"h":116,"u":"/image/","p":"img_0.png","e":0}],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"形状图层 2","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"t":374,"s":[2880]}],"ix":10},"p":{"a":0,"k":[29,29,0],"ix":2,"l":2},"a":{"a":0,"k":[4.187,-0.125,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[5,17],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":8,"ix":4},"nm":"矩形路径 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"填充 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[4.22,-6.483],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"矩形 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":375,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"形状图层 1","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"t":374,"s":[360]}],"ix":10},"p":{"a":0,"k":[29,29,0],"ix":2,"l":2},"a":{"a":0,"k":[-1.887,-1.572,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[5,14],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":8,"ix":4},"nm":"矩形路径 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"填充 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-1.855,-6.43],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"矩形 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":375,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":2,"nm":"Frame 11733.png","cl":"png","refId":"image_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[29,29,0],"ix":2,"l":2},"a":{"a":0,"k":[58,58,0],"ix":1,"l":2},"s":{"a":0,"k":[50,50,100],"ix":6,"l":2}},"ao":0,"ip":0,"op":375,"st":0,"bm":0}],"markers":[]}')
    },
    278: function(t, e, i) {
        "use strict";
        i(261)
    },
    280: function(t, e, i) {
        "use strict";
        var a = {
            name: "UIMobileCheckbox",
            model: {
                prop: "value",
                event: "change"
            },
            props: {
                value: {
                    type: [Object, Boolean],
                    default: !1
                }
            },
            data() {
                return {
                    checked: this.value
                }
            },
            methods: {
                toggle() {
                    this.checked = !this.checked
                }
            },
            watch: {
                checked(t) {
                    this.$emit("change", t)
                },
                value(t) {
                    this.checked = t
                }
            }
        }
          , s = (i(278),
        i(10))
          , n = Object(s.a)(a, (function() {
            var t = this
              , e = t.$createElement
              , i = t._self._c || e;
            return i("div", {
                staticClass: "checkbox",
                class: {
                    checked: t.checked
                },
                on: {
                    click: t.toggle
                }
            }, [i("div", {
                staticClass: "icon"
            }), t._v(" "), i("div", {
                staticClass: "label"
            }, [t._t("default")], 2)])
        }
        ), [], !1, null, "4e2b76ea", null);
        e.a = n.exports
    },
    282: function(t, e, i) {},
    283: function(t, e, i) {},
    288: function(t, e, i) {
        "use strict";
        var a = i(28)
          , s = i(255)
          , n = {
            props: {
                address: {
                    type: String,
                    default: ""
                },
                copyable: {
                    type: Boolean,
                    default: !1
                }
            },
            components: {
                Clipboard: s.a
            },
            computed: {
                ...Object(a.e)("ethereum", ["chain"])
            },
            methods: {
                onSuccess() {
                    this.toast("复制成功", "success")
                },
                onError() {
                    this.toast("复制失败", "error")
                }
            }
        }
          , o = (i(501),
        i(10))
          , r = Object(o.a)(n, (function() {
            var t = this
              , e = t.$createElement
              , i = t._self._c || e;
            return i("div", {
                staticClass: "wallet-address"
            }, [i("a", {
                staticClass: "link"
            }, [t._v("\n        " + t._s(t._f("address")(t.address)) + "\n    ")]), t._v(" "), t.copyable ? i("clipboard", {
                staticClass: "copy",
                attrs: {
                    text: t.address,
                    success: t.onSuccess,
                    error: t.onError
                }
            }) : t._e()], 1)
        }
        ), [], !1, null, null, null);
        e.a = r.exports
    },
    294: function(t, e, i) {
        "use strict";
        i(270)
    },
    295: function(t, e, i) {
        "use strict";
        i(271)
    },
    296: function(t, e, i) {
        "use strict";
        i(272)
    },
    302: function(t, e, i) {
        "use strict";
        var a = i(7)
          , s = {
            name: "Lottie",
            props: {
                options: {
                    type: Object,
                    required: !0
                },
                height: {
                    type: Number,
                    default: 0
                },
                width: {
                    type: Number,
                    default: 0
                }
            },
            data() {
                return {
                    style: {
                        width: this.width ? `${this.width}px` : "100%",
                        height: this.height ? `${this.height}px` : "100%",
                        overflow: "hidden",
                        margin: "0 auto"
                    }
                }
            },
            mounted() {
                const {loop: t, autoplay: e, animationData: i, rendererSettings: s} = this.options;
                Object(a.l)("lottie", "/js/lottie.min.js").then((()=>{
                    this.anim = window.lottie && window.lottie.loadAnimation({
                        container: this.$refs.lavContainer,
                        renderer: "svg",
                        loop: !1 !== t,
                        autoplay: !1 !== e,
                        animationData: i,
                        rendererSettings: s
                    }),
                    this.$emit("animCreated", this.anim)
                }
                ))
            }
        }
          , n = i(10)
          , o = Object(n.a)(s, (function() {
            var t = this
              , e = t.$createElement;
            return (t._self._c || e)("div", {
                ref: "lavContainer",
                style: t.style
            })
        }
        ), [], !1, null, null, null);
        e.a = o.exports
    },
    303: function(t, e, i) {
        "use strict";
        var a = i(34)
          , s = i(23)
          , n = {
            name: "ResellCancelConfirmModal",
            components: {
                CommonModal: a.a
            },
            props: {
                gId: {
                    type: [Number, String],
                    default: ""
                },
                origin: {
                    type: Number,
                    default: 0
                }
            },
            data: ()=>({
                cancelling: !1
            }),
            methods: {
                doCancel() {
                    this.$parent.$emit("cancel"),
                    this.$emit("close")
                },
                async doResellCancel() {
                    this.cancelling = !0;
                    let t = {};
                    t = 1 === this.origin ? await s.k.hecoCancelResell(this.gId) : await s.k.cancelResell(this.gId);
                    const {success: e, message: i} = t;
                    e ? (this.$emit("close"),
                    this.$parent.$emit("success")) : this.toast(i, "error")
                }
            }
        }
          , o = (i(296),
        i(10))
          , r = Object(o.a)(n, (function() {
            var t = this
              , e = t.$createElement
              , i = t._self._c || e;
            return i("common-modal", [i("h3", {
                staticClass: "modal-title",
                attrs: {
                    slot: "title"
                },
                slot: "title"
            }, [t._v("\n        您确认取消寄售吗？\n    ")]), t._v(" "), i("div", {
                staticClass: "modal-content",
                attrs: {
                    slot: "content"
                },
                slot: "content"
            }, [i("button", {
                staticClass: "btn",
                on: {
                    click: t.doCancel
                }
            }, [t._v("\n            取消\n        ")]), t._v(" "), i("button", {
                staticClass: "btn btn-primary",
                on: {
                    click: t.doResellCancel
                }
            }, [t._v("\n            确认\n        ")])])])
        }
        ), [], !1, null, "ecd38350", null);
        e.a = r.exports
    },
    304: function(t, e, i) {
        "use strict";
        var a = {
            name: "ConfirmModal",
            components: {
                CommonModal: i(34).a
            },
            props: {
                title: {
                    type: String,
                    default: "请确认"
                },
                type: {
                    type: Number,
                    default: 1
                },
                action: {
                    type: Number,
                    default: 1
                },
                price: {
                    type: [String, Number],
                    default: "--"
                }
            },
            computed: {
                content() {
                    const {type: t, action: e, price: i} = this;
                    let a = 1 === t ? "藏品" : "盲盒"
                      , s = "您确认以￥%1寄售%2吗？";
                    return 1 === e && (s = "您确认支付￥%1购买该%2吗？"),
                    s.replace("%1", i).replace("%2", a)
                }
            },
            methods: {
                cancel() {
                    this.$parent.$emit("close")
                },
                confirm() {
                    this.$parent.$emit("close"),
                    this.$emit("confirm")
                }
            }
        }
          , s = (i(294),
        i(10))
          , n = Object(s.a)(a, (function() {
            var t = this
              , e = t.$createElement
              , i = t._self._c || e;
            return i("common-modal", [i("h3", {
                staticClass: "modal-title",
                attrs: {
                    slot: "title"
                },
                slot: "title"
            }), t._v(" "), i("div", {
                staticClass: "modal-content",
                attrs: {
                    slot: "content"
                },
                slot: "content"
            }, [i("div", {
                staticClass: "content"
            }, [t._v("\n            " + t._s(t.content) + "\n        ")]), t._v(" "), i("div", {
                staticClass: "button"
            }, [i("button", {
                staticClass: "btn-single",
                on: {
                    click: t.cancel
                }
            }, [t._v("\n                取消\n            ")]), t._v(" "), i("button", {
                on: {
                    click: t.confirm
                }
            }, [t._v("\n                确认\n            ")])])])])
        }
        ), [], !1, null, "b81729ae", null);
        e.a = n.exports
    },
    305: function(t, e, i) {
        "use strict";
        var a = i(28);
        const s = [{
            value: 22,
            title: "银行卡支付"
        }, {
            value: 23,
            title: "钱包支付",
            tip: "(更快更方便  管理费10元/月)",
            tipType: "error"
        }, {
            value: 0,
            title: "微信支付"
        }, {
            value: 2,
            title: "支付宝支付"
        }]
          , n = {
            0: [0],
            2: [2],
            3: [22],
            4: [23]
        };
        var o = {
            computed: {
                ...Object(a.e)(["appConfig", "payChannel", "userInfo"]),
                yeeWalletTip() {
                    return (this.appConfig || {}).yeeWalletTip
                },
                list() {
                    const {yeepayWalletProgress: t} = this.userInfo;
                    const e = (this.appConfig.payType || "0").split(",").map((t=>Number(t)))
                      , i = [];
                    e.forEach((e=>{
                        if (3 === e && 3 === t)
                            return;
                        const a = n[e];
                        i.push(...a || [])
                    }
                    ));
                    const a = [];
                    return s.forEach((t=>{
                        i.includes(t.value) && a.push(t)
                    }
                    )),
                    a
                }
            },
            mounted() {
                const {yeepayWalletProgress: t} = this.userInfo;
                3 !== t && this.$store.commit("SET_PAY_CHANNEL", 22)
            },
            methods: {
                change({value: t}) {
                    this.$store.commit("SET_PAY_CHANNEL", t)
                }
            }
        }
          , r = (i(295),
        i(10))
          , l = Object(r.a)(o, (function() {
            var t = this
              , e = t.$createElement
              , i = t._self._c || e;
            return i("div", {
                staticClass: "pay-channel-selector"
            }, [i("div", {
                staticClass: "title"
            }, [t._v("\n        支付方式\n    ")]), t._v(" "), i("div", {
                staticClass: "pay-list"
            }, t._l(t.list, (function(e) {
                return i("div", {
                    key: e.value,
                    class: "item " + (e.value === t.payChannel ? "active" : "") + " channel-" + e.value,
                    on: {
                        click: function(i) {
                            return t.change(e)
                        }
                    }
                }, [i("div", {
                    staticClass: "icon"
                }), t._v(" "), i("div", {
                    staticClass: "name"
                }, [i("div", {
                    staticClass: "main"
                }, [t._v("\n                    " + t._s(e.title) + "\n                ")]), t._v(" "), e.tip ? i("div", {
                    class: "tip type-" + e.tipType
                }, [t._v("\n                    " + t._s(23 === e.value && t.yeeWalletTip || e.tip) + "\n                ")]) : t._e()]), t._v(" "), i("div", {
                    staticClass: "check"
                })])
            }
            )), 0)])
        }
        ), [], !1, null, "1e3b06f4", null);
        e.a = l.exports
    },
    306: function(t, e, i) {
        "use strict";
        function a(t) {
            var e = window.getComputedStyle(t)
              , i = "none" === e.display
              , a = null === t.offsetParent && "fixed" !== e.position;
            return i || a
        }
        i.d(e, "a", (function() {
            return a
        }
        ))
    },
    307: function(t, e, i) {
        "use strict";
        var a = i(34)
          , s = i(23)
          , n = i(280)
          , o = i(353)
          , r = i(356)
          , l = i(7)
          , c = {
            name: "ProductListModal",
            components: {
                CommonModal: a.a,
                Checkbox: n.a,
                Tabs: o.a,
                NoData: r.a
            },
            props: {
                aId: {
                    type: [String, Number],
                    default: ""
                },
                sellLimit: {
                    type: [String, Number],
                    default: "--"
                },
                data: {
                    required: !1,
                    type: Object,
                    default: ()=>{}
                }
            },
            data: ()=>({
                list: [],
                totalCount: 0,
                totalPage: 0,
                page: 1,
                resetLoading: !1,
                noMore: !1,
                loading: !1,
                moreLoading: !1,
                pageSize: 100,
                onlySell: !1,
                order: 0,
                orderList: [{
                    value: 0,
                    label: "按编号排序"
                }, {
                    value: 1,
                    label: "按价格排序"
                }]
            }),
            async created() {
                // console.log("====dobuy create====",this.doBuy)
                this.aId && (this.data && (this.onlySell = this.data.onlySell || !1,
                this.order = this.data.order || 0),
                this.load = Object(l.d)((async()=>{
                    if (!this)
                        return;
                    this.loading = !0;
                    const {list: t} = this.$refs
                      , {page: e, pageSize: i, order: a, onlySell: n} = this
                      , o = {
                        albumId: this.aId,
                        page: e,
                        pageSize: i,
                        order: a,
                        onSale: n ? 1 : 0
                    }
                      , {success: r, data: l} = await s.g.getProductListByAlbumId(o);
                    this.loading = !1,
                    this.moreLoading = !1,
                    this.resetLoading && (t && (t.scrollTop = 0),
                    this.list = [],
                    this.resetLoading = !1),
                    r && (this.noMore = !l.hashNext,
                    l.list.length && this.list.push(...l.list),
                    this.page = l.currPage + 1)
                }
                ), 500),
                await this.load())
            },
            methods: {
                loadMore() {
                    this.moreLoading || (this.moreLoading = !0,
                    this.load())
                },
                change(t) {
                    this.$emit("close"),
                    this.$parent.$emit("change", t)
                },
                saleStatus(t) {
                    const {gStatus: e, isBuy: i, priceCny: a} = t;
                    return Object(l.g)(e, a, i)
                },
                reset() {
                    this.loading = !0,
                    this.resetLoading = !0,
                    this.page = 1
                }
            },
            watch: {
                aId(t) {
                    t && this.load && this.load()
                },
                order() {
                    this.reset(),
                    this.load && this.load()
                },
                onlySell() {
                    this.reset(),
                    this.load && this.load()
                }
            }
        }
          , d = (i(506),
        i(10))
          , u = Object(d.a)(c, (function() {
            var t = this
              , e = t.$createElement
              , i = t._self._c || e;
            return i("common-modal", [i("h3", {
                staticClass: "modal-title",
                attrs: {
                    slot: "title"
                },
                slot: "title"
            }, [t._v("\n        商品列表\n    ")]), t._v(" "), i("div", {
                staticClass: "modal-content",
                class: {
                    "more-loading": t.moreLoading
                },
                attrs: {
                    slot: "content"
                },
                slot: "content"
            }, [i("div", {
                staticClass: "filter"
            }, [i("div", {
                staticClass: "left"
            }, [i("checkbox", {
                model: {
                    value: t.onlySell,
                    callback: function(e) {
                        t.onlySell = e
                    },
                    expression: "onlySell"
                }
            }, [t._v("\n                    仅看寄售商品\n                ")])], 1), t._v(" "), i("div", {
                staticClass: "right"
            }, [i("tabs", {
                attrs: {
                    list: t.orderList
                },
                model: {
                    value: t.order,
                    callback: function(e) {
                        t.order = e
                    },
                    expression: "order"
                }
            })], 1), t._v(" "), t.loading ? i("div", {
                staticClass: "loading-mask"
            }) : t._e()]), t._v(" "), i("div", {
                ref: "list",
                staticClass: "list-container"
            }, [i("div", {
                staticClass: "list"
            }, t._l(t.list, (function(e) {
                return i("div", {
                    key: e.gId,
                    staticClass: "item",
                    on: {
                        click: function(i) {
                            return t.change(e)
                        }
                    }
                }, [i("div", {
                    staticClass: "detail"
                }, [i("div", {
                    staticClass: "index"
                }, [t._v("\n                            #" + t._s(e.gNum) + "/" + t._s(t.sellLimit) + "\n                            "), i("span", {
                    class: "status status-" + e.gStatus
                }, [t._v(t._s(t.saleStatus(e)))])]), t._v(" "), i("div", {
                    staticClass: "token-id"
                }, [t._v("\n                            TokenId:  " + t._s(t._f("defaultValue")(e.tokenId)) + "\n                        ")])]), t._v(" "), [t.OnSaleEnum.Withdrawing, t.OnSaleEnum.Withdrawal].includes(e.gStatus) ? t._e() : i("div", {
                    staticClass: "view-text"
                }, [i("div", {
                    staticClass: "index"
                }, [i("span", [t._v("￥" + t._s(e.priceCny || "--"))])]), t._v(" "), i("div", {
                    staticClass: "token-id"
                }, [t._v("\n                            售价\n                        ")])]), t._v(" "), i("div", {
                    staticClass: "arrow"
                })])
            }
            )), 0), t._v(" "), t.noMore ? t._e() : [t.list.length ? i("div", {
                staticClass: "load-more",
                class: {
                    "in-loading": t.moreLoading
                }
            }, [i("a", {
                on: {
                    click: t.loadMore
                }
            }, [i("span", {
                staticClass: "text"
            }, [t._v("\n                            展开更多\n                        ")]), t._v(" "), i("span", {
                staticClass: "icon"
            })])]) : t._e()], t._v(" "), t.loading || t.list.length ? t._e() : i("no-data")], 2), t._v(" "), t.loading ? i("div", {
                staticClass: "loading"
            }) : t._e()])])
        }
        ), [], !1, null, "7e99fe3a", null);
        e.a = u.exports
    },
    309: function(t, e, i) {},
    314: function(t, e, i) {
        "use strict";
        (function(t) {
            i.d(e, "b", (function() {
                return r
            }
            )),
            i.d(e, "a", (function() {
                return l
            }
            ));
            var a = i(8)
              , s = Date.now();
            var n = a.g ? t : window
              , o = n.requestAnimationFrame || function(t) {
                var e = Date.now()
                  , i = Math.max(0, 16 - (e - s))
                  , a = setTimeout(t, i);
                return s = e + i,
                a
            }
            ;
            n.cancelAnimationFrame || n.clearTimeout;
            function r(t) {
                return o.call(n, t)
            }
            function l(t) {
                r((function() {
                    r(t)
                }
                ))
            }
        }
        ).call(this, i(31))
    },
    315: function(t, e, i) {},
    316: function(t, e, i) {},
    317: function(t, e, i) {},
    318: function(t, e, i) {},
    319: function(t, e, i) {
        "use strict";
        i(282)
    },
    320: function(t, e, i) {
        "use strict";
        i(283)
    },
    321: function(t, e, i) {},
    322: function(t, e, i) {},
    323: function(t, e, i) {},
    324: function(t, e, i) {},
    325: function(t, e, i) {},
    326: function(t, e, i) {},
    327: function(t, e, i) {},
    328: function(t, e, i) {},
    329: function(t, e, i) {},
    353: function(t, e, i) {
        "use strict";
        var a = {
            name: "UIMobileTabs",
            model: {
                prop: "value",
                event: "change"
            },
            props: {
                value: {
                    type: Number,
                    default: null
                },
                list: {
                    type: Array,
                    default: ()=>[]
                }
            },
            data() {
                return {
                    active: this.value
                }
            },
            methods: {
                change(t) {
                    this.active = t
                }
            },
            watch: {
                active(t) {
                    this.$emit("change", t)
                }
            }
        }
          , s = (i(319),
        i(10))
          , n = Object(s.a)(a, (function() {
            var t = this
              , e = t.$createElement
              , i = t._self._c || e;
            return i("div", {
                staticClass: "tab-change"
            }, t._l(t.list, (function(e) {
                return i("div", {
                    key: e.value,
                    staticClass: "tab",
                    class: {
                        active: e.value === t.active
                    },
                    on: {
                        click: function(i) {
                            return t.change(e.value)
                        }
                    }
                }, [t._v("\n        " + t._s(e.label) + "\n    ")])
            }
            )), 0)
        }
        ), [], !1, null, "3c467362", null);
        e.a = n.exports
    },
    356: function(t, e, i) {
        "use strict";
        var a = {
            name: "NoData",
            props: {
                tip: {
                    type: String,
                    default: "暂无数据"
                }
            }
        }
          , s = (i(320),
        i(10))
          , n = Object(s.a)(a, (function() {
            var t = this
              , e = t.$createElement
              , i = t._self._c || e;
            return i("div", {
                staticClass: "no-data"
            }, [i("div", {
                staticClass: "icon"
            }), t._v(" "), i("div", {
                staticClass: "tip"
            }, [t._v("\n        " + t._s(t.tip) + "\n    ")])])
        }
        ), [], !1, null, "0003a219", null);
        e.a = n.exports
    },
    494: function(t, e, i) {
        "use strict";
        var a = i(4)
          , s = i.n(a)
          , n = i(16)
          , o = i.n(n)
          , r = i(17)
          , l = i.n(r)
          , c = i(68)
          , d = i.n(c)
          , u = i(69)
          , h = i.n(u)
          , v = i(43)
          , p = i.n(v)
          , f = i(49)
          , m = i.n(f)
          , _ = i(0)
          , g = i.n(_)
          , b = i(2)
          , y = i(496)
          , C = i(34)
          , w = i(277)
          , k = i(307)
          , x = i(302)
          , S = i(28)
          , I = i(5)
          , $ = {
            name: "TransactionMessageModal",
            components: {
                CommonModal: C.a,
                Lottie: x.a
            },
            props: {
                data: {
                    type: Object,
                    default: ()=>{}
                },
                showClose: {
                    type: Boolean,
                    default: !0
                },
                title: {
                    type: String,
                    default: ""
                },
                message: {
                    type: String,
                    default: ""
                },
                status: {
                    type: String,
                    default: "init"
                },
                albumId: {
                    type: [String, Number],
                    default: ""
                },
                sellLimit: {
                    type: [String, Number],
                    default: ""
                }
            },
            data: ()=>({
                defaultOptions: {
                    animationData: w
                }
            }),
            computed: {
                ...Object(S.e)(["isMobile"])
            },
            methods: {
                changeNum() {
                    this.isMobile ? this.showProductList() : this.$router.push(`/zh-cn/item/group/?id=${this.albumId}`)
                },
                showProductList() {
                    this.$modal.show(k.a, {
                        aId: this.albumId,
                        sellLimit: this.sellLimit
                    }, {
                        name: "ProductListModal",
                        height: "auto"
                    }, {
                        change: t=>{
                            const {gStatus: e} = t;
                            e === I.c.Selling || e === I.c.Timing || e === I.c.UnResell ? (t.gId = null,
                            t.onSale = e,
                            this.$toDetail(t),
                            this.$toDetail(t)) : (this.syncUrl(t),
                            this.hideModals(),
                            this.$root.$emit("product.detail.reload"))
                        }
                    })
                },
                syncUrl(t) {
                    const {albumId: e, gId: i} = t;
                    this.$route.query.gid = i,
                    history.replaceState(null, document.title, `/zh-cn/item/?id=${e}&gid=${i}`)
                },
                goOn() {
                    this.$parent.$emit("next")
                }
            }
        }
          , O = (i(507),
        i(10))
          , M = Object(O.a)($, (function() {
            var t = this
              , e = t.$createElement
              , i = t._self._c || e;
            return i("common-modal", {
                attrs: {
                    "show-close": t.showClose
                }
            }, [i("h3", {
                staticClass: "modal-title title-center",
                attrs: {
                    slot: "title"
                },
                slot: "title"
            }, [t._v("\n        " + t._s(t.title) + "\n    ")]), t._v(" "), ["success", "error", "eth-error"].includes(t.status) ? i("h3", {
                staticClass: "modal-title title-center mobile-title",
                attrs: {
                    slot: "title"
                },
                slot: "title"
            }, [t._v("\n        支付结果\n    ")]) : t._e(), t._v(" "), i("div", {
                staticClass: "modal-content",
                attrs: {
                    slot: "content"
                },
                slot: "content"
            }, [["init", "confirm"].includes(t.status) ? i("div", {
                staticClass: "status-icon"
            }, [i("lottie", {
                staticClass: "lottie",
                attrs: {
                    options: t.defaultOptions
                }
            })], 1) : i("div", {
                class: "status-icon status-" + t.status
            }), t._v(" "), i("div", {
                staticClass: "mobile-title"
            }, [t._v("\n            " + t._s(t.title) + "\n        ")]), t._v(" "), i("div", {
                staticClass: "status-text"
            }, [t._v("\n            " + t._s(t.message) + "\n        ")]), t._v(" "), "success" === t.status ? i("div", {
                staticClass: "action"
            }, [i("nuxt-link", {
                attrs: {
                    to: "/zh-cn/account/"
                }
            }, [i("button", {
                on: {
                    click: function(e) {
                        return t.$emit("close")
                    }
                }
            }, [t._v("\n                    我的\n                ")])])], 1) : t._e(), t._v(" "), ["eth-error", "status-error"].includes(t.status) ? i("div", {
                staticClass: "action"
            }, [i("button", {
                on: {
                    click: t.changeNum
                }
            }, [t._v("\n                购买其他编号\n            ")])]) : t._e(), t._v(" "), ["confirm"].includes(t.status) ? i("div", {
                staticClass: "action action-confirm"
            }, [i("button", {
                staticClass: "btn-next",
                on: {
                    click: t.goOn
                }
            }, [t._v("\n                继续购买\n            ")]), t._v(" "), i("button", {
                staticClass: "btn-select",
                on: {
                    click: t.changeNum
                }
            }, [t._v("\n                购买其他编号\n            ")])]) : t._e()])])
        }
        ), [], !1, null, "3dbe38e3", null).exports
          , L = i(23)
          , N = i(303)
          , E = {
            props: {
                disabled: {
                    type: Boolean,
                    default: !1
                },
                showPrice: {
                    type: Boolean,
                    default: !1
                },
                price: {
                    type: [Number, String],
                    default: ""
                },
                loading: {
                    type: Boolean,
                    default: !1
                }
            },
            computed: {
                ...Object(S.e)(["isMobile"])
            },
            methods: {
                onClick(t) {
                    this.$emit("click", t)
                }
            }
        }
          , T = (i(508),
        Object(O.a)(E, (function() {
            var t = this
              , e = t.$createElement
              , i = t._self._c || e;
            return i("button", {
                staticClass: "btn-buy",
                attrs: {
                    disabled: t.disabled || t.loading
                },
                on: {
                    click: t.onClick
                }
            }, [i("span", {
                staticClass: "text"
            }, [t._t("default")], 2), t._v(" "), i("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.showPrice,
                    expression: "showPrice"
                }],
                staticClass: "price"
            }, [t._v("\n        ￥" + t._s(t._f("defaultValue")(t.price)) + "\n    ")]), t._v(" "), i("span", {
                staticClass: "icon"
            })])
        }
        ), [], !1, null, "5cf45264", null).exports)
          , j = i(208)
          , P = i(209)
          , R = i(7)
          , A = i(221)
          , B = {
            components: {
                CommonModal: C.a
            },
            props: {
                albumId: {
                    type: [String, Number],
                    default: ""
                },
                goodsId: {
                    type: [String, Number],
                    default: ""
                },
                activities: {
                    type: Array,
                    default: ()=>[]
                }
            },
            data: ()=>({
                active: 0
            }),
            methods: {
                onClick(t) {
                    console.log('===onclick===')
                    t === this.active ? this.active = "" : this.active = t
                },
                next() {
                    console.log('===nest===')
                    const t = this.activities[this.active]
                      , {id: e} = t
                      , {albumId: i, goodsId: a} = this;
                    this.$router.push({
                        path: "/zh-cn/item/merge/",
                        query: {
                            id: e,
                            aid: i,
                            gid: a
                        }
                    })
                }
            }
        }
          , D = (i(509),
        Object(O.a)(B, (function() {
            var t = this
              , e = t.$createElement
              , i = t._self._c || e;
            return i("common-modal", [i("h3", {
                staticClass: "modal-title",
                attrs: {
                    slot: "title"
                },
                slot: "title"
            }, [t._v("\n        选择合成活动\n    ")]), t._v(" "), i("div", {
                staticClass: "modal-content merge-modal",
                attrs: {
                    slot: "content"
                },
                slot: "content"
            }, [i("div", {
                staticClass: "tip"
            }, [t._v("\n            请选择以下活动中的一个\n        ")]), t._v(" "), i("div", {
                staticClass: "list"
            }, t._l(t.activities, (function(e, a) {
                return i("div", {
                    key: e.id,
                    staticClass: "activity",
                    class: {
                        active: a === t.active
                    },
                    on: {
                        click: function(e) {
                            return t.onClick(a)
                        }
                    }
                }, [i("div", {
                    staticClass: "image"
                }, [i("img", {
                    attrs: {
                        src: t.baseUrl(e.activityPic),
                        alt: "活动封面"
                    }
                })]), t._v(" "), i("div", {
                    staticClass: "detail"
                }, [i("div", {
                    staticClass: "name"
                }, [t._v("\n                        " + t._s(e.activityName) + "\n                    ")]), t._v(" "), i("div", {
                    staticClass: "info"
                }, [t._v("\n                        " + t._s(e.activityInfo) + "\n                    ")])]), t._v(" "), i("div", {
                    staticClass: "checkbox"
                })])
            }
            )), 0), t._v(" "), i("div", {
                staticClass: "button"
            }, [i("button", {
                attrs: {
                    disabled: "" === t.active
                },
                on: {
                    click: t.next
                }
            }, [t._v("\n                下一步\n            ")])])])])
        }
        ), [], !1, null, "3f81e5b8", null).exports);
        function U(t) {
            var e = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (t) {
                    return !1
                }
            }();
            return function() {
                var i, a = p()(t);
                if (e) {
                    var s = p()(this).constructor;
                    i = Reflect.construct(a, arguments, s)
                } else
                    i = a.apply(this, arguments);
                return h()(this, i)
            }
        }
        var G = function(t, e, i, a) {
            var s, n = arguments.length, o = n < 3 ? e : null === a ? a = Object.getOwnPropertyDescriptor(e, i) : a;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : m()(Reflect)) && "function" == typeof Reflect.decorate)
                o = Reflect.decorate(t, e, i, a);
            else
                for (var r = t.length - 1; r >= 0; r--)
                    (s = t[r]) && (o = (n < 3 ? s(o) : n > 3 ? s(e, i, o) : s(e, i)) || o);
            return n > 3 && o && Object.defineProperty(e, i, o),
            o
        }
          , W = function(t) {
            d()(c, t);
            var e, i, a, n, r = U(c);
            function c() {
                var t;
                return o()(this, c),
                (t = r.apply(this, arguments)).now = Date.now(),
                t._timer = null,
                t._maskTimer = null,
                t.gasPrice = "",
                t.orderId = "",
                t.orderStr = {
                    timeStamp: "",
                    nonceStr: "",
                    packageValue: "",
                    signType: "",
                    paySign: ""
                },
                t.tokenHash = "",
                t.checking = !1,
                t.creating = !1,
                t.otherStatus = {},
                t
            }
            return l()(c, [{
                key: "mounted",
                value: function() {
                    setTimeout(() => {
                        console.log("====dobuy mouted====")
                        this.doBuy()
                    }, 2100);
                    var t = this;
                    setTimeout((function() {
                        t &&t.startTimer &&t.startTimer()
                    }
                    ), 500)
                }
            }, {
                key: "beforeDestroy",
                value: function() {
                    clearInterval(this._timer),
                    this._timer = null
                }
            }, {
                key: "canIResell",
                get: function() {
                    var t = this.data
                      , e = t.onSale
                      , i = t.resell;
                    return this.isOwner && e !== I.c.Resell && 1 === i
                }
            }, {
                key: "isResell",
                get: function() {
                    return 1 === this.data.resell
                }
            }, {
                key: "isOwner",
                get: function() {
                    var t = this.data.ownerId;
                    return this.isLogin && this.uid === t
                }
            }, {
                key: "isMBox",
                get: function() {
                    return 1 === this.data.gType
                }
            }, {
                key: "loading",
                get: function() {
                    var t = this.checking
                      , e = this.creating;
                    return t || e
                }
            }, {
                key: "countDownLabel",
                get: function() {
                    var t = this.now
                      , e = this.data.onSaleTime - t;
                    if (e < 1e3)
                        return "--";
                    var i = Math.floor(e / 1e3 / 60 / 60)
                      , a = Math.floor(e / 1e3 / 60 % 60)
                      , s = Math.floor(e / 1e3 % 60);
                    return "即将开售 (".concat(i, "h").concat(a, "m").concat(s, "s)")
                }
            }, {
                key: "onGidChanged",
                value: function(t, e) {
                    this.data.onSale === I.c.Timing && this.startTimer()
                }
            }, {
                key: "topClick",
                value: function() {
                    console.l("===topclicl===")
                    var t = this.data
                      , e = t.onSale
                      , i = t.resell
                      , a = t.lockUid
                      , s = this.isOwner;
                    e !== I.c.Resell || 1 === i ? this.uid !== a && [I.c.Obligation].includes(e) && !s && this.showLockModal() : this.toast("商品暂未开启寄售，请等待", "warning")
                }
            }, {
                key: "goMBox",
                value: function() {
                    var t = this.data.blindAlbumId;
                    this.$router.push("/zh-cn/mbox/item/?id=".concat(t))
                }
            }, {
                key: "goOrder",
                value: function() {
                    var t = this.data.orderId;
                    this.$router.push("/zh-cn/order/?orderid=".concat(t))
                }
            }, {
                key: "goResell",
                value: function() {
                    var t = this.data
                      , e = t.albumId
                      , i = t.gId;
                    0 !== t.resell ? this.$router.push("/zh-cn/resell/?type=0&id=".concat(e || "", "&gid=").concat(i)) : this.$toast("暂未开启寄售")
                }
            }, {
                key: "cancelResell",
                value: function() {
                    var t, e = this, i = this.data, a = i.albumId, n = i.gId, o = i.origin;
                    this.$modal.show(N.a, {
                        gId: n,
                        origin: o
                    }, {
                        name: "ResellCancelConfirmModal",
                        height: "auto",
                        width: "400px",
                        clickToClose: !1
                    }, {
                        success: (t = s()(g.a.mark((function t() {
                            return g.a.wrap((function(t) {
                                for (; ; )
                                    switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2,
                                        e.$router.push("/zh-cn/result/?type=4&cb1=".concat(encodeURIComponent("/zh-cn/account"), "&cb2=").concat(encodeURIComponent("/zh-cn/item/?id=".concat(a, "&gid=").concat(n))));
                                    case 2:
                                    case "end":
                                        return t.stop()
                                    }
                            }
                            ), t)
                        }
                        ))),
                        function() {
                            return t.apply(this, arguments)
                        }
                        )
                    })
                }
            }, {
                key: "doBuy",
                value: (n = s()(g.a.mark((function t() {
                    console.log("===doBuy===")
                    return g.a.wrap((function(t) {
                    for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                this.showOrderModal();
                            case 1:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t, this)
                }
                ))),
                function() {
                    return n.apply(this, arguments)
                }
                )
            }, {
                key: "creatorOrder",
                value: (a = s()(g.a.mark((function t() {
                    var e, i, a, s, n, o, r, l, c, d, u, h, v, p, f;
                    return g.a.wrap((function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                if (this.payChannel !== I.e.Alipay || !Object(R.k)()) {
                                    t.next = 6;
                                    break
                                }
                                return this.hideModals(),
                                this.$root.$emit(A.a.ShowMask, !0),
                                t.abrupt("return");
                            case 6:
                                if (this.payChannel !== I.e.WX || Object(R.k)()) {
                                    t.next = 9;
                                    break
                                }
                                return this.$toast("微信支付仅支持在微信内打开~"),
                                t.abrupt("return");
                            case 9:
                                if (this.creating = !0,
                                e = this.data,
                                i = e.onSale,
                                a = e.gNum,
                                s = e.albumId,
                                n = e.gId,
                                o = e.gType,
                                r = e.rule,
                                l = e.priceCny,
                                c = {},
                                i !== I.c.Resell) {
                                    t.next = 19;
                                    break
                                }
                                return d = o || 0,
                                t.next = 16,
                                L.k.createResellOrder({
                                    albumId: s,
                                    gId: n,
                                    payChannel: this.payChannel,
                                    type: d,
                                    gNum: 0 === d ? Number(a) : null,
                                    subType: 1 === o ? r && r.indexOf("1") ? 1 : 0 : null,
                                    price: l
                                });
                            case 16:
                                c = t.sent,
                                t.next = 22;
                                break;
                            case 19:
                                return t.next = 21,
                                L.g.createOrder({
                                    albumId: s,
                                    gId: n,
                                    payChannel: this.payChannel,
                                    gNum: Number(a),
                                    price: l
                                });
                            case 21:
                                c = t.sent;
                            case 22:
                                if (h = (u = c).success,
                                v = u.message,
                                p = u.data,
                                f = u.code,
                                h) {
                                    t.next = 28;
                                    break
                                }
                                return this.toast(v, "error"),
                                this.creating = !1,
                                13038 === f && this.$root.$emit("product.detail.reload"),
                                t.abrupt("return");
                            case 28:
                                return this.orderId = p.orderId,
                                this.orderStr = p.orderStr,
                                this.creating = !1,
                                t.next = 33,
                                this.tryPay();
                            case 33:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t, this)
                }
                ))),
                function() {
                    return a.apply(this, arguments)
                }
                )
            }, {
                key: "tryPay",
                value: (i = s()(g.a.mark((function t() {
                    var e, i = this;
                    return g.a.wrap((function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                e = this.data.onSale,
                                this.$pay({
                                    payChannel: e === I.c.Resell ? I.e.YeePay : this.payChannel,
                                    orderId: this.orderId,
                                    orderStr: this.orderStr
                                }, (function(t) {
                                    if (t)
                                        i.$router.push("/zh-cn/order/?orderid=".concat(i.orderId));
                                    else {
                                        var e = i.data
                                          , a = e.onSale
                                          , s = e.albumId
                                          , n = e.gId;
                                        a === I.c.Selling && L.g.orderCallback(i.orderId),
                                        i.$router.push("/zh-cn/result/?type=1&cb2=".concat(encodeURIComponent(a === I.c.Resell ? "/zh-cn/market" : "/zh-cn/find"), "&cb1=").concat(encodeURIComponent("/zh-cn/item/?id=".concat(s, "&gid=").concat(n))))
                                    }
                                    i.$nuxt.$emit("modal.close"),
                                    i.checking = !1
                                }
                                ));
                            case 2:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t, this)
                }
                ))),
                function() {
                    return i.apply(this, arguments)
                }
                )
            }, {
                key: "loadUserInfo",
                value: (e = s()(g.a.mark((function t() {
                    var e, i, a;
                    return g.a.wrap((function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2,
                                L.g.getPersonalInfo(this.uid);
                            case 2:
                                e = t.sent,
                                i = e.success,
                                a = e.data,
                                i && (this.data.user = a || {});
                            case 6:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t, this)
                }
                ))),
                function() {
                    return e.apply(this, arguments)
                }
                )
            }, {
                key: "startTimer",
                value: function() {
                    var t = this
                      , e = this.data
                      , i = e.onSale
                      , a = e.onSaleTime;
                    i === I.c.Timing && (this._timer || (this._timer = setInterval((function() {
                        t.now = (new Date).getTime(),
                        a - t.now < 1e3 && (clearInterval(t._timer),
                        t.data.onSale = I.c.Selling)
                    }
                    ), 1e3)))
                }
            }, {
                key: "showLockModal",
                value: function() {
                    this.$nuxt.$emit("modal.close");
                    var t = this.data
                      , e = t.albumId
                      , i = t.sellLimit;
                    this.$modal.show(M, {
                        showClose: !0,
                        message: "该商品已被锁定，您可查看其它编号购买。",
                        status: "status-error",
                        albumId: e,
                        sellLimit: i
                    }, {
                        name: "TransactionStatusErrorModal",
                        height: "auto",
                        width: "400px"
                    })
                }
            }, {
                key: "showOrderModal",
                value: function() {
                    console.log("===showOrder 这里是点击购买后触发的===",this.isLogin,this.data)
                    var t = this;
                    this.isLogin && this.$modal.show(y.a, {
                        data: this.data
                    }, {
                        name: "OrderModal",
                        height: "auto",
                        width: "500px"
                    }, {
                        check: function() {
                            t.creatorOrder()
                        }
                    })
                }
            }, {
                key: "merge",
                value: function() {
                    var t = this.data
                      , e = t.albumId
                      , i = t.gId
                      , a = t.syntheticActivities;
                    this.$modal.show(D, {
                        albumId: e,
                        goodsId: i,
                        activities: a || []
                    }, {
                        name: "MergeActivityModal",
                        height: "auto",
                        width: "400px",
                        clickToClose: !1
                    })
                }
            }]),
            c
        }(b.default);
        G([Object(j.d)({
            required: !0,
            type: Object,
            default: function() {
                return {}
            }
        })], W.prototype, "data", void 0),
        G([P.a], W.prototype, "isMobile", void 0),
        G([P.a], W.prototype, "isLogin", void 0),
        G([P.a], W.prototype, "uid", void 0),
        G([P.a], W.prototype, "payChannel", void 0),
        G([Object(j.f)("data.gId")], W.prototype, "onGidChanged", null);
        var H = W = G([Object(j.a)({
            components: {
                ButtonView: T
            }
        })], W)
          , z = (i(510),
        Object(O.a)(H, (function() {
            var t = this
              , e = t.$createElement
              , i = t._self._c || e;
            return i("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.data.onSale,
                    expression: "data.onSale"
                }],
                staticClass: "nft-buy-button",
                style: {
                    "pointer-events": t.isMobile ? "auto" : "none"
                },
                on: {
                    click: t.topClick
                }
            }, [t.data.onSale === t.OnSaleEnum.SoldOut ? [t.isOwner ? [1 === t.data.synthesis ? i("button-view", {
                attrs: {
                    "show-price": !1
                },
                on: {
                    click: t.merge
                }
            }, [t._v("\n                合成\n            ")]) : t._e(), t._v(" "), i("button-view", {
                attrs: {
                    "show-price": !1
                },
                on: {
                    click: t.goResell
                }
            }, [t._v("\n                立即寄售\n            ")])] : i("button-view", {
                attrs: {
                    disabled: !0,
                    "show-price": !0,
                    price: t.data.priceCny
                }
            }, [t._v("\n            已售出\n        ")])] : t._e(), t._v(" "), t.data.onSale === t.OnSaleEnum.Lock ? [t.isOwner ? i("button-view", {
                attrs: {
                    disabled: !0
                }
            }, [t._v("\n            商品转入中\n        ")]) : i("button-view", {
                attrs: {
                    disabled: !0
                }
            }, [t._v("\n            已售出\n        ")])] : t._e(), t._v(" "), t.data.onSale === t.OnSaleEnum.Obligation ? [t.uid === t.data.lockUid ? i("button-view", {
                on: {
                    click: t.goOrder
                }
            }, [t._v("\n            立即支付\n        ")]) : i("button-view", {
                attrs: {
                    disabled: !0
                }
            }, [t._v("\n            商品锁定中，待支付\n        ")])] : t._e(), t._v(" "), t.data.onSale === t.OnSaleEnum.Selling ? [t.data.isBuy ? i("button-view", {
                attrs: {
                    "show-price": !0,
                    price: t.data.priceCny,
                    loading: t.loading
                },
                on: {
                    click: t.doBuy
                }
            }, [t._v("\n            立即购买\n        ")]) : i("button-view", {
                attrs: {
                    "show-price": !1
                },
                on: {
                    click: t.goMBox
                }
            }, [t._v("\n            开盲盒抽取藏品\n        ")])] : t._e(), t._v(" "), t.data.onSale === t.OnSaleEnum.Timing ? [i("button-view", {
                attrs: {
                    disabled: !0,
                    "show-price": !0,
                    price: t.data.priceCny
                }
            }, [t._v("\n            " + t._s(t.countDownLabel) + "\n        ")])] : t._e(), t._v(" "), t.data.onSale === t.OnSaleEnum.Resell ? [t.isOwner ? i("button-view", {
                attrs: {
                    "show-price": !0,
                    price: t.data.priceCny
                },
                on: {
                    click: t.cancelResell
                }
            }, [t._v("\n            取消寄售\n        ")]) : i("button-view", {
                attrs: {
                    "show-price": !0,
                    price: t.data.priceCny,
                    loading: t.loading
                },
                on: {
                    click: t.doBuy
                }
            }, [t._v("\n            494立即99999购买\n        ")])] : t._e(), t._v(" "), [t.OnSaleEnum.Withdrawal, t.OnSaleEnum.Withdrawing].includes(t.data.onSale) ? [i("button-view", {
                attrs: {
                    disabled: !0,
                    "show-price": !1
                }
            }, [t._v("\n            " + t._s(t.data.onSale === t.OnSaleEnum.Withdrawing ? "提出平台中" : "已提出平台") + "\n        ")])] : t._e(), t._v(" "), t.data.onSale === t.OnSaleEnum.NoSell ? [t.isOwner ? [1 === t.data.synthesis ? i("button-view", {
                attrs: {
                    "show-price": !1
                },
                on: {
                    click: t.merge
                }
            }, [t._v("\n                合成\n            ")]) : t._e(), t._v(" "), i("button-view", {
                attrs: {
                    "show-price": !1
                },
                on: {
                    click: t.goResell
                }
            }, [t._v("\n                立即寄售\n            ")])] : i("button-view", {
                attrs: {
                    disabled: !0,
                    "show-price": !1
                }
            }, [t._v("\n            尚未寄售\n        ")])] : t._e(), t._v(" "), t.data.onSale === t.OnSaleEnum.UPChaining ? [i("button-view", {
                attrs: {
                    "show-price": !1,
                    disabled: !0
                }
            }, [t._v("\n            寄售中...\n        ")])] : t._e(), t._v(" "), t.data.onSale === t.OnSaleEnum.CancelChaining ? [i("button-view", {
                attrs: {
                    "show-price": !1,
                    disabled: !0
                }
            }, [t._v("\n            取消寄售中...\n        ")])] : t._e(), t._v(" "), t.data.onSale === t.OnSaleEnum.MergeSourceLocked ? [i("button-view", {
                staticClass: "btn-merge btn-merge-source-lock",
                attrs: {
                    "show-price": !1
                }
            }, [i("div", {
                staticClass: "btn-text"
            }, [i("div", {
                staticClass: "btn-icon"
            }), t._v(" "), i("div", [t._v("\n                    合成锁定中\n                ")])])])] : t._e(), t._v(" "), t.data.onSale === t.OnSaleEnum.MergeTargetLocked ? [i("button-view", {
                staticClass: "btn-merge btn-merge-target-lock",
                attrs: {
                    "show-price": !1
                }
            }, [i("div", {
                staticClass: "btn-text"
            }, [i("div", {
                staticClass: "btn-icon"
            }), t._v(" "), i("div", [t._v("\n                    合成中\n                ")])])])] : t._e(), t._v(" "), t.data.onSale === t.OnSaleEnum.Destroyed ? [i("button-view", {
                attrs: {
                    "show-price": !1,
                    disabled: !0
                }
            }, [t._v("\n            已销毁\n        ")])] : t._e(), t._v(" "), t.data.onSale === t.OnSaleEnum.UnCreated ? [i("button-view", {
                attrs: {
                    "show-price": !1,
                    disabled: !0
                }
            }, [t._v("\n            待合成\n        ")])] : t._e(), t._v(" "), t.data.onSale === t.OnSaleEnum.WaitDrop ? [i("button-view", {
                attrs: {
                    "show-price": !1,
                    disabled: !0
                }
            }, [t._v("\n            待空投\n        ")])] : t._e()], 2)
        }
        ), [], !1, null, "4f661d6c", null));
        e.a = z.exports
    },
    495: function(t, e, i) {
        "use strict";
        var a = {
            name: "NumBox",
            props: {
                data: {
                    type: Object,
                    default: ()=>({})
                }
            }
        }
          , s = (i(511),
        i(10))
          , n = Object(s.a)(a, (function() {
            var t = this
              , e = t.$createElement
              , i = t._self._c || e;
            return i("div", {
                staticClass: "dc-num"
            }, [i("div", {
                staticClass: "dcn-container"
            }, [i("span", {
                staticClass: "dcn-title"
            }, [t._v("发行")]), t._v(" "), i("span", [t._v(t._s(t.data.issueNum || t.data.sellLimit || 0) + "份")])]), t._v(" "), i("div", {
                staticClass: "dcn-container"
            }, [i("span", {
                staticClass: "dcn-title"
            }, [t._v("流通")]), t._v(" "), i("span", [t._v(t._s(t.data.soldNum || 0) + "份")])])])
        }
        ), [], !1, null, null, null);
        e.a = n.exports
    },
    496: function(t, e, i) {
        "use strict";
        var a = i(28)
          , s = i(34)
          , n = i(288)
          , o = i(256)
          , r = i(5)
          , l = i(304)
          , c = i(305)
          , d = (i(502),
        {
            name: "OrderInfoModal",
            components: {
                CommonModal: s.a,
                WalletAddress: n.a,
                ImageObject: o.default,
                ElAlert: i(503).default,
                PayChannelSelector: c.a
            },
            props: {
                data: {
                    type: Object,
                    default: ()=>({})
                }
            },
            data: ()=>({
                checked: !0
            }),
            created() {
                setTimeout(() => {
                    console.log("====启动自动购买====")
                    this.check()
                }, 1000);
                this.$store.dispatch("getUserInfo")
            },
            computed: {
                ...Object(a.e)(["userInfo", "payChannel", "appConfig"]),
                ...Object(a.e)("ethereum", ["chain"]),
                payChannelClass() {
                    return r.f[this.payChannel].class
                },
                payChannelTip() {
                    return `使用${r.f[this.payChannel].name}支付，`
                },
                isResell() {
                    return this.data.onSale === r.c.Resell
                },
                limitTip() {
                    return "全球限量发售 <b>%s</b> 份".replace("%s", this.data.sellLimit)
                },
                serviceHref() {
                    return `我已同意iBox的 <a target="_blank" href="${(this.appConfig || {}).serviceNoticeUrl}" style="color: #141519">《服务协议》</a>`.replace("%s", this.data.sellLimit)
                }
            },
            methods: {
                check() {
                    console.log("====check 购买阻断弹窗 确认是否===")
                    this.$parent.$emit("check")
                    // return;
                    this.payChannel !== r.e.YeeWallet || 3 === (this.userInfo || {}).yeepayWalletProgress ? this.isResell ? this.$modal.show(l.a, {
                        type: 1,
                        action: 1,
                        price: this.data.price || "--"
                    }, {
                        name: "MarketConfirmModal",
                        height: "auto",
                        clickToClose: !1,
                        showClose: !1,
                        position: "center",
                        width: "80%",
                        mask: !0
                    }, {
                        confirm: ()=>{
                            this.$parent.$emit("check")
                        }
                    }) : this.$parent.$emit("check") : this.openWallet()
                },
                changeStatus() {
                    this.checked = !this.checked
                },
                onSuccess() {
                    this.toast("复制成功", "success")
                },
                onError() {
                    this.toast("复制失败", "error")
                }
            }
        })
          , u = (i(504),
        i(505),
        i(10))
          , h = Object(u.a)(d, (function() {
            var t = this
              , e = t.$createElement
              , i = t._self._c || e;
            return i("common-modal", {
                attrs: {
                    "prevent-touch-move": !0
                }
            }, [i("h3", {
                staticClass: "modal-title",
                attrs: {
                    slot: "title"
                },
                slot: "title"
            }, [t._v("\n        订单信息\n    ")]), t._v(" "), i("div", {
                staticClass: "modal-content",
                attrs: {
                    slot: "content"
                },
                slot: "content"
            }, [i("div", {
                staticClass: "storage-account"
            }, [i("h4", [t._v("存储账户")]), t._v(" "), i("wallet-address", {
                attrs: {
                    address: t.userInfo.walletAddress,
                    copyable: !0
                }
            })], 1), t._v(" "), i("p", [t._v("\n            该钱包账户由平台代理创建，帮助您储存虚拟作品、完成链上寄售。未经您的允许，平台不会干预该账户的任何信息。\n        ")]), t._v(" "), i("div", {
                staticClass: "order-info"
            }, [i("div", {
                staticClass: "preview"
            }, [i("image-object", {
                attrs: {
                    src: t.baseUrl(t.data.thumbPic2),
                    alt: "`产品封面`"
                }
            })], 1), t._v(" "), i("div", {
                staticClass: "detail"
            }, [i("div", {
                staticClass: "name"
            }, [t._v("\n                    " + t._s(t.data.gName || t.data.albumName) + "\n                    "), i("i", {
                staticClass: "v-flag"
            })]), t._v(" "), i("div", {
                staticClass: "limit"
            }, [!t.data.origin && t.data.gNum ? [i("b", [t._v("\n                            #" + t._s(t.data.gNum) + "/\n                        ")]), t._v(" "), i("div", {
                staticClass: "num-limit"
            }, [t._v("\n                            " + t._s(t.data.sellLimit) + "\n                        ")]), t._v(" "), i("span", {
                staticClass: "limit-tip-mobile",
                domProps: {
                    innerHTML: t._s(t.limitTip)
                }
            })] : t.data.origin || t.data.gNum ? [i("b", [t._v("链上标识：")]), t._v(t._s(t.data.tokenId) + "\n                    ")] : [i("span", {
                staticClass: "limit-tip-mobile"
            }, [t._v("\n                            编号随机\n                        ")])]], 2), t._v(" "), i("div", {
                staticClass: "space"
            }), t._v(" "), i("div", {
                staticClass: "limit-tip",
                domProps: {
                    innerHTML: t._s(t.limitTip)
                }
            }), t._v(" "), i("div", {
                staticClass: "price-value-mobile"
            }, [i("span", [t._v("\n                        ￥" + t._s(t._f("defaultValue")(t.data.onSale === t.OnSaleEnum.Resell ? t.data.price : t.data.priceCny)) + "\n                    ")])])])]), t._v(" "), i("div", {
                staticClass: "price-items"
            }, [i("div", {
                staticClass: "label"
            }, [t._v("\n                总价\n            ")]), t._v(" "), i("div", {
                staticClass: "value"
            }, [t._v("\n                " + t._s(t._f("defaultValue")(t.data.price)) + " " + t._s((t.data.priceUnit || "").toUpperCase()) + "\n                "), i("span", [t._v("起")])])]), t._v(" "), i("pay-channel-selector"), t._v(" "), i("el-alert", {
                staticClass: "alert-tip",
                attrs: {
                    title: "注意：您1小时之内只能取消3次订单，超出次数将限购1小时。",
                    type: "error",
                    effect: "dark",
                    closable: !1
                }
            }), t._v(" "), i("div", {
                staticClass: "check-status",
                class: {
                    checked: t.checked
                },
                on: {
                    click: t.changeStatus
                }
            }, [i("div", {
                staticClass: "check"
            }), t._v(" "), i("div", {
                staticClass: "checkbox-text"
            }, [i("span", {
                staticClass: "mobile-service",
                domProps: {
                    innerHTML: t._s(t.serviceHref)
                }
            }), t._v(" "), i("a", {
                staticClass: "service",
                attrs: {
                    target: "_blank",
                    rel: "noopener noreferrer",
                    href: (t.appConfig || {}).serviceNoticeUrl
                }
            }, [t._v("\n                    我已同意iBox的《服务协议》\n                ")])])])], 1), t._v(" "), i("div", {
                staticClass: "modal-footer",
                attrs: {
                    slot: "footer"
                },
                slot: "footer"
            }, [i("button", {
                attrs: {
                    disabled: !t.checked
                },
                on: {
                    click: t.check
                }
            }, [t._v("\n            立即666购买\n        ")])])])
        }
        ), [], !1, null, "4e627962", null);
        e.a = h.exports
    },
    498: function(t, e, i) {},
    499: function(t, e, i) {},
    500: function(t, e, i) {
        "use strict";
        i(315)
    },
    501: function(t, e, i) {
        "use strict";
        i(316)
    },
    502: function(t, e, i) {},
    503: function(t, e, i) {
        t.exports = function(t) {
            var e = {};
            function i(a) {
                if (e[a])
                    return e[a].exports;
                var s = e[a] = {
                    i: a,
                    l: !1,
                    exports: {}
                };
                return t[a].call(s.exports, s, s.exports, i),
                s.l = !0,
                s.exports
            }
            return i.m = t,
            i.c = e,
            i.d = function(t, e, a) {
                i.o(t, e) || Object.defineProperty(t, e, {
                    enumerable: !0,
                    get: a
                })
            }
            ,
            i.r = function(t) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                    value: "Module"
                }),
                Object.defineProperty(t, "__esModule", {
                    value: !0
                })
            }
            ,
            i.t = function(t, e) {
                if (1 & e && (t = i(t)),
                8 & e)
                    return t;
                if (4 & e && "object" == typeof t && t && t.__esModule)
                    return t;
                var a = Object.create(null);
                if (i.r(a),
                Object.defineProperty(a, "default", {
                    enumerable: !0,
                    value: t
                }),
                2 & e && "string" != typeof t)
                    for (var s in t)
                        i.d(a, s, function(e) {
                            return t[e]
                        }
                        .bind(null, s));
                return a
            }
            ,
            i.n = function(t) {
                var e = t && t.__esModule ? function() {
                    return t.default
                }
                : function() {
                    return t
                }
                ;
                return i.d(e, "a", e),
                e
            }
            ,
            i.o = function(t, e) {
                return Object.prototype.hasOwnProperty.call(t, e)
            }
            ,
            i.p = "/dist/",
            i(i.s = 101)
        }({
            0: function(t, e, i) {
                "use strict";
                function a(t, e, i, a, s, n, o, r) {
                    var l, c = "function" == typeof t ? t.options : t;
                    if (e && (c.render = e,
                    c.staticRenderFns = i,
                    c._compiled = !0),
                    a && (c.functional = !0),
                    n && (c._scopeId = "data-v-" + n),
                    o ? (l = function(t) {
                        (t = t || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (t = __VUE_SSR_CONTEXT__),
                        s && s.call(this, t),
                        t && t._registeredComponents && t._registeredComponents.add(o)
                    }
                    ,
                    c._ssrRegister = l) : s && (l = r ? function() {
                        s.call(this, this.$root.$options.shadowRoot)
                    }
                    : s),
                    l)
                        if (c.functional) {
                            c._injectStyles = l;
                            var d = c.render;
                            c.render = function(t, e) {
                                return l.call(e),
                                d(t, e)
                            }
                        } else {
                            var u = c.beforeCreate;
                            c.beforeCreate = u ? [].concat(u, l) : [l]
                        }
                    return {
                        exports: t,
                        options: c
                    }
                }
                i.d(e, "a", (function() {
                    return a
                }
                ))
            },
            101: function(t, e, i) {
                "use strict";
                i.r(e);
                var a = function() {
                    var t = this
                      , e = t.$createElement
                      , i = t._self._c || e;
                    return i("transition", {
                        attrs: {
                            name: "el-alert-fade"
                        }
                    }, [i("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.visible,
                            expression: "visible"
                        }],
                        staticClass: "el-alert",
                        class: [t.typeClass, t.center ? "is-center" : "", "is-" + t.effect],
                        attrs: {
                            role: "alert"
                        }
                    }, [t.showIcon ? i("i", {
                        staticClass: "el-alert__icon",
                        class: [t.iconClass, t.isBigIcon]
                    }) : t._e(), i("div", {
                        staticClass: "el-alert__content"
                    }, [t.title || t.$slots.title ? i("span", {
                        staticClass: "el-alert__title",
                        class: [t.isBoldTitle]
                    }, [t._t("title", [t._v(t._s(t.title))])], 2) : t._e(), t.$slots.default && !t.description ? i("p", {
                        staticClass: "el-alert__description"
                    }, [t._t("default")], 2) : t._e(), t.description && !t.$slots.default ? i("p", {
                        staticClass: "el-alert__description"
                    }, [t._v(t._s(t.description))]) : t._e(), i("i", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.closable,
                            expression: "closable"
                        }],
                        staticClass: "el-alert__closebtn",
                        class: {
                            "is-customed": "" !== t.closeText,
                            "el-icon-close": "" === t.closeText
                        },
                        on: {
                            click: function(e) {
                                t.close()
                            }
                        }
                    }, [t._v(t._s(t.closeText))])])])])
                };
                a._withStripped = !0;
                var s = {
                    success: "el-icon-success",
                    warning: "el-icon-warning",
                    error: "el-icon-error"
                }
                  , n = {
                    name: "ElAlert",
                    props: {
                        title: {
                            type: String,
                            default: ""
                        },
                        description: {
                            type: String,
                            default: ""
                        },
                        type: {
                            type: String,
                            default: "info"
                        },
                        closable: {
                            type: Boolean,
                            default: !0
                        },
                        closeText: {
                            type: String,
                            default: ""
                        },
                        showIcon: Boolean,
                        center: Boolean,
                        effect: {
                            type: String,
                            default: "light",
                            validator: function(t) {
                                return -1 !== ["light", "dark"].indexOf(t)
                            }
                        }
                    },
                    data: function() {
                        return {
                            visible: !0
                        }
                    },
                    methods: {
                        close: function() {
                            this.visible = !1,
                            this.$emit("close")
                        }
                    },
                    computed: {
                        typeClass: function() {
                            return "el-alert--" + this.type
                        },
                        iconClass: function() {
                            return s[this.type] || "el-icon-info"
                        },
                        isBigIcon: function() {
                            return this.description || this.$slots.default ? "is-big" : ""
                        },
                        isBoldTitle: function() {
                            return this.description || this.$slots.default ? "is-bold" : ""
                        }
                    }
                }
                  , o = i(0)
                  , r = Object(o.a)(n, a, [], !1, null, null, null);
                r.options.__file = "packages/alert/src/main.vue";
                var l = r.exports;
                l.install = function(t) {
                    t.component(l.name, l)
                }
                ;
                e.default = l
            }
        })
    },
    504: function(t, e, i) {
        "use strict";
        i(317)
    },
    505: function(t, e, i) {
        "use strict";
        i(318)
    },
    506: function(t, e, i) {
        "use strict";
        i(321)
    },
    507: function(t, e, i) {
        "use strict";
        i(322)
    },
    508: function(t, e, i) {
        "use strict";
        i(323)
    },
    509: function(t, e, i) {
        "use strict";
        i(324)
    },
    510: function(t, e, i) {
        "use strict";
        i(325)
    },
    511: function(t, e, i) {
        "use strict";
        i(326)
    },
    512: function(t, e, i) {
        "use strict";
        i(327)
    },
    513: function(t, e, i) {
        "use strict";
        i(328)
    },
    514: function(t, e, i) {
        "use strict";
        i(329)
    },
    533: function(t, e, i) {
        "use strict";
        var a = i(236)
          , s = i(308)
          , n = i.n(s)
          , o = (i(309),
        i(20))
          , r = i(42)
          , l = i(262)
          , c = Object(r.a)("swipe-item")
          , d = c[0]
          , u = c[1]
          , h = d({
            mixins: [Object(l.a)("vanSwipe")],
            data: function() {
                return {
                    offset: 0,
                    inited: !1,
                    mounted: !1
                }
            },
            mounted: function() {
                var t = this;
                this.$nextTick((function() {
                    t.mounted = !0
                }
                ))
            },
            computed: {
                style: function() {
                    var t = {}
                      , e = this.parent
                      , i = e.size
                      , a = e.vertical;
                    return i && (t[a ? "height" : "width"] = i + "px"),
                    this.offset && (t.transform = "translate" + (a ? "Y" : "X") + "(" + this.offset + "px)"),
                    t
                },
                shouldRender: function() {
                    var t = this.index
                      , e = this.inited
                      , i = this.parent
                      , a = this.mounted;
                    if (!i.lazyRender || e)
                        return !0;
                    if (!a)
                        return !1;
                    var s = i.activeIndicator
                      , n = i.count - 1
                      , o = 0 === s && i.loop ? n : s - 1
                      , r = s === n && i.loop ? 0 : s + 1
                      , l = t === s || t === o || t === r;
                    return l && (this.inited = !0),
                    l
                }
            },
            render: function() {
                var t = arguments[0];
                return t("div", {
                    class: u(),
                    style: this.style,
                    on: Object(o.a)({}, this.$listeners)
                }, [this.shouldRender && this.slots()])
            }
        })
          , v = i(306)
          , p = i(11)
          , f = i(314)
          , m = i(310)
          , _ = i(74)
          , g = i(73)
          , b = Object(r.a)("swipe")
          , y = b[0]
          , C = b[1]
          , w = y({
            mixins: [_.a, Object(l.b)("vanSwipe"), Object(g.a)((function(t, e) {
                t(window, "resize", this.resize, !0),
                t(window, "orientationchange", this.resize, !0),
                t(window, "visibilitychange", this.onVisibilityChange),
                e ? this.initialize() : this.clear()
            }
            ))],
            props: {
                width: [Number, String],
                height: [Number, String],
                autoplay: [Number, String],
                vertical: Boolean,
                lazyRender: Boolean,
                indicatorColor: String,
                loop: {
                    type: Boolean,
                    default: !0
                },
                duration: {
                    type: [Number, String],
                    default: 500
                },
                touchable: {
                    type: Boolean,
                    default: !0
                },
                initialSwipe: {
                    type: [Number, String],
                    default: 0
                },
                showIndicators: {
                    type: Boolean,
                    default: !0
                },
                stopPropagation: {
                    type: Boolean,
                    default: !0
                }
            },
            data: function() {
                return {
                    rect: null,
                    offset: 0,
                    active: 0,
                    deltaX: 0,
                    deltaY: 0,
                    swiping: !1,
                    computedWidth: 0,
                    computedHeight: 0
                }
            },
            watch: {
                children: function() {
                    this.initialize()
                },
                initialSwipe: function() {
                    this.initialize()
                },
                autoplay: function(t) {
                    t > 0 ? this.autoPlay() : this.clear()
                }
            },
            computed: {
                count: function() {
                    return this.children.length
                },
                maxCount: function() {
                    return Math.ceil(Math.abs(this.minOffset) / this.size)
                },
                delta: function() {
                    return this.vertical ? this.deltaY : this.deltaX
                },
                size: function() {
                    return this[this.vertical ? "computedHeight" : "computedWidth"]
                },
                trackSize: function() {
                    return this.count * this.size
                },
                activeIndicator: function() {
                    return (this.active + this.count) % this.count
                },
                isCorrectDirection: function() {
                    var t = this.vertical ? "vertical" : "horizontal";
                    return this.direction === t
                },
                trackStyle: function() {
                    var t = {
                        transitionDuration: (this.swiping ? 0 : this.duration) + "ms",
                        transform: "translate" + (this.vertical ? "Y" : "X") + "(" + this.offset + "px)"
                    };
                    if (this.size) {
                        var e = this.vertical ? "height" : "width"
                          , i = this.vertical ? "width" : "height";
                        t[e] = this.trackSize + "px",
                        t[i] = this[i] ? this[i] + "px" : ""
                    }
                    return t
                },
                indicatorStyle: function() {
                    return {
                        backgroundColor: this.indicatorColor
                    }
                },
                minOffset: function() {
                    return (this.vertical ? this.rect.height : this.rect.width) - this.size * this.count
                }
            },
            mounted: function() {
                this.bindTouchEvent(this.$refs.track)
            },
            methods: {
                initialize: function(t) {
                    if (void 0 === t && (t = +this.initialSwipe),
                    this.$el && !Object(v.a)(this.$el)) {
                        clearTimeout(this.timer);
                        var e = {
                            width: this.$el.offsetWidth,
                            height: this.$el.offsetHeight
                        };
                        this.rect = e,
                        this.swiping = !0,
                        this.active = t,
                        this.computedWidth = +this.width || e.width,
                        this.computedHeight = +this.height || e.height,
                        this.offset = this.getTargetOffset(t),
                        this.children.forEach((function(t) {
                            t.offset = 0
                        }
                        )),
                        this.autoPlay()
                    }
                },
                resize: function() {
                    this.initialize(this.activeIndicator)
                },
                onVisibilityChange: function() {
                    document.hidden ? this.clear() : this.autoPlay()
                },
                onTouchStart: function(t) {
                    this.touchable && (this.clear(),
                    this.touchStartTime = Date.now(),
                    this.touchStart(t),
                    this.correctPosition())
                },
                onTouchMove: function(t) {
                    this.touchable && this.swiping && (this.touchMove(t),
                    this.isCorrectDirection && (Object(p.c)(t, this.stopPropagation),
                    this.move({
                        offset: this.delta
                    })))
                },
                onTouchEnd: function() {
                    if (this.touchable && this.swiping) {
                        var t = this.size
                          , e = this.delta
                          , i = e / (Date.now() - this.touchStartTime);
                        if ((Math.abs(i) > .25 || Math.abs(e) > t / 2) && this.isCorrectDirection) {
                            var a = this.vertical ? this.offsetY : this.offsetX
                              , s = 0;
                            s = this.loop ? a > 0 ? e > 0 ? -1 : 1 : 0 : -Math[e > 0 ? "ceil" : "floor"](e / t),
                            this.move({
                                pace: s,
                                emitChange: !0
                            })
                        } else
                            e && this.move({
                                pace: 0
                            });
                        this.swiping = !1,
                        this.autoPlay()
                    }
                },
                getTargetActive: function(t) {
                    var e = this.active
                      , i = this.count
                      , a = this.maxCount;
                    return t ? this.loop ? Object(m.b)(e + t, -1, i) : Object(m.b)(e + t, 0, a) : e
                },
                getTargetOffset: function(t, e) {
                    void 0 === e && (e = 0);
                    var i = t * this.size;
                    this.loop || (i = Math.min(i, -this.minOffset));
                    var a = e - i;
                    return this.loop || (a = Object(m.b)(a, this.minOffset, 0)),
                    a
                },
                move: function(t) {
                    var e = t.pace
                      , i = void 0 === e ? 0 : e
                      , a = t.offset
                      , s = void 0 === a ? 0 : a
                      , n = t.emitChange
                      , o = this.loop
                      , r = this.count
                      , l = this.active
                      , c = this.children
                      , d = this.trackSize
                      , u = this.minOffset;
                    if (!(r <= 1)) {
                        var h = this.getTargetActive(i)
                          , v = this.getTargetOffset(h, s);
                        if (o) {
                            if (c[0] && v !== u) {
                                var p = v < u;
                                c[0].offset = p ? d : 0
                            }
                            if (c[r - 1] && 0 !== v) {
                                var f = v > 0;
                                c[r - 1].offset = f ? -d : 0
                            }
                        }
                        this.active = h,
                        this.offset = v,
                        n && h !== l && this.$emit("change", this.activeIndicator)
                    }
                },
                prev: function() {
                    var t = this;
                    this.correctPosition(),
                    this.resetTouchStatus(),
                    Object(f.a)((function() {
                        t.swiping = !1,
                        t.move({
                            pace: -1,
                            emitChange: !0
                        })
                    }
                    ))
                },
                next: function() {
                    var t = this;
                    this.correctPosition(),
                    this.resetTouchStatus(),
                    Object(f.a)((function() {
                        t.swiping = !1,
                        t.move({
                            pace: 1,
                            emitChange: !0
                        })
                    }
                    ))
                },
                swipeTo: function(t, e) {
                    var i = this;
                    void 0 === e && (e = {}),
                    this.correctPosition(),
                    this.resetTouchStatus(),
                    Object(f.a)((function() {
                        var a;
                        a = i.loop && t === i.count ? 0 === i.active ? 0 : t : t % i.count,
                        e.immediate ? Object(f.a)((function() {
                            i.swiping = !1
                        }
                        )) : i.swiping = !1,
                        i.move({
                            pace: a - i.active,
                            emitChange: !0
                        })
                    }
                    ))
                },
                correctPosition: function() {
                    this.swiping = !0,
                    this.active <= -1 && this.move({
                        pace: this.count
                    }),
                    this.active >= this.count && this.move({
                        pace: -this.count
                    })
                },
                clear: function() {
                    clearTimeout(this.timer)
                },
                autoPlay: function() {
                    var t = this
                      , e = this.autoplay;
                    e > 0 && this.count > 1 && (this.clear(),
                    this.timer = setTimeout((function() {
                        t.next(),
                        t.autoPlay()
                    }
                    ), e))
                },
                genIndicator: function() {
                    var t = this
                      , e = this.$createElement
                      , i = this.count
                      , a = this.activeIndicator
                      , s = this.slots("indicator");
                    return s || (this.showIndicators && i > 1 ? e("div", {
                        class: C("indicators", {
                            vertical: this.vertical
                        })
                    }, [Array.apply(void 0, Array(i)).map((function(i, s) {
                        return e("i", {
                            class: C("indicator", {
                                active: s === a
                            }),
                            style: s === a ? t.indicatorStyle : null
                        })
                    }
                    ))]) : void 0)
                }
            },
            render: function() {
                var t = arguments[0];
                return t("div", {
                    class: C()
                }, [t("div", {
                    ref: "track",
                    style: this.trackStyle,
                    class: C("track", {
                        vertical: this.vertical
                    })
                }, [this.slots()]), this.genIndicator()])
            }
        })
          , k = (i(498),
        i(499),
        i(9))
          , x = i(273)
          , S = i(28)
          , I = {
            name: "ProductPreviewInfo",
            props: {
                data: {
                    type: Object,
                    default: ()=>{}
                }
            },
            components: {
                MediaWrapper: a.a,
                SwipeItem: h,
                Swipe: w,
                VideoPlayer: x.a
            },
            data: ()=>({
                index: 0,
                width: null,
                height: null,
                activeIndex: 0,
                base: k.j
            }),
            computed: {
                ...Object(S.e)(["isMobile"]),
                list() {
                    return this.data.gUrls || []
                },
                current() {
                    return this.list[this.index] || {}
                },
                fileType() {
                    const {type: t} = this.current;
                    if (!t)
                        return "";
                    const e = t.split("/")[1];
                    return e ? e.toUpperCase() : ""
                },
                brandFlag() {
                    const {data: t} = this
                      , {brandName: e} = t;
                    return "该作品拥有%s官方认证".replace("%s", e || "--")
                }
            },
            watch: {
                "data.gId"() {
                    this.index = 0
                },
                activeIndex(t) {
                    this.resize(t)
                }
            },
            beforeDestroy() {
                this.viewer && this.viewer.destroy()
            },
            methods: {
                resize(t) {
                    const {swipe: e} = this.$refs;
                    if (!e)
                        return;
                    const i = e.$el
                      , a = e.$el.getElementsByClassName("van-swipe__track")[0].children.item(t).children.item(0);
                    i.style.height = a.clientHeight + "px"
                },
                onSwiperChange(t) {
                    this.activeIndex = t
                },
                onSwipeItemLoaded(t) {
                    0 === t && this.resize(0)
                },
                change(t) {
                    this.width = null,
                    this.height = null,
                    this.index = t
                },
                onPreviewLoad({width: t, height: e}) {
                    this.width = t,
                    this.height = e
                },
                zoomImg(t) {
                    t && t.target && "IMG" === t.target.nodeName && (this.imgArr = t.target.src,
                    this.$nextTick((()=>{
                        let e = new n.a(t.target,{
                            toolbar: !1,
                            navbar: !1,
                            title: !1,
                            hide: function() {
                                e.destroy()
                            }
                        });
                        e.show(),
                        this.viewer = e
                    }
                    )))
                }
            }
        }
          , $ = I
          , O = (i(500),
        i(10))
          , M = Object(O.a)($, (function() {
            var t = this
              , e = t.$createElement
              , i = t._self._c || e;
            return i("div", {
                staticClass: "preview-info"
            }, [i("div", {
                staticClass: "preview-container"
            }, [i("div", {
                staticClass: "top-left-border"
            }), t._v(" "), i("div", {
                staticClass: "bottom-left-border"
            }), t._v(" "), i("div", {
                staticClass: "rop-right-background"
            }), t._v(" "), t.current.url && !t.isMobile ? i("div", {
                key: t.current.id || t.current.url || "preview",
                staticClass: "preview-inner",
                on: {
                    click: t.zoomImg
                }
            }, [t.current.type.includes("video") ? i("video-player", {
                key: t.current.id || t.current.url || "preview",
                attrs: {
                    data: t.current,
                    "album-id": t.data.albumId
                }
            }) : i("img", {
                attrs: {
                    src: t.baseUrl("" + t.base + t.current.url + "?style=st6")
                }
            })], 1) : t._e()]), t._v(" "), i("div", {
                staticClass: "resource-switcher"
            }, t._l(t.list, (function(e, a) {
                return i("div", {
                    key: e.url,
                    staticClass: "res-btn",
                    class: {
                        active: a === t.index
                    },
                    on: {
                        click: function(e) {
                            return t.change(a)
                        }
                    }
                }, [i("div", {
                    staticClass: "item"
                }, [i("media-wrapper", {
                    attrs: {
                        type: e.type.includes("video") ? 2 : 1,
                        src: e.url
                    }
                }), t._v(" "), i("div", {
                    staticClass: "mask"
                })], 1), t._v(" "), i("div", {
                    staticClass: "status"
                })])
            }
            )), 0), t._v(" "), i("div", {
                staticClass: "swiper-container",
                attrs: {
                    id: "swiper-player"
                },
                on: {
                    click: t.zoomImg
                }
            }, [i("swipe", {
                ref: "swipe",
                attrs: {
                    loop: !0
                },
                on: {
                    change: t.onSwiperChange
                }
            }, t._l(t.list, (function(e, a) {
                return i("swipe-item", {
                    key: e.url
                }, [t.isMobile ? [e.type.includes("video") ? i("video-player", {
                    attrs: {
                        data: e,
                        "album-id": t.data.albumId
                    },
                    on: {
                        load: function(e) {
                            t.onSwipeItemLoaded && t.onSwipeItemLoaded(a)
                        }
                    }
                }) : i("img", {
                    attrs: {
                        src: t.baseUrl("" + t.base + e.url + "?style=st6")
                    },
                    on: {
                        load: function(e) {
                            t.onSwipeItemLoaded && t.onSwipeItemLoaded(a)
                        }
                    }
                })] : t._e()], 2)
            }
            )), 1), t._v(" "), i("div", {
                staticClass: "flag-num"
            }, [t._v("\n            " + t._s(t.activeIndex + 1) + "/" + t._s(t.list.length) + "\n        ")])], 1), t._v(" "), i("div", {
                staticClass: "swiper-status"
            }, [i("div", {
                staticClass: "v-info"
            }, [i("span", {
                staticClass: "icon"
            }), t._v("\n            " + t._s(t.brandFlag) + "\n        ")])])])
        }
        ), [], !1, null, "b569f17e", null).exports
          , L = i(494)
          , N = i(288)
          , E = i(307)
          , T = i(5)
          , j = {
            name: "ProductDetailItem",
            components: {
                NumBox: i(495).a,
                NftBuyButton: L.a,
                WalletAddress: N.a
            },
            props: {
                data: {
                    type: Object,
                    default: ()=>{}
                }
            },
            data: ()=>({}),
            mounted(){
                // console.log("===== do buy???",i(495),i(495).a,this.doBuy)
            },
            computed: {
                ...Object(S.e)(["isMobile"]),
                ...Object(S.e)("ethereum", ["chain"]),
                limitTip() {
                    return "全球限量发售 %s 份".replace("%s", this.data.sellLimit || "--")
                },
                brandFlag() {
                    const {data: t} = this
                      , {brandName: e} = t;
                    return "该作品拥有%s官方认证".replace("%s", e || "--")
                },
                features() {
                    const {data: t} = this
                      , {gFeatures: e} = t;
                    return e || []
                }
            },
            methods: {
                showProductList() {
                    this.$modal.show(E.a, {
                        aId: this.data.albumId,
                        sellLimit: this.data.sellLimit,
                        data: {
                            onlySell: !0,
                            order: 1
                        }
                    }, {
                        name: "ProductListModal",
                        height: "auto"
                    }, {
                        change: t=>{
                            const {gStatus: e} = t;
                            e === T.c.Selling || e === T.c.Timing || e === T.c.UnResell ? (t.gId = null,
                            t.onSale = e,
                            this.$toDetail(t)) : (this.syncUrl(t),
                            this.$root.$emit("product.detail.reload"))
                        }
                    })
                },
                syncUrl(t) {
                    const {albumId: e, gId: i} = t;
                    this.$route.query.gid = i,
                    history.replaceState(null, document.title, `/zh-cn/item/?id=${e}&gid=${i}`)
                }
            }
        }
          , P = (i(512),
        Object(O.a)(j, (function() {
            var t = this
              , e = t.$createElement
              , i = t._self._c || e;
            return i("div", {
                staticClass: "detail-items"
            }, [i("div", {
                staticClass: "v-info"
            }, [i("span", {
                staticClass: "v-flag"
            }), t._v(" "), i("span", [t._v("\n            " + t._s(t.brandFlag) + "\n        ")])]), t._v(" "), i("div", {
                staticClass: "p-name"
            }, [t._v("\n        " + t._s(t._f("defaultValue")(t.data.gName)) + "#" + t._s(t.data.gNum) + "\n    ")]), t._v(" "), i("div", {
                staticClass: "album-container"
            }, [i("div", {
                staticClass: "title"
            }, [t._v("\n            所属专辑\n        ")]), t._v(" "), t.data.origin ? t._e() : i("div", {
                staticClass: "ac-name"
            }, [i("span", [t._v("专辑名称")]), t._v(" "), i("span", {
                staticClass: "album-name"
            }, [t._v(t._s(t.data.albumName))])]), t._v(" "), i("num-box", {
                attrs: {
                    data: t.data
                }
            }), t._v(" "), i("div", {
                staticClass: "all-num-btn",
                on: {
                    click: t.showProductList
                }
            }, [t._v("\n            全部编号"), i("i", {
                staticClass: "arrow"
            })])], 1), t._v(" "), t.data.origin ? t._e() : i("div", {
                staticClass: "group"
            }, [i("span", {
                staticClass: "limit"
            }, [t._v("\n            编号："), i("b", [t._v("#" + t._s(t.data.gNum) + "/")]), t._v(t._s(t._f("defaultValue")(t.data.sellLimit)) + "\n        ")]), t._v(" "), i("nuxt-link", {
                attrs: {
                    to: "/zh-cn/item/group/?id=" + t.data.albumId
                }
            }, [t._v("\n            选择其它编号\n            "), i("span", {
                staticClass: "icon-link"
            })])], 1), t._v(" "), i("div", {
                staticClass: "num-container"
            }, [i("num-box", {
                attrs: {
                    data: t.data
                }
            })], 1), t._v(" "), t.features.length ? i("div", {
                staticClass: "tags"
            }, t._l(t.features, (function(e, a) {
                return i("div", {
                    key: a,
                    staticClass: "tag"
                }, [t._v("\n            " + t._s(e) + "\n        ")])
            }
            )), 0) : t._e(), t._v(" "), i("div", {
                staticClass: "show-in-pc"
            }, [i("div", {
                staticClass: "chain-info"
            }, [i("div", {
                staticClass: "info-item"
            }, [i("div", {
                staticClass: "label"
            }, [t._v("\n                    合约地址\n                ")]), t._v(" "), i("a", {
                staticClass: "value"
            }, [t._v("\n                    " + t._s(t._f("address")(t.data.contractAddress)) + "\n                ")])]), t._v(" "), i("div", {
                staticClass: "info-item"
            }, [i("div", {
                staticClass: "label"
            }, [t._v("\n                    链上标识\n                ")]), t._v(" "), i("div", {
                staticClass: "value"
            }, [t._v("\n                    " + t._s(t._f("defaultValue")(t.data.tokenId)) + "\n                ")])])]), t._v(" "), i("div", {
                staticClass: "price"
            }, [[2, 3, 6].includes(t.data.onSale) ? [i("span", {
                staticClass: "o-price"
            }, [t._v("\n                    ￥ " + t._s(t._f("defaultValue")(t.data.priceCny)) + "\n                ")])] : t._e()], 2), t._v(" "), t.isMobile ? t._e() : i("div", {
                style: {
                    cursor: "pointer"
                },
                on: {
                    click: t.showWechatGuide
                }
            }, [i("nft-buy-button", {
                attrs: {
                    data: t.data
                }
            })], 1), t._v(" "), i("div", {
                staticClass: "tip"
            }, [i("div", {
                staticClass: "buy-tip"
            }), t._v(" "), i("div", {
                staticClass: "limit-tip"
            }, [t._v("\n                " + t._s(t.limitTip) + "\n            ")])]), t._v(" "), i("div", {
                staticClass: "p-line"
            })]), t._v(" "), i("div", {
                staticClass: "show-in-mobile detail-group-info"
            }, [i("div", {
                staticClass: "title"
            }, [t._v("\n            链上信息\n        ")]), t._v(" "), i("div", {
                staticClass: "detail-item"
            }, [i("div", {
                staticClass: "label"
            }, [t._v("\n                合约地址\n            ")]), t._v(" "), i("div", {
                staticClass: "value"
            }, [i("wallet-address", {
                attrs: {
                    address: t.data.contractAddress,
                    copyable: ""
                }
            })], 1)]), t._v(" "), i("div", {
                staticClass: "detail-item"
            }, [i("div", {
                staticClass: "label"
            }, [t._v("\n                链上标识\n            ")]), t._v(" "), i("div", {
                staticClass: "value"
            }, [t._v("\n                " + t._s(t._f("defaultValue")(t.data.tokenId)) + "\n            ")])])]), t._v(" "), i("div", {
                staticClass: "wallet-list"
            }, [t.data.authorId ? i("div", {
                staticClass: "user creator"
            }, [i("nuxt-link", {
                staticClass: "head",
                attrs: {
                    to: "/zh-cn/account/?id=" + (t.data.authorId || "")
                }
            }, [t.data.authorAvatar ? i("img", {
                attrs: {
                    src: t.baseUrl(t.data.authorAvatar),
                    alt: "创作者头像"
                }
            }) : t._e()]), t._v(" "), i("div", {
                staticClass: "info"
            }, [i("div", {
                staticClass: "show-in-pc"
            }, [i("div", {
                staticClass: "type"
            }, [t._v("\n                        创作者\n                    ")]), t._v(" "), i("div", {
                staticClass: "names"
            }, [i("nuxt-link", {
                staticClass: "name",
                attrs: {
                    to: "/zh-cn/account/?id=" + (t.data.authorId || "")
                }
            }, [i("b", [t._v(t._s(t.data.authorName))])]), t._v("\n                         / \n                        "), i("wallet-address", {
                attrs: {
                    address: t.data.authorWalletInfo,
                    copyable: !0
                }
            })], 1)]), t._v(" "), i("div", {
                staticClass: "show-in-mobile"
            }, [i("nuxt-link", {
                staticClass: "name-info",
                attrs: {
                    to: "/zh-cn/account/?id=" + (t.data.authorId || "")
                }
            }, [i("span", {
                staticClass: "user-name"
            }, [t._v("\n                            " + t._s(t.data.authorName) + "\n                        ")]), t._v(" "), i("span", {
                staticClass: "user-type"
            }, [t._v("\n                            创作者\n                        ")])]), t._v(" "), i("wallet-address", {
                attrs: {
                    address: t.data.authorWalletInfo,
                    copyable: !0
                }
            }), t._v(" "), i("div", {
                staticClass: "arrow"
            })], 1)]), t._v(" "), i("div", {
                staticClass: "link"
            }, [i("nuxt-link", {
                attrs: {
                    to: "/zh-cn/account/?id=" + (t.data.authorId || "")
                }
            }, [t._v("\n                    TA的主页\n                ")]), t._v(" "), i("span", {
                staticClass: "icon"
            })], 1)], 1) : t._e(), t._v(" "), t.data.ownerId ? i("div", {
                staticClass: "user owner"
            }, [i("nuxt-link", {
                staticClass: "head",
                attrs: {
                    to: "/zh-cn/account/?id=" + (t.data.ownerId || "")
                }
            }, [t.data.ownerAvatar ? i("img", {
                attrs: {
                    src: t.baseUrl(t.data.ownerAvatar),
                    alt: "创作者头像"
                }
            }) : t._e()]), t._v(" "), i("div", {
                staticClass: "info"
            }, [i("div", {
                staticClass: "show-in-pc"
            }, [i("div", {
                staticClass: "type"
            }, [t._v("\n                        拥有者\n                    ")]), t._v(" "), i("div", {
                staticClass: "names"
            }, [i("nuxt-link", {
                staticClass: "name",
                attrs: {
                    to: "/zh-cn/account/?id=" + (t.data.ownerId || "")
                }
            }, [i("b", [t._v(t._s(t.data.ownerName))])]), t._v("\n                         / \n                        "), i("wallet-address", {
                attrs: {
                    address: t.data.ownerWalletInfo,
                    copyable: !0
                }
            })], 1)]), t._v(" "), i("div", {
                staticClass: "show-in-mobile"
            }, [i("nuxt-link", {
                staticClass: "name-info",
                attrs: {
                    to: "/zh-cn/account/?id=" + (t.data.ownerId || "")
                }
            }, [i("span", {
                staticClass: "user-name"
            }, [t._v("\n                            " + t._s(t.data.ownerName) + "\n                        ")]), t._v(" "), i("span", {
                staticClass: "user-type"
            }, [t._v("\n                            拥有者\n                        ")])]), t._v(" "), i("wallet-address", {
                attrs: {
                    address: t.data.ownerWalletInfo,
                    copyable: !0
                }
            })], 1)]), t._v(" "), i("div", {
                staticClass: "link"
            }, [i("nuxt-link", {
                attrs: {
                    to: "/zh-cn/account/?id=" + (t.data.ownerId || "")
                }
            }, [t._v("\n                    TA的主页\n                ")]), t._v(" "), i("span", {
                staticClass: "icon"
            })], 1)], 1) : t._e()])])
        }
        ), [], !1, null, "e44c6018", null).exports)
          , R = {
            name: "ProductDetail",
            props: {
                data: {
                    type: Object,
                    default: ()=>{}
                },
                hideDetail: {
                    type: Boolean,
                    default: !1
                }
            },
            components: {
                PreviewInfo: M,
                DetailItems: P
            }
        }
          , A = (i(513),
        Object(O.a)(R, (function() {
            var t = this
              , e = t.$createElement
              , i = t._self._c || e;
            return i("div", {
                ref: "capture",
                staticClass: "product-detail"
            }, [i("preview-info", {
                staticClass: "info",
                attrs: {
                    data: t.data
                }
            }), t._v(" "), t.hideDetail ? t._e() : i("detail-items", {
                staticClass: "items",
                attrs: {
                    data: t.data
                }
            })], 1)
        }
        ), [], !1, null, "3c385e00", null));
        e.a = A.exports
    },
    536: function(t, e, i) {
        "use strict";
        var a = {
            name: "MobileAlbumDetail",
            components: {
                WalletAddress: i(288).a
            },
            props: {
                data: {
                    type: Object,
                    default: ()=>{}
                }
            }
        }
          , s = (i(514),
        i(10))
          , n = Object(s.a)(a, (function() {
            var t = this
              , e = t.$createElement
              , i = t._self._c || e;
            return i("div", {
                staticClass: "motion-container"
            }, [i("div", {
                staticClass: "creator-container"
            }, [t._m(0), t._v(" "), i("div", {
                staticClass: "cc-item-home"
            }, [i("div", {
                staticClass: "contract-address"
            }, [i("img", {
                staticClass: "avator",
                attrs: {
                    src: t.baseUrl(t.data.authorAvatar),
                    alt: "作者头像"
                }
            }), t._v(" "), i("div", {
                staticClass: "box-1"
            }, [i("span", {
                staticClass: "name"
            }, [t._v("\n                        " + t._s(t.data.authorName) + "\n                    ")]), t._v(" "), i("div", {
                staticClass: "address"
            }, [i("wallet-address", {
                attrs: {
                    address: t.data.authorWalletInfo,
                    copyable: !0
                }
            })], 1)])]), t._v(" "), i("nuxt-link", {
                staticClass: "name",
                attrs: {
                    to: "/zh-cn/account/?id=" + (t.data.authorId || "")
                }
            }, [i("i", {
                staticClass: "home"
            })])], 1), t._v(" "), i("div", {
                staticClass: "cc-item-content"
            }, [t._v("\n            " + t._s(t.data.introduction) + "\n        ")])]), t._v(" "), t.data.gDesc ? i("div", {
                staticClass: "work-container"
            }, [t._m(1), t._v(" "), i("div", {
                staticClass: "wc-content"
            }, [t._v("\n            " + t._s(t.data.gDesc) + "\n        ")])]) : t._e(), t._v(" "), t.data.gDetailUrls ? i("div", {
                staticClass: "nft-detail-container"
            }, [t._m(2), t._v(" "), i("img", {
                staticClass: "detail-urls",
                attrs: {
                    src: t.baseUrl(t.data.gDetailUrls),
                    alt: "细节长图"
                }
            })]) : t._e(), t._v(" "), i("div", {
                staticClass: "work-container"
            }, [t._m(3), t._v(" "), i("nuxt-link", {
                staticClass: "link-btn",
                attrs: {
                    to: "/zh-cn/brand/?id=" + t.data.brandId
                }
            }, [i("div", {
                staticClass: "more"
            }, [t._v("\n                更多品牌作品"), i("i")])]), t._v(" "), i("div", {
                staticClass: "wc-content"
            }, [t._v("\n            " + t._s(t.data.brandDesc) + "\n        ")])], 1), t._v(" "), t._m(4)])
        }
        ), [function() {
            var t = this.$createElement
              , e = this._self._c || t;
            return e("div", {
                staticClass: "title-common"
            }, [e("i"), e("i", {
                staticClass: "creator"
            })])
        }
        , function() {
            var t = this.$createElement
              , e = this._self._c || t;
            return e("div", {
                staticClass: "title-common"
            }, [e("i"), e("i", {
                staticClass: "work"
            })])
        }
        , function() {
            var t = this.$createElement
              , e = this._self._c || t;
            return e("div", {
                staticClass: "title-common"
            }, [e("i"), e("i", {
                staticClass: "detail"
            })])
        }
        , function() {
            var t = this.$createElement
              , e = this._self._c || t;
            return e("div", {
                staticClass: "title-common"
            }, [e("i"), e("i", {
                staticClass: "desc"
            })])
        }
        , function() {
            var t = this
              , e = t.$createElement
              , i = t._self._c || e;
            return i("div", {
                staticClass: "work-container"
            }, [i("div", {
                staticClass: "title-common"
            }, [i("i"), i("i", {
                staticClass: "about"
            })]), t._v(" "), i("div", {
                staticClass: "wc-content"
            }, [t._v("\n            数字藏品可以通俗理解为区块链凭证。通常是指开发者在以太坊平台上根据ERC721标准/协议所发行，特性为不可分割、不可替代、独一无二。数字藏品常见于文化艺术品领域、知识产权的链上发行、流转、确权等作用，能有效保护链上知识产权，防止篡改、造假等，是区块链技术的一类场景应用。\n        ")])])
        }
        ], !1, null, null, null);
        e.a = n.exports
    },
    576: function(t, e, i) {},
    577: function(t, e, i) {},
    578: function(t, e, i) {},
    579: function(t, e, i) {},
    580: function(t, e, i) {},
    698: function(t, e, i) {
        "use strict";
        i(576)
    },
    699: function(t, e, i) {
        "use strict";
        i(577)
    },
    700: function(t, e, i) {
        "use strict";
        i(578)
    },
    701: function(t, e, i) {
        "use strict";
        i(579)
    },
    702: function(t, e, i) {
        "use strict";
        i(580)
    },
    793: function(t, e, i) {
        "use strict";
        i.r(e);
        var a = i(219)
          , s = i(533)
          , n = {
            name: "ProductBlobDetail",
            props: {
                data: {
                    type: Object,
                    default: ()=>{}
                }
            },
            data: ()=>({
                brandContentHasMore: !1
            }),
            mounted() {
                this.$nextTick(this.checkBrandContent)
            },
            computed: {
                brandDescription() {
                    return (this.data.brandDesc || "").replace(/\n/g, "<br>")
                },
                description() {
                    return (this.data.gDesc || "").replace(/\n/g, "<br>")
                }
            },
            methods: {
                checkBrandContent() {
                    const {brandContent: t} = this.$refs;
                    t && t.clientHeight >= 80 && (this.brandContentHasMore = !0)
                }
            },
            watch: {
                "data.brandDesc"(t) {
                    t && this.$nextTick(this.checkBrandContent)
                }
            }
        }
          , o = (i(698),
        i(10))
          , r = Object(o.a)(n, (function() {
            var t = this
              , e = t.$createElement
              , i = t._self._c || e;
            return i("div", {
                staticClass: "blob-detail"
            }, [i("div", {
                staticClass: "description"
            }, [i("div", {
                staticClass: "title"
            }, [t._v("\n            作品描述\n        ")]), t._v(" "), i("div", {
                staticClass: "blob-content",
                domProps: {
                    innerHTML: t._s(t.description)
                }
            })]), t._v(" "), i("div", {
                staticClass: "o-description"
            }, [i("div", {
                staticClass: "title"
            }, [t._v("\n            品牌描述\n        ")]), t._v(" "), i("div", {
                ref: "brandContent",
                staticClass: "blob-content brand-content",
                domProps: {
                    innerHTML: t._s(t.brandDescription)
                }
            }), t._v(" "), t.data.origin ? t._e() : i("div", {
                staticClass: "link"
            }, [i("nuxt-link", {
                attrs: {
                    to: "/zh-cn/brand/?id=" + t.data.brandId
                }
            }, [t._v("\n                查看更多内容\n            ")])], 1)]), t._v(" "), t._m(0)])
        }
        ), [function() {
            var t = this
              , e = t.$createElement
              , i = t._self._c || e;
            return i("div", {
                staticClass: "about-nft"
            }, [i("div", {
                staticClass: "title"
            }, [t._v("\n            关于数字藏品\n        ")]), t._v(" "), i("div", {
                staticClass: "blob-content"
            }, [t._v("\n            数字藏品可以通俗理解为区块链凭证。通常是指开发者在以太坊平台上根据ERC721标准/协议所发行，特性为不可分割、不可替代、独一无二。数字藏品常见于文化艺术品领域、知识产权的链上发行、流转、确权等作用，能有效保护链上知识产权，防止篡改、造假等，是区块链技术的一类场景应用。"), i("br")])])
        }
        ], !1, null, "6ff9fd41", null).exports
          , l = i(34)
          , c = i(28)
          , d = i(23)
          , u = {
            name: "TradeListModal",
            components: {
                CommonModal: l.a
            },
            props: {
                aId: {
                    type: [String, Number],
                    default: ""
                },
                gNum: {
                    type: [String, Number],
                    default: ""
                }
            },
            data: ()=>({
                list: [],
                noMore: !1,
                loading: !0,
                page: 1,
                pageSize: 30,
                loadId: (new Date).getTime()
            }),
            computed: {
                ...Object(c.e)("ethereum", ["chain"])
            },
            created() {
                this.load()
            },
            methods: {
                transactionHash: t=>t.transactionHash || t.orderId || "",
                hashDetail(t) {
                    const {chain: e} = this;
                    this.transactionHash(t)
                },
                async load() {
                    this.loading = !0;
                    const {aId: t, gNum: e, page: i, pageSize: a} = this
                      , {success: s, data: n} = await d.g.getTransactionList({
                        albumId: t,
                        gNum: e,
                        page: i,
                        pageSize: a
                    });
                    this.loading = !1,
                    s ? (this.noMore = !n.hashNext,
                    this.list.push(...n.list || []),
                    this.page = n.currPage + 1) : this.noMore = !0
                },
                loadMore() {
                    this.load()
                },
                remark(t) {
                    const {status: e, remark: i} = t;
                    return 1 === e ? i.replace("寄售 0￥", "寄售 -- ￥") : i
                }
            }
        }
          , h = u
          , v = (i(699),
        Object(o.a)(h, (function() {
            var t = this
              , e = t.$createElement
              , i = t._self._c || e;
            return i("common-modal", [i("h3", {
                staticClass: "modal-title",
                attrs: {
                    slot: "title"
                },
                slot: "title"
            }, [t._v("\n        寄售记录\n    ")]), t._v(" "), i("div", {
                staticClass: "modal-content",
                attrs: {
                    slot: "content"
                },
                slot: "content"
            }, [i("div", {
                staticClass: "list"
            }, t._l(t.list, (function(e) {
                return i("div", {
                    key: e.orderId,
                    staticClass: "order-info",
                    on: {
                        click: function(i) {
                            return t.hashDetail(e)
                        }
                    }
                }, [i("div", {
                    staticClass: "detail"
                }, [i("div", {
                    staticClass: "name"
                }, [i("nuxt-link", {
                    attrs: {
                        to: "/zh-cn/account/?id=" + (e.userId || "")
                    }
                }, [t._v("\n                            " + t._s(e.userName) + "\n                        ")])], 1), t._v(" "), i("div", {
                    staticClass: "time"
                }, [t._v("\n                        " + t._s(t.transactionHash(e) ? "链上时间：" : "") + t._s(t._f("t2d")(e.operationTime)) + "\n                    ")])]), t._v(" "), i("a", {
                    staticClass: "remark"
                }, [t._v("\n                    " + t._s(t.remark(e)) + "\n                ")]), t._v(" "), t.transactionHash(e) ? i("div", {
                    staticClass: "arrow"
                }) : t._e()])
            }
            )), 0), t._v(" "), t.loading ? i("div", {
                staticClass: "loading"
            }) : t._e(), t._v(" "), t.noMore ? t._e() : [!t.loading && t.list.length ? i("div", {
                staticClass: "load-more"
            }, [i("a", {
                on: {
                    click: t.loadMore
                }
            }, [i("span", {
                staticClass: "text"
            }, [t._v("\n                        展开更多\n                    ")]), t._v(" "), i("span", {
                staticClass: "icon"
            })])]) : t._e()], t._v(" "), t.loading || t.list.length ? t._e() : i("div", {
                staticClass: "no-data"
            }, [i("div", {
                staticClass: "icon"
            }), t._v(" "), i("div", {
                staticClass: "text"
            }, [t._v("\n                暂无记录\n            ")])])], 2)])
        }
        ), [], !1, null, "79f2bbe7", null))
          , p = v.exports
          , f = {
            name: "ProductExtendList",
            props: {
                data: {
                    type: Object,
                    default: ()=>{}
                }
            },
            computed: {
                aId() {
                    return this.data.albumId
                },
                gId() {
                    return this.data.gNum
                }
            },
            data: ()=>({}),
            methods: {
                showTradeModal() {
                    this.$modal.show(p, {
                        aId: this.aId,
                        gNum: this.gId
                    }, {
                        name: "TradeListModal",
                        height: "auto"
                    })
                },
                toGoodsInfo() {
                    const {aId: t} = this;
                    this.$router.push(`/zh-cn/item/group/?id=${t}`)
                },
                toSellInfo() {
                    const {aId: t, gId: e} = this;
                    this.$router.push(`/zh-cn/item/trade/?id=${t}&gid=${e}`)
                }
            }
        }
          , m = (i(700),
        Object(o.a)(f, (function() {
            var t = this
              , e = t.$createElement
              , i = t._self._c || e;
            return i("div", {
                staticClass: "extend-list"
            }, [i("div", {
                staticClass: "pc-title"
            }, [i("div", {
                staticClass: "item-link",
                on: {
                    click: t.toSellInfo
                }
            }, [i("span", [t._v("寄售记录")]), i("i")]), t._v(" "), i("div", {
                staticClass: "item-link",
                on: {
                    click: t.toGoodsInfo
                }
            }, [i("span", [t._v("商品列表")]), i("i")])]), t._v(" "), i("div", {
                staticClass: "mobile-title"
            }, [i("div", {
                staticClass: "m-item-link"
            }, [t._v("\n            寄售记录\n        ")]), t._v(" "), i("div", {
                staticClass: "extend-button"
            }, [i("div", {
                staticClass: "btn-show-trade-modal",
                on: {
                    click: t.showTradeModal
                }
            }, [i("div", {
                staticClass: "text"
            }, [t._v("\n                    查看寄售记录\n                ")]), t._v(" "), i("div", {
                staticClass: "icon"
            })])])])])
        }
        ), [], !1, null, "5622572d", null).exports)
          , _ = {
            name: "ProductActionBar",
            components: {
                NftBuyButton: i(494).a
            },
            data: function() {
                return {}
            },
            props: {
                data: {
                    type: Object,
                    default: ()=>{}
                }
            },
            computed: {
                ...Object(c.e)(["isLogin", "uid"]),
                isOwner() {
                    const {ownerId: t} = this.data;
                    return this.isLogin && this.uid === t
                }
            },
            methods: {
                onShare() {
                    console.log("===share===");
                    return ;
                    const {gName: t, onSale: e, tokenId: i, authorName: a, priceCny: s, gNum: n, sellLimit: o, gUrls: r, origin: l} = this.data;
                    let c = {
                        img: `${r[0].url}?style=st6`,
                        authorName: a,
                        onSale: e,
                        origin: l,
                        gName: t,
                        tokenId: i,
                        priceCny: s,
                        gNum: n,
                        sellLimit: o
                    };
                    localStorage.setItem("shareInforUrl", window.location.href),
                    localStorage.setItem("shareAllInforUrl", JSON.stringify(c)),
                    this.$router.push({
                        path: "/zh-cn/share"
                    })
                },
                goTransfer() {
                    const {thumbPic2: t, gId: e} = this.data;
                    this.$router.push(`/zh-cn/transfer/?pic=${encodeURIComponent(t)}&gid=${e}`)
                }
            }
        }
          , g = (i(701),
        Object(o.a)(_, (function() {
            var t = this
              , e = t.$createElement
              , i = t._self._c || e;
            return i("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.data.onSale,
                    expression: "data.onSale"
                }],
                staticClass: "action-bar"
            }, [i("button", {
                staticClass: "btn btn-icon btn-share",
                on: {
                    click: t.onShare
                }
            }, [i("span", {
                staticClass: "icon"
            }), t._v(" "), i("span", {
                staticClass: "text"
            }, [t._v("\n            分享\n        ")])]), t._v(" "), i("div", {
                staticClass: "button"
            }, [i("nft-buy-button", {
                attrs: {
                    data: t.data
                }
            })], 1)])
        }
        ), [], !1, null, "1cdecf36", null).exports)
          , b = i(5)
          , y = {
            name: "ProductPage",
            components: {
                MobileAlbumDetail: i(536).a,
                Detail: s.a,
                BlobDetail: r,
                ExtendList: m,
                ResponsiveLayout: a.a,
                ActionBar: g
            },
            data: ()=>({
                data: {},
                timer: null
            }),
            computed: {
                ...Object(c.e)(["uid", "isMobile"]),
                showActionBar() {
                    const {data: t} = this
                      , {onSale: e} = t;
                    return [b.c.UPChaining, b.c.CancelChaining, b.c.NoSell, b.c.Timing, b.c.SoldOut, b.c.Selling, b.c.Resell, b.c.Lock, b.c.Withdrawing, b.c.Withdrawal, b.c.Obligation, b.c.MergeSourceLocked, b.c.MergeTargetLocked, b.c.Destroyed, b.c.UnCreated, b.c.WaitDrop].includes(e)
                },
                paddingBottom() {
                    const {onSale: t} = this.data;
                    return this.isMobile && [b.c.SoldOut, b.c.Selling, b.c.Timing, b.c.Resell].includes(t) ? 120 : 0
                },
                showNumList() {
                    return !!this.$route.query.select
                }
            },
            async created() {
                await this.load(),
                this.$root.$on("product.detail.reload", this.load)
            },
            beforeDestroy() {
                this.$root.$off("product.detail.reload", this.load),
                this.hideModals(),
                clearTimeout(this.timer),
                this.timer = null
            },
            methods: {
                initShare() {
                    this.data.gUrls && this.initWxShare({
                        title: `iBox藏品 | ${this.data.gName}#${this.data.gNum}`,
                        desc: `${this.data.ownerName}的数字藏品，价格${this.data.priceCny}元。头部数字藏品电商平台`,
                        link: location.href,
                        timeLinetitle: `${this.data.gName}（#${this.data.gNum}/${this.data.sellLimit ? this.data.sellLimit : "-"}）正在热卖，速来抢购。`,
                        imgUrl: `${location.origin}${this.data.gUrls[0].url}`
                    })
                },
                async load() {
                    const {id: t, gid: e} = this.$route.query
                      , {uid: i} = this
                      , {success: a, data: s} = await d.g.detail({
                        albumId: t,
                        gId: e,
                        uid: i
                    });
                    a && (this.data = s || {})
                },
                syncUrl() {
                    const {albumId: t, gId: e} = this.data;
                    this.$route.query.gid = e,
                    history.replaceState(null, document.title, `/zh-cn/item/?id=${t}&gid=${e}`)
                }
            },
            watch: {
                "data.gId"(t) {
                    this.initShare();
                    const {gid: e} = this.$route.query;
                    t && !e && this.syncUrl();
                    const {data: i} = this;
                    this.$track.pageView("commoditypage_view", {
                        commodity_type: "nft",
                        commodity_id: "" + i.albumId,
                        commodity_name: i.albumName,
                        commodity_serialnumber: i.gNum,
                        commodity_price_amount: [b.c.Resell, b.c.Selling].includes(i.onSale) ? Number(i.priceCny) : null,
                        commodity_price_currency: [b.c.Resell, b.c.Selling].includes(i.onSale) ? "rmb" : null,
                        creator_id: "" + i.authorId,
                        creator_name: i.authorName,
                        brand_id: "" + i.brandId,
                        brand_name: i.brandName,
                        owner_user_id: "" + i.ownerId,
                        owner_name_nick: i.ownerName
                    })
                }
            }
        }
          , C = (i(702),
        Object(o.a)(y, (function() {
            var t = this
              , e = t.$createElement
              , i = t._self._c || e;
            return i("responsive-layout", {
                attrs: {
                    "padding-bottom": t.paddingBottom
                }
            }, [i("section", {
                staticClass: "container"
            }, [i("detail", {
                staticClass: "detail",
                attrs: {
                    data: t.data
                }
            }), t._v(" "), t.isMobile ? t._e() : i("client-only", [i("blob-detail", {
                attrs: {
                    data: t.data
                }
            })], 1), t._v(" "), t.isMobile ? i("client-only", [i("mobile-album-detail", {
                attrs: {
                    data: t.data
                }
            })], 1) : t._e(), t._v(" "), i("extend-list", {
                attrs: {
                    data: t.data
                }
            }), t._v(" "), t.showActionBar ? i("action-bar", {
                attrs: {
                    data: t.data
                }
            }) : t._e()], 1)])
        }
        ), [], !1, null, "76e2308b", null));
        e.default = C.exports
    }
}]);
