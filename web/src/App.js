import React from 'react';
import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';


function App() {
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div class="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input name="github_username" id="username_github" required />
          </div>

          <div class="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required />
          </div>

          <div className="input-group">
            <div class="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required />
            </div>

            <div class="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required />
            </div>
          </div>
          <button type="submit">Salvar</button>
        </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/42123109?s=460&v=4" alt="Mailson Dias" />
              <div className="user-info">
                <strong>Mailson Dias</strong>
                <span>C#, Html</span>
              </div>
            </header>
            <p>
              Estudante - SENAI/CIMATEC - Análise e Desenvolvimento de Sistemas
            </p>
            <a href="https://github.com/mailsondias7/">Acessar Perfil Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/42123109?s=460&v=4" alt="Mailson Dias" />
              <div className="user-info">
                <strong>Mailson Dias</strong>
                <span>C#, Html</span>
              </div>
            </header>
            <p>
              Estudante - SENAI/CIMATEC - Análise e Desenvolvimento de Sistemas
            </p>
            <a href="https://github.com/mailsondias7/">Acessar Perfil Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/42123109?s=460&v=4" alt="Mailson Dias" />
              <div className="user-info">
                <strong>Mailson Dias</strong>
                <span>C#, Html</span>
              </div>
            </header>
            <p>
              Estudante - SENAI/CIMATEC - Análise e Desenvolvimento de Sistemas
            </p>
            <a href="https://github.com/mailsondias7/">Acessar Perfil Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/42123109?s=460&v=4" alt="Mailson Dias" />
              <div className="user-info">
                <strong>Mailson Dias</strong>
                <span>C#, Html</span>
              </div>
            </header>
            <p>
              Estudante - SENAI/CIMATEC - Análise e Desenvolvimento de Sistemas
            </p>
            <a href="https://github.com/mailsondias7/">Acessar Perfil Github</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
