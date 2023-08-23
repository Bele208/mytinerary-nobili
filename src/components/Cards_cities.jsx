import { Link as Anchor } from "react-router-dom"


export default function Cards_cities({ src, alt, text, id }) {
  return (
    <div className="cards-cities">
      <img src={src} alt={alt} />
      <h3>{text}</h3>

      <div className="btn-citie">
        <Anchor to={'/cities/' + id} >View More</Anchor>
      </div>
    </div>
  );
}