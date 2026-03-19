import config from '../config'
import { Client, Account, ID } from "appwrite";

export class AppwriteAuth{
    client = new Client()
    account;

    constructor(){
        this.client
            .setProject(config.appwriteProjectID)
            .setEndpoint(config.appwriteUrl)
        this.account= new Account(this.client)
    }

    //Creating an account(signup)
    async createAccount({emailID, password, name}){
        try{
            const userAccount = await this.account.create(ID.unique(), emailID, password, name)
            if(userAccount){
                return await this.login({emailID, password});
            }
            else{
                return userAccount;
            }
        }
        catch(error){
            console.log("AppwriteService :: Signup :: error :: ",error)
        }
    }

    //Login 
    async login({email, password}){
        try{
            try{
                await this.account.deleteSession();
            }catch(e){}
            
            return await this.account.createEmailPasswordSession(email,password);
        }
        catch(error){
            console.log("Appwrite :: Login :: error :: ",error)
            throw error;
        }
    }

    //logout
    async logout(){
        try{
            return await this.account.deleteSessions();
        }
        catch(error){
            console.log("AppwriteService :: logout :: error :: ", error);
        }
    }

    //get Current User
    async getCurrentUser(){
        try{
            return await this.account.get()
        }
        catch(error){
            return null;
        }
    }
}

const AppwriteAuthService= new AppwriteAuth()

export default AppwriteAuthService