TrelloClone.Models.Board = Backbone.Model.extend({
  urlRoot: "api/boards",

  lists: function () {
    if (this._lists === undefined) {
      this._lists = new TrelloClone.Collections.Lists([], {board: this})
    };
    return this._lists;
  },

  parse: function (payload) {
    if (payload.lists) {
      this.lists().set(payload.lists);
      delete payload.lists;
    };
    return payload;
  }
})
