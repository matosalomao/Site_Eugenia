console.log('Hello, welcome to the professional site of Eugenia!')

function menuToggle () {
  var one = document.getElementById('myNavtoggle')
  if (one.className === 'navtoggle') {
    one.className += ' responsive'
  } else {
    one.className = 'navtoggle'
  }
}

$('a[href*="#"]').on('click', function (e) {
  e.preventDefault()

  $('html, body').animate({
    scrollTop: $($(this).attr('href')).offset().top
  },
  800,
  'linear'
  )
})
