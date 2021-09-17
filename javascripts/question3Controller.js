
const appUrl = "https://bincom-test-2.herokuapp.com/";
const indexArray =[];
$(document).ready(function (){
    $.get(appUrl+'api/parties',function (data, status){
        for(let i=0; i<data.parties.length; i++){
            indexArray[i] = data.parties[i].partyname;
            $("#upload-form").append("<span><label>"+data.parties[i].partyname+":</label></span><input type='text' id='"+data.parties[i].partyname+"' /><br>")
        }
        $("#upload-form").append("<button id='upload-result-btn' type='button' onclick='uploadResult()'>Upload</button>");
    })
})

function uploadResult(){
    const dataArray =[];
    const unitNumber = $("#polling-unit-num").val();
    const agentName = $("#agent-name").val();
    for (let i = 0; i<indexArray.length; i++){
        dataArray[i] =  $("#"+indexArray[i]).val();
        /**
         * Here the data length on the announce_pu_result is limited to 4 characters, hence
         * it cannot accommodate LABOUR party.
         * Thus, i updated the party_abbreviatio for LABOUR to align with that.
         * Alternatively, the the data length for party_abbreviation on the result table can be
         * increased to accommodate parties with longer abbreviations.
         */
        if(indexArray[i] === "LABOUR"){
            indexArray[i] = "LAB"
        }
    }
    $.post(appUrl+'api/upload-result',{unitNumber:unitNumber,agentName:agentName,dataKey:indexArray,result:dataArray}, function (data){
        alert(data.message);
    })
}