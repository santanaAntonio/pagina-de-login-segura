package br.com.cwi.SiteSeguro.security.controller.request;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;

@Getter
@Setter
public class UsuarioRequest {

    @NotBlank
    private String nomeCompleto;

    @Email
    @NotNull
    private String email;

    @NotBlank
    private String senha;


    private String imagemPerfil;

    private String telefone;

    private LocalDate criadoEm;

    private LocalDate modificadoEm;
}
