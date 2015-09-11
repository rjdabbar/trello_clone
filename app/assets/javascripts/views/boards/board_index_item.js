TrelloClone.Views.BoardIndexItem = Backbone.View.extend({
  template: JST["boards/board_index_item"],
  tagName: "li",
  className: "board-item board",

  attributes: function () {
    return {
      "data-id": this.model.id
    };
  },

  initialize: function () {},

  render: function () {
    this.$el.html(this.template({board: this.model}))
    return this;
  },
})
