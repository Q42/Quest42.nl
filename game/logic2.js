window.logic2 = function()
{
  while(1) {
    switch (jumptoLine)
  {
    case 0:
if (cmd_isset(flag_new_room)) {
  cmd_load_pic(var_room_no);
  cmd_draw_pic(var_room_no);
  cmd_discard_pic(var_room_no);
  cmd_set_horizon(80);
  cmd_animate_obj(o8);
  cmd_load_view(151);
  cmd_set_view(o8, 151);
  cmd_position(o8, 83, 117);
  cmd_draw(o8);
  cmd_position(Ego, 153, 160);
  cmd_assignn(var_ego_dir, 7);
  if (cmd_equaln(var_prev_room_no,5)) {
    cmd_position(Ego, 80, 165);
    cmd_assignn(var_ego_dir, 1);
  }
  if (cmd_equaln(var_prev_room_no,4)) {
    cmd_position(Ego, 42, 85);
    cmd_assignn(var_ego_dir, 5);
  }
  cmd_animate_obj(o11);
  cmd_load_view(103);
  cmd_set_view(o11, 103);
  cmd_position(o11, 35, 120);
  cmd_draw(o11);
  cmd_wander(o11);
  cmd_draw(Ego);
  cmd_show_pic();
}
if (cmd_said("kijk")) {
  cmd_print("This is the kitchen and dining area. There are two rows of tables (with, mysteriously, no chairs). Against the western wall, there are drawers and a sink. The northern wall is lined with cabinets, a fridge, and a microwave.");
  cmd_print("Your stomach rumbles. You wonder whether there's anything to eat in the fridge.");
}
if (cmd_said("open", "fridge")) {
  if (cmd_posn(Ego,52,86,81,108)) {
    cmd_print("XML Hagel!!!");
    jumpTo(1);
break;
  }
  cmd_print("What are you, Inspector Gadget? You can't reach that from here!");
}
case 1:
if (cmd_equaln(var_ego_edge_code,2)) {
  cmd_new_room(1);
if (AGI.break_all_logics) return;
}
if (cmd_equaln(var_ego_edge_code,1)) {
  cmd_new_room(4);
if (AGI.break_all_logics) return;
}
if (cmd_equaln(var_ego_edge_code,3)) {
  cmd_new_room(5);
if (AGI.break_all_logics) return;
}
if (cmd_said("open", "cadeau")) {
  if (cmd_posn(Ego,74,90,98,136)) {
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
MESSAGES[2]=[
"",
"This is the kitchen and dining area. There are two rows of tables (with, mysteriously, no chairs). Against the western wall, there are drawers and a sink. The northern wall is lined with cabinets, a fridge, and a microwave.",
"Your stomach rumbles. You wonder whether there's anything to eat in the fridge.",
"XML Hagel!!!",
"What are you, Inspector Gadget? You can't reach that from here!",
"You grab the present...",
"Unwrapping the paper...",
"You found a...",
"You're not close enough."];
CONTROLS[2]="?4?4?4?4?4?4?4?445/.,9A/.+KA/.!UA/.rgA/.grA/.U!A/.K+A/.9,A/,.95/{.EA/^.PA/x.ZA/l.lA/Z.xA/P.^A/E.{A/4<4A><.{<E><.=<E5><.+<E5><.+?4?4?4?4?4?4?4?4?4?4?4?4?4.lHA/K.PcELly><^.PcU5g5x5><^.PcU5g5x5><^.PcU5g5x5><^.PcU5g5x5><^.PcU5g5x5><^.PcU5g5x5><^.PcU5g5x5><^.PcU5g5x5><^.PcU5g5x5><^.PcU5g5x5><^.PcU5g5x5><^.PcU5g5x5><^.PcU5g5x5><^.PcU5g5x5><^.PcU5g5x5><^.PcU5g5x5><^.PcU5g5x5><^.PcU5g5x5><^.PcU5g5x5>gh.+.PcU5g5x5>lh.^.PcU5g5x5>rh.!.PcU5g5x5><^.PcU5g5x5>rm.x.PcU5g5x5><^.PcU5g5x5><^.PcU5g5x5><^.PcU5g5x5><^.K=g5x5><^.K5cU5g5x5><^.K5cU5g5x5><^.K5cU5g5x5><^.K5cU5g@><^.K5cU5g5x5><^.K.0HE5x5><^.K5$FHE5x5><^.K5$FHE5x5><^.K5$FHE5x5><^.K.0CK5x5><^.K5$FCK5x5><^.K5$mxL>{.y.K5.2.E5>{5.x.K5.2.E5>{5.x.K5.2.E5>{5.x.K5.2.E5>P5r5.x.K.5.E>.0.x.K=9A><.^.E}9A><.^.9}EA><.^.4.L><.^,.0959A><.^{.5959A><.^+.09AEA><.^^.h><.^!.5E5EF><.^x.5EA959A><.^r.A9595959A><.^l.@><.^g.A9AEAEA><.^Z.AE5K5EA><.+U.FE5EAE5><.{P.FEAEAE5><.{K.L9595959595><.,E.Q9595959595><.,9.L9AEAEA/44.LE5K5KA.K>h<U4.LE5K5K5.P5<.l5{5<P4.FEAEAK5.K5>l5<P4.AE595EAE5.P5>r5<K4.AE5959595E5.K5>x5<K4.A95EAE595.P5>!5<E4.09AKAE595.K5>^5<E4}EAK5KA.P5>+5<94}E5P5K5.U5>+5<94=K5KAK5.P5>,5<44*KAE595E5.U5>,5<44*E595E595E5.P5!<.s^5.^F4*E59595E595.U5x<.y^5.!5K4y9595E595E595.P5!5<.x5^5.r5P4y9AKAKA.U5!5<.x5^5.l5U4sEAK5PA.U5!5<.!5^5.Z5Z4mK5P5P5.Z@<.^=.Z5Z4mEAKAP5/95g4hKAKAK5/E5g4aK595E595K5/Eh4aE5E595E5E5/E5l4aE5E595E595/K5l4Q9595KAK595/K5l4LEAPAKA/P5l4LEAP5PA/P5l4FK5PAP5/U5l4AKAPAP5/U5l4AKAK595K5/Z5l45K595K595K5/g5gK5E5E5E5E5.g=>Z}{5gK5E595K5E5.UA+5>Z5{5+5gE5K595K595.ZA^5>g5{5{5Z95PAPA.ZA+5>l5{5+5Z95PAPA.ZA+5>l5,5+5U45U5U5.Z595^5>x5{5{5PUAU5.P59A+>@,5{5KUAP5.UA95><lVxFP595P5.UF><x5K5+P595K5.ZF><x5K5+K5E5K5.ZA><^5E5+E5K5E5.gA><^5E5+E5K5E5.gA><+595+95P595.l5><{595+95P595.l5><,A+45UA.r><.A+Z5/.rZ5/.rU5/.xU5/.xP5/.!P5/.!K5/.^K5/.^E5/.+E5/.+95/.{95/.{45/.,?4?4";