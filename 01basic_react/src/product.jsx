import "./Product.css"

function Product ({title, price ,features}){
    // const list = features.map((feature) => <li>{feature}</li>);
   
    let Discount = price > 30000 ? "dicount of 5%" : "";

//     if(price>30000){
//     return (
//         <div className="Product">
//         <h3>{title} </h3>
//         <p>price : {price} </p>

//         {/* <p>{features.map((feature) => <li>{feature}</li>)}
//             </p> */}

//         {/* <p>{featuresB.a}</p> */}
//             <p>discount of 5%</p>
//         </div>
//     );
//   }else{
//     return (
//         <div className="Product">
//         <h3>{title} </h3>
//         <p>price : {price} </p>
//         </div>
//     );
//   }

// return (
//             <div className="Product">
//             <h3>{title} </h3>
//             <p>price : {price} </p>
//             <p> {Discount}</p>
//                 </div>
//         );

   let discount= price> 30000;
    let styles = { backgroundColor :  discount ? "yellow" : "red" };
            return (
            <div className="Product" style= {styles}>
            <h3>{title} </h3>
            <p>price : {price} </p>
            { discount ?  <p>"dicount of 5%"</p> : null }
                </div>
        );

} 

 
export default Product;