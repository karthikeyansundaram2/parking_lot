class Slots{
    id:number;
    is_available:boolean;
    
    constructor(id:number,is_available:boolean) {
        this.id=id;
        this.is_available=is_available
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