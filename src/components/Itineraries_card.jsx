import { useEffect, useState } from "react";
export default function Itineraries_card() {
    const [showAdditionalSection, setShowAdditionalSection] = useState(false);
    return (
        <>
            <div className="itineray-card">
                <h3>Itinerary Title</h3>
                <img src="/page-construction.png" alt="" />

                <div className="itinery-detail">
                    <button>♡</button>
                    <button onClick={() => setShowAdditionalSection(!showAdditionalSection)}>
                        v
                    </button>

                </div>


                {showAdditionalSection && (
                    <div>
                        <p>Lorem, ipsum dolor sit amet</p>
                        <p>Lorem, ipsum dolor sit amet</p>
                        
                    </div>
                )}
            </div>
        </>

    );
}
