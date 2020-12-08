export class User {
    id: number;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    status:boolean;
    genre: string;
    archive: boolean;
    profile: string;
    avatar: Blob;      
    token?: string;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
  
  
    constructor(id: number, email: string, password: string, firstName: string, lastName: string, status: boolean, 
      genre: string, archive: boolean, avatar: Blob, profile: string) {
      this.id = id;
      this.email = email;
      this.password = password;
      this.firstName = firstName;
      this.lastName = lastName;
      this.status = status;
      this.genre = genre;
      this.archive = archive;
      this.avatar = avatar;
      this.profile = profile;
    }
  }