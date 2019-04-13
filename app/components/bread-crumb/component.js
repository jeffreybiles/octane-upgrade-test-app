import Component from '@ember/component';
import { computed } from '@ember/object';

export default class BreadCrumbComponent extends Component {
  tagName = ''

  @computed('currentRoute')
  get localName(){
    let name = this.currentRoute.localName;
    if(name === 'application'){
      return 'home'
    } else {
      return name
    }
  }

  @computed('currentRoute')
  get isIndex(){
    return this.currentRoute.localName === 'index'
  }
};
