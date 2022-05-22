"use strict";
exports.__esModule = true;
exports.handleError = void 0;
function handleError(err) {
    console.error(err);
    return {
        message: 'Error retriving pupils',
        error: err
    };
}
exports.handleError = handleError;
//# sourceMappingURL=util.js.map