document.addEventListener("DOMContentLoaded",function(){

    const searchbtn= document.getElementById("search-btn");
    const usernameinput=document.getElementById("userinput");

    const easyprogresscircle=document.querySelector(".easy-progress");
    const mediumprogresscircle=document.querySelector(".medium-progress");
    const hardprogresscircle=document.querySelector(".hard-progress");

    const easylable=document.getElementById("easy-lable");
    const mediumlable=document.getElementById("medium-lable");
    const hardlable=document.getElementById("hard-lable");

    const cardstatscontainer = document.querySelector(".stats-card");

    //return true and false for valid user name
    function validateusername(username){
        if(username.trim()===""){
            alert("username should not be empty");
            return false;
        }
        const regex= /^(?!_)[A-Za-z0-9_]{3,15}(?<!_)$/;
        const ismatching = regex.test(username);
        if(!username){
            alert("invalid name");
        }
        return ismatching;
    }


    async function fetchdetails(username) {
        const url =`https://leetcode-stats-api.herokuapp.com/${username}`
        
        try{
            searchbtn.textContent = "searching...";
            searchbtn.disabled = true;


            const response = await fetch(url);
            if(!response.ok){
                throw new Error("unable to fetch");
            }
            const data = await response.json();
            console.log("logging data ",data);
        }
        catch(error){
            statsContainer.innerHTML = `<p> no data found</p>`;
        }
        finally{
            searchbtn.textContent = "search";
            searchbtn.disabled = false;
        }
    }

    searchbtn.addEventListener('click',function(){
        const username = usernameinput.value;
        console.log(username);
        if(validateusername(username)){
            fetchdetails(username);
        }
    })


})