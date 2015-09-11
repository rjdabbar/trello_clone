TrelloClone.Views.ListShow = Backbone.CompositeView.extend({
  template: JST["lists/list_show"],
  tagName: "li",
  className: "list",

  events: {
    "click li.new-card" : "new"
  },

  initialize: function (options) {
    this.board = options.board;
    this.listenTo(this.model, "sync", this.render);
  },

  render: function () {
    this.$el.html(this.template({list: this.model}));
    this.collection.each(function (card){
      var cardView = new TrelloClone.Views.CardShow({
        model: card,
        collection: card.items()
      });
      this.addSubview(".list-cards", cardView);
    }.bind(this))
    var newCardView = new TrelloClone.Views.CardNew();
    this.addSubview(".list-cards", newCardView);
    return this;
  },

  new: function (e) {
    e.preventDefault();
    Backbone.history.navigate("boards/" + this.board.id + "/lists/" + this.model.id + "/cards/new", {trigger: true})
  }
})
