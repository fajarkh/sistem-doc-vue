"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4331],{90789:(t,e,r)=>{r.d(e,{Z:()=>o});var n=r(99682);const a={props:["form"],name:"FileSelector",components:{TiptapVuetify:n.CL},data:function(){return{images:[],extensions:[n.Ay,n.V6,n.rU,n.v6,n.Re,n.Tx,n.HC,n.DY,n.GS,n.Ee,[n.X6,{options:{levels:[1,2,3]}}],n.d8,n.EK,n.bo,n.nv,n.U1],contents:"\n      <h1>Yay Headlines!</h1>\n      <p>All these <strong>cool tags</strong> are working now.</p>\n    "}},methods:{input:function(){this.$emit("input",this.contents)},onInit:function(){this.form.content&&(this.content=this.form.content)},selectImage:function(t){this.$emit("select-file",t)}}};const o=(0,r(51900).Z)(a,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("tiptap-vuetify",{attrs:{extensions:t.extensions},model:{value:t.form.content,callback:function(e){t.$set(t.form,"content",e)},expression:"form.content"}}),t._v(" "),t._l(t.images,(function(e,n){return r("v-img",{key:"img-"+n,staticClass:"ma-2 selectable",attrs:{alt:e.alt,src:e.src,multiple:""},on:{click:function(r){return t.selectImage(e)}}})}))],2)}),[],!1,null,null,null).exports},44331:(t,e,r)=>{r.r(e),r.d(e,{default:()=>v});var n=r(80001),a=r(90789),o=r(6225),s=r(8093),l=r(20629);function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){u(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function u(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}const m={props:["form"],components:{VFileInput:o.Z,Editor:a.Z,BarqunDatePicker:s.Z},data:function(){return{categories:[],authors:[],status:[{key:"Draft",value:"Draft"},{key:"Published",value:"Published"}]}},computed:c(c({},(0,l.rn)("base",["errors"])),(0,l.rn)("auth",["user"])),methods:c({},(0,l.OI)("base",["DEL_ERRORS"])),mounted:function(){var t=this;this.$http("tags",{params:{all:!0}}).then((function(e){var r=e.data;return t.tags=r})),this.$http("users",{params:{all:!0}}).then((function(e){var r=e.data;return t.authors=r})),this.$http("category",{params:{all:!0}}).then((function(e){var r=e.data;return t.categories=r}))},watch:{"form.tags_id":function(){}}};var f=r(51900);const d=(0,f.Z)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-row",[r("v-col",{attrs:{cols:"12",sm:"6",md:"12"}},[r("v-text-field",{attrs:{label:"Title"},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1),t._v(" "),r("v-col",{attrs:{cols:"12",sm:"6",md:"12"}},[r("v-text-field",{attrs:{label:"Subtitle"},model:{value:t.form.subtitle,callback:function(e){t.$set(t.form,"subtitle",e)},expression:"form.subtitle"}})],1),t._v(" "),r("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[r("v-select",{attrs:{items:t.status,"item-value":"value","item-text":"key",label:"Status",required:""},model:{value:t.form.status,callback:function(e){t.$set(t.form,"status",e)},expression:"form.status"}})],1),t._v(" "),r("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[r("v-autocomplete",{attrs:{items:t.categories,"item-value":"id","item-text":"name",label:"Category",clearable:"",error:t.errors.category_id,"error-messages":t.errors.category_id},on:{input:function(e){return t.DEL_ERRORS("category_id")}},model:{value:t.form.category_id,callback:function(e){t.$set(t.form,"category_id",e)},expression:"form.category_id"}})],1),t._v(" "),r("v-col",{attrs:{cols:"12",sm:"6",md:"12"}},[r("div",{staticClass:"subtitle-1 mb-2",domProps:{textContent:t._s("Contents")}}),t._v(" "),r("Editor",{attrs:{form:t.form,placeholder:"Write something …"}})],1),t._v(" "),r("v-col",{attrs:{cols:"12",sm:"6",md:"12"}},[r("VFileInput",{attrs:{form:t.form,label:"File Foto"}})],1)],1)],1)}),[],!1,null,null,null).exports,p={components:{DataTable:n.Z,ModulForm:d},data:function(){return{pic:"",dialog:!1,moduleName:"Article",slots:["image","tanggal"],params:{with:["users"]},headers:[{text:"Tanggal",value:"tanggal"},{text:"Foto",value:"image"},{text:"title",value:"short_title"},{text:"subtitle",value:"short_subtitle"},{text:"Status",value:"status"},{text:"Actions",value:"actions",align:"center",sortable:!1}]}},methods:{openPic:function(t){this.dialog=!0,this.pic=t},cancel:function(){this.dialog=!1}}};const v=(0,f.Z)(p,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{attrs:{elevation:"2"}},[r("DataTable",{attrs:{moduleName:t.moduleName,headers:t.headers,formData:!0,slots:t.slots,params:t.params},scopedSlots:t._u([{key:"modal-form",fn:function(t){var e=t.editedItem;return[r("ModulForm",{attrs:{form:e}})]}},{key:"image",fn:function(e){var n=e.item;return[r("v-btn",{attrs:{icon:""}},[r("v-list-item-avatar",[r("v-dialog",{attrs:{"max-width":"30%"},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:t.cancel.apply(null,arguments)}},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[r("v-card",[r("v-img",{attrs:{src:t.pic,alt:"",contain:""}})],1)],1),t._v(" "),r("img",{attrs:{width:"90",src:n.image_link,alt:"Foto",contain:""},on:{click:function(e){return t.openPic(n.image_link)}}})],1)],1)]}},{key:"tanggal",fn:function(e){var r=e.item;return[t._v("\n      "+t._s(t.$moment(r.created_at).format("DD-M-Y"))+"\n    ")]}}])})],1)}),[],!1,null,null,null).exports}}]);