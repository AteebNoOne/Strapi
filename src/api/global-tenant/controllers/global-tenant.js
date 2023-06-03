'use strict';

/**
 * global-tenant controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::global-tenant.global-tenant');
