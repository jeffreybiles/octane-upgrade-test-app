import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  firstName: 'Jeff',
  lastName: 'Biles',

  fullName: computed('firstName', 'lastName', function(){
    return `${this.firstName} ${this.lastName}`
  }),

  actions: {
    doubleName(){
      // this.firstName = `${this.firstName}${this.firstName}`// this won't work until tracked properties
      this.set('firstName', `${this.firstName}${this.firstName}`); //this will work
    }
  },

  // you can still use ES5 getters on fullName, firstName, etc... you just can't call it on ones defined by unknownProperty
  unknownProperty(key){
    return `Unknown: ${key}`;
  }
});
