import Amz from "./amz_sc.jsx"

function Tab(){
     let styles = {
        display : "flex",
        flexWrap : "wrap",
        justifyContent: "center",
        alignItem : "center",
     };

    return(
        <div style={styles}>
        <Amz title="Logitech MX master" idx={0}/>
        <Amz title="Apple watch" idx={1}/>
        <Amz title="Zebronic book" idx={2}/>
        <Amz title="pentionc" idx={3}/>
        </div>
    );
}


export default Tab;
