TrelloClone.Views.BoardIndex = Backbone.CompositeView.extend({
  template: JST["boards/board_index"],

  initialize: function () {
    this.listenTo(this.collection, "sync", this.render)
  },

  events: {
    "click li.board-item": "show"
  },

  render: function () {
    this.$el.html(this.template());
    this.collection.each(function (board) {
      var itemView = new TrelloClone.Views.BoardIndexItem({ model: board })
      this.addSubview("ul.index-list", itemView);
    }.bind(this));
    return this;
  },

  show: function (e) {
    e.preventDefault();
    var board = this.collection.getOrFetch($(e.currentTarget).data("id"));
    Backbone.history.navigate("api/boards/" + board.id, { trigger: true });
  }
})
