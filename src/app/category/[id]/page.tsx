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


  export async function GetData({ page }: { page: string; }): Promise<Iproduct[]>{
    console.log("🚀 ~ file: page.tsx:19 ~ GetData ~ GetData:before", GetData)
    const data2 = await getProductData() as Iproduct[];
    console.log("🚀 ~ file: page.tsx:19 ~ GetData ~ GetData:after", GetData)
    const check:string =page
    return (
  data2.filter((pro)=>pro.category.name === check)
  
    )

  }
  export default async function Page({ params }: { params: { id: string } }) {
    const page = params.id;
    const result =await GetData({ page });


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
