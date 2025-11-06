<div align="center">

# 🚀 Portfólio Pessoal & Currículo Digital

<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5"/>
<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3"/>
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript"/>
<img src="https://img.shields.io/badge/GitHub_Pages-222222?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Pages"/>

**Um portfólio moderno, responsivo e elegante construído com tecnologias web fundamentais**

[🌐 Ver Demo](https://seu-usuario.github.io/seu-repositorio) 

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)

</div>

---

## 📋 Índice

- [✨ Sobre o Projeto](#-sobre-o-projeto)
- [🎯 Features](#-features)
- [🎨 Preview](#-preview)
- [🚀 Como Usar](#-como-usar)
- [📁 Estrutura do Projeto](#-estrutura-do-projeto)
- [⚙️ Personalização](#️-personalização)
- [🛠️ Tecnologias](#️-tecnologias)
- [📱 Responsividade](#-responsividade)
- [📄 Licença](#-licença)

---

## ✨ Sobre o Projeto

Este é um **portfólio pessoal ** e **currículo digital interativo** desenvolvido com as melhores práticas de desenvolvimento web.

---

## 🎯 Features

### 💼 Página de Currículo
- ✅ Informações pessoais editáveis
- ✅ Upload de foto de perfil
- ✅ Seções colapsáveis (Sobre, Experiência, Educação, Habilidades)
- ✅ Links para redes sociais (LinkedIn, GitHub)
- ✅ Botão de download de CV

### 🚀 Página de Projetos
- ✅ Cards de projetos com descrição
- ✅ Badges de tecnologias utilizadas
- ✅ Links para demo e repositório GitHub
- ✅ Layout em grid responsivo

### 📬 Página de Contato
- ✅ Formulário funcional com validação
- ✅ Mensagens de sucesso/erro
- ✅ Design intuitivo e limpo

### 🎨 Recursos Gerais
- ✅ Tema claro/escuro com persistência
- ✅ Navegação suave entre páginas
- ✅ Animações e transições elegantes
- ✅ Ícones do Font Awesome
- ✅ Fonte Google Roboto

---

## 🎨 Preview

<div align="center">

### 🖥️ Desktop

![Desktop Preview](https://via.placeholder.com/800x400/4A90E2/FFFFFF?text=Desktop+Preview)

### 📱 Mobile

<img src="https://via.placeholder.com/300x600/4A90E2/FFFFFF?text=Mobile+Preview" alt="Mobile Preview" width="300"/>

### 🌓 Tema Escuro

![Dark Theme](https://via.placeholder.com/800x400/1a1a1a/FFFFFF?text=Dark+Theme+Preview)

</div>

---

## 🚀 Como Usar

### Opção 1: Deploy no GitHub Pages

1. **Fork este repositório**
   ```bash
   # Clique no botão "Fork" no topo desta página
   ```

2. **Clone seu fork**
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   cd seu-repositorio
   ```

3. **Configure o GitHub Pages**
   - Vá em `Settings` → `Pages`
   - Em `Source`, selecione `main` branch e `/ (root)` folder
   - Clique em `Save`

4. **Acesse seu site**
   ```
   https://seu-usuario.github.io/seu-repositorio
   ```

### Opção 2: Executar Localmente

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/seu-repositorio.git

# Entre na pasta
cd seu-repositorio

# Abra com um servidor local (exemplo com Python)
python -m http.server 8000

# Ou use a extensão Live Server do VS Code
# Ou simplesmente abra o index.html no navegador
```

---

## 📁 Estrutura do Projeto

```
📦 portfolio-curriculo
├── 📄 index.html                 # Página principal (currículo)
├── 📄 README.md                  # Este arquivo
│ 
├── 📂 Pages/
│   ├── 📄 projetos.html             # Página de projetos
│   ├── 📄 contato.html              # Página de contato
│
├── 📂 css/
│   ├── 🎨 style.css             # Estilos globais
│   ├── 🎨 nav.css               # Estilos da navegação
│   ├── 🎨 curriculum.css        # Estilos do currículo
│   ├── 🎨 projetos.css          # Estilos dos projetos
│   └── 🎨 contato.css           # Estilos do contato
│
├── 📂 js/
│   ├── ⚙️ dados.js              # Dados do currículo (edite aqui!)
│   ├── ⚙️ theme.js              # Lógica de tema claro/escuro
│   └── ⚙️ main.js               # Scripts principais
│
└── 📂 assets/
    └── 🖼️ perfil-foto.jpg       # Sua foto de perfil
```

---

## ⚙️ Personalização

### 1️⃣ Editar seus dados

Abra o arquivo `js/dados.js` e modifique suas informações:

```javascript
const dadosCurriculo = {
    nome: "Seu Nome Completo",
    titulo: "Sua Profissão",
    email: "seu.email@exemplo.com",
    telefone: "(00) 00000-0000",
    localizacao: "Sua Cidade, Estado",
    linkedin: "https://linkedin.com/in/seu-perfil",
    github: "https://github.com/seu-usuario",
    
    sobre: "Sua descrição profissional aqui...",
    
    experiencias: [
        {
            cargo: "Cargo",
            empresa: "Nome da Empresa",
            periodo: "Jan 2020 - Atual",
            descricao: "Descrição das suas responsabilidades..."
        }
    ],
    
    educacao: [
        {
            curso: "Nome do Curso",
            instituicao: "Nome da Instituição",
            periodo: "2018 - 2022",
            descricao: "Descrição..."
        }
    ],
    
    habilidades: [
        { nome: "JavaScript", nivel: 90 },
        { nome: "HTML/CSS", nivel: 95 },
        { nome: "React", nivel: 85 }
    ],
    
    projetos: [
        {
            titulo: "Nome do Projeto",
            descricao: "Descrição do projeto...",
            tecnologias: ["HTML", "CSS", "JS"],
            demo: "https://demo-url.com",
            github: "https://github.com/repo"
        }
    ]
};
```

### 2️⃣ Adicionar sua foto

Substitua o arquivo `assets/perfil-foto.jpg` pela sua foto ou use o botão de upload na própria página!

### 3️⃣ Personalizar cores

Edite `css/style.css` para alterar o esquema de cores:

```css
:root {
    --primary-color: #4A90E2;      /* Cor principal */
    --secondary-color: #2ECC71;    /* Cor secundária */
    --background: #ffffff;         /* Fundo claro */
    --text-color: #333333;         /* Texto claro */
}

[data-theme="dark"] {
    --background: #1a1a1a;         /* Fundo escuro */
    --text-color: #e0e0e0;         /* Texto escuro */
}
```

---

## 🛠️ Tecnologias

<div align="center">

| Tecnologia | Descrição |
|-----------|-----------|
| ![HTML5](https://img.shields.io/badge/-HTML5-E34F26?style=flat-square&logo=html5&logoColor=white) | Estrutura e marcação semântica |
| ![CSS3](https://img.shields.io/badge/-CSS3-1572B6?style=flat-square&logo=css3&logoColor=white) | Estilização e animações |
| ![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black) | Interatividade e lógica |
| ![Font Awesome](https://img.shields.io/badge/-Font_Awesome-339AF0?style=flat-square&logo=font-awesome&logoColor=white) | Ícones |
| ![Google Fonts](https://img.shields.io/badge/-Google_Fonts-4285F4?style=flat-square&logo=google&logoColor=white) | Tipografia (Roboto) |

</div>

---

## 📱 Responsividade

O projeto é totalmente responsivo e foi testado em:

- 🖥️ **Desktop** (1920px+)
- 💻 **Laptop** (1024px - 1919px)
- 📱 **Tablet** (768px - 1023px)
- 📱 **Mobile** (320px - 767px)

### Breakpoints

```css
/* Mobile First */
@media (min-width: 768px)  { /* Tablet */ }
@media (min-width: 1024px) { /* Desktop */ }
@media (min-width: 1440px) { /* Large Desktop */ }

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

```
MIT License

Copyright (c) 2024 Seu Nome

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software")...
```
---

```
<div align="center">


### ⭐ Se este projeto te ajudou, considere dar uma estrela!

**Feito com ❤️ e muito ☕**

![Visitors](https://visitor-badge.laobi.icu/badge?page_id=seu-usuario.seu-repositorio)

</div>
```
