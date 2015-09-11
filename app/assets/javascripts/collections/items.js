TrelloClone.Collections.Items = Backbone.Collection.extend({
  url: "api/boards",
  model: TrelloClone.Models.Item
})
