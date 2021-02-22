# Recuperação de senha

**RF**
- O usuário deve poder recuperar a sua senha informando o seu e-mail;
- O usuário deve receber um e-mail com instruções de recuperação de senha;
- O usuário deve poder resetar a sua senha;

**RNF**
- Utilizar MailTrap para testar envios em ambiente de desenvolvimento;
- Utilizar Amazon SES para envios em produção;
- O envio de e-mails deve acontecer em segundo plano (background job);

**RN**
- O link enviado por e-mail para resetar a senha deve expirar em 2 horas;
- O usuário precisa confirmar a nova senha ao resetar a sua senha;

# Atualização do perfil

**RF**
- O usuário deve poder atualizar o seu nome, email e senha;

**RN**
- O usuário não pode alterar o seu e-mail para um e-mail já utilizado por outro usuário
- Para atualizar a sua senha, o usuário deve informar a senha antiga
- Para atualizar a sua senha, o usuário precisa confirmar a senha antiga

# Painel do prestador

**RF**
- O usuário deve poder listar os seus agendamentos de um dia especifico
- O prestador deve receber uma notificaçao sempre que houver um novo agendamento;
- O prestador deve poder visualizar as notificações não lidas;

**RNF**
- Os agendamentos do pretador no dia deve ser armazenado em cache;
- As notificações do prestador deve ser armazenadas no MongoDB;
- As notificações do prestador deve ser enviada em tempo real utilizando Socket.io;


**RN**
- A notificacao deve ter um status de lida ou não lida para que o prestador possa controlar;

# Agendamento de serviços

**RF**
- O usuário deve poder listar todo os prestadores de serviços cadastrados;
- O usuário deve poder listarr os dias de um mês com pelo menos um horario disponivel de um prestador;
- O usuário deve poder listar os horários disponíveis em um dia específico de um prestador;
- O usuário deve poder realizar um novo agendamento como um prestador;

**RNF**
- A listagem de prestadores deve ser armazenada em cache;


**RN**
- Cada agendamento deve durar exatamente 1h
- Os agendamentos devem está disponiveis entre 8h as 18hrs (Primeiro as 8h e o ultimo as 11h);
- O usuário não pode agendar em um horário já ocupado;
- O usuário não pode agendar em um horário que já passou;
- O usuário não pode agendar serviços consigo mesmo;


