import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {}
const getters = {}
const actions = {}
const mutations = {}

export const NotificationStore = new Vuex.Store({
    state: state,
    getters: getters,
    mutations: mutations,
    actions: actions,
})