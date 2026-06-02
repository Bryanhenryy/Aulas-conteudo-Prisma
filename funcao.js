function converteTemperatura(celsius){
    let fahrenheit = (celsius * 9 / 5 ) + 32
    let kelvin = celsius+ 273.15
    console.log(' Temperatura ' + celsius + ' C é igual a ' + fahrenheit + ' f e ' + kelvin + ' K ')
    return[fahrenheit,kelvin]
 }
 
let temp = converteTemperatura(25)
 converteTemperatura(60)
 converteTemperatura(10)
 converteTemperatura(40)

 console.log(temp)
