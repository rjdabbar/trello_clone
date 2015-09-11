window.TrelloClone = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var boards = new TrelloClone.Collections.Boards();
    var cards = new TrelloClone.Collections.Cards();
    var lists = new TrelloClone.Collections.Lists();
    new TrelloClone.Routers.Router({
      $rootEl: $("#main"),
      boards: boards,
      lists: lists,
      cards: cards
    })
    Backbone.history.start();
  }
};

$(document).ready(function(){
  TrelloClone.initialize();
});
