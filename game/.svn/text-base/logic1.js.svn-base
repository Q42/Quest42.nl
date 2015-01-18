window.logic1 = function()
{
  while(1) {
    switch (jumptoLine)
  {
    case 0:
if (cmd_isset(flag_new_room)) {
  cmd_load_pic(var_room_no);
  cmd_draw_pic(var_room_no);
  cmd_discard_pic(var_room_no);
  cmd_animate_obj(o8);
  cmd_load_view(151);
  cmd_set_view(o8, 151);
  cmd_position(o8, 144, 150);
  cmd_draw(o8);
  cmd_set_horizon(80);
  if (cmd_equaln(var_prev_room_no,0)) {
    cmd_status_line_on();
    cmd_accept_input();
    cmd_player_control();
    cmd_assignn(var_ego_dir, 0);
  }
  if (cmd_equaln(var_prev_room_no,3)) {
    cmd_position(Ego, 55, 90);
    cmd_assignn(var_ego_dir, 5);
  }
  if (cmd_equaln(var_prev_room_no,6)) {
    cmd_position(Ego, 55, 166);
    cmd_assignn(var_ego_dir, 1);
  }
  cmd_animate_obj(o9);
  cmd_load_view(44);
  cmd_set_view(o9, 44);
  cmd_ignore_horizon(o9);
  cmd_position(o9, 35, 150);
  cmd_draw(o9);
  cmd_animate_obj(o4);
  cmd_load_view(41);
  cmd_set_view(o4, 41);
  cmd_ignore_horizon(o4);
  cmd_position(o4, 79, 59);
  cmd_draw(o4);
  cmd_draw(Ego);
  cmd_show_pic();
}
if (cmd_said("fridge")) {
  cmd_position(Ego, 135, 120);
  cmd_assignn(var_ego_dir, 7);
  cmd_assignn(var_ego_dir, 0);
  cmd_animate_obj(o6);
  cmd_load_view(103);
  cmd_set_view(o6, 103);
  cmd_position(o6, 53, 99);
  cmd_draw(o6);
  cmd_assignn(v38, 0);
  cmd_reset(f24);
  cmd_follow_ego(o6, 10, f24);
}
if (cmd_isset(f24) && cmd_equaln(v38,0)) {
  cmd_reset(f24);
  cmd_increment(v38);
  cmd_reset(flag_windows_remain);
  cmd_assignn(var_window_close_time, 4);
  cmd_print("Welcome to Q42!\nMake yourself at home.");
  cmd_move_obj(o6, 80, 160, 1, f24);
}
if (cmd_isset(f24) && cmd_equaln(v38,1)) {
  cmd_increment(v38);
  cmd_move_obj(o6, 80, 160, 1, f24);
}
if (cmd_isset(f24) && cmd_equaln(v38,2)) {
  cmd_erase(o6);
}
if (cmd_said("kijk")) {
  cmd_print("It's Q42! This is the entrance.");
  cmd_print("There's a football table here. For some reason.");
}
if (cmd_said("kijk", "football")) {
  cmd_print("There's a football table sitting right in the middle of the entrance. It looks well-used.");
}
if (cmd_equaln(var_ego_edge_code,1)) {
  cmd_new_room(3);
if (AGI.break_all_logics) return;
}
if (cmd_equaln(var_ego_edge_code,4)) {
  cmd_new_room(2);
if (AGI.break_all_logics) return;
}
if (cmd_equaln(var_ego_edge_code,3)) {
  cmd_new_room(6);
if (AGI.break_all_logics) return;
}
if (cmd_said("open", "cadeau")) {
  if (cmd_posn(Ego,134,145,154,155)) {
    cmd_print("You grab the present...");
    cmd_print("Unwrapping the paper...");
    cmd_print("You found a...");
    cmd_print("SHOW PRESENT");
    cmd_erase(o8);
    jumpTo(1);
break;
  }
  cmd_print("You're not close enough.");
}
case 1:
return;

}}}
MESSAGES[1]=[
"",
"Welcome to Q42!\nMake yourself at home.",
"It's Q42! This is the entrance.",
"There's a football table here. For some reason.",
"There's a football table sitting right in the middle of the entrance. It looks well-used.",
"You grab the present...",
"Unwrapping the paper...",
"You found a...",
"You're not close enough."];
CONTROLS[1]="?4?4?4?4?4?4?4/.{A/.^AE/.xAP/.gFZ/.UAr/.KA!/.4L^/{AK5^/^AU5^/rFg5^/gAx5^/UA^5^/KA{5^/4F.45^><.{A.K5^><.^A.U5^><.lL.g5^><.gA.x5^><.UA95.x5^4><.m.x5^><.l5.x5^><.l5.x5^><.l5.x5^><.l5.x5^><.l5.x5^><.l5.x5^><.l5.x5^><.l5.x5^><.l5.x5^><.l5.x5^><.l5.x5^><.l5.x5^><.l5.x5^><.l5.x5^><.l5.x5^<.E=.P.5.K5.x5^<.E5^5.P5,5.K5.x5^<.E5^5.P5,5.K5.x5^<.E5^5.P5,5.K5.x5^<.E5^5.P5,5.K5.x5^<.E5^5.P5,5.K5.x5^<.E5^5.P5,5.K5.x5^<.E5^5.P5,5.K5.x5^<.E5^5.P5,5.K5.x5^<.E5^5.P5,5.K5.x5^<.E5^5.P5,5.K5.x5^<.E5^5.P5,5.K5.x5^<.E5^5.P5,5.K5.x5^<.E5^5.P5,5.K5.x5^<.E5^5.P5,5.K5.x5^<.E5^5.P5,5.K5.x5^<.E5^5.P5,5.K5.x5^<.E5^5.P5,5.K5.x5^<.E5^5.P5,5.K5.x5^<.E5^5.P5,5.K5.x5^<.E5^5.P5,5.K5.x5^<.E5^5.P5,5.K5.x5^<.E5^5.P5,5.K5.x5^<.E5^5.P5,5.K5U5.P5^<.E5^5.P5,5.K5UA.K5^<.E5^5.P5,5.K5U595.E5^<.E5^5.P5,5.K5U5E5.95^<.E5^5.P5,5.K5U5K5.45^<.E5^5.P5,5.K5U5P5,5^<.E=.P5,5.K5U5U5{5^<.E5^5.P5,5.K5U5Z5+5^<.E5^5.P5,5.K5U5g5^5^<.E5^5.P5,5.K5U5l5!5^<.E5^5.P5,5.K5U5r5x5^<.E5^5.P5,5.K5U5x5r5^<.E5^5.P5,5.K5U5!5l5^<.E5^5.P5,5.K5U5!Ag5^<.E5^5.P5,5.K5U5!595Z5^<.E5^5.P5,5.K5U5!5E5U5^<.E5^5.P5,5.K5U5!5E5U5^<.E5^5.P5,5.K5U5!5E5U5^4<.F^<.sU5!5E5U5^><.P5K5U5!5E5U5^><.P5K5U5!5E5U5^><.U5E5U5!5E5U5^><.U5E5U5!5E5U5^><.Z595U5!5E5U5^><.Z595U5!5E5U5^><.gAU5!5E5U5^><.gAU5!5E5U5^><.l5U5!5E5U5^><.l5U5!5E5U5^><.r5P5!5E5U5^><.r5P5!5E5U5^><.x5K5!5E5U5^><.x5K5!5E5U5^><.!5E5!5E5U5^><.!5E5!5E5U5^><.^595!5E5U5^><.^595!5E5U5^><.+A!5E5U5^><.+A!5E5U5^><.{5!5E5U5^><.{*E5U5^/x5E5U5^/!595U5^/!595U5^/^AU5^/^AU5^/+5U5^/+5U5^/+5U5^/+5U5^/+5U5^/+5U5^/+5U5^/+5U5^/+5U5^/+5U5^/+5U5^/+5U5^/+5U5^/+5U5^/+5U5^/+5U5^/+5U5^/+5U5^/+5U5^/+5U5^/+5U5^/+5U5^/+5U5^/+5U5^/+5U5^/{5P5^/{5P5^/,5K5^4m/Z5K5^gA/g5E5^g5/l5E5^Z5/x595^Z5.^<Q>r595^U5.+5<K5>xA^P5.{5<K5>x=K5.,5<K5>!5^4F<45<K5>!5^<K5<K5>^5!<K5<K5>^5!<K5<K5>.l<K<Q>+5x/.Z5r/.Z5r/.g5l/.g5l/.l5g/.l5g/.r5Z/.r5Z/.x5U/.x5U/.!5P/.!5P/.^5K/.^5K/.+5E/.+5E";