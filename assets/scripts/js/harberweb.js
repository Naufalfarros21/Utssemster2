$(document).ready(function (){
    $("#btnsearch").click(function(e){
        var txtInput = $("#srchInv").val();
        $("#infoinvaccr").html("Nama Anda : "+ txtInput);
        $.ajax({
            type: "POST",
            url: "/assets/scripts/ajax/getcurl.php",
            data: "",
            success: (response) => {
                $("#infoinvaccr").html("<br/>Resposne<br/>"+ response);
            }
        });
    }) ;
});












 //$.ajax({
        //    type: "POST",
        //    url: "/asset/scripts/ajax/getcurl.php",
        //    data: "",
        //    success: function (response) {
        //        $("#infoinvaccr").html("Response<br/>" + response);
        //    }
        // });