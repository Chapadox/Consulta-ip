import axios from 'axios';
import url from './config.js';
import chalk from 'chalk';

const log = console.log

async function ConsultaIP(){
    const res = await axios.get(url) 
    try {
        log( `Consulta IP
    IP: ${chalk.red(res.data.results.address)}                      
    País: ${chalk.green.overline(res.data.results.country_name)}    
    Cidade: ${chalk.green(res.data.results.city)}                   
    Região: ${chalk.green(res.data.results.region)} 

    ${chalk.bold('Geo localização:')} (Não é 100% preciso)                               
        ${chalk.bold('Latitude:')} ${chalk.red(res.data.results.latitude)}  
        ${chalk.bold('Logitude:')} ${chalk.red(res.data.results.longitude)}

${chalk.bold.black('By: Destr00 || github.com/Chapadox')}
        `)
    }
    catch (err) {
        console.error("Erro no app, consulte o criador RS")
    }
}


ConsultaIP()