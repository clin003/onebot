(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{372:function(e,r,t){"use strict";t.r(r);var a=t(25),_=Object(a.a)({},(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"首页"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#首页"}},[e._v("#")]),e._v(" 首页")]),e._v(" "),t("h2",{attrs:{id:"简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[e._v("#")]),e._v(" 简介")]),e._v(" "),t("p",[e._v("通过 HTTP 对 CKYU 的事件进行上报以及接收 HTTP 请求来调用 CKYU 的 DLL 接口，从而可以使用其它语言编写 CKYU 插件。现已支持 WebSocket。")]),e._v(" "),t("h2",{attrs:{id:"使用方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用方法"}},[e._v("#")]),e._v(" 使用方法")]),e._v(" "),t("h3",{attrs:{id:"手动安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#手动安装"}},[e._v("#")]),e._v(" 手动安装")]),e._v(" "),t("p",[e._v("直接到 "),t("a",{attrs:{href:"https://github.com/richardchien/coolq-http-api/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("Releases"),t("OutboundLink")],1),e._v(" 下载最新的 cpk 文件（如果下载不了，也可以去 "),t("a",{attrs:{href:"https://richardchien-my.sharepoint.com/:f:/g/personal/i_page_moe/Es6qKBFraipEh7Y8JFMQaPUBM0EHny0ixTDwYRbUGxDS0g?e=jP1woh",target:"_blank",rel:"noopener noreferrer"}},[e._v("这里"),t("OutboundLink")],1),e._v(" 下载）放到 CKYU 的 app 文件夹，然后启用即可。由于要上报事件、接受调用请求，因此需要所有权限。")]),e._v(" "),t("p",[e._v("注意如果 CKYU 启动时报错说插件加载失败，或者系统弹窗提示缺少 DLL 文件，则需要安装 "),t("a",{attrs:{href:"https://aka.ms/vs/16/release/vc_redist.x86.exe",target:"_blank",rel:"noopener noreferrer"}},[e._v("Visual C++ 可再发行软件包"),t("OutboundLink")],1),e._v("（"),t("strong",[e._v("点击链接即可从官方下载，如果自行安装，一定要装 x86 也就是 32 位版本！")]),e._v("），如果你的系统是 Windows 7 或 Windows Server 2008、或者安装 Visual C++ 可再发行软件包之后仍然加载失败，则还需要安装 "),t("a",{attrs:{href:"https://support.microsoft.com/zh-cn/help/3118401/update-for-universal-c-runtime-in-windows",target:"_blank",rel:"noopener noreferrer"}},[e._v("通用 C 运行库更新"),t("OutboundLink")],1),e._v("，在这个链接里选择你系统对应的版本下载安装即可。如果此时还加载失败，请尝试重启系统。")]),e._v(" "),t("p",[e._v("启用后插件将开启一个 HTTP 服务器来接收请求，默认监听 "),t("code",[e._v("0.0.0.0:5700")]),e._v("，首次启用会生成一个默认配置文件，在 CKYU 的 "),t("code",[e._v("data\\app\\io.github.richardchien.coolqhttpapi\\config")]),e._v(" 文件夹中，文件名为 "),t("code",[e._v("<user_id>.json")]),e._v("（"),t("code",[e._v("<user_id>")]),e._v(" 为登录的 QQ 号），使用 JSON 格式填写。关于配置项的说明，见 "),t("a",{attrs:{href:"Configuration"}},[e._v("配置")]),e._v("。\n6\n此时通过 "),t("code",[e._v("http://192.168.1.123:5700/")]),e._v(" 即可调用 CKYU 的函数，例如 "),t("code",[e._v("http://192.168.1.123:5700/send_private_msg?user_id=123456&message=你好")]),e._v("，注意这里的 "),t("code",[e._v("192.168.1.123")]),e._v(" 要换成你自己电脑的 IP，如果在本地跑，可以用 "),t("code",[e._v("127.0.0.1")]),e._v("，"),t("code",[e._v("user_id")]),e._v(" 也要换成你想要发送到的 QQ 号。具体的 API 列表见 "),t("a",{attrs:{href:"API"}},[e._v("API 描述")]),e._v("。如果需要使用 HTTPS 来访问，见 "),t("a",{attrs:{href:"https://github.com/richardchien/coolq-http-api/wiki/HTTPS",target:"_blank",rel:"noopener noreferrer"}},[e._v("HTTPS"),t("OutboundLink")],1),e._v("。")]),e._v(" "),t("p",[e._v("CKYU 收到的消息、事件会被 POST 到配置文件中指定的 "),t("code",[e._v("post_url")]),e._v("，为空则不上报。上报数据格式见 "),t("a",{attrs:{href:"Post"}},[e._v("上报数据格式")]),e._v("。")]),e._v(" "),t("p",[e._v("停用插件将会关闭 HTTP 线程，再次启用将重新读取配置文件。")]),e._v(" "),t("p",[e._v("除了 HTTP 方式，现在还支持 WebSocket 和反向 WebSocket 两种通信方式，它们的适用场景和使用方法见 "),t("a",{attrs:{href:"CommunicationMethods"}},[e._v("通信方式")]),e._v("。")]),e._v(" "),t("p",[e._v("另外，本插件所支持的 CQ 码在 "),t("a",{attrs:{href:"https://docs.cqp.im/manual/cqcode/",target:"_blank",rel:"noopener noreferrer"}},[e._v("原生 CQ 码"),t("OutboundLink")],1),e._v(" 的基础上进行了一些增强，见 "),t("a",{attrs:{href:"CQCode"}},[e._v("CQ 码")]),e._v("，并且支持以字符串或消息段数组格式表示消息，见 "),t("a",{attrs:{href:"Message"}},[e._v("消息格式")]),e._v("。")]),e._v(" "),t("p",[e._v("对于其它可能比较容易遇到的问题，见 "),t("a",{attrs:{href:"https://github.com/richardchien/coolq-http-api/wiki/FAQ",target:"_blank",rel:"noopener noreferrer"}},[e._v("FAQ"),t("OutboundLink")],1),e._v("。")]),e._v(" "),t("h3",{attrs:{id:"使用-docker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用-docker"}},[e._v("#")]),e._v(" 使用 Docker")]),e._v(" "),t("p",[e._v("如需使用 Docker 来部署服务，请参考 "),t("a",{attrs:{href:"Docker"}},[e._v("Docker")]),e._v("。")]),e._v(" "),t("h2",{attrs:{id:"从旧版升级"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#从旧版升级"}},[e._v("#")]),e._v(" 从旧版升级")]),e._v(" "),t("p",[e._v("由于 4.x 版本引入了一些不兼容的变化，因此这里给出一份 "),t("a",{attrs:{href:"UpgradeGuide"}},[e._v("升级指南")]),e._v("，帮助用户从旧版升级到 4.x。")])])}),[],!1,null,null,null);r.default=_.exports}}]);