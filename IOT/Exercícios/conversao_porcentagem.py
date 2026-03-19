from machine import Pin, PWM
from utime import sleep

led = PWM(Pin(15))
led.freq(100)

leitura = 60000

porcentagem = leitura / 65535 * 100

print(f"O valor em porcentagem é de: {porcentagem:.2f}% %")

while True:
    def converte_porcentagem (leitura):
        porcentagem = leitura / 65535 * 100
        
    converte_porcentagem(leitura)