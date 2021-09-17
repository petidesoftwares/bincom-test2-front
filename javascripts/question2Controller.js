const appUrl = "https://bincom-test-2.herokuapp.com/";
$(document).ready(function (){
    getAllLgasForResult();
})


function getAllLgasForResult(){
    $.get(appUrl+'api/lgas/25', function (data, status){
        if(data.lgas.length==0){
            alert("Only Delta State is Available. thanks");
        }else{
            for(let i = 0; i<data.lgas.length; i++){
                $("#lga-by-state").append("<option value='"+data.lgas[i].lga_id+ "'>"+data.lgas[i].lga_name+"</option>");
            }
        }
    })
}

function getResult(){
    var lgaID = $("#lga-by-state").val();
    $("#lga-result-body").html("");
    $.get(appUrl+'api/lga/result/sum/'+lgaID, function (data, status){
        for (let i=0; i<data.parties.length; i++){
            if(data.lga_result.length < data.parties.length){
                if (i<data.lga_result.length || i==data.lga_result.length){
                    $("#lga-result-body").append("<tr><td>"+data.parties[i]+"</td><td>"+data.lga_result[i]+"</td></tr>");
                }else{
                    $("#lga-result-body").append("<tr><td>"+data.parties[i]+"</td><td>Nil</td></tr>");
                }
            }

        }
    })
}