TrelloClone.Views.ListForm = Backbone.View.extend({
  template: JST["lists/list_form"],
  tagName: "li",
  className: "new-list-form list",

  events: {
    "submit form.list" : "submit"
  },

  initialize: function (options) {
    this.board = options.board;
  },

  render: function () {
    this.$el.html(this.template({list: this.model}));
    $("input").focus();
    return this;
  },

  submit: function (e) {
    e.preventDefault();
    var formData = $(e.currentTarget).serializeJSON();
    var list = this.model;
    list.save(formData.list, {
      success: function (model, response, options) {
        this.board.lists().add(list);
      }.bind(this)
    })
  }
})
