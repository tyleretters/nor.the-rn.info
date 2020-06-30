/*
 * Config
 */

var config = {
  generation: 0,
  seed: false,
  x: 10,
  y: 10
}

/*
 * Build HTML
 */

function makeGrid(x, y) {
  var out = '';
  for (var iy = y - 1; iy >= 0; iy--) {
    var cells = '';
    for (var ix = x - 1; ix >= 0; ix--) {
      var className = 'x' + ix + 'y' + iy;
      cells += makeCell(className);
    }
    out += makeRow(cells);
  }
  return out;
}

function makeRow(cells) {
  return '<div class="cell-row">' + cells + '</div>';
}

function makeCell(className) {
  return '<div class="cell ' + className + '" data-toggle="0">.</div>';
}

/*
 * Logic
 */

function coinFlip() {
  return (Math.floor(Math.random() * 2) == 0);
}

function toggle(x, y, el = 'life') {
  var cell = document.getElementById(el).getElementsByClassName('x' + x + 'y' + y)[0];
  cell.dataset.toggle = (cell.dataset.toggle == '0') ? '1' : '0';
}

function isLive(x, y) {
  var cell = document.getElementById('life').getElementsByClassName('x' + x + 'y' + y)[0];
  if (cell === null) {
    return false;
  }
  return (cell.dataset.toggle == 1) ? true : false;
}

function getNeighbors(x, y) {
  n = (y != config.y - 1);  // has northern neighbors
  e = (x != 0);             // has eastern neighbors
  s = (y != 0);             // has southern neighbors
  w = (x != config.x - 1);  // has western neighbors
  count = 0;
  if (n && isLive(x, y + 1)) count++;
  if (n && e && isLive(x - 1, y + 1)) count++;
  if (e && isLive(x - 1, y)) count++;
  if (s && e && isLive(x - 1, y - 1)) count++;
  if (s && isLive(x, y - 1)) count++;
  if (s && w && isLive(x + 1, y - 1)) count++;
  if (w && isLive(x + 1, y)) count++;
  if (n && w && isLive(x + 1, y + 1)) count++;
  return count;
}

/*
 * Any live cell with fewer than two live neighbors dies, as if by under population.
 */
function isUnderPopulated(c) {
  return (c < 2);
}

/*
 * Any live cell with two or three live neighbors lives on to the next generation.
 */
 function isHealthy(c) {
  return (c == 2 || c == 3);
}

/*
 * Any live cell with more than three live neighbors dies, as if by overpopulation.
 */
function isOverPopulated(c) {
  return (c > 3);
}

/*
 * Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
 */
function isBorn(c) {
  return (c == 3);
}

function census(x, y) {
  c = getNeighbors(x, y);
  underPopulated = healthy = overPopulated = born = false;
  if (isLive(x, y)) {
    underPopulated = isUnderPopulated(c);
    healthy = isHealthy(c);
    overPopulated = isOverPopulated(c);
  } else {
    born = isBorn(c);
  }
  if (underPopulated || overPopulated) {
    return false;
  }
  if (healthy || born) {
    return true;
  }
}

function buildNextGeneration() {
  config.generation++;
  document.getElementById('next').innerHTML = makeGrid(config.x, config.y);
  live = [];
  for (var iy = config.y - 1; iy >= 0; iy--) {
    for (var ix = config.x - 1; ix >= 0; ix--) {
      if (config.seed) {
        if (coinFlip()) {
          live.push({x: ix, y: iy});
        };
      } else {
        if (census(ix, iy)) {
          live.push({x: ix, y: iy});
        };
      }
    }
  }
  live.forEach(function(cell) {
    toggle(cell.x, cell.y, 'next');
  });
  document.getElementById('life').innerHTML = document.getElementById('next').innerHTML;
  document.getElementById('generation').innerHTML = config.generation;
  config.seed = false;
}

function seed() {
  document.getElementById('generation').innerHTML = 0;
  document.getElementById('life').innerHTML = makeGrid(config.x, config.y);
  config.generation = 0;
  config.seed = true;
}

/*
 * Run game of life.
 */

if (document.getElementById('life')) {
  initialGrid = makeGrid(config.x, config.y);
  document.getElementById('life').innerHTML = initialGrid;
  document.getElementById('next').innerHTML = initialGrid;
  seed();
  setInterval(buildNextGeneration, 1000);
}

/*
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

/*
 * Copy text to clipboard.
 */
function copy(inElement) {
  if (inElement.createTextRange) {
    var range = inElement.createTextRange();
    if (range && BodyLoaded==1) range.execCommand('Copy');
  } else {
    var flashcopier = 'flashcopier';
    if(!document.getElementById(flashcopier)) {
      var divholder = document.createElement('div');
      divholder.id = flashcopier;
      document.body.appendChild(divholder);
    }
    document.getElementById(flashcopier).innerHTML = '';
    var divinfo = '';
    document.getElementById(flashcopier).innerHTML = divinfo;
  }
}

/*
 * Start jQuery.
 */
$(function() {

/*
 * Toggles for Archives.
 */
$('.view-date').on('click', function() {
  $('.view-date').addClass('active').addClass('btn-primary').removeClass('btn-outline-primary');
  $('.view-saga').removeClass('active').addClass('btn-outline-primary');
  $('.row-date').addClass('active');
  $('.row-saga').removeClass('active');
});

$('.view-saga').on('click', function() {
  $('.view-saga').addClass('active').addClass('btn-primary').removeClass('btn-outline-primary');
  $('.view-date').removeClass('active').addClass('btn-outline-primary');
  $('.row-saga').addClass('active');
  $('.row-date').removeClass('active');
});

/*
 * Make all post images link to high res versions of themsleves.
 * The other options besides JS were to do it in markdown which is an awful author/writing
 * experience or extend Jekyll to do this during compilation. This was 3 lines.
 */
$('.post-content img').each(function() {
  $(this).wrap('<a href="' + this.src + '"></a>');
});

/*
 * Add UI for Max patch.
 */

var maxPatchId = 0;

$('.language-max').each(function() {
  
  maxPatchId++;
  
  $(this).parents('pre').wrap(function() {
    return '<div id="max-patch-id-' + maxPatchId + '" class="max-clipboard"></div>';  
  });

  beforeMaxClipboard = '<button class="btn btn-max btn-max-toggle" data-target="max-patch-id-' + maxPatchId + '">Pasted Max Patch: Click to Expand</button>';
  $(beforeMaxClipboard).insertBefore($('#max-patch-id-' + maxPatchId));

  expandClipboard = '<button class="btn btn-max d-inline-block btn-max-copy" data-target="max-patch-id-' + maxPatchId + '">Copy to Clipboard</button>';
  expandClipboard += '<p class="d-inline-block align-middle">In Max, select <em>new from clipboard</em>.<span> Copied!</span></p>';
  $('#max-patch-id-' + maxPatchId).prepend(expandClipboard);
});

/*
 * Toggle Max patch detail view.
 */
$('.btn-max-toggle').each(function() {
  $(this).click(function() {
    target = $(this).attr('data-target');
    $('#' + target).toggle();
  });
});

/*
 * Copy to clipboard.
 */
$('.btn-max-copy').each(function() {
  $(this).click(function() {
    target = '#' + $(this).attr('data-target');
    preTarget = target + ' pre';
    copyTarget =  target + ' code';
    notificationTarget = target + ' span';
    temp = $('<input>');
    $('body').append(temp);
    temp.val($(copyTarget).text()).select();
    document.execCommand('copy');
    temp.remove();
    $(notificationTarget).show();
    $(notificationTarget).addClass('fade-in-out');
    $(preTarget).addClass('code-copied');
    setTimeout(function(){
      $(notificationTarget).hide();
      $(notificationTarget).removeClass('fade-in-out');
      $(preTarget).removeClass('code-copied');
    }, 2000);
  });
});

/*
 * End jQuery.
 */   
});