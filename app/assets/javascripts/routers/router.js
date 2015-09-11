TrelloClone.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
    this.boards = options.boards;
    this.boards.fetch({reset: true})
  },

  routes: {
    "": "index",
    "boards/new": "new",
    "boards/:id": "show"
  },

  index: function () {
    var view = new TrelloClone.Views.BoardIndex({
      collection: this.boards
    });
    this._swapView(view);
  },

  new: function () {
    var board = new TrelloClone.Models.Board();
    var view = new TrelloClone.Views.BoardForm({
      model: board,
      collection: this.boards
    });
    this._swapView(view);
  },

  show: function (id) {
    var board = this.boards.getOrFetch(id);
    var view = new TrelloClone.Views.BoardShow({model: board, lists: this.lists})
    this._swapView(view);
  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }
})
