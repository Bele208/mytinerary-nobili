import { Link as Anchor } from "react-router-dom"
export default function Btn_citie({id}) {
  console.log(id)
  return (
    <div className="btn-citie">
      <Anchor to={'/city/'+id} >View More</Anchor>
    </div>
    
  )
}