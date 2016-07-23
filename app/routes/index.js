import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    Ember.run.schedule('afterRender', this, ()=> {
      Ember.$('#helloWorld').overzealous();
    });
  }
});
