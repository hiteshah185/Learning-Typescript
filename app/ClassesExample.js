/// <reference path="interfacesExample.ts" />
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Developer = /** @class */ (function () {
    function Developer() {
    }
    Object.defineProperty(Developer.prototype, "title", {
        get: function () {
            return this._title;
        },
        set: function (newTitle) {
            this._title = newTitle.toLowerCase();
        },
        enumerable: false,
        configurable: true
    });
    return Developer;
}());
var WebDeveloper = /** @class */ (function (_super) {
    __extends(WebDeveloper, _super);
    function WebDeveloper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WebDeveloper.prototype.writeTypeScript = function () {
        console.log('I am writing typescript');
    };
    return WebDeveloper;
}(Developer));
