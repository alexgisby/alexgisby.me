"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TagCollection = function () {
    function TagCollection(description) {
        _classCallCheck(this, TagCollection);

        this.tags = [];
        this.description = description;
    }

    _createClass(TagCollection, [{
        key: "getDescription",
        value: function getDescription() {
            return this.description.charAt(0).toUpperCase() + this.description.slice(1);
        }
    }]);

    return TagCollection;
}();

exports.default = TagCollection;