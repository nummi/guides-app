import Controller, {
  inject as controller,
} from '@ember/controller';
import { get, computed } from '@ember/object';
import { alias } from '@ember/object/computed';

import PageMixin from '../mixins/page';

export default Controller.extend(PageMixin, {
  application: controller(),

  pages: alias('model.pages'),

  versions: computed('application.model.allVersions.[]', function () {
    let allVersions = get(this, 'application.model.allVersions');

    return allVersions.sort(compareVersions).reverse();
  }),

  actions: {
    selectVersion(version) {
      this.transitionToRoute('version', version)
    }
  }
});
