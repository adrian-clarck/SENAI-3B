from machine import Pin, ADC, PWM
from utime import sleep

potenciometro = ADC(26)
led_blue = PWM (Pin(14))
led_green = PWM (Pin(15))
led_red = PWM (Pin(16))
botao = Pin(18, Pin.IN, Pin.PULL_DOWN)

led_blue.freq(1000)
led_blue.duty_u16(65535)

led_green.freq(1000)
led_green.duty_u16(0)

led_red.freq(1000)
led_red.duty_u16(0)

print("Cofre Trancado. Insira o segredo.")
    
while True:
    leitura_pot = potenciometro.read_u16()
    estado_atual = botao.value()
    senha_secreta = leitura_pot > 30000 and leitura_pot < 35000
    
    #Em decorrência do código abaixo, por favor clicar no botão por 1 segundo para indicar a leitura
    print("Valor cofre: ", leitura_pot)
    sleep(1)
    
    if estado_atual == 1 and senha_secreta:
        led_blue.duty_u16(0)
        led_green.duty_u16(65535)
        print("Acesso Permitido: Cofre Aberto!")
        sleep(2)
        #Cofre aberto e encerra a atividade do código
        break
    
    elif estado_atual == 1 and not senha_secreta:
        led_blue.duty_u16(0)
        led_red.duty_u16(65535)
        sleep(0.2)
        led_red.duty_u16(0)
        sleep(0.2)
        led_red.duty_u16(65535)
        sleep(0.2)
        led_red.duty_u16(0)
        sleep(0.2)
        led_red.duty_u16(65535)
        sleep(0.2)
        led_red.duty_u16(0)
        print("Acesso Negado: Senha Incorreta!")
        sleep(1)
        led_blue.duty_u16(65535)
        