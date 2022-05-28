(window.webpackJsonp = window.webpackJsonp || []).push([[22], {
    220: function(t, e, a) {},
    222: function(t, e, a) {},
    223: function(t, e, a) {},
    236: function(t, e, a) {
        "use strict";
        var s = a(9)
          , i = {
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
                vBase: s.j
            }),
            computed: {
                url() {
                    const {src: t, vBase: e, origin: a} = this;
                    let s = t ? `${e || ""}${t}` : "";
                    if (!s)
                        return "";
                    if (a) {
                        const t = s.includes("?") ? "&" : "?";
                        s += t + "style=st6"
                    }
                    return s
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
          , n = (a(240),
        a(10))
          , o = Object(n.a)(i, (function() {
            var t = this
              , e = t.$createElement
              , a = t._self._c || e;
            return a("div", {
                staticClass: "media-wrapper"
            }, [t.url ? [t.lazy ? a("img", {
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
            }) : a("img", {
                ref: "obj",
                attrs: {
                    alt: t.alt,
                    src: t.baseUrl(t.url)
                },
                on: {
                    load: t.onLoad
                }
            })] : t._e(), t._v(" "), t.playable && 2 === t.type ? a("div", {
                staticClass: "btn-play"
            }) : t._e()], 2)
        }
        ), [], !1, null, "291dfea4", null);
        e.a = o.exports
    },
    238: function(t, e, a) {},
    239: function(t, e, a) {},
    240: function(t, e, a) {
        "use strict";
        a(220)
    },
    241: function(t, e, a) {
        "use strict";
        const s = {
            0: "UR",
            1: "SSR",
            2: "SR",
            3: "R",
            4: "N"
        };
        var i = {
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
                    const e = s[String(t)];
                    return e || ""
                }
            }
        }
          , n = (a(242),
        a(10))
          , o = Object(n.a)(i, (function() {
            var t = this
              , e = t.$createElement;
            return (t._self._c || e)("div", {
                class: "box-rarity rarity-" + (t.rarity || 0)
            }, [t._v("\n    " + t._s(t.label) + " " + t._s(t.suffix) + "\n")])
        }
        ), [], !1, null, "8be4ac4e", null);
        e.a = o.exports
    },
    242: function(t, e, a) {
        "use strict";
        a(222)
    },
    244: function(t, e, a) {
        "use strict";
        var s = {
            name: "NoData",
            props: {
                tip: {
                    type: String,
                    default: "暂无数据"
                }
            }
        }
          , i = (a(246),
        a(10))
          , n = Object(i.a)(s, (function() {
            var t = this
              , e = t.$createElement
              , a = t._self._c || e;
            return a("div", {
                staticClass: "no-data"
            }, [a("div", {
                staticClass: "icon"
            }), t._v(" "), a("div", {
                staticClass: "tip"
            }, [t._v("\n        " + t._s(t.tip) + "\n    ")])])
        }
        ), [], !1, null, "59258c4f", null);
        e.a = n.exports
    },
    246: function(t, e, a) {
        "use strict";
        a(223)
    },
    250: function(t, e, a) {
        "use strict";
        a(238)
    },
    251: function(t, e, a) {
        "use strict";
        a(239)
    },
    253: function(t, e, a) {
        "use strict";
        var s = a(28)
          , i = a(244)
          , n = {
            name: "ScrollLoader",
            props: {
                loading: {
                    type: Boolean,
                    default: !1
                },
                end: {
                    type: Boolean,
                    default: !1
                },
                noData: {
                    type: Boolean,
                    default: !1
                },
                noDataTip: {
                    type: String,
                    default: "暂无数据"
                },
                endTip: {
                    type: String,
                    default: "没有更多数据了～"
                }
            },
            components: {
                NoData: i.a
            },
            computed: {
                ...Object(s.e)(["isMobile"])
            },
            mounted() {
                window.addEventListener("scroll", this.load)
            },
            destroyed() {
                window.removeEventListener("scroll", this.load, !1)
            },
            methods: {
                load() {
                    if (this.loading || this.end)
                        return;
                    const t = this.isMobile ? 100 : 0;
                    var e, a, s;
                    (function() {
                        let t = 0
                          , e = 0
                          , a = 0;
                        return document.body && (e = document.body.scrollTop),
                        document.documentElement && (a = document.documentElement.scrollTop),
                        t = e - a > 0 ? e : a,
                        Math.floor(t)
                    }
                    )() + Math.floor(document.body.clientHeight) + t >= (a = 0,
                    s = 0,
                    document.body && (a = document.body.scrollHeight),
                    document.documentElement && (s = document.documentElement.scrollHeight),
                    e = a - s > 0 ? a : s,
                    Math.floor(e)) && this.$emit("load")
                }
            }
        }
          , o = (a(251),
        a(10))
          , l = Object(o.a)(n, (function() {
            var t = this
              , e = t.$createElement
              , a = t._self._c || e;
            return a("div", {
                staticClass: "scroll-loader"
            }, [t._t("default"), t._v(" "), t.noData ? a("no-data", {
                staticClass: "no-data",
                attrs: {
                    tip: t.noDataTip
                }
            }) : t._e(), t._v(" "), t.end && !t.noData ? a("div", {
                staticClass: "no-more"
            }, [t._v("\n        " + t._s(t.endTip) + "\n    ")]) : t._e()], 2)
        }
        ), [], !1, null, "1bbeb5f3", null);
        e.a = l.exports
    },
    254: function(t, e, a) {
        "use strict";
        var s = {
            props: {
                size: {
                    type: Number,
                    default: 6
                }
            },
            name: "ProductListSkeleton"
        }
          , i = (a(250),
        a(10))
          , n = Object(i.a)(s, (function() {
            var t = this
              , e = t.$createElement
              , a = t._self._c || e;
            return a("div", {
                staticClass: "list-skeleton"
            }, t._l(t.size, (function(e) {
                return a("div", {
                    key: e,
                    staticClass: "item-container"
                }, [t._m(0, !0)])
            }
            )), 0)
        }
        ), [function() {
            var t = this
              , e = t.$createElement
              , a = t._self._c || e;
            return a("div", {
                staticClass: "item"
            }, [a("div", {
                staticClass: "cover"
            }, [a("div", {
                staticClass: "background"
            })]), t._v(" "), a("div", {
                staticClass: "detail"
            }, [a("div", {
                staticClass: "detail-inner"
            }, [a("div", {
                staticClass: "name"
            }), t._v(" "), a("div", {
                staticClass: "info"
            }, [a("div", {
                staticClass: "author"
            }), t._v(" "), a("div", {
                staticClass: "limit"
            })])]), t._v(" "), a("div", {
                staticClass: "price"
            })])])
        }
        ], !1, null, "b2d76a6c", null);
        e.a = n.exports
    },
    259: function(t, e, a) {},
    275: function(t, e, a) {
        "use strict";
        a(259)
    },
    279: function(t, e, a) {
        "use strict";
        var s = a(236)
          , i = a(241)
          , n = a(5)
          , o = a(28);
        const l = {
            1: "首发售罄",
            2: "立即购买",
            3: "查看详情",
            4: "查看详情"
        };
        var r = {
            name: "ProductList",
            components: {
                MediaWrapper: s.a,
                BoxRarity: i.a
            },
            props: {
                products: {
                    type: Array,
                    default: ()=>[]
                },
                showIndex: {
                    type: Boolean,
                    default: !1
                },
                mustShowAuthor: {
                    type: Boolean,
                    default: !1
                },
                showAction: {
                    type: Boolean,
                    default: !0
                },
                showGName: {
                    type: Boolean,
                    default: !1
                },
                showRarity: {
                    type: Boolean,
                    default: !1
                },
                showTokenId: {
                    type: Boolean,
                    default: !1
                },
                supportMerge: {
                    type: Boolean,
                    default: !1
                }
            },
            data: ()=>({
                listData: []
            }),
            computed: {
                ...Object(o.e)(["isMobile"])
            },
            mounted() {},
            methods: {
                price: t=>Number(t.priceCny || t.floorPrice || 0),
                isVideo(t) {
                    const {thumbPic: e} = t;
                    return e && e.includes(".mp4")
                },
                btnLabel: t=>l[t],
                detail(t) {
                    const {onSale: e, albumId: a, gId: s} = t;
                    n.c.MergeTargetLocked === e && this.supportMerge && this.isMobile ? this.$router.push(`/zh-cn/item/merge/creating/?id=${a || ""}${s ? "&gid=" + s : ""}`) : this.$toDetail(t)
                },
                showMergeTag({onSale: t, synthesis: e}) {
                    return !!this.supportMerge && (![n.c.MergeSourceLocked, n.c.MergeTargetLocked].includes(t) && 1 === (e || 0))
                }
            }
        }
          , c = (a(275),
        a(10))
          , d = Object(c.a)(r, (function() {
            var t = this
              , e = t.$createElement
              , a = t._self._c || e;
            return a("div", {
                staticClass: "product-list"
            }, t._l(t.products, (function(e, s) {
                return a("div", {
                    key: "" + e.albumId + (e.gId ? e.gId : s) + e.gNum,
                    staticClass: "product-container"
                }, [a("div", {
                    class: "product status-" + e.onSale + " " + (t.isVideo(e) ? "is-video" : ""),
                    on: {
                        click: function(a) {
                            return t.detail(e)
                        }
                    }
                }, [a("div", {
                    staticClass: "cover-wrapper"
                }, [a("div", {
                    staticClass: "cover"
                }, [a("media-wrapper", {
                    attrs: {
                        type: t.isVideo(e) ? 2 : 1,
                        src: e.thumbPic
                    }
                })], 1), t._v(" "), t.isVideo(e) ? [a("div", {
                    staticClass: "btn-play",
                    on: {
                        click: function(a) {
                            return t.detail(e)
                        }
                    }
                })] : t.showAction ? [a("div", {
                    staticClass: "btn-status"
                }, [a("button", {
                    on: {
                        click: function(a) {
                            return t.$toDetail(e)
                        }
                    }
                }, [a("span", {
                    staticClass: "text"
                }, [t._v("\n                                " + t._s(t.btnLabel(e.onSale)) + "\n                            ")]), t._v(" "), a("span", {
                    staticClass: "icon"
                })])])] : t._e(), t._v(" "), [t.OnSaleEnum.SoldOut, t.OnSaleEnum.Selling, t.OnSaleEnum.Timing].includes(e.onSale) && t.showAction ? a("div", {
                    staticClass: "status-tag",
                    class: "status-tag-" + e.onSale
                }) : t._e(), t._v(" "), [t.OnSaleEnum.MergeSourceLocked, t.OnSaleEnum.MergeTargetLocked].includes(e.onSale) && t.supportMerge ? a("div", {
                    staticClass: "merge-mask",
                    class: "merge-type-" + e.onSale
                }, [a("div", {
                    staticClass: "background"
                }), t._v(" "), a("div", {
                    staticClass: "status"
                }, [a("div", {
                    staticClass: "icon"
                }), t._v(" "), a("div", {
                    staticClass: "status-text"
                }, [e.onSale === t.OnSaleEnum.MergeSourceLocked ? [t._v("\n                                锁定中\n                            ")] : t._e(), t._v(" "), e.onSale === t.OnSaleEnum.MergeTargetLocked ? [t._v("\n                                合成中\n                            ")] : t._e()], 2)])]) : t._e(), t._v(" "), t.showMergeTag(e) ? a("div", {
                    staticClass: "merge-tag"
                }) : t._e()], 2), t._v(" "), a("div", {
                    staticClass: "detail"
                }, [a("div", {
                    staticClass: "name"
                }, [a("span", {
                    staticClass: "album-name"
                }, [t._v("\n                        " + t._s(t.showGName && e.gName || e.albumName) + "\n                    ")]), t._v(" "), e.vFlag ? a("span", {
                    staticClass: "v-flag"
                }) : t._e()]), t._v(" "), a("div", {
                    staticClass: "item-detail"
                }, [a("div", {
                    staticClass: "detail-content",
                    class: {
                        "show-index": t.showIndex,
                        "show-token-id": t.showTokenId
                    }
                }, [t.mustShowAuthor ? [e.gType ? t.mustShowAuthor ? a("div", {
                    staticClass: "author-info"
                }, [t._v("\n                                盲盒商品\n                            ")]) : t._e() : a("div", {
                    staticClass: "author-info"
                }, [a("img", {
                    staticClass: "author-head",
                    attrs: {
                        src: e.authorHeadImage ? t.baseUrl(e.authorHeadImage) : "/image/default/head.png",
                        alt: "headImg"
                    }
                }), t._v("\n                                " + t._s(e.authorName) + "\n                            ")])] : t._e(), t._v(" "), t.showIndex ? [0 === e.gType ? a("div", {
                    staticClass: "sell-limit"
                }, [e.origin ? [t._v("\n                                    ID:"), a("b", [t._v(t._s(e.tokenId))])] : [a("b", [t._v("#" + t._s(e.gNum))]), t._v(" / " + t._s(e.sellLimit) + "\n                                ")]], 2) : a("div", {
                    staticClass: "sell-limit",
                    style: {
                        opacity: .6
                    }
                }, [t._v("\n                                " + t._s(1 === e.label ? "多开不重" : "单品") + "\n                            ")])] : t._e(), t._v(" "), t.showTokenId ? [a("div", {
                    staticClass: "sell-limit"
                }, [t._v("\n                                ID:"), a("b", [t._v(t._s(e.tokenId))])])] : t._e()], 2), t._v(" "), 4 !== e.onSale ? a("div", {
                    staticClass: "price"
                }, [t._v("\n                        " + t._s("" !== (e.priceCny || e.price || e.floorPrice) ? "￥" : "") + t._s(t._f("defaultValue")(e.priceCny || e.price || e.floorPrice)) + "\n                    ")]) : a("div", {
                    staticClass: "price"
                }, [t._v("\n                        尚未开售\n                    ")]), t._v(" "), a("div", {
                    staticClass: "price-mobile"
                }, [4 !== e.onSale ? a("div", {
                    staticClass: "price-value"
                }, [0 === t.price(e) ? [t._v("\n                                --\n                            ")] : [t._v("\n                                " + t._s(t.price(e) ? "￥" : "") + t._s(t._f("defaultValue")(t.price(e))) + "\n                            ")]], 2) : a("div", {
                    staticClass: "price-value"
                }, [t._v("\n                            尚未开售\n                        ")]), t._v(" "), a("div", {
                    staticClass: "go"
                })])])]), t._v(" "), !t.showRarity || 0 !== e.gType || 0 !== e.label && 1 !== e.label ? t._e() : a("div", {
                    staticClass: "rarity"
                }, [a("box-rarity", {
                    attrs: {
                        suffix: "盲盒开出",
                        rarity: e.rarity
                    }
                })], 1)])])
            }
            )), 0)
        }
        ), [], !1, null, "a64fe1d0", null);
        e.a = d.exports
    },
    567: function(t, e, a) {},
    689: function(t, e, a) {
        "use strict";
        a(567)
    },
    809: function(t, e, a) {
        "use strict";
        a.r(e);
        var s = a(23)
          , i = a(254)
          , n = a(279)
          , o = a(219)
          , l = a(28)
          , r = (a(46),
        a(7),
        a(253))
          , c = {
            name: "BrandPage",
            data() {
                return {
                    loading: !0,
                    list: [],
                    params: {
                        brandId: this.$route.query.id || "1",
                        page: 1
                    },
                    noMore: !1,
                    brand: {
                        icon: "",
                        name: "",
                        introduction: ""
                    }
                }
            },
            components: {
                ListSkeleton: i.a,
                List: n.a,
                ResponsiveLayout: o.a,
                ScrollLoader: r.a
            },
            computed: {
                ...Object(l.e)(["isMobile"]),
                pageSize() {
                    const {isMobile: t} = this;
                    return t ? 50 : 60
                },
                brandId() {
                    return this.$route.query.id
                }
            },
            async created() {
                await this.loadInfo(),
                await this.loadData()
            },
            methods: {
                async loadInfo() {
                    const {success: t, data: e} = await s.g.getAlbumDetails(this.brandId);
                    this.brand = e,
                    t && (this.brand = e || {})
                },
                async loadData() {
                    this.loading = !0;
                    const {pageSize: t} = this
                      , {success: e, data: a} = await s.g.getAlbumByBrand({
                        ...this.params,
                        pageSize: t
                    });
                    e ? (this.noMore = !a.hashNext,
                    a.list && a.list.length > 0 && this.list.push(...a.list)) : this.noMore = !0,
                    this.loading = !1
                }
            },
            watch: {
                "brand.name"() {
                    const {brand: t} = this;
                    this.initWxShare({
                        title: `${t.name}的品牌主页`,
                        desc: `iBox⽀持购买${t.name}啦！戳戳看有哪些上新…`,
                        link: location.href,
                        timeLinetitle: `iBox⽀持购买${t.name}啦！戳戳看有哪些上新…`,
                        imgUrl: `${location.origin}${t.icon}`
                    }),
                    this.$track.pageView("brandpage_view", {
                        brand_id: "" + this.brandId,
                        brand_name: t.name
                    })
                }
            }
        }
          , d = c
          , u = (a(689),
        a(10))
          , v = Object(u.a)(d, (function() {
            var t = this
              , e = t.$createElement
              , a = t._self._c || e;
            return a("responsive-layout", [a("div", {
                staticClass: "author-info"
            }, [a("div", {
                staticClass: "container"
            }, [a("div", {
                staticClass: "author-head-info"
            }, [a("div", {
                staticClass: "author-head",
                style: {
                    backgroundImage: "url(" + t.baseUrl(t.brand.icon) + ")"
                }
            }), t._v(" "), a("div", {
                staticClass: "author-name"
            }, [t._v("\n                    " + t._s(t._f("defaultValue")(t.brand.name)) + "\n                ")])]), t._v(" "), a("div", {
                staticClass: "author-inner"
            }, [t._v("\n                " + t._s(t._f("defaultValue")(t.brand.introduction)) + "\n            ")])])]), t._v(" "), a("div", {
                staticClass: "brand"
            }, [a("div", {
                staticClass: "container"
            }, [a("div", {
                staticClass: "brand-content"
            }, [a("div", {
                staticClass: "brand-products"
            }, [a("div", {
                staticClass: "products-title"
            }, [t._v("\n                        TA 品牌下的专辑\n                        "), a("span")]), t._v(" "), a("scroll-loader", {
                attrs: {
                    loading: t.loading,
                    end: t.noMore,
                    "no-data": !t.list.length && !t.loading,
                    "no-data-tip": "暂无记录"
                },
                on: {
                    load: t.loadData
                }
            }, [a("list", {
                attrs: {
                    products: t.list
                }
            })], 1), t._v(" "), a("list-skeleton", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.loading,
                    expression: "loading"
                }],
                attrs: {
                    size: t.isMobile ? 4 : 8
                }
            })], 1)])])])])
        }
        ), [], !1, null, "c6502df4", null);
        e.default = v.exports
    }
}]);
