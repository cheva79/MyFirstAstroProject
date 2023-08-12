
let selectOption = document.getElementById('SelectJornada')

let ButtonJornada = document.getElementById("ButtonJornada");
console.log('SelectOption:',selectOption)

ButtonJornada.addEventListener("click",() => {
    let file = selectOption.value 
    fetch('./La'+file+'.json')
    .then((response) => response.json())
    .then((json) => {
        var table = document.getElementById("data-output")  
        table.innerHTML =''   
        for (let i = 0; i < 10; i++){
            var row = `<tr>
                            <td>${json.Fecha[i]}</td>
                            <td>${json.Hora[i]}</td>
                            <td>${json.ResultadoLocal[i]}</td>
                            <td>Vs</td>
                            <td>${json.ResultadoVisitante[i]}</td>
                            <td>${json.EquipoLocal[i]}</td>
                            <td>${json.EquipoVisitante[i]}</td>
                        </tr>`
            table.innerHTML += row}
        })
    })

