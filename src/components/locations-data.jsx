import { ResturantAdress } from "../backendData"
function LocationData(){
    let Locations = ResturantAdress.map((object) => {
        return(
            <div key={object.adress} className="flex flex-col mb-7 text-center md:text-start ">
                <h1 className=" mb-2">{object.city}</h1>
                <p>{object.adress}</p>
            </div>
        )
    })
    return(
        <>
            <div  className="flex flex-col w-full sm:col-span-2 md:col-span-1 pr-5  items-center">
                <h1 className="text-3xl text-red-600  mb-10 ">Location</h1>
                <div className="grid  sm:grid-cols-2 md:grid-cols-1 w-10/10 text-amber-50">
                    {Locations}
                </div>
            </div>
        </>
    )
}

export default LocationData