package br.com.everis.beca.angular.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.everis.beca.angular.entity.Students;
import br.com.everis.beca.angular.repository.StudentsRepository;

@Service
public class StudentsService {
	
	@Autowired
	public StudentsRepository studentyRepository;

	public Students save(Students student) {
	      return studentyRepository.save(student);
    }
}
