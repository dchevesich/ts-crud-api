import express from 'express';
import userRoutes from './src/routes/userRoutes';
const app = express();

const PORT = 3000;

// Rutas

app.use(express.json());

app.use("/api/usuarios", userRoutes);

app.listen(PORT, () => {
    console.log("Express corriendo en el puerto:", PORT)
})

