(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{371:function(t,e,a){"use strict";a.r(e);var r=a(25),_=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"扩展"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#扩展"}},[t._v("#")]),t._v(" 扩展")]),t._v(" "),a("p",[t._v("CQHTTP 插件的扩展机制允许用户下载额外的 DLL 来扩展插件的功能，例如添加长轮询接口。扩展的目的不是取代 CKYU 原生的插件机制，而是为了方便向 CQHTTP 插件添加新功能，同时不必将功能并入核心 CPK 文件。")]),t._v(" "),a("h2",{attrs:{id:"扩展列表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#扩展列表"}},[t._v("#")]),t._v(" 扩展列表")]),t._v(" "),a("p",[t._v("目前可用的扩展列表，见 "),a("a",{attrs:{href:"https://github.com/richardchien/coolq-http-api/wiki/%E6%89%A9%E5%B1%95%E5%88%97%E8%A1%A8",target:"_blank",rel:"noopener noreferrer"}},[t._v("扩展列表"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"使用方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用方法"}},[t._v("#")]),t._v(" 使用方法")]),t._v(" "),a("p",[t._v("将 DLL 扩展文件（可在响应扩展的链接中找到下载地址）直接放入 CKYU 的 "),a("code",[t._v("data\\app\\io.github.richardchien.coolqhttpapi\\extensions")]),t._v(" 文件夹，然后将插件配置项 "),a("code",[t._v("use_extension")]),t._v(" 设置为 "),a("code",[t._v("true")]),t._v(" 再重启插件即可启用扩展。插件启动时会加载扩展文件夹中所有 "),a("code",[t._v(".dll")]),t._v(" 结尾的、非 "),a("code",[t._v("_")]),t._v(" 开头的动态库文件。")]),t._v(" "),a("p",[t._v("扩展通常还要求在配置文件中单独设置 "),a("code",[t._v("enable")]),t._v(" 项才能实际启用，例如，长轮询扩展要求设置 "),a("code",[t._v("long_polling.enable")]),t._v(" 配置项为 "),a("code",[t._v("true")]),t._v(" 才会启用。具体请查看相应扩展提供的使用方法。")])])}),[],!1,null,null,null);e.default=_.exports}}]);