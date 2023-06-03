'use strict';

/**
 * global-user-group service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::global-user-group.global-user-group');
