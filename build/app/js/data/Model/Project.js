'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Repository = require('../../data/Repository');

var _Repository2 = _interopRequireDefault(_Repository);

var _database = require('../../../data/database');

var _database2 = _interopRequireDefault(_database);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Project = function Project(data) {
    _classCallCheck(this, Project);

    this.title = data.title;
    this.type = data.type;
    this.dates = data.dates;
    this.description = data.description;
    this.tags = data.tags;
    this.externalLinks = data.external_links;

    // Handle icon:
    switch (data.type) {
        case 'work':
            this.icon = 'briefcase';
            break;

        case 'speaking':
            this.icon = 'commenting';
            break;

        case 'personal':
            this.icon = 'rocket';
            break;

        case 'training':
            this.icon = 'graduation-cap';
            break;

        case 'writing':
            this.icon = 'edit';
            break;

        default:
            this.icon = 'code';
            break;
    }

    // Handle tags:
    var repo = new _Repository2.default(_database2.default);
    this.tags = data.tags.map(function (tag) {
        return repo.fetchTagByUrlKey(tag);
    });
};

exports.default = Project;