import React from 'react'
import './Home.css'
import Product from './Product';

function Home() {
    return (
        <div className = "home">
            <img className = "home_image"
            src = "https://www.bajajfinservmarkets.in/content/dam/emistoremarketplace/index/20-02-2020/netflix/Netflix-Banner_1080x419.jpg?impolicy=pqmedium" alt = ""/>

            <div className = "home_row">
                <Product
                    id= "123"
                    title = "iPhone 12(64GB, 128GB)"
                    price = {68000}
                    rating ={5}
                    image = "https://i1.wp.com/maplestore.in/wp-content/uploads/2020/10/iPhone_12_Lineup_Screen__WWEN.jpg?fit=2048%2C2048&ssl=1"
                />

                <Product
                    id= "124"
                    title = "Sennheiser Over Ear Wireless HD 350BT Black Headphone"
                    price = {12000}
                    rating ={4}
                    image = "https://m.media-amazon.com/images/I/41A2XZnQThS.jpg"
                />

                <Product
                    id= "125"
                    title = "2019 Apple MacBook Pro (16-inch/40.65 cm, 16GB RAM, 1TB Storage, 2.3GHz 9th Gen Intel Core i9) - Space Grey"
                    price = {245000}
                    rating ={5}
                    image = "https://m.media-amazon.com/images/I/71L2iBSyyOL._SL1500_.jpg"
                />


 
            </div>


            <div className = "home_row">
                <Product
                    id= "126"
                    title = "Talent is Overrated: What Really Separates World-Class Performers from Everybody Else"
                    price = {800}
                    rating ={4}
                    image = "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1440778775l/4485966._SY475_.jpg"
                />

                <Product
                    id= "127"
                    title = "Amoha Leatherette 1 Seater Manual Recliner In Dark Brown"
                    price = {22200}
                    rating ={4}
                    image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5oPQRx_XiFrfzp8jOqiWF6K_-MdFtgJp13ChqyetU2bBt2CQcK9jvMnseEQ&usqp=CAc"
                />
            </div>

            <div className = "home_row">
                <Product
                    id= "128"
                    title = "H&M PREMIUM ATTIRE Full Sleeves Slim Fit Shirt"
                    price = {1200}
                    rating ={3}
                    image = "https://assets.ajio.com/medias/sys_master/root/20210403/OjjF/6068dc44aeb269a9e33a52e1/-473Wx593H-462103975-pink-MODEL.jpg"
                />

                <Product
                    id= "129"
                    title = "Nike Joyride White MENS Running Shoes"
                    price = {2500}
                    rating ={4}
                    image = "https://cms.qz.com/wp-content/uploads/2016/10/nike-mag-2016-official-06_original-cropped.jpg?quality=75&strip=all&w=900&h=900&crop=1"
                />

                <Product
                    id= "1210"
                    title = "Saree with Pom-Pom Accents"
                    price = {800}
                    rating ={4}
                    image = "https://assets.ajio.com/medias/sys_master/root/20210403/VPPS/60690d94aeb269a9e33d90a9/-473Wx593H-462138520-black-MODEL.jpg"
                />
            </div>

            <div className = "home_row">
                <Product
                    id= "1210"
                    title = "Samsung 49 CJ89 DFHD LED-LCD Curved Ultrawide Monitor,Black"
                    price = {73000}
                    rating ={4}
                    image = "https://m.media-amazon.com/images/I/71MlcO29QOL._SL1500_.jpg"
                />
            </div>
            
        </div>
    )
}

export default Home
