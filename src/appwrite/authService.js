import { Client, Account } from "appwrite";
import env from "../env/env";

class AuthService {
  client = new Client();
  account;
  constructor() {
    this.client.setEndpoint(env.appwriteUrl).setProject(env.appwriteProjectId);
    this.account = new Account(this.client);
  }

  // create account
  async signup({ id, email, password, name }) {
    try {
      const userData = await this.account.create(id, email, password, name);
      if (userData) {
        //login
        return this.login({ email, password });
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  // login
  async login({ email, password }) {
    try {
      return await this.account.createEmailSession(email, password);
    } catch (error) {
      console.log(error.message);
    }
  }

  // logout
  async logout() {
    try {
      return this.account.deleteSessions();
    } catch (error) {
      console.log(error.message);
    }
  }

  // get user
  async getUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log(error.message);
    }
  }
}

const authService = new AuthService();
export default authService;