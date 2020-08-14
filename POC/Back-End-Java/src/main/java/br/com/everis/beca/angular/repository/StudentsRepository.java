package br.com.everis.beca.angular.repository;

import org.springframework.data.repository.CrudRepository;

import br.com.everis.beca.angular.entity.Students;

public interface StudentsRepository extends CrudRepository<Students, Long>{
}

