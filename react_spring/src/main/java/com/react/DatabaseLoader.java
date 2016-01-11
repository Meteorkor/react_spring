package com.react;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.react.model.Employee;
import com.react.repo.EmployeeRepository;

@Component
public class DatabaseLoader implements CommandLineRunner{

	private final EmployeeRepository repo;
	
	@Autowired
	public DatabaseLoader(EmployeeRepository empleRepo) {
		this.repo = empleRepo;
	}
	
	@Override
	public void run(String... args) throws Exception {
		this.repo.save( new Employee("kim", "dev") );
		this.repo.save( new Employee("lee", "officer") );
		this.repo.save( new Employee("cho", "design") );

		
	}

	
	
}
