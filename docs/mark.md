keywords:

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