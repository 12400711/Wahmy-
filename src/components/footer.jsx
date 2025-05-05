import LocationData from './locations-data'
function Footer (){
    
    return(
        <>
        <section className="flex flex-col pt-20 text-amber-50 min-h-[70vb] bg-[#02001b] justify-center items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center gap-4   w-9/10 justify-around items-baseline">
                < LocationData/>
                <div className="flex flex-col  mr-12 items-start md:min-w-[15em]">
                    <h1 className="self-start text-3xl text-red-600  mb-10 ">Opening Hours</h1>
                    <p className="flex flex-col w-full md:flex-row  mb-5 text-center md:justify-between ">
                        <span className="block mb-2 md:self-end">Monday-Friday</span>
                        <span className="block ">10am-11pm</span>
                    </p>
                    <p className="flex flex-col w-full md:flex-row mb-5 text-center md:justify-between">
                        <span className="block mb-2 md:self-end">Saturday</span>
                        <span className="block ">10am-10pm</span>
                    </p>
                    <p className="flex  flex-col w-full md:flex-row mb-5 text-center md:justify-between">
                        <span className="block mb-2 md:mr-10">Sunday</span>
                        <span className="block">10am-11pm</span>
                    </p>
                </div>
                <div className="flex flex-col items-center md:items-end   ">
                    <img className="w-20 rounded-2xl h-12 mb-10 " src="imges/logo-img.jpeg" alt="logo-img" />
                    <a className="" href="gmail">info@gourmetburger.com</a>
                    <div className="flex ">
                        <a href="">
                            <img className="w-5 mt-5 mr-6 " src="https://cdn.prod.website-files.com/5daad02151ef3a85c37eebb3/5dab92ae65b2d9a4b9097299_twitter.png" alt="" />
                        </a>
                        <a href="">
                            <img className="w-5 mt-5 mr-6 " src="https://cdn.prod.website-files.com/5daad02151ef3a85c37eebb3/5dab92ae65b2d921b1097294_174855.png" alt=""  />
                        </a>
                        <a href="">
                            <img className="w-5 mt-5" src="https://cdn.prod.website-files.com/5daad02151ef3a85c37eebb3/5dab92ae65b2d97daf097297_33702.png" alt="" />
                        </a>
                    </div>
                </div>
                
            </div>
            <hr className="w-10/10 block h-[1px] bg-amber-50 " />
            <div className="flex flex-col w-full justify-center self-center text-center ">
                <div className=" flex w-9/10 justify-center mt-3 md:self-start text-amber-50  ">
                    <p className="flex text-sm  ">Created by The brothers | Powered by Webflow | More templates | Image Licensing | Style Guide</p>
                </div>
            </div>
        </section>
        </>
    )
}

export default Footer


