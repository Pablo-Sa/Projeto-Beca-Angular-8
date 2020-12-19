package br.com.everis.beca.angular.resources;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.everis.beca.angular.dto.token.TokenDto;
import br.com.everis.beca.angular.dto.userlogin.LoginForm;
import br.com.everis.beca.angular.security.TokenService;

@RestController
@RequestMapping("/auth")
public class AutenticationResource {
	
	@Autowired
	private AuthenticationManager authManager;
	
	@Autowired
	private TokenService tokenService;	  
	
	@PostMapping
	public ResponseEntity<TokenDto> authenticate(@RequestBody LoginForm form){
		UsernamePasswordAuthenticationToken dataLogin = form.converter();
		
		try { 
			Authentication authentication = authManager.authenticate(dataLogin);
			String token = tokenService.generateToken(authentication);
			HttpHeaders responseHeaders = new HttpHeaders();
		    responseHeaders.set("Authorization","Bearer "+token);
			System.out.println("Token Abaixo");
			System.out.println(token);
			return ResponseEntity.ok()
				   .headers(responseHeaders)
				   .body(new TokenDto(token, "Bearer"));
		 	 
		} catch (AuthenticationException e) {
			System.out.println(e.getMessage());
			return ResponseEntity.badRequest().build();
		}

	}

}
