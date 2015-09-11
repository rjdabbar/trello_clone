TrelloClone.Views.ListNew = Backbone.View.extend({
  template: JST["lists/list_new"],
  tagName: "li",
  className: "list new-list",

  initialize: function () {},

  render: function () {
    this.$el.html(this.template());
    return this;
  }
})
