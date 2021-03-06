'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Sidebar;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _panelPropertiesEditor = require('./panel-properties-editor/panel-properties-editor');

var _panelPropertiesEditor2 = _interopRequireDefault(_panelPropertiesEditor);

var _panelLayers = require('./panel-layers');

var _panelLayers2 = _interopRequireDefault(_panelLayers);

var _panelGuides = require('./panel-guides');

var _panelGuides2 = _interopRequireDefault(_panelGuides);

var _panelLayerElements = require('./panel-layer-elements');

var _panelLayerElements2 = _interopRequireDefault(_panelLayerElements);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Sidebar(_ref) {
  var width = _ref.width,
      height = _ref.height,
      state = _ref.state;

  return _react2.default.createElement(
    'aside',
    {
      style: { backgroundColor: "#28292D", display: "block", overflow: "scroll", width: width, height: height },
      onKeyDown: function onKeyDown(event) {
        return event.stopPropagation();
      },
      onKeyUp: function onKeyUp(event) {
        return event.stopPropagation();
      },
      className: 'sidebar'
    },
    _react2.default.createElement(
      'div',
      { className: 'layer-elements' },
      _react2.default.createElement(_panelLayerElements2.default, { state: state })
    ),
    _react2.default.createElement(
      'div',
      { className: 'properties' },
      _react2.default.createElement(_panelPropertiesEditor2.default, { state: state })
    ),
    _react2.default.createElement(
      'div',
      { className: 'layers' },
      _react2.default.createElement(_panelLayers2.default, { state: state })
    )
  );
}

Sidebar.propTypes = {
  width: _react.PropTypes.number.isRequired,
  height: _react.PropTypes.number.isRequired,
  state: _react.PropTypes.object.isRequired
};