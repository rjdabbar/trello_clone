TrelloClone.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
    this.boards = options.boards;
    this.lists = options.lists;
    this.cards = options.cards
    this.boards.fetch({reset: true})
    // this.lists.fetch({reset: true})
    // this.cards.fetch({reset: true})
  },

  routes: {
    "": "index",
    "api/boards/new": "new",
    "api/boards/:id": "show"
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
    var board = this.collection.getOrFetch(id);

  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }
})
