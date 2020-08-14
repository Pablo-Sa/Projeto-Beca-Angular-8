package br.com.everis.beca.angular.config.security;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.OncePerRequestFilter;

import br.com.everis.beca.angular.entity.Users;
import br.com.everis.beca.angular.security.TokenService;
import br.com.everis.beca.angular.services.UsersService;

public class AutenticationTokenFilter extends OncePerRequestFilter{

	private UsersService usersService;
	private TokenService tokenService;
		
	public AutenticationTokenFilter(TokenService tokenService, UsersService usersService) {
		this.tokenService = tokenService;
		this.usersService = usersService;
	}
	
	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
			throws ServletException, IOException {

		String token = recoverToken(request);
		System.out.println("Token Recuperado");
		System.out.println(token);
		
		boolean tokenValid = tokenService.isTokenValid(token);
		if(tokenValid) {
			authenticateClient(token);
		}
		
		filterChain.doFilter(request, response);
	}

	private void authenticateClient(String token) {
		Long idUser = this.tokenService.getIdUser(token);
		Users user = this.usersService.findById(idUser).get();
		UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(user, null, user.getAuthorities());
		SecurityContextHolder.getContext().setAuthentication(authentication);
	}

	private String recoverToken(HttpServletRequest request) {
		String tokenRecover = request.getHeader("Authorization");
		
		if(tokenRecover == null || tokenRecover.isEmpty() || !tokenRecover.startsWith("Bearer ")) {
			return null;
		}
		
		return tokenRecover.substring(7, tokenRecover.length());
	}

}
