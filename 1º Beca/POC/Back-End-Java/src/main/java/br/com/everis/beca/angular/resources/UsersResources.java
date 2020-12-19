package br.com.everis.beca.angular.resources;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.everis.beca.angular.dto.userlogin.LoginForm;
import br.com.everis.beca.angular.entity.Users;
import br.com.everis.beca.angular.services.UsersService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

@RestController
@RequestMapping(value = "/")
@CrossOrigin(origins = "*", allowedHeaders = "*")
@Api(value = "Back-End Java - POC Beca Everis")
public class UsersResources {
	
	@Autowired
	UsersService usersService;
	
	@ApiOperation(value = "Salva um Usuário")
	@PostMapping(path = "/user", consumes = MediaType.APPLICATION_JSON_VALUE,
	produces = MediaType.APPLICATION_JSON_VALUE)	
	public ResponseEntity<?> saveUser(@RequestBody LoginForm form) {
		Users user = form.convertUser(); 
		
		System.out.println(user.getLogin());
		System.out.println(user.getPasswd());
		return new ResponseEntity<>(usersService.save(user), HttpStatus.OK);
	}
	
}
