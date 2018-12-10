import Axios from 'axios';

export default {
    
    getUsers() {
        Axios.get('http://localhost:8080/api/v1/users', {}).then(() => {

        }).catch((err) => {
            console.error(err);
        });


        return [];
    },

    addUser() {

    },

}