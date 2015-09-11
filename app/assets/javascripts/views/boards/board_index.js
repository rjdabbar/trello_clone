TrelloClone.Views.BoardIndex = Backbone.CompositeView.extend({
  template: JST["boards/board_index"],

  initialize: function () {
    this.listenTo(this.collection, "sync", this.render)
  },

  events: {
    "click li.board": "show",
    "click li.board-new": "new",

  },

  render: function () {
    this.$el.html(this.template());
    this.collection.each(function (board) {
      var itemView = new TrelloClone.Views.BoardIndexItem({ model: board })
      this.addSubview("ul.index-list", itemView);
    }.bind(this));
    var newBoardView = new TrelloClone.Views.BoardNew();
    this.addSubview("ul.index-list", newBoardView);
    return this;
  },

  show: function (e) {
    e.preventDefault();
    var board = this.collection.getOrFetch($(e.currentTarget).data("id"));
    Backbone.history.navigate("boards/" + board.id, { trigger: true });
  },

  new: function (e) {
    e.preventDefault();
    Backbone.history.navigate("boards/new", { trigger: true });
  },


})
