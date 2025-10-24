// Espera o carregamento total da página
document.addEventListener('DOMContentLoaded', () => {

    const form = document.querySelector('form');
    const horasInput = document.querySelector('input[name="horas"]');
    const precoHoraInput = document.querySelector('input[name="preco_hora"]');

    // Validação simples: impedir valores negativos ou vazios
    form.addEventListener('submit', (e) => {
        const horas = parseFloat(horasInput.value);
        const preco = parseFloat(precoHoraInput.value);

        if (isNaN(horas) || horas <= 0 || isNaN(preco) || preco <= 0) {
            e.preventDefault(); // impede o envio do formulário
            alert('Por favor, insira valores válidos (maiores que zero).');
        }
    });

    // Cálculo instantâneo no front-end (opcional)
    const preview = document.createElement('p');
    preview.style.marginTop = '10px';
    form.appendChild(preview);

    horasInput.addEventListener('input', atualizarPreview);
    precoHoraInput.addEventListener('input', atualizarPreview);

    function atualizarPreview() {
        const horas = parseFloat(horasInput.value);
        const preco = parseFloat(precoHoraInput.value);
        
        if (!isNaN(horas) && !isNaN(preco)) {
            const total = (horas * preco).toFixed(2);
            preview.textContent = `Prévia: R$ ${total}`;
        } else {
            preview.textContent = '';
        }
    }
});
