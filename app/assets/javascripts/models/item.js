TrelloClone.Models.Item = Backbone.Model.extend({
  urlRoot: "api/boards",

  toJSON: function () {
    return { item: _.clone(this.attributes) };
  }
})
