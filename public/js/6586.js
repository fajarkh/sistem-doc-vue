"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6586],{96586:(t,e,r)=>{r.r(e),r.d(e,{default:()=>p});var n=r(47130),a=r(20629),o=r(69074),l=r(19934);function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function u(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?u(Object(r),!0).forEach((function(e){c(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e,r){return(e=function(t){var e=function(t,e){if("object"!==s(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==s(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===s(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}const f={props:["form","dialog"],components:{BarqunDatePicker:o.Z,BarqunVSelect:l.Z},data:function(){return{tahun_ajaran:[],switch1:!1}},methods:i(i({},(0,a.OI)("base",["CLEAR_ERRORS","SET_STANDBY"])),{},{getTahunAjaran:function(){var t=this;this.$http("tahun-ajaran",{params:{all:!0,groupBy:"tahun",pluck:["tahun"]}}).then((function(e){var r=e.data;return t.tahun_ajaran=r}))}}),mounted:function(){this.getTahunAjaran()},watch:{dialog:function(t){t&&(this.CLEAR_ERRORS(),this.getTahunAjaran())}},computed:i({},(0,a.rn)("base",["errors"]))};var m=r(51900);const d=(0,m.Z)(f,(function(){var t=this,e=t._self._c;return e("div",[e("v-row",[e("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[e("v-switch",{attrs:{label:"Standby"},on:{change:t.SET_STANDBY},model:{value:t.switch1,callback:function(e){t.switch1=e},expression:"switch1"}})],1)],1),t._v(" "),t._.isEmpty(t.errors)?t._e():e("v-row",[e("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[e("v-alert",{attrs:{border:"top",color:"red lighten-2",dark:""}},[e("ul",t._l(t.errors,(function(r){return e("li",{key:r[0]},[t._v(t._s(r[0]))])})),0)])],1)],1),t._v(" "),e("v-row",[e("v-col",{attrs:{cols:"6",sm:"6",md:"6"}},[e("v-text-field",{attrs:{autofocus:"",label:"Nama Mapel"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.$emit("save")}},model:{value:t.form.nama,callback:function(e){t.$set(t.form,"nama",e)},expression:"form.nama"}})],1),t._v(" "),e("v-col",{attrs:{cols:"6",sm:"6",md:"6"}},[e("v-text-field",{attrs:{autofocus:"",label:"Alias"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.$emit("save")}},model:{value:t.form.alias,callback:function(e){t.$set(t.form,"alias",e)},expression:"form.alias"}})],1),t._v(" "),e("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[e("v-textarea",{attrs:{label:"Keterangan"},model:{value:t.form.keterangan,callback:function(e){t.$set(t.form,"keterangan",e)},expression:"form.keterangan"}})],1)],1)],1)}),[],!1,null,null,null).exports,v={components:{DataTable:n.Z,ModulForm:d},data:function(){return{moduleName:"Mata Pelajaran",headers:[{text:"Nama",value:"nama"},{text:"Alias",value:"alias"},{text:"Actions",value:"actions",align:"center",sortable:!1}]}}};const p=(0,m.Z)(v,(function(){var t=this,e=t._self._c;return e("v-card",{attrs:{elevation:"2"}},[e("DataTable",{attrs:{moduleName:t.moduleName,headers:t.headers},scopedSlots:t._u([{key:"modal-form",fn:function(t){var r=t.editedItem,n=t.save,a=t.dialog;return[e("ModulForm",{attrs:{form:r,dialog:a},on:{save:n}})]}},{key:"status",fn:function(r){var n=r.item;return[e("v-btn",{attrs:{rounded:"","x-small":"",color:"Aktif"==n.status?"success":"blue-grey",dark:""}},["Tidak Aktif"==n.status?e("v-icon",{attrs:{dark:"",left:""}},[t._v("\n          mdi-minus-circle\n        ")]):t._e(),t._v("\n        "+t._s(n.status)+"\n        "),"Aktif"==n.status?e("v-icon",{attrs:{dark:"",right:""}},[t._v("\n          mdi-checkbox-marked-circle\n        ")]):t._e()],1)]}}])})],1)}),[],!1,null,null,null).exports}}]);