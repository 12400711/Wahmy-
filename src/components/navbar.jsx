import { useState } from 'react'
function NavigationBar(){
    const [Visiable, setVisiable] = useState(false)
    function OnClick (){
        setVisiable(prev =>{return !prev })
    }
    return(
        <>
        <header className='flex  bg-[#02001b] h-23  justify-center'>
            <nav className=' flex pt-8 bg-[#02001b] w-10/10 fixed justify-between z-50 items-center h-28 '>
                <a href="./"><img className='w-20 rounded-2xl h-12 ml-10 hover:cursor-pointer ' src="imges/logo-img.jpeg" alt="logo img" /></a>
                <ul className={Visiable? 'nav-bar absolute flex w-full flex-col h-[60vb] top-27 z-2 right-0 justify-around text-center bg-red-900 text-amber-50' : 'group hidden md:flex md:w-7/10 justify-around text-amber-50' }>
                    <li><a onClick={onclick} className='transition duration-500 cursor-pointer hover:border-b-2 hover:border-red-600 pb-1.5 self-center  ' href="./">Home</a></li>
                    <li><a onClick={onclick}  className='transition duration-500 cursor-pointer hover:border-b-2 hover:border-red-600 pb-1.5 self-center ' href="./AboutUs">About</a></li>
                    <li><a onClick={onclick}  className='transition duration-500 cursor-pointer hover:border-b-2 hover:border-red-600 pb-1.5 self-center ' href="/menu">Menu</a></li>
                    <li><a onClick={onclick}  className='transition duration-500 cursor-pointer hover:border-b-2 hover:border-red-600 pb-1.5 self-center ' href="/contactus">Contact Us</a></li>
                </ul>
                <div onClick={OnClick} className="toggle md:hidden flex flex-col hover:cursor-pointer w-10 items-end mr-5 h-7 justify-between text-center ">
                    <span className='w-10 bg-amber-50 h-0.5 '></span> 
                    <span className='w-7 bg-amber-50 h-0.5 '></span>
                    <span className='w-10 bg-amber-50 h-0.5 '></span>
                </div>
            </nav>
        </header>
        </>
    )
}
export default NavigationBar