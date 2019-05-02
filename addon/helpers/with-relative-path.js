import Helper from '@ember/component/helper';
import { get } from '@ember/object';
import { inject as service } from '@ember/service';

export default Helper.extend({
  router: service(),

  compute([routeName], hash) {
    let currentRouteName = get(this, 'router.currentRouteName');
    let replaceIndex = hash.replaceIndex === undefined ? true : hash.replaceIndex;

    if (replaceIndex && currentRouteName.endsWith('index')) {
      return currentRouteName.replace('index', routeName);
    }

    return `${currentRouteName}.${routeName}`;
  }
});
