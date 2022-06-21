import Facebook from "../../static/images/icon-facebook-gray.svg";
import Twitter from "../../static/images/icon-twitter-gray.svg";
import Youtube from "../../static/images/icon-youtube-gray.svg";
import Instagram from "../../static/images/icon-instagram-gray.svg";
import Logo from "../../static/images/logo.jpg";

import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <span className="footer-container__explore">Explore por cidades</span>
        <section className="footer-container__cities">
          <ul className="footer-container__cities-list">
            <li className="footer-container__cities-list-item">
              Belo Horizonte
            </li>
            <li className="footer-container__cities-list-item">Brasília</li>
            <li className="footer-container__cities-list-item">Campinas</li>
            <li className="footer-container__cities-list-item">Curitiba</li>
            <li className="footer-container__cities-list-item">Goiânia</li>
            <li className="footer-container__cities-list-item">Guarulhos</li>
            <li className="footer-container__cities-list-item">João Pessoa</li>
            <li className="footer-container__cities-list-item">Natal</li>
            <li className="footer-container__cities-list-item">Niterói</li>
            <li className="footer-container__cities-list-item">Porto Alegre</li>
            <li className="footer-container__cities-list-item">
              Ribeirão Preto
            </li>
            <li className="footer-container__cities-list-item">
              Rio de Janeiro
            </li>
            <li className="footer-container__cities-list-item">Salvador</li>
            <li className="footer-container__cities-list-item">Santo André</li>
            <li className="footer-container__cities-list-item">Santos</li>
            <li className="footer-container__cities-list-item">
              São Bernardo do Campo
            </li>
            <li className="footer-container__cities-list-item">
              São Caetano do Sul
            </li>
            <li className="footer-container__cities-list-item">São Paulo</li>
          </ul>
        </section>
        <div className="footer-container__info">
          <section className="footer-container__info-first">
            <p className="footer-container__info-title">iFood</p>
            <ul className="footer-container__info-first-list">
              <li className="footer-container__info-first-list-item">
                Site Institucional
              </li>
              <li className="footer-container__info-first-list-item">
                Fale conosco
              </li>
              <li className="footer-container__info-first-list-item">
                Carreiras
              </li>
              <li className="footer-container__info-first-list-item">
                iFood Colômbia
              </li>
            </ul>
          </section>
          <section className="footer-container__info-first">
            <div className="footer-container__info-title">Descubra</div>
            <ul className="footer-container__info-first-list">
              <li className="footer-container__info-first-list-item">
                Cadastre seu Restaurante ou Mercado
              </li>
              <li className="footer-container__info-first-list-item">
                iFood Shop
              </li>
              <li className="footer-container__info-first-list-item">
                iFood Card
              </li>
              <li className="footer-container__info-first-list-item">
                Blog iFood Empresas
              </li>
            </ul>
          </section>
          <section className="footer-container__info-first">
            <div className="footer-container__info-title">Social</div>
            <div className="footer-container__info-content">
              <img
                className="footer-container__info-content-img"
                src={Facebook}
                alt="ícone facebook'"
              />
              <img
                className="footer-container__info-content-img"
                src={Twitter}
                alt="ícone twitter"
              />
              <img
                className="footer-container__info-content-img"
                src={Youtube}
                alt="ícone youtube"
              />
              <img
                className="footer-container__info-content-img"
                src={Instagram}
                alt="ícone instagram"
              />
            </div>
          </section>
        </div>
        <div className="footer-container-copyright">
          <div className="footer-container-copyright-content">
            <img src={Logo} width="90px" />
            <div className="footer-container-copyright-content-info">
              <p className="footer-container-copyright-content-info-text">
                © Copyright 2021 - iFood - Todos os direitos reservados iFood
                com Agência de Restaurantes Online S.A.
              </p>
              <p className="footer-container-copyright-content-info-date">
                CNPJ 14.380.200/0001-21 / Avenida dos Autonomistas, nº 1496,
                Vila Yara, Osasco/SP - CEP 06.020-902
              </p>
            </div>
          </div>
          <div className="footer-container-copyright-topics">
            <span className="footer-container-copyright-topics-text">
              Termos e condições de uso
            </span>
            <span className="footer-container-copyright-topics-text">
              Código de conduta
            </span>
            <span className="footer-container-copyright-topics-text">
              Privacidade
            </span>
            <span className="footer-container-copyright-topics-text">
              Dicas de segurança
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
