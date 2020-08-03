import React from 'react';
import './styles.css';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'


function TeacherItem(){
  return(<article className="teacher-item">
  <header>
    <img src="https://avatars1.githubusercontent.com/u/24869058?s=460&u=12bf26c7da3cde3b782447118332f1e93b89789f&v=4" alt="Yan Santana"/>
    <div>
      <strong>Yan Santana Barreiro</strong>
      <span>Programação</span>
    </div>
  </header>

  <p>
    Entusiasta das melhores tecnologias
    <br/><br/>
    Apaixonado por fazer sites
  </p>
  
  <footer>
    <p>
      Preço/hora
      <strong>R$ 80,00</strong>
    </p>
    <button type="button">
      <img src={whatsappIcon} alt="whatsapp"/>
      Entrar em contato
    </button>
  </footer>

</article>)
}

export default TeacherItem;