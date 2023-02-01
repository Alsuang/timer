
let seconds = 00;
let minutes = 00;
let hours = 00;
let count = 00;


$('#start').click(function() {
  timer = true; 
  stopWatch();
});

$('#stop').click(function(){
  timer = false;
});

$('#reset').click(function() {
  timer = false;
  hours = 00;
  minutes = 00;
  seconds = 00;
  count = 00;
 
  $('#hours').text('00');
  $('#minutes').text('00');
  $('#seconds').text('00'); 
})

function stopWatch(){

  if (timer) {
    count++;
    if (count == 100) {
      seconds++;
      count = 0;
    }
    if (seconds == 60){
      minutes++;
      seconds = 0;
    }
    if (minutes == 60) {
      hours++;
      minutes = 0;
      seconds = 0;
    }

    let hrString = hours;
    let minString = minutes;
    let secString = seconds;
    let countString = count;

    if (hours < 10){
      hrString = "0" + hrString;
    }
    if (minutes < 10) {
    minString = "0" + minString
  }
    if (seconds < 10){
      secString = "0" + secString;
    }
    if (count < 10){
      countString = "0" + countString
    }
    $('#hours').html(hrString);
    $('#minutes').html(minString);
    $('#seconds').html(secString);
    setTimeout(stopWatch, 10);
   
}
}
