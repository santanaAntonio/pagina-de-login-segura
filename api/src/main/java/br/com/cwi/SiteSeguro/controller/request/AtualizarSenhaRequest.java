package br.com.cwi.SiteSeguro.controller.request;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AtualizarSenhaRequest {
    private String token;
    private String novaSenha;
}
