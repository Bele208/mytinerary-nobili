import { Link as Anchor} from "react-router-dom"

export default function Cards({src, alt, text, id}) {
  return (
    <Anchor to={'/cities/' + id}  className="unique-card">
           <img src={src} alt={alt} />
           <p>{text}</p>
    </Anchor>
  )
}
