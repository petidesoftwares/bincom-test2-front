const appUrl = "https://bincom-test-2.herokuapp.com/";
$(document).ready(function (){
    // getStates();
    getLgaByState();
})


function getStates() {
    var stateId =0;
    $.get(appUrl+'api/states', function (data, status){
        for(let i = 0; i<data.States.length; i++){
            stateId = data.States[i].state_id;
            $("#state-list").append("<li class='li' onclick='getLgaByState("+stateId+")'>"+ data.States[i].state_name+"</li>");
        }
    })
}
function getLgaByState(){
//     window.location.href = "views/lga.php?id=1";
    $("#lga-list").html("");
    var lgaId =0;
    $.get(appUrl+'api/lgas/25', function (data, status){
        if(data.lgas.length==0){
            alert("Only Delta State is Available. thanks");
        }else{
            for(let i = 0; i<data.lgas.length; i++){
                lgaId = data.lgas[i].lga_id;
                console.log(lgaId);
                $("#lga-list").append("<li class='li' onclick='getWardsByLga("+lgaId+")'>"+ data.lgas[i].lga_name+"</li>");
            }
        }
    })
}
function getWardsByLga(lgaID){
    $("#ward-list").html("");
    var wardId =0;
    $.get(appUrl+'api/lga/wards/'+lgaID, function (data, status){
        for(let i = 0; i<data.wards.length; i++){
            wardId = data.wards[i].ward_id;
            $("#ward-list").append("<li class='li' onclick='getPollingUnits("+wardId+")'>"+ data.wards[i].ward_name+"</li>");
        }
    })
}

function getPollingUnits(wardID){
    $("#poll-list").html("");
    var unitId =0;
    $.get(appUrl+'api/wards/pulling-units/'+wardID, function (data, status){
        for(let i = 0; i<data.units.length; i++){
            unitId = data.units[i].uniqueid;
            $("#poll-list").append("<li class='li' onclick='getUnitResult("+unitId+")'>"+ data.units[i].polling_unit_name+"</li>");
        }
    })
}

function getUnitResult(unitId){
    $("#result-body").html("");
    var wardId =0;
    $.get(appUrl+'api/unit/result/'+unitId, function (data, status){
        if (data.result.length == 0){
            alert("Result not Ready");
        }else{
            for(let i = 0; i<data.result.length; i++){
                // wardId = data.units[i].polling_unit_number;
                $("#result-body").append("<tr><td>"+data.result[i].party_abbreviation+"</td><td>"+ data.result[i].party_score+"</td></tr>");
            }
        }
    })
}
