import Image from "next/image";

const Destinations = () => {
    return (
        <div className="py-6 px-3 text-center">
        <h2 className="text-3xl text-center">Popular Destinations</h2>
        <div className="flex justify-around flex-wrap">
            <div className="bg-light rounded mx-3.5 my-3.5 py-5 px-5 w-80 shadow">
                <Image className="w-80 h-64 rounded-md" width={300} height={200} src={'/quetta.jpg'} alt="Quetta"></Image>
                <h3>Quetta</h3>
                <p>The city of lights and love.</p>
            </div>
            <div className="bg-light rounded mx-3.5 my-3.5 py-5 px-5 w-80 shadow">
                <Image className="w-80 h-64 rounded-md" width={300} height={200} src={'/image-1.jpg'} alt="Hunza"></Image>
                <h3>Hunza</h3>
                <p>A tropical paradise.</p>
            </div>
            <div className="bg-light rounded mx-3.5 my-3.5 py-5 px-5 w-80 shadow">
                <Image className="w-80 h-64 rounded-md" width={300} height={200} src={'/kund-malir-beach-balochistan.jpg'} alt="Kund Malir"></Image>
                <h3>Kund Malir</h3>
                <p>The Balochistan Beach.</p>
            
            </div>
        </div>
    </div>

    )
}
export default Destinations;