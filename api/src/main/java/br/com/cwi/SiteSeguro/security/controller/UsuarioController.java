package br.com.cwi.SiteSeguro.security.controller;

import br.com.cwi.SiteSeguro.security.controller.request.UsuarioRequest;
import br.com.cwi.SiteSeguro.security.controller.response.UsuarioResponse;
import br.com.cwi.SiteSeguro.security.service.IncluirUsuarioService;
import br.com.cwi.SiteSeguro.security.service.UsuarioAutenticadoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/usuarios")
public class UsuarioController {

    @Autowired
    private IncluirUsuarioService service;

    @Autowired
    private UsuarioAutenticadoService usuarioAutenticadoService;

    @PostMapping
    public UsuarioResponse incluir(@RequestBody UsuarioRequest request) {
        return service.incluir(request);
    }


}
