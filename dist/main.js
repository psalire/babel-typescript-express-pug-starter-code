"use strict";

var _Server = _interopRequireDefault(require("./Server"));

var _argparse = require("argparse");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var argparser = new _argparse.ArgumentParser({});
argparser.add_argument('-p', '--port', {
  help: 'Port to run server on'
});
var args = argparser.parse_args();
var server = new _Server["default"](args.port);
server.start();