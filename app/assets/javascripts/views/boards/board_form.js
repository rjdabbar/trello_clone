TrelloClone.Views.BoardForm = Backbone.View.extend({
  template: JST["boards/board_form"],

  events: {
    "click div.screen": "index",
    "submit form.board": "submit"
  },

  initialize: function () {},

  render: function () {
    this.$el.html(this.template({board: this.model}));
    return this;
  },

  index: function (e) {
    e.preventDefault();
    Backbone.history.navigate("", {trigger: true});
  },

  submit: function (e) {
    e.preventDefault()
    var formData = $(e.currentTarget).serializeJSON();
    var board = new TrelloClone.Models.Board();
    board.save(formData.board, {
      success: function (model, response, options) {
        Backbone.history.navigate("boards/" + model.id, { trigger: true });
      }
    });
  }
})
