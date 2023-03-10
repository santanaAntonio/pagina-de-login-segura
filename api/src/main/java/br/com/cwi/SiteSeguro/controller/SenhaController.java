package br.com.cwi.SiteSeguro.controller;

import br.com.cwi.SiteSeguro.controller.request.AtualizarSenhaRequest;
import br.com.cwi.SiteSeguro.controller.request.EsqueciSenhaRequest;
import br.com.cwi.SiteSeguro.security.domain.Usuario;
import br.com.cwi.SiteSeguro.security.repository.UsuarioRepository;
import br.com.cwi.SiteSeguro.security.service.UsuarioAutenticadoService;
import br.com.cwi.SiteSeguro.service.EmailService;
import br.com.cwi.SiteSeguro.service.TokenUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.annotation.Secured;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

import javax.mail.MessagingException;

import static br.com.cwi.SiteSeguro.service.TokenUtils.generateToken;

@RestController
@RequestMapping("/senha")
public class SenhaController {

    @Autowired
    private EmailService emailService;

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private UsuarioAutenticadoService usuarioAutenticadoService;

    @Autowired
    private TokenUtils tokenUtils;

    @Secured("IS_AUTHENTICATED_ANONYMOUSLY")
    @PostMapping("/esqueci-senha")
    public void esqueciSenha(@RequestBody EsqueciSenhaRequest request ) throws MessagingException {

        String email = request.getEmail();
        Usuario usuario = usuarioRepository.findByEmail(email).get();

        if (usuario == null) {
            throw new UsernameNotFoundException("Usuário com e-mail " + email + " não encontrado");
        }

        String token = generateToken(usuario);

        usuario.setTokenResetarSenha(token);

        usuarioRepository.save(usuario);

        String body = "Para recuperar sua senha, acesse o seguinte link: http://localhost:3000/recuperar-senha/" + token;

        emailService.sendEmail(email, "Recuperação de senha", body);
    }

    @Secured("IS_AUTHENTICATED_ANONYMOUSLY")
    @PostMapping("/recuperar-senha")
    public void recuperarSenha(@RequestBody AtualizarSenhaRequest request) {
        Usuario usuario = usuarioRepository.findByTokenResetarSenha(request.getToken());

        tokenUtils.resetarSenha( request.getToken(),  request.getNovaSenha());
    }
}
