import Helper from "@ember/component/helper";
import { get } from "@ember/object";
import { inject as service } from "@ember/service";
import { assert } from "@ember/debug";
import { isPresent } from "@ember/utils";

export default Helper.extend({
  router: service(),
  routing: service("-routing"),
  relativePath: service(),

  compute([routeName], hash) {
    assert(
      "with-relative-path: Must provide a routeName",
      isPresent(routeName)
    );
    return get(this, "relativePath").getRelativePath(routeName, hash);
  }
});
