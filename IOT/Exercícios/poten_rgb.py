from machine import Pin, ADC, PWM
from utime import sleep

potenciometro = ADC(28)
led = PWM(Pin(15))
led.freq(1000)

def mapear(leitura, in_min, in_max, out_min, out_max):
    return int((leitura - in_min) * (out_max - out_min) / (in_max - in_min) + out_min)

while True:
    valor = potenciometro.read_u16()
    valor_rgb = mapear(valor, 0, 65535, 0, 255)
   
    led.duty_u16(valor)
   
    print(valor_rgb)
    sleep(0.5)