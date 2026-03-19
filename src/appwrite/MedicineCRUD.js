import { Client, Databases, ID, Query } from "appwrite";
import config from "../config"

export class MedicineCRUD{
    client= new Client()
    databases;

    constructor(){
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectID);

        this.databases= new Databases(this.client)
    }

    //creating a document of the user
    async createDocument(data){
        try{
            return await this.databases.createDocument(config.appwriteDatabaseID,config.appwriteCollectionID,ID.unique(),data)
        }
        catch(error){
            console.log("AppwriteService :: CreateDocument :: error ",error)
        }
    }

    //listing all the documents of the user
    async listDocument(userID){
        try{
            return await this.databases.listDocuments(
                config.appwriteDatabaseID,
                config.appwriteCollectionID, 
                [
                    Query.equal("userID", userID)
                ]
            )
        }
        catch(error){
            console.log("AppwriteService :: ListDocument :: error ",error)
        }
    }

    //getting a single document of the user
    async getDocument(documentID){
        try{
            return await this.databases.getDocument(
                config.appwriteDatabaseID,
                config.appwriteCollectionID,
                documentID
            )
        }
        catch(error){
            console.log("AppwriteService :: GetDocument :: error ",error)
        }
    }

    // updating the document
    async updateDocument(documentID, data){
        try{
            return await this.databases.updateDocument(
                config.appwriteDatabaseID,
                config.appwriteCollectionID,
                documentID,
                data
            )
        }
        catch(error){
            console.log("AppwriteService :: UpdateDocument :: error ", error);
        }
    }

    //Deleting the document
    async deleteDocument(documentID){
        try{
            return await this.databases.deleteDocument(
                config.appwriteDatabaseID,
                config.appwriteCollectionID,
                documentID
            )
        }
        catch(error){
            console.log("AppwriteService :: DeleteDocument :: error ", error)
        }
    }
}
const medicineDetails= new MedicineCRUD()

export default medicineDetails;