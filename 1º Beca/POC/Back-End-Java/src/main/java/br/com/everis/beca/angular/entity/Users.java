package br.com.everis.beca.angular.entity;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.ManyToMany;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Users extends AbstractEntity implements UserDetails {
	
	private String login;
	private String passwd;
	
	public List<Profiles> getProfile() {
		return profile;
	}


	public void setProfile(List<Profiles> profile) {
		this.profile = profile;
	}


	@ManyToMany(fetch = FetchType.EAGER)
	private List<Profiles> profile = new ArrayList<>();
	
	
	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		return this.profile;
	}
	
	
	@Override
	public String getUsername() {
		return this.login;
	}
	
	
	@Override
	public boolean isAccountNonExpired() {
		return true;
	}
	
	
	@Override
	public boolean isAccountNonLocked() {
		return true;
	}
	
	
	@Override
	public boolean isCredentialsNonExpired() {
		return true;
	}
	
	@Override
	public boolean isEnabled() {
		return true;
	}


	@Override
	public String getPassword() {
		return this.passwd;
	}


}
