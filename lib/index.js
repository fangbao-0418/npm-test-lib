"use strict";

var __createBinding = void 0 && (void 0).__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);

  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function get() {
        return m[k];
      }
    };
  }

  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

exports.__esModule = true;
exports.ConfigProvider = exports.Button = void 0;

var button_1 = __importDefault(require("./compoments/button"));

var config_provider_1 = __importDefault(require("./compoments/config-provider"));

var button_2 = require("./compoments/button");

__createBinding(exports, button_2, "default", "Button");

var config_provider_2 = require("./compoments/config-provider");

__createBinding(exports, config_provider_2, "default", "ConfigProvider");

exports["default"] = {
  Button: button_1["default"],
  ConfigProvider: config_provider_1["default"]
};