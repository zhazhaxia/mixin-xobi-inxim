/*! For license information please see LICENSES */
console.log("===combine buy===");
;
(window.webpackJsonp = window.webpackJsonp || []).push([[34], {
  207: function(t, e, i) {
      "use strict";
      i.d(e, "a", (function() {
          return u
      }
      ));
      var s = i(2);
      function n(t) {
          return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
              return typeof t
          }
          : function(t) {
              return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
          }
          ,
          n(t)
      }
      function o(t, e, i) {
          return e in t ? Object.defineProperty(t, e, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
          }) : t[e] = i,
          t
      }
      function a(t) {
          return function(t) {
              if (Array.isArray(t)) {
                  for (var e = 0, i = new Array(t.length); e < t.length; e++)
                      i[e] = t[e];
                  return i
              }
          }(t) || function(t) {
              if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t))
                  return Array.from(t)
          }(t) || function() {
              throw new TypeError("Invalid attempt to spread non-iterable instance")
          }()
      }
      function c() {
          return "undefined" != typeof Reflect && Reflect.defineMetadata && Reflect.getOwnMetadataKeys
      }
      function r(t, e) {
          l(t, e),
          Object.getOwnPropertyNames(e.prototype).forEach((function(i) {
              l(t.prototype, e.prototype, i)
          }
          )),
          Object.getOwnPropertyNames(e).forEach((function(i) {
              l(t, e, i)
          }
          ))
      }
      function l(t, e, i) {
          (i ? Reflect.getOwnMetadataKeys(e, i) : Reflect.getOwnMetadataKeys(e)).forEach((function(s) {
              var n = i ? Reflect.getOwnMetadata(s, e, i) : Reflect.getOwnMetadata(s, e);
              i ? Reflect.defineMetadata(s, n, t, i) : Reflect.defineMetadata(s, n, t)
          }
          ))
      }
      var d = {
          __proto__: []
      }instanceof Array;
      function u(t) {
          return function(e, i, s) {
              var n = "function" == typeof e ? e : e.constructor;
              n.__decorators__ || (n.__decorators__ = []),
              "number" != typeof s && (s = void 0),
              n.__decorators__.push((function(e) {
                  return t(e, i, s)
              }
              ))
          }
      }
      function v(t, e) {
          var i = e.prototype._init;
          e.prototype._init = function() {
              var e = this
                , i = Object.getOwnPropertyNames(t);
              if (t.$options.props)
                  for (var s in t.$options.props)
                      t.hasOwnProperty(s) || i.push(s);
              i.forEach((function(i) {
                  Object.defineProperty(e, i, {
                      get: function() {
                          return t[i]
                      },
                      set: function(e) {
                          t[i] = e
                      },
                      configurable: !0
                  })
              }
              ))
          }
          ;
          var s = new e;
          e.prototype._init = i;
          var n = {};
          return Object.keys(s).forEach((function(t) {
              void 0 !== s[t] && (n[t] = s[t])
          }
          )),
          n
      }
      var m = ["data", "beforeCreate", "created", "beforeMount", "mounted", "beforeDestroy", "destroyed", "beforeUpdate", "updated", "activated", "deactivated", "render", "errorCaptured", "serverPrefetch"];
      function p(t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          e.name = e.name || t._componentTag || t.name;
          var i = t.prototype;
          Object.getOwnPropertyNames(i).forEach((function(t) {
              if ("constructor" !== t)
                  if (m.indexOf(t) > -1)
                      e[t] = i[t];
                  else {
                      var s = Object.getOwnPropertyDescriptor(i, t);
                      void 0 !== s.value ? "function" == typeof s.value ? (e.methods || (e.methods = {}))[t] = s.value : (e.mixins || (e.mixins = [])).push({
                          data: function() {
                              return o({}, t, s.value)
                          }
                      }) : (s.get || s.set) && ((e.computed || (e.computed = {}))[t] = {
                          get: s.get,
                          set: s.set
                      })
                  }
          }
          )),
          (e.mixins || (e.mixins = [])).push({
              data: function() {
                  return v(this, t)
              }
          });
          var n = t.__decorators__;
          n && (n.forEach((function(t) {
              return t(e)
          }
          )),
          delete t.__decorators__);
          var a = Object.getPrototypeOf(t.prototype)
            , l = a instanceof s.default ? a.constructor : s.default
            , d = l.extend(e);
          return h(d, t, l),
          c() && r(d, t),
          d
      }
      var f = {
          prototype: !0,
          arguments: !0,
          callee: !0,
          caller: !0
      };
      function h(t, e, i) {
          Object.getOwnPropertyNames(e).forEach((function(s) {
              if (!f[s]) {
                  var o = Object.getOwnPropertyDescriptor(t, s);
                  if (!o || o.configurable) {
                      var a, c, r = Object.getOwnPropertyDescriptor(e, s);
                      if (!d) {
                          if ("cid" === s)
                              return;
                          var l = Object.getOwnPropertyDescriptor(i, s);
                          if (a = r.value,
                          c = n(a),
                          null != a && ("object" === c || "function" === c) && l && l.value === r.value)
                              return
                      }
                      0,
                      Object.defineProperty(t, s, r)
                  }
              }
          }
          ))
      }
      function g(t) {
          return "function" == typeof t ? p(t) : function(e) {
              return p(e, t)
          }
      }
      g.registerHooks = function(t) {
          m.push.apply(m, a(t))
      }
      ,
      e.b = g
  },
  208: function(t, e, i) {
      "use strict";
      i.d(e, "a", (function() {
          return n.b
      }
      )),
      i.d(e, "e", (function() {
          return s.default
      }
      )),
      i.d(e, "b", (function() {
          return c
      }
      )),
      i.d(e, "c", (function() {
          return u
      }
      )),
      i.d(e, "d", (function() {
          return v
      }
      )),
      i.d(e, "f", (function() {
          return m
      }
      ));
      var s = i(2)
        , n = i(207)
        , o = function() {
          for (var t = 0, e = 0, i = arguments.length; e < i; e++)
              t += arguments[e].length;
          var s = Array(t)
            , n = 0;
          for (e = 0; e < i; e++)
              for (var o = arguments[e], a = 0, c = o.length; a < c; a++,
              n++)
                  s[n] = o[a];
          return s
      }
        , a = /\B([A-Z])/g;
      function c(t) {
          return function(e, i, s) {
              var n = i.replace(a, "-$1").toLowerCase()
                , c = s.value;
              s.value = function() {
                  for (var e = this, i = [], s = 0; s < arguments.length; s++)
                      i[s] = arguments[s];
                  var a = function(s) {
                      var a = t || n;
                      void 0 === s ? 0 === i.length ? e.$emit(a) : 1 === i.length ? e.$emit(a, i[0]) : e.$emit.apply(e, o([a], i)) : (i.unshift(s),
                      e.$emit.apply(e, o([a], i)))
                  }
                    , l = c.apply(this, i);
                  return r(l) ? l.then(a) : a(l),
                  l
              }
          }
      }
      function r(t) {
          return t instanceof Promise || t && "function" == typeof t.then
      }
      var l = "undefined" != typeof Reflect && void 0 !== Reflect.getMetadata;
      function d(t, e, i) {
          if (l && !Array.isArray(t) && "function" != typeof t && !t.hasOwnProperty("type") && void 0 === t.type) {
              var s = Reflect.getMetadata("design:type", e, i);
              s !== Object && (t.type = s)
          }
      }
      function u(t, e) {
          return void 0 === e && (e = {}),
          function(i, s) {
              d(e, i, s),
              Object(n.a)((function(i, s) {
                  (i.props || (i.props = {}))[s] = e,
                  i.model = {
                      prop: s,
                      event: t || s
                  }
              }
              ))(i, s)
          }
      }
      function v(t) {
          return void 0 === t && (t = {}),
          function(e, i) {
              d(t, e, i),
              Object(n.a)((function(e, i) {
                  (e.props || (e.props = {}))[i] = t
              }
              ))(e, i)
          }
      }
      function m(t, e) {
          void 0 === e && (e = {});
          var i = e.deep
            , s = void 0 !== i && i
            , o = e.immediate
            , a = void 0 !== o && o;
          return Object(n.a)((function(e, i) {
              "object" != typeof e.watch && (e.watch = Object.create(null));
              var n = e.watch;
              "object" != typeof n[t] || Array.isArray(n[t]) ? void 0 === n[t] && (n[t] = []) : n[t] = [n[t]],
              n[t].push({
                  handler: i,
                  deep: s,
                  immediate: a
              })
          }
          ))
      }
  },
  631: function(t, e, i) {},
  632: function(t, e, i) {},
  633: function(t, e, i) {},
  634: function(t, e, i) {},
  635: function(t, e, i) {},
  636: function(t, e, i) {},
  637: function(t, e, i) {},
  767: function(t, e, i) {
      "use strict";
      i(631)
  },
  768: function(t, e, i) {
      "use strict";
      i(632)
  },
  769: function(t, e, i) {
      "use strict";
      i(633)
  },
  770: function(t, e, i) {
      "use strict";
      i(634)
  },
  771: function(t, e, i) {
      "use strict";
      i(635)
  },
  772: function(t, e, i) {
      "use strict";
      i(636)
  },
  773: function(t, e, i) {
      "use strict";
      i(637)
  },
  790: function(t, e, i) {
      "use strict";
      i.r(e);
      var s = i(23)
        , n = i(28)
        , o = i(34)
        , a = {
          components: {
              CommonModal: o.a
          },
          props: {
              title: {
                  type: String,
                  default: "请选择编号"
              },
              albumId: {
                  type: Number,
                  default: 0
              },
              sellLimit: {
                  type: [Number, String],
                  default: 0
              },
              goodsList: {
                  type: Array,
                  default: ()=>[]
              },
              selected: {
                  type: Number,
                  default: 0
              }
          },
          data() {
              return {
                  active: this.selected
              }
          },
          methods: {
              onClick({gId: t}) {
                  this.active = t
              },
              submit() {
                  this.$emit("selected", {
                      gId: this.active,
                      albumId: this.albumId
                  })
              }
          }
      }
        , c = (i(767),
      i(10))
        , r = Object(c.a)(a, (function() {
          var t = this
            , e = t.$createElement
            , i = t._self._c || e;
          return i("common-modal", [i("h3", {
              staticClass: "modal-title",
              attrs: {
                  slot: "title"
              },
              slot: "title"
          }, [t._v("\n        " + t._s(t.title) + "\n    ")]), t._v(" "), i("div", {
              staticClass: "modal-content merge-modal",
              attrs: {
                  slot: "content"
              },
              slot: "content"
          }, [i("div", {
              staticClass: "merge-goods"
          }, [i("div", {
              staticClass: "list"
          }, t._l(t.goodsList, (function(e) {
              return i("div", {
                  key: e.gId,
                  staticClass: "item-wrap"
              }, [i("div", {
                  staticClass: "item",
                  class: {
                      active: e.gId === t.active
                  },
                  on: {
                      click: function(i) {
                          return t.onClick(e)
                      }
                  }
              }, [t._v("\n                        #" + t._s(e.gNum) + "/" + t._s(t.sellLimit) + "\n                    ")])])
          }
          )), 0), t._v(" "), i("div", {
              staticClass: "button"
          }, [i("button", {
              on: {
                  click: t.submit
              }
          }, [t._v("\n                    确定\n                ")])])])])])
      }
      ), [], !1, null, "a75f12a6", null).exports
        , l = {
          components: {
              CommonModal: o.a
          },
          props: {
              name: {
                  type: String,
                  default: "--"
              },
              size: {
                  type: Number,
                  default: 0
              }
          },
          computed: {
              content() {
                  return `您选择了 ${this.size} 个藏品参与 "${this.name}" 活动，⼀旦合成，该批藏品将进⾏销毁，是否确认合成？`
              }
          }
      }
        , d = (i(768),
      Object(c.a)(l, (function() {
          var t = this
            , e = t.$createElement
            , i = t._self._c || e;
          return i("common-modal", [i("h3", {
              staticClass: "modal-title",
              attrs: {
                  slot: "title"
              },
              slot: "title"
          }, [t._v("\n        提示\n    ")]), t._v(" "), i("div", {
              staticClass: "modal-content merge-modal",
              attrs: {
                  slot: "content"
              },
              slot: "content"
          }, [i("div", {
              staticClass: "content"
          }, [t._v("\n            " + t._s(t.content) + "\n        ")]), t._v(" "), i("div", {
              staticClass: "buttons"
          }, [i("button", {
              staticClass: "btn-cancel",
              on: {
                  click: function(e) {
                      return t.$emit("close")
                  }
              }
          }, [t._v("\n                取消\n            ")]), t._v(" "), i("button", {
              on: {
                  click: function(e) {
                      return t.$emit("confirm")
                  }
              }
          }, [t._v("\n                确定\n            ")])])])])
      }
      ), [], !1, null, "5222660a", null).exports)
        , u = i(44)
        , v = i(237)
        , m = {
          computed: {
              ...Object(n.e)(["isApp"])
          },
          components: {
              Loading: v.a
          },
          props: {
              loading: {
                  type: Boolean,
                  default: !1
              }
          },
          methods: {
              back() {
                  this.isApp ? u.a.closePage() : this.$router.back()
              }
          }
      }
        , p = (i(769),
      Object(c.a)(m, (function() {
          var t = this
            , e = t.$createElement
            , i = t._self._c || e;
          return i("div", {
              staticClass: "merge"
          }, [t.isApp ? t._e() : i("div", {
              staticClass: "title-bar"
          }, [i("div", {
              staticClass: "back",
              on: {
                  click: t.back
              }
          }), t._v(" "), i("div", {
              staticClass: "text"
          }, [t._v("\n            选择藏品\n        ")])]), t._v(" "), i("div", {
              staticClass: "main-container",
              class: {
                  "fix-padding": t.isApp
              }
          }, [t._t("default")], 2), t._v(" "), i("div", {
              staticClass: "action-bar"
          }, [t._t("action-bar")], 2), t._v(" "), i("loading", {
              attrs: {
                  show: t.loading,
                  "custom-class": "loading-mask"
              }
          })], 1)
      }
      ), [], !1, null, "e3115394", null).exports)
        , f = {
          components: {
              MergeSelectLayout: p
          },
          props: {
              activity: {
                  type: Object,
                  default: ()=>({
                      activityId: ""
                  })
              }
          },
          created() {
              this.init()
          },
          data() {
              const {id: t, aid: e, gid: i} = this.$route.query
                , s = {};
              return s[Number(e)] = Number(i),
              {
                  id: t,
                  selected: s,
                  activityName: "--",
                  list: [],
                  unOwnList: [],
                  ownList: [],
                  selectedId: Date.now(),
                  creating: !1
              }
          },
          computed: {
              ...Object(n.e)(["isApp"]),
              tipTitle() {
                  return `请选择以下 ${this.allSize} 类藏品作为原料进⾏合成`
              },
              selectSize() {
                  const {selected: t, selectedId: e} = this;
                  return e ? Object.keys(t).length : 0
              },
              allSize() {
                  return (this.list || []).length
              },
              unOwnListSize() {
                  return (this.unOwnList || []).length
              }
          },
          watch: {
              "activity.activityId"() {
                  this.init()
              }
          },
          methods: {
              init() {
                  const {activity: t} = this;
                  this.activityName = t.activityName;
                  const {unOwnList: e, ownList: i} = t;
                  this.ownList = i,
                  this.unOwnList = e;
                  const s = [...i];
                  (e || []).forEach((t=>{
                      t.missed = !0,
                      s.push(t)
                  }
                  )),
                  this.list = s;
                  const {selected: n} = this;
                  s.forEach((t=>{
                      t.missed || n[t.albumId] || (n[t.albumId] = t.goodsList[0].gId)
                  }
                  )),
                  this.selected = n,
                  this.selectedId = Date.now()
              },
              gNum(t) {
                  const {selected: e, list: i} = this
                    , s = i.find((({albumId: e, missed: i})=>t === e && !i))
                    , n = e[t];
                  return ((s || {
                      goodsList: []
                  }).goodsList.find((({gId: t})=>t === n)) || {
                      gNum: "--"
                  }).gNum
              },
              checked(t) {
                  const {selected: e} = this;
                  return !!e[t]
              },
              onClick(t) {
                  if (t.missed) {
                      if (this.isApp)
                          return void u.a.goAlbumDetail({
                              aid: t.albumId
                          });
                      this.$router.push({
                          path: "/zh-cn/item/",
                          query: {
                              id: t.albumId
                          }
                      })
                  } else {
                      if ((t.goodsList || []).length <= 1)
                          return;
                      this.$modal.show(r, {
                          albumId: t.albumId,
                          title: t.goodsName,
                          goodsList: t.goodsList,
                          sellLimit: t.sellLimit,
                          selected: this.selected[t.albumId]
                      }, {
                          name: "MergeSelectGoodsModal",
                          height: "auto",
                          width: "400px",
                          clickToClose: !0
                      }, {
                          selected: t=>{
                              this.$modal.hide("MergeSelectGoodsModal"),
                              this.selected[t.albumId] = t.gId,
                              this.selectedId = Date.now()
                          }
                      })
                  }
              },
              async submit() {
                  this.creating = !0;
                  const {selected: t, id: e} = this
                    , {success: i, data: n, message: o} = await s.f.newGoods({
                      ids: Object.keys(t).map((e=>t[e])),
                      activityId: e
                  });
                  if (this.creating = !1,
                  i) {
                      const {albumId: t, gId: e} = n;
                      await this.$router.push({
                          path: "/zh-cn/item/merge/creating/",
                          query: {
                              id: t,
                              gid: e
                          }
                      })
                  } else
                      this.toast(o, "error")
              },
              confirmMerge() {
                  this.$modal.show(d, {
                      name: this.activityName,
                      size: this.selectSize
                  }, {
                      name: "MergeConfirmModal",
                      height: "auto",
                      width: "600px",
                      clickToClose: !1,
                      position: "center"
                  }, {
                      confirm: ()=>{
                          this.$modal.hide("MergeConfirmModal"),
                          this.submit()
                      }
                  })
              }
          }
      }
        , h = (i(770),
      Object(c.a)(f, (function() {
          var t = this
            , e = t.$createElement
            , i = t._self._c || e;
          return i("merge-select-layout", {
              attrs: {
                  loading: t.creating
              }
          }, [i("div", {
              staticClass: "tip-content"
          }, [i("div", {
              staticClass: "title"
          }, [t._v("\n            " + t._s(t.tipTitle) + "\n        ")]), t._v(" "), i("ul", [i("li", [t._v("\n                寄售中藏品⽆法参与合成\n            ")])])]), t._v(" "), i("div", {
              staticClass: "list"
          }, t._l(t.list, (function(e) {
              return i("div", {
                  key: e.albumId,
                  staticClass: "product-wrap",
                  on: {
                      click: function(i) {
                          return t.onClick(e)
                      }
                  }
              }, [i("div", {
                  staticClass: "product"
              }, [i("div", {
                  staticClass: "cover"
              }, [i("img", {
                  attrs: {
                      src: t.baseUrl(e.goodsPic),
                      alt: "藏品封面"
                  }
              })]), t._v(" "), i("div", {
                  staticClass: "detail"
              }, [i("div", {
                  staticClass: "name"
              }, [t._v("\n                        " + t._s(e.goodsName) + "\n                    ")]), t._v(" "), i("div", {
                  staticClass: "goods-index"
              }, [i("div", {
                  staticClass: "number"
              }, [e.missed ? [i("span", [t._v("暂无该藏品")])] : [t._v("\n                                #" + t._s(t.gNum(e.albumId))), i("span", [t._v("/" + t._s(e.sellLimit))])]], 2), t._v(" "), e.missed ? t._e() : i("div", {
                  staticClass: "icon"
              })])]), t._v(" "), t.checked(e.albumId) ? i("div", {
                  staticClass: "checked"
              }) : t._e(), t._v(" "), e.missed ? t._e() : i("div", {
                  staticClass: "size-tag"
              }, [t._v("\n                    X " + t._s((e.goodsList || []).length) + "\n                ")]), t._v(" "), e.missed ? i("div", {
                  staticClass: "miss-tip"
              }, [i("div", {
                  staticClass: "background"
              }), t._v(" "), i("div", {
                  staticClass: "miss-detail"
              }, [i("div", {
                  staticClass: "miss-text"
              }, [t._v("\n                            缺失该藏品\n                        ")]), t._v(" "), i("div", {
                  staticClass: "miss-button"
              }, [i("div", {
                  staticClass: "btn-text"
              }, [t._v("\n                                去购买\n                            ")]), t._v(" "), i("div", {
                  staticClass: "icon"
              })])])]) : t._e()])])
          }
          )), 0), t._v(" "), i("template", {
              slot: "action-bar"
          }, [i("div", {
              staticClass: "count"
          }, [t._v("\n            已选择\n            "), i("span", [t._v("\n                " + t._s(t.selectSize) + "\n            ")]), t._v("\n            个\n        ")]), t._v(" "), i("div", {
              staticClass: "button"
          }, [i("button", {
              attrs: {
                  disabled: t.selectSize < t.allSize || t.creating
              },
              on: {
                  click: t.confirmMerge
              }
          }, [t._v("\n                立即合成\n            ")])])])], 2)
      }
      ), [], !1, null, "5f0e6d12", null).exports)
        , g = {
          components: {
              CommonModal: o.a
          },
          props: {
              selected: {
                  type: Object,
                  default: ()=>({})
              },
              group: {
                  type: Object,
                  default: ()=>({})
              },
              own: {
                  type: Object,
                  default: ()=>({})
              }
          },
          data() {
              return {
                  v_group: JSON.parse(JSON.stringify(this.group)) || {},
                  v_own: JSON.parse(JSON.stringify(this.own)) || {},
                  selectSize: 0
              }
          },
          created() {
              this.init()
          },
          computed: {
              ...Object(n.e)(["isApp"]),
              title() {
                  const {needSize: t, ownSize: e} = this;
                  return 0 === e ? `请购买以下专辑中的任意 ${t} 个原料藏品参与合成：` : `请选择 ${t} 个原料藏品`
              },
              needSize() {
                  const {v_group: t} = this;
                  return t.selectNum || 0
              },
              ownSize() {
                  const {albumList: t} = this.v_own;
                  let e = 0;
                  return (t || []).forEach((t=>{
                      const {goodsList: i} = t;
                      e += (i || []).length
                  }
                  )),
                  e
              }
          },
          methods: {
              init() {
                  const {v_own: t} = this;
                  (t.albumList || []).forEach((t=>{
                      (t.goodsList || []).forEach((t=>{
                          this.initCheck(t)
                      }
                      ))
                  }
                  )),
                  this.resetSize()
              },
              resetSize() {
                  let t = 0;
                  const {v_own: e} = this;
                  (e.albumList || []).forEach((e=>{
                      (e.goodsList || []).forEach((e=>{
                          e.checked && t++
                      }
                      ))
                  }
                  )),
                  this.selectSize = t
              },
              initCheck(t) {
                  const {selected: e} = this;
                  let i = 0;
                  Object.keys(e).forEach((s=>{
                      (e[s] || []).includes(t.gId) && i++
                  }
                  )),
                  t.checked = !!i
              },
              onItemClick(t) {
                  const {needSize: e, selectSize: i} = this;
                  !t.checked && i >= e ? this.toast(`最多可选择${e}个原料藏品`) : (t.checked = !t.checked,
                  this.resetSize(),
                  this.$forceUpdate())
              },
              buy(t) {
                  this.isApp ? u.a.goAlbumDetail({
                      aid: t
                  }) : this.$router.push({
                      path: "/zh-cn/item/",
                      query: {
                          id: t
                      }
                  })
              },
              confirm() {
                  const t = {}
                    , {v_own: e} = this;
                  (e.albumList || []).forEach((e=>{
                      (e.goodsList || []).forEach((i=>{
                          i.checked && (t[e.albumId] || (t[e.albumId] = []),
                          t[e.albumId].push(i.gId))
                      }
                      ))
                  }
                  )),
                  this.$emit("selected", {
                      groupId: this.v_group.groupId,
                      selected: t
                  })
              }
          }
      }
        , _ = (i(771),
      Object(c.a)(g, (function() {
          var t = this
            , e = t.$createElement
            , i = t._self._c || e;
          return i("common-modal", [i("h3", {
              staticClass: "modal-title",
              attrs: {
                  slot: "title"
              },
              slot: "title"
          }, [t._v("\n        " + t._s(t.title) + "\n    ")]), t._v(" "), i("div", {
              staticClass: "modal-content merge-modal",
              attrs: {
                  slot: "content"
              },
              slot: "content"
          }, [i("div", {
              staticClass: "goods-list select"
          }, [t._l(t.v_own.albumList || [], (function(e) {
              return t._l(e.goodsList, (function(s) {
                  return i("div", {
                      key: s.gId,
                      staticClass: "item",
                      class: {
                          checked: s.checked
                      },
                      on: {
                          click: function(e) {
                              return t.onItemClick(s)
                          }
                      }
                  }, [i("div", {
                      staticClass: "name"
                  }, [t._v("\n                        " + t._s(e.goodsName) + " "), i("span", [t._v("#" + t._s(s.gNum) + "/" + t._s(e.sellLimit))])]), t._v(" "), i("div", {
                      staticClass: "checkbox"
                  })])
              }
              ))
          }
          ))], 2), t._v(" "), t.ownSize < t.v_group.selectNum ? i("div", {
              staticClass: "goods-list need"
          }, [0 !== t.ownSize ? i("div", {
              staticClass: "tip"
          }, [t._v("\n                您的原料不足，请在以下专辑中进行补足" + t._s(t.needSize) + "个藏品进行合成\n            ")]) : t._e(), t._v(" "), t._l(t.group.albumList, (function(e) {
              return i("div", {
                  key: e.albumId,
                  staticClass: "item"
              }, [i("div", {
                  staticClass: "name"
              }, [t._v("\n                    " + t._s(e.goodsName) + "\n                ")]), t._v(" "), i("div", {
                  staticClass: "button"
              }, [i("button", {
                  on: {
                      click: function(i) {
                          return t.buy(e.albumId)
                      }
                  }
              }, [t._v("\n                        去购买\n                    ")])])])
          }
          ))], 2) : t._e()]), t._v(" "), t.ownSize > 0 ? i("template", {
              slot: "footer"
          }, [i("div", {
              staticClass: "action-bar"
          }, [i("div", {
              staticClass: "count"
          }, [t._v("\n                已选择\n                "), i("span", [t._v(t._s(t.selectSize))]), t._v("\n                个\n            ")]), t._v(" "), i("div", {
              staticClass: "button"
          }, [i("button", {
              on: {
                  click: t.confirm
              }
          }, [t._v("\n                    确定\n                ")])])])]) : t._e()], 2)
      }
      ), [], !1, null, "7ce9a082", null).exports)
        , b = {
          components: {
              MergeSelectLayout: p
          },
          props: {
              activity: {
                  type: Object,
                  default: ()=>({})
              }
          },
          data() {
              const {id: t, aid: e, gid: i} = this.$route.query
                , s = {};
              return s[Number(e)] = [Number(i)],
              {
                  id: t,
                  selected: s,
                  groupSelected: {},
                  selectSize: 0,
                  creating: !1
              }
          },
          created() {
              this.initSelected(),
              this.syncGroupSelected()
              ;

              setTimeout(() => {
                console.log('---confirm---')
                this.submit()
              }, 1000);
          },
          computed: {
              ...Object(n.e)(["isApp"]),
              groups() {
                  const {needOwnList: t} = this.activity || {};
                  return t || []
              },
              ownList() {
                  const {ownList: t} = this.activity || {};
                  return t || []
              },
              allNeedSize() {
                  let t = 0;
                  return this.groups.forEach((({selectNum: e})=>{
                      t += e
                  }
                  )),
                  t
              }
          },
          methods: {
              initSelected() {
                  this.syncGroupSelected();
                  const {ownList: t, groups: e, groupSelected: i} = this;
                  t.forEach((t=>{
                      const s = e.find((({groupId: e})=>t.groupId === e))
                        , {selectNum: n} = s
                        , o = (i[t.groupId] || []).length
                        , a = n - o;
                      let c = 0;
                      (t.albumList || []).forEach((t=>{
                          c += (t.goodsList || []).length
                      }
                      ));
                      const r = a > c ? c - o : a;
                      let l = 0;
                      (t.albumList || []).forEach((t=>{
                          (t.goodsList || []).forEach((e=>{
                              l < r && (this.selected[t.albumId] || (this.selected[t.albumId] = []),
                              this.selected[t.albumId].includes(e.gId) || (this.selected[t.albumId].push(e.gId),
                              l++))
                          }
                          ))
                      }
                      ))
                  }
                  ))
              },
              syncGroupSelected() {
                  this.groupSelected = {};
                  const {groups: t, selected: e, ownList: i} = this;
                  t.forEach((t=>{
                      const s = i.find((({groupId: e})=>e === t.groupId)) || {
                          albumList: []
                      }
                        , n = []
                        , {albumList: o} = s
                        , a = Object.keys(e).map((t=>Number(t)));
                      (o || []).forEach((t=>{
                          if (a.includes(t.albumId)) {
                              const i = e[t.albumId] || [];
                              (t.goodsList || []).forEach((e=>{
                                  i.includes(e.gId) && n.push({
                                      albumId: t.albumId,
                                      goodsName: t.goodsName,
                                      goodsPic: t.goodsPic,
                                      sellLimit: t.sellLimit,
                                      gId: e.gId,
                                      gNum: e.gNum
                                  })
                              }
                              ))
                          }
                      }
                      )),
                      this.groupSelected[t.groupId] = n
                  }
                  ));
                  let s = 0;
                  Object.keys(e).forEach((t=>{
                      s += (e[t] || []).length
                  }
                  )),
                  this.selectSize = s
              },
              needSize(t, e) {
                  return e - this.groupSelected[t].length
              },
              confirmMerge() {
                  const {activity:t,allNeedSize:e}=this;
                  this.$modal.show(d, {
                      name: t.activityName,
                      size: e
                  }, {
                      name: "MergeConfirmModal",
                      height: "auto",
                      width: "600px",
                      clickToClose: !1,
                      position: "center"
                  }, {
                      confirm: ()=>{
                          this.$modal.hide("MergeConfirmModal"),
                          this.submit()
                      }
                  })
              },
              syncSelected(t) {
                  const {groups: e} = this;
                  (e.find((({groupId: e})=>e === t.groupId)).albumList || []).forEach((t=>{
                      this.selected[t.albumId] = []
                  }
                  )),
                  Object.assign(this.selected, t.selected),
                  this.syncGroupSelected(),
                  this.$forceUpdate()
              },
              selectGoods(t) {
                  const {selected: e, groups: i, ownList: s} = this
                    , n = i.find((({groupId: e})=>e === t))
                    , o = s.find((({groupId: e})=>e === t)) || {};
                  this.$modal.show(_, {
                      selected: e,
                      group: n,
                      own: o
                  }, {
                      name: "MergeSelectGoodsOptionalModal",
                      height: "auto",
                      width: "400px",
                      clickToClose: !0
                  }, {
                      selected: t=>{
                          this.$modal.hide("MergeSelectGoodsOptionalModal"),
                          this.syncSelected(t)
                      }
                  })
              },
              async submit() {
                  const {selected: t, id: e} = this
                    , i = [];
                  Object.keys(t).forEach((e=>{
                      i.push(...t[e] || [])
                  }
                  )),
                  this.creating = !0;
                  const {success: n, data: o, message: a} = await s.f.newGoods({
                      ids: i,
                      activityId: e
                  });
                  if (this.creating = !1,
                  n) {
                      const {albumId: t, gId: e} = o;
                      await this.$router.push({
                          path: "/zh-cn/item/merge/creating/",
                          query: {
                              id: t,
                              gid: e
                          }
                      })
                  } else
                      this.toast(a, "error")
              },
              submitTip() {
                  this.toast("选择原料藏品数量不足", "error")
              }
          },
          watch: {
              creating(t) {
                  this.$emit("loading", t)
              }
          }
      }
        , y = (i(772),
      Object(c.a)(b, (function() {
          var t = this
            , e = t.$createElement
            , i = t._self._c || e;
          return i("merge-select-layout", {
              attrs: {
                  loading: t.creating
              }
          }, [i("div", {
              staticClass: "activity-info"
          }, [t._v("\n        合成条件：\n        "), i("span", [t._v(t._s(t.activity.activityInfo))]), t._v(" "), i("span", {
              staticClass: "point"
          }, [t._v("\n            （寄售中的藏品无法参与合成）\n        ")])]), t._v(" "), i("div", {
              staticClass: "group-container"
          }, t._l(t.groups, (function(e, s) {
              return i("div", {
                  key: e.groupId,
                  staticClass: "group"
              }, [i("div", {
                  staticClass: "group-title"
              }, [1 === t.groups.length ? i("div", {
                  staticClass: "text"
              }, [t._v("\n                    请选择藏品：\n                ")]) : i("div", {
                  staticClass: "text"
              }, [t._v("\n                    条件" + t._s(s + 1) + "（请选择" + t._s(e.selectNum) + "个藏品）:\n                ")]), t._v(" "), t.groupSelected[e.groupId].length ? i("div", {
                  staticClass: "action"
              }, [i("button", {
                  on: {
                      click: function(i) {
                          return t.selectGoods(e.groupId)
                      }
                  }
              }, [t._v("\n                        重新选择\n                    ")])]) : t._e()]), t._v(" "), i("div", {
                  staticClass: "group-list"
              }, [t._l(t.groupSelected[e.groupId], (function(e, s) {
                  return i("div", {
                      key: e.gId,
                      staticClass: "item-wrapper"
                  }, [i("div", {
                      staticClass: "item"
                  }, [i("div", {
                      staticClass: "cover"
                  }, [i("img", {
                      attrs: {
                          src: t.baseUrl(e.goodsPic),
                          alt: "素材"
                      }
                  })]), t._v(" "), i("div", {
                      staticClass: "detail"
                  }, [i("div", {
                      staticClass: "name"
                  }, [t._v("\n                                " + t._s(e.goodsName) + "\n                            ")]), t._v(" "), i("div", {
                      staticClass: "index"
                  }, [t._v("\n                                #" + t._s(e.gNum)), i("span", [t._v("/" + t._s(e.sellLimit))])])]), t._v(" "), i("div", {
                      staticClass: "tag"
                  }, [t._v("\n                            原料" + t._s(s + 1) + "\n                        ")])])])
              }
              )), t._v(" "), t._l(t.needSize(e.groupId, e.selectNum), (function(s) {
                  return i("div", {
                      key: s,
                      staticClass: "item-wrapper",
                      on: {
                          click: function(i) {
                              return t.selectGoods(e.groupId)
                          }
                      }
                  }, [i("div", {
                      staticClass: "item item-holder"
                  }, [i("div", {
                      staticClass: "cover"
                  }, [i("div", {
                      staticClass: "plus"
                  }), t._v(" "), i("div", {
                      staticClass: "tip"
                  }, [t._v("\n                                请添加原料\n                            ")])]), t._v(" "), i("div", {
                      staticClass: "detail"
                  }, [i("div", {
                      staticClass: "name"
                  }), t._v(" "), i("div", {
                      staticClass: "index"
                  })]), t._v(" "), i("div", {
                      staticClass: "tag"
                  }, [t._v("\n                            原料" + t._s(s + t.groupSelected[e.groupId].length) + "\n                        ")])])])
              }
              ))], 2)])
          }
          )), 0), t._v(" "), i("template", {
              slot: "action-bar"
          }, [i("div", {
              staticClass: "count"
          }, [t._v("\n            已选择\n            "), i("span", [t._v("\n                " + t._s(t.selectSize) + "\n            ")]), t._v("\n            个\n        ")]), t._v(" "), i("div", {
              staticClass: "button"
          }, [i("button", {
              attrs: {
                  disabled: t.selectSize < t.allNeedSize
              },
              on: {
                  click: t.confirmMerge
              }
          }, [t._v("\n                立即合成\n            ")]), t._v(" "), t.selectSize < t.allNeedSize ? i("div", {
              staticClass: "tip-mask",
              on: {
                  click: t.submitTip
              }
          }) : t._e()])])], 2)
      }
      ), [], !1, null, "a5597396", null).exports)
        , C = {
          components: {
              CommonModal: o.a
          }
      }
        , w = (i(773),
      Object(c.a)(C, (function() {
          var t = this
            , e = t.$createElement
            , i = t._self._c || e;
          return i("common-modal", {
              staticClass: "merge-alert-modal"
          }, [i("h3", {
              staticClass: "modal-title",
              attrs: {
                  slot: "title"
              },
              slot: "title"
          }, [t._v("\n        提示\n    ")]), t._v(" "), i("div", {
              staticClass: "modal-content merge-alert",
              attrs: {
                  slot: "content"
              },
              slot: "content"
          }, [i("div", {
              staticClass: "content"
          }, [t._v("\n            您已超出合成数量限制，请查看活动规则。\n        ")]), t._v(" "), i("div", {
              staticClass: "button"
          }, [i("button", {
              on: {
                  click: function(e) {
                      return t.$emit("close")
                  }
              }
          }, [t._v("\n                确定\n            ")])])])])
      }
      ), [], !1, null, "07ce2cce", null).exports)
        , I = {
          components: {
              TypeMandatory: h,
              TypeOptional: y
          },
          created() {
              this.load()
          },
          data() {
              const {id: t} = this.$route.query;
              return {
                  id: t,
                  activity: {},
                  loading: !0
              }
          },
          methods: {
              async load() {
                  const {id: t} = this;
                  this.loading = !0;
                  const {success: e, data: i, code: n} = await s.f.getGoodsList(t);
                  this.loading = !1,
                  13098 === n && this.$modal.show(w, {}, {
                      name: "MergeAlertModal",
                      height: "auto",
                      width: "80%",
                      clickToClose: !1,
                      position: "center",
                      showClose: !1
                  }, {}),
                  e && (this.activity = i)
              }
          }
      }
        , O = Object(c.a)(I, (function() {
          var t = this
            , e = t.$createElement
            , i = t._self._c || e;
          return i("section", [0 === t.activity.activityType ? i("type-mandatory", {
              attrs: {
                  activity: t.activity
              }
          }) : t._e(), t._v(" "), 1 === t.activity.activityType ? i("type-optional", {
              attrs: {
                  activity: t.activity
              }
          }) : t._e()], 1)
      }
      ), [], !1, null, "1e6cca24", null);
      e.default = O.exports
  }
}]);
