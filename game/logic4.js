window.logic4 = function()
{
  while(1) {
    switch (jumptoLine)
  {
    case 0:
if (!(cmd_isset(flag_new_room))) {
  jumpTo(500);
  break;
}
  cmd_load_pic(var_room_no);
  cmd_draw_pic(var_room_no);
  cmd_discard_pic(var_room_no);
  cmd_set_horizon(60);
  cmd_animate_obj(o8);
  cmd_load_view(151);
  cmd_set_view(o8, 151);
  cmd_position(o8, 22, 134);
  cmd_draw(o8);
  cmd_position(Ego, 140, 140);
  cmd_assignn(var_ego_dir, 7);
  cmd_animate_obj(o10);
  if (!(cmd_equaln(var_ego_view_no,100))) {
  jumpTo(501);
  break;
}
    cmd_assignn(v27, 102);
    jumpTo(1);
break;
  case 501:
  cmd_assignn(v27, 100);
case 1:
  cmd_load_view_v(v27);
  cmd_set_view_v(o10, v27);
  cmd_position(o10, 53, 99);
  cmd_draw(o10);
  cmd_wander(o10);
  cmd_draw(Ego);
  cmd_show_pic();
case 500:
if (cmd_said("kijk")) {
  cmd_print("This is the meeting room. There's a whiteboard, a laptop on the table and many interesting things on the shelves lining the far wall.");
}
if (cmd_said("kijk", "bar")) {
  cmd_print("There's a laptop on the table.");
}
if (cmd_said("kijk", "apple")) {
  if (cmd_posn(Ego,44,111,61,148)) {
    cmd_print("The laptop is displaying a web browser pointing to http://quest42_nl/geheim.");
    jumpTo(2);
break;
  }
  cmd_print("You can't see it from here.");
}
case 2:
if (cmd_said("kijk", "board")) {
  if (cmd_posn(Ego,105,89,132,118)) {
    cmd_print("There's a bunch of illegible scrawling plastered all over the whiteboard.");
    cmd_print("You can make out a few words.. if you squint.");
    jumpTo(3);
break;
  }
  cmd_print("You can't see it from here.");
}
case 3:
if (cmd_said("squint")) {
  if (cmd_posn(Ego,105,89,132,118)) {
    cmd_print("The password is 'Ken sent me'.");
  }
}
if (cmd_said("ken", "sent")) {
  cmd_print("Come on in!");
  cmd_print("http://youtu_be/WlBiLNN1NhQ");
}
if (cmd_posn(Ego,143,135,149,148)) {
  cmd_new_room(2);
if (AGI.break_all_logics) return;
}
if (cmd_said("open", "cadeau")) {
  if (cmd_posn(Ego,17,129,27,139)) {
    cmd_print("You grab the present...");
    cmd_print("Unwrapping the paper...");
    cmd_print("You found a...");
    cmd_print("SHOW PRESENT");
    cmd_erase(o8);
    jumpTo(4);
break;
  }
  cmd_print("You're not close enough.");
}
case 4:
return;

}}}
MESSAGES[4]=[
"",
"This is the meeting room. There's a whiteboard, a laptop on the table and many interesting things on the shelves lining the far wall.",
"There's a laptop on the table.",
"The laptop is displaying a web browser pointing to http://quest42_nl/geheim.",
"You can't see it from here.",
"There's a bunch of illegible scrawling plastered all over the whiteboard.",
"You can make out a few words.. if you squint.",
"The password is 'Ken sent me'.",
"Come on in!",
"http://youtu_be/WlBiLNN1NhQ",
"You grab the present...",
"Unwrapping the paper...",
"You found a...",
"You're not close enough."];
CONTROLS[4]="4?045.45,5><.+545.95,5><.^545.E5,5><.!545.K5,5><.x545.P5,5><.r545.U5,5><.l545.Z5{5><.gA45.g5{5><.PAE45.l5{5><.4FP45.rA+5><+Ag45.!5+5><rFr45.^5+5><ZA^45.+5+5><KA{45.{5+5>.,F.445.,5+5>.^A.K45<45+5>.lF.U45<95+5>.UA.l45<E5+5>.9F.x45<K5^5>,A.+45<P5^5>!F.,45<U5^5>lA<E45<Z5^5>UA<P4A<Z5^5>9F<ZEF<P5^5<.{A<rUF<E5^5<.!A<!lF<45!5<.!5<^!F.{5x5<.!5<^{F.^Al5<.!5<^45.4F.!5g5<.!A<!.PL.l5Z5<.!A<!.lF.Z5U5<.!A<!.!F.P5P5<.!A<!.{F.E5K5<.!A<!<9F.45E5<.!A<!<PF{595<.!A<!<gF^A<.!A<!<x=<.!A<!<!5>gA<!<!5>gA<!<!5>gA<!<!5>gA<!<!5>gA<!<!5>gA<!<!5>gA<!<!5>gA<!<!5>gA<!<!5>gA<!<!5>gA<!<!5>gA<!<!5>gA<!<!5>gA<!<!5>gA<!<!5>gA<!<!5>gA<!<!5>gA<!<!5>gA<!<!5>gA<!<!5>gA<!<!5>gA<!<!5>gA<!<!5>gA<!<!5>gA<!<!5>gA<!<!5>gA<!<!5>gA<!<!5>gA<!<!5>gA<!<!5>gA<!<!5>gA<!<!5>gA<!<!5>gA<!<!5>gA<!<!5>gA<!<!5>gA<!<!5>gA<!<!5>gA<!<!5>gA<!<!5>gA<!<!5>gA<!<9.0>EA.r5.9<45x5P5>EA.rF,<45x5P5>EA.r59F+.,5.45>EA.r595E5^.,5!5P5>K5.r595KAx.{5E5r5P5>K5.r595U5r.+5K5l5U>V.l595U5r.+5E5r5U5>P5.l595U5r.^5K5l5Z5>U5.g595U5r.^5E5r5Z5>U5.g595U5r.!5E5r5g5>Z5.Z595U5r.x5K5r5g5>Z5.Z595U5r.x5E5r5l5>g5.U595U5r.r5K5r5l5>g5.U595U5r.r5E5r5r5>l5.P595U5r.l5K5ry>l5.P595U5r.g5K5r5rA<!5.+5.K595U5r.g5E5x5rA.K.m.+5.K595U5r.Z5K5r5xA.K5.l5.+5.E595U5r.Z5E5x5xA.K5.l5.+5.E595U5r.U5K5r5!A.E5.r5.{5.9595U5r.P.QZA.E5.r5.,5.4595U5r.P5+5U5ZA.E5.x5.{5.4595U5r.K5+5Z5ZA.E5.x5.,5,595U5r.K5+5Z5ZA.95.!5.,5,595U5r.E.Q95ZA.95.!5<45{595U5r.E5+5U595ZA.95.^5.,5{595U5r.E5^5Z595ZA.95.^5<45+595U5r.E5^5Z595ZA.95.^5<45+595U5r.E5!5g595Z5.95.{5<45^595U5r.E5!5g595Z5.95.{5<45^595U5r.E5x5l595U5.E5.{5<95!595U5r.E5x5l595U5.E5.{5<95!595U5r.E5r5r595U5.E5.,5<95x595U5r.E5r5r595P5.E5<45<95x595U5r.E5l5x595P5.E5<45<E5r595U5r.E5l5x595K5.K5<45<E5r595U5r.E5g5!595K5.K5<95<E5l595U5r.E5Z5^595E5.K5<E5<K5g595U5r.E5Z5^595E5.K5<E5<K5g595U5r.E5U5+595E5.K5<E5<P5Z595U5r.E5U5+59595.P5<K5<K5Z595U5r.E5P5{59595.P5<K5<P5U595U5r.E5P5{59A.P5<P5<P5U595U5r.E5K5,59A.P5<U5<P5P595U5r.E5K5,59A.P5<U5<P5P595U5r.E5.K595.U5<U5<U5K595U5r.E5.K595.P5<Z5<U5K595U5r.E595.9A.U5<g5<U5E595U5r.E595.9A.U5<g5<U5E595U5r.EA.E5.Z5<g5<Z59595U5r.EA.E5.Z5<gy.^59595U5r.E.Q.U5E5<Z5l5.+A95U5r.95<x5E5<Z5g5.{A95U5r.95<x5E5<Z5g5.,FU5r.45<!5E5<Z5g5<g5r.45<!5E5<g5U5<95Z5r,5<!5K5<g5U5<l5r,5<!5K5<g5U5<l5r{5<^5K<mP5<r5r{5<^5<rh<r5r+5<^5UA>.P5r+5<^59L95>.P5r^5<+AZ5<9m<r5r^5<.U5<45<.E5r!5<.Z5.,5<.K5r!5<.g5.+5<.P5rx5<.l.=<.U5rx5/!5rr5/^5rl5/+All5/{5lg5/,Agg5/.45gZ5/.E5ZZ5/.E5ZU5/.P5UU5/.P5UP5/.Z5PP5/.Z5PK5/.l5KK5/.l5KE5/.x5EE5/.x5E95/.^5995/.^594?0?4";