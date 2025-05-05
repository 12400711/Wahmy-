import { MenuItems as MenuData } from "../backendData"
function Menu (){
    // 
    const MenuItems = MenuData.map((obj) =>{
        return(
            <div key={obj.itemName} className={(obj.isHighlited)? "flex col-span-1 sm:col-span-2 md:col-span-3 flex-col md:flex-row-reverse bg-[rgb(11,8,36)]":"flex flex-col col-span-1 bg-[rgb(2,0,27)]"}>
                <div className="  flex flex-col max-w-76 h-fit mt-10">
                    <div className="flex justify-between w-8/10 self-center">
                        <h3 className=" font-bold text-[22px]  mt-3">{obj.itemName}</h3>
                        <h3 className=" text-red-600 text-[19px] mt-4 mr-4">${obj.itemPrice}</h3>
                    </div>
                    <p className="w-8/10 self-center text-[19px] mt-4 text-gray-300 mb-6 ">{obj.itemDescription}</p>
                </div>
                <div>
                    {(obj.isHighlited)? <img className="w-80 " src={obj.imgSrc} alt={obj.imgAlt} /> : null} 
                    <button className="text-red-600 mb-5 self-baseline mt-5 ml-8 hover:ml-12  h-3 cursor-pointer transition-all duration-600" >order now↠ </button>
                </div>
            </div>
        )
    })
    return (
        <>
        <section className="flex flex-col lg:flex-row bg-[rgb(2,0,27)] text-amber-50 min-h-200">
            <div className=" flex w-10/10 sm:h-[200px] md:h-[90] lg:w-2/10 lg:h-10/10"></div>
            <div className=" z-10 flex fixed flex-col justify-around bg-[rgb(2,0,27)] lg:justify-start md:flex-row lg:flex-col w-10/10 lg:w-2/12 lg:h-30 ">
                <h1 className="text-3xl md:text-6xl mt-10 md:mt-9 ml-10 text-amber-50">Menu</h1>
                <ul className=" flex mt-1 md:mt-5  md:w-8/10 w-10/10 justify-around  flex-row lg:flex-col lg:h-10/10">
                    <a href=""><li className="text-red-600  border-b cursor-pointer border-b-red-600 w-fit lg:ml-12 mt-8  text-xl">Burger</li></a>
                    <a href=""><li className="hover:text-red-600 hover:border-b cursor-pointer hover:border-b-red-600 mt-8 text-xl transition-all duration-500 w-fit lg:ml-12 ">Main</li></a>
                    <a href=""><li className="hover:text-red-600 hover:border-b cursor-pointer hover:border-b-red-600 mt-8 text-xl transition-all duration-500 w-fit lg:ml-12  ">Burger</li></a>
                    <a href=""><li className="hover:text-red-600 hover:border-b cursor-pointer hover:border-b-red-600 mt-8 text-xl transition-all duration-500 w-fit lg:ml-12  ">Burger</li></a>
                </ul>
            </div>
            <div className=" grid gap-5 md:gap-10 place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3  mt-55 sm:mt-6 ">
                {MenuItems}
            </div>
        </section>
        </>
    )
}

export default Menu