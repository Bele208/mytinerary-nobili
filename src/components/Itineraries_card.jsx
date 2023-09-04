// import { useEffect, useState } from "react";
// import InfoUser from "./InfoUser";

// export default function Itineraries_card() {
//     const [showAdditionalSection, setShowAdditionalSection] = useState(false);

//     return (
//         <>
//             <div className="itinerary-card">
//                 <h3>Itinerary Title</h3>
//                 <img src="/img/europe/roma.jpg" alt="" />

//                 <div className="itinerary-detail">
//                     <button>♡</button>
//                     <button onClick={() => setShowAdditionalSection(!showAdditionalSection)}>{showAdditionalSection ? ('▲') : ('▼')} </button>
//                 </div>

//                 <div className="info-user">
//                     <div className='img-user'>
//                         <h4>User:</h4>
//                         <img src="/user.png" alt="Imagen de usuario" />
//                         <p>Nombre</p>
//                     </div>
//                     <div>
//                         <h4>Hashtags:</h4>
//                         <p>#Hashtags</p>
//                     </div>
//                     <div>
//                         <h4>Duration:</h4>
//                         <p>00:00</p>
//                     </div>
//                     <div>
//                         <h4>Price:</h4>
//                         <p>$$$</p>
//                     </div>
//                 </div>

//                 {showAdditionalSection && (

//                     <div className="itinerary-description">
//                         < InfoUser />
//                     </div>
//                 )}
//             </div>
//         </>

//     );
// }
