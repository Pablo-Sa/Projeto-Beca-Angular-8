package br.com.everis.beca.angular.endpoints;

import java.util.ArrayList;
import java.util.Optional;

import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.mockito.BDDMockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit4.SpringRunner;

import br.com.everis.beca.angular.dto.token.TokenDto;
import br.com.everis.beca.angular.dto.userlogin.LoginForm;
import br.com.everis.beca.angular.entity.Course;
import br.com.everis.beca.angular.entity.Students;
import br.com.everis.beca.angular.services.CourseService;
import br.com.everis.beca.angular.services.StudentsService;

@SpringBootTest(webEnvironment = WebEnvironment.RANDOM_PORT)
@RunWith(SpringRunner.class)
public class CourseEndpointsTest {

	@Test
	void contextLoads() {

	}

	@Autowired
	private TestRestTemplate restTemplet;

	@LocalServerPort
	private int port;

	@MockBean
	private CourseService courseService;

	@MockBean
	private StudentsService studentsService;

	private HttpEntity<Void> protectedHeader;
	private HttpEntity<Void> wrongHeader;

	@BeforeEach
	public void configProtectedHeaders() {
		LoginForm form = new LoginForm();
		form.setLogin("pablo");
		form.setPassword("Mudar@123");
		HttpHeaders headers = restTemplet.postForEntity("/auth", form, String.class).getHeaders();
		this.protectedHeader = new HttpEntity<>(headers);
	}

	@BeforeEach
	public void configWrongHeaders() {
		HttpHeaders headers = new HttpHeaders();
		headers.add("Authorization", "TokenInválido");
		this.wrongHeader = new HttpEntity<>(headers);
	}

	@Test
	public void PostLoginResponseStatusCode200() {
		LoginForm form = new LoginForm();
		form.setLogin("pablo");
		form.setPassword("Mudar@123");
		ResponseEntity<TokenDto> response = this.restTemplet.postForEntity("/auth", form, TokenDto.class);
		Assertions.assertThat(response.getStatusCodeValue()).isEqualTo(200);
	}

	@Test
	public void PostLoginResponseStatusCode400() {
		LoginForm form = new LoginForm();
		form.setLogin("pablo");
		form.setPassword("Mudar@123F");
		ResponseEntity<TokenDto> response = this.restTemplet.postForEntity("/auth", form, TokenDto.class);
		Assertions.assertThat(response.getStatusCodeValue()).isEqualTo(400);
	}
	
	@Test
	public void GetAllResponseStatusCode200() {
		Students student = new Students();
		student.setNome("Ingrid");
		Students student2 = new Students();
		student2.setNome("Ana Cristina");
		ArrayList<Students> students = new ArrayList<Students>();
		students.add(student);
		students.add(student2);

		Course course = new Course();
		course.setAlunos(students);
		course.setCarga("80hrs");
		course.setNome("JavaScript");
		course.setPalestrante("Pablo Vinícius");
		courseService.save(course);
		ArrayList<Course> courseList = new ArrayList<Course>();

		BDDMockito.when(this.courseService.findAll()).thenReturn(courseList);
		ResponseEntity<String> response = restTemplet.exchange("/cursos", HttpMethod.GET, this.protectedHeader,
				String.class);
		Assertions.assertThat(response.getStatusCodeValue()).isEqualTo(200);
	}
	
	@Test
	public void GetAllResponseStatusCode403() {
		ResponseEntity<String> response = restTemplet.exchange("/cursos", HttpMethod.GET, this.wrongHeader,
				String.class);
		Assertions.assertThat(response.getStatusCodeValue()).isEqualTo(403);
	}


	@Test
	public void GetAllResponseStatusCode404() {
		ArrayList<Course> courseList = new ArrayList<Course>();
		BDDMockito.when(this.courseService.findAll()).thenReturn(courseList);
		ResponseEntity<String> response = restTemplet.exchange("/cursosf", HttpMethod.GET, this.protectedHeader,
				String.class);
		Assertions.assertThat(response.getStatusCodeValue()).isEqualTo(404);
	}

	@Test
	public void GetByIdResponseStatusCode200() {
		Students student = new Students();
		student.setNome("Ingrid");
		Students student2 = new Students();
		student2.setNome("Ana Cristina");
		ArrayList<Students> students = new ArrayList<Students>();
		students.add(student);
		students.add(student2);

		Optional<Course> course = Optional.of(new Course());
		course.get().setId(new Long(100));
		course.get().setAlunos(students);
		course.get().setCarga("80hrs");
		course.get().setNome("JavaScript");
		course.get().setPalestrante("Pablo Vinícius");
		courseService.save(course.get());

		BDDMockito.when(this.courseService.findById(course.get().getId())).thenReturn(course);
		ResponseEntity<String> response = restTemplet.exchange("/cursos/" + course.get().getId(), HttpMethod.GET,
				this.protectedHeader, String.class);
		Assertions.assertThat(response.getStatusCodeValue()).isEqualTo(200);
	}
	
	@Test
	public void GetByIdResponseStatusCode403() {
		Students student = new Students();
		student.setNome("Ingrid");
		Students student2 = new Students();
		student2.setNome("Ana Cristina");
		ArrayList<Students> students = new ArrayList<Students>();
		students.add(student);
		students.add(student2);

		Optional<Course> course = Optional.of(new Course());
		course.get().setId(new Long(100));
		course.get().setAlunos(students);
		course.get().setCarga("80hrs");
		course.get().setNome("JavaScript");
		course.get().setPalestrante("Pablo Vinícius");
		courseService.save(course.get());

		BDDMockito.when(this.courseService.findById(course.get().getId())).thenReturn(course);
		ResponseEntity<String> response = restTemplet.exchange("/cursos/" + course.get().getId(), HttpMethod.GET,
				this.wrongHeader, String.class);
		Assertions.assertThat(response.getStatusCodeValue()).isEqualTo(403);
	}


	@Test
	public void GetByIdResponseStatusCode404() {
		Students student = new Students();
		student.setNome("Ingrid");
		Students student2 = new Students();
		student2.setNome("Ana Cristina");
		ArrayList<Students> students = new ArrayList<Students>();
		students.add(student);
		students.add(student2);

		Optional<Course> course = Optional.of(new Course());
		course.get().setAlunos(students);
		course.get().setCarga("80hrs");
		course.get().setNome("JavaScript");
		course.get().setPalestrante("Pablo Vinícius");

		BDDMockito.when(this.courseService.findById(course.get().getId())).thenReturn(course);
		ResponseEntity<String> response = restTemplet.exchange("/cursosf/" + course.get().getId(), HttpMethod.GET,
				this.protectedHeader, String.class);
		Assertions.assertThat(response.getStatusCodeValue()).isEqualTo(404);
	}

	@Test
	public void PostResponseStatusCode200() {
		Students student = new Students();
		student.setNome("Ingrid");
		Students student2 = new Students();
		student2.setNome("Ana Cristina");
		ArrayList<Students> students = new ArrayList<Students>();
		students.add(student);
		students.add(student2);

		Course course = new Course();
		course.setAlunos(students);
		course.setCarga("80hrs");
		course.setNome("JavaScript");
		course.setPalestrante("Pablo Vinícius");
		ResponseEntity<Course> response = restTemplet.exchange("/cursos", HttpMethod.POST,
				new HttpEntity<>(course, this.protectedHeader.getHeaders()), Course.class);
		Assertions.assertThat(response.getStatusCodeValue()).isEqualTo(200);
	}
	
	@Test
	public void PostResponseStatusCode403() {
		Students student = new Students();
		student.setNome("Ingrid");
		Students student2 = new Students();
		student2.setNome("Ana Cristina");
		ArrayList<Students> students = new ArrayList<Students>();
		students.add(student);
		students.add(student2);

		Course course = new Course();
		course.setAlunos(students);
		course.setCarga("80hrs");
		course.setNome("JavaScript");
		course.setPalestrante("Pablo Vinícius");
		ResponseEntity<Course> response = restTemplet.exchange("/cursos", HttpMethod.POST,
				new HttpEntity<>(course, this.wrongHeader.getHeaders()), Course.class);
		Assertions.assertThat(response.getStatusCodeValue()).isEqualTo(403);
	}


	@Test
	public void PostResponseStatusCode404() {
		Students student = new Students();
		student.setNome("Ingrid");
		Students student2 = new Students();
		student2.setNome("Ana Cristina");
		ArrayList<Students> students = new ArrayList<Students>();
		students.add(student);
		students.add(student2);

		Course course = new Course();
		course.setAlunos(students);
		course.setCarga("80hrs");
		course.setNome("JavaScript");
		course.setPalestrante("Pablo Vinícius");
		
		ResponseEntity<Course> response = restTemplet.exchange("/cursosf", HttpMethod.POST,
				new HttpEntity<>(course, this.protectedHeader.getHeaders()), Course.class);
		
		Assertions.assertThat(response.getStatusCodeValue()).isEqualTo(404);
	}
	
	@Test
	public void DeleteResponseStatusCode404() {
		Students student = new Students();
		student.setNome("Ingrid");
		Students student2 = new Students();
		student2.setNome("Ana Cristina");
		ArrayList<Students> students = new ArrayList<Students>();
		students.add(student);
		students.add(student2);

		Course course = new Course();
		course.setAlunos(students);
		course.setCarga("80hrs");
		course.setNome("JavaScript");
		course.setPalestrante("Pablo Vinícius");
		
		ResponseEntity<Course> response = restTemplet.exchange("/cursosf", HttpMethod.DELETE,
				new HttpEntity<>(course, this.protectedHeader.getHeaders()), Course.class);
		
		Assertions.assertThat(response.getStatusCodeValue()).isEqualTo(404);
	}
	
	@Test
	public void DeleteResponseStatusCode403() {
		Students student = new Students();
		student.setNome("Ingrid");
		Students student2 = new Students();
		student2.setNome("Ana Cristina");
		ArrayList<Students> students = new ArrayList<Students>();
		students.add(student);
		students.add(student2);

		Course course = new Course();
		course.setAlunos(students);
		course.setCarga("80hrs");
		course.setNome("JavaScript");
		course.setPalestrante("Pablo Vinícius");
		
		ResponseEntity<Course> response = restTemplet.exchange("/cursos", HttpMethod.DELETE,
				new HttpEntity<>(course, this.wrongHeader.getHeaders()), Course.class);
		
		Assertions.assertThat(response.getStatusCodeValue()).isEqualTo(403);
	}

	
	@Test
	public void DeleteResponseStatusCode200() {
		Students student = new Students();
		student.setNome("Ingrid");
		Students student2 = new Students();
		student2.setNome("Ana Cristina");
		ArrayList<Students> students = new ArrayList<Students>();
		students.add(student);
		students.add(student2);

		Optional<Course> course = Optional.of(new Course());
		course.get().setId(new Long(100));
		course.get().setAlunos(students);
		course.get().setCarga("80hrs");
		course.get().setNome("JavaScript");
		course.get().setPalestrante("Pablo Vinícius");
		courseService.save(course.get());
		
		BDDMockito.when(this.courseService.findById(course.get().getId())).thenReturn(course);
		ResponseEntity<Course> response = restTemplet.exchange("/cursos", HttpMethod.DELETE,
				new HttpEntity<>(course, this.protectedHeader.getHeaders()), Course.class);
		
		Assertions.assertThat(response.getStatusCodeValue()).isEqualTo(200);
	}
	
	@Test
	public void DeleteByIdResponseStatusCode404() {
		Students student = new Students();
		student.setNome("Ingrid");
		Students student2 = new Students();
		student2.setNome("Ana Cristina");
		ArrayList<Students> students = new ArrayList<Students>();
		students.add(student);
		students.add(student2);

		Optional<Course> course = Optional.of(new Course());
		course.get().setAlunos(students);
		course.get().setCarga("80hrs");
		course.get().setNome("JavaScript");
		course.get().setPalestrante("Pablo Vinícius");

		BDDMockito.when(this.courseService.findById(course.get().getId())).thenReturn(course);
		ResponseEntity<String> response = restTemplet.exchange("/cursosf/" + course.get().getId(), HttpMethod.DELETE,
				this.protectedHeader, String.class);
		Assertions.assertThat(response.getStatusCodeValue()).isEqualTo(404);
	}
	
	@Test
	public void DeleteByIdResponseStatusCode200() {
		Students student = new Students();
		student.setNome("Ingrid");
		Students student2 = new Students();
		student2.setNome("Ana Cristina");
		ArrayList<Students> students = new ArrayList<Students>();
		students.add(student);
		students.add(student2);

		Optional<Course> course = Optional.of(new Course());
		course.get().setId(new Long(100));
		course.get().setAlunos(students);
		course.get().setCarga("80hrs");
		course.get().setNome("JavaScript");
		course.get().setPalestrante("Pablo Vinícius");
		courseService.save(course.get());

		BDDMockito.when(this.courseService.findById(course.get().getId())).thenReturn(course);
		ResponseEntity<String> response = restTemplet.exchange("/cursos/" + course.get().getId(), HttpMethod.DELETE,
				this.protectedHeader, String.class);
		Assertions.assertThat(response.getStatusCodeValue()).isEqualTo(200);
	}

}
