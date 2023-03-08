package br.com.cwi.SiteSeguro.service;

import br.com.cwi.SiteSeguro.security.domain.Usuario;
import br.com.cwi.SiteSeguro.security.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.Objects;

@Service
public class BuscarInformacoesUsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    public Usuario buscarUsuario(Long id) {
        Usuario usuario =  usuarioRepository.findById(id).get();
        if(Objects.isNull(usuario)) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Este usuário não existe");
        }
        return usuario;
    }
}
