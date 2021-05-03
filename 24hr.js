<script>
  function Timer(duration, display) 
{
  
    var timer = duration, hours, minutes, seconds;
    console.log(timer);
    setInterval(function () {
        hours = parseInt((timer /3600)%24, 10)
        minutes = parseInt((timer / 60)%60, 10)
        seconds = parseInt(timer % 60, 10);

				hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

      display.text(hours +"  "+" "+" "+minutes+ " "+" "+ "      " + seconds);

				--timer;
    }, 1000);
}

jQuery(function ($) 
{
  var today = new Date();
 console.log("today "+today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds());
  var dateInSecs = (today.getHours()*3600)+(today.getMinutes()*60)+today.getSeconds();

  console.log("ds "+dateInSecs);
  var twentyFourHours = 86400- dateInSecs;
    var display = $('#remainingTime');
    Timer(twentyFourHours, display);
});
</script>
