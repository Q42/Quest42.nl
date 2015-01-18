window.logic3 = function()
{
  while(1) {
    switch (jumptoLine)
  {
    case 0:
if (cmd_isset(flag_new_room)) {
  cmd_load_pic(var_room_no);
  cmd_draw_pic(var_room_no);
  cmd_discard_pic(var_room_no);
  cmd_set_horizon(40);
  cmd_animate_obj(o8);
  cmd_load_view(151);
  cmd_set_view(o8, 151);
  cmd_position(o8, 80, 92);
  cmd_draw(o8);
  cmd_assignn(var_ego_dir, 1);
  cmd_position(Ego, 75, 165);
  cmd_draw(Ego);
  cmd_show_pic();
}
if (!(cmd_said("gooi", "dart"))) {
  jumpTo(500);
  break;
}
  if (!(cmd_posn(Ego,84,116,120,143))) {
  jumpTo(501);
  break;
}
    cmd_print("You launch a dart at the board...");
    cmd_print("...nope! You still missed. Good thing our wall doesn't mind.");
    jumpTo(1);
break;
  case 501:
  cmd_print("You launch a dart at the board...");
  cmd_print("Congratulations! You just made another hole in the wall! Looks like you're too far away to aim straight...");
case 1:
  return;
case 500:
if (cmd_said("dart")) {
  cmd_print("What do you want me to do with it?");
}
if (cmd_said("open", "cadeau")) {
  if (cmd_posn(Ego,76,101,89,117)) {
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
if (cmd_said("kijk")) {
  cmd_print("This is the Qluis. There's a fridge on the left, a dart board on the right, and some shelves on the far wall.");
  cmd_print("Upon closer inspection, you notice a present sitting in plain view on a shelf.");
}
if (cmd_said("open", "fridge")) {
  if (cmd_posn(Ego,13,110,40,140)) {
    cmd_print("You open the fridge.... all you can see is beer. Do these people ever get any work done?");
    jumpTo(3);
break;
  }
  cmd_print("You're too far away.");
}
case 3:
if (cmd_equaln(var_ego_edge_code,3)) {
  cmd_new_room(1);
if (AGI.break_all_logics) return;
}
return;

}}}
MESSAGES[3]=[
"",
"You launch a dart at the board...",
"...nope! You still missed. Good thing our wall doesn't mind.",
"Congratulations! You just made another hole in the wall! Looks like you're too far away to aim straight...",
"What do you want me to do with it?",
"You grab the present...",
"Unwrapping the paper...",
"You found a...",
"You're not close enough.",
"This is the Qluis. There's a fridge on the left, a dart board on the right, and some shelves on the far wall.",
"Upon closer inspection, you notice a present sitting in plain view on a shelf.",
"You open the fridge.... all you can see is beer. Do these people ever get any work done?",
"You're too far away."];
CONTROLS[3]="?4?4?4?4/.,545/.^A995/.x5KE5/.gAPKA/.P5ZU5/.E5gZ5/,Alg5/+5xl5/xA!rA/g5+!5/PA{^5/E5.4+5><.,A.9{5><.+5.K,5><.!5.P.4A><.gA.U.E5><.U5.g.K5><.EA.l.P><.A.x.P5><.45.x.P5><.45.x.P5><.45.x.P5><.45.x.P5><.45.x.P5><.45.x.P5><.45.x.P5><.45.x.P5><.45.x.P5><.45.x.P5><.45.x.P5><.45.x.P5><.45.x.P5><.45.x.P5><.45.x.P5><.45.x.P5><.45.x.P5><.45.x.P5><.45.x.P5><.45.x.P5><.45.x.P5><.45.x.P5><.45.x.P5><.45.x.P5><.45.x.P5><.45.x.P5><.45.x.P5><.45.x.P5><.45.x.P5><.45.x.P5><.45.x.P5><.45.x.P5><.45.x.P5><.45.x.P5><.45.x.P5><.45.x.P5><.45.x.P5><.45.x.P5><.45.x.P5><.45.x.P5><.45.x.P5><.45.x.P5><.45.x.P5><.45.x.P5><.45.x.P5><.45.x.P5><.45.x.P5><.45.x.P5><.45.x.P5><.45.x.P5><.45.x.P5><.45.x.P5><.45.x.P5><.45.x.P5><.45.x.P5><.45.x.P5><.45.x.P5><.45.x.P5><.45.x.P5><.45.x.P5><.45.x.P5><.45.x.P5><.45.x.P5><.45.x.P5><.45.x.P5><.45.x.P5><.45.x.P5><.45.x.P5><.45.x.P5><.45.x.P5><.45.x.P5><.45.x.P5><.45.x.P5><.45.x.P5><.45.x.P5><.45.x.P5><.45.x.P5><.45.x.P5><.45.x.P5><.45.x.P5><.45.x.P><.A.x.KA><.95.r.KA><.95.r.EA><.K5.l.EA><.K5.l.9A><.U5.g.95><.g5.Z.4A><.g5.Z,A><.r5.U,A><.x5.P{A><.!5.P^=><.E5.K+Ax5><.E5.K+5x5><.P5.E^Ax5>U5<,5.9!Ax5>g5<{5.9!Ax5>g5<,5.4xAx5>r5<,5,x5!5>r5<,5,rAx5>!5<,5{r5!5>!5<,5{lAx5>+5<,5+gA!5>+5<.45^gAx5>,5<,5^ZA!5>.45<,5!Z5!5>.95<,5!UA!5>.E5<,5xU5!5>.K5<.45rPA!5>.P5<,5rKA!5>.U5<.45lK5^5>.UA<.45gEA!5>.g5<.45gE5^5>.gA<.45Z9A!5>.r5<.45Z95^5>.r5<.95U4=>.!5<.95P45/.x5P/.^5K/.+5E/.+5E/.{59/.{59/.,5?4?4?4?4?4?4?4?4?4?4?4?4?4?4>.x>V4<.=.^5>U<.+5.^5>U<.+5.^5>U<.+5.^5>U<.+5.^5>U<.+5><E";