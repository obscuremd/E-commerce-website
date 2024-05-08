import Hero from "../components/Hero"
import NewCollections from "../components/NewCollections"
import Newsletter from "../components/Newsletter"
import Offers from "../components/Offers"
import Popular from "../components/Popular"


const Shop = () => {
  return (
    <div className="max-w-screen">
      <Hero/>
      <Popular/>
      <Offers/>
      <NewCollections/>
      <Newsletter/>
    </div>
  )
}

export default Shop
