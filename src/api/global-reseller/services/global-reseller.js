'use strict';

/**
 * global-reseller service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::global-reseller.global-reseller');
