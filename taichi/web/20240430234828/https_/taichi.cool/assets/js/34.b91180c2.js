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

(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{227:function(t,s,v){"use strict";v.r(s);var a=v(0),_=Object(a.a)({},(function(){var t=this,s=t.$createElement,v=t._self._c||s;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"太极·阳"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#太极·阳"}},[t._v("#")]),t._v(" 太极·阳")]),t._v(" "),v("h2",{attrs:{id:"什么是-太极·阳？"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#什么是-太极·阳？"}},[t._v("#")]),t._v(" 什么是 太极·阳？")]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),v("p",[v("strong",[t._v("太极·阳 是增强版的太极")]),t._v("。")])]),t._v(" "),v("p",[t._v("普通版的 太极 无法作用于系统 APP，并且创建 APP 需要先卸载。太极·Magisk 借助一个 magisk 模块注入系统，从而可以作用所有的 APP；可以实现 Xposed 框架的完整功能。")]),t._v(" "),v("h3",{attrs:{id:"与太极·阴的区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#与太极·阴的区别"}},[t._v("#")]),t._v(" 与太极·阴的区别")]),t._v(" "),v("p",[t._v("具体来说，太极·阳 与太极·阴的太极有何区别？")]),t._v(" "),v("ol",[v("li",[t._v("太极·Magisk 可以拦截系统，因此可以额外支持系统级别的 Xposed 模块；如边缘手势/核心破解/绿色守护/应用控制器等。")]),t._v(" "),v("li",[t._v("太极·Magisk 不需要修改 APP，因此可以做到 秒添加 APP；再也不用烦心地等待。")]),t._v(" "),v("li",[t._v("由于 太极·Magisk 不再需要修改 APP，因此 可以完美解决 微信/QQ 等应用无法被其他应用识别的问题。")]),t._v(" "),v("li",[t._v("太极·Magisk 有能力对系统做更多地控制，因此可以做到更加稳定。")])]),t._v(" "),v("h3",{attrs:{id:"与-xposed-框架的区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#与-xposed-框架的区别"}},[t._v("#")]),t._v(" 与 Xposed 框架的区别")]),t._v(" "),v("p",[t._v("与 rovo89 的 Xposed 相比，太极·Magisk 又有什么特点？")]),t._v(" "),v("ol",[v("li",[t._v("太极·Magisk 支持 Android 9.0 到最新的 Android 11。")]),t._v(" "),v("li",[t._v("太极·Magisk 不影响全局。可以只对特定的应用开启 Xposed 功能，无需使用 Xposed 的 APP 运行起来就跟系统没有 Xposed 一样；完美契合某些金融/银行类 APP。")]),t._v(" "),v("li",[t._v("太极·Magisk 针对 APP 的模块，无需重启即刻生效。")]),t._v(" "),v("li",[t._v("太极·Magisk 更不易被检测。太极的弱侵入特性不再修改 运行时，也不在全局环境中留下任何踪影；因此只要想要做到，可以轻松逃过各种代码类型的检测。")])]),t._v(" "),v("h2",{attrs:{id:"如何使用？"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#如何使用？"}},[t._v("#")]),t._v(" 如何使用？")]),t._v(" "),v("div",{staticClass:"custom-block warning"},[v("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),v("p",[t._v("使用之前，请注意 "),v("a",{attrs:{href:"#%E6%95%B0%E6%8D%AE%E5%A4%87%E4%BB%BD"}},[t._v("数据备份")]),t._v(" 并确保你清楚 "),v("a",{attrs:{href:"#%E5%A6%82%E4%BD%95%E8%87%AA%E6%95%91"}},[t._v("如何自救")]),t._v("！")])]),t._v(" "),v("p",[t._v("简单来说，分为如下几步：")]),t._v(" "),v("ol",[v("li",[t._v("安装好 Magisk。")]),t._v(" "),v("li",[t._v("刷入 太极 提供的 magisk 模块。")]),t._v(" "),v("li",[t._v("安装好太极。")]),t._v(" "),v("li",[t._v("打开太极 App，你会看到太极·阳的激活提示。")])]),t._v(" "),v("p",[t._v("如果你需要使用模块，比如说，你希望在太极·阳中使用抢红包模块，步骤如下：")]),t._v(" "),v("ol",[v("li",[t._v("进入太极 App，点击首页右下角的悬浮按钮，然后点击"),v("strong",[t._v("添加")])]),t._v(" "),v("li",[t._v("选择你需要使用 Xposed 模块的 App，比如 QQ")]),t._v(" "),v("li",[t._v("点击添加应用界面底部的添加按钮")]),t._v(" "),v("li",[t._v("回到首页，点击悬浮按钮进入 "),v("strong",[t._v("模块管理")]),t._v(" 页面")]),t._v(" "),v("li",[t._v("勾选 QQ 抢红包模块")]),t._v(" "),v("li",[t._v("强制关闭 QQ，重新打开之后即可正常使用模块")])]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),v("p",[t._v("只有当 App 加入到太极之后模块才会生效，如果你希望全局生效，可以选择开启设置里面的“全局模式”")])]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),v("p",[t._v("模块勾选之后通常是即使生效的，您无需重启手机；只需要关闭目标进程然后重新打开即可。不过如果目标进程是系统进程，那么意味着您需要重启手机。")])]),t._v(" "),v("h2",{attrs:{id:"数据备份"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#数据备份"}},[t._v("#")]),t._v(" 数据备份")]),t._v(" "),v("p",[t._v("太极·阳使用需要解锁和刷机，虽然极少可能发生，但是依然可能会导致设备变砖；请在使用之前注意数据备份。")]),t._v(" "),v("p",[t._v("无论如何，刷机有风险，数据无价。\n在刷入 Magisk 以及太极模块之前，请一定要备份好数据。开发者不对任何因为刷机丢失数据负责。")]),t._v(" "),v("h2",{attrs:{id:"如何自救？"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#如何自救？"}},[t._v("#")]),t._v(" 如何自救？")]),t._v(" "),v("p",[t._v("一旦出现了异常情况，无法开机；如何处理呢？有两种办法：")]),t._v(" "),v("h3",{attrs:{id:"面具内置"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#面具内置"}},[t._v("#")]),t._v(" 面具内置")]),t._v(" "),v("p",[t._v("进入 Recovery，然后删除"),v("code",[t._v("/data/adb/modules/taichi")]),t._v(" 目录即可。")]),t._v(" "),v("h3",{attrs:{id:"太极内置办法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#太极内置办法"}},[t._v("#")]),t._v(" 太极内置办法")]),t._v(" "),v("ol",[v("li",[t._v("首先进入 recovery 模式命令行，不赘述。")]),t._v(" "),v("li",[t._v("执行命令 rm -rf /data/taichi && rm -rf /data/system/taichi")]),t._v(" "),v("li",[t._v("重启手机")])])])}),[],!1,null,null,null);s.default=_.exports}}]);

}
/*
     FILE ARCHIVED ON 12:22:03 Mar 02, 2024 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 09:19:35 Nov 10, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.666
  exclusion.robots: 0.023
  exclusion.robots.policy: 0.009
  esindex: 0.013
  cdx.remote: 9.285
  LoadShardBlock: 172.43 (3)
  PetaboxLoader3.resolve: 134.105 (4)
  PetaboxLoader3.datanode: 107.779 (4)
  load_resource: 100.764
*/