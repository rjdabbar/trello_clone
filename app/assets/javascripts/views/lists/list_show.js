TrelloClone.Views.ListShow = Backbone.CompositeView.extend({
  template: JST["lists/list_show"],
  tagName: "li",
  className: "list",

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
  },

  render: function () {
    this.$el.html(this.template({list: this.model}));
    console.log(this.collection);
    this.collection.each(function (card){
      var cardView = new TrelloClone.Views.CardShow({model: card});
      this.addSubview(".list-cards", cardView);
    }.bind(this))
    return this;
  }
})
