TrelloClone.Views.BoardShow = Backbone.CompositeView.extend({
  template: JST["boards/board_show"],

  initialize: function () {
    this.lists = this.model.lists().fetch();
    this.listenTo(this.lists, "sync", this.render());
  },

  render: function () {
    this.$el.html(this.template());
    this.lists.each(function (list) {
      var listView = new TrelloClone.Views.ShowList({model: list});
      this.addSubview(listView);
    }.bind(this))
    return this;
  }
 })
