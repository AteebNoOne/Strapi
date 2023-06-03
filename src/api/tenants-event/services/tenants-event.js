'use strict';

/**
 * tenants-event service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::tenants-event.tenants-event');
