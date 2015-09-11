TrelloClone.Views.ListForm = Backbone.View.extend({
  template: JST["lists/list_form"],

  events: {
    "click div.screen" : "show",
    "submit form.list" : "submit"
  },

  initialize: function () {},

  render: function () {
    this.$el.html(this.template({list: this.model}));
    return this;
  },

  show: function (e) {
    e.preventDefault();
    Backbone.history.navigate("boards/" + this.model.get("board_id"), { trigger: true })
  },

  submit: function (e) {
    e.preventDefault();
    var formData = $(e.currentTarget).serializeJSON();
    var list = this.model;
    list.save(formData.list, {
      success: function (model, response, options) {
        Backbone.history.navigate("boards/" + model.get("board_id"), { trigger: true })
      }
    })
  }
})
