from machine import Pin, PWM
from utime import sleep, ticks_us, ticks_diff

# Sensor ultrassônico
trig = Pin(2, Pin.OUT)
echo = Pin(3, Pin.IN)

# Buzzer com PWM
buzzer = PWM(Pin(15))
buzzer.freq(1000)

while True:
    trig.low()
    sleep(0.002)

    trig.high()
    sleep(0.00001)
    trig.low()

    while echo.value() == 0:
        start = ticks_us()

    while echo.value() == 1:
        end = ticks_us()

    duracao = ticks_diff(end, start)
    distancia = (duracao * 0.0343) / 2

    if distancia < 200:
        print("Tem alguém na frente")
        buzzer.duty_u16(30000)  # liga som
        sleep(0.5)
        buzzer.duty_u16(0)      # desliga
        sleep(0.5)
    else:
        buzzer.duty_u16(0)
        print("Não tem ninguém na frente")

    sleep(1)