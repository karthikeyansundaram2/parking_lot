import express, { Express, Request, Response } from "express";
import dotenv from 'dotenv';
import { Parking } from "./models/Parking";
import Vehicle from "./models/Vehicle";

const rl = require('readline').createInterface({
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
let intiMain = () => {
    // creating instance for parking
    const park = new Parking();
    //readline to read the commandline inputs 
    rl.on('line', async (inputs:any) => {
        inputs = inputs.split(" ");
        //Getting the command
        const inputFromCommand = inputs[0]
        switch (inputFromCommand) {
                    case "create_parking_lot": {
                        park.createParking(Number(inputs[1]))
                        break;
                    }
                    case "park": {
                        if (inputs[1] && inputs[2]) {
                            // creating a new vehicle
                            const vehicle = new Vehicle(inputs[1].trim(), inputs[2].trim())
                            park.parkVehicle(vehicle);
                        } else {
                            console.log("vehicle number or color missing");
                        }
                        break;
                    }
                    case "status": {
                        console.log("Slot No.")
                        park.getSlotNumber().then(()=>{
                            console.log("Registeration No.")
                            park.getNumber().then(()=>{
                                console.log("Colour");
                                park.getColor();
                            })
                        })
                        break;
                    }
                    case "leave":{
                        park.leave(Number(inputs[1]))
                        break;
                    }
                    case "registration_numbers_for_cars_with_colour": {
                        park.sortByColor(inputs[1].trim())
                        break;
                    }
                    case "slot_number_for_registration_number": {
                        park.getSlotNumberByVehicle(inputs[1].trim())
                        break;
                    }
                    case "exit": {
                        rl.close();
                        break;
                    }
                    default: console.log("Wrong input")
                }
        

    });

}
rl.on('SIGINT', () => {
    rl.question('Are you sure you want to exit? (yes/no) ', (answer) => {
        if (answer.match(/^y(es)?$/i)) rl.close();
    });
}); 
intiMain();
