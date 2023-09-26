const filter = require('../helpers/dto/filter');
const fields = require('../helpers/dto/fields');
const skip = require('../helpers/dto/skip');
const sort = require('../helpers/dto/sort');
const keyword = require('../helpers/dto/keyword');
const page = require('../helpers/dto/page');
const limit = require('../helpers/dto/limit');

const QueryDto = [page, limit, skip, sort, fields, filter, keyword];

module.exports = QueryDto;
