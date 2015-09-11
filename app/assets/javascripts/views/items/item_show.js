TrelloClone.Views.ItemShow = Backbone.View.extend({
  template: JST["items/item_show"],

  initialize: function () {},

  render: function () {
    this.$el.html(this.template({item: this.model}))
    return this;
  }
})
