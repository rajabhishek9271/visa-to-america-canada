var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["Language- Your score:25 out of", "Education", "Work Experience", "Age", "Arranged Employment", "Adaptability"],
    datasets: [{
      backgroundColor: [
        "#2ecc71",
        "#3498db",
        "#95a5a6",
        "#9b59b6",
        "#f1c40f",
        "#e74c3c",
      ],
      data: [28, 25, 15, 12, 10, 10]
    }]
  },
  weight: 150
});
//
var canvas = document.getElementById("myChart");

function languagePressed(){

  $('#language').modal();
}

function educationPressed(){
  $('#education').modal();


}
function workPressed(){
  $('#work').modal();


}
function employmentPressed(){
  $('#employment').modal();


}
function adaptabilityPressed(){
  $('#adaptability').modal();


}
function agePressed(){
  $('#age').modal();


}

canvas.onclick = function(evt){
    var activePoints = myChart.getElementsAtEvent(evt);
    if (activePoints[0]) {
        var chartData = activePoints[0]['_chart'].config.data;
        var idx = activePoints[0]['_index'];

        var label = chartData.labels[idx];
        if(label == "Language"){
          languagePressed();
          $('#edu').css('display', 'none');
          $('#work').css('display', 'none');
          $('#adapt').css('display', 'none');
          $('#emp').css('display', 'none');
          $('#age').css('display', 'none');
          $('#lang').slideToggle();

        }

        if(label == "Education"){
          educationPressed();
          $('#lang').css('display', 'none');
          $('#work').css('display', 'none');
          $('#adapt').css('display', 'none');
          $('#emp').css('display', 'none');
          $('#age').css('display', 'none');
          $('#edu').slideToggle();

        }

        if(label == "Work Experience"){
          workPressed();
          $('#lang').css('display', 'none');
          $('#edu').css('display', 'none');
          $('#adapt').css('display', 'none');
          $('#emp').css('display', 'none');
          $('#age').css('display', 'none');
          $('#work').slideToggle();

        }

        if(label == "Age"){
          agePressed();
          $('#lang').css('display', 'none');
          $('#work').css('display', 'none');
          $('#adapt').css('display', 'none');
          $('#emp').css('display', 'none');
          $('#edu').css('display', 'none');
          $('#age').slideToggle();

        }

        if(label == "Arranged Employment"){
          employmentPressed();
          $('#lang').css('display', 'none');
          $('#work').css('display', 'none');
          $('#adapt').css('display', 'none');
          $('#edu').css('display', 'none');
          $('#age').css('display', 'none');
          $('#emp').slideToggle();

        }

        if(label == "Adaptability"){
          adaptabilityPressed();
          $('#lang').css('display', 'none');
          $('#work').css('display', 'none');
          $('#edu').css('display', 'none');
          $('#emp').css('display', 'none');
          $('#age').css('display', 'none');
          $('#adapt').slideToggle();

        }
      }

    // => activePoints is an array of points on the canvas that are at the same position as the click event.
};
