TrelloClone.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
    this.boards = options.boards;
    this.boards.fetch();
  },

  routes: {
    "": "root",
    "boards/new": "newBoard",
    "boards/:id": "showBoard",
    "boards/:id/lists/new": "newList",
    "boards/:boardId/lists/:listId/cards/new": "newCard"
  },

  root: function () {
    var view = new TrelloClone.Views.BoardIndex({
      collection: this.boards
    });
    this._swapView(view);
  },

  newBoard: function () {
    var board = new TrelloClone.Models.Board();
    var view = new TrelloClone.Views.BoardForm({
      model: board,
      collection: this.boards
    });
    this._modalView(view);
  },

  showBoard: function (id) {
    var board = this.boards.getOrFetch(id);
    var view = new TrelloClone.Views.BoardShow({
      model: board,
      collection: board.lists()
    });
    this._swapView(view);
  },

  newList: function (boardId) {
    var board = this.boards.getOrFetch(boardId);
    var list = new TrelloClone.Models.List({
      board_id: boardId,
      ord: board.lists().length
    });
    var view = new TrelloClone.Views.ListForm({
      model: list
    });
    this._modalView(view);
  },

  newCard: function (boardId, listId) {
    var board = this.boards.getOrFetch(boardId);
    var list = board.lists().getOrFetch(listId);
    var card = new TrelloClone.Models.Card({
      list_id: listId,
      ord: list.cards().length,
    });
    var view = new TrelloClone.Views.CardForm({
      model: card,
      board: board
    });
    this._modalView(view)
  },

  _swapView: function (view) {
    this._clearModal();
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  },

  _modalView: function (view) {
    $('body').append(view.render().$el);
  },

  _clearModal: function () {
    $(".screen").remove();
    $(".modal").remove();
  }

})
