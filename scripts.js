var answer, memory_val = 0, current_val = 0, operator, btn_val;

$(function(){

    answer = $("#txt_answer");
    $(".num_btn").on("click", function(e){
      if(answer.val().length < 12) {
        update_screen($(this).val());
      }
    });

    $(".clear_btn").on("click", function(e){
      clear_answer();
    });
});

function update_screen(val){
  if(val == ".") {
    if (answer.val().indexOf(".") < 0) {
      answer.val(answer.val() + val);
    }
  } else {
    answer.val(answer.val() + val);
  }
  btn_val = answer.val();
}

function store_answer_value(){
  clear_answer();
}

function clear_answer(){
  answer.val("");
  btn_val = "";
}

function total_values(op){
  var num_val;
  if(answer.val() != "") {
    num_val = parseFloat(answer.val());
  }

  switch(operator){
    case "add":
      memory_val = memory_val + num_val;
      break;

    case "sub":
      memory_val = memory_val - num_val;
      break;

    case "multi":
      memory_val = memory_val * num_val;
      break;

    case "divide":
      if(num_val > 0) {
        memory_val = memory_val / num_val;
      } else {
        memory_val = "ERR";
        return false;
      }
      break;

    default:
      memory_val = num_val;
      break;
  }
  current_val = 0;
  btn_val = "";
  operator = op;

  clear_answer();
}

function equal(){
  total_values();
  answer.val(memory_val);
  operator = "";
  memory_val = 0;
}
