class Vehicle {
    vehicleNo:string;
    vehicleColor:string;

    constructor (no:string, color:string) {
        this.vehicleNo=no;
        this.vehicleColor=color;
    }
    getVehicleNumber(){
        return this.vehicleNo
    }
    setVehicleNumber(no:string) {
        this.vehicleNo=no
    }
    getVehicleColor(){
        return this.vehicleColor
    }
    setVehicleColor(color:string) {
        this.vehicleColor=color;
    }
}
export default Vehicle;
