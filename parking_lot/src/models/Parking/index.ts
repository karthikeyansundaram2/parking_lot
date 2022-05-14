import { SlotSize } from "../Slots";
import Slots from "../Slots";
import Vehicle from "../Vehicle";
export class Parking{
    slot:any;

   constructor(){
       this.slot=[]
   }
   createParking=async (size:number) => {
      console.log("called",size);
      if (size<0){
          console.log("Invalid slots");
          return false;
      } else if (size>0) {
          const totalSlots=new SlotSize();
          totalSlots.setTotalSlots(size);
          for(let i=1;i<=size;i++) {
              this.slot.push(new Slots(i, true));
          }
           console.log(`Created a parking lot with ${size} slots`);
           console.log(totalSlots.getTotalSlots(), this.slot)
           return true;
      }
      else {
          return false;
      }
  }
 
  parkVehicle(park:Vehicle){
    //   console.log("ddss", this.slot)
    try{
      if(!this.slot.length) {
          console.log("Parking Lot is not initialized");
          return false
      } else {
        let currentSlot:any;
          for(let i in this.slot){
              console.log(this.slot[i],i,this.slot[i].is_available)
              if(this.slot[i].is_available) {
                currentSlot=this.slot[i]
                break;
                }
          }
          currentSlot.setVehicle(park);
          console.log(`Allocated slot number:${currentSlot.id}`)
        console.log(currentSlot.is_available,currentSlot.vehicle)
          return true
          
      }
  }
  catch (e) {
    console.log("err",e)
    return false;
}
} 
}