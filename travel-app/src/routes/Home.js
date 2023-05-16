import Navbar from "../components/Navbar"; 
import Hero from "../components/Hero";
import Destination from "../components/Destination";
import Trip from "../components/Trip";
import Footer from "../components/Footer";
function Home (){
    return(
        <>
        <Navbar/> 
        <Hero
        cName="hero"
        heroImg="https://images.unsplash.com/photo-1543348750-466b55f32f16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80"
        title="There is a world elsewhere..."
        text="Oh, the places you'll go!..."
        buttonText="Travel Plan"
        url="/plans"
        btnClass="show"
        
        />
        <Destination/>
        <Trip/>
        
        <Footer/>
        </>
    )
}

export default Home;