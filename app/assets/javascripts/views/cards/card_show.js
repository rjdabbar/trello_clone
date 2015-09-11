TrelloClone.Views.CardShow = Backbone.View.extend({
  template: JST["cards/card_show"],
  tagName: "li",
  className: "card",

  initialize: function () {},

  render: function () {
    this.$el.html(this.template({card: this.model}))
    return this;
  },
})
