'use client'
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";
export default function Afis() {
    let [nome, setNome] = useState(undefined)

    let [consultas, setConsultas] = useState([])

    const [mostrar, setMostrar] = useState(false);
    const [busca, setBusca] = useState('');
    const nomi = consultas.filter((consulta) => (consulta.medico.toLowerCase().includes(busca.toLowerCase())));
    const noms = consultas.filter((consulta) => (consulta.paciente.toLowerCase().includes(busca.toLowerCase())));
    const getConsultas = async (nome) => {
        let response = await fetch('https://api-clinica-2a.onrender.com/pacientes');
        let data = await response.json();
        console.log(data)

        if (typeof nome == 'undefined') {
            setConsultas(data);
        } else {
            data = data.filter(item => item.nome.toLowerCase().includes(nome.toLowerCase()));
            setConsultas(data);
        }

        if (!response.ok) {
            throw new Error('Não foi possível buscar' + response.statusText);
        }
    }

    useEffect(() => {
        getConsultas(nome);
    }, [nome]);
    return (


        <main className={styles.main}>
            <div className={styles.medicos_conteinar}>
                <h2 className={styles.h2}> Lista de Consultas</h2>
                <button className={styles.buttonMedic}
                onClick={() => setMostrar(!mostrar)}
                >Buscar por Médicos</button>
                {mostrar &&
                    <div className={styles.botao} onClick={() => setMostrar(!mostrar)}>
                        <div className={styles.selecione} onClick={(e) => e.stopPropagation()}>
                            <h3>Selecione um Médico</h3>
                            <input
                                placeholder="Digite o nome do médico"
                                type="text"
                                onChange={(e) => setBusca(e.target.value)}
                                value={busca}
                                onClick={() => setMostrar(mostrar)}
                                > 
                            </input>
                            <ul>
                                {nome.map((md, i) => (
                                    <li className={styles.li} key={i}>{md.medico}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                }
                
                <button className={styles.buttonMedic}
                onClick={() => setMostrar(!mostrar)}
                >Buscar por Paciente</button>
                {mostrar &&
                    <div className={styles.botao} onClick={() => setMostrar(!mostrar)}>
                        <div className={styles.selecione} onClick={(e) => e.stopPropagation()}>
                            <h3>Selecione um Paciente</h3>
                            <input
                                placeholder="Digite o nome do paciente"
                                type="text"
                                onChange={(e) => setBusca(e.target.value)}
                                value={busca}
                                onClick={() => setMostrar(mostrar)}
                                > 
                            </input>
                            <ul>
                                {noms.map((pd, i) => (
                                    <li className={styles.li} key={i}>{pd.paciente}</li>
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
                                <th className={styles.th}>MEDICO</th>
                                <th className={styles.th}>ESPECIALIDADE</th>
                                <th className={styles.th}>PACIENTE</th>
                                <th className={styles.th}>TIPO</th>
                            </tr>
                        </thead>
                        <tbody className={styles.tbody}>
                            {consultas.map((consultas) => (
                                <tr className={styles.tro} key={consultas.id}>
                                    <td className={styles.td}>{consultas.id}</td>
                                    <td className={styles.td}>{consultas.medico}</td>
                                    <td className={styles.td}>{consultas.especialidade}</td>
                                    <td className={styles.td}>{consultas.paciente}</td>
                                    <td className={styles.td}>{consultas.tipo}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </main>

    );

}
