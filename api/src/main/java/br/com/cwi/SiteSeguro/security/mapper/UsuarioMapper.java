package br.com.cwi.SiteSeguro.security.mapper;

import br.com.cwi.SiteSeguro.security.controller.request.UsuarioRequest;
import br.com.cwi.SiteSeguro.security.controller.response.UsuarioResponse;
import br.com.cwi.SiteSeguro.security.domain.Usuario;

public class UsuarioMapper {

    public static Usuario toEntity(UsuarioRequest request) {
        Usuario entity = new Usuario();
        entity.setNomeCompleto(request.getNomeCompleto());
        entity.setEmail(request.getEmail());
        entity.setTelefone(request.getTelefone());
        return entity;
    }

    public static UsuarioResponse toResponse(Usuario entity) {
        UsuarioResponse response = new UsuarioResponse();
        response.setId(entity.getId());
        response.setNomeCompleto(entity.getNomeCompleto());
        response.setEmail(entity.getEmail());
        response.setCriadoEm(entity.getCriadoEm());
        response.setModificadoEm(entity.getModificadoEm());
        response.setTelefone(entity.getTelefone());
        response.setImagemPerfil(entity.getImagemPerfil());
        return response;
    }
}
