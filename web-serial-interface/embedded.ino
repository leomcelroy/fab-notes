int count = 0;

void setup() {
  Serial.begin(9600);
}

void loop() {
  Serial.print("count: ");
  Serial.println(count);
  delay(100);
  count++;
}
