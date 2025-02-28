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

        try{
            searchbtn.textContent = "searching...";
            searchbtn.disabled = true;

           // const response = await fetch(targeturl);
            const proxyurl = 'https://cors-anywhere.herokuapp.com/';
           const targeturl ='https://leetcode.com/graphql/';


           const myHeaders = new Headers();
               myHeaders.append("content-type", "application/json");
   
               const graphql = JSON.stringify({
                   query: "\n    query userSessionProgress($username: String!) {\n  allQuestionsCount {\n    difficulty\n    count\n  }\n  matchedUser(username: $username) {\n    submitStats {\n      acSubmissionNum {\n        difficulty\n        count\n        submissions\n      }\n      totalSubmissionNum {\n        difficulty\n        count\n        submissions\n      }\n    }\n  }\n}\n    ",
                   variables: { "username": `${username}` }
               })
               const requestOptions = {
                   method: "POST",
                   headers: myHeaders,
                   body: graphql,
                   redirect:"follow"
               };
   
               const response = await fetch(proxyurl+targeturl, requestOptions);

            if(!response.ok){
                throw new Error("unable to fetch details");
            }
            const parsedata = await response.json();
            console.log("logging data ",parsedata);

            displayuserdata(parsedata);
        }
        catch(error){
            cardstatscontainer.innerHTML = `<p>${error.message}</p>`;
        }
        finally{
            searchbtn.textContent = "search";
            searchbtn.disabled = false;
        }
    }


    function updateprogress(solved, total, lable, circle){
        const progressDegree = (solved/total)*100;
        circle.style.setProperty("--progress-degree",`${progressDegree}%`);
        lable.textContent=`${solved}/${total}`;
    }




     function displayuserdata(parsedata){
        const totalquestion=parsedata.data.allQuestionsCount[0].count;
        const totaleasyquestion=parsedata.data.allQuestionsCount[1].count;
        const totalmediumquestion=parsedata.data.allQuestionsCount[2].count;
        const totalhardquestion=parsedata.data.allQuestionsCount[3].count;

        const solvedquestions = parsedata.data.matchedUser.submitStats.acSubmissionNum[0].count;
        const solvedeasyquestions = parsedata.data.matchedUser.submitStats.acSubmissionNum[1].count;
        const solvedmediumquestions = parsedata.data.matchedUser.submitStats.acSubmissionNum[2].count;
        const solvedhardquestions = parsedata.data.matchedUser.submitStats.acSubmissionNum[3].count;

        updateprogress(solvedeasyquestions,totaleasyquestion,easylable,easyprogresscircle);
        updateprogress(solvedmediumquestions,totalmediumquestion,mediumlable,mediumprogresscircle);
        updateprogress(solvedhardquestions,totalhardquestion,hardlable,hardprogresscircle);

        const cardsdata= [
            {lable: "overall submission", value:parsedata.data.matchedUser.submitStats.totalSubmissionNum[0].submissions},
            {lable: "overall easy submission", value:parsedata.data.matchedUser.submitStats.totalSubmissionNum[1].submissions},
            {lable: "overall medium submission", value:parsedata.data.matchedUser.submitStats.totalSubmissionNum[2].submissions},
            {lable: "overall hard submission", value:parsedata.data.matchedUser.submitStats.totalSubmissionNum[3].submissions},

        ];

        console.log(cardsdata);

        cardstatscontainer.innerHTML= cardsdata.map(data =>{
           `<div class="card">
           <h4>${data.lable}</h4>
           <p>${data.value}</p>
           </div>`
        }
    ).join("")


    }


    searchbtn.addEventListener('click',function(){
        const username = usernameinput.value;
        console.log(username);

        if(validateusername(username)){
            fetchdetails(username);
        }
    })


})