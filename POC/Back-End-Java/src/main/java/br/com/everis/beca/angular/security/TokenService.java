package br.com.everis.beca.angular.security;

import java.util.Date;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import br.com.everis.beca.angular.entity.Users;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@Service
public class TokenService {
	
	@Value("${jwt.expiration}")
	private String expiration;
	
	@Value("${jwt.secret}")
	private String secret;
	
	public String generateToken(Authentication authentication) {
		Users userLogado = (Users) authentication.getPrincipal();
		Date today = new Date();
		Date expirationToken = new Date(today.getTime()+ Long.parseLong(this.expiration));
		System.out.println("Data de Expiração do Token");
		System.out.println(expirationToken);
		
		return Jwts.builder()
				.setIssuer("Back-End API Beca Angular")
				.setSubject(userLogado.getId().toString())
				.setIssuedAt(today)
				.setExpiration(expirationToken)
				.signWith(SignatureAlgorithm.HS256, this.secret)
				.compact();
		}

	public boolean isTokenValid(String token) {
		
		try {
			Jwts.parser().setSigningKey(this.secret).parseClaimsJws(token);
			return true;
		} catch (Exception e) {
			return false;
		}
		
	}

	public Long getIdUser(String token) {
		Claims claims = Jwts.parser().setSigningKey(this.secret).parseClaimsJws(token).getBody();
		return Long.parseLong(claims.getSubject());
	}

}
