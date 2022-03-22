"use strict";

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

exports.__esModule = true;
exports.ConfigContext = void 0;

var react_1 = __importDefault(require("react"));

var context_1 = require("./context");

exports.ConfigContext = context_1.ConfigContext;

var ConfigProvider = function ConfigProvider(props) {
  return react_1["default"].createElement(context_1.ConfigContext.Provider, {
    value: {}
  }, props.children);
};

exports["default"] = ConfigProvider;