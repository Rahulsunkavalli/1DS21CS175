type product ={
    productName :string,
    price:number,
    rating:number,
    discount:number,
    availability:string
}

function Product(res:product[]) {
    return (
        <div>
            {res?.map((data:product) => {
            <div key={data.productName}>
            <h2>{data.productName}</h2>
            <p>₹{data.price}</p>
            <p>{data.rating}/5</p>
            <p>{data.discount}</p>
            <p>{data.availability}</p>
            </div>
      })}
        </div>
    );
}

export default Product;