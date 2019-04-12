import Controller from '@ember/controller';
import { computed, action } from '@ember/object';

export default class ES5GetterController extends Controller {
  firstName = 'Ember'
  lastName = 'Octane'

  @computed('firstName', 'lastName')
  get fullName(){
    return `${this.firstName} ${this.lastName}`
  }

  @action
  doubleName(){
    // this.firstName = `${this.firstName}${this.firstName}`// this won't work until tracked properties
    this.set('firstName', `${this.firstName}${this.firstName}`); //this will work
  }
}
