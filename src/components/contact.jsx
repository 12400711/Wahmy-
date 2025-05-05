import MainBtn from "./AButton"
function ContactUsSection(){

    return(
        <>
        <section className="flex flex-col pt-20 md:flex-row-reverse  bg-[#02001b] justify-center pb-20">
            <div className="flex self-center w-9/10 md:w-5/11 md:self-baseline flex-col mb-10 text-amber-50 ">
                <h4 className="self-center text-3xl text-red-600">Contact Us</h4>
                <form className="flex flex-col   w-9/10" action="">
                    <input className="border-b mb-12 mt-11" placeholder="Frist Name*" type="text" />
                    <input className="border-b mb-12" placeholder="Email Address*" type="email" />
                    <input className="border-b min-h-20" placeholder="How Can We Help You ?" type="text" />
                    <button className=" text-amber-50 bg-red-600 w-35 self-baseline hover:border-2 hover:bg-[#02001b] hover:border-red-600 h-13 cursor-pointer rounded-xl mt-10 transition duration-500 text-2xl ">Submit</button>
                </form>
            </div>
        </section>
        <section className="bg-[#02001b]">    
            <MainBtn
            position='/menu' BtnText='Discover The Menu'        />
        </section>
        </>
    )
}
export default ContactUsSection