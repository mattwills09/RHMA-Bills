import axios from "axios";

export default {

    registerUser: function(username, password) {
        return axios.post("/api/user", username, password);
    }

}