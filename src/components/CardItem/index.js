// Write your code here.
import "./index.css"
const CardItem=props=> {
    const {itemDetails}=props;
    const {title,description,imgUrl,className}=itemDetails;
    return {
        <li className={`${className} card-container`}>
            <h1 className="title">{title}</h1>
            <p className="para">{description}</p>
            <div className="img-container">
                <img src={imgUrl} alt={title} />
            </div>
        </li>
    }

}
export default CardItem