
$(function () {
  Twitch.init({clientId: 'ppbe2u8akeh60drxjevmpaxb310639v'}, function(error, status) {
    // the sdk is now loaded
  });
  $('.twitch-connect').click(function() {
    console.log("clicked!\n");
 
  })
  $.getJSON("https://api.twitch.tv/kraken/streams/c9sneaky?callback=?",function(data){
    console.log(data);
    if(data.stream == null){
      $('#title').text("he is offline!\n");
    }else{
    $('#title').text(data.stream.game);
    }
  });
});
