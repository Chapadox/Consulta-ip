import axios from 'axios';
import url from './config.js';
import chalk from 'chalk';
import readline from 'readline'

const log = console.log

async function ConsultaIP(ip){
    const res = await axios.get(url + ip) 
    try {
        FormatarDados(res)
    }
    catch (err) {
        console.error(err)
    }
}

function FormatarDados (dados) {
    log( `Consulta IP
    IP: ${chalk.red(dados.data.results.address)}                      
    País: ${chalk.green.overline(dados.data.results.country_name)}    
    Cidade: ${chalk.green(dados.data.results.city)}                   
    Região: ${chalk.green(dados.data.results.region)} 

    ${chalk.bold('Geo localização:')} (Não é 100% preciso)                               
        ${chalk.bold('Latitude:')} ${chalk.red(dados.data.results.latitude)}  
        ${chalk.bold('Logitude:')} ${chalk.red(dados.data.results.longitude)}

${chalk.bold.black('By: Destr00 || github.com/Chapadox')}`)

}


const prompt = readline.createInterface({ 
    input: process.stdin,
    output: process.stdout
})

prompt.question('Informe um IP para consulta:', ip => {
    const input = ip
    prompt.close()
    ConsultaIP(input)
})