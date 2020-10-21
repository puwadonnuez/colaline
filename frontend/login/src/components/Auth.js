class Auth {
    constructor() {
        this.authentication = false
    }
    login() {
        this.authentication = true
    }
    logout() {
        this.authentication = false
    }
    isAuthentication() {
        return this.authentication;
    }
}
export default new Auth()