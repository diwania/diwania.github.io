import{e as T,d as u,aF as E,_ as $,h as a,i as d,j as n,n as F,L as M,M as W,t as h,k as P,aG as K,aH as Q,aI as H,aJ as k,aK as U,aL as I,aM as D,w as g,aN as L,aO as q,at as o,aP as R,aQ as N,aR as Z,aS as B,aT as x,z,a0 as G,aU as ee,aV as se,az as V,Q as S,ad as J,B as Y,m as te,Z as ae}from"./index-CRuw8UfQ.js";import{p as ie}from"./model-DMx4w5CK.js";const oe=T({props:["type","pc"],methods:{},computed:{tname(){return u.matchExpr(this.type,[[E.PayerMax,"-payermax"],[E.Checkout,"-checkout"]],()=>"")||""}}}),ne=n("div",{class:"cviewDeco"},[n("i")],-1);function re(e,i,s,t,r,c){return a(),d("div",{class:F(["cview",{"-pc":e.pc}])},[n("div",{class:F(["cviewIcon",e.tname])},null,2),ne],2)}const ue=$(oe,[["render",re]]);var de={VUE_APP_BASE_URL:"https://arab-pk.badambiz.com/",VUE_APP_ENV:"production",VUE_APP_LANGUAGE:"ar",VUE_APP_PROJ_NAME:"",VUE_APP_DEPLOY_SERVER:"ar",VUE_APP_DEPLOY_SERVER_DIST:"",VUE_APP_PROXY_URL:"https://test20-pk.badambiz.com/",VUE_APP_PUBLIC_PATH:"/",VUE_APP_CDN_PATH:"https://sawa-official.github.io/",VUE_APP_TRANSLATE_PROJ:"sawa-h5",VUE_APP_TRANSLATE_SHEET:"sawa官网优化",VUE_APP_TRANSLATE_DOCUMENT:"",VUE_APP_TRANSLATE_SHEET_LANG:"",VUE_APP_FLAVOR:"ksa",VUE_APP_DEPLOY:"github",VUE_APP_SUFFIX:"mobile",VUE_APP_CWD:"代表项目本地根目录不要尝试改变这个值否则你会被炒鱿鱼",VUE_APP_EXTERNALS:"",VUE_APP_ICON:"https://oss-pk-arab.badambiz.com/4c9334bb9c4d7bd3389f9ac272dcf7dc_logo_ksa.ico",VUE_APP_TITLE:"SawaKSA",VUE_APP_SOURCEMAP:"false",VUE_APP_DISABLE_CSS_MODULE:"false",VUE_APP_RELEASE_URL:"https://arab-pk-release.badambiz.com/",VUE_APP_DIST:"dist/mobile",VUE_APP_VERSION:"1.0.326",VITE_APP_TEST:1,VUE_APP_NO_GEN_INDEX_HTML:"true",VUE_APP_WEBSITE_VERSION:"1.0.326"};const _e=T({props:["type"],methods:{},computed:{iconsV(){try{return ie[this.type][de.VUE_APP_FLAVOR]}catch(e){return[]}}}}),ce={class:"bview"};function le(e,i,s,t,r,c){return a(),d("div",ce,[(a(!0),d(M,null,W(e.iconsV,(_,m)=>(a(),d("div",{class:F(["bviewIcon","-"+_]),key:m},null,2))),128))])}const pe=$(_e,[["render",le]]),ye=T({props:["succeed","title","desc"],methods:{},computed:{iconV(){return this.succeed?"-succeed":"-failed"}}}),he={class:"rview"},me={class:"rviewTitle"},fe={key:0,class:"rviewDesc"},ge={class:"rviewDesc"};function Pe(e,i,s,t,r,c){return a(),d("div",he,[n("div",{class:F(["rviewIcon",e.iconV])},null,2),n("div",me,h(e.title),1),e.desc?(a(),d("div",fe,h(e.desc),1)):P("",!0),n("div",ge,[K(e.$slots,"default")])])}const Ee=$(ye,[["render",Pe]]),Ae=T({props:["succeed","title","desc"],methods:{_T:u._T,onConfirm(){this.close(),window.location.reload()},close(){this.$parent.show=!1}},computed:{iconV(){return this.succeed?"-succeed":"-failed"}}}),be={class:"rmodal"},Te={class:"rmodalTitle"};function $e(e,i,s,t,r,c){return a(),d("div",be,[n("div",Te,h(e._T("罚款金额发生改变，请刷新")),1),n("div",{class:"rmodalBtn",onClick:i[0]||(i[0]=(..._)=>e.onConfirm&&e.onConfirm(..._))},h(e._T("刷新")),1)])}const X=$(Ae,[["render",$e]]),we=T({components:{ChannelView:ue,BankViews:pe,ResultView:Ee},data(){return{loaded:!1,hasResult:!1,succeed:!1,broken:!1,refund_amount:0,display_uid:0,channels:u.getArgsFromUrl("open_payermax")?[E.Checkout,E.PayerMax]:[E.Checkout],channelSelected:E.Checkout,rules:[u._T("系统会根据用户账号的退款金额计算需要缴纳的罚款金额。成功缴纳罚款后，账号将会自动解封。账号内因退款而被扣除的钻石不予返还，若账号内钻石因退款而扣至负数，需要额外补纳相应差额。"),u._T("根据账号的退款封号次数，罚金的金额会不断翻倍。"),u._T("若对于解封账号或解封规则有疑问，请联系Sawa官方人员（WhatsApp：+20 1080541454）")],isCharging:!1}},mounted(){this.init()},methods:{_T:u._T,textWithRTL:u.textWithRTL,sprintf:u.sprintf,init(){const e=u.getArgsFromUrl("result");if(e!==null){if(this.succeed=String(e)==="0",!localStorage.getItem("last_display_uid")&&this.succeed){this.broken=!0,this.loaded=!0;return}const i=u.getArgsFromUrl("ext");let s=0,t=0;try{const r=JSON.parse(i);console.log("extObj",r),s=r.display_uid||localStorage.getItem("last_display_uid"),t=r.pay_at,t&&s&&(localStorage.getItem("rt_".concat(s,"_").concat(t))?this.succeed?(this.broken=!0,this.loaded=!0):this.$router.push({name:"fines",query:{id:localStorage.getItem("last_id")}}):(localStorage.setItem("rt_".concat(s,"_").concat(t),"1"),this.succeed&&this.reportPage("支付成功页面")))}catch(r){}finally{this.display_uid=s,this.broken||(this.hasResult=!0)}return}this.reportPage("支付页面"),this.getInfo()},async getInfo(){const e=u.getArgsFromUrl("id")||0;localStorage.setItem("last_id",e.toString()),localStorage.setItem("last_display_uid","");const[i,{result:s,data:t}]=await Q(e);if(this.loaded=!0,!i||s!==0){s===21260&&(this.broken=!0);return}this.refund_amount=t.refund_amount,this.display_uid=t.display_uid,localStorage.setItem("last_display_uid",t.display_uid)},async onCreateFines(){var i,s,t,r;if(this.isCharging)return;this.isCharging=!0;let e;H().source===1?e="独立端":H().source===4&&(e="内嵌ludo"),k(B.click_recharge,{h5_deviceid:U(),act_from:I(),login_source:D(),is_login:!!g().skey,duration:0,other_id:this.display_uid,source:"罚款解封页面",type:L(),number:0,amount:this.refund_amount,page:"罚款解封页面",website_version:q(),display_uid:(i=g().user)==null?void 0:i.uid,pay_distinct_id:Number((s=o().pay2User)==null?void 0:s.uid),pay_display_uid:String((t=o().pay2User)==null?void 0:t.display_uid),session_id:R(!0),good_id:(((r=o().currentPayItem)==null?void 0:r.payItemDisplayMethods[0].methods[0].recharge_id)||0).toString(),is_support_applepay:N(),is_gray:!!Z(),app_type:e,is_auto:!1}),u.matchExpr(this.channelSelected,[[E.Checkout,this.onCreateCheckout],[E.PayerMax,this.onCreatePayermax]])},async onCreatePayermax(){var i,s,t,r,c,_,m,A,l,f,w,v;const e=Date.now();try{const p=u.getArgsFromUrl("id")||"",[b,{result:y,data:C,message:O}]=await x({id:p,amount:this.refund_amount,ext:await this.getExt()});if(await k(B.h5_create_pay_result,{h5_deviceid:U(),act_from:I(),login_source:D(),is_login:!!g().skey,duration:Date.now()-e,source:"罚款解封页面",type:L(),page:"罚款解封页面",is_succeed:b&&y===0,fail_reason:b&&y===0?"":"".concat(y,":").concat(O),display_uid:(i=g().user)==null?void 0:i.uid,pay_distinct_id:Number((s=o().pay2User)==null?void 0:s.uid),pay_display_uid:String((t=o().pay2User)==null?void 0:t.display_uid),session_id:R(),good_id:(((r=o().currentPayItem)==null?void 0:r.payItemDisplayMethods[0].methods[0].recharge_id)||0).toString(),amount:((c=o().currentPayItem)==null?void 0:c.amount)||0,number:((_=o().currentPayItem)==null?void 0:_.coin)||0,is_support_applepay:N()}),this.isCharging=!1,!b||y!==0){if(y===21262){z(X,{});return}G(u._T("提交失败，请联系客服人员"));return}C.url&&(this.isCharging=!0,window.location.href=C.url)}catch(p){console.error(p),this.isCharging=!1,await k(B.h5_create_pay_result,{h5_deviceid:U(),act_from:I(),login_source:D(),is_login:!!g().skey,duration:Date.now()-e,source:"罚款解封页面",type:L(),page:"罚款解封页面",is_succeed:!1,fail_reason:(p==null?void 0:p.message)||"",display_uid:(m=g().user)==null?void 0:m.uid,pay_distinct_id:Number((A=o().pay2User)==null?void 0:A.uid),pay_display_uid:String((l=o().pay2User)==null?void 0:l.display_uid),session_id:R(),good_id:(((f=o().currentPayItem)==null?void 0:f.payItemDisplayMethods[0].methods[0].recharge_id)||0).toString(),amount:(w=o().currentPayItem)==null?void 0:w.amount,number:((v=o().currentPayItem)==null?void 0:v.coin)||0,is_support_applepay:N()})}},async onCreateCheckout(){var i,s,t,r,c,_,m,A,l,f,w,v;const e=Date.now();try{const p=u.getArgsFromUrl("id")||"",[b,{result:y,data:C,message:O}]=await ee({id:p,amount:this.refund_amount,ext:await this.getExt()});if(await k(B.h5_create_pay_result,{h5_deviceid:U(),act_from:I(),login_source:D(),is_login:!!g().skey,duration:Date.now()-e,source:"罚款解封页面",type:L(),page:"罚款解封页面",is_succeed:b&&y===0,fail_reason:b&&y===0?"":"".concat(y,":").concat(O),display_uid:(i=g().user)==null?void 0:i.uid,pay_distinct_id:Number((s=o().pay2User)==null?void 0:s.uid),pay_display_uid:String((t=o().pay2User)==null?void 0:t.display_uid),session_id:R(),good_id:(((r=o().currentPayItem)==null?void 0:r.payItemDisplayMethods[0].methods[0].recharge_id)||0).toString(),amount:(c=o().currentPayItem)==null?void 0:c.amount,number:((_=o().currentPayItem)==null?void 0:_.coin)||0,is_support_applepay:N()}),this.isCharging=!1,console.log("ret",y,C),!b||y!==0){if(y===21262){z(X,{});return}G(u._T("提交失败，请联系客服人员"));return}C.url&&(this.isCharging=!0,window.location.href=C.url)}catch(p){console.error(p),this.isCharging=!1,await k(B.h5_create_pay_result,{h5_deviceid:U(),act_from:I(),login_source:D(),is_login:!!g().skey,duration:Date.now()-e,source:"罚款解封页面",type:L(),page:"罚款解封页面",is_succeed:!1,fail_reason:(p==null?void 0:p.message)||"",display_uid:(m=g().user)==null?void 0:m.uid,pay_distinct_id:Number((A=o().pay2User)==null?void 0:A.uid),pay_display_uid:String((l=o().pay2User)==null?void 0:l.display_uid),session_id:R(),good_id:(((f=o().currentPayItem)==null?void 0:f.payItemDisplayMethods[0].methods[0].recharge_id)||0).toString(),amount:(w=o().currentPayItem)==null?void 0:w.amount,number:((v=o().currentPayItem)==null?void 0:v.coin)||0,is_support_applepay:N()})}},reportPage(e){u.reportWebSensors("h5_pay_fines_page_show",{page:e})},async getExt(){return JSON.stringify(await se())}}}),Ce={class:"finesPage"},Se={key:1,class:"fhead"},Ve=["innerHTML"],Fe={class:"fhead__fee"},ve={key:2,class:"fbody"},ke={class:"fbodyWay"},Ue={class:"fbodyWay__way"},Ie={class:"fbodyWay__wayTitle"},De={class:"fbodyWay__wayItems"},Le=n("div",{class:"fbodyWay__hr"},null,-1),Re={class:"fbodyWay__bank"},Ne={class:"fbodyWay__bankTitle"},Be={class:"fAbout"},Me={class:"fAbout__title"},Oe={class:"fAbout__itemNum"},We=["innerHTML"];function He(e,i,s,t,r,c){const _=V("ResultView"),m=V("ChannelView"),A=V("BankViews");return a(),d("div",Ce,[e.loaded?(a(),d(M,{key:0},[e.broken?(a(),S(_,{key:0,title:e._T("链接失效"),succeed:!1},{default:J(()=>[te(h(e.textWithRTL(e._T("本链接已失效，有任何疑问请反馈给Sawa官方人员"))),1)]),_:1},8,["title"])):P("",!0),e.broken?P("",!0):(a(),d("div",Se,[e.display_uid?(a(),d("div",{key:0,class:"fhead__id",innerHTML:e.textWithRTL(e.sprintf(e._T("解封账号 {n} 需要缴纳罚款金额"),{n:"<i>ID ".concat(e.display_uid,"</i>")}))},null,8,Ve)):P("",!0),n("div",Fe,"$"+h(e.refund_amount),1)])),e.broken?P("",!0):(a(),d("div",ve,[n("div",ke,[n("div",Ue,[n("div",Ie,h(e._T("充值渠道")),1),n("div",De,[(a(!0),d(M,null,W(e.channels,(l,f)=>(a(),S(m,{class:F(["fbodyWay__wayItem",{"-on":l===e.channelSelected}]),type:l,onClick:w=>e.channelSelected=l,key:f},null,8,["class","type","onClick"]))),128))])]),Le,n("div",Re,[n("div",Ne,h(e._T("可用充值方式")),1),Y(A,{type:e.channelSelected},null,8,["type"])])]),n("div",{class:"fConfirm",onClick:i[0]||(i[0]=(...l)=>e.onCreateFines&&e.onCreateFines(...l))},[n("i",null,h(e._T("支付罚款")),1)]),n("div",Be,[n("div",Me,h(e._T("解封规则说明")),1),(a(!0),d(M,null,W(e.rules,(l,f)=>(a(),d("div",{class:"fAbout__item",key:f},[n("div",Oe,h(f+1),1),n("div",{class:F(["fAbout__itemText",{"-center":f===2}])},h(e.textWithRTL(l)),3)]))),128))])]))],64)):P("",!0),e.hasResult?(a(),d(M,{key:1},[e.succeed?(a(),S(_,{key:0,title:e._T("支付成功"),succeed:!0},{default:J(()=>[n("div",{innerHTML:e.textWithRTL(e.sprintf(e._T("用户账号 {n} 将在几分钟内解封，请耐心等待"),{n:"<i>(ID: ".concat(e.display_uid||"-",")</i>")}))},null,8,We)]),_:1},8,["title"])):P("",!0),e.succeed?P("",!0):(a(),S(_,{key:1,title:e._T("支付失败"),succeed:!1},null,8,["title"]))],64)):P("",!0)])}const j=$(we,[["render",He]]),ze=T({components:{MobileView:j},data(){return{}},mounted(){},methods:{}}),Ge={class:"pcFines"};function Je(e,i,s,t,r,c){const _=V("MobileView");return a(),d("div",Ge,[Y(_)])}const Xe=$(ze,[["render",Je]]),Ye=T({components:{PcFines:Xe,MobileFines:j},data(){return{isPc:ae()}}}),je={class:"fineWrap"};function Ke(e,i,s,t,r,c){const _=V("PcFines"),m=V("MobileFines");return a(),d("div",je,[e.isPc?(a(),S(_,{key:0})):(a(),S(m,{key:1}))])}const Ze=$(Ye,[["render",Ke],["__scopeId","data-v-d5a45da2"]]);export{Ze as default};
