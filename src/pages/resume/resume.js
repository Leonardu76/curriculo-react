import React from "react";
import "./resume.css";
import Menu from "../../components/menu/menu";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdOutlineHomeWork, MdOutlineWorkOutline } from "react-icons/md";
import { AiOutlineDownload } from "react-icons/ai";
import Curriculo from "../../assets/pdf/Leonardo Souza.pdf";

const Resume = () => {
  let url = "resume";

  return (
    <>
      <Menu url={url} />
      <div className="container col-12 col-md-9 col-lg-12">
        <div className=" content-resume row">
          <div className="btn-resume-content">
            <button className=" button-inter item9 btn-resume">
              <a href={Curriculo} download style={{ color: "white" }}>
                <AiOutlineDownload />
              </a>

              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </button>
            <span className="resume-text-spam">Baixar currículo</span>
          </div>
          <div className="home">
            <h1 className="content-resume-title">Experiências</h1>

            <VerticalTimeline>
              <VerticalTimelineElement
                icon={<MdOutlineWorkOutline />}
                date="10/2023 – Present"
              >
                <h3 className="resume-title">Team leader</h3>
                <h4 className="resume-title">Construsite Brasil</h4>
                <div class="resume-description-container">
                  <ul class="resume-description">
                    <li>
                      Lidero um squad de desenvolvimento focado em criar e
                      manter sites e sistemas web robustos, garantindo qualidade
                      e performance.
                    </li>
                    <li>
                      Desenvolvimento, correções e manutenção de aplicações PHP.
                    </li>
                    <li>
                      Criação e consumo de APIs para integração de sistemas
                      utilizando o Laravel.
                    </li>
                    <li>
                      Criação e manutenção de projetos front-end com React,
                      garantindo interfaces modernas e responsivas.
                    </li>
                    <li>
                      Utilização de jQuery, incluindo integração de AJAX,
                      plugins e outras tecnologias, para aprimorar a
                      interatividade de sites.
                    </li>
                    <li>
                      Gestão e acompanhamento de Planos de Desenvolvimento
                      Individual (PDI) dos colaboradores do squad, promovendo
                      crescimento profissional.
                    </li>
                    <li>
                      Realizo reuniões diárias para acompanhar tarefas,
                      identificar obstáculos e garantir o cumprimento de prazos
                      e metas.
                    </li>
                    <li>
                      Apoio contínuo à equipe, fomentando o aprimoramento
                      técnico e comportamental dos desenvolvedores.
                    </li>
                    <li>
                      Definição de boas práticas e arquitetura de software,
                      assegurando código limpo e escalável.
                    </li>
                  </ul>
                </div>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                icon={<MdOutlineWorkOutline />}
                date="12/2022 – 10/2023"
              >
                <h3 className="resume-title">Desenvolvedor Web jr I</h3>
                <h4 className="resume-title">Construsite Brasil</h4>
                <div class="resume-description-container">
                  <ul class="resume-description">
                    <li>Desenvolvimento de aplicações web com PHP.</li>
                    <li>
                      Criação e consumo de APIs para integração de sistemas
                      utilizando o Laravel.
                    </li>
                    <li>
                      Utilização de jQuery para aprimorar a interatividade de
                      sites.
                    </li>
                    <li>
                      Criação, implementação e correção de bugs em sites e
                      sistemas como: sites, intranet e CMS.
                    </li>
                  </ul>
                </div>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                icon={<MdOutlineWorkOutline />}
                date="08/2022 – 12/2022"
              >
                <h3 className="resume-title">
                  Estagiário em Desenvolvimento Web
                </h3>
                <h4 className="resume-title">Construsite Brasil</h4>
                <p className="resume-description">
                  Programação, alteração e correção de sites em PHP.
                </p>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                icon={<MdOutlineHomeWork />}
                date="02/2022 – 06/2022"
              >
                <h3 className="resume-title">Whobots</h3>
                <h4 className="resume-title">Desenvolvedor Python</h4>
                <p className="resume-description">
                  Auxílio no desenvolvimento de chatbots para o Telegram.
                </p>
              </VerticalTimelineElement>
            </VerticalTimeline>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;
