import EmberRouter from '@ember/routing/router';
import config from './config/environment';
import { get } from '@ember/object';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('3-1', function() {
    this.route('named-arguments');
    this.route('es5-getters');
  });

  this.route('3-2', function() {
    this.route('let-helper');
  });

  this.route('3-10', function() {
    this.route('built-in-components', {path: 'built-in-components/:argument'});
    this.route('multiple-arguments', {path: 'multiple-arguments/:argument1/:argument2'});
  });

  this.route('3-11', function(){
    this.route('action-replacements');
  })
});

export default Router.extend({
  init() {
    this._super(...arguments);
    this.on('routeDidChange', (transition) => {
      let title = get(transition.to, 'metadata.title') || get(transition.to, 'parent.metadata.title') || document.title;
      document.title = title;
    });
  },
});
