export enum UserRole {
  ADMIN = "admin",
  CUSTOMER = "customer",
}

export enum UserStatus {
  ACTIVE = "active",
  BLOCKED = "blocked",
  SUSPENDED = "suspended",
}
export interface IUser {
  _id?: string;                
  name: string;               
  email: string;               
  password: string;           
  role: UserRole;             
  status?: UserStatus;
}
