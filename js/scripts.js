$(document).ready(function() {
    $("#myForm").submit(function(event) {
      event.preventDefault();
        const nameInput = $("input#name").val();
        const dobInput = $("input#dob").val();
        const foodInput = $("input#food").val();
        const musicInput = $("input#music").val();
        const nounInput = $("input#noun").val();
        const colorInput = $("input#color").val();
        const sportInput = $("input#sport").val();

        
      $(".name").text(nameInput);
      $(".dob").text(dobInput);
      $(".food").text(foodInput);
      $(".music").text(musicInput);
      $(".noun").text(nounInput);
      $(".color").text(colorInput);
      $(".sport").text(sportInput);
     
      $("#survey").show();
    });
});