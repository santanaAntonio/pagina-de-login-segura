package br.com.cwi.SiteSeguro.controller.request;

import lombok.*;

import javax.validation.constraints.NotBlank;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class AtualizarUsuarioRequest {

    @NotBlank
    private String nomeCompleto;

    private String imagemPerfil;

    private String telefone;
}
