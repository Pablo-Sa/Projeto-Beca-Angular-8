package br.com.everis.beca.angular.resources;

import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.everis.beca.angular.entity.Course;
import br.com.everis.beca.angular.services.CourseService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

@RestController
@RequestMapping(value = "/")
@CrossOrigin(origins = "*", allowedHeaders = "*")
@Api(value = "Back-End Java - POC Beca Everis")
public class CourseResources {
	
	@Autowired
	CourseService courseService; 
	
	@ApiOperation(value = "Retorna Todos os Cursos")
	@GetMapping("/cursos")
	public ResponseEntity<?> getAllCourses() {
		return new ResponseEntity<>(courseService.findAll(), HttpStatus.OK);
	}
	
	@ApiOperation(value = "Retorna Curso Por ID")
	@GetMapping("/cursos/{id}")
	public ResponseEntity<Course> getCourseId(@PathVariable("id") Long id) {
		Optional<Course> course = (Optional<Course>) courseService.findById(id);
		
		if(course.isPresent()) {
			return ResponseEntity.ok(course.get());
		  }
		
		return ResponseEntity.notFound().build();

	}
	
	
	@ApiOperation(value = "Atualiza um Curso")
	@PutMapping("/cursos")
	public ResponseEntity<?> updateCourse(@RequestBody @Valid Course course) {
		Optional<Course> dto = (Optional<Course>) courseService.findById(course.getId());
		
		if(dto.isPresent()) {
			return new ResponseEntity<>(courseService.save(course), HttpStatus.OK);
		  }
		return ResponseEntity.notFound().build();
	}

	@ApiOperation(value = "Delete um Curso")
	@DeleteMapping("/cursos")
	public ResponseEntity<?> deleteCourse(@RequestBody Course course) {
		
		Optional<Course> dto = (Optional<Course>) courseService.findById(course.getId());
		
		if(dto.isPresent()) {
			courseService.delete(course);
			return new ResponseEntity<>(HttpStatus.OK);
		  }
		
		return ResponseEntity.notFound().build();
	}
	
	@ApiOperation(value = "Deletar um Curso por ID")
	@DeleteMapping("/cursos/{id}")
	public ResponseEntity<?> deleteCourseId(@PathVariable("id") Long id) {
		Optional<Course> course = (Optional<Course>) courseService.findById(id);
		
		if(course.isPresent()) {
			return new ResponseEntity<>(courseService.deleteById(id), HttpStatus.OK);
		  }
		
		return ResponseEntity.notFound().build();
	}

	
	@ApiOperation(value = "Salva um Curso")
	@PostMapping(path = "/cursos", consumes = MediaType.APPLICATION_JSON_VALUE,
	produces = MediaType.APPLICATION_JSON_VALUE)	
	public ResponseEntity<?> saveCourse(@RequestBody @Valid Course course) {
		return new ResponseEntity<>(courseService.save(course), HttpStatus.OK);
	}

}
