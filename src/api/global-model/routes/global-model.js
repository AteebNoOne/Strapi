'use strict';

/**
 * global-model router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::global-model.global-model');
