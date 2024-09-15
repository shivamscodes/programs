import "./product.css"
import Price from "./price_comp.jsx"

function Amz({title,idx }){
     let oldprices=["12,456","11,999","3000","8,999"];
     let newprices=["10,000","9,999","2999","9,999"];
     let discription=[["100base booster", "Dolby sound effect"] , ["a new genZ model","with wireless charger" ], ["A new way of learning","easy to wite and erase"] , ["write what you think","smooth and bolt"]];

    return(
        <div className="Amz">
            <h4>{title}</h4>
            <p>{discription[idx][0]}</p>
            <p>{discription[idx][1]}</p>
            <Price oldprice={oldprices[idx]} newprice={newprices[idx]}/>
        </div>
    );
}

export default Amz;