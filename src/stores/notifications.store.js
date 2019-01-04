/**
 * State
 */
const state = {
  notifications: []
};

/**
 * Getters
 */
const getters = {
  /**
   * Return a list of notifications
   *
   * @param {Object} state Store's state
   * @param {Number} count Number of notifications to return
   * @returns {Array[Object]} Array of notifications
   */
  getNotifications(state, count = 25) {
    return state.notifications.slice(0, count);
  },

  /**
   * Number of notifications have not been read/acknowledged
   *
   * @param {Object} state Store's state
   * @returns {Number} Number of notificaitons that havent been read
   */
  countUnreadNotificaitons(state) {
    return state.notifications.filter(
      notification => (notification.read = false)
    ).length;
  }
};

/**
 * Actions
 */
const actions = {
  /**
   * Adds a notification
   *
   * @param {Object} commit Store's commits
   * @param {Object} notification Notification to add
   */
  addNotification({ commit }, notification) {
    commit("pushNotificaiton", notification);
  },

  /**
   * Removes notifications that contain the specified id
   *
   * @param {Object} commit Store's commits
   * @param {Number} id Id of the notification to remove
   */
  removeNotification({ commit }, { id }) {
    commit("deleteNotificaiton", id);
  }
};

/**
 * Mutations
 */
const mutations = {
  /**
   * Adds a notification
   *
   * @param {Object} state Store's state
   * @param {Object} notification Notification to add
   */
  pushNotificaiton(state, { id, title, content, read = false }) {
    state.notifications.push({
      id,
      title,
      content,
      read
    });
  },

  /**
   * Removes notifications that contain the specified id
   *
   * @param {Object} state Store's state
   * @param {Number} id Id of the notification to remove
   */
  deleteNotificaiton(state, id) {
    state.notifications.splice(
      state.notifications.findIndex(n => n.id === id),
      1
    );
  },

  /**
   * Marks a notificiaton as read
   *
   * @param {Object} state Store's state
   * @param {Number} id Id of the notification to remove
   */
  markRead(state, { id }) {
    state.notifications.filter(
      notification => notification.id === id
    ).read = true;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
