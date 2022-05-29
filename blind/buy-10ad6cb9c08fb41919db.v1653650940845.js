console.log('==debug==');
(window.webpackJsonp = window.webpackJsonp || []).push([[40, 2, 3], {
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
      var n = i(28);
      const s = i(224);
      var a = {
          data: ()=>({
              defaultHead: s
          }),
          computed: {
              ...Object(n.e)("ethereum", ["userInfo", "account", "chain"]),
              ...Object(n.e)(["uid"])
          },
          mounted() {
              this.$forceUpdate()
          },
          methods: {
              async toUser() {
                  const {uid: t} = this
                    , {path: e} = this.$route;
                  await this.$router.push(`/zh-cn/account/?id=${t}`),
                  e.includes("/account/") && (document.documentElement.scrollTop = 0)
              }
          }
      }
        , o = (i(225),
      i(10))
        , r = Object(o.a)(a, (function() {
          var t, e = this, i = e.$createElement, n = e._self._c || i;
          return n("div", {
              staticClass: "wallet-button"
          }, [n("div", {
              directives: [{
                  name: "show",
                  rawName: "v-show",
                  value: !e.account,
                  expression: "!account"
              }]
          }, [n("button", {
              on: {
                  click: e.login
              }
          }, [n("span", {
              staticClass: "text"
          }, [e._v("\n                登录\n            ")])])]), e._v(" "), n("div", {
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
          }, [n("div", {
              staticClass: "chain-info",
              class: (t = {},
              t["type-" + e.chain.id] = e.chain.id,
              t)
          }, [n("div", {
              staticClass: "logo"
          }, [n("client-only", [e.userInfo.headImage ? n("img", {
              attrs: {
                  src: e.baseUrl(e.userInfo.headImage),
                  alt: "用户头像"
              }
          }) : e._e()])], 1)]), e._v(" "), n("div", {
              staticClass: "address"
          }, [e._v("\n            " + e._s(e._f("address")(e.account)) + "\n        ")]), e._v(" "), n("div", {
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
        , u = (i(228),
      Object(o.a)(c, (function() {
          var t = this
            , e = t.$createElement
            , n = t._self._c || e;
          return n("div", {
              ref: "sharePlat",
              staticClass: "sharePlat"
          }, [n("ul", [n("li", {
              on: {
                  click: function(e) {
                      return t.clickWechat("2")
                  }
              }
          }, [n("img", {
              attrs: {
                  src: i(227)
              }
          }), n("p", [t._v("长按图片发送好友")])])])])
      }
      ), [], !1, null, "d945c586", null).exports)
        , d = i(9)
        , h = {
          components: {
              SharePlat: u
          },
          data: ()=>({
              mask: !1,
              selIndex: 0,
              startPoint: {},
              centerIndex: 0,
              offsetWid: 0,
              MenuList: [{
                  url: d.g
              }, {
                  url: d.h
              }, {
                  url: d.i
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
          }, t._l(t.MenuList, (function(e, n) {
              return i("li", {
                  key: n,
                  class: {
                      selected: t.selIndex === n,
                      center: n === t.centerIndex
                  },
                  on: {
                      click: function(e) {
                          return e.stopPropagation(),
                          t.sharePic(n)
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
        , y = i(17)
        , b = i.n(y)
        , g = i(68)
        , C = i.n(g)
        , k = i(69)
        , w = i.n(k)
        , x = i(43)
        , S = i.n(x)
        , O = i(49)
        , M = i.n(O)
        , $ = i(0)
        , R = i.n($)
        , E = i(208)
        , I = i(2)
        , P = (i(257),
      i(245),
      i(247),
      i(786))
        , N = i(209);
      function T(t) {
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
              var i, n = S()(t);
              if (e) {
                  var s = S()(this).constructor;
                  i = Reflect.construct(n, arguments, s)
              } else
                  i = n.apply(this, arguments);
              return w()(this, i)
          }
      }
      var B = function(t, e, i, n) {
          var s, a = arguments.length, o = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
          if ("object" === ("undefined" == typeof Reflect ? "undefined" : M()(Reflect)) && "function" == typeof Reflect.decorate)
              o = Reflect.decorate(t, e, i, n);
          else
              for (var r = t.length - 1; r >= 0; r--)
                  (s = t[r]) && (o = (a < 3 ? s(o) : a > 3 ? s(e, i, o) : s(e, i)) || o);
          return a > 3 && o && Object.defineProperty(e, i, o),
          o
      }
        , j = function(t) {
          C()(n, t);
          var e, i = T(n);
          function n() {
              var t;
              return _()(this, n),
              (t = i.apply(this, arguments)).value = "",
              t.showMask = !1,
              t._popstateTimer = null,
              t
          }
          return b()(n, [{
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
              value: (e = f()(R.a.mark((function t() {
                  return R.a.wrap((function(t) {
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
          n
      }(I.default);
      B([N.a], j.prototype, "inSearch", void 0),
      B([N.a], j.prototype, "keywords", void 0);
      var L = j = B([Object(E.a)({
          components: {
              Search: P.a
          }
      })], j)
        , A = (i(230),
      Object(o.a)(L, (function() {
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
        , D = A.exports;
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
              var i, n = S()(t);
              if (e) {
                  var s = S()(this).constructor;
                  i = Reflect.construct(n, arguments, s)
              } else
                  i = n.apply(this, arguments);
              return w()(this, i)
          }
      }
      var W = function(t, e, i, n) {
          var s, a = arguments.length, o = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
          if ("object" === ("undefined" == typeof Reflect ? "undefined" : M()(Reflect)) && "function" == typeof Reflect.decorate)
              o = Reflect.decorate(t, e, i, n);
          else
              for (var r = t.length - 1; r >= 0; r--)
                  (s = t[r]) && (o = (a < 3 ? s(o) : a > 3 ? s(e, i, o) : s(e, i)) || o);
          return a > 3 && o && Object.defineProperty(e, i, o),
          o
      }
        , G = function(t) {
          C()(n, t);
          var e, i = U(n);
          function n() {
              var t;
              return _()(this, n),
              (t = i.apply(this, arguments))._timer = null,
              t._popstateTimer = null,
              t._maskEl = null,
              t.value = "",
              t.focus = !1,
              t
          }
          return b()(n, [{
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
              value: (e = f()(R.a.mark((function t() {
                  return R.a.wrap((function(t) {
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
          n
      }(I.default);
      W([N.a], G.prototype, "inSearch", void 0),
      W([N.a], G.prototype, "keywords", void 0);
      var H = G = W([Object(E.a)({
          components: {
              ElInput: i(249).default
          }
      })], G)
        , q = (i(231),
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
        , F = {
          name: "Header",
          components: {
              WalletButton: r,
              ShareMenu: v,
              SearchBox: q.exports,
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
              ...Object(n.e)(["isMobile", "appConfig"]),
              ...Object(n.e)("ethereum", ["account"]),
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
        , z = (i(232),
      i(233),
      Object(o.a)(F, (function() {
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
        , K = {
          name: "Footer",
          data: ()=>({
              status: {
                  0: !1,
                  1: !1,
                  2: !1
              },
              emailAddr1: "ip@ibox.com",
              emailAddr2: "ip2@ibox.com"
          }),
          computed: {
              ...Object(n.e)(["appConfig"]),
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
        , V = (i(234),
      Object(o.a)(K, (function() {
          var t = this
            , e = t.$createElement
            , i = t._self._c || e;
          return i("footer", {
              staticClass: "footer"
          }, [i("div", {
              staticClass: "inner"
          }, [i("div", {
              staticClass: "creator-mobile"
          }, [i("div", {
              staticClass: "creator-title"
          }, [t._v("\n                加入创作者生态\n            ")]), t._v(" "), i("div", {
              staticClass: "creator-detail"
          }, [t._v("\n                若您和您的团队想发行推⼴数字藏品，请联系： "), i("br"), t._v(" "), i("a", {
              attrs: {
                  href: "mailto:" + t.emailAddr1
              }
          }, [t._v(t._s(t.emailAddr1))]), t._v(" "), i("a", {
              attrs: {
                  href: "mailto:" + t.emailAddr2
              }
          }, [t._v(t._s(t.emailAddr2))])])]), t._v(" "), i("div", {
              staticClass: "platform-info"
          }, [i("div", {
              staticClass: "logo"
          }), t._v(" "), i("div", {
              staticClass: "creator"
          }, [i("div", {
              staticClass: "title"
          }, [t._v("\n                    加入创作者生态\n                ")]), t._v(" "), i("div", {
              staticClass: "c-info"
          }, [t._v("\n                    若您和您的团队想发行推⼴数字藏品，请联系 "), i("br"), t._v(" "), i("a", {
              attrs: {
                  href: "mailto:" + t.emailAddr1
              }
          }, [t._v(t._s(t.emailAddr1))]), t._v(" "), i("a", {
              attrs: {
                  href: "mailto:" + t.emailAddr2
              }
          }, [t._v(t._s(t.emailAddr2))])])]), t._v(" "), i("div", {
              staticClass: "s-line"
          }), t._v(" "), t._m(0)]), t._v(" "), i("div", {
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
          }, [t._v("\n                            用户协议\n                        ")])])])])]), t._v(" "), t._m(1)])])
      }
      ), [function() {
          var t = this
            , e = t.$createElement
            , i = t._self._c || e;
          return i("div", {
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
          }, [t._v("\n                    ©2021 海南链盒科技有限公司\n                ")])])
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
      ], !1, null, "51cd4769", null).exports)
        , Y = i(237)
        , J = i(221);
      i(7);
      const X = 1
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
              Loading: Y.a,
              Header: z,
              Footer: V
          },
          computed: {
              ...Object(n.e)(["isMobile", "inSearch", "isApp"]),
              scrollDirection() {
                  if (this.showMenu || this.inSearch)
                      return Q;
                  let t = this.isMobile ? 100 : 60;
                  return this.isMobile && this.showSearchInMobile && (t = 204),
                  this.scrollTop > t ? this.scrollDistance >= 0 ? X : Z : Q
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
              this.$root.$on(J.a.Loading, this.toggleLoading),
              this.$root.$on(J.a.ShowMask, this.toggleMask)
          },
          beforeDestroy() {
              window.removeEventListener("scroll", this.onScroll),
              this.$root.$off(J.a.Loading, this.toggleLoading),
              this.$root.$off(J.a.ShowMask, this.toggleMask)
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
  221: function(t, e, i) {
      "use strict";
      var n;
      i.d(e, "a", (function() {
          return n
      }
      )),
      function(t) {
          t.Loading = "loading",
          t.HashChange = "hashchange",
          t.ShowMask = "showmask"
      }(n || (n = {}))
  },
  222: function(t, e, i) {},
  224: function(t, e, i) {
      t.exports = i.p + "img/1ce3e5c.v1653650940845.svg"
  },
  225: function(t, e, i) {
      "use strict";
      i(210)
  },
  226: function(t, e, i) {
      t.exports = i.p + "img/94baf74.v1653650940845.svg"
  },
  227: function(t, e, i) {
      t.exports = i.p + "img/48ed8ef.v1653650940845.svg"
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
  237: function(t, e, i) {
      "use strict";
      var n = i(17)
        , s = i.n(n)
        , a = i(16)
        , o = i.n(a)
        , r = i(68)
        , l = i.n(r)
        , c = i(69)
        , u = i.n(c)
        , d = i(43)
        , h = i.n(d)
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
              var i, n = h()(t);
              if (e) {
                  var s = h()(this).constructor;
                  i = Reflect.construct(n, arguments, s)
              } else
                  i = n.apply(this, arguments);
              return u()(this, i)
          }
      }
      var y = function(t, e, i, n) {
          var s, a = arguments.length, o = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
          if ("object" === ("undefined" == typeof Reflect ? "undefined" : p()(Reflect)) && "function" == typeof Reflect.decorate)
              o = Reflect.decorate(t, e, i, n);
          else
              for (var r = t.length - 1; r >= 0; r--)
                  (s = t[r]) && (o = (a < 3 ? s(o) : a > 3 ? s(e, i, o) : s(e, i)) || o);
          return a > 3 && o && Object.defineProperty(e, i, o),
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
      y([Object(f.d)({
          required: !0,
          default: !1,
          type: Boolean
      })], b.prototype, "show", void 0),
      y([Object(f.d)({
          required: !0,
          default: "",
          type: String
      })], b.prototype, "customClass", void 0),
      y([Object(f.d)({
          required: !1,
          default: "加载中",
          type: String
      })], b.prototype, "text", void 0);
      var g = b = y([Object(m.b)({
          name: "Loading"
      })], b)
        , C = (i(258),
      i(10))
        , k = Object(C.a)(g, (function() {
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
      e.a = k.exports
  },
  241: function(t, e, i) {
      "use strict";
      const n = {
          0: "UR",
          1: "SSR",
          2: "SR",
          3: "R",
          4: "N"
      };
      var s = {
          name: "MBoxRarity",
          props: {
              rarity: {
                  type: [Number, String],
                  default: ""
              },
              suffix: {
                  type: String,
                  default: ""
              }
          },
          computed: {
              label() {
                  const {rarity: t} = this;
                  if (0 !== t && !t && !this.suffix)
                      return "盲盒开出";
                  const e = n[String(t)];
                  return e || ""
              }
          }
      }
        , a = (i(242),
      i(10))
        , o = Object(a.a)(s, (function() {
          var t = this
            , e = t.$createElement;
          return (t._self._c || e)("div", {
              class: "box-rarity rarity-" + (t.rarity || 0)
          }, [t._v("\n    " + t._s(t.label) + " " + t._s(t.suffix) + "\n")])
      }
      ), [], !1, null, "8be4ac4e", null);
      e.a = o.exports
  },
  242: function(t, e, i) {
      "use strict";
      i(222)
  },
  243: function(t, e, i) {},
  252: function(t, e, i) {},
  255: function(t, e, i) {
      "use strict";
      var n = i(263)
        , s = i.n(n)
        , a = {
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
        , r = Object(o.a)(a, (function() {
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
  260: function(t, e, i) {
      "use strict";
      i.d(e, "a", (function() {
          return s
      }
      )),
      i.d(e, "b", (function() {
          return a
      }
      )),
      i.d(e, "c", (function() {
          return o
      }
      ));
      var n = "van-hairline"
        , s = n + "--bottom"
        , a = n + "--surround"
        , o = n + "--top-bottom"
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
      var n = i(23)
        , s = i(9)
        , a = i(7)
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
                  videoId: Object(a.h)(),
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
                    , n = t.parentNode.offsetWidth;
                  e > n && (this.width = n,
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
                  const {success: t, data: e} = await n.g.videoSignature({
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
                  Promise.all([Object(a.l)("tcplayer-4.1", "//imgcache.qq.com/open/qcloud/video/tcplayer/tcplayer.v4.1.min.js"), Object(a.l)("hls-0.13.2", "//imgcache.qq.com/open/qcloud/video/tcplayer/libs/hls.min.0.13.2m.js"), Object(a.m)("tcplayer-css", "//cloudcache.tencent-cloud.com/open/qcloud/video/tcplayer/tcplayer.css")]).then((t=>{
                      this.loading = !1,
                      this.videoId = Object(a.h)(),
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
  278: function(t, e, i) {
      "use strict";
      i(261)
  },
  280: function(t, e, i) {
      "use strict";
      var n = {
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
        , a = Object(s.a)(n, (function() {
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
      e.a = a.exports
  },
  284: function(t, e, i) {},
  286: function(t, e, i) {
      "use strict";
      i.d(e, "a", (function() {
          return n
      }
      ));
      var n = {
          inject: {
              vanField: {
                  default: null
              }
          },
          watch: {
              value: function() {
                  var t = this.vanField;
                  t && (t.resetValidation(),
                  t.validateWithTrigger("onChange"))
              }
          },
          created: function() {
              var t = this.vanField;
              t && !t.children && (t.children = this)
          }
      }
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
  303: function(t, e, i) {
      "use strict";
      var n = i(34)
        , s = i(23)
        , a = {
          name: "ResellCancelConfirmModal",
          components: {
              CommonModal: n.a
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
        , r = Object(o.a)(a, (function() {
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
      var n = {
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
                  let n = 1 === t ? "藏品" : "盲盒"
                    , s = "您确认以￥%1寄售%2吗？";
                  return 1 === e && (s = "您确认支付￥%1购买该%2吗？"),
                  s.replace("%1", i).replace("%2", n)
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
        , a = Object(s.a)(n, (function() {
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
      e.a = a.exports
  },
  305: function(t, e, i) {
      "use strict";
      var n = i(28);
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
        , a = {
          0: [0],
          2: [2],
          3: [22],
          4: [23]
      };
      var o = {
          computed: {
              ...Object(n.e)(["appConfig", "payChannel", "userInfo"]),
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
                      const n = a[e];
                      i.push(...n || [])
                  }
                  ));
                  const n = [];
                  return s.forEach((t=>{
                      i.includes(t.value) && n.push(t)
                  }
                  )),
                  n
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
  334: function(t, e, i) {
      "use strict";
      i(284)
  },
  340: function(t, e, i) {},
  341: function(t, e, i) {},
  342: function(t, e, i) {},
  343: function(t, e, i) {},
  344: function(t, e, i) {},
  345: function(t, e, i) {},
  346: function(t, e, i) {},
  347: function(t, e, i) {},
  348: function(t, e, i) {},
  349: function(t, e, i) {},
  351: function(t, e, i) {
      "use strict";
      var n = i(4)
        , s = i.n(n)
        , a = i(16)
        , o = i.n(a)
        , r = i(17)
        , l = i.n(r)
        , c = i(68)
        , u = i.n(c)
        , d = i(69)
        , h = i.n(d)
        , v = i(43)
        , p = i.n(v)
        , f = i(49)
        , m = i.n(f)
        , _ = i(0)
        , y = i.n(_)
        , b = i(2)
        , g = i(209)
        , C = i(23)
        , k = i(34)
        , w = i(354)
        , x = i(280)
        , S = i(256)
        , O = i(28)
        , M = i(5)
        , $ = i(208)
        , R = (i(340),
      i(524),
      i(245),
      i(525),
      i(619))
        , E = i(650)
        , I = i(620)
        , P = i(357)
        , N = i(7);
      function T(t) {
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
              var i, n = p()(t);
              if (e) {
                  var s = p()(this).constructor;
                  i = Reflect.construct(n, arguments, s)
              } else
                  i = n.apply(this, arguments);
              return h()(this, i)
          }
      }
      var B = function(t, e, i, n) {
          var s, a = arguments.length, o = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
          if ("object" === ("undefined" == typeof Reflect ? "undefined" : m()(Reflect)) && "function" == typeof Reflect.decorate)
              o = Reflect.decorate(t, e, i, n);
          else
              for (var r = t.length - 1; r >= 0; r--)
                  (s = t[r]) && (o = (a < 3 ? s(o) : a > 3 ? s(e, i, o) : s(e, i)) || o);
          return a > 3 && o && Object.defineProperty(e, i, o),
          o
      }
        , j = function(t) {
          u()(i, t);
          var e = T(i);
          function i() {
              var t;
              return o()(this, i),
              (t = e.apply(this, arguments)).payRatio = null,
              t.payType = [0],
              t
          }
          return l()(i, [{
              key: "created",
              value: function() {
                  this.payRatio = this.payChannel,
                  this.payType = this.handlePayType()
              }
          }, {
              key: "handlePayType",
              value: function() {
                  return (this.appConfig.payType || "0").split(",").map((function(t) {
                      return Number(t)
                  }
                  ))
              }
          }, {
              key: "handleClick",
              value: function(t) {
                  this.$store.commit("SET_PAY_CHANNEL", t),
                  this.$emit("close")
              }
          }, {
              key: "inWechat",
              get: function() {
                  return Object(N.k)()
              }
          }]),
          i
      }(b.default);
      B([g.a], j.prototype, "payChannel", void 0),
      B([g.a], j.prototype, "appConfig", void 0);
      var L = j = B([Object($.a)({
          name: "PayChannelSelect",
          components: {
              CommonModal: k.a,
              RadioGroup: R.a,
              Radio: E.a,
              CellGroup: I.a,
              Cell: P.a
          }
      })], j)
        , A = (i(526),
      i(10))
        , D = Object(A.a)(L, (function() {
          var t = this
            , e = t.$createElement
            , i = t._self._c || e;
          return i("common-modal", {
              attrs: {
                  "hide-foot": ""
              }
          }, [i("div", {
              staticClass: "spc-title",
              attrs: {
                  slot: "title"
              },
              slot: "title"
          }, [t._v("\n        选择支付方式\n    ")]), t._v(" "), i("div", {
              staticClass: "spc-content",
              attrs: {
                  slot: "content"
              },
              slot: "content"
          }, [i("radio-group", {
              model: {
                  value: t.payRatio,
                  callback: function(e) {
                      t.payRatio = e
                  },
                  expression: "payRatio"
              }
          }, [i("cell-group", [t.payType.includes(t.PaySwitchEnum.Card) ? i("cell", {
              attrs: {
                  title: "银行卡快捷支付",
                  clickable: ""
              },
              on: {
                  click: function(e) {
                      return t.handleClick(t.PayChannelEnum.YeePay)
                  }
              },
              scopedSlots: t._u([{
                  key: "icon",
                  fn: function() {
                      return [i("i", {
                          staticClass: "ibox-icon ibox-card"
                      })]
                  },
                  proxy: !0
              }, {
                  key: "right-icon",
                  fn: function() {
                      return [i("radio", {
                          attrs: {
                              name: t.PayChannelEnum.YeePay
                          }
                      })]
                  },
                  proxy: !0
              }], null, !1, 2577212265)
          }) : t._e(), t._v(" "), t.inWechat && t.payType.includes(t.PaySwitchEnum.WX) ? i("cell", {
              attrs: {
                  title: "微信支付",
                  clickable: ""
              },
              on: {
                  click: function(e) {
                      return t.handleClick(t.PayChannelEnum.WX)
                  }
              },
              scopedSlots: t._u([{
                  key: "icon",
                  fn: function() {
                      return [i("i", {
                          staticClass: "ibox-icon ibox-wxpay"
                      })]
                  },
                  proxy: !0
              }, {
                  key: "right-icon",
                  fn: function() {
                      return [i("radio", {
                          attrs: {
                              name: t.PayChannelEnum.WX
                          }
                      })]
                  },
                  proxy: !0
              }], null, !1, 4225380612)
          }) : t._e(), t._v(" "), t.payType.includes(t.PaySwitchEnum.AliPay) ? i("cell", {
              attrs: {
                  title: "支付宝",
                  clickable: ""
              },
              on: {
                  click: function(e) {
                      return t.handleClick(t.PayChannelEnum.Alipay)
                  }
              },
              scopedSlots: t._u([{
                  key: "icon",
                  fn: function() {
                      return [i("i", {
                          staticClass: "ibox-icon ibox-alipay"
                      })]
                  },
                  proxy: !0
              }, {
                  key: "right-icon",
                  fn: function() {
                      return [i("radio", {
                          attrs: {
                              name: t.PayChannelEnum.Alipay
                          }
                      })]
                  },
                  proxy: !0
              }], null, !1, 1631503436)
          }) : t._e()], 1)], 1)], 1)])
      }
      ), [], !1, null, "b9cf3378", null).exports
        , U = i(221)
        , W = i(304)
        , G = i(305)
        , H = {
          name: "MBoxPreOrderModal",
          components: {
              CommonModal: k.a,
              NumberInput: w.a,
              Checkbox: x.a,
              ImageObject: S.default,
              PayChannelSelector: G.a
          },
          props: {
              type: {
                  type: Number,
                  default: 0
              },
              resell: {
                  type: Boolean,
                  default: !1
              },
              data: {
                  type: Object,
                  default: ()=>{}
              }
          },
          created() {
              this.$store.dispatch("getUserInfo")
          },
          data: ()=>({
              num: 1,
              agreement: !0,
              ordering: !1
          }),
          computed: {
              ...Object(O.e)(["payChannel", "appConfig", "userInfo"]),
              serviceHref() {
                  return (this.appConfig || {}).serviceNoticeUrl
              },
              payChannelClass() {
                  return M.f[this.payChannel].class
              },
              payChannelTip() {
                  return `使用${M.f[this.payChannel].name}支付，点击更换支付方式>`
              },
              isResell() {
                  return this.data.onSale === M.c.Resell
              },
              leftNum() {
                  const {data: t} = this
                    , {sellNum: e, soldOutNum: i} = t
                    , n = e - i;
                  return n < 10 ? n : 10
              },
              price() {
                  const {data: t, type: e} = this
                    , {onePrice: i, drawPrice: n, onSale: s, price: a} = t;
                  return s === M.c.Resell ? `${a}` : `${0 === e ? i : n}`
              },
              onSellNum() {
                  const {data: t} = this
                    , {sellNum: e} = t;
                  return "发售<span>%s</span>份".replace("%s", e || "--")
              }
          },
          methods: {
              selectChannel() {
                  this.$modal.show(D, {}, {
                      name: "PayChannelSelectModal",
                      width: "480px",
                      height: "auto"
                  })
              },
              async doMakeOrder() {
                  if (this.payChannel === M.e.Alipay && Object(N.k)())
                      return this.hideModals(),
                      void this.$root.$emit(U.a.ShowMask, !0);
                  if (this.payChannel === M.e.WX && !Object(N.k)())
                      return void this.$toast("微信支付仅支持在微信内打开~");
                  const {id: t, gId: e, rule: i} = this.data
                    , {type: n, num: s, payChannel: a, price: o} = this;
                  let r = {};
                  this.ordering = !0,
                  r = this.isResell ? await C.k.createResellOrder({
                      gId: e,
                      payChannel: a,
                      price: o,
                      albumId: t,
                      type: 1,
                      subType: i && i.indexOf("1") ? 1 : 0
                  }) : await C.e.createOrder({
                      id: t,
                      type: n,
                      num: s,
                      gId: e,
                      price: o,
                      payChannel: a
                  }),
                  this.ordering = !1;
                  const {success: l, data: c, message: u, code: d} = r;
                  l ? this.pay(c) : (this.toast(u, "error"),
                  13038 === d && this.$nuxt.$emit("mbox.detail.reload"))
              },
              makeOrder() {
                  this.payChannel !== M.e.YeeWallet || 3 === (this.userInfo || {}).yeepayWalletProgress ? this.isResell ? this.$modal.show(W.a, {
                      type: 2,
                      action: 1,
                      price: this.price || "--"
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
                          this.doMakeOrder()
                      }
                  }) : this.doMakeOrder() : this.openWallet()
              },
              pay(t) {
                  const {orderStr: e, orderId: i} = t
                    , {onSale: n} = this.data;
                  this.$pay({
                      payChannel: this.isResell ? M.e.YeePay : this.payChannel,
                      orderId: i,
                      orderStr: e
                  }, (async t=>{
                      t || (this.$emit("close"),
                      n === M.c.Selling && await C.g.orderCallback(i),
                      await this.$router.push("/zh-cn/account/?type=1&sub=1"))
                  }
                  ))
              }
          }
      }
        , q = (i(527),
      Object(A.a)(H, (function() {
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
              staticClass: "mbox-detail"
          }, [i("div", {
              staticClass: "cover"
          }, [i("image-object", {
              attrs: {
                  src: t.baseUrl(t.data.orderPic),
                  alt: "盲盒订单封面"
              }
          })], 1), t._v(" "), i("div", {
              staticClass: "info"
          }, [i("div", {
              staticClass: "name"
          }, [t._v("\n                    " + t._s(t.data.name) + " " + t._s(t.data.extralName || "") + "\n                ")]), t._v(" "), i("div", {
              staticClass: "sell-num",
              domProps: {
                  innerHTML: t._s(t.onSellNum)
              }
          }), t._v(" "), i("div", {
              staticClass: "price"
          }, [t._v("\n                    ￥ " + t._s(t.price) + "\n                ")])])]), t._v(" "), 0 === t.type && t.data.onSale !== t.OnSaleEnum.Resell ? i("div", {
              staticClass: "buy-num"
          }, [i("div", {
              staticClass: "label"
          }, [i("span", {
              staticClass: "text"
          }, [t._v("\n                    数量\n                ")]), t._v(" "), i("span", {
              staticClass: "sub"
          }, [t._v("\n                    （单次购买不得超过10个）\n                ")])]), t._v(" "), i("number-input", {
              attrs: {
                  max: t.leftNum
              },
              model: {
                  value: t.num,
                  callback: function(e) {
                      t.num = e
                  },
                  expression: "num"
              }
          })], 1) : i("div", {
              staticClass: "buy-num"
          }, [i("div", {
              staticClass: "label"
          }, [i("span", {
              staticClass: "text"
          }, [t._v("\n                    数量\n                ")]), t._v(" "), i("span", {
              staticClass: "sub"
          }, [t._v("\n                    (1)\n                ")])])]), t._v(" "), i("pay-channel-selector"), t._v(" "), i("div", {
              staticClass: "agreement"
          }, [i("checkbox", {
              model: {
                  value: t.agreement,
                  callback: function(e) {
                      t.agreement = e
                  },
                  expression: "agreement"
              }
          }, [t._v("\n                我已同意iBox的\n                "), i("a", {
              attrs: {
                  target: "_blank",
                  href: t.serviceHref
              }
          }, [t._v("《服务协议》")])])], 1), t._v(" "), i("div", {
              staticClass: "btn-buy"
          }, [i("button", {
              attrs: {
                  disabled: !t.agreement || t.ordering
              },
              on: {
                  click: t.makeOrder
              }
          }, [t._v("\n                立即购买\n            ")])])], 1)])
      }
      ), [], !1, null, "38ff78f5", null).exports)
        , F = i(303)
        , z = i(255)
        , K = {
          name: "ReserveSuccessModal",
          components: {
              CommonModal: k.a,
              Clipboard: z.a
          },
          methods: {
              onSuccess() {
                  this.toast("复制成功", "success"),
                  this.$emit("close")
              },
              onError() {
                  this.toast("复制失败", "error")
              }
          }
      }
        , V = (i(528),
      Object(A.a)(K, (function() {
          var t = this
            , e = t.$createElement
            , i = t._self._c || e;
          return i("common-modal", [i("h3", {
              staticClass: "modal-title",
              attrs: {
                  slot: "title"
              },
              slot: "title"
          }, [t._v("\n        预约成功\n    ")]), t._v(" "), i("div", {
              staticClass: "modal-content",
              attrs: {
                  slot: "content"
              },
              slot: "content"
          }, [i("div", {
              staticClass: "tip"
          }, [t._v("\n            您可关注iBox 数字藏品公众号订阅更多信息\n        ")]), t._v(" "), i("clipboard", {
              staticClass: "copy",
              attrs: {
                  text: "iBox 数字藏品",
                  success: t.onSuccess,
                  error: t.onError
              }
          }, [i("button", [t._v("\n                点击复制公众号名称：iBox 数字藏品\n            ")])])], 1)])
      }
      ), [], !1, null, "1621a676", null).exports)
        , Y = i(355)
        , J = {
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
              ...Object(O.e)(["isMobile"])
          },
          methods: {
              onClick(t) {
                  this.$emit("click", t)
              }
          }
      }
        , X = (i(529),
      Object(A.a)(J, (function() {
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
      ), [], !1, null, "63f14ff9", null).exports);
      function Q(t) {
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
              var i, n = p()(t);
              if (e) {
                  var s = p()(this).constructor;
                  i = Reflect.construct(n, arguments, s)
              } else
                  i = n.apply(this, arguments);
              return h()(this, i)
          }
      }
      var Z = function(t, e, i, n) {
          var s, a = arguments.length, o = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
          if ("object" === ("undefined" == typeof Reflect ? "undefined" : m()(Reflect)) && "function" == typeof Reflect.decorate)
              o = Reflect.decorate(t, e, i, n);
          else
              for (var r = t.length - 1; r >= 0; r--)
                  (s = t[r]) && (o = (a < 3 ? s(o) : a > 3 ? s(e, i, o) : s(e, i)) || o);
          return a > 3 && o && Object.defineProperty(e, i, o),
          o
      }
        , tt = function(t) {
          u()(r, t);
          var e, i, n, a = Q(r);
          function r() {
              var t;
              return o()(this, r),
              (t = a.apply(this, arguments)).subOnSale = null,
              t
          }
          return l()(r, [{
              key: "drawButton",
              get: function() {
                  var t = this.data.drawNum;
                  return "%s开不重".replace("%s", t || "-")
              }
          }, {
              key: "doubleClass",
              get: function() {
                  return this.data.onSale === M.c.Resell ? "" : [1, "1", "0,1"].includes(this.data.rule) ? "double-btn" : ""
              }
          }, {
              key: "isOwner",
              get: function() {
                  var t = this.data.lockUid;
                  return this.isLogin && this.uid === t
              }
          }, {
              key: "loadState",
              value: (n = s()(y.a.mark((function t() {
                  var e, i, n, s, a, o;
                  return y.a.wrap((function(t) {
                      for (; ; )
                          switch (t.prev = t.next) {
                          case 0:
                              return e = this.data,
                              i = e.id,
                              n = e.gId,
                              t.next = 3,
                              C.e.state({
                                  id: i,
                                  gId: n
                              });
                          case 3:
                              s = t.sent,
                              a = s.success,
                              o = s.data,
                              a && o && (this.data.onSale = o.onSale,
                              this.subOnSale = o.subOnSale || 0);
                          case 7:
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
              key: "created",
              value: (i = s()(y.a.mark((function t() {
                  return y.a.wrap((function(t) {
                      for (; ; )
                          switch (t.prev = t.next) {
                          case 0:
                              this.subOnSale = this.data ? this.data.subOnSale : 0;
                          case 1:
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
              key: "reserve",
              value: (e = s()(y.a.mark((function t() {
                  return y.a.wrap((function(t) {
                      for (; ; )
                          switch (t.prev = t.next) {
                          case 0:
                              if (1 !== this.data.reserve) {
                                  t.next = 3;
                                  break
                              }
                              return this.toast("已预约", "success"),
                              t.abrupt("return");
                          case 3:
                              return t.next = 5,
                              C.e.reserve(this.data.id);
                          case 5:
                              t.sent.success ? (this.toast("预约成功", "success"),
                              this.data.reserve = 1,
                              this.$nuxt.$emit("mbox.detail.reload")) : this.toast("预约失败", "error");
                          case 8:
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
              key: "showReserveSuccessModal",
              value: function() {
                  this.$modal.show(V, {}, {
                      name: "ReserveSuccessModal",
                      height: "auto",
                      width: "400px",
                      clickToClose: !1
                  })
              }
          }, {
              key: "goMarket",
              value: function() {
                  var t = this.data.id;
                  this.$router.push("/zh-cn/market/?type=1&box=".concat(t))
              }
          }, {
              key: "onTimerEnd",
              value: function() {
                  this.$emit("timer-end")
              }
          }, {
              key: "showOrderModal",
              value: function(t, e) {
                  var i = this.data;
                  i.extralName = 1 === t ? "（".concat(this.drawButton, "）") : "",
                  this.$modal.show(q, {
                      type: t,
                      data: i,
                      resell: e
                  }, {
                      name: "MBoxPreOrderModal",
                      height: "auto",
                      width: "400px",
                      clickToClose: !1
                  })
              }
          }, {
              key: "goResell",
              value: function() {
                  var t = this.data
                    , e = t.id
                    , i = t.type
                    , n = t.gId;
                  0 !== t.resell ? this.$router.push("/zh-cn/resell/?type=1&id=".concat(e, "&label=").concat(i, "&gid=").concat(n)) : this.$toast("暂未开启寄售")
              }
          }, {
              key: "cancelResell",
              value: function() {
                  var t = this
                    , e = this.data
                    , i = e.id
                    , n = e.gId;
                  this.$modal.show(F.a, {
                      gId: n
                  }, {
                      name: "ResellCancelConfirmModal",
                      height: "auto",
                      width: "400px",
                      clickToClose: !1
                  }, {
                      success: function() {
                          var e = encodeURIComponent("/zh-cn/account/")
                            , s = encodeURIComponent("/zh-cn/mbox/item/?id=".concat(i, "&gid=").concat(n));
                          t.$router.push("/zh-cn/result/?type=4&cb1=".concat(e, "&cb2=").concat(s))
                      }
                  })
              }
          }, {
              key: "onIdChanged",
              value: function(t, e) {
                  this.loadState()
              }
          }, {
              key: "goOrder",
              value: function() {
                  var t = this.data.orderId;
                  this.$router.push("/zh-cn/order/?orderid=".concat(t))
              }
          }]),
          r
      }(b.default);
      Z([Object($.d)({
          required: !1,
          type: String,
          default: ""
      })], tt.prototype, "customClass", void 0),
      Z([Object($.d)({
          required: !0,
          type: Object,
          default: function() {
              return {}
          }
      })], tt.prototype, "data", void 0),
      Z([g.a], tt.prototype, "isMobile", void 0),
      Z([g.a], tt.prototype, "isLogin", void 0),
      Z([g.a], tt.prototype, "uid", void 0),
      Z([Object($.f)("data.id")], tt.prototype, "onIdChanged", null);
      var et = tt = Z([Object($.a)({
          components: {
              TextTimer: Y.a,
              ButtonView: X
          }
      })], tt)
        , it = (i(530),
      Object(A.a)(et, (function() {
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
              class: ["mbox-buy-button", t.doubleClass, t.customClass],
              style: {
                  "pointer-events": t.isMobile ? "auto" : "none"
              }
          }, [t.data.onSale === t.OnSaleEnum.SoldOut ? [t.data.isOwner ? i("button-view", {
              attrs: {
                  "show-price": !1
              },
              on: {
                  click: t.goResell
              }
          }, [t._v("\n            立即寄售\n        ")]) : i("button-view", {
              attrs: {
                  "show-price": !1
              },
              on: {
                  click: t.goMarket
              }
          }, [t._v("\n            去市场看看\n        ")])] : t._e(), t._v(" "), t.data.onSale === t.OnSaleEnum.Selling ? [[1, "1", "0,1"].includes(t.data.rule) ? [i("div", {
              staticClass: "multi-box"
          }, [i("button-view", {
              attrs: {
                  "show-price": !1
              },
              on: {
                  click: function(e) {
                      return t.showOrderModal(0)
                  }
              }
          }, [t._v("\n                    购买单品 " + t._s(t.isMobile ? "| ￥" + t.data.onePrice : "") + "\n                ")]), t._v(" "), i("button-view", {
              attrs: {
                  disabled: 1 === t.subOnSale
              },
              on: {
                  click: function(e) {
                      return t.showOrderModal(1)
                  }
              }
          }, [0 === t.subOnSale ? [t._v("\n                        " + t._s(t.drawButton) + " | "), i("span", [t._v("￥" + t._s(t.data.drawPrice))])] : [t._v("\n                        " + t._s(t.drawButton) + "已售罄\n                    ")]], 2)], 1)] : [i("button-view", {
              attrs: {
                  "show-price": !1
              },
              on: {
                  click: function(e) {
                      return t.showOrderModal(0)
                  }
              }
          }, [t._v("\n                立即购买\n            ")])]] : t._e(), t._v(" "), t.data.onSale === t.OnSaleEnum.Timing ? [i("button-view", {
              attrs: {
                  disabled: 1 === t.data.reserve,
                  "show-price": !1
              },
              on: {
                  click: t.reserve
              }
          }, [t._v("\n            " + t._s(0 === t.data.reserve ? "预约" : "已预约") + "\n        ")])] : t._e(), t._v(" "), t.data.onSale === t.OnSaleEnum.Resell ? [t.data.isOwner ? i("button-view", {
              attrs: {
                  "show-price": !1
              },
              on: {
                  click: t.cancelResell
              }
          }, [t._v("\n            取消寄售\n        ")]) : i("button-view", {
              attrs: {
                  "show-price": !1
              },
              on: {
                  click: function(e) {
                      return t.showOrderModal(t.data.type, !0)
                  }
              }
          }, [i("div", [t._v("立即购买")])])] : t._e(), t._v(" "), [t.OnSaleEnum.Lock, t.OnSaleEnum.Obligation].includes(t.data.onSale) ? [t.isOwner ? i("button-view", {
              on: {
                  click: t.goOrder
              }
          }, [t._v("\n            立即支付\n        ")]) : i("button-view", {
              attrs: {
                  disabled: !0
              }
          }, [t._v("\n            盲盒已锁定，待支付\n        ")])] : t._e()], 2)
      }
      ), [], !1, null, "8ba5ab8e", null));
      e.a = it.exports
  },
  354: function(t, e, i) {
      "use strict";
      var n = {
          name: "UIInputNumber",
          model: {
              prop: "value",
              event: "change"
          },
          props: {
              min: {
                  type: Number,
                  default: 1
              },
              max: {
                  type: Number,
                  default: 10
              },
              value: {
                  type: [Number, String],
                  default: 10
              }
          },
          data() {
              return {
                  num: this.value
              }
          },
          computed: {
              prevDisabled() {
                  return this.num <= this.min
              },
              nextDisabled() {
                  return this.num >= this.max
              }
          },
          methods: {
              onInput(t) {
                  let e = t.target.value;
                  this.num = e.replace(/[^\d]/g, "")
              },
              prev(t) {
                  const {num: e, min: i} = this;
                  e - 1 < i && this.toast("最小购买数量为1", "warning"),
                  this.num = e - 1,
                  t.preventDefault()
              },
              next(t) {
                  const {num: e, max: i} = this;
                  e + 1 > i && this.toast("最大购买数量为10", "warning"),
                  this.num = e + 1,
                  t.preventDefault()
              },
              onBlur() {
                  "" === this.num && (this.num = this.min)
              }
          },
          watch: {
              num(t) {
                  if ("" === t)
                      return;
                  const {max: e, min: i} = this;
                  t > e ? this.num = e : t < i ? this.num = i : this.$emit("change", t)
              }
          }
      }
        , s = (i(334),
      i(10))
        , a = Object(s.a)(n, (function() {
          var t = this
            , e = t.$createElement
            , i = t._self._c || e;
          return i("div", {
              staticClass: "input-number"
          }, [i("button", {
              staticClass: "btn btn-prev",
              attrs: {
                  disabled: t.prevDisabled
              },
              on: {
                  click: t.prev
              }
          }), t._v(" "), i("input", {
              directives: [{
                  name: "model",
                  rawName: "v-model",
                  value: t.num,
                  expression: "num"
              }],
              attrs: {
                  type: "text"
              },
              domProps: {
                  value: t.num
              },
              on: {
                  input: [function(e) {
                      e.target.composing || (t.num = e.target.value)
                  }
                  , t.onInput],
                  blur: t.onBlur
              }
          }), t._v(" "), i("button", {
              staticClass: "btn btn-next",
              attrs: {
                  disabled: t.nextDisabled
              },
              on: {
                  click: t.next
              }
          })])
      }
      ), [], !1, null, "0a26e063", null);
      e.a = a.exports
  },
  355: function(t, e, i) {
      "use strict";
      var n = {
          props: {
              time: {
                  type: Number,
                  default: 0
              }
          },
          data: ()=>({
              now: (new Date).getTime()
          }),
          computed: {
              text() {
                  const {time: t, now: e} = this
                    , i = t - e;
                  if (i < 1e3)
                      return "--";
                  return `${Math.floor(i / 1e3 / 60 / 60)}h${Math.floor(i / 1e3 / 60 % 60)}m${Math.floor(i / 1e3 % 60)}s`
              }
          },
          created() {
              this.startTimer()
          },
          beforeDestroy() {
              this.stopTimer()
          },
          methods: {
              startTimer() {
                  this.timer = setInterval((()=>{
                      this.now = (new Date).getTime(),
                      this.time - this.now < 1e3 && this.end()
                  }
                  ), 1e3)
              },
              stopTimer() {
                  clearInterval(this.timer)
              },
              end() {
                  this.stopTimer(),
                  this.$emit("end")
              }
          }
      }
        , s = i(10)
        , a = Object(s.a)(n, (function() {
          var t = this
            , e = t.$createElement;
          return (t._self._c || e)("div", {
              staticClass: "text-timer"
          }, [t._v("\n    " + t._s(t.text) + "\n")])
      }
      ), [], !1, null, null, null);
      e.a = a.exports
  },
  521: function(t, e, i) {
      "use strict";
      i(341)
  },
  522: function(t, e, i) {
      "use strict";
      i(342)
  },
  523: function(t, e, i) {
      "use strict";
      i(343)
  },
  524: function(t, e, i) {},
  525: function(t, e, i) {},
  526: function(t, e, i) {
      "use strict";
      i(344)
  },
  527: function(t, e, i) {
      "use strict";
      i(345)
  },
  528: function(t, e, i) {
      "use strict";
      i(346)
  },
  529: function(t, e, i) {
      "use strict";
      i(347)
  },
  530: function(t, e, i) {
      "use strict";
      i(348)
  },
  531: function(t, e, i) {
      "use strict";
      i(349)
  },
  535: function(t, e, i) {
      "use strict";
      var n = i(23)
        , s = i(34)
        , a = i(28)
        , o = {
          name: "MBoxOrderListModal",
          components: {
              CommonModal: s.a
          },
          props: {
              id: {
                  type: [String, Number],
                  default: ""
              },
              gId: {
                  type: [String, Number],
                  default: ""
              },
              showDetail: {
                  type: Boolean,
                  default: !1
              }
          },
          data: ()=>({
              list: [],
              loading: !1,
              noMore: !1,
              size: 50,
              direction: 1,
              lastItem: {
                  operationTime: 0,
                  orderId: 0,
                  remark: null,
                  status: null,
                  userId: null,
                  userName: null,
                  transactionHash: null
              }
          }),
          created() {
              this.load()
          },
          computed: {
              ...Object(a.e)("ethereum", ["chain"])
          },
          methods: {
              async load() {
                  this.loading = !0;
                  const {id: t, lastItem: e, size: i, direction: s} = this
                    , {success: a, data: o} = await n.e.orderList({
                      albumId: t,
                      fromId: e.id || 0,
                      direction: s,
                      size: i + 1,
                      operationTime: e.operationTime
                  });
                  if (this.loading = !1,
                  a) {
                      const t = o.list || [];
                      t.length ? (this.noMore = t.length <= i,
                      this.list.push(...t.slice(0, i)),
                      this.lastItem = this.list[this.list.length - 1] || {}) : this.noMore = !0
                  } else
                      this.noMore = !0
              },
              loadMore() {
                  this.load()
              }
          }
      }
        , r = (i(521),
      i(10))
        , l = Object(r.a)(o, (function() {
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
              staticClass: "list list-mobile"
          }, [t._l(t.list, (function(e, n) {
              return i("a", {
                  key: "" + e.orderId + n,
                  staticClass: "item"
              }, [i("div", {
                  staticClass: "detail"
              }, [i("div", {
                  staticClass: "name"
              }, [t._v("\n                        " + t._s(e.userName) + "\n                    ")]), t._v(" "), i("div", {
                  staticClass: "time"
              }, [t._v("\n                        " + t._s(t._f("t2d")(e.operationTime)) + "\n                    ")])]), t._v(" "), i("div", {
                  staticClass: "mbox-name"
              }, [t._v("\n                    " + t._s(e.remark) + "\n                ")]), t._v(" "), i("div", {
                  directives: [{
                      name: "show",
                      rawName: "v-show",
                      value: t.showDetail,
                      expression: "showDetail"
                  }],
                  staticClass: "arrow"
              })])
          }
          )), t._v(" "), t.loading ? i("div", {
              staticClass: "loading"
          }) : t._e(), t._v(" "), t.noMore ? t._e() : [i("div", {
              directives: [{
                  name: "show",
                  rawName: "v-show",
                  value: !t.loading && t.list.length,
                  expression: "!loading && list.length"
              }],
              staticClass: "load-more"
          }, [i("a", {
              on: {
                  click: t.loadMore
              }
          }, [i("span", {
              staticClass: "text"
          }, [t._v("\n                            展开更多\n                        ")]), t._v(" "), i("span", {
              staticClass: "icon"
          })])])], t._v(" "), t.loading || t.list.length ? t._e() : i("div", {
              staticClass: "no-data"
          }, [i("div", {
              staticClass: "icon"
          }), t._v(" "), i("div", {
              staticClass: "text"
          }, [t._v("\n                    暂无记录\n                ")])])], 2)])])
      }
      ), [], !1, null, "5459973c", null).exports
        , c = {
          name: "MBoxOrderList",
          props: {
              id: {
                  type: [Number, String],
                  default: ""
              },
              gId: {
                  type: [Number, String],
                  default: ""
              },
              showDetail: {
                  type: Boolean,
                  default: !1
              },
              show: {
                  type: Boolean,
                  default: !0
              }
          },
          data: ()=>({
              list: [],
              loading: !0,
              noMore: !1,
              size: 5,
              direction: 1,
              lastItem: {
                  operationTime: 0,
                  orderId: 0,
                  remark: null,
                  status: null,
                  userId: null,
                  userName: null,
                  transactionHash: null
              }
          }),
          created() {
              this.load()
          },
          computed: {
              ...Object(a.e)("ethereum", ["chain"])
          },
          methods: {
              async load() {
                  this.loading = !0;
                  const {id: t, lastItem: e, direction: i, size: s} = this
                    , {success: a, data: o} = await n.e.orderList({
                      albumId: t,
                      direction: i,
                      fromId: e.id,
                      operationTime: e.operationTime,
                      size: s + 1
                  });
                  if (this.loading = !1,
                  a && o) {
                      const t = o.list || [];
                      t.length ? (this.noMore = t.length <= s,
                      this.list.push(...t.slice(0, s)),
                      this.lastItem = this.list[this.list.length - 1] || {}) : this.noMore = !0
                  } else
                      this.list = [],
                      this.noMore = !0
              },
              showTradeModal() {
                  this.$modal.show(l, {
                      id: this.id,
                      gId: this.gId
                  }, {
                      name: "OrderListModal",
                      height: "auto"
                  })
              }
          }
      }
        , u = (i(522),
      Object(r.a)(c, (function() {
          var t = this
            , e = t.$createElement
            , i = t._self._c || e;
          return i("div", {
              directives: [{
                  name: "show",
                  rawName: "v-show",
                  value: t.list.length && t.show,
                  expression: "list.length && show"
              }],
              staticClass: "order-list"
          }, [i("div", {
              directives: [{
                  name: "show",
                  rawName: "v-show",
                  value: !t.loading && !t.noMore,
                  expression: "!loading && !noMore"
              }],
              staticClass: "extend-button"
          }, [i("div", {
              staticClass: "btn-show-trade-modal",
              on: {
                  click: t.showTradeModal
              }
          }, [i("div", {
              staticClass: "text"
          }, [t._v("\n                查看更多\n            ")]), t._v(" "), i("div", {
              staticClass: "icon"
          })])]), t._v(" "), i("div", {
              staticClass: "list-title"
          }, [t._v("\n        寄售记录\n    ")]), t._v(" "), i("div", {
              staticClass: "list list-pc"
          }, [i("table", [t._m(0), t._v(" "), i("tbody", t._l(t.list, (function(e, n) {
              return i("tr", {
                  key: "" + e.orderId + n
              }, [i("td", {
                  staticClass: "row-user"
              }, [t._v("\n                        " + t._s(e.userName) + "\n                    ")]), t._v(" "), i("td", [t._v("\n                        " + t._s(e.remark) + "\n                    ")]), t._v(" "), i("td", {
                  staticClass: "row-time"
              }, [t._v("\n                        " + t._s(t._f("t2d")(e.operationTime)) + "\n                    ")])])
          }
          )), 0)]), t._v(" "), i("div", {
              directives: [{
                  name: "show",
                  rawName: "v-show",
                  value: t.loading,
                  expression: "loading"
              }],
              staticClass: "loading"
          }), t._v(" "), i("div", {
              directives: [{
                  name: "show",
                  rawName: "v-show",
                  value: !t.loading && !t.noMore,
                  expression: "!loading && !noMore"
              }],
              staticClass: "load-more",
              on: {
                  click: t.showWechatGuide
              }
          }, [i("span", {
              staticClass: "text"
          }, [t._v("\n                展开更多\n            ")]), t._v(" "), i("span", {
              staticClass: "icon"
          })])]), t._v(" "), i("div", {
              staticClass: "list list-mobile"
          }, [t._l(t.list, (function(e, n) {
              return i("a", {
                  key: "" + e.orderId + n,
                  staticClass: "item"
              }, [i("div", {
                  staticClass: "detail"
              }, [i("div", {
                  staticClass: "name"
              }, [t._v("\n                    " + t._s(e.userName) + "\n                ")]), t._v(" "), i("div", {
                  staticClass: "time"
              }, [t._v("\n                    " + t._s(t._f("t2d")(e.operationTime)) + "\n                ")])]), t._v(" "), i("div", {
                  staticClass: "mbox-name"
              }, [t._v("\n                " + t._s(e.remark) + "\n            ")]), t._v(" "), i("div", {
                  directives: [{
                      name: "show",
                      rawName: "v-show",
                      value: t.showDetail,
                      expression: "showDetail"
                  }],
                  staticClass: "arrow"
              })])
          }
          )), t._v(" "), t.loading ? i("div", {
              staticClass: "loading"
          }) : t._e()], 2)])
      }
      ), [function() {
          var t = this
            , e = t.$createElement
            , i = t._self._c || e;
          return i("thead", [i("tr", [i("th", {
              staticClass: "row-user"
          }, [t._v("\n                        用户\n                    ")]), t._v(" "), i("th", [t._v("\n                        操作\n                    ")]), t._v(" "), i("th", {
              staticClass: "row-time"
          }, [t._v("\n                        时间\n                    ")])])])
      }
      ], !1, null, "757a66fc", null));
      e.a = u.exports
  },
  537: function(t, e, i) {
      "use strict";
      var n = {
          name: "MBoxItemList",
          components: {
              BoxRarity: i(241).a
          },
          props: {
              list: {
                  type: Array,
                  default: ()=>[]
              }
          }
      }
        , s = (i(523),
      i(10))
        , a = Object(s.a)(n, (function() {
          var t = this
            , e = t.$createElement
            , i = t._self._c || e;
          return i("div", {
              staticClass: "level-list"
          }, [t._m(0), t._v(" "), i("div", {
              staticClass: "list"
          }, [t.list && t.list.length ? t._e() : i("div", {
              staticClass: "item-default"
          }), t._v(" "), t._l(t.list, (function(e) {
              return i("div", {
                  key: e.id,
                  class: "item-wrapper level" + e.rarity
              }, [i("div", {
                  staticClass: "item"
              }, [i("div", {
                  staticClass: "detail"
              }, [i("div", {
                  staticClass: "name"
              }, [e.rarity ? i("box-rarity", {
                  attrs: {
                      rarity: e.rarity
                  }
              }) : t._e(), t._v(" "), i("div", {
                  staticClass: "text"
              }, [t._v("\n                            " + t._s(0 === e.displayPrice ? "神秘隐藏款" : e.name) + "\n                        ")])], 1), t._v(" "), 1 === e.displayPrice ? i("div", {
                  staticClass: "price"
              }, [i("span", {
                  staticClass: "price-label"
              }, [t._v("\n                            原价\n                        ")]), t._v(" "), i("span", {
                  staticClass: "price-unit"
              }, [t._v("\n                            ￥\n                        ")]), t._v(" "), i("span", {
                  staticClass: "price-value"
              }, [t._v("\n                            " + t._s(e.price) + "\n                        ")])]) : t._e()]), t._v(" "), e.probability ? i("div", {
                  staticClass: "rate"
              }, [i("span", {
                  staticClass: "rate-label"
              }, [t._v("\n                        概率：\n                    ")]), t._v(" "), i("span", {
                  staticClass: "rate-value"
              }, [t._v("\n                        " + t._s(e.percentage) + "\n                    ")])]) : t._e()])])
          }
          ))], 2)])
      }
      ), [function() {
          var t = this
            , e = t.$createElement
            , i = t._self._c || e;
          return i("div", {
              staticClass: "level-list-title"
          }, [i("div", {
              staticClass: "title"
          }, [t._v("\n            作品描述\n        ")]), t._v(" "), i("div", {
              staticClass: "sub-title"
          }, [t._v("\n            您可能抽到以下作品中的1个\n        ")])])
      }
      ], !1, null, "aa303af4", null);
      e.a = a.exports
  },
  538: function(t, e, i) {
      "use strict";
      var n = i(16)
        , s = i.n(n)
        , a = i(17)
        , o = i.n(a)
        , r = i(68)
        , l = i.n(r)
        , c = i(69)
        , u = i.n(c)
        , d = i(43)
        , h = i.n(d)
        , v = i(49)
        , p = i.n(v)
        , f = i(2)
        , m = i(351)
        , _ = i(208)
        , y = i(209)
        , b = i(355);
      function g(t) {
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
              var i, n = h()(t);
              if (e) {
                  var s = h()(this).constructor;
                  i = Reflect.construct(n, arguments, s)
              } else
                  i = n.apply(this, arguments);
              return u()(this, i)
          }
      }
      var C = function(t, e, i, n) {
          var s, a = arguments.length, o = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
          if ("object" === ("undefined" == typeof Reflect ? "undefined" : p()(Reflect)) && "function" == typeof Reflect.decorate)
              o = Reflect.decorate(t, e, i, n);
          else
              for (var r = t.length - 1; r >= 0; r--)
                  (s = t[r]) && (o = (a < 3 ? s(o) : a > 3 ? s(e, i, o) : s(e, i)) || o);
          return a > 3 && o && Object.defineProperty(e, i, o),
          o
      }
        , k = function(t) {
          l()(i, t);
          var e = g(i);
          function i() {
              return s()(this, i),
              e.apply(this, arguments)
          }
          return o()(i, [{
              key: "isOwner",
              get: function() {
                  var t = this.data.ownerId;
                  return this.isLogin && this.uid === t
              }
          }, {
              key: "drawButton",
              get: function() {
                  var t = this.data.drawNum;
                  return "%s开不重".replace("%s", t || "-")
              }
          }, {
              key: "onTimerEnd",
              value: function(t) {
                  return t
              }
          }]),
          i
      }(f.default);
      C([Object(_.d)({
          required: !0,
          type: Object,
          default: {}
      })], k.prototype, "data", void 0),
      C([y.a], k.prototype, "isLogin", void 0),
      C([y.a], k.prototype, "uid", void 0),
      C([Object(_.b)("timer-end")], k.prototype, "onTimerEnd", null);
      var w = k = C([Object(_.a)({
          components: {
              MboxBuyButton: m.a,
              TextTimer: b.a
          }
      })], k)
        , x = (i(531),
      i(10))
        , S = Object(x.a)(w, (function() {
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
              staticClass: "action-bar",
              class: {
                  "hide-left": [t.OnSaleEnum.Lock, t.OnSaleEnum.Obligation].includes(t.data.onSale)
              }
          }, [i("div", {
              staticClass: "left-box"
          }, [t.data.onSale === t.OnSaleEnum.SoldOut ? [t.isOwner ? t._e() : i("div", {
              staticClass: "price price-disabled"
          }, [i("div", [t._v("￥"), i("span", [t._v(t._s(t.data.onePrice))])]), t._v(" "), i("div", [t._v("首发售罄")])])] : t._e(), t._v(" "), t.data.onSale === t.OnSaleEnum.Selling ? [[1, "1", "0,1"].includes(t.data.rule) ? t._e() : i("div", {
              staticClass: "price"
          }, [t._v("\n                ￥"), i("span", [t._v(t._s(t.data.onePrice))])])] : t._e(), t._v(" "), t.data.onSale === t.OnSaleEnum.Timing ? [i("div", {
              staticClass: "price"
          }, [i("div", [t._v("\n                    ￥"), i("span", [t._v(t._s(t.data.onePrice))])]), t._v(" "), i("text-timer", {
              attrs: {
                  time: t.data.onSaleTime
              },
              on: {
                  end: t.onTimerEnd
              }
          })], 1)] : t._e(), t._v(" "), t.data.onSale === t.OnSaleEnum.Resell ? [i("div", {
              staticClass: "price"
          }, [i("div", [t._v("\n                    ￥"), i("span", [t._v(t._s(t.data.price))])]), t._v(" "), i("div", {
              staticClass: "label"
          }, [t._v("\n                    " + t._s(0 === t.data.type ? "单品" : t.drawButton) + "\n                ")])])] : t._e()], 2), t._v(" "), i("div", {
              staticClass: "button"
          }, [i("mbox-buy-button", {
              attrs: {
                  data: t.data
              }
          })], 1)])
      }
      ), [], !1, null, "67a2c4e7", null);
      e.a = S.exports
  },
  619: function(t, e, i) {
      "use strict";
      var n = i(42)
        , s = i(286)
        , a = i(262)
        , o = Object(n.a)("radio-group")
        , r = o[0]
        , l = o[1];
      e.a = r({
          mixins: [Object(a.b)("vanRadio"), s.a],
          props: {
              value: null,
              disabled: Boolean,
              direction: String,
              checkedColor: String,
              iconSize: [Number, String]
          },
          watch: {
              value: function(t) {
                  this.$emit("change", t)
              }
          },
          render: function() {
              var t = arguments[0];
              return t("div", {
                  class: l([this.direction]),
                  attrs: {
                      role: "radiogroup"
                  }
              }, [this.slots()])
          }
      })
  },
  620: function(t, e, i) {
      "use strict";
      var n = i(29)
        , s = i.n(n)
        , a = i(42)
        , o = i(25)
        , r = i(260)
        , l = Object(a.a)("cell-group")
        , c = l[0]
        , u = l[1];
      function d(t, e, i, n) {
          var a, l = t("div", s()([{
              class: [u({
                  inset: e.inset
              }), (a = {},
              a[r.c] = e.border,
              a)]
          }, Object(o.b)(n, !0)]), [null == i.default ? void 0 : i.default()]);
          return e.title || i.title ? t("div", {
              key: n.data.key
          }, [t("div", {
              class: u("title", {
                  inset: e.inset
              })
          }, [i.title ? i.title() : e.title]), l]) : l
      }
      d.props = {
          title: String,
          inset: Boolean,
          border: {
              type: Boolean,
              default: !0
          }
      },
      e.a = c(d)
  },
  639: function(t, e, i) {},
  650: function(t, e, i) {
      "use strict";
      var n, s, a, o, r = i(42), l = i(71), c = i(286), u = i(262), d = i(40), h = Object(r.a)("radio"), v = h[0], p = h[1];
      e.a = v({
          mixins: [(n = {
              bem: p,
              role: "radio",
              parent: "vanRadio"
          },
          s = n.parent,
          a = n.bem,
          o = n.role,
          {
              mixins: [Object(u.a)(s), c.a],
              props: {
                  name: null,
                  value: null,
                  disabled: Boolean,
                  iconSize: [Number, String],
                  checkedColor: String,
                  labelPosition: String,
                  labelDisabled: Boolean,
                  shape: {
                      type: String,
                      default: "round"
                  },
                  bindGroup: {
                      type: Boolean,
                      default: !0
                  }
              },
              computed: {
                  disableBindRelation: function() {
                      return !this.bindGroup
                  },
                  isDisabled: function() {
                      return this.parent && this.parent.disabled || this.disabled
                  },
                  direction: function() {
                      return this.parent && this.parent.direction || null
                  },
                  iconStyle: function() {
                      var t = this.checkedColor || this.parent && this.parent.checkedColor;
                      if (t && this.checked && !this.isDisabled)
                          return {
                              borderColor: t,
                              backgroundColor: t
                          }
                  },
                  tabindex: function() {
                      return this.isDisabled || "radio" === o && !this.checked ? -1 : 0
                  }
              },
              methods: {
                  onClick: function(t) {
                      var e = this
                        , i = t.target
                        , n = this.$refs.icon
                        , s = n === i || (null == n ? void 0 : n.contains(i));
                      this.isDisabled || !s && this.labelDisabled ? this.$emit("click", t) : (this.toggle(),
                      setTimeout((function() {
                          e.$emit("click", t)
                      }
                      )))
                  },
                  genIcon: function() {
                      var t = this.$createElement
                        , e = this.checked
                        , i = this.iconSize || this.parent && this.parent.iconSize;
                      return t("div", {
                          ref: "icon",
                          class: a("icon", [this.shape, {
                              disabled: this.isDisabled,
                              checked: e
                          }]),
                          style: {
                              fontSize: Object(d.a)(i)
                          }
                      }, [this.slots("icon", {
                          checked: e
                      }) || t(l.a, {
                          attrs: {
                              name: "success"
                          },
                          style: this.iconStyle
                      })])
                  },
                  genLabel: function() {
                      var t = this.$createElement
                        , e = this.slots();
                      if (e)
                          return t("span", {
                              class: a("label", [this.labelPosition, {
                                  disabled: this.isDisabled
                              }])
                          }, [e])
                  }
              },
              render: function() {
                  var t = arguments[0]
                    , e = [this.genIcon()];
                  return "left" === this.labelPosition ? e.unshift(this.genLabel()) : e.push(this.genLabel()),
                  t("div", {
                      attrs: {
                          role: o,
                          tabindex: this.tabindex,
                          "aria-checked": String(this.checked)
                      },
                      class: a([{
                          disabled: this.isDisabled,
                          "label-disabled": this.labelDisabled
                      }, this.direction]),
                      on: {
                          click: this.onClick
                      }
                  }, [e])
              }
          })],
          computed: {
              currentValue: {
                  get: function() {
                      return this.parent ? this.parent.value : this.value
                  },
                  set: function(t) {
                      (this.parent || this).$emit("input", t)
                  }
              },
              checked: function() {
                  return this.currentValue === this.name
              }
          },
          methods: {
              toggle: function() {
                  this.currentValue = this.name
              }
          }
      })
  },
  775: function(t, e, i) {
      "use strict";
      i(639)
  },
  823: function(t, e, i) {
      "use strict";
      i.r(e);
      var n = i(219)
        , s = i(535)
        , a = i(537)
        , o = i(28)
        , r = i(23)
        , l = i(273)
        , c = i(308)
        , u = i.n(c)
        , d = i(5)
        , h = i(351)
        , v = i(538)
        , p = {
          name: "MBoxDetail",
          components: {
              ResponsiveLayout: n.a,
              OrderList: s.a,
              ItemList: a.a,
              MboxBuyButton: h.a,
              MboxActionBar: v.a,
              VideoPlayer: l.a
          },
          computed: {
              ...Object(o.e)(["isMobile"]),
              ...Object(o.e)("ethereum", ["chain"]),
              showOrderList() {
                  const {onSale: t} = this.data;
                  return t !== d.c.Resell
              },
              paddingBottom() {
                  const {isMobile: t} = this;
                  return t ? 120 : 0
              },
              isResell() {
                  const {resell: t} = this.$route.query;
                  return 1 === Number(t)
              },
              id() {
                  const {query: t} = this.$route;
                  return t.id
              },
              gid() {
                  const {query: t} = this.$route;
                  return t.gid
              },
              detailsPic() {
                  const {data: t} = this
                    , {detailsPic: e} = t;
                  let i = {};
                  if (!e)
                      return i;
                  try {
                      i = JSON.parse(e)
                  } catch (n) {}
                  return i
              }
          },
          data: ()=>({
              data: {}
          }),
          mounted() {
              this.load(),
              this.$nuxt.$on("mbox.detail.reload", this.load)
          },
          beforeDestroy() {
              this.$nuxt.$off("mbox.detail.reload", this.load),
              this.viewer && this.viewer.destroy()
          },
          methods: {
              async load() {
                  const {success: t, data: e} = await r.e.info({
                      id: this.id,
                      gId: this.gid
                  });
                  this.data = t && e || {}
              },
              initShare() {
                  const {data: t} = this
                    , {onSale: e, orderPic: i, name: n, ownerName: s, ownerAvatar: a} = t;
                  if (e === d.c.Resell) {
                      const t = `${s || "--"}寄售了一个${n}盲盒，速来抢购。`;
                      this.initWxShare({
                          title: t,
                          timeLinetitle: t,
                          link: location.href,
                          imgUrl: a || location.origin + i
                      })
                  } else {
                      let t = "";
                      t = e === d.c.Selling ? `iBox盲盒 | ${n}` : e === d.c.Timing ? `iBox盲盒 | ${n}即将开售，速来预约。` : `iBox盲盒 | ${n}`,
                      this.initWxShare({
                          title: t,
                          timeLinetitle: t,
                          link: location.href,
                          imgUrl: location.origin + i
                      })
                  }
              },
              zoomImg(t) {
                  t && t.target && "IMG" === t.target.nodeName && (this.imgArr = t.target.src,
                  this.$nextTick((()=>{
                      let e = new u.a(t.target,{
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
              },
              onTimerEnd() {
                  this.data.onSale = d.c.Selling
              }
          },
          watch: {
              "data.id"(t) {
                  this.initShare();
                  const {data: e} = this;
                  this.$track.pageView("commoditypage_view", {
                      commodity_type: "mbox",
                      commodity_id: "" + e.id,
                      commodity_name: e.name,
                      commodity_serialnumber: null,
                      commodity_price_amount: [d.c.Resell, d.c.Selling].includes(e.onSale) ? Number(e.onePrice || e.drawPrice) : null,
                      commodity_price_currency: [d.c.Resell, d.c.Selling].includes(e.onSale) ? "rmb" : null,
                      creator_id: null,
                      creator_name: null,
                      brand_id: null,
                      brand_name: null,
                      owner_user_id: null,
                      owner_name_nick: null
                  })
              }
          }
      }
        , f = (i(775),
      i(10))
        , m = Object(f.a)(p, (function() {
          var t = this
            , e = t.$createElement
            , i = t._self._c || e;
          return i("responsive-layout", {
              staticClass: "layout",
              attrs: {
                  "padding-bottom": t.paddingBottom
              }
          }, [i("div", {
              staticClass: "page-mbox-detail"
          }, [i("div", {
              staticClass: "cover-detail"
          }, [i("div", {
              staticClass: "cover"
          }, [i("div", {
              staticClass: "background"
          }, [i("div", {
              staticClass: "bg1"
          }), t._v(" "), i("div", {
              staticClass: "bg2"
          }), t._v(" "), i("div", {
              staticClass: "bg3"
          })]), t._v(" "), i("div", {
              staticClass: "cover-content"
          }, [t.detailsPic.url ? [t.detailsPic.type.includes("video") ? i("video-player", {
              attrs: {
                  data: t.detailsPic
              }
          }) : i("img", {
              attrs: {
                  alt: "图片",
                  src: t.baseUrl(t.detailsPic.url + "?style=st6")
              },
              on: {
                  click: t.zoomImg
              }
          })] : t._e()], 2)]), t._v(" "), i("div", {
              staticClass: "info-detail"
          }, [i("div", {
              staticClass: "name"
          }, [t._v("\n                    " + t._s(t._f("defaultValue")(t.data.name)) + "\n                ")]), t._v(" "), i("div", {
              staticClass: "sale-status"
          }, [i("span", [t._v("\n                        已发售：" + t._s(t.data.soldOutNum) + "\n                    ")]), t._v(" "), i("span", [t._v("\n                        已发行：" + t._s(t.data.sellNum) + "\n                    ")])]), t._v(" "), i("div", {
              staticClass: "info-item info-price"
          }, [i("div", {
              staticClass: "info-label"
          }, [t._v("\n                        价格\n                    ")]), t._v(" "), i("div", {
              staticClass: "info-value"
          }, [t._v("\n                        ￥"), i("span", [t._v(t._s(t.data.onSale === t.OnSaleEnum.Resell ? t.data.price : t.data.onePrice))])])]), t._v(" "), t.isMobile ? t._e() : i("div", {
              style: {
                  cursor: "pointer"
              },
              on: {
                  click: t.showWechatGuide
              }
          }, [i("mbox-buy-button", {
              attrs: {
                  data: t.data
              }
          })], 1)])]), t._v(" "), i("div", {
              staticClass: "title-bar"
          }, [i("div", {
              staticClass: "title"
          }, [t._v("\n                " + t._s(t._f("defaultValue")(t.data.name)) + "\n            ")]), t._v(" "), i("div", {
              directives: [{
                  name: "show",
                  rawName: "v-show",
                  value: t.data.drawNum > 1,
                  expression: "data.drawNum > 1"
              }],
              staticClass: "sale-detail"
          }, [i("div", {
              staticClass: "sale-detail-item"
          }, [i("span", {
              staticClass: "label"
          }, [t._v("\n                        已售：\n                    ")]), t._v(" "), i("span", {
              staticClass: "value"
          }, [t._v("\n                        " + t._s(t.data.soldOutNum) + "\n                    ")])]), t._v(" "), i("div", {
              staticClass: "sale-detail-item"
          }, [i("span", {
              staticClass: "label"
          }, [t._v("\n                        发行：\n                    ")]), t._v(" "), i("span", {
              staticClass: "value"
          }, [t._v("\n                        " + t._s(t.data.sellNum) + "\n                    ")])])])]), t._v(" "), i("item-list", {
              attrs: {
                  list: t.data.list
              }
          }), t._v(" "), t.data.thumbPic ? i("div", {
              staticClass: "info-box"
          }, [i("div", {
              staticClass: "title"
          }, [t._v("\n                细节展示\n            ")]), t._v(" "), i("div", {
              staticClass: "content"
          }, [t.data.thumbPic ? i("img", {
              attrs: {
                  src: t.baseUrl(t.data.thumbPic + "?style=st6"),
                  alt: "细节展示"
              }
          }) : t._e()])]) : t._e(), t._v(" "), i("div", {
              staticClass: "info-box"
          }, [i("div", {
              staticClass: "title"
          }, [t._v("\n                关于盲盒\n            ")]), t._v(" "), i("div", {
              staticClass: "content"
          }, [t._v("\n                盲盒是iBox基于精选IP所推出的数字藏品新玩法，每个盲盒内都有一个或多个数字藏品。"), i("br"), t._v("\n                所有藏品都是通过区块链技术发行，盲盒的抽取也是完全随机，在盲盒没有打开之前，没有人可以知道盲盒里的数字藏品是什么。"), i("br"), t._v("\n                每一期盲盒都会设置不同级别的数字藏品，让用户充分感受开盲盒的乐趣。\n            ")])]), t._v(" "), i("div", {
              staticClass: "info-box"
          }, [i("div", {
              staticClass: "title"
          }, [t._v("\n                关于数字藏品\n            ")]), t._v(" "), i("div", {
              staticClass: "content"
          }, [t._v("\n                数字藏品可以通俗理解为区块链凭证。通常是指开发者在以太坊平台上根据ERC721标准/协议所发行，特性为不可分割、不可替代、独一无二。数字藏品常⻅于文化艺术品领域、知识产权的链上发行、流转、确权等作用，能有效保护链上知识产权，防止篡改、造假等，是区块链技术的一类场景应用。\n            ")])]), t._v(" "), i("order-list", {
              attrs: {
                  id: t.id,
                  "g-id": t.data.gId,
                  show: t.showOrderList
              }
          }), t._v(" "), i("div", {
              staticClass: "mobile-action-bar"
          }, [t.isMobile ? i("mbox-action-bar", {
              attrs: {
                  data: t.data
              },
              on: {
                  "timer-end": t.onTimerEnd
              }
          }) : t._e()], 1)], 1)])
      }
      ), [], !1, null, "7b0924c0", null);
      e.default = m.exports
  }
}]);
