'use strict'

$('#addTodo').click(() => {
  const inputTodo = $('input').val();
  $('#todoList').append("<li><input type='checkbox'>" + inputTodo + "</li>");

  $("input").val("");
})