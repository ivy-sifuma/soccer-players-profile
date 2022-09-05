let api_key = "18da4f0194edadeeb724b1136f83c89357cdd184c9454eedd770905d5d2b9433";
let base_url = "https://apiv3.apifootball.com/?";
let url = "";


function handle_form(event){
    // prevent the default form action
    event.preventDefault();
    
    
    const myplayer = Object.fromEntries(new FormData(event.target));
    
    url = base_url + `action=get_players&player_name=${myplayer.name}&APIkey=${api_key}`;

    fetch(url)
        .then(response => response.json())
        .then(player => {
            if (player.length==0){
                document.getElementById("profile").innerHTML = `<div>Player ${myplayer.name} was not found<div>`;
            }
            else{
                document.getElementById("profile").innerHTML = `
                    <img src=${player[0].player_image}><br>
                    <div>Name: ${player[0].player_name}</div><br>
                    <div>Country: ${player[0].player_country}</div><br>
                    <div>Age: ${player[0].player_age}</div><br>
                    <div>Number: ${player[0].player_number}</div><br>
                    <div>Team:   ${player[0].team_name}</div><br>
                    `;
            }
   
        })
        .catch(err=>{
            document.getElementById("profile").innerHTML = `<div>There was an error in the request <div>`;
        });


};

window.onload = function(){
    let search = document.getElementById("search");
    search.addEventListener("submit", handle_form);
}