package br.com.everis.beca.angular.repository;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import br.com.everis.beca.angular.entity.Users;

public interface UsersRepository extends CrudRepository<Users, Long> {

	public Optional<Users> findByLogin(String login);

}
