function MainBtn (props){
    return(
    <>
    <a href={props.position} className="flex flex-col justify-start w-9/10 items-center">
        <button className="  text-amber-50 bg-red-600 w-50 self-center hover:border-2 hover:bg-[#02001b] hover:border-red-600 h-13 cursor-pointer rounded-xl mt-20 transition duration-500 ml-20 ">{props.BtnText} ↠</button>
        <div className="w-35 h-[1px]   bg-amber-50 rounded-[3px] mt-5 ml-21"></div>
        </a>
    </>
    )
}
export default MainBtn