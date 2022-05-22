"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var pupil_routes_1 = __importDefault(require("./routes/pupil.routes"));
var app = (0, express_1["default"])();
app.use((0, cors_1["default"])());
app.use(express_1["default"].json());
app.use(express_1["default"].urlencoded({ extended: true }));
app.use('/pupils', pupil_routes_1["default"]);
app.listen(process.env.PORT || 4563, function () {
    console.log('Server is running port ::4563');
});
//# sourceMappingURL=server.js.map