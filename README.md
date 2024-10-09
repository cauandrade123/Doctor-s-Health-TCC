create database db_tcc;
use db_tcc;

create table tb_agenda(
id_agenda int primary key auto_increment,
dia_horario datetime unique

);


create table consulta(
id_consulta int primary key auto_increment,
id_agenda int,
tratamento varchar(244),
condicao varchar(100),
medicacao varchar(200),
preco decimal(10,2),
id_paciente          int,
finalizadaboolean,
foreign key(id_agenda) references tb_agenda(id_agenda),
foreign key(id_paciente) references tb_auto_cadastro(id_paciente)
);


create table tb_auto_cadastro(
id_paciente int primary key auto_increment,
nome           varchar(100),
nascimento              date,
rg              varchar(20) unique,
cpf               varchar(20) unique,
metodo_pagamento varchar(20),
telefone varchar(11),
id_agendaint,
foreign key(id_agenda) references tb_agenda(id_agenda)
);

create table tb_cadastrado(
id_cadastrado  int primary key auto_increment,
cpf varchar(20),
metodo_pagamento varchar(20),
id_agenda int,
foreign key(id_agenda) references tb_agenda(id_agenda),
foreign key(cpf) references tb_auto_cadastro(cpf)
);




create table tb_login(
id_login   int primary key auto_increment,
email        varchar(255),
senha        varchar(255)
);

INSERT INTO tb_agenda (dia_horario) VALUES
('2024-10-01 10:00:00'),
('2024-10-02 14:30:00'),
('2024-10-03 09:15:00');

INSERT INTO tb_auto_cadastro (nome, nascimento, rg, cpf, metodo_pagamento, telefone) VALUES
('João Silva', '1985-05-20', '123456789', '123.456.789-00', 'Cartão', '11987654321'),
('Maria Oliveira', '1990-08-15', '987654321', '987.654.321-00', 'Dinheiro', '11876543210'),
('Carlos Pereira', '1978-02-10', '555555555', '555.555.555-00', 'Cheque', '11765432109');

INSERT INTO consulta (id_agenda, tratamento, condicao, medicacao, preco, id_paciente, finalizada) VALUES
(1, 'Limpeza Dental', 'Saudável', 'Fluoreto', 150.00, 1, true),
(2, 'Restauração', 'Cárie', 'Analgésico', 300.00, 2, true),
(3, 'Consulta de Rotina', 'Saudável', 'Nenhuma', 100.00, 3, false);

INSERT INTO tb_cadastrado (cpf, metodo_pagamento, id_agenda) VALUES
('123.456.789-00', 'Cartão', 1),
('987.654.321-00', 'Dinheiro', 2);


 SELECT 
tb_agenda.dia_horario,
   tb_auto_cadastro.nome,
tb_auto_cadastro.rg,
    tb_auto_cadastro.nascimento,
    tb_auto_cadastro.cpf,
    consulta.tratamento,
    consulta.condicao,
    consulta.medicacao,
    consulta.preco,
    consulta.finalizada
FROM 
    consulta
JOIN 
    tb_agenda ON consulta.id_agenda = tb_agenda.id_agenda
JOIN 
    tb_auto_cadastro ON consulta.id_paciente = tb_auto_cadastro.id_paciente
WHERE 
    finalizada = true
ORDER BY 
    tb_agenda.dia_horario DESC;
    
    insert into tb_login(email, senha) values ('adm123', '123');
