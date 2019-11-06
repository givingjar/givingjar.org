// Google Analytics
window.dataLayer = window.dataLayer || []
function gtag(){dataLayer.push(arguments)}
gtag('js', new Date())
gtag('config', 'UA-62666024-4')

// Smooth auto-scrolling
$.localScroll()

// Newsletter signup form
$('#mc-embedded-subscribe-form').ajaxChimp({
  callback: function(resp) {
    if (resp.result === 'success') {
      $('#mc-embedded-subscribe-form input').hide()
      $('#mce-email-label').html('You&apos;ll receive a confirmation email soon. Thank you for your interest in Giving Jar! <i class="fa fa-heart"></i>')
    }
    $('#mc-embedded-subscribe-form a').attr('target', '_blank')
  }
})
