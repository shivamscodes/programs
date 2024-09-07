// import React from 'react';
import Product from "./product.jsx"

function ProductTab(){

    let options= [<li>"tech"</li>, <li> "durable"</li>, <li>"fast"</li>];
    // let option2= {a: "tech", b: "durable", c: "fast"};
    return (
        <div>
            
        {/* <Product title="phone" price={15000} features={options} featuresB={option2} /> */}
        {/* <Product title="phone" price={15000} features= {["tech", "durable", "fast"]} /> */}
        {/* <Product title="phone" price={15000} features= {{a :" tech" }} /> */}
      
         {/* <Product title="phone" price={15000} features= {options} /> */}

         <Product title="phone" price={400000} />

        <Product title="camera" price={45000} />
        <Product title="pen" price={1000} />
        </div>
    );
}


export default ProductTab;