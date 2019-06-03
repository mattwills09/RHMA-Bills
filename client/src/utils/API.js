import axios from "axios";

export default {

    registerUser: function(username, password) {
        return axios.post("/api/user", username, password);
    },

    updateUser: function(username) {
        return axios.put("/api/user", username);
    }

}