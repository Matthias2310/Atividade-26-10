document.addEventListener('DOMContentLoaded', function () {
const entrarBtn = document.getElementById('entrarBtn');

if (entrarBtn) {
	entrarBtn.addEventListener('click', function () {
		const email = document.getElementById('email').value.trim();
		const senha = document.getElementById('senha').value.trim();
		
        if (!email || !senha) {
			alert('Preencha todos os campos.');
			return;}
			
			window.location.href = 'home.html';
		});
	}

	const enviarLinkBtn = document.getElementById('enviarLinkBtn');
	
    if (enviarLinkBtn) {
		enviarLinkBtn.addEventListener('click', function () {
			const email = document.getElementById('resetEmail').value.trim();
			
            if (!email) {
				alert('Informe um e-mail para recuperação.');
				return;
			}
			
            alert('Link de recuperação enviado para ' + email + ' (simulado).');
			window.location.href = 'index.html';
		});
	}

	const cadastrarBtn = document.getElementById('cadastrarBtn');
	
    if (cadastrarBtn) {
		cadastrarBtn.addEventListener('click', function () {
			const nome = document.getElementById('nome').value.trim();
			const email = document.getElementById('emailCriar').value.trim();
			const senha = document.getElementById('senhaCriar').value.trim();
			
            if (!nome || !email || !senha) {
				alert('Preencha todos os campos do cadastro.');
				return;
			}
			
            alert('Cadastro realizado com sucesso (simulado). Você pode fazer login.');
			window.location.href = 'index.html';
		});
	}

	const sairBtn = document.getElementById('sairBtn');
	if (sairBtn) {
		sairBtn.addEventListener('click', function () {
			window.location.href = 'index.html';
		});
	}
});
