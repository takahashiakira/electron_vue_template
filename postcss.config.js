const postcssImport = require('postcss-import');
const postcssCssnext = require('postcss-cssnext');
const postcssExtend = require('postcss-extend');
const postcssSimpleVars = require('postcss-simple-vars');
const postcssNested = require('postcss-nested');
const postcssMixins = require('postcss-mixins');

module.exports = [
  postcssImport(),
  postcssCssnext(),
  postcssExtend(),
  postcssSimpleVars(),
  postcssNested(),
  postcssMixins(),
];
