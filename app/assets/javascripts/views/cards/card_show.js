TrelloClone.Views.CardShow = Backbone.CompositeView.extend({
  template: JST["cards/card_show"],
  tagName: "li",
  className: "card",

  initialize: function () {},

  render: function () {
    this.$el.html(this.template({card: this.model}))
    this.collection.each(function(item) {
      var itemView = new TrelloClone.Views.ItemShow({model: item})
      this.addSubview(".card-items", itemView);
    }.bind(this))
    return this;
  },
})
