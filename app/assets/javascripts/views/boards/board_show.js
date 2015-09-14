TrelloClone.Views.BoardShow = Backbone.CompositeView.extend({
  template: JST["boards/board_show"],

  events: {
    "click li.new-list": "newList",
    "click h1.board-title": "editTitle",
    "click button.close-window": "clearEdit",
  },

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
  },

  render: function () {
    this.$el.html(this.template({board: this.model}));
    this.addLists();
    this.addNewList();
    this.addHeader();
    this.addEditBoard();
    return this;
  },

  addLists: function () {
    this.collection.each(function (list) {
      var listView = new TrelloClone.Views.ListShow({
        model: list,
        collection: list.cards(),
        board: this.model
      });
      this.addSubview(".board-lists", listView);
    }.bind(this))
  },

  addNewList: function () {
    var newListView = new TrelloClone.Views.ListNew({model: this.model});
    this.addSubview(".board-lists", newListView);
  },

  addHeader: function () {
    var headerView = new TrelloClone.Views.BoardHeader({model: this.model});
    this.addSubview(".board-show", headerView, true);
  },

  addEditBoard: function () {
    var editBoardView = new TrelloClone.Views.BoardEdit({model: this.model});
    this._$editBoard = editBoardView.$el;
    this.addSubview(".board-show", editBoardView)
  },

  newList: function (e) {
    e.preventDefault();
    Backbone.history.navigate("boards/" + this.model.id + "/lists/new", { trigger: true });
  },

  editTitle: function (e) {
    e.preventDefault();
    this._$editBoard.toggle();
  },

  clearEdit: function (e) {
    e.preventDefault();
    this._$editBoard.toggle();
  }
 })
