
$(function () {
  $.getJSON("https://api.twitch.tv/kraken/streams/c9sneaky?callback=?",function(data){
    console.log(data);
  });
});
