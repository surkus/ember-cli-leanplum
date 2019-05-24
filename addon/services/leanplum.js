import Service from '@ember/service';
import RSVP from 'rsvp';

const Leanplum = window ? window.Leanplum : null;

export default Service.extend({
  isStarted: false,

  start() {
    return new RSVP.Promise((resolve, reject) => {
      if (this.get('isStarted')) {
        resolve();
      }

      Leanplum.start(async (success) => {
        this.set('isStarted', success);

        if (success) {
          await Object.entries(Leanplum.getVariables()).forEach(([key, value]) => {
            this.set(key, value);
          });

          resolve();
        } else {
          reject();
        }
      });
    });
  },

  setUserId(userId) {
    this.start().then(() => {
      Leanplum.setUserId(userId);
    });
  },

  setUserAttributes(userId, attributes) {
    this.start().then(() => {
      Leanplum.setUserAttributes(userId, attributes);
    });
  },

  forceContentUpdate(callback) {
    this.start().then(() => {
      Leanplum.forceContentUpdate(callback);
    })
  },

  trackEvent(event, params) {
    this.start().then(() => {
      Leanplum.track(event, params);
    });
  }
});
