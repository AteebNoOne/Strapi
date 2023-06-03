'use strict';

/**
 * tenant-timezone service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::tenant-timezone.tenant-timezone');
