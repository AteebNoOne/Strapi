'use strict';

/**
 * global-tenant service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::global-tenant.global-tenant');
