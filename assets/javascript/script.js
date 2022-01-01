$(function() {

/**
 * Make all post images link to high-res versions of themsleves.
 */
$('article img').each(function() {
  $(this).wrap('<a href="' + this.src + '"></a>');
});

/**
 * Post navigation.
 */
document.onkeydown = checkKey;

function checkKey(e) {

  e = e || window.event;

  if (e.keyCode == '37' && $('.later-post a').length) {
    window.location.href = $('.later-post a').attr('href');
  }

  if (e.keyCode == '39' && $('.earlier-post a').length) {
    window.location.href = $('.earlier-post a').attr('href');
  }

}

/**
 * $
 */
});