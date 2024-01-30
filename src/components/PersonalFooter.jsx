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
            <h2>About Page</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, ipsa?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, ipsa?</p>
          </div>
          <div className="box">
            <h2>Connect With Me</h2>
            <div className="red-social">
              <a href="https://github.com/SantiagoMtz25" className="fa fa-facebook"></a>
              <a href="https://www.linkedin.com/in/santiago-martinez-vallejo/" className="fa fa-instagram"></a>
              <a href="https://www.instagram.com/santimv11/" className="fa fa-twitter"></a>
              <a href="https://www.chess.com/member/santiagomartinez26" className="fa fa-youtube"></a>
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
