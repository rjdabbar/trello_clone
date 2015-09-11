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

  show: function (e) {
    e.preventDefault();
    // NEED TO GET BOARD ID ONTO THE CARD
    // Backbone.history.navigate("boards/" + this.model.get("list_id"), { trigger: true })
  }
})
