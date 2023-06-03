'use strict';

/**
 * global-user service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::global-user.global-user');
