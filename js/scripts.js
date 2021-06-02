$(document).ready(function() {
  $("#formapp").submit(function(event) {
    event.preventDefault();
    $("#formapp").hide();
    const nameInput = $("input#name").val();
    const descInput = $("input#desc").val();
    const adateInput = $("input#adate").val();
    const stimeInput = $("input#stime").val();
    const etimeInput = $("input#etime").val();
    
    
    $(".name").text(nameInput);
    $(".desc").text(descInput);
    $(".adatename").text(adateInput);
    $(".stime").text(stimeInput);
    $(".etime").text(etimeInput);
    

    $("#output").show();
  });
});