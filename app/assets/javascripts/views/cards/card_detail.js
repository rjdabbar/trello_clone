TrelloClone.Views.CardDetail = Backbone.View.extend({
  template: JST["cards/card_detail"],

  events: {
    "click div.screen" : "show"
  },

  initialize: function () {},

  render: function () {
    this.$el.html(this.template({ card: this.model }));
    return this;
  },


})
