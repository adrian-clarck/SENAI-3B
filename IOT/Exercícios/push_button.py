from machine import Pin
from utime import sleep

led_red = Pin(15, Pin.OUT)
led_blue = Pin(16, Pin.OUT)
led_green = Pin(17, Pin.OUT)

pull_down = Pin(18, Pin.IN)   

led = [led_red, led_blue, led_green]

while True:
    estado_botao = pull_down.value()
    
    #if estado_botao == 1:
    if estado_botao == 0:
        #print("1 - Botão Pressionado! (HIGH)")
        print("0 - Botão Pressionado! (LOW)")
    else:
        #print("0 - Botão não pressionado! (LOW)")
        print("1 - Botão não pressionado! (HIGH)")
        
    sleep(0.5)