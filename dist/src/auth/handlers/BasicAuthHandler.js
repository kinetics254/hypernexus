import axios from "axios";
/**
 * Basic Authetication Utility
 */
export class BasicAuthHandler {
    username;
    password;
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
    authenticate(config) {
        config.auth = { username: this.username, password: this.password };
        return axios.create(config);
    }
}
//# sourceMappingURL=BasicAuthHandler.js.map