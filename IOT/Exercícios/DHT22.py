from machine import Pin, I2C
import dht
import time
from lcd_api import LcdApi
from i2c_lcd import I2cLcd

# 1
sensor = dht.DHT22(Pin(15))  # pino de dados no GP15

while True:
    sensor.measure()
    temp = sensor.temperature()
    umid = sensor.humidity()
    
    print(f"Temperatura: {temp}°C | Umidade: {umid}%")
    
    time.sleep(2)


# 2
#sensor = dht.DHT22(Pin(15))


#while True:
#    sensor.measure()
#    temp = sensor.temperature()
    
#    print(f"Temperatura: {temp}°C")
    
#    time.sleep(2)


# 3
#sensor = dht.DHT22(Pin(15))
#botao = Pin(14, Pin.IN, Pin.PULL_DOWN)


#modo = 0  # 0 = temp, 1 = umidade

#while True:
#    sensor.measure()
    
#    if botao.value() == 1:
#       modo = not modo
#        time.sleep(0.3)
    
#    lcd.clear()
    
#    if modo == 0:
#        print(f"Temperatura: {temp}°C")
#    else:
#       print(f"Umidade: {umid}%")
    
#    time.sleep(1)


# 4
#sensor = dht.DHT22(Pin(15))
#led = PWM(Pin(16))
#led.freq(1000)

#while True:
#    sensor.measure()
#    temp = sensor.temperature()
    
#    if temp < 20:
#        duty = 20000  # fraco
#    elif temp < 31:
#        duty = 40000  # médio
#    else:
#        duty = 65000  # máximo
    
#    led.duty_u16(duty)
    
#    print("Temp:", temp)
    
#    time.sleep(2)


# 5
#sensor = dht.DHT22(Pin(15))

#led_azul = Pin(16, Pin.OUT)
#led_verde = Pin(17, Pin.OUT)
#led_vermelho = Pin(18, Pin.OUT)



#while True:
#    sensor.measure()
#    temp = sensor.temperature()
    
#    print(f"Temperatura: {temp}°C")
    
    # Desliga todos
#    led_azul.value(0)
#    led_verde.value(0)
#    led_vermelho.value(0)
    
#    if temp < 20:
#        led_azul.value(1)
#    elif temp < 31:
#        led_verde.value(1)
#    else:
#        led_vermelho.value(1)
    
#    time.sleep(2)