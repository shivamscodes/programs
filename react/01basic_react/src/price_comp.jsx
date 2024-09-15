export default function Price({oldprice, newprice}){
    let oldstyles={
        textDecorationLine : "line-through",
    };

    let newstyles={
         fontWeight : "bold",
    };
 
    let styles = {
        backgroundColor : "#e0c367",
         height : "23px",
         borderBottomLeftRadius : "14px",
         borderBottomRightRadius : "14px",
       }

    return (
        <div style = {styles}>
        <span style= {oldstyles}>{oldprice}</span>
        &nbsp; &nbsp;
        <span style= {newstyles}>{newprice}</span>
        </div>
    );
}