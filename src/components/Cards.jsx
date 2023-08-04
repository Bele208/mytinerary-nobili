export default function Cards({src, alt, text}) {
  return (
    <div className="unique-card">
           <img src={src} alt={alt} />
           <p>{text}</p>
    </div>
  )
}
