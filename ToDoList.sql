CREATE DATABASE IF NOT EXISTS ToDoList;

USE ToDoList;

CREATE TABLE IF NOT EXISTS Tasks (
	id INT NOT NULL AUTO_INCREMENT,
    task VARCHAR(255) NOT NULL,
    deadline DATE NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO ToDoList.Tasks
	(task, deadline)
VALUES
	('Reunião com Coordenador Pedagógico', NOW()),
    ('Correção de provas do período noturno', NOW()),
    ('Banca de defesa de TCC', NOW()),
    ('Revisão de artigo científico', NOW()),
    ('Escrever discurso de paraninfo', NOW());
