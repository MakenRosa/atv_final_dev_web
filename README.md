<h1>Atividade Final Desenvolvimento Web</h1>

<p>Este projeto é uma aplicação web desenvolvida usando Django no backend e React no frontend.</p>

<h2>Pré-requisitos</h2>

<p>Antes de começar, você precisa ter os seguintes softwares instalados no seu computador:</p>
<ul>
  <li><a href="https://git-scm.com">Git</a></li>
  <li><a href="https://www.python.org/downloads/">Python 3.6+</a></li>
  <li><a href="https://nodejs.org/en/download/">Node.js</a></li>
  <li><a href="https://virtualenv.pypa.io/en/latest/installation.html">Virtualenv</a></li>
</ul>

<p>Além disso, é bom ter um editor para trabalhar com o código como <a href="https://code.visualstudio.com/">VSCode</a></p>

<h2>Tecnologias</h2>

<p>Este projeto foi desenvolvido com as seguintes tecnologias:</p>

<ul>
  <li><a href="https://www.python.org/">Python</a></li>
  <li><a href="https://www.djangoproject.com/">Django</a></li>
  <li><a href="https://reactjs.org/">React</a></li>
  <li><a href="https://nodejs.org/en/">Node.js</a></li>
</ul>

<h2>Clonando o Projeto</h2>

<p>Para baixar o projeto, clone este repositório no seu terminal com o seguinte comando:</p>

<pre>
git clone https://github.com/MakenRosa/atv_final_dev_web.git
</pre>

<p>Em seguida, navegue até o diretório do projeto:</p>

<pre>
cd MeuProjetoWeb
</pre>

<h2>Rodando o Backend (Django)</h2>

<p>A partir da raiz do projeto, entre na pasta do backend:</p>

<pre>
cd backend
</pre>

<p>Crie um ambiente virtual e ative-o:</p>

<pre>
python -m venv venv
venv/Scripts/activate
</pre>

<p>Instale as dependências:</p>

<pre>
pip install -r requirements.txt
</pre>

<p>Faça as migrações do banco de dados:</p>

<pre>
python manage.py migrate
</pre>

<p>Inicie o servidor:</p>

<pre>
python manage.py runserver
</pre>

<p>O servidor estará rodando em <code>http://localhost:8000</code>.</p>

<h2>Rodando o Frontend (React)</h2>

<p>A partir da raiz do projeto, entre na pasta do frontend:</p>

<pre>
cd frontend
</pre>

<p>Instale as dependências:</p>

<pre>
npm install
</pre>

<p>Inicie a aplicação:</p>

<pre>
npm start
</pre>

<p>O aplicativo estará rodando em <code>http://localhost:3000</code>.</p>
