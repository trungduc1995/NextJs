import Slider from "./slider";
import Deal from "./deal";
import FeaturedProductCategories from "./featured-category";
import ProductCategories from "./product";
import Article from "./article";

export default function HomePage() {
    
    return(
        <div className="home-page !-mt-5 pt-6">
            <div className="container">
                <Slider />

                <Deal />

                <FeaturedProductCategories />

                <ProductCategories />

                <Article />
            </div>
        </div>
    )
}