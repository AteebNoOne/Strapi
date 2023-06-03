'use strict';

/**
 * global-tenant router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::global-tenant.global-tenant');
