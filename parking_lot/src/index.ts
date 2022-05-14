import express, { Express, Request, Response } from "express";
import dotenv from 'dotenv';
import { Parking } from "./models/Parking";
import Vehicle from "./models/Vehicle";
// import createParking from "./Parking/index";
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
    console.log("called")
    const park = new Parking();

    // rl.on('line', async (input:string) => {        
    //     console.log(`Hi ${input}`, input.split(" "));
    //     const inputs = input.split(" ");
    //     const inputFromCommand = inputs[0]
    //     switch (inputFromCommand) {
    //         case "create_parking_lot": {
    //             park.createParking(Number(inputs[1]))
    //             break;
    //         }
    //         case "park": {
    //             console.log(inputs[1], inputs[2])
    //             if (inputs[1] && inputs[2]) {
    //                 const vehicle = new Vehicle(inputs[1].trim(), inputs[2].trim())
    //                 console.log("vehicle created");
    //                 park.parkVehicle(vehicle);
    //             } else {
    //                 console.log("vehicle number or color missing");
    //             }
    //         }
    //         case "status": {

    //         }
    //         case "registration_numbers_for_cars_with_colour": {

    //         }
    //         case "slot_number_for_registration_number": {

    //         }
    //         case "exit": {
    //             rl.pause()
    //             break;
    //         }
    //         default: console.log("Wrong input")
    //     }

        // readline.close();
    // });
    rl.on('line', async (inputs) => {
        inputs = inputs.split(" ");
        const inputFromCommand = inputs[0]
        switch (inputFromCommand) {
                    case "create_parking_lot": {
                        park.createParking(Number(inputs[1]))
                        break;
                    }
                    case "park": {
                        console.log(inputs[1], inputs[2])
                        if (inputs[1] && inputs[2]) {
                            const vehicle = new Vehicle(inputs[1].trim(), inputs[2].trim())
                            console.log("vehicle created");
                            park.parkVehicle(vehicle);
                        } else {
                            console.log("vehicle number or color missing");
                        }
                        break;
                    }
                    case "status": {
        
                    }
                    case "registration_numbers_for_cars_with_colour": {
        
                    }
                    case "slot_number_for_registration_number": {
        
                    }
                    case "exit": {
                        rl.pause()
                        break;
                    }
                    default: console.log("Wrong input")
                }
        

    });

}
rl.on('SIGINT', () => {
    rl.question('Are you sure you want to exit? (yes/no) ', (answer) => {
        if (answer.match(/^y(es)?$/i)) rl.pause();
    });
}); 
intiMain();
