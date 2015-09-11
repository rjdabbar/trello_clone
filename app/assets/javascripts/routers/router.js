TrelloClone.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
    this.boards = options.boards;
    this.boards.fetch({reset: true});
  },

  routes: {
    "": "root",
    "boards/new": "newBoard",
    "boards/:id": "showBoard"
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
