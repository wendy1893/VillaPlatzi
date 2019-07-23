var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");

var mapa = "tile.png";

var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
}
document.addEventListener("keydown", moverPollos);
document.addEventListener("mouseup", dibujarMouse);

function dibujarMouse(mouse)
{
  console.log(mouse);
  xi = mouse.layerX; //0  0
  yi = mouse.layerY;// 10  80
  elegirAnimal();
}

var fondo = {
  url: "tile.png",
  cargaOK : false
  };

var vaca = {
  url: "vaca.png",
  cargaOK: false
  };

var cerdo = {
  url: "cerdo.png",
  cargaOK: false
  };

var pollo = {
  url: "pollo.png",
  cargaOK: false
  };

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollos);

function cargarFondo()
{
  fondo.cargaOK = true;
  dibujar();
}

function cargarVacas()
{
  vaca.cargaOK = true;
  dibujar();
}

function cargarCerdos()
{
  cerdo.cargaOK = true;
  dibujar();
}

function cargarPollos()
{
  pollo.cargaOK = true;
  dibujar();
}


function dibujar()
{
  if(fondo.cargaOK == true) // tambien se puede quitar el true y dejar solo (fondo.cargaOk) porque compara si es verdadero
    {
      papel.drawImage(fondo.imagen, 0 , 0); // se le pasa la imagen totalmente cargada y las coordenadas donde estará
    }
  if(vaca.cargaOK == true)
    {
      var cantidadVacas = aleatorio(1 , 30);
      posicionVacasX = [cantidadVacas];
      posicionVacasY = [cantidadVacas];
      console.log("Hay " + cantidadVacas + " vacas.");
      for (var v=0; v < cantidadVacas; v++)
        {
          var x = aleatorio(0 , 7);
          var y = aleatorio(0 , 7);
          x = x * 60;
          y = y * 60;
          posicionVacasX[v] = x;
          posicionVacasY[v] = y;
          papel.drawImage(vaca.imagen, x , y); // se le pasa la imagen totalmente cargada y las coordenadas donde estará
        }
    }

  if(cerdo.cargaOK)
    {
      var cantidadCerdos = aleatorio(1 , 15);
      posicionCerdosX = [cantidadCerdos];
      posicionCerdosY = [cantidadCerdos];
      console.log("Hay " + cantidadCerdos + " cerdos.");
      for (var c=0; c < cantidadCerdos; c++)
        {
          var x = aleatorio(0 , 7);
          var y = aleatorio(0 , 7);
          x = x * 60;
          y = y * 60;
          posicionCerdosX[c] = x;
          posicionCerdosY[c] = y;
          papel.drawImage(cerdo.imagen, x , y); // se le pasa la imagen totalmente cargada y las coordenadas donde estará
        }
      }

    if(pollo.cargaOK)
      {
        for (var p=0; p < 1; p++)
          {
            dibujarPollo(pollo.imagen, posicionInicialXPollos, posicionInicialYPollos); //= papel.drawImage(pollo.imagen, posicionInicialXPollos , posicionInicialXPollos); // se le pasa la imagen totalmente cargada y las coordenadas donde estará
          }
        }
}
function dibujarPollo(x,y,z)
{
  papel.drawImage(x, y , z); // se le pasa la imagen totalmente cargada y las coordenadas donde estará
}

var posicionInicialXPollos = aleatorio(0 , 7);
var posicionInicialYPollos = aleatorio(0 , 7);
posicionInicialXPollos = posicionInicialXPollos * 60;
posicionInicialYPollos = posicionInicialYPollos * 60;

var posicionFinX = posicionInicialXPollos + 80; // 100
var posicionFinY = posicionInicialYPollos + 80; // 180

function elegirAnimal()
  {
    console.log("valor x en el pollo " + posicionInicialXPollos);
    console.log("valor y en el pollo " + posicionInicialYPollos);
    console.log("valor x en el click " + xi);
    console.log("valor y en el click " + yi);
    if (xi <= posicionFinX && yi <= posicionFinY)
      {
        console.log("tienes al pollo en el click XD");
        moverPollos(teclas);
      }
    }

function moverPollos(evento)
  {
    movimiento = 30;
    //console.log(evento.keyCode);
    if (evento.keyCode == teclas.UP)
      {
        dibujarPollo(pollo.imagen, posicionInicialXPollos, posicionInicialYPollos - movimiento);
        posicionInicialYPollos = posicionInicialYPollos - movimiento;
        reDibujar();
      }
    if (evento.keyCode == teclas.DOWN)
      {
        dibujarPollo(pollo.imagen, posicionInicialXPollos, posicionInicialYPollos + movimiento);
        posicionInicialYPollos = posicionInicialYPollos + movimiento;
        reDibujar();
      }
    if (evento.keyCode == teclas.LEFT)
      {
        dibujarPollo(pollo.imagen, posicionInicialXPollos- movimiento, posicionInicialYPollos);
        posicionInicialXPollos = posicionInicialXPollos - movimiento;
        reDibujar();
      }
      if (evento.keyCode == teclas.RIGHT)
        {
          dibujarPollo(pollo.imagen, posicionInicialXPollos + movimiento, posicionInicialYPollos);
          posicionInicialXPollos = posicionInicialXPollos + movimiento;
          reDibujar();
        }
    }

function reDibujar()
{
  if(fondo.cargaOK == true) // tambien se puede quitar el true y dejar solo (fondo.cargaOk) porque compara si es verdadero
    {
      papel.drawImage(fondo.imagen, 0 , 0); // se le pasa la imagen totalmente cargada y las coordenadas donde estará
    }
  if(vaca.cargaOK == true)
    {
      for (var i=0; i < posicionVacasX.length; i++)
        {
          papel.drawImage(vaca.imagen, posicionVacasX[i] , posicionVacasY[i]); // se le pasa la imagen totalmente cargada y las coordenadas donde estará
        }
    }

  if(cerdo.cargaOK)
    {
      for (var i=0; i < posicionCerdosX.length; i++)
        {
          papel.drawImage(cerdo.imagen, posicionCerdosX[i] , posicionCerdosY[i]); // se le pasa la imagen totalmente cargada y las coordenadas donde estará
        }
      }

    if(pollo.cargaOK)
      {
        for (var p=0; p < 1; p++)
          {
            dibujarPollo(pollo.imagen, posicionInicialXPollos, posicionInicialYPollos); //= papel.drawImage(pollo.imagen, posicionInicialXPollos , posicionInicialXPollos); // se le pasa la imagen totalmente cargada y las coordenadas donde estará
          }
        }

}
//function borrarPolloAnte()
//{
//papel.clearRect(posicionInicialXPollos,posicionInicialYPollos, 40, 40); //papel.clearRect(0,0,vp.width,vp.height)
//}


var cantidadPollos = aleatorio(1 , 10);
console.log("Hay " + cantidadPollos + " pollos.");


function aleatorio(min, maxi)
{
  var resultado;
  resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
  return resultado;
}
//Crar 10 numeros aleatorios y escribirlos en el document separados por coma.
//var z;
//for (var i=0; i<10; i++)
//{
 //z = aleatorio(10 , 20);
  //document.write(z + ", ");
//}
