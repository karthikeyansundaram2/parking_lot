import express, { Express, Request, Response } from "express";
import dotenv from 'dotenv';
import createParking from "./Parking/index";
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
    res.send('Desgin System LLD for parking Lot');
});

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});

readline.question(`Commands `, (command:string) => {
    console.log(`Hi ${command}`, command.split(" "));
    const inputs=command.split(" ");
    const inputFromCommand=inputs[0]
    
    switch (inputFromCommand){
        case "create_parking_lot":{
            createParking(Number(inputs[1].trim()))
            break;
        }
        case "park":{

        }
        case "status":{

        }
        case "registration_numbers_for_cars_with_colour":{

        }
        case "slot_number_for_registration_number":{
            
        }
        case "exit":{
            readline.pause()
        }
    }

    readline.close();
  });
  
