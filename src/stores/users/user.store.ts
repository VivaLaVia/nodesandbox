import Vue from 'vue';
import Vuex from 'vuex';

import { UserState } from './UserState'

Vue.use(Vuex);

const state :UserState = {
    me: {
        token: localStorage.getItem('user-token') || ''
    },
    all: [],
}

const getters = {
    isAuthenticated: (state :any) => !!state.token,
}

const actions = {
    login(username :String, password :String) {

    }
}

const mutations = {}

export const UserStore = new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
})