'use client'
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";
export default function Afis() {
    let [nome,setNome] = useState(undefined)
    let [pacientes,setPacientes] = useState([
        ])
        const[mostrar, setMostrar] = useState(false);

        const [busca,  setBusta] = useState('');
        const nomesBusca = pacientes.filter((paciente) => (paciente.nome.toLowerCase().includes(busca.toLowerCase())));
        const getMedicos = async (nome) => {
            let response = await fetch('https://api-clinica-2a.onrender.com/pacientes');
            let data = await response.json();
            console.log(data)
            if (typeof nome == 'undefined') {
                setPacientes(data);
                
            } else {
                data = data.filter(item => item.nome.toLowerCase().includes(nome.toLowerCase()));
                setPacientes(data);
    
            
                
            }
            
            if (!response.ok) {
                throw new Error('Não foi possível buscar'+ response.statusText);
                }
            
            
    
    
        }
    
        useEffect(()=>{
            getMedicos(nome);
        },[nome]);
    return (
       

        <main className={styles.main}>
        <div className={styles.medicos_conteinar}> 
            <h2 className={styles.h2}> Lista de Paciente</h2>
            <button className={styles.buttonMedic}
            onClick={() =>setMostrar(!mostrar)}
            >Buscar Paciente</button>
            {mostrar &&
            <div className={styles.botao} onClick={() => setMostrar(!mostrar)}>
                <div className={styles.selecione} onClick={(e) => e.stopPropagation()}>
                    <h3>Selecione o Paciente</h3>
                    <input 
                        placeholder="Digite o nome do paciente"
                        type="text"
                        onChange={(e) => setBusta(e.target.value)}
                        value={busca}
                        onClick={() => setMostrar(mostrar)}
                        >

                </input>
                <ul>
                    {nomesBusca.map((md, i) => (
                        <li className={styles.li} key={i}>{md.nome}</li>
                    ))}
                </ul>
            </div>
            
        </div>
    }
        
           
            
            <div className={styles.tabela_Container}>
                <table className={styles.tabela_medic}>
                    <thead className={styles.thead}>
                        <tr className={styles.tr}>
                            <th className={styles.th}>ID</th>
                            <th className={styles.th}>NOME</th>
                            <th className={styles.th}>TELEFONE</th>
                            <th className={styles.th}>EMAIL</th>
                            <th className={styles.th}>CPF</th>
                        </tr>
                    </thead>
                    <tbody className={styles.tbody}>
                    {pacientes.map((paciente)=>(
                        <tr className={styles.tro}  key={paciente.id}>
                            <td className={styles.td}>{paciente.id}</td>
                            <td className={styles.td}>{paciente.nome}</td>
                            <td className={styles.td}>{paciente.telefone}</td>
                            <td className={styles.td}>{paciente.email}</td>
                            <td className={styles.td}>{paciente.cpf}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            </div>

        </main>
    );

}