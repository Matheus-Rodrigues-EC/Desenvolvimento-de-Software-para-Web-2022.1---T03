import React from 'react';
import UFC_FOR from "./../Aula_13-04/IMG/Universidade_Federal_do_Ceará_fortal.png";
//import UFC_QXD from "./../Aula_13-04/IMG/Universidade_Federal_do_Ceará_QXD.jpeg";

const About = () => {
    return(
        <div >
            <h1>Universidade Federal do Ceará</h1>

            <div className="main clearfix" >
                <p> </p>
                <p style={{display: 'block',marginBlockSstart:1, marginBlockEnd:1, marginInlineStart:0, marginInlineEnd:0, textJustify:'justify'}}> 
                <img src={UFC_FOR} alt="Imagem do Campus Fortaleza" style={{width:300, height:200, float:'left', padding:3, marginRight:10}} />
                    A Universidade Federal do Ceará é uma autarquia vinculada ao Ministério da Educação.
                    Nasceu como resultado de um amplo movimento de opinião pública. Foi criada pela Lei nº 2.373,
                    em 16 de dezembro de 1954, e instalada em 25 de junho do ano seguinte.
                </p>
                <p> No início, sob a direção de seu fundador, Prof. Antônio Martins Filho, era constituída pela Escola de Agronomia,
                    Faculdade de Direito, Faculdade de Medicina e Faculdade de Farmácia e Odontologia.
                </p>
                <p> Sediada em Fortaleza, Capital do Estado, a UFC é um braço do sistema do Ensino Superior do Ceará 
                    e sua atuação tem por base todo o território cearense, de forma a atender às diferentes escalas de 
                    exigências da sociedade.
                </p>
                <p> A Universidade é composta de oito campi, denominados Campus do Benfica, Campus do Pici e Campus do Porangabuçu,
                    todos localizados no município de Fortaleza (sede da UFC), além do Campus de Sobral, Campus de Quixadá,
                    Campus de Crateús, Campus de Russas e Campus de Itapajé.
                </p>
                <p> A Universidade Federal do Ceará, que há mais de 65 anos mantém o compromisso de servir à região,
                    sem esquecer o caráter universal de sua produção, chega hoje com praticamente
                    todas as áreas do conhecimento representadas em seus campi
                </p>
            </div>
        </div>
    )
}

export default About;