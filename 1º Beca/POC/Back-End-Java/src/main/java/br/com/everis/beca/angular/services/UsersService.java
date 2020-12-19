package br.com.everis.beca.angular.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.everis.beca.angular.entity.Course;
import br.com.everis.beca.angular.entity.Users;
import br.com.everis.beca.angular.repository.UsersRepository;

@Service
public class UsersService {
	
	@Autowired
	public UsersRepository usersRepository;

	public Users save(Users users) {
        return usersRepository.save(users);
    }
	
	public Iterable<Users> findAll() {
        return usersRepository.findAll();
    }
	
	public Optional<Users> findByLogin(String login) {
		return usersRepository.findByLogin(login);
	}
	
	public Optional<Users> findById(Long id) {
		return usersRepository.findById(id);
	}



}
