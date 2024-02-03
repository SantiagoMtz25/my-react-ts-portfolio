import React from 'react';
import '../components/css_files/PersonalFooter.css';

const PersonalFooter = () => {

  return (
    <>
      <footer className="pie-pagina">
        <div className="grupo-1">
          <div className="box">
            <figure>
              <a href="#">
                <img src="../../yoyo.png" alt="Logo de SLee Dw" />
              </a>
            </figure>
          </div>
          <div className="box">
            <h2>About This Page</h2>
            <p>Small Portfolio page to introduce myself as an enthusiastic programmer eager to keep learning and improving.</p>
            <p>This page is still in progress, I'm looking foward to add more functionalities and better designs.</p>
          </div>
          <div className="box">
            <h2>Connect With Me</h2>
            <div className="red-social">
              <a href="https://github.com/SantiagoMtz25" target="_blank" className="fab fa-github"></a>
              <a href="https://www.linkedin.com/in/santiago-martinez-vallejo/" target="_blank" className="fab fa-linkedin"></a>
              <a href="https://www.instagram.com/santimv11/" target="_blank" className="fab fa-instagram"></a>
              <a href="https://www.chess.com/member/santiagomartinez26" target="_blank" className="fa fa-chess"></a>
            </div>
          </div>
        </div>
        <div className="grupo-2">
          <small>&copy; 2024 <b>Santiago Mtz.</b> - All Rights Reserved.</small>
        </div>
      </footer>
    </>
  );
}

export default PersonalFooter;
