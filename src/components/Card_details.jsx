
export default function Card_details({ src, alt, text, description }) {
    return (
        <div className="cards-details">
            <img src={src} alt={alt} />
            <h3>{text}</h3>
            <p>{description} </p>
        </div>
    )
}
