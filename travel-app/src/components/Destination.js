import Ledakh from "../assets/ladakh.avif";
import Ledakh1 from "../assets/ladakh1.avif";
import Ledakh2 from "../assets/ladakh2.avif";
import Ledakh3 from "../assets/ladakh3.avif";
import Manali from "../assets/manali.avif";
import Manali3 from "../assets/manali3.avif";
import Manali2 from "../assets/manali.avif";
import Manali4 from "../assets/manali4.avif";
import TajMahal from "../assets/tajmahal2.avif";
import TajMahal3 from "../assets/tajmahal1.jpg";
import Munnar1 from "../assets/munnar3.avif";
import Munnar2 from "../assets/munnar2.avif";

import "./Destination.css";
import DestinationData from "./DestinationData";

const Destination = () => {
    return (
        <div className="destination">
            <h1>Popular Destinations</h1>
            <p>Travel is an investment in yourself</p>
            <DestinationData
            className="first-des"

                heading="Manali, Himachal Pradesh"
                text="With spectacular valleys, breathtaking views, snowcapped mountains, and lush forests of oak, deodar, and pine, Manali is a magical hill station at the northern end of Kullu valley in Himachal Pradesh. Gifted to the world by the mighty Himalayas, it is known to be one of the most popular destinations. It is a rustic enclave known for its cool climate and snow-capped mountains, offering respite to tourists escaping scorching heat of the plains. The tourism industry in Manali started booming only in the early 20th century"
                img1={Manali3}
                img2={Manali4}
            />

            <DestinationData
            className="first-des-reverse" 

                heading="Ladakh, Kashmir"
                text="Ladakh is a region administered by India as a union territory which constitutes a part of the larger Kashmir region and has been the subject of dispute between India, Pakistan, and China since 1947. Ladakh is bordered by the Tibet Autonomous Region to the east, the Indian state of Himachal Pradesh to the south, both the Indian-administered union territory of Jammu and Kashmir and the Pakistan-administered Gilgit-Baltistan to the west,and the southwest corner of Xinjiang across the Karakoram Pass in the far north"
                img1={Ledakh3}
                img2={Ledakh1}
            />
            <DestinationData
            className="first-des" 

                heading="Taj Mahal, Agra"
                text="An immense mausoleum of white marble, built in Agra between 1631 and 1648 by order of the Mughal emperor Shah Jahan in memory of his favourite wife, the Taj Mahal is the jewel of Muslim art in India and one of the universally admired masterpieces of the world's heritage.  It was built by Mughal Emperor Shah Jahan in memory of his wife Mumtaz Mahal with construction starting in 1632 AD and completed in 1648 AD, with the mosque, the guest house and the main gateway on the south, the outer courtyard and its cloisters were added subsequently and completed in 1653 AD."
                img1={TajMahal}
                img2={TajMahal3}
            />
            <DestinationData
            className="first-des-reverse" 

                heading="Munnar, Kerala"
                text="Munnar is a town in the Western Ghats mountain range in India’s Kerala state. A hill station and former resort for the British Raj elite, it's surrounded by rolling hills dotted with tea plantations established in the late 19th century. Eravikulam National Park, a habitat for the endangered mountain goat Nilgiri tahr, is home to the Lakkam Waterfalls, hiking trails and 2,695m-tall Anamudi Peak. December to February:The winter months are by far the best time to visit Munnar since the weather is pleasant."
                
                img1={Munnar1}
                img2={Munnar2}
            />
        </div>
    )
}
export default Destination