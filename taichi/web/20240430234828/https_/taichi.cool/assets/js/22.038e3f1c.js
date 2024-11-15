var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  //let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{216:function(t,a,s){"use strict";s.r(a);var r=s(0),_=Object(r.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"adb-使用文档"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#adb-使用文档"}},[t._v("#")]),t._v(" ADB 使用文档")]),t._v(" "),s("h2",{attrs:{id:"adb-是什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#adb-是什么"}},[t._v("#")]),t._v(" ADB 是什么")]),t._v(" "),s("p",[t._v("ADB 的全程为“Android Debug Bridge”，是给 Android 开发者提供的开发工具；通常情况下它比普通应用拥有更高的权限，通过 ADB 我们可以解锁 Android 手机更多的功能。")]),t._v(" "),s("h2",{attrs:{id:"使用环境准备"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用环境准备"}},[t._v("#")]),t._v(" 使用环境准备")]),t._v(" "),s("h3",{attrs:{id:"手机上的设置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#手机上的设置"}},[t._v("#")]),t._v(" 手机上的设置")]),t._v(" "),s("p",[t._v("手机必须开启"),s("strong",[t._v("开发者模式")]),t._v("才能使用 ADB 功能，请参阅"),s("router-link",{attrs:{to:"/zh/doc/dev_mode.html"}},[t._v("开发者模式")]),t._v(" 来开启开发者选项。")],1),t._v(" "),s("h3",{attrs:{id:"电脑上的准备"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#电脑上的准备"}},[t._v("#")]),t._v(" 电脑上的准备")]),t._v(" "),s("ol",[s("li",[t._v("Chrome 浏览器。")]),t._v(" "),s("li",[t._v("一根 USB 数据线。注意必须是数据线，不能是充电线，有的线仅仅能充电，无法传输数据。")]),t._v(" "),s("li",[t._v("收藏网址：https://yume-chan.github.io/ya-webadb/shell")])]),t._v(" "),s("blockquote",[s("p",[t._v("在 WebUSB 普及之后，我们可以通过 WebUSB 来操作 ADB，无需在电脑上再单独安装 ADB 程序了；本教程基于 WebUSB，因此你无需安装任何其他第三方工具。")])]),t._v(" "),s("h2",{attrs:{id:"连接设备"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#连接设备"}},[t._v("#")]),t._v(" 连接设备")]),t._v(" "),s("h3",{attrs:{id:"前置条件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前置条件"}},[t._v("#")]),t._v(" 前置条件")]),t._v(" "),s("ol",[s("li",[t._v("使用 Chrome 浏览器打开网址：https://yume-chan.github.io/ya-webadb/shell")]),t._v(" "),s("li",[t._v("关闭所有可能会使用手机 USB 的程序，如“360安全卫士”，“QQ电脑管家” 等等。")]),t._v(" "),s("li",[t._v("使用 USB 数据线将目标手机连接到电脑。（如果手机支持 OTG，你也可以使用一个手机操作另外一个手机）")])]),t._v(" "),s("h3",{attrs:{id:"配对设备"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配对设备"}},[t._v("#")]),t._v(" 配对设备")]),t._v(" "),s("p",[t._v("首先打开网页：https://yume-chan.github.io/ya-webadb/shell")]),t._v(" "),s("h4",{attrs:{id:"在左上角有个-add-按钮："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在左上角有个-add-按钮："}},[t._v("#")]),t._v(' 在左上角有个 "Add" 按钮：')]),t._v(" "),s("img",{attrs:{src:"/adb/adb1.jpg",alt:"ADB Add",width:"240"}}),t._v(" "),s("h4",{attrs:{id:"点击这个-“add”-按钮，会出现一个对话框："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#点击这个-“add”-按钮，会出现一个对话框："}},[t._v("#")]),t._v(" 点击这个 “Add” 按钮，会出现一个对话框：")]),t._v(" "),s("img",{attrs:{src:"/adb/adb2.jpg",alt:"ADB 选择设备配对",width:"240"}}),t._v(" "),s("h4",{attrs:{id:"然后左上角设备选择框会出现你的设备，点击“connect”按钮："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#然后左上角设备选择框会出现你的设备，点击“connect”按钮："}},[t._v("#")]),t._v(" 然后左上角设备选择框会出现你的设备，点击“Connect”按钮：")]),t._v(" "),s("img",{attrs:{src:"/adb/adb3.jpg",alt:"ADB 连接设备",width:"240"}}),t._v(" "),s("h4",{attrs:{id:"连接成功提示"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#连接成功提示"}},[t._v("#")]),t._v(" 连接成功提示")]),t._v(" "),s("p",[t._v("如果设备连接成功，刚刚那个连接框会变成如下图：")]),t._v(" "),s("img",{attrs:{src:"/adb/adb4.jpg",alt:"ADB 连接成功",width:"240"}}),t._v(" "),s("p",[t._v("（注意"),s("strong",[t._v("不要")]),t._v("点击“Disconnect”，否则设备会断开连接！！）")]),t._v(" "),s("p",[t._v("如果设备连接失败，请查阅下方的“问题排查”。")]),t._v(" "),s("h2",{attrs:{id:"执行-adb-命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#执行-adb-命令"}},[t._v("#")]),t._v(" 执行 ADB 命令")]),t._v(" "),s("img",{attrs:{src:"/adb/adb5.jpg",alt:"ADB shell",width:"480"}}),t._v(" "),s("p",[t._v("在这里我们可以输入 ADB 命令来对设备进行操作。")]),t._v(" "),s("p",[t._v("例如：")]),t._v(" "),s("h3",{attrs:{id:"开启太极阴阳之门"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开启太极阴阳之门"}},[t._v("#")]),t._v(" 开启太极阴阳之门")]),t._v(" "),s("p",[t._v("在 命令行 输入如下命令：")]),t._v(" "),s("p",[t._v("dpm set-device-owner me.weishu.exp/.DeviceAdmin")]),t._v(" "),s("p",[t._v("然后点击回车即可。")]),t._v(" "),s("h3",{attrs:{id:"解除两仪-android-12-限制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解除两仪-android-12-限制"}},[t._v("#")]),t._v(" 解除两仪 Android 12 限制")]),t._v(" "),s("p",[t._v("在命令行输入如下命令：")]),t._v(" "),s("p",[t._v("/system/bin/device_config set_sync_disabled_for_tests persistent; /system/bin/device_config put activity_manager max_phantom_processes 2147483647")]),t._v(" "),s("p",[t._v("然后点击回车。")]),t._v(" "),s("h2",{attrs:{id:"生成错误日志"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#生成错误日志"}},[t._v("#")]),t._v(" 生成错误日志")]),t._v(" "),s("p",[t._v("如果你的设备出现了问题，需要提供日志给开发者，也可以用 ADB 生成 BUG 报告。")]),t._v(" "),s("p",[t._v("请先阅读上面的教程正确连上你的设备，在连接上设备以后，网页的左边有一系列选项，选中如下选项：")]),t._v(" "),s("img",{attrs:{src:"/adb/adb6.jpg",alt:"生成BUG报告",width:"480"}}),t._v(" "),s("p",[t._v("生成报告可能需要一段时间，耐心等待即可。")])])}),[],!1,null,null,null);a.default=_.exports}}]);

}
/*
     FILE ARCHIVED ON 12:22:02 Mar 02, 2024 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 09:19:21 Nov 10, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.873
  exclusion.robots: 0.028
  exclusion.robots.policy: 0.013
  esindex: 0.015
  cdx.remote: 27.168
  LoadShardBlock: 254.361 (3)
  PetaboxLoader3.datanode: 253.174 (4)
  PetaboxLoader3.resolve: 249.729 (2)
  load_resource: 266.994
*/