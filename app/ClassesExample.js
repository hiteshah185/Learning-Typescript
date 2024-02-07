var _Developer_salary;
var Developer = /** @class */ (function () {
    function Developer() {
        _Developer_salary.set(this, void 0);
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
_Developer_salary = new WeakMap();
