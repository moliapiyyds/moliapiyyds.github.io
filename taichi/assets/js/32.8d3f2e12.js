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

(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{225:function(t,r,a){"use strict";a.r(r);var e=a(0),_=Object(e.a)({},(function(){var t=this,r=t.$createElement,a=t._self._c||r;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"模块白名单"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模块白名单"}},[t._v("#")]),t._v(" 模块白名单")]),t._v(" "),a("h2",{attrs:{id:"为什么显示模块暂不支持？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么显示模块暂不支持？"}},[t._v("#")]),t._v(" 为什么显示模块暂不支持？")]),t._v(" "),a("p",[t._v("通常情况下有两个原因：")]),t._v(" "),a("ol",[a("li",[t._v("只有在太极阳下才能使用这个模块，而你处于太极阴模式。有一些模块比如重力工具箱、绿色守护，他们需要拦截系统进程才能起作用，而太极阴做不到这一点，因此会提示暂不支持；实际上也永远不可能支持（除非你切换到太极阳）。")]),t._v(" "),a("li",[t._v("这个模块不在太极的"),a("strong",[t._v("模块白名单")]),t._v("之中。")])]),t._v(" "),a("h2",{attrs:{id:"什么是模块白名单，为什么有这个？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是模块白名单，为什么有这个？"}},[t._v("#")]),t._v(" 什么是模块白名单，为什么有这个？")]),t._v(" "),a("p",[t._v("只有在模块白名单中的模块才会被太极加载，进而生效。")]),t._v(" "),a("p",[t._v("为什么要这么做？ 为了安全。")]),t._v(" "),a("p",[t._v("类 Xposed 模块有着极高的系统权限，并且它很难被标准的 Android 权限模型所限制。打个比方，模块可以作用于系统进程，然后以系统的身份去发出网络请求，如果你仅仅针对这个模块本身关闭掉网络权限，那这个操作对它没有任何作用，它依然可以访问网络，并且你很难追踪到它。更可怕的是，模块可以拿着它作用的宿主（可以是任何高权限的系统进程）做任何事情，包括恶意行为。事实上，已经有一些模块这样干了，比如之前爆料的"),a("a",{attrs:{href:"https://web.archive.org/web/20240302122202/https://mp.weixin.qq.com/s/RHNXuu60b4mb_tVLtf0GXQ",target:"_blank",rel:"noopener noreferrer"}},[t._v("应用控制器"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("为了最大程度地阻止这个缺陷，太极通过白名单来限制模块：只有被证明是安全的模块才能在太极中生效。")]),t._v(" "),a("p",[t._v("另外，白名单还有一个额外的好处：可以阻止模块被破解，从而保护开发者的利益。")]),t._v(" "),a("h2",{attrs:{id:"如何把模块加入太极白名单？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何把模块加入太极白名单？"}},[t._v("#")]),t._v(" 如何把模块加入太极白名单？")]),t._v(" "),a("ol",[a("li",[t._v("打开 "),a("a",{attrs:{href:"https://web.archive.org/web/20240302122202/http://admin.taichi.cool",target:"_blank",rel:"noopener noreferrer"}},[t._v("太极管理后台"),a("OutboundLink")],1),t._v(" 然后注册一个账号。")]),t._v(" "),a("li",[t._v("上传你想要试用的模块。")]),t._v(" "),a("li",[t._v("等待管理员来审核模块。")])])])}),[],!1,null,null,null);r.default=_.exports}}]);

}
/*
     FILE ARCHIVED ON 12:22:02 Mar 02, 2024 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 09:19:33 Nov 10, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.484
  exclusion.robots: 0.018
  exclusion.robots.policy: 0.007
  esindex: 0.009
  cdx.remote: 9.297
  LoadShardBlock: 227.207 (3)
  PetaboxLoader3.datanode: 94.389 (4)
  PetaboxLoader3.resolve: 268.917 (3)
  load_resource: 146.382
*/