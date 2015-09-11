TrelloClone.Views.CardForm = Backbone.View.extend({
  template: JST["cards/card_form"],

  events: {
    "submit form.card": "submit",
    "click div.screen": "show"
  },

  initialize: function (options) {
    this.board = options.board;
  },

  render: function () {
    this.$el.html(this.template({card: this.model}));
    return this;
  },

  submit: function (e) {
    e.preventDefault()
  },

  show: function (e) {
    e.preventDefault();
    Backbone.history.navigate("boards/" + this.board.id, { trigger: true })
  }


})
