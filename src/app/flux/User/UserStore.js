import _ from 'lodash'
import { AsyncStorage } from 'react-native';
import UserConstants from './UserConstants';
import UserItem from "./UserItem";

/**
 * Regexp for match the item's key stored in cache.
 */
const STORE_KEY_REGEXP = /^@UserStore:user:id:.+/


const UserStore = {

    /**
     * Returns item for the given ID.
     *
     * @param {string} id - Item's ID.
     * @returns {Promise.<UserItem>} - Returns a Promise object.
     */
    async getItemById (id) {
        return await AsyncStorage.getItem(UserConstants.STORE_KEY_ITEM + id)
            .then(result => _mapToItem(JSON.parse(result)))
    },

    /**
     * Gets all items from the store.
     *
     * @returns {Promise.<Array.<UserItem>>} - Returns a Promise object.
     */
    async getAllItems () {
        return (await AsyncStorage.multiGet(await UserStore.keys()))
            .map(result => _mapToItem(JSON.parse(result[1])))
    },

    /**
     * Return all items by MeetingId.
     *
     * @param meetingId
     * @returns {Promise.<Array.<UserItem>>} - Returns a Promise object.
     */
    async getAllItemsByMeetingId (meetingId) {
        return (await AsyncStorage.multiGet(await UserStore.keys()))
            .map(result => _mapToItem(JSON.parse(result[1])))
            .filter(item => item.getMeetingIds().find(element => {
                    return element === meetingId;
                }
            ))
    },

    /**
     * Gets all keys with all IDs for this store.
     *
     * @returns {Promise.<Array.<string>>} - Returns a Promise object.
     */
    async keys () {
        return (await AsyncStorage.getAllKeys())
            .filter(key => STORE_KEY_REGEXP.test(key))
    },

}

function _mapToItem (obj) {
    return _.assign(new UserItem(), obj)
}


export default UserStore;