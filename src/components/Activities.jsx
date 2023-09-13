import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import activity_actions from "../store/actions/activities";

const { read_activities_from_itinerary } = activity_actions

 export default function Activities({itinerary_id}) {
    const activities = useSelector(store=>store.activities.activities)
    console.log(activities);
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch ( read_activities_from_itinerary ({itinerary_id}) )
        },[]
    )
  return (
    <div key={itinerary_id}>

        {activities?.map(each =>
            <div key={each._id} className="card-activities">
                <p>{each.name}</p>
                 <img src={each.photo} alt={each.name} /> 
            </div>
            
            )}

    </div>
  )
}
