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

(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{224:function(v,_,t){"use strict";t.r(_);var a=t(0),e=Object(a.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h2",{attrs:{id:"阴阳之门"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#阴阳之门"}},[v._v("#")]),v._v(" 阴阳之门")]),v._v(" "),t("h3",{attrs:{id:"阴阳之门的用途"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#阴阳之门的用途"}},[v._v("#")]),v._v(" 阴阳之门的用途")]),v._v(" "),t("ol",[t("li",[v._v("可以大幅优化太极创建应用和升级应用的流程；不再需要手动确认，整个流程可以一气呵成。")]),v._v(" "),t("li",[v._v("额外提供类似冰箱的冻结功能；可以冻结和隐藏应用。")]),v._v(" "),t("li",[v._v("无极模式在太极卸载之后仍然可以保留，需太极版本 9.3.9 以上。")])]),v._v(" "),t("h3",{attrs:{id:"开启步骤"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#开启步骤"}},[v._v("#")]),v._v(" 开启步骤")]),v._v(" "),t("ol",{attrs:{start:"0"}},[t("li",[v._v("首先确保您已安装太极，并且您知道如何操作 adb 命令。")]),v._v(" "),t("li",[v._v("进入手机「设置 - 帐户」，删除 所有 的帐户，包括你的 Google 帐户（之后可以再登录回来）。")]),v._v(" "),t("li",[v._v("如果您之前设置过多用户或手机自带访客模式、应用双开等，也需要一并关闭或删除（之后可以打开）。")]),v._v(" "),t("li",[t("strong",[v._v("在电脑上执行命令： "),t("code",[v._v("adb shell dpm set-device-owner me.weishu.exp/.DeviceAdmin")]),v._v(" （请复制，勿手输）")])]),v._v(" "),t("li",[v._v("如果显示 Success 之类的字样，那么表明阴阳之门已经开启，也可以把之前删除的帐号加回来了。")])]),v._v(" "),t("p",[v._v("PS. 如果遇到问题，请参考下面未设置成功的问题；或者你可以尝试"),t("a",{attrs:{href:"https://web.archive.org/web/20240302122202/https://www.atmb.top/",target:"_blank",rel:"noopener noreferrer"}},[v._v("秋之盒"),t("OutboundLink")],1),v._v("一键激活。")]),v._v(" "),t("h3",{attrs:{id:"常见问题："}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常见问题："}},[v._v("#")]),v._v(" 常见问题：")]),v._v(" "),t("h4",{attrs:{id:"通过adb设置的重启会失效吗？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#通过adb设置的重启会失效吗？"}},[v._v("#")]),v._v(" 通过ADB设置的重启会失效吗？")]),v._v(" "),t("p",[v._v("不会。设置一次之后永久有效，不论是升级太极版本还是升级系统版本都不会失效；除非你卸载太极重新安装或者把系统恢复出厂设置。")]),v._v(" "),t("h4",{attrs:{id:"设置成功之后能否关闭开发者选项-usb调试？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设置成功之后能否关闭开发者选项-usb调试？"}},[v._v("#")]),v._v(" 设置成功之后能否关闭开发者选项/USB调试？")]),v._v(" "),t("p",[v._v("可以。在某些手机上，如OPPO/VIVO，开启开发者选项之后通知栏会有一个黄条提示，直接关闭开发者选项即可。\n但是，通知栏提示“设备被管理”是没有办法的；如果接受不了，可以在关于-关闭阴阳之门关闭。不影响太极模块的使用。")]),v._v(" "),t("h4",{attrs:{id:"未设置成功？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#未设置成功？"}},[v._v("#")]),v._v(" 未设置成功？")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("问：提示 “Not allowed to ... already several accounts on the device”")])]),v._v(" "),t("li",[t("p",[v._v("答：第 1 步的账户没删干净，请注销您手机上所有的账户，包括 Google 账号和系统自带的如小米账户、三星账户等。注：Xperia 或 ZUK 手机在设置时请拔出 SIM 卡，之后再插入。")])]),v._v(" "),t("li",[t("p",[v._v("问：提示 “Trying to set the device owner, but device owner is already set.”")])]),v._v(" "),t("li",[t("p",[v._v("答：你手机中可能安装有 Island，冰箱，小黑屋等应用并给了它设备管理员权限（如Island的皇帝之名，冰箱的免Root模式之一等）。很遗憾，系统中的设备管理员只能有一个；如果你需要开启太极的阴阳之门，需要收回其他应用的设备管理员权限。")])]),v._v(" "),t("li",[t("p",[v._v("问：提示 “Not allowed to ... already several users on the device”")])]),v._v(" "),t("li",[t("p",[v._v("答：第 2 步的用户没有删除干净。")])]),v._v(" "),t("li",[t("p",[v._v("问：提示 “android.os.DeadObjectException ...”")])]),v._v(" "),t("li",[t("p",[v._v("答：尝试更换数据线或重启手机。")])]),v._v(" "),t("li",[t("p",[v._v("问：MIUI 用户提示 “Neither user xxx nor current process has android.permission.MANAGE_DEVICE_ADMINS”")])]),v._v(" "),t("li",[t("p",[v._v("答：MIUI 用户请手动在系统设置- 开发者设置里，开启「USB 调试（安全设置）」。")])]),v._v(" "),t("li",[t("p",[v._v("问：MIUI 提示 “java.lang.SecurityException: Calling identity is not authorized”")])]),v._v(" "),t("li",[t("p",[v._v("答：MIUI 用户请手动在系统设置- 开发者设置里，开启「USB 调试（安全设置）」。")])]),v._v(" "),t("li",[t("p",[v._v("问：我尝试在安卓设置-设备管理器设置中启用太极以代替以上设置步骤，但是发现无法使用，怎么办？")])]),v._v(" "),t("li",[t("p",[v._v("答：设备管理员不等于设备管理器，启用设备管理器也无法启动阴阳之门。")])])]),v._v(" "),t("h4",{attrs:{id:"已设置成功，但是？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#已设置成功，但是？"}},[v._v("#")]),v._v(" 已设置成功，但是？")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("问：设置完成后手机通知栏出现提示「手机被管理」，这是正常的吗？")])]),v._v(" "),t("li",[t("p",[v._v("答：正常的，这正是阴阳之门的工作原理。")])]),v._v(" "),t("li",[t("p",[v._v("问：我不想用了，然后发现卸载不了？")])]),v._v(" "),t("li",[t("p",[v._v("答：请先移除所有在阴阳之门内部的应用，然后到太极设置中取消设备管理员，然后卸载。")])]),v._v(" "),t("li",[t("p",[v._v("问：无极模式用不了？")])]),v._v(" "),t("li",[t("p",[v._v("答：升级太极版本到 "),t("strong",[v._v("9.3.9")]),v._v(" 或者更高。")])])]),v._v(" "),t("h4",{attrs:{id:"国产手机及三星系统请注意："}},[t("a",{staticClass:"header-anchor",attrs:{href:"#国产手机及三星系统请注意："}},[v._v("#")]),v._v(" 国产手机及三星系统请注意：")]),v._v(" "),t("p",[v._v("国产手机系统时常修改 Android 底层，做出一些不符合规定的修改，因此其与设备管理员模式的兼容性或多或少存在一些问题，常见如下：")]),v._v(" "),t("ul",[t("li",[v._v("每次冻结 App 弹出卸载提示，解冻弹出权限请求（华为、锤子）")]),v._v(" "),t("li",[v._v("通知栏闪烁「设备管理员已开启，点击关闭」（OPPO、VIVO）")]),v._v(" "),t("li",[v._v("自带的双开无法使用（华为、MIUI）")]),v._v(" "),t("li",[v._v("安全文件夹 和 虹膜识别等功能被禁用（三星）")]),v._v(" "),t("li",[v._v("偶尔刚解冻的 App 无法联网（一加等）")]),v._v(" "),t("li",[v._v("状态栏和锁屏显示「设备由太极管理」")])]),v._v(" "),t("p",[v._v("如不能接受上述问题，请考虑使用其他模式或不要开启阴阳之门。")]),v._v(" "),t("p",[v._v("设备管理员模式不需要反复连接电脑设置，一次配置，终身有效，只要不卸载太极或是刷机，都可以正常使用。")]),v._v(" "),t("p",[v._v("（Forked from Icebox-Docs)")])])}),[],!1,null,null,null);_.default=e.exports}}]);

}
/*
     FILE ARCHIVED ON 12:22:02 Mar 02, 2024 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 09:19:30 Nov 10, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.435
  exclusion.robots: 0.013
  exclusion.robots.policy: 0.007
  esindex: 0.009
  cdx.remote: 5.358
  LoadShardBlock: 315.838 (3)
  PetaboxLoader3.datanode: 201.11 (4)
  load_resource: 105.482
  PetaboxLoader3.resolve: 40.561
*/