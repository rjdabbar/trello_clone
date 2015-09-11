TrelloClone.Views.BoardShow = Backbone.CompositeView.extend({
  template: JST["boards/board_show"],

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
  },

  render: function () {
    this.$el.html(this.template({board: this.model}));
    this.collection.each(function (list) {
      var listView = new TrelloClone.Views.ListShow({
        model: list,
        collection: list.cards()
      });
      this.addSubview(".board-lists", listView);
    }.bind(this))
    return this;
  }
 })
