TrelloClone.Views.BoardHeader = Backbone.View.extend({
  template: JST["boards/board_header"],
  tagName: "nav",
  className: "board-header",

  initialize: function () {},

  render: function () {
    this.$el.html(this.template({board: this.model}))
    return this;
  }
})
