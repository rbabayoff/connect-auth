/*!
 * Copyright(c) 2010 Ciaran Jessup <ciaranj@gmail.com>
 * MIT Licensed
 */
module.exports= function(options) {};

module.exports.prototype.authenticate= function(request, response, callback) {
  this.fail(callback);
}