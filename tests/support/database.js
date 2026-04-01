// Alterado para Pool (maiúsculo) que é o padrão da biblioteca pg
const { Pool } = require('pg'); 

const DbConfig = {
    user: 'postgres',
    host: 'localhost', // Certifique-se que o container/host 'pgdb' está acessível
    database: 'zombieplus',
    password: 'pwd123',
    port: 5432,
};

export async function executeSQL(sqlscript) {
    // Criamos a instância com letra minúscula usando a classe Pool
    const pool = new Pool(DbConfig);
    
    try {
        const client = await pool.connect();
        const result = await client.query(sqlscript);
        console.log('SQL Executado com sucesso:', result.rows);
        
        // Importante: Liberar o cliente de volta para o pool
        client.release(); 
    } catch (error) {
        console.log('Erro ao executar SQL: ' + error);
    } finally {
        // Encerra o pool para o processo não ficar travado após o teste
        await pool.end();
    }
}
// module.exports = { executeSQL };
