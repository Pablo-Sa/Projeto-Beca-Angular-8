package br.com.everis.beca.angular.entity;

import javax.persistence.Entity;
import javax.persistence.Table;

import org.springframework.security.core.GrantedAuthority;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Profiles extends AbstractEntity implements GrantedAuthority {
	
	private String name;
	
	@Override
	public String getAuthority() {
	    return this.name;
	}

}
