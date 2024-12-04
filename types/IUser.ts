export interface IUser {
    id: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    // name: string;
    isAdmin: boolean;
    emailVerified: Date | null;
}
