(function startVideGiveawayAnimation(secondsDelay) {
  setTimeout(function() {
    $('#video-giveaway').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
      $('#video-giveaway').removeClass('animated tada flashy');
      startVideGiveawayAnimation(6);
    });

    $('#video-giveaway').addClass('animated tada flashy');
  }, secondsDelay * 1000);
})(1.5);
