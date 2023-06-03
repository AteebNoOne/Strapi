'use strict';

/**
 * global-model service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::global-model.global-model');
