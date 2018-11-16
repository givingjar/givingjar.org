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

// Video takeover popup
var takeover = document.querySelector('.takeover-background')
var takeoverCloseIcon = document.querySelector('.takeover-close-icon')

function showTakeover () {
  document.getElementById('show-drop-menu').checked = false
  document.body.classList.toggle('noscroll', true)
  takeover.setAttribute('aria-hidden', false)
  takeover.scrollTop = 0
}

function hideTakeover () {
  document.body.classList.toggle('noscroll', false)
  takeover.setAttribute('aria-hidden', true)
  document.getElementById('mce-EMAIL').focus()
  window.scrollTo(0, 0)
}

takeoverCloseIcon.addEventListener('click', hideTakeover)
document.addEventListener('keyup', function (event) {
  if (event.key === 'Escape' || event.which === 27) {
    hideTakeover()
  }
})
document.querySelectorAll('.takeover-link').forEach(function (link) {
  link.addEventListener('click', showTakeover)
})

var startDate = new Date('2018-11-20T00:00:00-0500').getTime()
var endDate = new Date('2018-12-31T23:59:59-0500').getTime()
var now = Date.now()

if (now >= startDate && now <= endDate) {
  document.querySelectorAll('.takeover-link').forEach(function (link) {
    link.classList.toggle('takeover-link', false)
  })
  showTakeover()
}
