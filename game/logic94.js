window.logic94 = function()
{
  while(1) {
    switch (jumptoLine)
  {
    case 0:
if (!cmd_equaln(v35,255)) {
  cmd_accept_input();
  cmd_cancel_line();
  cmd_program_control();
  cmd_clear_lines(23, 24, 0);
  cmd_assignn(v36, 25);
  if (cmd_equaln(v35,1)) {
    cmd_print("You are now dead.");
  }
  cmd_assignn(v35, 255);
}
cmd_decrement(v36);
if (cmd_equaln(v36,1)) {
  cmd_print("Thank you for playing this game. Better luck next time!");
}
if (cmd_controller(c19)) {
  cmd_menu_input();
}
if ((cmd_controller(c2) || cmd_said("help"))) {
  cmd_call(92);
if (AGI.break_all_logics) return;
}
if ((cmd_controller(c5) || cmd_said("restore", "game") || cmd_said("restore"))) {
  cmd_restore_game();
}
if ((cmd_controller(c7) || cmd_said("restart", "game") || cmd_said("restart"))) {
  cmd_restart_game();
}
if ((cmd_controller(c10) || cmd_said("inv"))) {
  cmd_status();
}
if ((cmd_controller(c1) || cmd_said("quit"))) {
  cmd_stop_sound();
  cmd_quit(0);
}
if (cmd_controller(c6)) {
  toggle_monitor();
}
if (cmd_controller(c21)) {
  cmd_print("(About message)");
}
if (cmd_controller(c16)) {
  cmd_toggle(flag_sound_on);
}
if (cmd_isset(flag_input_received) && !cmd_isset(flag_input_parsed)) {
  cmd_print("You are dead! You can only restore, restart, quit the game or view your inventory.");
}
return;

}}}
MESSAGES[94]=[
"",
"You are now dead.",
"Thank you for playing this game. Better luck next time!",
"(About message)",
"You are dead! You can only restore, restart, quit the game or view your inventory."];