TrelloClone.Views.BoardNew = Backbone.View.extend({
  template: JST["boards/board_new"],
  tagName: "li",
  className: "board-item new-board-item",

  initialize: function () {},

  render: function () {
    this.$el.html(this.template());
    return this;
  },


})
