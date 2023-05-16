import "./Trip.css";
import TripData from "./TripData";
import Lakshadweep from "../assets/lakshadweep.avif";
import Kerala from "../assets/kerala1.avif";
import Punjab from "../assets/punjab1.avif"


function Trip() {
    return (
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>You can discover unique destinations using Google Maps </p>
            <div className="tripcard">
                <TripData
                    image={Lakshadweep}
                    heading="Trip in Lakshadweep"
                    text="Lakshadweep is a tropical archipelago of 36 atolls and coral reefs in the Laccadive Sea, off the coast of Kerala, India. Not all of the islands are inhabited, and only a few are open to visitors (permits required). Kavaratti, one of the more developed islands, is home to dozens of mosques, including the ornately decorated Ujra Mosque, as well as Kavaratti Aquarium, showcasing regional fish, shark and coral species"
                />
                <TripData
                    image={Kerala}
                    heading="Trip in Kerala"
                    text="Kerala, a state on India's tropical Malabar Coast, has nearly 600km of Arabian Sea shoreline. It's known for its palm-lined beaches and backwaters, a network of canals. Inland are the Western Ghats, mountains whose slopes support tea, coffee and spice plantations as well as wildlife. National parks like Eravikulam and Periyar, plus Wayanad and other sanctuaries, are home to elephants, langur monkeys and tigers"
                />
                <TripData
                    image={Punjab}
                    heading="Trip in Punjab"
                    text="Punjab, a state bordering Pakistan, is the heart of India’s Sikh community. The city of Amritsar, founded in the 1570s by Sikh Guru Ram Das, is the site of Harmandir Sahib, the holiest gurdwara (Sikh place of worship). Known in English as the Golden Temple, and surrounded by the Pool of Nectar, it's a major pilgrimage site. Also in Amritsar is Durgiana Temple, a Hindu shrine famed for its engraved silver doors."
                />
            </div>
        </div>
    )
}
export default Trip;