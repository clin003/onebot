(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{324:function(t,e,n){},355:function(t,e,n){"use strict";var i=n(324);n.n(i).a},360:function(t,e,n){"use strict";n.r(e);n(181);var i={props:{nickname:String,color:String,avatar:String},data:function(){return{shown:!1,active:!1,moving:!1}},watch:{active:function(t){if(!t)return this.shown=!1;var e=this.$el.previousElementSibling&&this.$el.previousElementSibling.__vue__;!e||!e.moving&&e.shown?this.appear():e.$once("appear",this.appear)}},mounted:function(){this.handleScroll(),addEventListener("scroll",this.handleScroll),addEventListener("resize",this.handleScroll)},beforeDestroy:function(){removeEventListener("scroll",this.handleScroll),removeEventListener("resize",this.handleScroll)},methods:{appear:function(){var t=this;this.shown=!0,this.moving=!0,setTimeout((function(){t.moving=!1,t.$emit("appear")}),100)},handleScroll:function(){this.$el.getBoundingClientRect().top<innerHeight&&(this.active=!0)}}},a=(n(355),n(25)),s=Object(a.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"chat-message",class:{shown:t.shown}},[t.avatar?n("img",{staticClass:"avatar",attrs:{src:t.avatar}}):n("div",{staticClass:"avatar",style:{backgroundColor:t.color}},[t._v(t._s(t.nickname[0]))]),t._v(" "),n("div",{staticClass:"nickname"},[t._v(t._s(t.nickname))]),t._v(" "),n("div",{staticClass:"message-box"},[t._t("default",[t._v(" ")])],2)])}),[],!1,null,null,null);e.default=s.exports}}]);