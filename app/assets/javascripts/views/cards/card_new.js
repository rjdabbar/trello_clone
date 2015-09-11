TrelloClone.Views.CardNew = Backbone.View.extend({
  template: JST["cards/card_new"],
  tagName: 'li',
  className: "card new-card",
  
  initialize: function () {},

  render: function () {
    this.$el.html(this.template());
    return this;
  }
})
