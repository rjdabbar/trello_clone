TrelloClone.Collections.Lists = Backbone.Collection.extend({
  url: "/api/boards",
  model: TrelloClone.Models.List
})
