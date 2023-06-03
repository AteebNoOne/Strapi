'use strict';

/**
 * global-reseller router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::global-reseller.global-reseller');
