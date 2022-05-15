import { SlotSize } from "../Slots";
import Slots from "../Slots";
import Vehicle from "../Vehicle";
export class Parking {
    slot: any;

    constructor() {
        this.slot = []
    }
    createParking = async (size: number) => {
        if (size < 0) {
            console.log("Invalid slots");
            return;
        } else if (size > 0) {
            const totalSlots = new SlotSize();
            totalSlots.setTotalSlots(size);
            for (let i = 1; i <= size; i++) {
                this.slot.push(new Slots(i, true));
            }
            console.log(`Created a parking lot with ${size} slots`);
            return;
        }
        else {
            console.log("Invalid input")
            return;
        }
    }
    getSlotNumber() {
        return new Promise((resolve, reject) => {
            if (!this.slot.length) {
                console.log("Parking Slot not initialized");
                reject(false);
            }
            for (let i in this.slot) {
                if (!this.slot[i].is_available)
                    console.log(this.slot[i]?.id)
            }
            resolve(true);
        })
    }
    getNumber() {
        return new Promise((resolve, reject) => {
            if (!this.slot.length) {
                console.log("Parking Slot not initialized");
                reject(false);
            }
            for (let i in this.slot) {
                if (!this.slot[i].is_available)
                    console.log(this.slot[i]?.vehicle?.vehicleNo)
            }
            resolve(true);
        })
    }
    getColor() {
        if (!this.slot.length) {
            console.log("Parking Slot not initialized");
            return
        }
        for (let i in this.slot) {
            if (!this.slot[i].is_available)
                console.log(this.slot[i]?.vehicle?.vehicleColor)
        }
    }
    leave(slot_id: number) {
        if (!this.slot.length) {
            console.log("Parking lot not initialized");
            return
        } else {
            for (let i in this.slot) {
                if (this.slot[i].id == slot_id) {
                    this.slot[i].unPark();
                    console.log(`Slot number ${slot_id} is free`)
                    return
                }
            }
            console.log("Given slot id not present on the slots")
            return

        }
    }
    sortByColor(color: string) {
        if (!this.slot.length) {
            console.log("Parking lot not initialized");
            return
        } else {
            let output: any = []
            for (let i in this.slot) {
                if (this.slot[i]?.vehicle?.vehicleColor == color) {
                    output.push(this.slot[i].id)
                }
            }
            if (!output.length) {
                console.log("No car present with given color");
                return
            } else {
                console.log(output)
                return
            }
        }
    }
    getSlotNumberByVehicle(no: string) {
        if (!this.slot.length) {
            console.log("Parking lot not initialized");
            return
        } else {
            for (let i in this.slot) {
                if (this.slot[i]?.vehicle?.vehicleNo == no) {
                    console.log(this.slot[i].id)
                    return
                }
            }
            console.log("Not found")
            return;
        }
    }
    parkVehicle(park: Vehicle) {
        try {
            if (!this.slot.length) {
                console.log("Parking Lot is not initialized");
                return
            } else {
                let currentSlot: any;
                for (let i in this.slot) {
                    if (this.slot[i].is_available) {
                        currentSlot = this.slot[i]
                        break;
                    }
                }
                if (currentSlot) {
                    currentSlot.setVehicle(park);
                    console.log(`Allocated slot number:${currentSlot.id}`)
                    return
                } else {
                    console.log("Sorry, parking lot is full");
                    return
                }
            }
        }
        catch (e) {
            console.log("err", e)
            return false;
        }
    }
}
// async function get(type:string,slots:any) {
//     return new Promise((resolve, reject) => {
//         if (slots.length) {
//             console.log("Parking Slot not initialized");
//             reject(false);
//         }
//         for (let i in slots) {
//             if (slots[i]?.is_available)
//                 if (type=="id")
//                     console.log(slots[i].id)
//                 else if (type=="vehicleNo") {
//                     console.log(slots[i]?.vehicle?.vehicleNo)
//                 }
//                 else if (type=="vehicleColor") {
//                     console.log(slots[i]?.vehicle?.vehicleNo)
//                 }
//         }
//         resolve(true);
//     })
// }