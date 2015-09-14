TrelloClone.Views.ListShow = Backbone.CompositeView.extend({
  template: JST["lists/list_show"],
  tagName: "li",
  className: "list",

  events: {
    "click li.new-card" : "newCard"
  },

  initialize: function (options) {
    this.board = options.board;
    this.listenTo(this.model, "sync", this.render);
  },

  render: function () {
    this.$el.html(this.template({list: this.model}));
    this.addCards();
    this.addNewCard();
    return this;
  },

  addCards: function () {
    this.collection.each(function (card){
      var cardView = new TrelloClone.Views.CardShow({
        model: card,
        collection: card.items()
      });
      this.addSubview(".list-cards", cardView);
    }.bind(this))
  },

  addNewCard: function () {
    var newCardView = new TrelloClone.Views.CardNew();
    this._newCardView = newCardView;
    this.addSubview(".list-cards", newCardView);
  },

  newCard: function (e) {
    e.preventDefault();
    this.removeSubview(".list-cards", this._newCardView);
    var card = new TrelloClone.Models.Card();
    var newCardForm = new TrelloClone.Views.CardForm({
      list: this.model,
      model: card
    });
    this.addSubview(".list-cards", newCardForm);
  }
})
