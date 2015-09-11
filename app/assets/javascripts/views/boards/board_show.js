TrelloClone.Views.BoardShow = Backbone.CompositeView.extend({
  template: JST["boards/board_show"],

  events: {
    "click li.new-list": "new"
  },

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
    var newListView = new TrelloClone.Views.ListNew({model: this.model});
    this.addSubview(".board-lists", newListView);
    return this;
  },

  new: function (e) {
    e.preventDefault();
    Backbone.history.navigate("boards/" + this.model.id + "/lists/new", { trigger: true });
  }
 })
