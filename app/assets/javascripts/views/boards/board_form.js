TrelloClone.Views.BoardForm = Backbone.View.extend({
  template: JST["boards/board_form"],

  events: {
    "click div.screen": "index"
  },

  initialize: function () {},

  render: function () {
    this.$el.html(this.template({board: this.model}));
    return this;
  },

  index: function (e) {
    e.preventDefault();
    Backbone.history.navigate("", {trigger: true});
  }
})
