import Vehicle from "../Vehicle";
class Slots{
    id:number;
    is_available:boolean;
    vehicle:any;
    constructor(id:number,is_available:boolean) {
        this.id=id;
        this.is_available=is_available
    }
   setVehicle(parkVehicle:Vehicle) {
       this.vehicle=parkVehicle
       this.is_available=false
   }
   getVehicle(){
       return this.vehicle;
   }
   unPark(){
       this.vehicle=null;
       this.is_available=true;
   }
    getId(){
        return this.id
    }
    setId(id:number) 
    {
        this.id=id
    }
}

export class SlotSize{
    totalSlots:number=0;

    setTotalSlots(size:number){
        this.totalSlots=size
    }
    getTotalSlots(){
        return this.totalSlots;
    }

}
export default Slots;