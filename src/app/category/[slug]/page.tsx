import { getProductData } from "@/app/products/page";
import  {Image as IImages} from 'sanity';
import ProductCard from "@/components/ProductCard";


 interface Iproduct {
  _id: string;
  title: string;
  description: string;
  price: number;
  image: IImages;
  category: {
    name: string;
  };
}


export async function GetData(page:any) {
  const data2: Iproduct[] = await getProductData();


  return (
 data2.filter((pro)=>pro.category.name == page)
 
  )

}


export default async function Page({ params }: { params: { slug: string } }) {
  const page = params.slug;
  const result =await GetData(page);


  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-10">
    {result.map((product) => (
      <ProductCard
        key={product._id}
        title={product.title}
        price={product.price}
        image={product.image}
        category={product.category}
        id={product._id}
      />
    ))}
  </div>
  );
}
