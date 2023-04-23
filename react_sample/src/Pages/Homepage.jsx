import Navbar from "../Components/Navbar" //2 dots used to go back two levels in directory because we are getting out of this folder and then going into another
import Footer from "../Components/Footer"
import Counter from "../Components/Counter"
export default function Homepage()
{
    const name="Reha Shah"
    const age=19
    const address="ABC"
    console.log(name)
    return(
        <div>
            <Navbar />
            <Counter />
            <h1>My name is {name}</h1>
            <h1>My age is {age}</h1>
            <h1>My address is {address}</h1>
            <h4>Rendering curly brackets as is: &#123; &#125; {`{}`}</h4>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, obcaecati!</p>
            <Footer />
        </div>
    )
}