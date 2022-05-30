keywords:

nft-buy-button
forceUpdate


- login
登录
```js
methods:{async toUser(){const{uid:t}=this,{path:e}=this.$route;await this.$router.push(`/zh-cn/account/?id=${t}`),e.includes("/account/")&&(document.documentElement.scrollTop=0)}}}



mounted() {
    this.$forceUpdate()
    console.log("=====this===",this)
    setTimeout(() => {
      this.login()
    }, 1000);
  },
methods: {
    async toUser() {
        const {uid:t} =this
          , {path: e} = this.$route;
        await this.$router.push(`/zh-cn/account/?id=${t}`),
        e.includes("/account/") && (document.documentElement.scrollTop = 0)
    }
}
```

- doBuy
立即购买

呼起购买弹窗之前，会调用 nft/user/getUserInfo 接口获取用户信息

```js
{key:"doBuy",value:(n=s()(g.a.mark((function t(){return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.showOrderModal();case 1:case"end":return t.stop()}}),t,this)})))


// 渲染
i("button-view", {
    attrs: {
        "show-price": !0,
        price: t.data.priceCny,
        loading: t.loading
    },
    on: {
        click: t.doBuy
    }
}, [t._v("\n            ===立即购买\n        ")])] : t._e(), t._v(" "), [t.OnSaleEnum.Withdrawal, t.OnSaleEnum.Withdrawing].includes(t.data.onSale) ? [i("button-view", {
    attrs: {
        disabled: !0,
        "show-price": !1
    }
}
// 方法
key: "doBuy",
  value: (n = s()(g.a.mark((function t() {
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


(t=r.apply(this,arguments)).now=Date.now(),t._timer=null,t._maskTimer=null,t.gasPrice="",t.orderId="",t.orderStr={timeStamp:"",nonceStr:"",packageValue:"",signType:"",paySign:""},t.tokenHash="",t.checking=!1,t.creating=!1,t.otherStatus={},t}return l()(c,[{key:"mounted",value:function(){var t=this;setTimeout((function(){t&&t.startTimer&&t.startTimer()}),500)}}
// 可以自动执行doBuy的地方
return l()(c, [{
    key: "mounted",
    value: function() {
        var t = this;
        setTimeout((function() {
            t && t.startTimer && t.startTimer()
        }
        ), 500)
    }
}
```



- 弹窗后购买
调用check()

调用锁单接口 nft/order/create


```js

methods:{check(){this.payChannel!==r.e.YeeWallet||3===(this.userInfo||{}).yeepayWalletProgress?this.isResell?this.$modal.show(l.a,{type:1,action:1,price:this.data.price||"--"},{name:"MarketConfirmModal",height:"auto",clickToClose:!1,showClose:!1,position:"center",width:"80%",mask:!0},{confirm:()=>{this.$parent.$emit("check")}}):this.$parent.$emit("check"):this.openWallet()}


check() {
    console.log("===check===")
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

```

- goResell
立即寄售
```js
{key:"goResell",value:function(){var t=this.data,e=t.albumId,i=t.gId;0!==t.resell



{
  key:"goResell",
  value: function() {
    console.log('====reseelll====');
      var t = this.data
        , e = t.albumId
        , i = t.gId;
      0 !== t.resell ? this.$router.push("/zh-cn/resell/?type=0&id=".concat(e || "", "&gid=").concat(i)) : this.$toast("暂未开启寄售")
  }
```

- 

- confirm submit combine
合成、确认
```js
{const{activity:t,allNeedSize:e}=this;this.$modal.show(d,{name:t.activityName,size:e},{name:"MergeConfirmModal",height:"auto",width:"600px",clickToClose:!1,position:"center"},{confirm:()=>{this.$modal.hide("MergeConfirmModal"),this.submit()}})}


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
}
```