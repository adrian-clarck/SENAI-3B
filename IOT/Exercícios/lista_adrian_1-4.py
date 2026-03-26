#1
#from machine import Pin
#from utime import sleep

#led = Pin(16, Pin.OUT)

#pull_down = Pin(15, Pin.IN)   


#while True:
#    estado_botao = pull_down.value()
    
#    if estado_botao == 1:
#    if estado_botao == 0:
#        print("1 - Botão Pressionado! (HIGH)")
#        led.value(1)
#        #print("0 - Botão Pressionado! (LOW)")
#    else:
#        print("0 - Botão não pressionado! (LOW)")
#        led.value(0)
#        print("1 - Botão não pressionado! (HIGH)")
#        
#    sleep(0.1)


#2
#from machine import Pin, PWM
#from utime import sleep

#led = PWM(Pin(16))
#led.freq(1000)

#while True:
#    for i in range(0, 65535, 3000):
#        led.duty_u16(i)
#        print(i)
#        sleep(0.2)
#    for i in range(65535, 0, -3000):
#        led.duty_u16(i)
#        print(i)
#        sleep(0.2)


#3
#from machine import Pin, ADC, PWM
#from utime import sleep

#potenciometro = ADC(28)
#led = PWM (Pin(16))
#led.freq(1000)

##Iniciando o led desligado
#led.duty_u16(0)


#while True:
    
#    leitura_pot = potenciometro.read_u16()
#    led.duty_u16(leitura_pot)
    
#    print("Valor leitura Potenciômetro", leitura_pot)
#    sleep(0.001)


#4
#from machine import Pin, ADC, PWM
#from utime import sleep

#potenciometro = ADC(28)
#led_vermelho = PWM (Pin(16))
#led_vermelho.freq(1000)
#led_azul = PWM (Pin(17))
#led_azul.freq(1000)
#led_verde = PWM (Pin(18))
#led_verde.freq(1000)

##Iniciando o led desligado
#led_vermelho.duty_u16(0)
#led_azul.duty_u16(0)
#led_verde.duty_u16(0)


#while True:
    
#    leitura_pot = potenciometro.read_u16()
#    led_vermelho.duty_u16(leitura_pot)
    
#    print("Valor leitura Potenciômetro", leitura_pot)
#    sleep(0.001)


#5

