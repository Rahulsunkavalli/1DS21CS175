import axios from "axios";
import { useState } from "react";

type product ={
  productName :string,
  price:number,
  rating:number,
  discount:number,
  availability:string
}

interface productListProps {
  data: product[];
}

export default async function Home() {
  // const [res,setData] = useState<product[]>();
  // const {data} = await axios.get("http://20.244.56.144/test/primes")
  const {data} = await axios.get("http://20.244.56.144/test/companies/AMZ/categories/TV/products/top=10&minPrice=1&maxPrice=10000",{headers:})
  console.log(data);
  return (
   <div>
      
   </div> 
  )
}
