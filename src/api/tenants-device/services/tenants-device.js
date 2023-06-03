'use strict';

/**
 * tenants-device service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::tenants-device.tenants-device');
