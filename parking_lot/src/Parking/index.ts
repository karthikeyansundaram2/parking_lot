
import Slots from "../models/Slots"
import { SlotSize } from "../models/Slots";
const createParking=async (size:number) => {
    const slot:any=[];
    if (size<0){
        console.log("Invalid slots");
        return false;
    } else if (size>0) {
        const totalSlots=new SlotSize();
        totalSlots.setTotalSlots(size);
        for(let i=1;i<=size;i++) {
            slot.push(new Slots(i, true));
        }
         console.log(`Created a parking lot with ${size} slots`);
         console.log(totalSlots.getTotalSlots())
         return true;
    }
    else {
        return false;
    }
}

export default createParking;