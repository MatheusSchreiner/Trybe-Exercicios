### 1. 
~~~
db.clientes.aggregate([
  {
    $match: {
      sexo: "MASCULINO",
    },
  },
]);
~~~
<br>

### 2. 
~~~
db.clientes.aggregate([
  { 
    $match: { 
      sexo: "FEMININO",
      dataNascimento: {
        $gte: ISODate("1995-01-01"),
        $lte: ISODate("2005-12-31"),
      },
    },
  },
]);
~~~
<br>

### 3. 
~~~
db.clientes.aggregate([
  { $match: { 
      sexo: "FEMININO",
      dataNascimento: {
        $gte: ISODate("1995-01-01"),
        $lte: ISODate("2005-12-31"),
      },
    },
  },
  {
    $limit: 5,
  },
]);
~~~
<br>

### 4. 
~~~
db.clientes.aggregate([
  {
    $match: { "endereco.uf": "SC" },
  },
  {
    $group: {
      _id: "$endereco.uf",
      count: { $sum: 1 },
    },
  },
]);
~~~
<br>

### 5. 
~~~
db.clientes.aggregate([
  {
    $group: {
      _id: "$sexo",
      total: {
        $sum: 1
      },
    },
  },
]);

~~~
<br>

### 6. 
~~~
db.clientes.aggregate([
  {
    $group: {
      _id: {
        sexo: "$sexo",
        uf: "$endereco.uf",
      },
      total: {
        $sum: 1
      },
    },
  },
]);
~~~
<br>

### 7. 
~~~
db.clientes.aggregate([
  {
    $group: {
      _id: {
        sexo: "$sexo",
        estado: "$endereco.uf",
      },
      total: { $sum: 1 },
    },
  },
  {
    $project: {
      _id: 0,
      estado: "$_id.estado",
      sexo: "$_id.sexo",
      total: "$total",
    },
  },
]);
~~~
<br>

### 8. 
~~~
db.vendas.aggregate([
  {
    $match: {
      status: { $in: ["ENTREGUE", "EM SEPARACAO"] }
    }
  },
  {
    $group: {
       _id: "$clienteId",
       valorTotal: {
          $sum: "$valorTotal"
       }
    }
  },
  {
    $sort: {
      valorTotal: -1
    }
  },
  {
    $limit: 5
  }
]);
~~~
<br>

### 9. 
~~~
db.vendas.aggregate([
  {
    $match: { 
      status: "ENTREGUE",
      dataVenda: { 
        $gte: ISODate("2019-01-01"), 
        $lte: ISODate("2019-12-31"),
      },
    },
  },
  {
    $group: {
      _id: {
        cliente: "$clientId",
        valor: "$valorTotal",
      },
    },
  },
  {
    $sort: {
      valor: -1,
    },
  },
  {
    $limit: 10,
  },
]);
~~~
<br>

### 10. 
~~~
db.vendas.aggregate([
  {
    $group: {
      _id: "$clienteId",
      totalCompras: {
        $sum: 1
      }
    }
  },
  {
    $match: {
      totalCompras: { $gt: 5 }
    }
  },
  {
    $group: {
      _id: null,
      clientes: { $sum: 1 }
    }
  },
  { $project: { _id: 0 } }
]);

ou

db.vendas.aggregate([
  {
    $group: {
      _id: "$clienteId",
      totalCompras: {
        $sum: 1
      }
    }
  },
  {
    $match: {
      totalCompras: { $gt: 5 }
    }
  },
  {
    $count: 'clientes'
  },
]);

ou

db.vendas.aggregate([
  {
    $match: {
      status: {
        $in: ["EM SEPARACAO", "ENTREGUE"],
      },
    },
  },
  {
    $group: {
      _id: "$clienteId",
        totalDeCompras: {
          $sum: 1,
        },
      },
  },
  {
    $match: {
      totalDeCompras: { $gte: 5 },
    },
  },
  {
    $count: 'clientes'
  },
]);
~~~
<br>

### 11. 
~~~
db.vendas.aggregate([
  {
    $match: {
      status: {
        $in: ["EM SEPARACAO", "ENTREGUE"],
      },
      dataVenda: {
        $gte: ISODate("2020-01-01"),
        $lte: ISODate("2020-03-31"),
      },
    },
  },
  {
    $group: {
      _id: "$clienteId",
        totalDeCompras: {
          $sum: 1,
        },
      },
  },
  {
    $match: {
      totalDeCompras: { $lte: 3 },
    },
  },
  {
    $count: 'clientes'
  },
]);
~~~
<br>

### 12. 
~~~
db.vendas.aggregate([
  {
    $match: {
      dataVenda: {
        $gte: ISODate('2020-01-01'),
        $lt: ISODate('2021-01-01'),
      }
    }
  },
  {
    $lookup: {
      from: 'clientes',
      localField: 'clienteId',
      foreignField: 'clienteId',
      as: 'dadosCliente'
    }
  },
  {
    $unwind: "$dadosCliente"
  },
  {
    $group: {
      _id: "$dadosCliente.endereco.uf",
      totalVendas: {
        $sum: 1
      }
    }
  },
  {
    $sort: {
      totalVendas: -1
    }
  },
  { $limit: 3 },
  {
    $project: {
      _id: 0,
      uf: "$_id",
      totalVendas: 1
    }
  }
]);
~~~
<br>

### 13. 
~~~
db.vendas.aggregate([
  {
    $match: {
      dataVenda: {
        $gte: ISODate('2019-01-01'),
        $lte: ISODate('2019-12-31')
      }
    }
  },
  {
    $lookup: {
      from: 'clientes',
      localField: 'clienteId',
      foreignField: 'clienteId',
      as: 'cliente'
    }
  },
  {
    $unwind: "$cliente"
  },
  {
    $group: {
      _id: "$cliente.endereco.uf",
      mediaVendas: { $avg: "$valorTotal" },
      totalVendas: { $sum: 1 }
    }
  },
  {
    $project: {
      _id: 0,
      uf: "$_id",
      mediaVendas: 1,
      totalVendas: 1
    }
  },
  {
    $sort: {
      uf: 1
    }
  }
]);
~~~
<br>
