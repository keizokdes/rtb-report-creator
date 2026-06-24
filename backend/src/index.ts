import express, { Request, Response } from "express";
import 'dotenv/config';

// Create a new express application instance
const app = express();

console.log("ENV PORT: ", process.env.PORT);

// Set the network port
const port = process.env.PORT;

// Define the root path with a greeting message
app.get("/", (req: Request, res: Response) => {
	    res.json({ message: "Welcome to the Express + TypeScript Server!" });
});

	    // Start the Express server
app.listen(port, () => {
	    console.log(`The server is running at http://localhost:${port}`);
 });	    	    
