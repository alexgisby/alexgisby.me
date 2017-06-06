'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Tag = function () {
    function Tag(data) {
        _classCallCheck(this, Tag);

        this.data = data;
    }

    _createClass(Tag, [{
        key: 'getId',
        value: function getId() {
            return this.data.url;
        }
    }, {
        key: 'getName',
        value: function getName() {
            return this.data.name;
        }
    }, {
        key: 'getType',
        value: function getType() {
            return this.data.type;
        }
    }, {
        key: 'getUrl',
        value: function getUrl() {
            return '/' + this.data.url;
        }
    }, {
        key: 'getDescription',
        value: function getDescription() {
            return this.data.description || '';
        }
    }]);

    return Tag;
}();

exports.default = Tag;