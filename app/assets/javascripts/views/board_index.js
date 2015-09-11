TrelloClone.Views.BoardIndex = Backbone.CompositeView.extend({
  template: JST["board_index"],

  initialize: function () {
    this.listenTo(this.collection, "sync", this.render)
  },

  render: function () {
    this.$el.html(this.template());
    this.collection.each(function (board) {
      var itemView = new TrelloClone.Views.BoardIndexItem({ model: board })
      this.addSubview("ul.index-list", itemView);
    }.bind(this));
    return this;
  }
})
