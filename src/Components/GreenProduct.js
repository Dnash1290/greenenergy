import "./GreenProduct.css"

export default function GreenProduct({productInfo}){
    if (!productInfo){
        return(<div>loading</div>)
    }
    let pname = productInfo.pname
    let productImg = productInfo.img
    let productDetails = productInfo.details
    let price = productInfo.price
    let wikiLink = productInfo.link
    return(
        <div className="green-product">
            <div className="green-product-img-container">
                <img src={productImg} />
            </div>
            <h2>{pname}</h2>
            <p>{productDetails}</p>
            <p className="price">£{price}</p>
            <a href={wikiLink}>Find out more here</a>
        </div>
    )
}