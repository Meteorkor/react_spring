package com.react.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.Data;

@Data
@Entity
public class Employee {

	@GeneratedValue
	@Id
	private Long id;
	private String name;
	private String description;
	
	private Employee(){}
	
	public Employee(String name, String description) {
//		super();
		this.name = name;
		this.description = description;
	}
	
	
	

	
}
