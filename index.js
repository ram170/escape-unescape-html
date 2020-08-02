// Contains the methods
"use strict";

const escapeHash = { '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&apos;' };

//  This method escapes the unescaped string
//  ex: <hi> gets converted to &lt;hi&gt;
//  This prevents XSS attacks in your webpage since the tag is sanitized and won't execute in JS. 
//  The escaped string gets properly rendered in html

module.exports.escapeHtml = (value) => {
  checkIfString(value);
  return value.replace(/[&<>"']/g, replaceTag);
};

// Will perform the reverse operation of escapeHtml.
// ex:  &lt;hi&gt gets converted to <hi>;

module.exports.unescapeHtml = (value) => {
  checkIfString(value);
  // Will not be efficient to have a hash and search values from it. So directly hardcoding this. Will think of a better solution in new release.
  // TODO
  return value.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&apos;/g, "'").replace(/&amp;/g, '&');
};

function checkIfString(value) {
  if (typeof value !== 'string') {
    throw new TypeError(`expected string but got ${typeof value}`);
  }
  return;
};

function replaceTag(tag) {
  return escapeHash[tag] || tag;
};
