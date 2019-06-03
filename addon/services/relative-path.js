import Service from "@ember/service";
import { get } from "@ember/object";
import { inject as service } from "@ember/service";
import { assert } from "@ember/debug";
import { isPresent } from "@ember/utils";

export default Service.extend({
  router: service(),
  routing: service("-routing"),

  getRelativePath(routeName, hash) {
    assert("getRelativePath: Must provide a routeName", isPresent(routeName));

    let currentRouteName = this.getCurrentRouteName();
    let replaceIndex =
      hash.replaceIndex === undefined ? true : hash.replaceIndex;

    if (replaceIndex && currentRouteName.endsWith("index")) {
      return currentRouteName.replace("index", routeName);
    }

    return `${currentRouteName}.${routeName}`;
  },

  getCurrentRouteName() {
    let router = get(this, "router");

    /* For Ember versions below 2.16, the RouterService isn't publicly available.
       So if `router` is empty, we assume that Ember is < 2.16, and instead try
       to get the `currentRouteName` in a more hacky way. */

    if (!router) {
      return get(this, "routing.router.currentRouteName");
    }

    return get(this, "router.currentRouteName");
  }
});
