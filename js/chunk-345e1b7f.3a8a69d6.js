(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-345e1b7f"],{2629:function(t,o,s){"use strict";s.r(o);var a=function(){var t=this,o=t.$createElement,s=t._self._c||o;return s("div",[s("div",[s("van-nav-bar",{attrs:{title:"安全中心","left-text":"返回","left-arrow":""},on:{"click-left":function(o){return t.goMy()}}})],1),s("div",[s("Bg",[s("div",{staticClass:"content"},[s("div",{staticClass:"table"},[s("van-cell-group",[s("van-cell",{attrs:{title:"修改密码","is-link":""},on:{click:t.showPopup}}),s("van-cell",{attrs:{title:"注销账号","is-link":""},on:{click:t.destroyAccount}})],1),s("div",{staticClass:"btn"},[s("van-button",{attrs:{type:"primary",color:"blue",block:"",round:""},on:{click:function(o){return t.logout()}}},[t._v("退出登录")])],1)],1)])])],1),s("van-popup",{style:{height:"40%"},attrs:{position:"bottom",closeable:""},model:{value:t.show,callback:function(o){t.show=o},expression:"show"}},[s("div",{staticClass:"alter"},[t._v("修改密码")]),s("div",[s("van-cell-group",[s("van-field",{attrs:{type:t.isShow1?"text":"password",label:"旧密码","right-icon":t.isShow1?"eye-o":"closed-eye",placeholder:"旧密码"},on:{"click-right-icon":t.isShowPass1},model:{value:t.oldPasswork,callback:function(o){t.oldPasswork=o},expression:"oldPasswork"}}),s("van-field",{attrs:{type:t.isShow2?"text":"password",label:"新密码","right-icon":t.isShow2?"eye-o":"closed-eye",placeholder:"新密码"},on:{"click-right-icon":t.isShowPass2},model:{value:t.newPasswork,callback:function(o){t.newPasswork=o},expression:"newPasswork"}})],1)],1),s("div",{staticClass:"alterBtn"},[s("van-button",{attrs:{type:"primary",color:"blue",block:"",round:""},on:{click:function(o){return t.updatePassword()}}},[t._v("提交")])],1)])],1)},e=[],n=s("30c7"),i={name:"SecurityCenter",components:{Bg:n["a"]},data:function(){return{show:!1,oldPasswork:"",newPasswork:"",isShow1:!1,isShow2:!1}},methods:{goMy:function(){this.$router.go(-1)},showPopup:function(){this.show=!0},isShowPass1:function(){this.isShow1=!this.isShow1},isShowPass2:function(){this.isShow2=!this.isShow2},updatePassword:function(){var t=this,o=localStorage.getItem("TOKEN");this.axios({method:"POST",url:"/updatePassword",data:{tokenString:o,password:this.newPasswork,oldPassword:this.oldPasswork}}).then((function(o){if(t.$toast(o.data.msg),700!==o.data.code)return"E003"===o.data.code?(t.oldPasswork="",void(t.newPasswork="")):void("E001"===o.data.code&&(t.oldPasswork="",t.newPasswork="",t.show=!1,setTimeout((function(){t.$router.push({name:"Login"})}),1e3)));t.$router.push({name:"Login"})})).catch((function(t){}))},logout:function(){var t=this,o=localStorage.getItem("TOKEN");this.axios({method:"POST",url:"/logout",data:{tokenString:o}}).then((function(o){700!==o.data.code?(t.$toast(o.data.msg),"F001"===o.data.code&&(localStorage.removeItem("TOKEN"),t.$router.push({name:"Login"}))):t.$router.push({name:"Login"})})).catch((function(t){}))},destroyAccount:function(){var t=this;this.$dialog.confirm({title:"注销账号",message:"是否确定注销账号, 一旦注销无法恢复"}).then((function(o){var s=localStorage.getItem("TOKEN");t.axios({method:"POST",url:"/destroyAccount",data:{tokenString:s}}).then((function(o){t.$toast(o.data.msg),setTimeout((function(){t.$router.push({name:"Login"})}),1e3)})).catch((function(t){}))})).catch((function(t){}))}}},c=i,r=(s("9e84"),s("2877")),l=Object(r["a"])(c,a,e,!1,null,"a49bfed2",null);o["default"]=l.exports},"30c7":function(t,o,s){"use strict";var a=function(){var t=this,o=t.$createElement,s=t._self._c||o;return s("div",[s("div",{staticClass:"background"}),s("div",{staticClass:"content"},[s("div",{staticClass:"c_content"},[t._t("default")],2)])])},e=[],n={name:"Bg"},i=n,c=(s("90a9"),s("2877")),r=Object(c["a"])(i,a,e,!1,null,"869b25e2",null);o["a"]=r.exports},"61aa":function(t,o,s){},"6a6c":function(t,o,s){},"90a9":function(t,o,s){"use strict";s("6a6c")},"9e84":function(t,o,s){"use strict";s("61aa")}}]);
//# sourceMappingURL=chunk-345e1b7f.3a8a69d6.js.map