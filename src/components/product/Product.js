import "./product.css"

export default function Product({ item }) {
    return (
        <div className="p">
            <div className="p-browser">
                <div className="p-circle"></div>
                <div className="p-circle"></div>
                <div className="p-circle"></div>
            </div>
            <a href={item.link} target="_blank" rel="noreferrer">
                <img src={item.img} alt="" className="p-img" />
            </a>
        </div>
    )
}
