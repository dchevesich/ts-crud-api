export interface User {
    id: number ;          
    name: string ;        
    email: string ;       
    password: string ;    
    role: 'user' | 'admin';      
    created_at: Date;  
    updated_at: Date;  
}

export type CreateUserDTO = Omit<User, 'id' | 'created_at' | 'updated_at'>; 