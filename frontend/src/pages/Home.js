import { useEffect, useState } from "react";

const Home = () => {
    const [flowers, setFlowers] = useState(null)

    useEffect(() => {
        const fetchFlowers = async () => {
            const response = await fetch('/api/flowerRoutes/')
            const json = await response.json()

            if (response.ok) {
                setFlowers(json)
            }
        }

        fetchFlowers()
    }, [])
    return ( 
        <div className="homepage">
            <div className="flowers">
                {flowers && flowers.map((flower) =>(
                <p key={flower._id}>{flower.name}</p>
                ))}
            </div>
        </div>
    );
}

export default Home;