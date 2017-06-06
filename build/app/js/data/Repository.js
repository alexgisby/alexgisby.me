'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _TagCollection = require('./Model/TagCollection');

var _TagCollection2 = _interopRequireDefault(_TagCollection);

var _Tag = require('./Model/Tag');

var _Tag2 = _interopRequireDefault(_Tag);

var _Project = require('./Model/Project');

var _Project2 = _interopRequireDefault(_Project);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Repository = function () {
    function Repository(data) {
        _classCallCheck(this, Repository);

        this.database = data;
    }

    _createClass(Repository, [{
        key: 'fetchTagsGroupedByType',
        value: function fetchTagsGroupedByType() {
            var allGroups = [];
            var tagMap = {};
            var tagMapIndex = 0;
            var collection = void 0;
            this.database.tags.map(function (data) {
                if (!tagMap.hasOwnProperty(data.type)) {
                    tagMap[data.type] = tagMapIndex;
                    allGroups[tagMapIndex] = new _TagCollection2.default(data.type);
                    collection = allGroups[tagMapIndex];

                    tagMapIndex++;
                } else {
                    collection = allGroups[tagMap[data.type]];
                }

                collection.tags.push(new _Tag2.default(data));
            });
            return allGroups;
        }
    }, {
        key: 'fetchTagByUrlKey',
        value: function fetchTagByUrlKey(urlKey) {
            for (var i = 0; i < this.database.tags.length; i++) {
                var t = new _Tag2.default(this.database.tags[i]);
                if (t.getId() === urlKey) {
                    return t;
                }
            }
            return false;
        }
    }, {
        key: 'fetchProjectsForTag',
        value: function fetchProjectsForTag(tag) {
            var projects = this.database.projects.filter(function (project) {
                return project.tags.indexOf(tag.getId()) !== -1;
            });
            return projects.map(function (project) {
                return new _Project2.default(project);
            });
        }
    }]);

    return Repository;
}();

exports.default = Repository;