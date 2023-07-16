import img from '../../assets/images/lanhuong.jpg'
import { useEffect,useState } from 'react'
function Home() {
            // state Product
            const [menClothing,setMenClothing] = useState([])
            // Fetch product
            useEffect(()=>{
                const getProduct = async () => {
                    const res = await fetch(`http://localhost:3000/products`);
                    const data = await res.json();
                    setMenClothing(data)
                }
                getProduct()
            },[])
        const men = menClothing.filter( (item) => item.category === "shoe")
        console.log(men);
    return ( 
    <>
    <h1>Home Page</h1>
    <div style={{padding:40}}>
        <img src={img} alt="LanHương" style={{padding:40}}></img>
        <img src={img} alt="LanHương" style={{padding:40}}></img>
        {men.map( item => (
            <img key={item.id} src={item.image} alt="LanHương" style={{height:400}}></img>
        ))}
    </div>
    <div>

    </div>
    </>
     );
}

export default Home;