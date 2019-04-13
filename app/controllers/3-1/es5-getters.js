import Controller from '@ember/controller';
import { computed, action } from '@ember/object';

export default class GettersController extends Controller {
  firstName = 'Ember'
  lastName = 'Octane'

  @computed('firstName', 'lastName')
  get fullName(){
    return `${this.firstName} ${this.lastName}`
  }

  @action doubleName(){
    // this.firstName = `${this.firstName}${this.firstName}`// this won't work until tracked properties
    this.set('firstName', `${this.firstName}${this.firstName}`); //this will work
    console.log('firstName', this.firstName)
  }

  init(){
    super.init(...arguments)
  }
};
