package br.com.everis.beca.angular.config.security;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import br.com.everis.beca.angular.entity.Users;
import br.com.everis.beca.angular.services.UsersService;

@Service
public class AutenticationService implements UserDetailsService {
	
	@Autowired
	private UsersService userServices;
	
	@Override
	public UserDetails loadUserByUsername(String login) throws UsernameNotFoundException {
		Optional<Users> user = userServices.findByLogin(login);
		if(user.isPresent()) {
			return user.get();
		}
		
		throw new UsernameNotFoundException("Dados Inválidos !");
	}
}
