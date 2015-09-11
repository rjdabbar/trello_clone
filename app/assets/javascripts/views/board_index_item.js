TrelloClone.Views.BoardIndexItem = Backbone.View.extend({
  template: JST["board_index_item"],
  tagName: "li",
  className: "board-item",

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
