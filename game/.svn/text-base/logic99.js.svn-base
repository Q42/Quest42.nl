window.logic99 = function()
{
  while(1) {
    switch (jumptoLine)
  {
    case 0:
if (!(cmd_controller(c32))) {
  jumpTo(500);
  break;
}
  cmd_print("You gottum!");
  cmd_assignn(v255, 0);
case 1:
  get_v(v255);
  if (!(cmd_lessn(v255,1))) {
  jumpTo(501);
  break;
}
    cmd_increment(v255);
    jumpTo(1);
break;
  case 501:
case 500:
if (cmd_controller(c31)) {
  cmd_toggle(f35);
  if (!cmd_isset(f35)) {
    cmd_clear_lines(24, 24, 0);
  }
}
if (cmd_controller(c29)) {
  cmd_assignn(v255, 0);
  obj_status_v(v255);
}
if ((cmd_said("game ver") || cmd_controller(c8))) {
  cmd_print(" Template Game \n  version 0_1");
  version();
}
if (cmd_said("debug", "help")) {
  cmd_call(93);
if (AGI.break_all_logics) return;
}
if (cmd_said("trace", "aan")) {
  cmd_set(flag_trace_enabled);
}
if ((cmd_said("show", "mem") || cmd_controller(c11))) {
  show_mem();
}
if (cmd_said("tp")) {
  cmd_get_num("new room: ", v255);
  cmd_new_room_v(v255);
}
if (cmd_said("pos")) {
  cmd_get_num("x: ", v254);
  cmd_get_num("y: ", v255);
  cmd_erase(Ego);
  cmd_reposition_to_v(Ego, v254, v255);
  cmd_draw(Ego);
}
if (cmd_said("show", "var")) {
  cmd_get_num("var number: ", v255);
  cmd_rindirect(v254, v255);
  cmd_print("var %v255: %v254");
}
if (cmd_said("set", "var")) {
  cmd_get_num("var number: ", v254);
  cmd_get_num("var value: ", v255);
  cmd_lindirectv(v254, v255);
}
if (cmd_said("show", "flag")) {
  cmd_get_num("flag number: ", v255);
  if (cmd_issetv(v255)) {
    cmd_print("flag %v255 is set");
    jumpTo(2);
break;
  }
  cmd_print("flag %v255 is not set");
}
case 2:
if (cmd_said("set", "flag")) {
  cmd_get_num("flag number: ", v255);
  cmd_set_v(v255);
}
if (cmd_said("reset", "flag")) {
  cmd_get_num("flag number: ", v255);
  cmd_reset_v(v255);
}
if ((cmd_said("object") || cmd_controller(c36))) {
  cmd_get_num("object #: ", v255);
  obj_status_v(v255);
}
if ((cmd_said("show", "pri") || cmd_controller(c13))) {
  show_pri_screen();
}
if (cmd_said("acquire", "object")) {
  cmd_get_num("object number: ", v255);
  if (cmd_greatern(v255,1)) {
    cmd_print("Invalid object number!");
    jumpTo(3);
break;
  }
  get_v(v255);
}
case 3:
if (!(cmd_said("gimme", "gimme"))) {
  jumpTo(502);
  break;
}
  cmd_print("You gottum!");
  cmd_assignn(v255, 0);
case 4:
  get_v(v255);
  if (!(cmd_lessn(v255,1))) {
  jumpTo(503);
  break;
}
    cmd_increment(v255);
    jumpTo(4);
break;
  case 503:
case 502:
if (cmd_said("object", "room")) {
  cmd_get_num("object number: ", v255);
  if (cmd_greatern(v255,1)) {
    cmd_print("Invalid object number!");
    jumpTo(5);
break;
  }
  cmd_get_room_v(v255, v254);
  if (cmd_equaln(v254,255)) {
    cmd_print("Object %v255 is in your inventory.");
    jumpTo(5);
break;
  }
  cmd_print("Object %v255 is in room %v254.");
}
case 5:
if (cmd_said("set", "pri")) {
  cmd_get_num("New priority: ", v255);
  cmd_set_priority_v(Ego, v255);
}
if (cmd_said("release", "pri")) {
  cmd_release_priority(Ego);
}
if (cmd_said("coordinates")) {
  cmd_toggle(f35);
  if (!cmd_isset(f35)) {
    cmd_clear_lines(24, 24, 0);
  }
}
if (cmd_isset(f35)) {
  cmd_get_posn(Ego, v253, v254);
  cmd_get_priority(Ego, v255);
  cmd_set_text_attribute(6, 0);
  cmd_display(24, 15, "Rm %var_room_no|3 Pri %v255|2 x:%v253|3 y:%v254|3");
  cmd_set_text_attribute(15, 0);
}
if (!cmd_isset(flag_input_parsed) && cmd_isset(flag_input_received) && cmd_greatern(var_unknown_word_no,0)) {
  cmd_set(flag_input_parsed);
  if (cmd_equaln(var_unknown_word_no,1)) {
    log("Unkown word: %w1");
  }
  if (cmd_equaln(var_unknown_word_no,2)) {
    log("Unkown word: %w2");
  }
  if (cmd_equaln(var_unknown_word_no,3)) {
    log("Unkown word: %w3");
  }
  if (cmd_equaln(var_unknown_word_no,4)) {
    log("Unkown word: %w4");
  }
  if (cmd_equaln(var_unknown_word_no,5)) {
    log("Unkown word: %w5");
  }
  if (cmd_equaln(var_unknown_word_no,6)) {
    log("Unkown word: %w6");
  }
  if (cmd_equaln(var_unknown_word_no,7)) {
    log("Unkown word: %w7");
  }
  if (cmd_equaln(var_unknown_word_no,8)) {
    log("Unkown word: %w8");
  }
  cmd_print("Logged an unknown word.");
}
if (cmd_said("log")) {
  cmd_get_string(s1, "Error: ", 22, 0, 25);
  log("Error: %s1");
  cmd_clear_lines(22, 24, 0);
  cmd_accept_input();
}
cmd_assignn(v255, 0);
return;

}}}
MESSAGES[99]=[
"",
"You gottum!",
" Template Game \n  version 0_1",
"new room: ",
"x: ",
"y: ",
"var number: ",
"var %v255: %v254",
"var value: ",
"flag number: ",
"flag %v255 is set",
"flag %v255 is not set",
"object #: ",
"object number: ",
"Invalid object number!",
"Object %v255 is in your inventory.",
"Object %v255 is in room %v254.",
"New priority: ",
"Rm %v0|3 Pri %v255|2 x:%v253|3 y:%v254|3",
"Unkown word: %w1",
"Unkown word: %w2",
"Unkown word: %w3",
"Unkown word: %w4",
"Unkown word: %w5",
"Unkown word: %w6",
"Unkown word: %w7",
"Unkown word: %w8",
"Logged an unknown word.",
"Error: ",
"Error: %s1"];