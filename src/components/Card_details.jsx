import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link as Anchor, useParams } from "react-router-dom";
import itinerary_actions from "../store/actions/itineraries"
const { read_itineraries_from_city } = itinerary_actions

export default function Card_details({ src, alt, text, description, id }) {
    const [showAdditionalSection, setShowAdditionalSection] = useState(false);
    const [showMoreDetails, setShowMoreDetails] = useState(false);
    const [likes, setLikes] = useState(0);
    const itineraries = useSelector(store => store.itineraries.itineraries_from_city)
    console.log(itineraries);
    const dispatch = useDispatch()
    useEffect(
        () => { dispatch(read_itineraries_from_city({ city_id: id })) },
        []
    )
    return (

        <>
            <div className="cards-details">
                <img src={src} alt={alt} />
                <h3>{text}</h3>
                <p>{description} </p>
            </div>

            <div>
                <Anchor className="back-cities" to={'/allcities/'}>Back to cities</Anchor>
                <button className="view-itineraries" onClick={() => setShowAdditionalSection(!showAdditionalSection)}>{showAdditionalSection ? ('Close Itineraries ↑') : ('View Itineraries ↓')}</button>
            </div>
           

            {showAdditionalSection && (
                <div className="card-itineraries" >
                    <h4>Itineraries</h4>
                    {itineraries.length === 0 ? (
                        <img src="/No-itineraries.gif" alt="No itineraries" className="no-itineraries" />
                    ) : (
                        itineraries.map(each => (
                            <div className="itinerary-card" key={each.key} >
                                <h4>{each.name}</h4>
                                <img src={each.photo} alt={each.name} />

                                <div className="content-user">
                                    <div className="info-user">
                                        <div className='img-user'>
                                            <h4>User:</h4>
                                            <img src={each.city_id.admin_id.photo} alt={each.city_id.admin_id.name} />
                                            <p>{each.city_id.admin_id.name} </p>
                                        </div>
                                        <div>
                                            <h4>Hashtags:</h4>
                                            <p>{each.tags.map(tag => <span key={tag}>{tag} </span>)}</p>
                                        </div>
                                        <div>
                                            <h4>Duration:</h4>
                                            <p>{each.duration} minutes </p>
                                        </div>
                                        <div>
                                            <h4>Price:</h4>
                                            <p>$ {each.price} </p>
                                                <div className="money">
                                                    {each.price <= 100 ? (
                                                        <img src="/billetes/billete_1.png" alt="billete 100" />
                                                    ) : each.price >= 100 && each.price <= 200 ? (
                                                        <img src="/billetes/billete_2.png" alt="billete 200" />
                                                    ) : each.price >= 200 && each.price <= 300 ? (
                                                        <img src="/billetes/billete_3.png" alt="billete 300" />
                                                    ) : null}
                                                </div>
                                        </div>
                                    </div>
                                                                  
                                    <div>

                                        <div className="itinerary-detail">
                                            {/* <button>♡ 0</button> */}
                                            <button onClick={() => setLikes(likes + 1)}>♡ {likes}</button> 
                                            <button onClick={() => setShowMoreDetails(!showMoreDetails)}>{showMoreDetails ? ('▲') : ('▼')} </button>
                                        </div>
                                        {showMoreDetails && (
                                            <h3>This part is under construction!</h3>
                                        )}
                                    </div>

                                </div>
                            </div>

                        ))

                    )}
                </div>
            )}

        </>
    )
}
