TrelloClone.Views.BoardEdit = Backbone.View.extend({
  template: JST["boards/board_edit"],
  className: "board-edit",

  events: {
    "submit form.board-edit": "renameBoard"
  },

  render: function () {
    this.$el.html(this.template({board: this.model}));
    return this;
  },

  renameBoard: function (e) {
    e.preventDefault();
    var data = $(e.currentTarget).serializeJSON();
    var board = this.model;
    board.save(data.board, {
      success: function (model, response, options) {
        Backbone.history.navigate("boards/" + model.id, { trigger: true });
      }
    })
  }
})
