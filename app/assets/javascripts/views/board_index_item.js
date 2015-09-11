TrelloClone.Views.BoardIndexItem = Backbone.View.extend({
  template: JST["board_index_item"],
  tagName: "li",
  className: "board-item",

  initialize: function () {},

  render: function () {
    this.$el.html(this.template({board: this.model}))
    return this;
  }
})
