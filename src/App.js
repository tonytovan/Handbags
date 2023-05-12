import React from 'react';
import './App.css';
import Button from "./components/Button";
import bagone from "./assets/bag_1.png";
import bagtwo from "./assets/bag_2.png";
import bagthree from "./assets/bag_3.png";
import bagfour from "./assets/bag_4.png";
import Product from "./components/Product";
import brand from "./assets/brand.png";
import ourstory from "./assets/our_story.png"
import Tile from "./components/Tile";


function App() {
    return (
        <>
            <h1>Handbags & Purses</h1>
            <nav>
                <Button isDisabled={false} clickHandler={() => console.log("To the collection!")}>>
                    To the collection
                </Button>

                <Button isDisabled={false} clickHandler={() => console.log("Shop all bags!")}>>
                    Shop all bags
                </Button>

                <Button isDisabled={true} clickHandler={() => console.log("To the pre-orders!")}>>
                    Pre-orders
                </Button>
            </nav>
            <main>
                <Product
                label="Best seller"
                img={bagone}
                title="The handy bag"
                price={400}/>

                <Product
                    label="Best seller"
                    img={bagtwo}
                    title="The stylish bag"
                    price={250}/>

                <Product
                    label="New collection"
                    img={bagthree}
                    title="The simple bag"
                    price={300}/>

                <Product
                    label="New collection"
                    img={bagfour}
                    title="The trendy bag"
                    price={150}/>
            </main>
            <footer>
                <Tile
                    title="The brand">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aperiam assumenda consequuntur deserunt facere illo incidunt minima natus nihil quis reiciendis, rerum similique voluptatibus. Quam.</p>
                </Tile>
                <Tile
                    img={brand} imgDescription={"the brand logo"}/>
                <Tile
                    title="our story">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis iste, quaerat repellendus sapiente sequi unde vero. Blanditiis consequuntur eaque eligendi fugiat iure minima suscipit, voluptatum!</p>
                </Tile>
                <Tile
                    img={ourstory} imgDescription={"story about us"}/>
                </footer>
        </>
    );
}

export default App;



