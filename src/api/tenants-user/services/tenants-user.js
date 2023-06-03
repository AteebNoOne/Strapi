'use strict';

/**
 * tenants-user service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::tenants-user.tenants-user');
