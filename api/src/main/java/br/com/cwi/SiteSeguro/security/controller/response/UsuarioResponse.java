package br.com.cwi.SiteSeguro.security.controller.response;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
public class UsuarioResponse {

    private Long id;

    private String nomeCompleto;

    private String email;

    private String senha;

    private String imagemPerfil;

    private String telefone;

    private LocalDate criadoEm;

    private LocalDate modificadoEm;
}
