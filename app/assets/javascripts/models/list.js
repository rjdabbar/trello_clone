TrelloClone.Models.List = Backbone.Model.extend({
  urlRoot: "api/boards/",

  cards: function () {
    if (this._cards === undefined) {
      this._cards = new TrelloClone.Collections.Cards([], {list: this})
    };

    return this._cards;
  },

  parse: function (payload) {
    if (payload.cards) {
      this.cards().set(payload.cards);
      delete payload.cards;
    };

    return payload;
  }
})
