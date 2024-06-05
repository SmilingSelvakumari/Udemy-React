//SaleImage
import saleimage from "../assets/images/saleimage.jpg"

function SaleImage(){
    return(
        <div className="sale-image">

        <img src = {saleimage} alt="Sale Image"></img>

        <div className="sale-image-offer">

            <h1>Get ahead, stay ahead</h1>
            <p>Thrive by learning the latest skills. Courses as low as ₹449 ends Today.</p>
        </div>
    </div>
    )
}
export default SaleImage