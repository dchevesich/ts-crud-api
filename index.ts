import express, {Request, Response} from 'express';

const app = express();

const PORT = 3000;

app.use(express.json());

app.get("/", (req: Request,res: Response) => {
    res.send("Api funcionando desde un get")
})



app.listen(PORT, () => {
    console.log("Express corriendo en el puerto:", PORT)
})

