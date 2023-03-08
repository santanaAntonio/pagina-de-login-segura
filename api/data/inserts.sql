INSERT INTO usuario (nome_completo, email, telefone, criado_em, imagem_perfil, senha, ativo)
VALUES ('Maria Oliveira', 'maria.oliveira@gmail.com', '123456789', '2023-03-08', 'https://cajamar.sp.gov.br/noticias/wp-content/uploads/sites/2/2021/07/site-vacinacao-33-anos.png','$2a$10$VrIbJURwINOR5HOrWFFTNOwSILsioRJSuOGAg8Luvr9qZDSOl5JXG', true);

INSERT INTO usuario (nome_completo, email, telefone, criado_em, imagem_perfil, senha, ativo)
VALUES ('Carlos Santos', 'carlos.santos@yahoo.com', '123456789', '2023-03-08', 'https://cajamar.sp.gov.br/noticias/wp-content/uploads/sites/2/2021/08/site-vacinacao-26-anos.png', '$2a$10$VrIbJURwINOR5HOrWFFTNOwSILsioRJSuOGAg8Luvr9qZDSOl5JXG', true);

INSERT INTO usuario (nome_completo, email, telefone, criado_em, imagem_perfil, senha, ativo)
VALUES ('Ana Maria Costa', 'anamaria.costa@hotmail.com', '123456789', '2023-03-08', 'https://brasil.emeritus.org/wp-content/uploads/2020/01/gesta%CC%83o-de-pessoas-.jpg', '$2a$10$VrIbJURwINOR5HOrWFFTNOwSILsioRJSuOGAg8Luvr9qZDSOl5JXG', true);

INSERT INTO usuario (nome_completo, email, telefone, criado_em, imagem_perfil, senha, ativo)
VALUES ('Pedro Almeida', 'pedro.almeida@gmail.com', '123456789', '2023-03-08', 'https://conteudo.imguol.com.br/c/entretenimento/38/2022/05/17/jovem-mulher-com-sindrome-de-down-1652808572452_v2_900x506.jpg', '$2a$10$VrIbJURwINOR5HOrWFFTNOwSILsioRJSuOGAg8Luvr9qZDSOl5JXG', true);

INSERT INTO usuario (nome_completo, email, telefone, criado_em, imagem_perfil, senha, ativo)
VALUES ('Juliana Mendes', 'juliana.mendes@yahoo.com.br', '123456789', '2023-03-08', 'https://cajamar.sp.gov.br/noticias/wp-content/uploads/sites/2/2021/07/site-vacinacao-38-anos-2.png', 's$2a$10$VrIbJURwINOR5HOrWFFTNOwSILsioRJSuOGAg8Luvr9qZDSOl5JXG', true);

INSERT INTO usuario (nome_completo, email, telefone, criado_em, imagem_perfil, senha, ativo)
VALUES ('Rafael Silva', 'rafael.silva@hotmail.com', '123456789', '2023-03-08', 'https://lucianamacedo.com.br/wp-content/uploads/2020/10/porque-as-pessoas-buscam-procedimentos-esteticos.jpg', '$2a$10$VrIbJURwINOR5HOrWFFTNOwSILsioRJSuOGAg8Luvr9qZDSOl5JXG', true);

insert into permissao (funcao, usuario_id) values ('ADMIN', 1);
insert into permissao (funcao, usuario_id) values ('USUARIO', 1);
insert into permissao (funcao, usuario_id) values ('USUARIO', 2);
