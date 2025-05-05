import MainBtn from "./AButton"
function HomePage (props){
    return(
        <>
        <section className='pb-20 flex flex-col md:flex-row min-h-[90vb] bg-[#02001b] justify-center '>
            <div className="flex flex-col w-8/10 self-center md:w-5/10 h-full justify-center">
                <h1 className="  text-amber-50 text-5xl self-center  mt-30 md:mt-40  flex w-fit">{props.title}</h1>
                <p className=" text-amber-50 text-2xl mt-20 self-center flex w-8/10 ">{props.paragraph}</p>
                <MainBtn position="/menu" BtnText='Discover The Menu'/>
            </div>
            <div className="imgs flex  justify-center">
                <img className=' max-w-90 mt-20 md:mt-40 ' src="http://www.pngplay.com/wp-content/uploads/2/Burger-Transparent-PNG.png" alt="Burger img" />
            </div>
        </section>
        </>
    )
}
export default HomePage