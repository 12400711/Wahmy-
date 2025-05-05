import MainBtn from "./AButton"
function AboutUs (){
    return(
        <>
        <section id="AboutUs" className=" flex pt-20 md:flex-row justify-center flex-col bg-[#02001b] text-amber-50 min-h-140 md:min-h-130 ">
            <img className="z-1  md:self-baseline   max-h-80 md:w-5/11   w-9/11 self-center md:align-center -mb-10 md:-mr-10 " src="src\imges\Ultimate-Veggie-Burgers.jpg" alt="chief img" />
            <div className="-z-0 flex  flex-col justify-evenly mb-10 w-9/10 md:w-5/10 bg-amber-50 self-center  text-black min-h-80  ">
                <h1 className="text-3xl text-red-600 ml-15  md:mt-7 mt-13 mb-7 " >About Us</h1>
                <p className="w-7/10 self-center ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
                <button className="text-red-600 mb-5 self-baseline mt-5 ml-25 hover:ml-10 cursor-pointer transition-all duration-600" >Read Our Story ↠ </button>
            </div>
        </section>
        <section className="flex flex-col bg-[#02001b] min-h-100 pb-20">
            <div className="flex mb-10 flex-col align-center min-h-90 justify-evenly text-amber-50">
                <h2 className="text-red-600 text-2xl mb-7 self-center">Enjoy</h2>
                <h1 className="text-3xl mb-3 self-center">Our High Quality Ingredients</h1>
                <p className="self-center text-center w-9/10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum.</p>
                <MainBtn position="/menu" BtnText='Discover The Menu'/>
            </div>
            <img className="max-h-170 w-9/10 self-center rounded-2xl" src="public\imges\MSG-Smash-Burger.jpg" alt="burger-img" />
        </section>
        </>
    )
}

export default AboutUs