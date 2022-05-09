const PWM_L = D10;
const PWM_R = D9;
const DIR_L = D8;
const DIR_R = D7;

var speed = 0.5;


function backward() {
  digitalWrite(DIR_L, HIGH);
  digitalWrite(DIR_R, HIGH);

  analogWrite(PWM_L, speed);
  analogWrite(PWM_R, speed);
}

function forward() {
  digitalWrite(DIR_L, LOW);
  digitalWrite(DIR_R, LOW);

  analogWrite(PWM_L, speed);
  analogWrite(PWM_R, speed);
}


function stop() {
  analogWrite(PWM_L, 0);
  analogWrite(PWM_R, 0);
}


setWatch(function() {
  console.log("Pressed BTN2");
  forward();
}, BTN2, {edge:"rising", debounce:50, repeat:true});

setWatch(function() {
  console.log("Pressed BTN3");
  stop();
}, BTN3, {edge:"rising", debounce:50, repeat:true});
