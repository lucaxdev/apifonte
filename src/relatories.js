const sql = require("mssql");

const user = "root";
const pass = "Lucas180699";
const server = "localhost";
const database = "fonte";

class ProductionEmployee {
    async getAll() {
      try {
        await sql.connect(`mssql://${user}:${pass}@${server}/${database}`);
        const result = await sql.query`SELECT
                                        p.nome as name,
                                        p.classificacao_id,
                                        p.nivel_id,
                                        p.horario_id,
                                        n.descricao as nome_nivel,
                                        hi.inicio as inicio, 
                                        hi.fim as fim
                                      FROM 
                                        dbo.pessoas AS p 
                                        JOIN dbo.niveis AS n ON n.id = p.nivel_id
                                        JOIN dbo.niveis_itens AS ni ON ni.nivel_id = p.nivel_id
                                        LEFT JOIN dbo.horarios_itens AS hi ON hi.horario_id = ni.horario_id
                                      WHERE  
                                        estado = 0
                                        AND n_identificador != 'Null' 
                                        ORDER BY hi.horario_id DESC 
                                             `;
        return result.recordset;
      } catch (err) {
        console.log(err);
        // ... error checks
      }
    }
    
  }
  
  module.exports = new ProductionEmployee();
  
