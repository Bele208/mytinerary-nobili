import Itineraries_card from "./Itineraries_card"
export default function Itineraries_details() {
  return (
    <div className="cont-features">
        <h3>Features</h3>
        <div className="features-img">
            <div>
                 <img src="/1.png" alt="" />
                 <p>Lorem ipsum dolor sit</p>
            </div>
            <div>
                 <img src="/2.png" alt="" />
                 <p>Lorem ipsum dolor sit</p>
            </div>            <div>
                 <img src="/3.png" alt="" />
                 <p>Lorem ipsum dolor sit</p>
            </div>
        </div>
        <div>
            <Itineraries_card/>
        </div>
    </div>
  )
}
