package br.com.everis.beca.angular.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import br.com.everis.beca.angular.entity.Course;
import br.com.everis.beca.angular.repository.CourseRepository;
import br.com.everis.beca.angular.repository.StudentsRepository;

@Service
public class CourseService {
	
	@Autowired
	public CourseRepository courseRepository;
	
	@Autowired
	public StudentsRepository studentyRepository;

	public Course save(Course course) {
	  studentyRepository.saveAll(course.getAlunos());
      return courseRepository.save(course);
	}
	
	public Optional<Course> findById(Long id) {
		return courseRepository.findById(id);
	}

	
	public Course delete(Course course) {
		courseRepository.delete(course);
		return course;
	}

	public double deleteById(Long id) {
		courseRepository.deleteById(id);
		return id;
	}
	
	public Iterable<Course> findAll() {
		return courseRepository.findAll();
	}

}
