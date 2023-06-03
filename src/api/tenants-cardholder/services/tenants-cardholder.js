'use strict';

/**
 * tenants-cardholder service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::tenants-cardholder.tenants-cardholder');
