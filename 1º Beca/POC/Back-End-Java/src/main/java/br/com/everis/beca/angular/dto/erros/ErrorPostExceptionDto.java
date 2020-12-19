package br.com.everis.beca.angular.dto.erros;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class ErrorPostExceptionDto {
	
	private String campo;
	private String erro;

}
