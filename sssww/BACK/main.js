import routeNote from "./src/routes/routeSendNote.js"
import express from "express"
import connectDB from "./connect.js"
import cors from "cors"
import bodyParser from "body-parser";
import routeUser from "./src/routes/routeRegister.js"
import routeTakeNote from "./src/routes/routeTakeNote.js"
import routeLogin from "./src/routes/routeLogin.js"
import routeDelNote from "./src/routes/routeDelNote.js"

const PORT = process.env.PORT || 5000;
const app = express();

connectDB();
app.use(cors())
app.use(bodyParser.json())
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API Running'));

// Registracija 
app.use('/api/register', routeUser);
// Nusiusti Note
app.use('/api/givenotes', routeNote);
// Atsisiusti Note
app.use('/api/getnotes', routeTakeNote);
// Prisijungimas
app.use('/api/login', routeLogin);
//delete Note
app.use('/api/deletenote', routeDelNote)
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
