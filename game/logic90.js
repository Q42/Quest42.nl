window.logic90 = function()
{
  while(1) {
    switch (jumptoLine)
  {
    case 0:
if (cmd_isset(flag_input_received) && cmd_equaln(var_unknown_word_no,0) && !cmd_isset(flag_input_parsed)) {
  if ((cmd_said("ass", "rol") || cmd_said("anyword", "ass", "rol") || cmd_said("anyword", "anyword", "ass", "rol") || cmd_said("anyword", "anyword", "anyword", "ass", "rol") || cmd_said("anyword", "anyword", "anyword", "anyword", "ass", "rol") || cmd_said("anyword", "anyword", "anyword", "anyword", "anyword", "ass", "rol"))) {
    cmd_increment(v252);
    if (cmd_equaln(v252,1)) {
      cmd_print("I am going to tell on you!");
    }
    if (cmd_equaln(v252,2)) {
      cmd_print("Don't say anymore words like that!");
    }
    if (cmd_equaln(v252,3)) {
      cmd_print("Don't say I didn't warn you.");
      cmd_quit(1);
    }
  }
  if ((cmd_said("kijk", "anyword") || cmd_said("kijk", "anyword", "anyword"))) {
    cmd_print("What? Where?");
  }
  if ((cmd_said("acquire", "anyword") || cmd_said("acquire", "anyword", "anyword"))) {
    cmd_print("You can't get that here!");
  }
  if ((cmd_said("drink", "anyword") || cmd_said("drink", "anyword", "anyword"))) {
    cmd_print("What do you want me to do with it?");
  }
}
return;

}}}
MESSAGES[90]=[
"",
"I am going to tell on you!",
"Don't say anymore words like that!",
"Don't say I didn't warn you.",
"What? Where?",
"You can't get that here!",
"What do you want me to do with it?"];