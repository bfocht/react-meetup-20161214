webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(1);

	var _index = __webpack_require__(2);

	var _index2 = _interopRequireDefault(_index);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(0, _reactDom.render)(_react2.default.createElement(_index2.default, { items: [1, 2, 3] }), document.getElementById('js-main'));

/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _checkboxWithLabel = __webpack_require__(3);

	var _checkboxWithLabel2 = _interopRequireDefault(_checkboxWithLabel);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IndexComponent = function (_Component) {
	  _inherits(IndexComponent, _Component);

	  function IndexComponent() {
	    _classCallCheck(this, IndexComponent);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(IndexComponent).apply(this, arguments));
	  }

	  _createClass(IndexComponent, [{
	    key: 'render',
	    value: function render() {
	      if (this.props.items.length === 0) {
	        return _react2.default.createElement(
	          'p',
	          { ref: 'empty' },
	          'Index is empty.'
	        );
	      }

	      return _react2.default.createElement(
	        'section',
	        null,
	        _react2.default.createElement(
	          'h2',
	          null,
	          'Phoenix ReactJS'
	        ),
	        _react2.default.createElement(
	          'ul',
	          { ref: 'indexList', className: 'index-list' },
	          this.props.items.map(function (item, index) {
	            return _react2.default.createElement(
	              'li',
	              { key: index },
	              ' ',
	              _react2.default.createElement(_checkboxWithLabel2.default, null),
	              ' item ',
	              item
	            );
	          })
	        )
	      );
	    }
	  }]);

	  return IndexComponent;
	}(_react.Component);

	IndexComponent.defaultProps = {
	  items: []
	};

	exports.default = IndexComponent;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var CheckboxWithLabel = function (_Component) {
	  _inherits(CheckboxWithLabel, _Component);

	  function CheckboxWithLabel(props) {
	    _classCallCheck(this, CheckboxWithLabel);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(CheckboxWithLabel).call(this, props));

	    _this.state = { isChecked: false };

	    _this.onChange = _this.onChange.bind(_this);
	    return _this;
	  }

	  _createClass(CheckboxWithLabel, [{
	    key: "onChange",
	    value: function onChange() {
	      this.setState({ isChecked: !this.state.isChecked });
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(
	        "label",
	        null,
	        _react2.default.createElement("input", {
	          type: "checkbox",
	          checked: this.state.isChecked,
	          onChange: this.onChange
	        }),
	        this.state.isChecked ? this.props.labelOn : this.props.labelOff
	      );
	    }
	  }]);

	  return CheckboxWithLabel;
	}(_react.Component);

	exports.default = CheckboxWithLabel;

/***/ }
]);