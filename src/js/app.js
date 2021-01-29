var salesData = [
  {
    nombre: "Pedro Sanchez",
    contrato: "1020",
    fecha: "Febrero",
    tipo: "Venta Nueva",
  },
  {
    nombre: "Juan Perez",
    contrato: "1020",
    fecha: "Enero",
    tipo: "Venta Nueva",
  },
  {
    nombre: "Joaquin Rubio",
    contrato: "1020",
    fecha: "Marzo",
    tipo: "Venta Nueva",
  },
  {
    nombre: "Joaquin Rubio",
    contrato: "1020",
    fecha: "Enero",
    tipo: "Venta Nueva",
  },
];

class Venta {
  constructor(nombre, contrato, fecha, tipo) {
    this.nombre = nombre;
    this.contrato = contrato;
    this.fecha = fecha;
    this.tipo = tipo;
  }
}

class UI {
  addSale(nombre, contrato, fecha, tipo) {
    var newSale = {
      nombre: nombre,
      contrato: contrato,
      fecha: fecha,
      tipo: tipo,
    };

    salesData.push(newSale);

    this.resetForm();

    this.showSales();
    debugger;
    chart.updateSeries([
      {
        name: "Ventas",
        data: salesMonths,
      },
      {
        name: "Meta",
        data: [5, 5, 6, 5, 5, 5, 6, 9, 6],
      },
    ]);

    /*         const saleList = document.getElementById('sale-list')
        const element = document.createElement('div')

        element.className = 'list-group-item'
        element.innerHTML = `
            <div>
                <strong>Nombre:</strong> ${sale.nombre}
                <strong>Contrato:</strong> ${sale.contrato}
                <strong>Tipo:</strong> ${sale.tipo}
                <footer class="blockquote-footer">${sale.fecha}</footer>
            </div>
        ` */
    /*saleList.appendChild(element) */
  }

  resetForm() {
    document.getElementById("sale-form").reset();
  }

  showSales() {
    var list = salesData;
    var tbody = document.getElementById("t-body");
    tbody.innerHTML = "";

    for (var i = 0; i < list.length; i++) {
      var row = tbody.insertRow(i);
      var nameCell = row.insertCell(0);
      var contractCell = row.insertCell(1);
      var dateCell = row.insertCell(2);
      var typeCell = row.insertCell(3);

      nameCell.innerHTML = list[i].nombre;
      contractCell.innerHTML = list[i].contrato;
      dateCell.innerHTML = list[i].fecha;
      typeCell.innerHTML = list[i].tipo;
      tbody.appendChild(row);
    }
  }
}

// DOM EVENTS

var ui = new UI();

document.getElementById("sale-form").addEventListener("submit", function (e) {
  const nombre = document.getElementById("name").value;
  const contrato1 = document.getElementById("numberContract").value;
  const contrato = contrato1.toString();
  const fecha = document.getElementById("date").value;
  const tipo = document.getElementById("saleType").value;

  /* const sale = new Venta(nombre, contrato, fecha, tipo) */
  ui.addSale(nombre, contrato, fecha, tipo);

  e.preventDefault();
});

ui.showSales();

let salesMonths = [
  [salesData.filter((sale) => sale.fecha === "Enero")][0].length,
  [salesData.filter((sale) => sale.fecha === "Febrero")][0].length,
  [salesData.filter((sale) => sale.fecha === "Marzo")][0].length,
  [salesData.filter((sale) => sale.fecha === "Abril")][0].length,
  [salesData.filter((sale) => sale.fecha === "Mayo")][0].length,
  [salesData.filter((sale) => sale.fecha === "Junio")][0].length,
  [salesData.filter((sale) => sale.fecha === "Julio")][0].length,
  [salesData.filter((sale) => sale.fecha === "Agosto")][0].length,
  [salesData.filter((sale) => sale.fecha === "Septiembre")][0].length,
];

console.log(salesMonths);

var options = {
  chart: {
    type: "area",
  },
  stroke: {
    curve: "smooth",
  },
  series: [
    {
      name: "Ventas",
      data: salesMonths,
    },
    {
      name: "Meta",
      data: [5, 5, 6, 5, 5, 5, 6, 9, 6],
    },
  ],
  markers: {
    size: 0,
  },
  xaxis: {
    categories: [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
    ],
  },
  dataLabels: {
    enabled: false,
  },
};

var chart = new ApexCharts(document.querySelector("#chart"), options);

chart.render();
