"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2029],{24274:(t,a,e)=>{e.d(a,{Z:()=>n});var r=e(23645),s=e.n(r)()((function(t){return t[1]}));s.push([t.id,"",""]);const n=s},82029:(t,a,e)=>{e.r(a),e.d(a,{default:()=>O});var r=e(80001),s=e(20629),n=e(8093),i=e(39922);function l(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,r)}return e}function o(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?l(Object(e),!0).forEach((function(a){m(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function m(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}const d={props:["form","dialog"],components:{BarqunDatePicker:n.Z,BarqunVSelect:i.Z},data:function(){return{kelas:[],mata_pelajaran:[],absensi_siswa:{}}},methods:o(o({},(0,s.OI)("base",["CLEAR_ERRORS"])),{},{init:function(){var t=this;this.$http("rombel-tahun-ajaran",{params:{all:!0}}).then((function(a){var e=a.data;return t.kelas=e})),this.$http("mata-pelajaran",{params:{all:!0}}).then((function(a){var e=a.data;return t.mata_pelajaran=e}))}}),mounted:function(){this.init(),this.absensi_siswa=this.form.absensi_siswa||{},this.form.id||"pendidik"!=this.user.role||(this.form.guru_id=this.user.ptk.id)},watch:{"form.absensi_siswa":function(t){this.absensi_siswa=t,console.log("absen")},absensi_siswa:function(t){this.form.absensi_siswa=t},dialog:function(t){t&&(this.form.id||"pendidik"!=this.user.role||(this.form.guru_id=this.user.ptk.id),this.CLEAR_ERRORS(),this.init(),this.kelas=[],this.mata_pelajaran=[],this.absensi_siswa={})}},computed:o(o({},(0,s.rn)("base",["errors"])),(0,s.rn)("auth",["user"]))};var c=e(51900);const u=(0,c.Z)(d,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[t._.isEmpty(t.errors)?t._e():e("v-row",[e("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[e("v-alert",{attrs:{border:"top",color:"red lighten-2",dark:""}},[e("ul",t._l(t.errors,(function(a){return e("li",{key:a[0]},[t._v(t._s(a[0]))])})),0)])],1)],1),t._v(" "),e("v-row",[e("v-col",{attrs:{cols:"12",sm:"12",md:"6"}},[e("BarqunVSelect",{attrs:{name:"kelas_id",form:t.form,items:t.kelas,itemValue:"id",itemText:"kelas",label:"Kelas",required:""}})],1),t._v(" "),e("v-col",{attrs:{cols:"12",sm:"12",md:"6"}},[e("BarqunVSelect",{attrs:{name:"mata_pelajaran_id",form:t.form,items:t.mata_pelajaran,itemValue:"id",itemText:"nama",label:"Mata Pelajaran",required:""}})],1),t._v(" "),e("v-col",{attrs:{cols:"12",sm:"12",md:"6"}},[e("BarqunDatePicker",{attrs:{label:"Tanggal",field:"tanggal",form:t.form,required:""}})],1),t._v(" "),e("v-col",{attrs:{cols:"12",sm:"12",md:"6"}},[e("v-text-field",{attrs:{label:"Jam Ke"},model:{value:t.form.jam_ke,callback:function(a){t.$set(t.form,"jam_ke",a)},expression:"form.jam_ke"}})],1),t._v(" "),e("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[e("v-textarea",{attrs:{label:"Bahasan Materi",outlined:""},model:{value:t.form.bahasan_materi,callback:function(a){t.$set(t.form,"bahasan_materi",a)},expression:"form.bahasan_materi"}})],1),t._v(" "),e("v-col",{attrs:{cols:"12",sm:"12",md:"6"}},[e("v-textarea",{attrs:{label:"Hambatan",outlined:""},model:{value:t.form.hambatan,callback:function(a){t.$set(t.form,"hambatan",a)},expression:"form.hambatan"}})],1),t._v(" "),e("v-col",{attrs:{cols:"12",sm:"12",md:"6"}},[e("v-textarea",{attrs:{label:"Pemecahan",outlined:""},model:{value:t.form.pemecahan,callback:function(a){t.$set(t.form,"pemecahan",a)},expression:"form.pemecahan"}})],1),t._v(" "),e("v-col",{attrs:{cols:"12",sm:"6",md:"3"}},[e("v-text-field",{attrs:{label:"Hadir",outlined:""},model:{value:t.absensi_siswa.Hadir,callback:function(a){t.$set(t.absensi_siswa,"Hadir",a)},expression:"absensi_siswa['Hadir']"}})],1),t._v(" "),e("v-col",{attrs:{cols:"12",sm:"6",md:"3"}},[e("v-text-field",{attrs:{label:"Izin",outlined:""},model:{value:t.absensi_siswa.Izin,callback:function(a){t.$set(t.absensi_siswa,"Izin",a)},expression:"absensi_siswa['Izin']"}})],1),t._v(" "),e("v-col",{attrs:{cols:"12",sm:"6",md:"3"}},[e("v-text-field",{attrs:{label:"Sakit",outlined:""},model:{value:t.absensi_siswa.Sakit,callback:function(a){t.$set(t.absensi_siswa,"Sakit",a)},expression:"absensi_siswa['Sakit']"}})],1),t._v(" "),e("v-col",{attrs:{cols:"12",sm:"6",md:"3"}},[e("v-text-field",{attrs:{label:"Alpa",outlined:""},model:{value:t.absensi_siswa.Alpa,callback:function(a){t.$set(t.absensi_siswa,"Alpa",a)},expression:"absensi_siswa['Alpa']"}})],1),t._v(" "),e("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[e("v-textarea",{attrs:{label:"Keterangan"},model:{value:t.form.keterangan,callback:function(a){t.$set(t.form,"keterangan",a)},expression:"form.keterangan"}})],1)],1)],1)}),[],!1,null,null,null).exports;function v(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,r)}return e}function _(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?v(Object(e),!0).forEach((function(a){h(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):v(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function h(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}const b={props:["id"],data:function(){return{search:"",headers:[]}},mounted:function(){this.load()},computed:_(_({},(0,s.rn)("base",["loading","item"])),{},{filteredItem:function(){return this.item.tanggal_lahir=this.$moment(this.item.tanggal_lahir).format("D-M-Y"),this._.difference(Object.keys(this.item),["id","sekolah_id","kepegawaian_id","mata_pelajaran_id","created_at","sekolah","kepegawaian","mata_pelajaran","guru_sekolah","tanggal","updated_at"])}}),watch:{id:function(){this.load()}},methods:_(_({},(0,s.nv)("base",["getData"])),{},{load:function(){this.getData({customUrl:"jurnal-harian-guru",id:this.id||this.$route.params.id,params:{with:["guru","mataPelajaran","kelas.tahunajaran","kelas.rombel"]}})}})};var f=e(93379),p=e.n(f),w=e(24274),g={insert:"head",singleton:!1};p()(w.Z,g);w.Z.locals;const k=(0,c.Z)(b,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("v-card",{attrs:{loading:t.loading}},[e("v-card-title",{staticClass:"sticky",attrs:{"primary-title":""}},[t._v("\n      Detail Data Jurnal Harian Guru\n      "),e("v-spacer")],1),t._v(" "),e("v-divider"),t._v(" "),e("div",{staticClass:"pa-5"},[t._.isEmpty(t.item)?t._e():e("v-simple-table",{attrs:{dense:""},scopedSlots:t._u([{key:"default",fn:function(){return[e("tbody",[e("tr",[e("td",{attrs:{width:"10"}},[t._v("Nama Guru")]),t._v(" "),e("td",{attrs:{width:"10"}},[t._v(":")]),t._v(" "),e("td",[t._v(t._s(t.item.guru&&t.item.guru.nama))])]),t._v(" "),e("tr",[e("td",{attrs:{width:"10"}},[t._v("Mata Pelajaran")]),t._v(" "),e("td",{attrs:{width:"10"}},[t._v(":")]),t._v(" "),e("td",[t._v(t._s(t.item.mata_pelajaran.nama))])]),t._v(" "),e("tr",[e("td",{attrs:{width:"10"}},[t._v("Semester")]),t._v(" "),e("td",{attrs:{width:"10"}},[t._v(":")]),t._v(" "),e("td",[t._v(t._s(t.item.kelas.tahunajaran.tahun_ajaran))])]),t._v(" "),e("tr",[e("td",{attrs:{width:"10"}},[t._v("Tanggal")]),t._v(" "),e("td",{attrs:{width:"10"}},[t._v(":")]),t._v(" "),e("td",[t._v("\n                "+t._s(t.$moment(t.item.tanggal).format("DD-M-Y, H:mm:ss"))+"\n              ")])]),t._v(" "),e("tr",[e("td",{attrs:{width:"10"}},[t._v("Kelas")]),t._v(" "),e("td",{attrs:{width:"10"}},[t._v(":")]),t._v(" "),e("td",[t._v(t._s(t.item.kelas&&t.item.kelas.rombel.nama))])]),t._v(" "),e("tr",[e("td",{attrs:{width:"10"}},[t._v("Jam Ke")]),t._v(" "),e("td",{attrs:{width:"10"}},[t._v(":")]),t._v(" "),e("td",[t._v(t._s(t.item.jam_ke))])]),t._v(" "),e("tr",[e("td",{attrs:{width:"10"}},[t._v("Bahasan Materi")]),t._v(" "),e("td",{attrs:{width:"10"}},[t._v(":")]),t._v(" "),e("td",[t._v(t._s(t.item.bahasan_materi))])]),t._v(" "),e("tr",[e("td",{attrs:{width:"10"}},[t._v("Hambatan")]),t._v(" "),e("td",{attrs:{width:"10"}},[t._v(":")]),t._v(" "),e("td",[t._v(t._s(t.item.hambatan))])]),t._v(" "),e("tr",[e("td",{attrs:{width:"10"}},[t._v("Pemecahan")]),t._v(" "),e("td",{attrs:{width:"10"}},[t._v(":")]),t._v(" "),e("td",[t._v(t._s(t.item.pemecahan))])]),t._v(" "),e("tr",[e("td",{attrs:{width:"10"}},[t._v("Status")]),t._v(" "),e("td",{attrs:{width:"10"}},[t._v(":")]),t._v(" "),e("td",[e("v-chip",{staticClass:"mt-2 mb-2",attrs:{color:"green","text-color":"white"}},[e("v-avatar",{staticClass:"green darken-4",attrs:{left:""}},[t._v(" "+t._s(t.item.absensi_siswa.Hadir)+" ")]),t._v("\n                  Hadir\n                ")],1),t._v(" "),e("v-chip",{staticClass:"mt-2 mb-2",attrs:{color:"blue","text-color":"white"}},[e("v-avatar",{staticClass:"blue darken-4",attrs:{left:""}},[t._v(" "+t._s(t.item.absensi_siswa.Izin)+" ")]),t._v("\n                  Izin\n                ")],1),t._v(" "),e("v-chip",{staticClass:"mt-2 mb-2",attrs:{color:"orange","text-color":"white"}},[e("v-avatar",{staticClass:"orange darken-4",attrs:{left:""}},[t._v(" "+t._s(t.item.absensi_siswa.Sakit)+" ")]),t._v("\n                  Sakit\n                ")],1),t._v(" "),e("v-chip",{staticClass:"mt-2 mb-2",attrs:{color:"red","text-color":"white"}},[e("v-avatar",{staticClass:"red darken-4",attrs:{left:""}},[t._v(" "+t._s(t.item.absensi_siswa.Alpa)+" ")]),t._v("\n                  Alpa\n                ")],1)],1)]),t._v(" "),e("tr",[e("td",{attrs:{width:"10"}},[t._v("Keterangan")]),t._v(" "),e("td",{attrs:{width:"10"}},[t._v(":")]),t._v(" "),e("td",[e("b",[t._v(t._s(t.item.keterangan))])])])])]},proxy:!0}],null,!1,2959480348)})],1),t._v(" "),e("v-divider")],1)],1)}),[],!1,null,null,null).exports,j={components:{DataTable:r.Z,ModulForm:u,ModulShow:k},data:function(){return{moduleName:"Jurnal Kelas",slots:["status"],headers:[{text:"#",value:"num"},{text:"Tanggal",value:"tanggal",slot:!0},{text:"Guru",value:"jadwal.guru.nama"},{text:"Mata Pelajaran",value:"jadwal.mata_pelajaran.nama",slot:!0},{text:"Semester",value:"jadwal.kelas.tahunajaran.tahun_ajaran"},{text:"Kelas",value:"jadwal.kelas.rombel.nama"},{text:"Status",value:"status"}],params:{with:["jadwal.guru","jadwal.mataPelajaran","jadwal.kelas.tahunajaran","jadwal.kelas.rombel"]}}}};const O=(0,c.Z)(j,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-card",{attrs:{elevation:"2"}},[t._t("sloty"),t._v(" "),e("DataTable",{attrs:{moduleName:t.moduleName,headers:t.headers,params:t.params,slots:t.slots,btnAdd:!1,showSelected:!1,clickable:"",btnShow:""},scopedSlots:t._u([{key:"modal-form",fn:function(t){var a=t.editedItem,r=t.save,s=t.dialog;return[e("ModulForm",{attrs:{form:a,dialog:s},on:{save:r}})]}},{key:"modal-show",fn:function(a){var r=a.editedItem;return[r.id?e("ModulShow",{attrs:{id:r.id}}):t._e()]}},{key:"status",fn:function(a){var r=a.item;return[r.hambatan||r.pemecahan?e("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(a){var s=a.on,n=a.attrs;return[e("div",t._g(t._b({},"div",n,!1),s),[r.hambatan&&!r.pemecahan?e("v-icon",{attrs:{dark:"",color:"warning"}},[t._v("\n              mdi-alert\n            ")]):t._e(),t._v(" "),r.hambatan&&r.pemecahan?e("v-icon",{attrs:{dark:"",color:"green"}},[t._v("\n              mdi-checkbox-marked-circle\n            ")]):t._e()],1)]}}],null,!0)},[t._v(" "),e("span",[t._v(t._s(r.hambatan&&!r.pemecahan?"Terdapat Hambatan":"Terdapat Pemecahan Hambatan"))])]):t._e()]}},{key:"tanggal",fn:function(a){var e=a.item;return[t._v(" "+t._s(t.$moment(e.tanggal).format("DD-MM-Y"))+" ")]}}])})],2)}),[],!1,null,null,null).exports}}]);