$(document).ready(function() {
  $('select').material_select();
});

function getShowName() {
  var showName = document.getElementById("autocomplete-input").value;
  console.log("Name: " + showName);
  return showName;
}

function initPageData() {
  /*
   * Sets page images, links, etc. to the currently selected show, where not
   * handled in other functions
  */
  if(getShowName().length > 1) {
    // set selected-show-img image
    // set seasons-span links
    // set next-episode-span
    // set next-season-span
    // set link-wiki and link-imdb
    // populate amazon-tab, wikibuy-tab, netflix-tab, hulu-tab
  }
}

function setShowImg() {

}

function setNumSeasons() {

}

function setNextEpisode() {

}

function setNextSeason() {

}

function setWikiLink() {

}

function setIMDBLink() {

}

function populateAmzn() {

}

function populateWikibuy() {

}

function populateNetflix() {

}

function populateHulu() {
  
}
