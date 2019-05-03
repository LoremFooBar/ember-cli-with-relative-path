import Helper from '@ember/component/helper';
import { get } from '@ember/object';
import { inject as service } from '@ember/service';
import { assert } from '@ember/debug';
import { isPresent } from '@ember/utils';

export default Helper.extend({
  router: service(),

  compute([routeName], hash) {
    assert('with-relative-path: Must provide a routeName', isPresent(routeName));

    let currentRouteName = get(this, 'router.currentRouteName');
    let replaceIndex = hash.replaceIndex === undefined ? true : hash.replaceIndex;

    if (replaceIndex && currentRouteName.endsWith('index')) {
      return currentRouteName.replace('index', routeName);
    }

    return `${currentRouteName}.${routeName}`;
  }
});
