window.logic5 = function()
{
  while(1) {
    switch (jumptoLine)
  {
    case 0:
if (cmd_isset(flag_new_room)) {
  cmd_load_pic(var_room_no);
  cmd_draw_pic(var_room_no);
  cmd_discard_pic(var_room_no);
  cmd_set_horizon(105);
  cmd_animate_obj(o8);
  cmd_load_view(151);
  cmd_set_view(o8, 151);
  cmd_position(o8, 43, 79);
  cmd_draw(o8);
  cmd_position(Ego, 77, 152);
  cmd_assignn(var_ego_dir, 5);
  cmd_assignn(var_ego_dir, 0);
  if (cmd_equaln(var_prev_room_no,2)) {
    cmd_position(Ego, 77, 160);
    cmd_assignn(var_ego_dir, 1);
  }
  if (cmd_equaln(var_prev_room_no,6)) {
    cmd_position(Ego, 16, 160);
    cmd_assignn(var_ego_dir, 3);
  }
  cmd_draw(Ego);
  cmd_show_pic();
}
if (cmd_said("kijk")) {
  cmd_print("You're in one of the many Q42 Qubicles. Disorganised desks sit in disarray. Computer screens flicker meaningless lines of illegible code at you.");
  cmd_print("But boy, do you wish you could work here.");
}
if (cmd_said("kijk", "computer")) {
  if (cmd_posn(Ego,40,146,120,156)) {
    cmd_print("if (var_prev_room_no == Logic6) { cmd_position(ego, 16, 160); var_ego_dir = 3; }");
    cmd_print("Riiiiight.");
    jumpTo(1);
break;
  }
  cmd_print("You can't see anything from here.");
}
case 1:
if (cmd_equaln(var_ego_edge_code,3)) {
  cmd_new_room(2);
if (AGI.break_all_logics) return;
}
if (cmd_posn(Ego,0,163,159,163)) {
  cmd_new_room(2);
if (AGI.break_all_logics) return;
  if (cmd_posn(Ego,0,140,15,162)) {
    cmd_new_room(6);
if (AGI.break_all_logics) return;
  }
}
if (cmd_said("open", "cadeau")) {
  if (cmd_posn(Ego,33,69,57,110)) {
    cmd_print("You grab the present...");
    cmd_print("Unwrapping the paper...");
    cmd_print("You found a...");
    cmd_print("SHOW PRESENT");
    cmd_erase(o8);
    jumpTo(2);
break;
  }
  cmd_print("You're not close enough.");
}
case 2:
return;

}}}
MESSAGES[5]=[
"",
"You're in one of the many Q42 Qubicles. Disorganised desks sit in disarray. Computer screens flicker meaningless lines of illegible code at you.",
"But boy, do you wish you could work here.",
"if (prev_room_no == Logic6) { position(ego, 16, 160); v6 = 3; }",
"Riiiiight.",
"You can't see anything from here.",
"You grab the present...",
"Unwrapping the paper...",
"You found a...",
"You're not close enough."];
CONTROLS[5]="4a/{y9A/.xA9KA/.ZAKU5/.P5UZA/.4AZlA/^AlxA/lAx^A/PA^+A/EA++59A><.{A95++5K5><.^5K5++5PA><.lAP5++5ZA><.PAZ5++5l5><.E5l5++5rA><{Ar5++5!A><xA!5++5+A><ZA+5++5,5><P5,5++5.4A><4A.45++5.EA>.^A.E5++5.P>.@.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P>.@.P5++5.P5.,5.x5.,5.P5++5.P5.,5.x5.,5.P5++5.K5.,5.^5.,5.K5++5.K5.,5.^5.,5.K5++5.E5<45.^5<45.E5++5.E5<45.^5<45.E5++5.95<45.{5<45.95++5.95<45.{5<45.95++5.45<95.{5<95.45++5.45<95.{5<95.45++5,5<95<45<95,5++5,5<95<45<95,5++5{5<E5<45<E5{5++5{5<E5<45<E5{5++5+5<K5<95<E5+5++5+5<E5<E5<E5+5++5^5<K5<E5<K5^5++5!5<P5<E5<P5!5++5!5<KA<E5<P5!5++5x5<P5<KA<P5x5++5x5<P5<P5<P5x5++5r5<U5<P5<U5r5++5r5<PA<P5<U5r5++5l5<U5<UA<U5l5++5l5<U5<Z5<U5l5++5g5<Z5<Z5<Z5g5++5g5<Z5<Z5<Z5g5++5Z5<Z5<l5<Z5Z5++5Z5<Z5<l5<Z5Z5++5U5.x>L.x5U5++5U5.x5>E5.x5U5++5P5.x5>P5.x5P5++5K5.!5>P5.x5P5++5K5.!5>P5.!5K5++5E5.!5>Z5.!5E5++5E5.!5>Z5.!5E5++595.^5>Z5.^595++595.!5>l5.!595++A.^5>l5.^A++A.^5>l5.^A+^A.^5>x5.^A^<x5>x5.+5^^5.+5>x5.+5^^5.^5>^5.^5^!5.+>=.^A!!5/gA!x5/l595xx5/l595xr5/r5E5rl5/x5K5ll5/x5K5lg5/!5P5gg5/!5P5gZ5/^5U5ZZ5/^5U5ZU5/+5Z5UU5/+5Z5UP5/{5g5PP5/{5g5PK5/,5l5KK5/,5l5KE5/.45r5EE5/.45r5E95/.95x5995/.95x594?0";