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

(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{220:function(t,e,v){"use strict";v.r(e);var i=v(0),_=Object(i.a)({},(function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"开发者模式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#开发者模式"}},[t._v("#")]),t._v(" 开发者模式")]),t._v(" "),v("p",[t._v("在开发者模式下，我们可以拉取手机的日志信息，也可以使用 ADB 等高级功能；但是"),v("strong",[t._v("开发者模式")]),t._v("需要自行开启，以下是开启教程。")]),t._v(" "),v("h2",{attrs:{id:"通用方法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#通用方法"}},[t._v("#")]),t._v(" 通用方法")]),t._v(" "),v("p",[t._v("在 Android 系统中，开启开发者模式的常见方法为：")]),t._v(" "),v("ol",[v("li",[t._v("打开手机的系统设置。")]),t._v(" "),v("li",[t._v("找到系统设置中的“关于手机” 或者类似的"),v("strong",[t._v("展示手机信息")]),t._v("的选项。")]),t._v(" "),v("li",[t._v('在"关于手机" 或类似页面点击"版本号"，连续点击 7 次；此时开发者选项已经开启。')]),t._v(" "),v("li",[t._v("再次进入系统设置，在“更多设置” （或类似选项）中寻找“开发者选项”即可进入。")])]),t._v(" "),v("p",[t._v("有一些系统对可能有修改，但总体流程大同小异，如果你的手机或系统相关教程在下面没有列出，你可以遵循上面的思路自行开启。")]),t._v(" "),v("h2",{attrs:{id:"小米-miui"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#小米-miui"}},[t._v("#")]),t._v(" 小米 MIUI")]),t._v(" "),v("p",[t._v("首先打开手机的“系统设置”，在此页面中点击“我的设备”：")]),t._v(" "),v("img",{attrs:{src:"/devmode/miui/miui_devmode1.jpeg",alt:"打开系统设置",width:"240"}}),t._v(" "),v("p",[t._v("然后点击“全部参数”：")]),t._v(" "),v("img",{attrs:{src:"/devmode/miui/miui_devmode2.jpeg",alt:"打开系统设置",width:"240"}}),t._v(" "),v("p",[t._v("接下来点击这个“MIUI版本”，连续点击 7 次，会出现 Toast 提示：")]),t._v(" "),v("img",{attrs:{src:"/devmode/miui/miui_devmode3.jpeg",alt:"打开系统设置",width:"240"}}),t._v(" "),v("p",[t._v("点击完毕后，开发者选项已经开启；此时我们回退到系统设置的首页，往下滑动，点击“更多设置”：")]),t._v(" "),v("img",{attrs:{src:"/devmode/miui/miui_devmode4.jpeg",alt:"打开系统设置",width:"240"}}),t._v(" "),v("p",[t._v("在“更多设置”中，进入“开发者选项”：")]),t._v(" "),v("img",{attrs:{src:"/devmode/miui/miui_devmode5.jpeg",alt:"打开系统设置",width:"240"}}),t._v(" "),v("p",[t._v("在开发者选项中，往下滑动，开启“USB调试”开关；此时可能有一些 MIUI 的提示，点击确认即可。")]),t._v(" "),v("img",{attrs:{src:"/devmode/miui/miui_devmode6.jpeg",alt:"打开系统设置",width:"240"}}),t._v(" "),v("h2",{attrs:{id:"华为-emui-鸿蒙"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#华为-emui-鸿蒙"}},[t._v("#")]),t._v(" 华为 EMUI / 鸿蒙")]),t._v(" "),v("p",[t._v("首先打开手机的“设置”，然后滑动到最下方，点击“关于手机”：")]),t._v(" "),v("img",{attrs:{src:"/devmode/emui/emui_devmode1.jpg",alt:"打开系统设置",width:"240"}}),t._v(" "),v("p",[t._v("在此页面中点击“版本号“这一栏，连续点击 7 次；会出现开发者选项已开启的提示：")]),t._v(" "),v("img",{attrs:{src:"/devmode/emui/emui_devmode2.jpg",alt:"打开系统设置",width:"240"}}),t._v(" "),v("p",[t._v("然后回到系统设置的首页，滑动到最下方，点击“系统和更新“：")]),t._v(" "),v("img",{attrs:{src:"/devmode/emui/emui_devmode3.jpg",alt:"打开系统设置",width:"240"}}),t._v(" "),v("p",[t._v("在“系统和更新”中，点击“开发人员选项”：")]),t._v(" "),v("img",{attrs:{src:"/devmode/emui/emui_devmode4.jpg",alt:"打开系统设置",width:"240"}}),t._v(" "),v("p",[t._v("在“开发人员选项“页面中往下滑动，选择“USB 调试”，将此开关打开即可：")]),t._v(" "),v("img",{attrs:{src:"/devmode/emui/emui_devmode5.jpg",alt:"打开系统设置",width:"240"}})])}),[],!1,null,null,null);e.default=_.exports}}]);

}
/*
     FILE ARCHIVED ON 12:22:02 Mar 02, 2024 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 09:19:25 Nov 10, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.708
  exclusion.robots: 0.026
  exclusion.robots.policy: 0.011
  esindex: 0.013
  cdx.remote: 5.092
  LoadShardBlock: 92.057 (3)
  PetaboxLoader3.datanode: 107.489 (4)
  load_resource: 49.476
  PetaboxLoader3.resolve: 29.124
*/