import Navbar from "./components/Navbar"
import Categories from "./components/categories"
import SaleImage from "./components/saleimage"
import Recommended from "./components/recommended"
import Topics from"./components/topics"
import Footer from"./components/footer"

function App(){
    return(
        <div>
    <Navbar></Navbar>
    <Categories></Categories>
    <SaleImage></SaleImage>
    <Recommended></Recommended>
    <Topics></Topics>
    <Footer></Footer>
  </div>
    )
}
export default App