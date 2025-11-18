import { User, CreateUserDTO } from "../types/user";
import db from "../database/db";

// data: Recibe los datos puros (DTO)
// Promise: Devuelve el usuario completo que creó la BD
// Post
export const crearUsuario = async (data: CreateUserDTO): Promise<User> => {
    const resultado = await db('users').insert(data).returning("*");

    return resultado[0];
}

// Get todo
export const obtenerUsuarios = async (): Promise <User[]> => {
    const resultado = await db('users').select("*");

    return resultado;
}
// Get por id
export const obtenerUsuarioId = async (id: number): Promise <User | undefined> => {
    const resultado = await db('users').select("*").where("id", id).first() 

    return resultado;
}

//Delete
export const eliminarUsuario = async (id: number): Promise <User | undefined> => {
    const resultado = await db('users').where("id", id).delete().returning("*")
    return resultado[0];
}


// Put 

export const actualizarUsuario = async (id: number, data: Partial<CreateUserDTO>): Promise <User | undefined> =>{
    const resultado = await db('users').where("id", id).update(data).returning("*")
    return resultado[0]
}