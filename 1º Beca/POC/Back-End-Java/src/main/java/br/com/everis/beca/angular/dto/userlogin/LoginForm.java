package br.com.everis.beca.angular.dto.userlogin;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;

import br.com.everis.beca.angular.entity.Users;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class LoginForm {
	
	private String login;
	private String password;
	
	public UsernamePasswordAuthenticationToken converter() {
		return new UsernamePasswordAuthenticationToken(this.login, this.password);
	}

	public Users convertUser() {
		Users user = new Users();
		user.setLogin(this.login);
		user.setPasswd(this.password);
		return user;
	}

}
