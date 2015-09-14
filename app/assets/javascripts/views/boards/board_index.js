TrelloClone.Views.BoardIndex = Backbone.CompositeView.extend({
  template: JST["boards/board_index"],

  initialize: function () {
    this.listenTo(this.collection, "sync change:title remove add", this.render)
  },

  events: {
    "click li.board": "show",
    "click li.new-board-item": "newWindow",
    "click button.close-window": "closeNew",
    "submit form.board-new": "submitNew"
  },

  render: function () {
    this.$el.html(this.template());
    this.addBoards();
    this.addNewBoard();
    return this;
  },

  addBoards: function () {
    this.collection.each(function (board) {
      var itemView = new TrelloClone.Views.BoardIndexItem({ model: board })
      this.addSubview("ul.index-list", itemView);
    }.bind(this));
  },

  addNewBoard: function () {
    var newBoardView = new TrelloClone.Views.BoardNew();
    this._newBoardItem = newBoardView;
    this.addSubview("ul.index-list", newBoardView);
  },

  show: function (e) {
    e.preventDefault();
    var board = this.collection.getOrFetch($(e.currentTarget).data("id"));
    Backbone.history.navigate("boards/" + board.id, { trigger: true });
  },

  newWindow: function (e) {
    e.preventDefault();
    this.removeSubview("ul.index-list", this._newBoardItem)
    var newBoard = new TrelloClone.Models.Board();
    var newBoardFormView = new TrelloClone.Views.BoardForm({model: newBoard});
    this._newBoardFormView = newBoardFormView;
    this.addSubview("ul.index-list", newBoardFormView);
  },

  closeNew: function (e) {
    e.preventDefault();
    this.removeSubview("ul.index-list", this._newBoardFormView);
    this.addNewBoard();
  },

  submitNew: function (e) {
    e.preventDefault();
    var data = $(e.currentTarget).serializeJSON();
    var board = new TrelloClone.Models.Board();
    board.save(data.board, {
      success: function (model, response, options) {
        this.collection.add(board);
        Backbone.history.navigate("boards/" + board.id, {trigger: true});
      }.bind(this)
    })
  }



})
