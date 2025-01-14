"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_examples_transaksi_Index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/examples/transaksi/Index.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/examples/transaksi/Index.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_DataTable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/DataTable */ "./resources/js/components/DataTable.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    DataTable: _components_DataTable__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      headers: [{
        text: 'Nama',
        value: 'nama'
      }, {
        text: 'No Hp',
        value: 'no_hp'
      }, {
        text: 'Email',
        value: 'email'
      }, {
        text: 'Actions',
        value: 'actions',
        sortable: false
      }],
      items: []
    };
  },
  created: function created() {
    this.initialize();
  },
  methods: {
    initialize: function initialize() {
      this.items = [{
        nama: 'Fikri',
        no_hp: '0822828111',
        email: 'fikri@gmail.com'
      }, {
        nama: 'Saif',
        no_hp: 237,
        email: 9.0
      }, {
        nama: 'Rifki',
        no_hp: 262,
        email: 16.0
      }];
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/examples/transaksi/Index.vue?vue&type=template&id=6a30b444&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/examples/transaksi/Index.vue?vue&type=template&id=6a30b444& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("v-card", {
    attrs: {
      elevation: "2"
    }
  }, [_c("DataTable", {
    attrs: {
      title: "Daftar Transaksi",
      headers: _vm.headers,
      items: _vm.items
    },
    scopedSlots: _vm._u([{
      key: "modal-form",
      fn: function fn(_ref) {
        var editedItem = _ref.editedItem;
        return [_c("v-row", [_c("v-col", {
          attrs: {
            cols: "12",
            sm: "6",
            md: "4"
          }
        }, [_c("v-text-field", {
          attrs: {
            label: "Nama"
          },
          model: {
            value: editedItem.nama,
            callback: function callback($$v) {
              _vm.$set(editedItem, "nama", $$v);
            },
            expression: "editedItem.nama"
          }
        })], 1), _vm._v(" "), _c("v-col", {
          attrs: {
            cols: "12",
            sm: "6",
            md: "4"
          }
        }, [_c("v-text-field", {
          attrs: {
            label: "No Hp"
          },
          model: {
            value: editedItem.no_hp,
            callback: function callback($$v) {
              _vm.$set(editedItem, "no_hp", $$v);
            },
            expression: "editedItem.no_hp"
          }
        })], 1), _vm._v(" "), _c("v-col", {
          attrs: {
            cols: "12",
            sm: "12",
            md: "4"
          }
        }, [_c("v-text-field", {
          attrs: {
            label: "Email"
          },
          model: {
            value: editedItem.email,
            callback: function callback($$v) {
              _vm.$set(editedItem, "email", $$v);
            },
            expression: "editedItem.email"
          }
        })], 1)], 1)];
      }
    }])
  })], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/views/examples/transaksi/Index.vue":
/*!*********************************************************!*\
  !*** ./resources/js/views/examples/transaksi/Index.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Index_vue_vue_type_template_id_6a30b444___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=6a30b444& */ "./resources/js/views/examples/transaksi/Index.vue?vue&type=template&id=6a30b444&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/views/examples/transaksi/Index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_6a30b444___WEBPACK_IMPORTED_MODULE_0__.render,
  _Index_vue_vue_type_template_id_6a30b444___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/examples/transaksi/Index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/examples/transaksi/Index.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/views/examples/transaksi/Index.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/examples/transaksi/Index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/examples/transaksi/Index.vue?vue&type=template&id=6a30b444&":
/*!****************************************************************************************!*\
  !*** ./resources/js/views/examples/transaksi/Index.vue?vue&type=template&id=6a30b444& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_6a30b444___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_6a30b444___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_6a30b444___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=template&id=6a30b444& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/examples/transaksi/Index.vue?vue&type=template&id=6a30b444&");


/***/ })

}]);