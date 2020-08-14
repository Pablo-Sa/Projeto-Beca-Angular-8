package br.com.everis.beca.angular.repository;

import org.springframework.data.repository.CrudRepository;

import br.com.everis.beca.angular.entity.Course;

public interface CourseRepository extends CrudRepository<Course, Long>{
}
