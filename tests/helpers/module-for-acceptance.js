/* eslint-disable max-len */

import {module} from 'qunit';
import Ember from 'ember';
import startApp from '../helpers/start-app';
import destroyApp from '../helpers/destroy-app';

const {RSVP: {Promise}} = Ember;

export default function (name, options = {}) {
  module(name, {
    beforeEach() {
      this.application = startApp();

      if (options.beforeEach) {
        // options.beforeEach.apply(this, arguments);
        return Reflect.apply(options.beforeEach, arguments);
      }
    },

    afterEach() {
      // options.afterEach.apply(this, arguments);
      const afterEach = options.afterEach && Reflect.apply(options.afterEach, arguments);

      return Promise.resolve(afterEach).then(()=> {
        destroyApp(this.application);
      });
    }
  });
}
