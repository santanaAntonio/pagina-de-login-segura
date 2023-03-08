package br.com.cwi.SiteSeguro.controller;

import br.com.cwi.SiteSeguro.controller.request.AtualizarUsuarioRequest;
import br.com.cwi.SiteSeguro.security.controller.response.UsuarioResponse;
import br.com.cwi.SiteSeguro.service.ListarUsuariosService;
import br.com.cwi.SiteSeguro.service.ValidaPerfilService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/perfil")
public class PerfilController {

    @Autowired
    private ListarUsuariosService listarUsuariosService;

    @Autowired
    private final ValidaPerfilService validaPerfilService;

    public PerfilController(ValidaPerfilService validaPerfilService) {
        this.validaPerfilService = validaPerfilService;
    }

    @GetMapping("/{id}")
    public UsuarioResponse listarPorId(@PathVariable Long id) {
        return listarUsuariosService.procurarPorId(id);
    }

    @PostMapping("/{id}/atualizar")
    public UsuarioResponse atualizarPerfil(@PathVariable Long id,@RequestBody AtualizarUsuarioRequest request) {
        return validaPerfilService.atualizarPerfil(id,request);
    }
}
