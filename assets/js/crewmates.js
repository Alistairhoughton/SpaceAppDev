 
// break {


async function CrewmatesData() {
  var crewmate1
  // var link = "http://api.open-notify.org/astros.json"
  var link = "https://course-anywhere.herokuapp.com/http://api.open-notify.org/astros.json"
  var temp = await fetch(link)
 


    .then(function (response) {
      return response.json();
    })

    .then(function(data){
      crewmate1 = data.people[0].name
      crewmate2 = data.people[1].name
      crewmate3 = data.people[2].name
      crewmate4 = data.people[6].name
      crewmate5 = data.people[7].name
      crewmate6 = data.people[8].name
      crewmate7 = data.people[9].name
      crewmate8 = data.people[3].name
      crewmate9 = data.people[4].name
      crewmate10 = data.people[5].name
      
      // console.log(data);
     

      
      document.querySelector("#mate1").textContent =
        crewmate1;
        document.querySelector("#mate2").textContent =
        crewmate2;
        document.querySelector("#mate3").textContent =
        crewmate3;
        document.querySelector("#mate4").textContent =
        crewmate4;
        document.querySelector("#mate5").textContent =
        crewmate5;
        document.querySelector("#mate6").textContent =
        crewmate6;
        document.querySelector("#mate7").textContent =
        crewmate7;
        // document.querySelector("#mate8").textContent =
        // crewmate8;
        // document.querySelector("#mate9").textContent =
        // crewmate9;
        // document.querySelector("#mate10").textContent =
        // crewmate10;
        




    })

    // .catch(function(error){
    //   alert("Error")
    // })
    



}

async function getcrewmate(){
  var thiscrewmate = await CrewmatesData()
}

getcrewmate()

