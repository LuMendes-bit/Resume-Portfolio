// Função para carregar os dados do currículo
document.addEventListener('DOMContentLoaded', function() {
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