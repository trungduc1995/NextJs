import Link from "next/link";
import { categories } from "@/data/categories";

export default function FeaturedProductCategories() {
    const {all_category} = categories.product;
    
    const getAllCategoriesFlat = (cats: any[]): any[] => {
        const result: any[] = [];
        
        cats.forEach((cat) => {
            result.push(cat);
            
            if (cat.children && cat.children.length > 0) {
                result.push(...getAllCategoriesFlat(cat.children));
            }
        });
        
        return result;
    };

    const allCategoriesFlat = getAllCategoriesFlat(all_category);
    // Lọc các danh mục nổi bật
    const featuredCategories = allCategoriesFlat.filter(
        (item: any) => item.is_featured === 1
    );

    return (
        <>
        {featuredCategories.length && 
            <div className="home-categories-container bg-white rounded-[24px] my-10 p-6 pb-8">
                <h2 className="group-title font-600 text-[28px] text-[#004BA4] mb-5 leading-9"> Danh mục nổi bật </h2>

                <div className="grid grid-cols-10 gap-6">
                    {featuredCategories
                        .map( (item:any) => 
                            <Link href={item.url} className="item" key={item.id}>
                                <i className="image lazy" 
                                    style={{ backgroundImage: `url(${item.thumnail ? item.thumnail : '/images/avatar-admin.png'})` }}
                                ></i>
                                
                                <span className="block">
                                    {item.title}
                                </span>
                            </Link>
                        )
                    }
                </div>
            </div>
        }
        </>
    )
}