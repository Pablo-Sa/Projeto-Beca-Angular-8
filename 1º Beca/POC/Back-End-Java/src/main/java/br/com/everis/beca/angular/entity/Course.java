package br.com.everis.beca.angular.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.ManyToMany;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

import org.apache.commons.lang3.builder.ToStringBuilder;
import org.hibernate.validator.constraints.Length;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Course extends AbstractEntity {

@NotNull
@Length(min = 3)
@NotEmpty
private String nome;
@NotNull
@NotEmpty
private String palestrante;
@NotNull
@NotEmpty
private String carga;

@ManyToMany
private List<Students> alunos = new ArrayList<Students>();

@Override
public String toString() {
	return new ToStringBuilder(this)
		.append("nome", nome)
		.append("palestrante", palestrante)
		.append("carga", carga)
		.append("alunos", alunos)
		.toString();
	}

}