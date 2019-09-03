import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class ActionReplacementsController extends Controller {
  orangeNumber = 0
  purpleNumber = 0

  @action
  incrementProperty(property, amount) {
    let old = this.get(property);
    this.set(property, old + amount);
  }
}
