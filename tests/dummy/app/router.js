import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

function genericCrudStuff() {
  this.route('create');
  this.route('edit');
  this.route('delete');
}

Router.map(function() {
  this.route('reasons', function() {
    this.route('good', genericCrudStuff);
    this.route('bad', genericCrudStuff);
    this.route('okayish', genericCrudStuff);
  });
});

export default Router;
