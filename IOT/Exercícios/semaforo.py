from machine import Pin
from utime import sleep

ledVermelho = Pin(16, Pin.OUT)
ledAmarelo = Pin(17, Pin.OUT)
ledVerde = Pin(18, Pin.OUT)

while True:
    for r, y, g in [(0,0,1), (0,1,0), (1,0,0)]:
        ledVermelho.value(r); ledAmarelo.value(y); ledVerde.value(g)
        sleep(1)