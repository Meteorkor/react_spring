package com.react.repo;

import org.springframework.data.repository.CrudRepository;

import com.react.model.Employee;

public interface EmployeeRepository extends CrudRepository<Employee, Long>{

}
