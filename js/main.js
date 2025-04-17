///////////////////////////////////////////////////////////////////////////////////////

//Hola! Gracias a sus recomendaciones cambie la idea de mi codigo, intentare
//crear un gestor de productos para una tienda, se puede agregar un producto con
//un nombre cualquiera y un precio cualquiera que sera dividido entre un numero de
//cuotas predeterminado (1, 3, 6, 12) elegidas por el usuario, puede almacenar,
//cargar y borrar los datos ingresados en el local storage, espero y les guste y cumpla
//los requisitos necesarios! Gracias!!

///////////////////////////////////////////////////////////////////////////////////////

// funcion 1
function Producto(nombre, precio, cuotas) {
    this.nombre = nombre;
    this.precio = parseFloat(precio);
    this.cuotas = parseInt(cuotas);
    this.totalCuota = function () {
      return (this.precio / this.cuotas).toFixed(2);
    };
  }
  
  // dom acceso
  let productos = [];
  
  const nombreInput = document.getElementById("nombre");
  const precioInput = document.getElementById("precio");
  const cuotasSelect = document.getElementById("cuotas");
  const agregarBtn = document.getElementById("agregarBtn");
  
  const listaProductos = document.getElementById("lista-productos");
  
  const guardarBtn = document.getElementById("guardarBtn");
  const cargarBtn = document.getElementById("cargarBtn");
  const borrarBtn = document.getElementById("borrarBtn");

  // funcion cuotas
  function calcularCuotas(precio, cuotas) {
    return (precio / cuotas).toFixed(2);
  }
  
  // funcion agregar productos
  function agregarProducto(nombre, precio, cuotas) {
    const nuevoProducto = new Producto(nombre, precio, cuotas);
    productos.push(nuevoProducto);
    mostrarProductos(productos);
  }
  
  // mostrar en dom
  function mostrarProductos(array) {
    listaProductos.innerHTML = ""; // Limpiar lista antes de renderizar
  
    for (const prod of array) {
      const item = document.createElement("li");
      item.innerHTML = `
        <strong>${prod.nombre}</strong> - $${prod.precio} 
        (${prod.cuotas} cuotas de $${prod.totalCuota()})
      `;
      listaProductos.appendChild(item);
    }
  }
  
  agregarBtn.addEventListener("click", () => {
    const nombre = nombreInput.value.trim();
    const precio = precioInput.value;
    const cuotas = cuotasSelect.value;

    if (nombre && precio && cuotas) {
      agregarProducto(nombre, precio, cuotas);
      nombreInput.value = "";
      precioInput.value = "";
      cuotasSelect.value = "6";
    } else {
      alert("Por favor completá todos los campos.");
    }
  });
  
  // guardar en local
  guardarBtn.addEventListener("click", () => {
    localStorage.setItem("productos", JSON.stringify(productos));
    alert("Productos guardados correctamente.");
  });
  
  // cargar desde local
  cargarBtn.addEventListener("click", () => {
    const data = localStorage.getItem("productos");
    if (data) {
      const objData = JSON.parse(data);
      productos = objData.map(obj => new Producto(obj.nombre, obj.precio, obj.cuotas));
      mostrarProductos(productos);
    }
  });
  
  // borrar local
  borrarBtn.addEventListener("click", () => {
    localStorage.removeItem("productos");
    productos = [];
    mostrarProductos(productos);
  });
  