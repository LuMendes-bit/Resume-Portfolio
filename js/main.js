// Função para carregar os dados do currículo
// Função para gerenciar tema
function initTheme() {
    const themeSwitch = document.getElementById('theme-switch');
    const html = document.documentElement;
    const savedTheme = localStorage.getItem('theme') || 'light';
    
    // Aplicar tema salvo
    html.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
    
    themeSwitch.addEventListener('click', () => {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });
}

function updateThemeIcon(theme) {
    const icon = document.querySelector('.theme-switch i');
    if (icon) {
        icon.className = theme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
    }
}

// Função para adicionar animações aos elementos
function addAnimations() {
    const sections = document.querySelectorAll('.section-content');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeIn 0.5s ease forwards';
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => observer.observe(section));
}

document.addEventListener('DOMContentLoaded', function() {
    // Inicializar tema
    initTheme();
    
    // Adicionar animações
    addAnimations();
    
    // Configurar seções colapsáveis
    const sections = document.querySelectorAll('.section-collapsible');
    sections.forEach(section => {
        const header = section.querySelector('.section-header');
        header.addEventListener('click', () => {
            section.classList.toggle('active');
        });
    });

    // Configurar botão de download
    document.getElementById('download-cv').addEventListener('click', function() {
        // Criar um objeto com os dados formatados para PDF
        const cvData = {
            nome: dadosCurriculo.pessoal.nome,
            contato: `${dadosCurriculo.pessoal.email}\n${dadosCurriculo.pessoal.telefone}`,
            experiencias: dadosCurriculo.experiencias.map(exp => 
                `${exp.cargo} - ${exp.empresa}\n${exp.periodo}\n${exp.descricao}`
            ).join('\n\n'),
            educacao: dadosCurriculo.educacao.map(edu =>
                `${edu.curso}\n${edu.instituicao} (${edu.periodo})`
            ).join('\n\n'),
            habilidades: dadosCurriculo.habilidades.join(', ')
        };

        // Criar o conteúdo do arquivo
        const content = `
${cvData.nome}
${dadosCurriculo.pessoal.titulo}

Contato:
${cvData.contato}

Sobre:
${dadosCurriculo.sobre}

Experiência Profissional:
${cvData.experiencias}

Educação:
${cvData.educacao}

Habilidades:
${cvData.habilidades}
        `.trim();

        // Criar e baixar o arquivo
        const blob = new Blob([content], { type: 'text/plain' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${dadosCurriculo.pessoal.nome.replace(/\s+/g, '_')}_CV.txt`;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
    });
    // Carregar informações pessoais
    document.getElementById('nome').textContent = dadosCurriculo.pessoal.nome;
    document.getElementById('titulo').textContent = dadosCurriculo.pessoal.titulo;
    document.getElementById('contato').innerHTML = `
        Email: ${dadosCurriculo.pessoal.email}<br>
        Telefone: ${dadosCurriculo.pessoal.telefone}<br>
        LinkedIn: ${dadosCurriculo.pessoal.linkedin}<br>
        GitHub: ${dadosCurriculo.pessoal.github}
    `;

    // Carregar seção sobre
    document.getElementById('descricao').textContent = dadosCurriculo.sobre;

    // Carregar experiências
    const experienciasContainer = document.getElementById('experiencias-lista');
    dadosCurriculo.experiencias.forEach(exp => {
        const expElement = document.createElement('div');
        expElement.className = 'experiencia-item';
        expElement.innerHTML = `
            <h3>${exp.cargo}</h3>
            <p class="periodo">${exp.periodo}</p>
            <p><strong>${exp.empresa}</strong></p>
            <p>${exp.descricao}</p>
        `;
        experienciasContainer.appendChild(expElement);
    });

    // Carregar educação
    const educacaoContainer = document.getElementById('educacao-lista');
    dadosCurriculo.educacao.forEach(edu => {
        const eduElement = document.createElement('div');
        eduElement.className = 'educacao-item';
        eduElement.innerHTML = `
            <h3>${edu.curso}</h3>
            <p class="periodo">${edu.periodo}</p>
            <p><strong>${edu.instituicao}</strong></p>
            <p>${edu.descricao}</p>
        `;
        educacaoContainer.appendChild(eduElement);
    });

    // Carregar habilidades
    const habilidadesContainer = document.getElementById('habilidades-lista');
    dadosCurriculo.habilidades.forEach(hab => {
        const habElement = document.createElement('span');
        habElement.className = 'habilidade';
        habElement.textContent = hab;
        habilidadesContainer.appendChild(habElement);
    });
});