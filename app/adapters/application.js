import FirestoreAdapter from 'emberfire/adapters/firestore';
import Ember from 'ember';

const { inject } = Ember;

export default FirestoreAdapter.extend({
    // Uncomment the following lines to enable offline persistence and multi-tab support
    // enablePersistence: true,
    // persistenceSettings: { synchronizeTabs: true }
firebase: inject.service()
});
