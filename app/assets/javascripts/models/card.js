TrelloClone.Models.Card = Backbone.Model.extend({
  urlRoot: "api/cards",

  items: function () {
    if (this._items === undefined) {
      this._items = new TrelloClone.Collections.Items({card: this})
    }
    return this._items
  },

  parse: function (payload) {
    if (payload.items) {
      this.items().set(payload.items, { parse: true });
      delete payload.items
    };
    return payload;
  },

  toJSON: function () {
    return { card: _.clone(this.attributes) };
  }
})
