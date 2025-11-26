# Relatórios de BUG


BUG-001

- Título/Resumo: Tela de Login: Campos vazios não permitem login (verificação)
- Módulo Afetado: Tela de Login (`index.html`)
- Ambiente: Sistema Operacional: Windows; Navegador: Chrome
- Etapas para Reproduzir:
  1. Abrir `index.html`.
  2. Deixar os campos "E-mail" e "Senha" vazios.
  3. Clicar em "Entrar".
- Resultado Esperado: Exibir mensagem "Preencha todos os campos." e não redirecionar.
- Resultado Real: Alerta exibido "Preencha todos os campos." e nenhum redirecionamento ocorreu.
- Severidade: (não aplicável) - Comportamento correto
- Prioridade: Low
- Evidência/Anexos: (nenhuma - comportamento conforme esperado)
- Relatado por: João da Silva
- Data do Relato: 26/11/2025


BUG-002

- Título/Resumo: Reset de Senha: validação de e-mail
- Módulo Afetado: Reset (`reset.html`)
- Ambiente: Sistema Operacional: Windows; Navegador: Chrome
- Etapas para Reproduzir:
  1. Abrir `reset.html`.
  2. Deixar o campo e-mail vazio.
  3. Clicar em "Enviar link de recuperação".
- Resultado Esperado: Mostrar alerta pedindo e-mail.
- Resultado Real: Alerta exibido "Informe um e-mail para recuperação." e não houve envio.
- Severidade: (não aplicável) - Comportamento correto
- Prioridade: Low
- Evidência/Anexos: (nenhuma - comportamento conforme esperado)
- Relatado por: João da Silva
- Data do Relato: 26/11/2025


BUG-003

- Título/Resumo: Criar Conta: validação de campos
- Módulo Afetado: Criar Conta (`criar_conta.html`)
- Ambiente: Sistema Operacional: Windows; Navegador: Chrome
- Etapas para Reproduzir:
  1. Abrir `criar_conta.html`.
  2. Deixar algum campo vazio.
  3. Clicar em "Cadastrar".
- Resultado Esperado: Mostrar alerta pedindo preencher todos os campos.
- Resultado Real: Alerta exibido "Preencha todos os campos do cadastro." quando algum campo está vazio.
- Severidade: (não aplicável) - Comportamento correto
- Prioridade: Low
- Evidência/Anexos: (nenhuma)
- Relatado por: João da Silva
- Data do Relato: 26/11/2025


BUG-004

- Título/Resumo: Navegação: link "Criar Conta" e "Esqueci minha senha"
- Módulo Afetado: Navegação (`index.html`)
- Etapas para Reproduzir:
  1. Abrir `index.html`.
  2. Clicar em "Criar Conta" e em seguida em "Esqueci minha senha".
- Resultado Esperado: Acessar `criar_conta.html` e `reset.html` respectivamente.
- Resultado Real: Links funcionais e páginas carregadas corretamente.
- Severidade: Baixa
- Prioridade: Low
- Relatado por: João da Silva
- Data do Relato: 26/11/2025


BUG-005

- Título/Resumo: Home: botão "Sair" redireciona para Login
- Módulo Afetado: Home (`home.html`)
- Etapas para Reproduzir:
  1. Abrir `home.html`.
  2. Clicar em "Sair".
- Resultado Esperado: Redirecionar para `index.html`.
- Resultado Real: Ao clicar em "Sair" houve redirecionamento para `index.html`.
- Severidade: Baixa
- Prioridade: Low
- Relatado por: João da Silva
- Data do Relato: 26/11/2025

