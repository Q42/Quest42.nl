window.logic0 = function()
{
  while(1) {
    switch (jumptoLine)
  {
    case 0:
if (cmd_greatern(var_error_code,0)) {
  cmd_call(98);
if (AGI.break_all_logics) return;
}
if (cmd_said("morph")) {
  cmd_increment(var_ego_view_no);
  if (cmd_equaln(var_ego_view_no,101)) {
    cmd_assignn(var_ego_view_no, 102);
  }
  if (cmd_equaln(var_ego_view_no,105)) {
    cmd_assignn(var_ego_view_no, 107);
  }
  if (cmd_greatern(var_ego_view_no,110)) {
    cmd_assignn(var_ego_view_no, 100);
  }
  cmd_load_view_v(var_ego_view_no);
  cmd_set_view_v(Ego, var_ego_view_no);
}
if (!(cmd_equaln(var_room_no,0))) {
  jumpTo(500);
  break;
}
  cmd_call(91);
if (AGI.break_all_logics) return;
  cmd_set(f32);
  if (!(cmd_isset(flag_game_restarted))) {
  jumpTo(501);
  break;
}
    cmd_disable_item(c20);
    cmd_set(flag_menu_enabled);
    cmd_reset(f33);
    cmd_new_room(1);
if (AGI.break_all_logics) return;
    jumpTo(1);
break;
  case 501:
  cmd_set_menu("AGI");
  cmd_set_menu_item("About      ", c21);
  cmd_set_menu_item("Help   <F1>", c2);
  if (!(cmd_isset(f32))) {
  jumpTo(502);
  break;
}
    cmd_set_menu_item("Debug Help ", c33);
  case 502:
  cmd_set_menu("File");
  cmd_set_menu_item("Save     <F5>", c3);
  cmd_set_menu_item("Restore  <F7>", c5);
  cmd_set_menu_item("-------------", c20);
  cmd_set_menu_item("Restart  <F9>", c7);
  cmd_set_menu_item("Quit  <Alt-Z>", c1);
  cmd_set_menu("Action");
  cmd_set_menu_item("See Object  <F4>", c22);
  cmd_set_menu_item("Inventory  <Tab>", c10);
  cmd_set_menu("Special");
  cmd_set_menu_item("Sound On/Off      <F2>", c16);
  if (!(cmd_equaln(var_computer_type,0) && cmd_lessn(var_video_mode,2))) {
  jumpTo(503);
  break;
}
    cmd_set_menu_item("Color/BW      <Ctrl R>", c6);
  case 503:
  cmd_set_menu_item("Clock On/Off      <F6>", c12);
  cmd_set_menu_item("Joystick      <Ctrl J>", c15);
  cmd_set_menu_item("Pause            <Esc>", c18);
  cmd_set_menu("Speed");
  cmd_set_menu_item("Normal ", c24);
  cmd_set_menu_item("Slow   ", c25);
  cmd_set_menu_item("Fast   ", c23);
  cmd_set_menu_item("Fastest", c28);
  if (!(cmd_isset(f32))) {
  jumpTo(504);
  break;
}
    cmd_set_menu("Debug");
    cmd_set_menu_item("Ego Info   <Alt-E>", c29);
    cmd_set_menu_item("Pri Screen <Alt-P>", c13);
    cmd_set_menu_item("Memory     <Alt-M>", c11);
    cmd_set_menu_item("Obj Info   <Alt-I>", c36);
    cmd_set_menu_item("Coords     <Alt-X>", c31);
    cmd_set_menu_item("Get All           ", c32);
  case 504:
  cmd_submit_menu();
  cmd_disable_item(c20);
  cmd_set(f33);
  cmd_new_room(1);
if (AGI.break_all_logics) return;
case 1:
  jumpTo(2);
break;
case 500:
cmd_call(97);
if (AGI.break_all_logics) return;
case 2:
if (cmd_isset(flag_new_room)) {
  cmd_load_logics(90);
if (AGI.break_all_logics) return;
  cmd_clear_lines(24, 24, 0);
  cmd_animate_obj(Ego);
  cmd_load_view_v(var_ego_view_no);
  cmd_set_view_v(Ego, var_ego_view_no);
  cmd_observe_objs(Ego);
  cmd_assignn(v37, 255);
}
if (cmd_greatern(v35,0)) {
  if (!cmd_equaln(v35,255)) {
    cmd_disable_item(c33);
    cmd_disable_item(c3);
    cmd_disable_item(c18);
    cmd_disable_item(c22);
    cmd_disable_item(c12);
    cmd_disable_item(c15);
    cmd_disable_item(c24);
    cmd_disable_item(c28);
    cmd_disable_item(c23);
    cmd_disable_item(c25);
    cmd_disable_item(c29);
    cmd_disable_item(c13);
    cmd_disable_item(c11);
    cmd_disable_item(c36);
    cmd_disable_item(c31);
    cmd_disable_item(c32);
    cmd_load_logics(94);
if (AGI.break_all_logics) return;
  }
  cmd_call(94);
if (AGI.break_all_logics) return;
  jumpTo(6);
break;
}
if (!cmd_isset(f33)) {
  if (cmd_controller(c19)) {
    cmd_menu_input();
  }
}
if (cmd_controller(c21)) {
  cmd_print("(About message)");
}
if ((cmd_controller(c28) || cmd_said("fastest") || cmd_said("fastest", "speed"))) {
  cmd_assignn(var_cycle_delay, 0);
}
if ((cmd_controller(c23) || cmd_said("fast") || cmd_said("fast", "speed"))) {
  cmd_assignn(var_cycle_delay, 1);
}
if ((cmd_controller(c24) || cmd_said("normal") || cmd_said("normal", "speed"))) {
  cmd_assignn(var_cycle_delay, 2);
}
if ((cmd_controller(c25) || cmd_said("slow") || cmd_said("slow", "speed"))) {
  cmd_assignn(var_cycle_delay, 4);
}
if (cmd_controller(c26)) {
  cmd_decrement(var_sound_volume);
}
if (cmd_controller(c27) && cmd_lessn(var_sound_volume,15)) {
  cmd_increment(var_sound_volume);
}
if (cmd_controller(c16)) {
  cmd_toggle(flag_sound_on);
}
if (!cmd_isset(f33)) {
  if (cmd_controller(c6)) {
    toggle_monitor();
  }
  if (cmd_controller(c33)) {
    cmd_call(93);
if (AGI.break_all_logics) return;
  }
  if (!cmd_isset(f32)) {
    if (cmd_controller(c14)) {
      cmd_set(f32);
      cmd_print(" Template Game \n  version 0_1");
      version();
      cmd_load_logics(99);
if (AGI.break_all_logics) return;
    }
  }
  if ((cmd_controller(c3) || cmd_said("save", "game") || cmd_said("save"))) {
    cmd_stop_sound();
    cmd_save_game();
  }
  if ((cmd_controller(c5) || cmd_said("restore", "game") || cmd_said("restore"))) {
    cmd_stop_sound();
    cmd_restore_game();
  }
  if ((cmd_controller(c7) || cmd_said("restart", "game") || cmd_said("restart"))) {
    cmd_restart_game();
  }
  if ((cmd_controller(c2) || cmd_said("help"))) {
    cmd_call(92);
if (AGI.break_all_logics) return;
  }
  if (cmd_controller(c9)) {
    cmd_echo_line();
  }
  if (cmd_controller(c17)) {
    cmd_cancel_line();
  }
  if (cmd_controller(c15)) {
    init_joy();
  }
  if ((cmd_controller(c18) || cmd_said("pause", "game") || cmd_said("pause"))) {
    pause();
  }
  if ((cmd_controller(c10) || cmd_said("inv"))) {
    cmd_status();
  }
  if ((cmd_controller(c22) || cmd_controller(c4) || cmd_said("kijk", "inv"))) {
    cmd_set(flag_inventory_select_enabled);
    cmd_status();
    if (cmd_greatern(var_selected_inventory_item,0) && !cmd_equaln(var_selected_inventory_item,255)) {
      cmd_print("Selecting item?");
    }
    cmd_reset(flag_inventory_select_enabled);
  }
  if ((cmd_controller(c1) || cmd_said("quit", "game") || cmd_said("quit"))) {
    cmd_stop_sound();
    cmd_quit(0);
  }
}
cmd_get_posn(Ego, v30, v31);
if (cmd_equalv(var_ego_dir,v34) && cmd_equalv(v30,v32) && cmd_equalv(v31,v33)) {
  cmd_stop_cycling(Ego);
  jumpTo(3);
break;
}
if (!cmd_isset(f30)) {
  cmd_start_cycling(Ego);
}
case 3:
cmd_assignv(v32, v30);
cmd_assignv(v33, v31);
cmd_assignv(v34, var_ego_dir);
if (cmd_isset(f31)) {
  cmd_start_cycling(Ego);
  jumpTo(4);
break;
}
if ((cmd_equaln(var_ego_dir,0) || cmd_isset(f30))) {
  cmd_stop_cycling(Ego);
}
case 4:
if ((cmd_said("clock") || cmd_controller(c12))) {
  cmd_toggle(f34);
  if (!cmd_isset(f34)) {
    cmd_status_line_on();
    jumpTo(5);
break;
  }
  cmd_assignn(v37, 255);
}
case 5:
if (cmd_isset(f34) && !cmd_isset(f33)) {
  if (!cmd_equalv(v37,var_clock_seconds)) {
    cmd_set_text_attribute(0, 15);
    cmd_display(0, 18, " %var_clock_hours:%var_clock_minutes|2:%var_clock_seconds|2 ");
    cmd_set_text_attribute(15, 0);
    cmd_assignv(v37, var_clock_seconds);
  }
}
if (cmd_isset(flag_game_restored)) {
  cmd_clear_lines(23, 24, 0);
  cmd_reset(f32);
  cmd_disable_item(c20);
}
cmd_call_v(var_room_no);
if (AGI.break_all_logics) return;
if (cmd_isset(f32)) {
  cmd_call(99);
if (AGI.break_all_logics) return;
}
cmd_call(90);
if (AGI.break_all_logics) return;
if (cmd_isset(flag_input_received) && cmd_greatern(var_unknown_word_no,0)) {
  if (cmd_equaln(var_unknown_word_no,1)) {
    cmd_print("I don't understand \"%w1\"");
  }
  if (cmd_equaln(var_unknown_word_no,2)) {
    cmd_print("\"%w2\" is not in my vocabulary.");
  }
  if (cmd_equaln(var_unknown_word_no,3)) {
    cmd_print("What is \"%w3\"");
  }
  if (cmd_equaln(var_unknown_word_no,4)) {
    cmd_print("I don't understand \"%w4\"");
  }
  if (cmd_equaln(var_unknown_word_no,5)) {
    cmd_print("\"%w5\" is not in my vocabulary.");
  }
  if (cmd_equaln(var_unknown_word_no,6)) {
    cmd_print("What is \"%w6\"");
  }
}
if (cmd_isset(flag_input_received) && !cmd_isset(flag_input_parsed)) {
  cmd_print("I don't understand your request.");
}
case 6:
return;

}}}
MESSAGES[0]=[
"",
"AGI",
"About      ",
"Help   <F1>",
"Debug Help ",
"File",
"Save     <F5>",
"Restore  <F7>",
"-------------",
"Restart  <F9>",
"Quit  <Alt-Z>",
"Action",
"See Object  <F4>",
"Inventory  <Tab>",
"Special",
"Sound On/Off      <F2>",
"Color/BW      <Ctrl R>",
"Clock On/Off      <F6>",
"Joystick      <Ctrl J>",
"Pause            <Esc>",
"Speed",
"Normal ",
"Slow   ",
"Fast   ",
"Fastest",
"Debug",
"Ego Info   <Alt-E>",
"Pri Screen <Alt-P>",
"Memory     <Alt-M>",
"Obj Info   <Alt-I>",
"Coords     <Alt-X>",
"Get All           ",
"(About message)",
" Template Game \n  version 0_1",
"Selecting item?",
" %v13:%v12|2:%v11|2 ",
"I don't understand \"%w1\"",
"\"%w2\" is not in my vocabulary.",
"What is \"%w3\"",
"I don't understand \"%w4\"",
"\"%w5\" is not in my vocabulary.",
"What is \"%w6\"",
"I don't understand your request."];