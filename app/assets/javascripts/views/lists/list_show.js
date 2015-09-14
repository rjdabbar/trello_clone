TrelloClone.Views.ListShow = Backbone.CompositeView.extend({
  template: JST["lists/list_show"],
  tagName: "li",
  className: "list",

  events: {
    "click li.new-card" : "newCard",
    "submit form.card-new": "submitCard",
    "click button.close-new-card": "closeNew"
  },

  initialize: function (options) {
    this.board = options.board;
    this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.model.cards(), "add", this.render)
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
    var newCardFormView = new TrelloClone.Views.CardForm({});
    this._newCardFormView = newCardFormView;
    this.addSubview(".list-cards", newCardFormView);
  },

  submitCard: function (e) {
    e.preventDefault();
    var data = $(e.currentTarget).serializeJSON();
    var card = new TrelloClone.Models.Card({list_id: this.model.id});
    card.save(data.card, {
      success: function (model, response, options) {
        this.model.cards().add(card);
      }.bind(this)
    })
  },

  closeNew: function (e) {
    e.preventDefault();
    this.removeSubview(".list-cards", this._newCardFormView);
    this.addNewCard();
  }
})
