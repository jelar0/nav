import{a as H,b as Y}from"./chunk-343LN77H.js";import"./chunk-LWQTYJCR.js";import{a as I}from"./chunk-Q5M3I24H.js";import{d as et,f as it,h as nt,i as ot,j as rt,k as at,l as lt}from"./chunk-VQQG5WDM.js";import"./chunk-JTH2AHBE.js";import{l as Z,m as tt}from"./chunk-U3GYW7PN.js";import"./chunk-LUJTQ27Y.js";import{C as y}from"./chunk-KTVMEHFM.js";import{a as W,b as G,c as R}from"./chunk-GMWLRVWD.js";import"./chunk-6G426I4Q.js";import{a as J,b as q}from"./chunk-7TFMTIOM.js";import{b as j}from"./chunk-7GMUH3JT.js";import{Fb as K,Hb as Q,Jb as X,Tb as N,Z as E}from"./chunk-HXL462T3.js";import{Ba as x,Ca as v,Dd as F,Fd as V,Hb as u,Jb as l,Ld as A,Td as U,Vd as C,Xb as i,Yb as n,Yd as f,Zb as T,bc as b,ec as g,fd as $,gc as p,gd as L,hb as D,lb as e,mb as z,od as O,pc as a,qc as s,rc as S,tb as M,tc as P,ud as B,yc as k}from"./chunk-B4BI64Q2.js";function mt(o,r){if(o&1){let t=b();i(0,"button",11),g("click",function(){x(t);let c=p(2);return v(c.handleSubmit())}),a(1),n()}if(o&2){let t=p(2);l("nzLoading",t.submitting),e(),S(" ",t.$t("_save")," ")}}function ct(o,r){o&1&&(i(0,"div",12),a(1," \u5904\u7406\u5B8C\u6210\u6240\u6709\u6570\u636E\u540E\u9700\u8981\u70B9\u51FB\u4E00\u6B21\u4FDD\u5B58\u65B9\u53EF\u751F\u6548 "),n())}function st(o,r){if(o&1&&T(0,"tag-list",21),o&2){let t=p().$implicit;l("data",t.tags)}}function dt(o,r){if(o&1&&(i(0,"td",9),a(1),n()),o&2){let t=p().$implicit;e(),P(" ",t.extra.oneName," / ",t.extra.twoName," / ",t.extra.threeName," ")}}function pt(o,r){if(o&1){let t=b();i(0,"tr")(1,"td")(2,"div")(3,"a",13),g("click",function(){let c=x(t),_=c.$implicit,h=c.index,d=p(2);return v(d.handleConfirmGet(_,h))}),a(4),n()(),i(5,"div",14)(6,"a",15),g("nzOnConfirm",function(){let c=x(t).index,_=p(2);return v(_.handleDelete(c))}),a(7),n()()(),i(8,"td"),T(9,"app-logo",16),n(),i(10,"td")(11,"a",17),a(12),n()(),i(13,"td"),u(14,st,1,1,"tag-list",18),n(),i(15,"td")(16,"pre",19),a(17),n()(),u(18,dt,2,3,"td",20),i(19,"td"),a(20),n()()}if(o&2){let t=r.$implicit,m=p(2);e(4),s(m.$t("_collect")),e(2),l("nzPopconfirmTitle",m.$t("_confirmDel")),e(),S(" ",m.$t("_del")," "),e(2),l("src",t.icon)("name",t.name),e(2),l("href",t.url,D),e(),s(t.name),e(2),l("ngIf",t.tags),e(3),s(t.desc),e(),l("ngIf",t.extra),e(2),s(t.createdAt)}}function ft(o,r){if(o&1){let t=b();i(0,"div"),u(1,mt,2,2,"button",3),i(2,"button",4),g("click",function(){x(t);let c=p();return v(c.getUserCollect())}),a(3),n(),u(4,ct,2,0,"div",5),i(5,"nz-table",6,0)(7,"thead")(8,"tr")(9,"th",7),a(10),n(),i(11,"th",7),a(12),n(),i(13,"th",8),a(14),n(),i(15,"th",8),a(16),n(),i(17,"th",9),a(18),n(),i(19,"th",9),a(20),n(),i(21,"th"),a(22),n()()(),i(23,"tbody"),u(24,pt,21,11,"tr",10),n()()()}if(o&2){let t=p();e(),l("ngIf",!t.isSelfDevelop),e(),l("nzLoading",t.submitting),e(),S(" ",t.$t("_refresh")," "),e(),l("ngIf",!t.isSelfDevelop),e(),l("nzData",t.dataList)("nzShowPagination",!1),e(5),s(t.$t("_action")),e(2),s(t.$t("_icon")),e(2),s(t.$t("_webName")),e(2),s(t.$t("_associatedLabels")),e(2),s(t.$t("_webDesc")),e(2),s(t.$t("_webTag")),e(2),s(t.$t("_createAt")),e(2),l("ngForOf",t.dataList)("ngForTrackBy",t.trackByItem)}}var w=class o{constructor(r,t,m){this.message=r;this.modal=t;this.notification=m}$t=f;isSelfDevelop=A;submitting=!1;isPermission=!!F();dataList=[];authCode="";tagMap=U;ngOnInit(){this.getUserCollect()}handleDelete(r){this.submitting=!0,X({data:this.dataList[r]}).then(t=>{this.dataList=t.data?.data||[]}).finally(()=>{this.submitting=!1})}getUserCollect(){this.submitting=!0,Q().then(r=>{this.isPermission=!0,this.dataList=r.data?.data||[]}).finally(()=>{this.submitting=!1})}handleSubmitAuthCode(){this.submitting||!this.authCode||(V(this.authCode),this.getUserCollect())}handleConfirmGet(r,t){let m=this,c=0,_=0,h=0;try{c=C.findIndex(d=>d.title===r.extra.oneName),_=C[c].nav.findIndex(d=>d.title===r.extra.twoName),h=C[c].nav[_].nav.findIndex(d=>d.title===r.extra.threeName)}catch{this.notification.error(f("_error"),f("_classNoMatch"))}try{E.emit("CREATE_WEB",{detail:r,oneIndex:c,twoIndex:_,threeIndex:h,isMove:!0}),E.emit("SET_CREATE_WEB",{detail:null,callback(){m.handleDelete(t)}})}catch(d){this.notification.error(f("_error"),d.message)}}handleSubmit(){this.submitting||this.modal.info({nzTitle:f("_syncDataOut"),nzOkText:f("_confirmSync"),nzContent:f("_confirmSyncTip"),nzOnOk:()=>{this.submitting=!0,K({message:"update db",content:JSON.stringify(C),path:B}).then(()=>{this.message.success(f("_syncSuccessTip"))}).finally(()=>{this.submitting=!1})}})}trackByItem(r,t){return t.id}static \u0275fac=function(t){return new(t||o)(z(N),z(y),z(I))};static \u0275cmp=M({type:o,selectors:[["user-collect"]],features:[k([N,y,I])],decls:2,vars:2,consts:[["basicTable",""],["nzTip","Loading...",3,"nzSpinning"],[4,"ngIf"],["class","mt-2.5 mr-2.5","nz-button","","nzType","primary",3,"nzLoading","click",4,"ngIf"],["nz-button","",3,"click","nzLoading"],["class","mb-2.5 mt-2.5 color-red font-bold",4,"ngIf"],[3,"nzData","nzShowPagination"],["nzWidth","80px"],["nzWidth","100px"],["nzWidth","300px"],[4,"ngFor","ngForOf","ngForTrackBy"],["nz-button","","nzType","primary",1,"mt-2.5","mr-2.5",3,"click","nzLoading"],[1,"mb-2.5","mt-2.5","color-red","font-bold"],[3,"click"],[1,"mt-2.5"],["nz-popconfirm","","nzPopconfirmPlacement","rightTop","nzOkType","danger","nzPopconfirmPlacement","bottom",1,"color-red",3,"nzOnConfirm","nzPopconfirmTitle"],[3,"src","name"],["target","_blank",3,"href"],[3,"data",4,"ngIf"],[1,"desc"],["nzWidth","300px",4,"ngIf"],[3,"data"]],template:function(t,m){t&1&&(i(0,"nz-spin",1),u(1,ft,25,15,"div",2),n()),t&2&&(l("nzSpinning",m.submitting),e(),l("ngIf",m.isPermission))},dependencies:[O,$,L,q,J,R,G,W,j,lt,ot,et,it,at,nt,rt,tt,Z,H,Y],styles:[".add-btn[_ngcontent-%COMP%]{margin-bottom:20px;margin-right:20px}.desc[_ngcontent-%COMP%]{width:300px;white-space:pre-wrap}.ant-table-wrapper[_ngcontent-%COMP%]{overflow:auto}"]})};export{w as default};
