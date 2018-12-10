import Vue from 'vue';
import Vuex from 'vuex';

import { NotificationStore } from '@/stores/notification.store';
import { UserStore } from '@/stores/users/user.store';
import { ListStore } from '@/stores/list.store';

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        ListStore,
        UserStore,
        NotificationStore,
    }
});