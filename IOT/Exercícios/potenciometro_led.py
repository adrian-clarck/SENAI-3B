from machine import Pin, ADC, PWM
from utime import sleep

potenciometro = ADC(28)
led_azul = PWM (Pin(15))
led_azul.freq(1000)

#Iniciando o led desligado
led_azul.duty_u16(0)


while True:
    
    leitura_pot = potenciometro.read_u16()
    led_azul.duty_u16(leitura_pot)
    
    print("Valor leitura Potenciômetro", leitura_pot)
    sleep(0.001)