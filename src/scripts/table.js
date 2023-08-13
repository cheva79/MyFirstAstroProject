document.addEventListener("DOMContentLoaded", function(){
    let selectOption = document.getElementById('SelectJornada')
    let ButtonJornada = document.getElementById("ButtonJornada");
    console.log('SelectOption:',selectOption.value)


    ButtonJornada.addEventListener("click", async () => {
        let file = selectOption.value 

        const data = await fetch('./datatable/La'+file).then((response) =>
            response.json())
            console.log(data);
            // .then((json) => {
                var table = document.getElementById("data-output")  
                table.innerHTML =''   
                for (let i = 0; i < 10; i++){
                    var row = `<tr>
                                    <td>${data.Fecha[i]}</td>
                                    <td>${data.Hora[i]}</td>
                                    <td>${data.ResultadoLocal[i]}</td>
                                    <td>Vs</td>
                                    <td>${data.ResultadoVisitante[i]}</td>
                                    <td>${data.EquipoLocal[i]}</td>
                                    <td>${data.EquipoVisitante[i]}</td>
                                </tr>`
                    table.innerHTML += row}
            })
        // })
})

// D:\Personal\Astro_JS\tremendous-trappist\src\scripts\table.js
// D:\Personal\Astro_JS\tremendous-trappist\src\datatable\LaJornada2.json