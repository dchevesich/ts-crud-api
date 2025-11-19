import {Request, Response} from "express";
import * as UserModel from '../models/userModel';


export const crearUsuario = async (req: Request, res: Response) => {
    const datosPost = req.body;
    try{
        const resultado = await UserModel.crearUsuario(datosPost);
        if(!resultado){
            res.status(400).json("Error en crearUsuario controller");
            return;
        }
        res.status(201).json(resultado)
    }catch(err){
        console.log("EL ERROR REAL ES:", err);
        res.status(500).json("Error en el servidor");
        }
}

export const obtenerUsuarios = async (req: Request, res: Response) => {
    try{
     const resultado = await UserModel.obtenerUsuarios();
     res.status(200).json(resultado)
     }catch(err){
        res.status(500).json("Error en el servidor");
    }
}


export const obtenerUsuarioId = async (req: Request, res: Response) => {
    // Convierte el id que es string a number dado la interfaz de user que diseñamos
    const id = Number(req.params.id)
    try{
        const resultado = await UserModel.obtenerUsuarioId(id);
        if(!resultado){
            res.status(404).json("Error en obtenerUsuarioid controller");
            return;
        }
        res.status(200).json(resultado);
    }catch (err) {
        res.status(500).json("Error en el servidor");
    }
}

export const eliminarUsuario = async (req: Request, res: Response) => {
    const id = Number(req.params.id)
    try{
        const resultado = await UserModel.eliminarUsuario(id);
        if(!resultado){
            res.status(404).json("Error en eliminarUsuario controller");
            return;
        }
        res.status(200).json(resultado);
    }catch(err){
        res.status(500).json("Error en el servidor");
    }
}


export const actualizarUsuario = async (req: Request, res: Response) => {
    const datosPut = req.body;
    const id = Number(req.params.id);
    try{
        const resultado = await UserModel.actualizarUsuario(id,datosPut);
        if(!resultado){
            res.status(404).json("Error en actualizarUsuario controller");
            return;
        }
        res.status(200).json(resultado);
    }catch(err){
        res.status(500).json("Error en el servidor");
    }
}
