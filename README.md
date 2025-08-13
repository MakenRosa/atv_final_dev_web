
# 📚 Sistema Acadêmico — Atividade Final (Desenvolvimento Web – ADS)

> **Status:** Arquivado / Projeto acadêmico  
> **Contexto:** Trabalho final da disciplina de **Desenvolvimento Web** do curso de **ADS**.  
> **Stack:** **Django + Django REST Framework (backend)** e **React (frontend)**.  
> **Última atualização do código:** 2023 (há +2 anos).

Este repositório implementa um CRUD simples para **Turmas**, **Alunos**, **Notas** e **Frequências**, com relacionamento **N:N** entre alunos e turmas via a tabela intermediária **StudentGroup**. A aplicação expõe uma API REST (Django/DRF) consumida por um SPA em React.

---

## ✨ Funcionalidades

- **Turmas (Group):** cadastro, listagem, edição e visualização com alunos vinculados.
- **Alunos (Student):** cadastro, filtros de busca, edição e visualização.
- **Notas (Score):** registro e edição de notas por aluno/turma.
- **Frequências (Attendance):** registro e edição de presença/falta por aluno/turma.
- **Admin Django:** gerenciamento via `/admin/`.

---

## 🧱 Arquitetura & Módulos

```

backend/          # API REST (Django 4.2 + DRF)
app/
groups/       # Turmas
students/     # Alunos
student\_group/# Relação Aluno–Turma + Notas + Frequências
settings/       # Configurações do projeto Django (SQLite, CORS, etc.)

frontend/         # SPA em React (CRA, React 18, Bootstrap)
src/pages/      # Páginas: cadastro/consulta de aluno, turma, nota, frequência
src/components/ # Navbar, Modais e Fields
src/endpoints/  # Consumo da API

````

**Modelos principais:**

- `Group(id, name, date)`
- `Student(...)` com `ManyToManyField(Group, through=StudentGroup)`
- `StudentGroup(id, student, group)`
- `Score(id, score, date, student_group)`  
- `Attendance(id, attendance, date, student_group)`

---

## 🧩 Rotas da Interface (Frontend)

- `/` — Home  
- `/cadastro-aluno`, `/consulta-aluno`  
- `/cadastro-turma`, `/consulta-turma`  
- `/cadastro-nota`, `/consulta-nota`  
- `/cadastro-frequencia`, `/consulta-frequencia`

O frontend consome a API configurada em `frontend/src/endpoints/settings.js`:

```js
const API_URL = "http://localhost:8000/api/v1";
````

---

## 🔌 Endpoints REST (v1)

Base: `http://localhost:8000/api/v1`

### Turmas

* `GET /group/` — lista turmas
* `POST /group/` — cria turma `{ "name": "...", "date": "YYYY-MM-DD" }`
* `GET /group/{id}/` — retorna turma com alunos, notas e frequências (aninhados)
* `PATCH /group/{id}/` — atualiza parcial `{ "name": "...", "date": "YYYY-MM-DD" }`

**Exemplo de resposta de `GET /group/{id}/` (reduzido):**

```json
{
  "id": 1,
  "name": "devweb",
  "date": "2023-05-04",
  "group_student": [
    {
      "id": 1,                   // <-- StudentGroup.id
      "student": { "id": 7, "full_name": "Fulano" },
      "scores":    [{ "id": 1, "score": 10.0, "date": "2023-06-09", "student_group": 1 }],
      "attendances":[{ "id": 1, "attendance": 1, "student_group": 1 }]
    }
  ]
}
```

### Alunos

* `GET /students/` — lista/alunos com filtros

  * Filtros implementados no backend: `name`, `class_id`, `registration`
* `GET /students/{id}/` — detalhe do aluno (inclui `groups`)
* `POST /students/` — cria aluno (**usa PKs de `groups`**):

```json
{
  "full_name": "Nome Sobrenome",
  "contact_number": "xxxx",
  "phone_number": "xxxx",
  "date_of_birth": "YYYY-MM-DD",
  "street": "Rua X",
  "number": "123",
  "extra": "Apto 1",
  "neighborhood": "Bairro",
  "city": "Cidade",
  "state": "UF",
  "groups": [1]
}
```

* `PATCH /students/{id}/` — atualização parcial (mesmos campos)

> 💡 **Observação:** no frontend, a busca usa o parâmetro `groups`, porém o `FilterSet` do backend espera `class_id`. Se necessário, ajuste o frontend para `?class_id=<id-da-turma>`.

### Notas

* `POST /score/` — cria nota `{ "score": 9.5, "date": "YYYY-MM-DD", "student_group": 1 }`
* `PATCH /score/{id}/` — atualiza parcial `{ "score": 8.0, "date": "YYYY-MM-DD" }`

### Frequências

* `POST /attendance/` — cria frequência `{ "attendance": 1, "date": "YYYY-MM-DD", "student_group": 1 }`

  * `attendance`: `1` (faltou) / `0` (não faltou)
* `PATCH /attendance/{id}/` — atualiza parcial

---

## 🛠️ Requisitos

### Backend

* Python **3.8+** (recomendado 3.10+)
* Django **4.2.1**
* Django REST Framework **3.14.0**
* SQLite (padrão)

### Frontend

* Node.js **16+** (recomendado 18+)
* React **18** (Create React App)
* Bootstrap 5

---

## ▶️ Como rodar localmente

> Clone o repositório (use a URL do seu fork/clone):

```bash
git clone <URL_DO_REPOSITORIO>
cd <PASTA_DO_REPOSITORIO>
```

### 1) Backend (Django)

```bash
cd backend
python -m venv venv
# Windows
venv\Scripts\activate
# Linux/Mac
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

* API: `http://localhost:8000/api/v1`
* Admin: `http://localhost:8000/admin` (crie um usuário com `python manage.py createsuperuser`)

### 2) Frontend (React)

Em outro terminal:

```bash
cd frontend
npm install
npm start
```

* SPA: `http://localhost:3000`

> Se rodar o backend em outra porta/host, ajuste `frontend/src/endpoints/settings.js` (`API_URL`).

---

## 🔒 Observações importantes (Acadêmico)

* **DEBUG=True**, **SECRET\_KEY** no repositório e **CORS liberado** (`CORS_ORIGIN_ALLOW_ALL=True`): **não** use em produção.
* **Sem autenticação** e **sem autorização** — projeto didático.
* **SQLite** por padrão, sem seeds.
* Algumas convenções são de 2023 e podem estar desatualizadas (ex.: `default_app_config` não é mais necessário no Django 4+).

---

## 🧪 Fluxo didático sugerido

1. Cadastre uma **Turma** (`/cadastro-turma` ou `POST /group/`).
2. Cadastre **Alunos** vinculando-os à turma.
3. Use **Consulta de Turma** para ver o vínculo (`GET /group/{id}/`).
4. Lance **Frequências** e **Notas** pelo frontend ou via API usando o **`student_group.id`** retornado em `GET /group/{id}/`.

---

## 🐞 Pontos a melhorar / conhecidos

* Ajustar o parâmetro de filtro do frontend (`groups` → `class_id`) para alinhar com o `FilterSet`.
* Validações e mensagens de erro mais robustas no backend.
* Remover configs inseguras (DEBUG, SECRET\_KEY) e configurar CORS por ambiente.
* Adicionar testes automatizados.

---

## 📄 Licença

Este projeto está licenciado sob a **MIT License**. Veja o arquivo [`LICENSE`](./LICENSE).

---

## 👤 Autor

© 2022-2023 **Maken Cristhian** — projeto acadêmico (ADS).

