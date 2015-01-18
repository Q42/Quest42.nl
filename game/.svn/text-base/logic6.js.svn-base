window.logic6 = function()
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
  cmd_position(o8, 51, 143);
  cmd_draw(o8);
  cmd_position(Ego, 77, 152);
  cmd_assignn(var_ego_dir, 5);
  cmd_assignn(var_ego_dir, 0);
  if (cmd_equaln(var_prev_room_no,1)) {
    cmd_position(Ego, 77, 160);
    cmd_assignn(var_ego_dir, 1);
  }
  if (cmd_equaln(var_prev_room_no,5)) {
    cmd_position(Ego, 140, 160);
    cmd_assignn(var_ego_dir, 7);
  }
  cmd_draw(Ego);
  cmd_show_pic();
}
if (cmd_said("kijk")) {
  cmd_print("Another of those Qubicles. You feel like they stretch on for miles.");
  cmd_print("Good thing there's only 2 of them!");
}
if (cmd_said("kijk", "computer")) {
  if (cmd_posn(Ego,40,146,120,156)) {
    cmd_print("A dying mosquito exclaimed,\nA chemist has poisoned my brain!\nThe cause of his sorrow\nWas para-dichloro-\ndiphenyl-trichloroethane");
    jumpTo(1);
break;
  }
  cmd_print("You can't see anything from here.");
}
case 1:
if (cmd_equaln(var_ego_edge_code,3)) {
  cmd_new_room(1);
if (AGI.break_all_logics) return;
}
if (cmd_posn(Ego,0,163,159,163)) {
  cmd_new_room(1);
if (AGI.break_all_logics) return;
}
if (cmd_posn(Ego,145,140,155,163)) {
  cmd_new_room(5);
if (AGI.break_all_logics) return;
}
if (cmd_said("open", "cadeau")) {
  if (cmd_posn(Ego,46,138,56,148)) {
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
MESSAGES[6]=[
"",
"Another of those Qubicles. You feel like they stretch on for miles.",
"Good thing there's only 2 of them!",
"A dying mosquito exclaimed,\nA chemist has poisoned my brain!\nThe cause of his sorrow\nWas para-dichloro-\ndiphenyl-trichloroethane",
"You can't see anything from here.",
"You grab the present...",
"Unwrapping the paper...",
"You found a...",
"You're not close enough."];
CONTROLS[6]="4a/{y9A/.xA9KA/.ZAKU5/.P5UZA/.4AZlA/^AlxA/lAx^A/PA^+A/EA++59A><.{A95++5K5><.^5K5++5PA><.lAP5++5ZA><.PAZ5++5l5><.E5l5++5rA><{Ar5++5!A><xA!5++5+A><ZA+5++5,5><P5,5++5.4A><4A.45++5.EA>.^A.E5++5.P>.@.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P5>.x5.P5++5.P>.@.P5++5.P5.,5.x5.,5.P5++5.P5.,5.x5.,5.P5++5.K5.,5.^5.,5.K5++5.K5.,5.^5.,5.K5++5.E5<45.^5<45.E5++5.E5<45.^5<45.E5++5.95<45.{5<45.95++5.95<45.{5<45.95++5.45<95.{5<95.45++5.45<95.{5<95.45++5,5<95<45<95,5++5,5<95<45<95,5++5{5<E5<45<E5{5++5{5<E5<45<E5{5++5+5<K5<95<E5+5++5+5<E5<E5<E5+5++5^5<K5<E5<K5^5++5!5<P5<E5<P5!5++5!5<P5<E5<P5!5++5x5<P5<P5<P5x5++5x5<P5<P5<P5x5++5r5<U5<P5<U5r5++5r5<PA<P5<U5r5++5l5<U5<Z5<U5l5++5l5<U5<Z5<U5l5++5g5<Z5<Z5<Z5g5++5g5<Z5<Z5<Z5g5++5Z5<Z5<l5<Z5Z5++5Z5<Z5<l5<Z5Z5++5U5.x>L.x5U5++5U5.x5>E5.x5U5++5P5.x5>P5.x5P5++5K5.!5>P5.x5P5++5K5.!5>P5.!5K5++5E5.!5>Z5.!5E5++5E5.!5>Z5.!5E5++595.^5>Z5.^595++595.!5>l5.!595++A.^5>l5.^A++A.^5>l5.^A+^A.^5>x5.^A^^5.+5>x5<x^5.+5>x5.+5^^5.^5>^5.^5^!A.^>=.+5!!A/g5!x595/l5xx595/l5xr5E5/r5rl5K5/x5ll5K5/x5lg5P5/!5gg5P5/!5gZ5U5/^5ZZ5U5/^5ZU5Z5/+5UU5Z5/+5UP5g5/{5PP5g5/{5PK5l5/,5KK5l5/,5KE5r5/.45EE5r5/.45E95x5/.95995x5/.9594?0";