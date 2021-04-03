function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado == 8)return true;

    var patron = /[0-9\d .]/;

    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);


}

// p1
function interes(){
    var valori = document.formulario.cantidad.value;
    var valoro = document.formulario.meses.value;
    var mes = parseInt(valoro)
    var resultadoo = parseInt(valori);
    var interes = (mes*resultadoo)*0.02;
    var total = resultadoo+interes;

    document.formulario.sueldoti.value = total+" $";
}

function borrar(){
    document.formulario.sueldoti.value = "";
    document.formulario.cantidad.value = "";
    document.formulario.meses.value = "";
}
/*
/
/
/
/
*/
// p2
function comision(){
    var valor = document.formulario.sueldo.value;
    var valor2 = document.formulario.ventas.value;
    var mes = parseInt(valor2)
    var result = parseInt(valor);
    var comision = (mes*result)*0.1;
    var total = result+comision;

    document.formulario.comisionn.value = comision+" $";
    document.formulario.sueldoti.value = total+" $";
}

function borrar2(){
    document.formulario.comisionn.value = "";
    document.formulario.sueldoti.value = "";
    document.formulario.sueldo.value = "";
    document.formulario.ventas.value = "";
}
/*
/
/
/
/
*/
//p3
function descuento(){
    var valorcompra = document.formulario.compra.value;
    var valor_ant = parseInt(valorcompra);
    var finaly = valor_ant * 0.15;

    document.formulario.final.value = (valor_ant - finaly) + " $";
    document.formulario.final_descuento.value = finaly + " $";
}

function borrar3(){
    document.formulario.compra.value = "";
    document.formulario.final.value = "";
    document.formulario.final_descuento.value = "";
}
/*
/
/
/
/
*/
//p4
function calificacion(){
    var valorant = document.formulario.examen_1.value;
    var valor01 = document.formulario.examen_2.value;
    var valor02 = document.formulario.examen_3.value;
    var valor001 = document.formulario.examen_final.value;
    var valor002 = document.formulario.trabajo_final.value;
    var valor_u = parseInt(valorant);
    var valor_ab = parseInt(valor01);
    var valor_ac = parseInt(valor02);
    var valor_v = parseInt(valor001);
    var valor_12 = parseInt(valor002);
    var promedio_examen = (valor_u + valor_ab + valor_ac)/3;
    var promedio = (promedio_examen * 0.55) + (valor_v * 0.30) + (valor_12 * 0.15);

    document.formulario.promedio_final.value = promedio;
}

function borrar4(){
    document.formulario.examen_1.value = "";
    document.formulario.examen_2.value = "";
    document.formulario.examen_3.value = "";
    document.formulario.examen_final.value = "";
    document.formulario.trabajo_final.value = "";
    document.formulario.promedio_final.value = "";
}
/*
/
/
/
/
*/
//p5
function porcentaje(){
    var valorz = document.formulario.nm.value;
    var valorano = document.formulario.nh.value;
    var uno_uno = parseInt(valorz);
    var dos_dos = parseInt(valorano);
    var papure = uno_uno+dos_dos;
    var resultadototal = (dos_dos*100)/papure;
    var resultadototal = (uno_uno*100)/papure;

    document.formulario.hombres.value = resultadototal + "%";
    document.formulario.mujeres.value = resultadototal + "%";
}

function borrar5(){
    document.formulario.nm.value = "";
    document.formulario.nh.value = "";
    document.formulario.hombres.value = "";
    document.formulario.mujeres.value = "";
}
/*
/
/
/
/
*/
//p6
function calculo(){
    var valorp = document.formulario.año_actual.value;
    var valorpo = document.formulario.año_nacer.value;
    var valor_aa = parseInt(valorp);
    var valor_bb = parseInt(valorpo);
    var final = valor_aa - valor_bb;
    if (valor_aa <= valor_bb) {
        window.alert("Digite un año válido, por favor.");
    } else {
        document.formulario.final.value = final + " años";
    }
}

function borrar6(){
    document.formulario.año_actual.value = "";
    document.formulario.año_nacer.value = "";
    document.formulario.final.value = "";
}
/*
/
/
/
/
*/
//p7
function operacion(){
    var valor0 = document.formulario.num_1.value;
    var valor1 = document.formulario.num_2.value;
    var valor_a = parseInt(valor0);
    var valor_b = parseInt(valor1);
    
    if (valor_a == valor_b) {
        var num_3 = valor_a * valor_b;
    } else if (valor_a > valor_b) {
        var num_3 = valor_a - valor_b;
    } else {
        var num_3 = valor_a + valor_b;
    }

    document.formulario.final_num.value = num_3;
}

function borrar7(){
    document.formulario.num_1.value = "";
    document.formulario.num_2.value = "";
    document.formulario.final_num.value = "";
}
/*
/
/
/
/
*/
//p8
function mayor(){
    var valor0 = document.formulario.num_1.value;
    var valor1 = document.formulario.num_2.value;
    var valor2 = document.formulario.num_3.value;
    var valor_a = parseInt(valor0);
    var valor_b = parseInt(valor1);
    var valor_c = parseInt(valor2);
    
    if (valor_a > valor_b) {
        if (valor_a > valor_c) {
            var num_3 = valor_a;
        }
        else{
            var num_3 = valor_c;
        }
    } else if (valor_a == valor_b == valor_c) {
        var num_3 = "Son iguales."
    } else {
        if (valor_b > valor_c) {
            var num_3 = valor_b;
        } else {
            var num_3 = valor_c;
        }
    }

    document.formulario.final_num.value = num_3;
}

function borrar8(){
    document.formulario.num_1.value = "";
    document.formulario.num_2.value = "";
    document.formulario.num_3.value = "";
    document.formulario.final_num.value = "";
}
/*
/
/
/
/
*/
//p9
function sueldo(){
    var valor0 = document.formulario.hora.value;
    var valor1 = document.formulario.pago.value;
    var valor_a = parseInt(valor0);
    var valor_b = parseInt(valor1);
    
    if (valor_a > 48) {
        var trabajo = valor_a - 48;
        var total = 40 * valor_b + (8 * valor_b * 2) + (trabajo * valor_b * 3);
    } else {
        if (valor_a > 40) {
            var trabajo_alt = valor_a - 40;
            var total = 40 * valor_b + (trabajo_alt * valor_b * 2)
        } else {
            var total = valor_a * valor_b;
        }
    }

    document.formulario.sueldo.value = total + " $";
}

function borrar9(){
    document.formulario.hora.value = "";
    document.formulario.pago.value = "";
    document.formulario.sueldo.value = "";
}
/*
/
/
/
/
*/
//p10
function utilidad(){
    var valor0 = document.formulario.sueldo.value;
    var valor1 = document.formulario.exp.value;
    var valor_a = parseInt(valor0);
    var valor_b = parseInt(valor1);
    
    if (valor_b < 1) {
        var utilidad = valor_a * 0.05;
    } else {
        if (valor_b >= 1, valor_b < 2) {
            var utilidad = valor_a * 0.07;
        } else {
            if (valor_b >= 2, valor_b < 5){
                var utilidad = valor_a * 0.10;
            } else {
                if (valor_b >= 5, valor_b < 10) {
                    var utilidad = valor_a * 0.15;
                } else {
                    if (valor_b >= 10) {
                        var utilidad = valor_a * 0.20;
                    }
                }
            }
            
        }
    }

    document.formulario.utilidad_final.value = utilidad + " $";
    document.formulario.sueldo_final.value = (utilidad + valor_a) + " $";
}

function borrar10(){
    document.formulario.sueldo.value = "";
    document.formulario.exp.value = "";
    document.formulario.utilidad_final.value = "";
    document.formulario.sueldo_final.value = "";
}