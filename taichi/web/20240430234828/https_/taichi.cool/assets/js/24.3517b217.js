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

(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{217:function(v,_,t){"use strict";t.r(_);var o=t(0),r=Object(o.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"如何给我报告-bug"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何给我报告-bug"}},[v._v("#")]),v._v(" 如何给我报告 BUG")]),v._v(" "),t("p",[v._v("如果你使用 APP 遇到了问题，通常情况下，如果你清晰明了地反馈你遇到的问题，并且提供充足的信息和错误日志，开发者会很乐意去解决问题；反之，如果你一味抱怨、反复强调自己遇到了问题需要解决，而不提供任何有效信息，我们通常会对此置之不理。我们理解你遇到问题时着急的心情，但是，"),t("strong",[v._v("准确地描述问题以及错误日志")]),v._v("才对解决问题有帮助。")]),v._v(" "),t("img",{attrs:{src:"/bugreport.png",alt:"bugrepot",width:"240"}}),v._v(" "),t("h2",{attrs:{id:"抓取日志"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#抓取日志"}},[v._v("#")]),v._v(" 抓取日志")]),v._v(" "),t("p",[v._v("日志文件，对开发者的帮助远远大于你文字的描述，胜过一切截图、录屏；因此，如果你愿意花时间给你遇到的问题抓取一份日志文件，那么开发者解决这个问题的意愿会大大提升。")]),v._v(" "),t("p",[v._v("请详细阅读 "),t("a",{attrs:{href:"adb#%E7%94%9F%E6%88%90%E9%94%99%E8%AF%AF%E6%97%A5%E5%BF%97"}},[v._v("ADB 抓取日志教程")])]),v._v(" "),t("h2",{attrs:{id:"错误示例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#错误示例"}},[v._v("#")]),v._v(" 错误示例")]),v._v(" "),t("p",[v._v("错误示例:")]),v._v(" "),t("blockquote",[t("p",[v._v("我微信老卡死。")])]),v._v(" "),t("p",[v._v("错误原因：没有提供充足的信息，对解决问题没有任何帮助；这种情况下，我除了回复你一个"),t("strong",[v._v("哦，我知道了。")]),v._v(" 让后什么也做不了。")]),v._v(" "),t("p",[v._v("正确示范1：")]),v._v(" "),t("blockquote",[t("p",[v._v("我微信老卡死。手机系统是小米11，系统版本是 Android 12，MIUI 12.5.6；微信版本是 8.0.24，用了微X模块，模块版本是 2.30；太极的版本是 9.3.7；我印象中太极之前没有这个问题，从 9.1.2 升级上来后就频繁卡死。")])]),v._v(" "),t("p",[v._v("由于信息充足，如果开发者有空，至少会验证一下你所说的情况，解决概率 50%。")]),v._v(" "),t("p",[v._v("正确示范2:")]),v._v(" "),t("blockquote",[t("p",[v._v("我微信老卡死。手机系统是小米11，系统版本是 Android 12，MIUI 12.5.6；微信版本是 8.0.24，用了微X模块，模块版本是 2.30；太极的版本是 9.3.7；我印象中太极之前没有这个问题，从 9.1.2 升级上来后就频繁卡死。")])]),v._v(" "),t("blockquote",[t("p",[v._v("我尝试过关闭模块，关闭后依然会出现卡死的情况；我把太极降级到 9.1.2 之后恢复了正常。")])]),v._v(" "),t("p",[v._v("由于你帮助开发者把问题范围缩小到了 9.1.2 - 9.3.7 之间，开发者只需要逐步回滚代码即可定位问题，解决概率 80%。")]),v._v(" "),t("p",[v._v("完美示范3:")]),v._v(" "),t("blockquote",[t("p",[v._v("我微信老卡死。手机系统是小米11，系统版本是 Android 12，MIUI 12.5.6；微信版本是 8.0.24，用了微X模块，模块版本是 2.30；太极的版本是 9.3.7；我印象中太极之前没有这个问题，从 9.1.2 升级上来后就频繁卡死。")])]),v._v(" "),t("blockquote",[t("p",[v._v("我尝试过关闭模块，关闭后依然会出现卡死的情况；我把太极降级到 9.1.2 之后恢复了正常。")])]),v._v(" "),t("blockquote",[t("p",[v._v("然后我继续尝试了 9.2.0, 9.2.1, 9.3.0, 9.3.1, 9.3.5, 9.3.7 版本，我发现从 9.3.1 起出现了这个问题。")])]),v._v(" "),t("blockquote",[t("p",[v._v("出问题的时候我用 ADB 抓了一份日志，日志文件在这里。")])]),v._v(" "),t("p",[v._v("我可以这么说，如果你这么反馈问题，就没有解决不了的 BUG。")]),v._v(" "),t("p",[v._v("其他类似错误示例：")]),v._v(" "),t("blockquote",[t("p",[v._v("我更新到新版太极后，QQ 打不开了。")])]),v._v(" "),t("p",[v._v("“新版”具体是哪个版本号？无法准确定义，你眼中的新版跟开发者眼中的新版可能完全不是一个版本。")]),v._v(" "),t("blockquote",[t("p",[v._v("最近越更新越拉胯了，微信经常卡死，之前没有这个情况。")])]),v._v(" "),t("p",[v._v("发泄情绪，对解决问题没有任何作用。")])])}),[],!1,null,null,null);_.default=r.exports}}]);

}
/*
     FILE ARCHIVED ON 12:22:02 Mar 02, 2024 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 09:19:23 Nov 10, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.953
  exclusion.robots: 0.054
  exclusion.robots.policy: 0.018
  esindex: 0.011
  cdx.remote: 5.193
  LoadShardBlock: 149.902 (3)
  PetaboxLoader3.datanode: 234.7 (4)
  load_resource: 258.446
  PetaboxLoader3.resolve: 143.167
*/