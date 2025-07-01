document.addEventListener('DOMContentLoaded', () => {
    const diasGrid = document.querySelector('.dias-grid');
    const diarioInterativoSection = document.getElementById('diario-interativo');
    const tituloDiarioDia = document.getElementById('dia-atual-numero');
    const visualizacaoAnotacoes = document.getElementById('visualizacao-anotacoes');
    const formDiario = document.getElementById('form-diario');
    const btnSalvarDiario = document.getElementById('btn-salvar-diario');
    const btnCancelarDiario = document.getElementById('btn-cancelar-diario');
    const btnEditarDiario = document.getElementById('btn-editar-diario');
    const btnExcluirDiario = document.getElementById('btn-excluir-diario');

    // Mapeamento dos campos do formulário para as chaves do objeto de anotação
    const camposDiario = {
        tempoSemRedes: document.getElementById('tempoSemRedes'),
        comoMeSenti: document.getElementById('comoMeSenti'),
        oQueFizOrgulho: document.getElementById('oQueFizOrgulho'),
        oQueAprendi: document.getElementById('oQueAprendi'),
        msgEuFuturo: document.getElementById('msgEuFuturo'),
        gatilhosDesafios: document.getElementById('gatilhosDesafios'),
        tentarAmanha: document.getElementById('tentarAmanha')
    };

    let diaAtual = null; // Variável para armazenar o dia selecionado

    // Array de emojis para cada estágio da jornada
    const emojisJornada = [
        '😵', '😐', '😐', '😐', '😊', '😊', '😊', '😎', '😎', '😎',
        '😇', '😇', '😇', '😇', '😇', '🥳', '🥳', '🥳', '🥳', '🥳',
        '🏆', '🏆', '🏆', '🏆', '🏆', '🌟', '🌟', '🌟', '🌟', '🚀'
    ];

    // Função para adicionar emojis aos dias ao carregar a página
    const adicionarEmojisAosDias = () => {
        const diasLi = diasGrid.querySelectorAll('li');
        diasLi.forEach((li, index) => {
            const diaNum = parseInt(li.dataset.dia);
            if (diaNum >= 1 && diaNum <= emojisJornada.length) {
                const emojiSpan = document.createElement('span');
                emojiSpan.classList.add('emoji');
                emojiSpan.textContent = emojisJornada[diaNum - 1]; // -1 porque array é base 0
                li.querySelector('a').prepend(emojiSpan); // Adiciona o emoji antes do texto do link
            }
        });
    };

    adicionarEmojisAosDias(); // Chama a função para adicionar emojis ao carregar

    // Função para carregar uma anotação do localStorage
    const carregarAnotacao = (dia) => {
        const anotacaoJSON = localStorage.getItem(`diario_dia_${dia}`);
        try {
            return anotacaoJSON ? JSON.parse(anotacaoJSON) : {}; // Retorna um objeto vazio se não houver anotação ou JSON inválido
        } catch (e) {
            console.error("Erro ao parsear anotação do localStorage:", e);
            localStorage.removeItem(`diario_dia_${dia}`); // Limpa dados corrompidos
            return {};
        }
    };

    // Função para salvar uma anotação no localStorage
    const salvarAnotacao = (dia, dadosDiario) => {
        localStorage.setItem(`diario_dia_${dia}`, JSON.stringify(dadosDiario));
        alert(`Anotação do Dia ${dia} salva com sucesso!`);
    };

    // Função para excluir uma anotação do localStorage
    const excluirAnotacao = (dia) => {
        localStorage.removeItem(`diario_dia_${dia}`);
        alert(`Anotação do Dia ${dia} excluída!`);
    };

    // Função para exibir a visualização ou o formulário e rolar
    const exibirDiarioSection = (tipo) => { // 'visualizacao' ou 'formulario'
        const anotacaoSalva = carregarAnotacao(diaAtual);
        tituloDiarioDia.textContent = diaAtual; // Atualiza o número do dia no título

        const temAnotacao = Object.keys(anotacaoSalva).length > 0 &&
                             Object.values(anotacaoSalva).some(value => value && value.trim() !== ''); // Garante que o valor existe antes de trim

        if (tipo === 'visualizacao') {
            if (temAnotacao) {
                visualizacaoAnotacoes.querySelector('.mensagem-sem-anotacao').style.display = 'none';
                for (const key in camposDiario) {
                    const spanElement = visualizacaoAnotacoes.querySelector(`[data-campo="${key}"]`); // Correção aqui: aspas duplas
                    if (spanElement) {
                        spanElement.textContent = anotacaoSalva[key] || 'Não informado';
                        spanElement.parentElement.style.display = 'block'; // Mostra todos os campos se houver anotação
                    }
                }
            } else {
                visualizacaoAnotacoes.querySelector('.mensagem-sem-anotacao').style.display = 'block';
                visualizacaoAnotacoes.querySelectorAll('.campo-diario-viz').forEach(el => el.style.display = 'none');
            }
            visualizacaoAnotacoes.style.display = 'block';
            formDiario.style.display = 'none';
        } else { // tipo === 'formulario'
            for (const key in camposDiario) {
                if (camposDiario[key]) {
                    camposDiario[key].value = anotacaoSalva[key] || '';
                }
            }
            visualizacaoAnotacoes.style.display = 'none';
            formDiario.style.display = 'block';
        }
        
        diarioInterativoSection.style.display = 'block'; // Mostra a seção interativa
        
        // Timeout para garantir que o DOM foi renderizado antes do scroll
        setTimeout(() => {
            diarioInterativoSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100); // Pequeno atraso de 100ms
    };

    // Event listener para cliques nos dias
    diasGrid.addEventListener('click', (event) => {
        const clickedLi = event.target.closest('li[data-dia]');
        if (clickedLi) {
            diaAtual = parseInt(clickedLi.dataset.dia);
            exibirDiarioSection('visualizacao'); // Chama a nova função unificada
        }
    });

    // Event listener para o botão Salvar
    btnSalvarDiario.addEventListener('click', (event) => {
        event.preventDefault(); // Evita o recarregamento da página do formulário
        if (diaAtual) {
            const dadosParaSalvar = {};
            for (const key in camposDiario) {
                if (camposDiario[key]) {
                    dadosParaSalvar[key] = camposDiario[key].value.trim();
                }
            }
            salvarAnotacao(diaAtual, dadosParaSalvar);
            exibirDiarioSection('visualizacao'); // Atualiza a visualização após salvar
        }
    });

    // Event listener para o botão Cancelar
    btnCancelarDiario.addEventListener('click', () => {
        exibirDiarioSection('visualizacao'); // Volta para a visualização
    });

    // Event listener para o botão Editar
    btnEditarDiario.addEventListener('click', () => {
        exibirDiarioSection('formulario'); // Abre o formulário
    });

    // Event listener para o botão Excluir
    btnExcluirDiario.addEventListener('click', () => {
        if (confirm(`Tem certeza que deseja excluir as anotações do Dia ${diaAtual}?`)) {
            excluirAnotacao(diaAtual);
            exibirDiarioSection('visualizacao'); // Atualiza a visualização para "nenhuma anotação"
        }
    });
});