// Require Node modules in the browser thanks to Browserify: http://browserify.org
var bespoke = require('bespoke'),
    fancy = require('bespoke-theme-fancy'),
    keys = require('bespoke-keys'),
    touch = require('bespoke-touch'),
    bullets = require('bespoke-bullets'),
    scale = require('bespoke-scale'),
    hash = require('bespoke-hash'),
    progress = require('bespoke-progress'),
    state = require('bespoke-state'),
    markdown = require('bespoke-meta-markdown'),
    backdrop = require('bespoke-backdrop'),
    overview = require('bespoke-overview'),
    search = require('bespoke-search'),
    tutorial = require('./tutorial'),
    easter = require('./easter'),
    gifs = require('./stoppable-gifs');


var presentationEl = document.getElementById('presentation-slide'),
    queryString = document.location.search,
    queryStringMatches,
    requestedPresentation;

if (queryString && presentationEl) {
  queryStringMatches = /p=([^&#]*)/.exec(queryString);
  requestedPresentation = queryStringMatches[1];
  if (!!requestedPresentation) {
    presentationEl.setAttribute('data-markdown', requestedPresentation);
  }
}

// Bespoke.js
window.deck = bespoke.from('article', [
  markdown({
    backdrop: function(slide, value) {
      slide.setAttribute('data-bespoke-backdrop', value);
    }
  }),
  fancy(),
  keys(),
  function() {
    var deck = arguments[0];
    document.addEventListener('keydown', function(e) {
      if ((e.which == 40) || // DOWN
          (e.which == 38)) { // UP
        deck.fire('bullets.disable');
        if (e.which == 40) deck.next();
        else deck.prev();
        deck.fire('bullets.enable');
      }
    });
  },
  touch(),
  bullets('li, .bullet'),
  hash(),
  progress(),
  state(),
  backdrop(),
  search(),
  overview(),
  tutorial(document.getElementsByClassName('tutorial')[0], 10)
  // ,
  // function() {
  //   var deck = arguments[0],
  //     delayedScale = function() {
  //       return scale('zoom')(deck);
  //     };
  //   setTimeout(delayedScale, 700);
  // }
]);

easter();
gifs();
