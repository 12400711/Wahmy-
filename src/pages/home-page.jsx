import  NavigationBar  from '../components/navbar'
import  Home  from '../components/home'
import  AboutUs  from '../components/About-Us'
import  Footer  from '../components/footer'



function HomePage (){
    return(
        <>
        <NavigationBar />
        <Home
        title='Wahmie. The way burgers should be.'
        paragraph='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.e.'
        />
        <AboutUs />
        <Footer />
        </>
    )
}
export default HomePage