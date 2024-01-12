package com.java.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.java.entity.EmpLdTech;
import com.java.repository.EmpLdTechRepository;

@RestController
@CrossOrigin(origins = "*")
public class EmpLdTechController {
	
	@Autowired
	EmpLdTechRepository empLdTechRepository;
	
    @PostMapping("/AddEmployee")
	public String insertEmployee(@RequestBody EmpLdTech empLdTech) 
    {
		
    	empLdTechRepository.save(empLdTech);
		return "Student record saved successfully";
	}
    
    
	@PostMapping("/AddMultipleEmployees")
	public String insertMultipleEmployees(@RequestBody List<EmpLdTech> empLdTech)
	{
		empLdTechRepository.saveAll(empLdTech);
		return "student record saved successfully";
	}

	//to get all the records
	@GetMapping("/getAllEmployee")
	public List<EmpLdTech> getEmployee()
	{
		return (List<EmpLdTech>) empLdTechRepository.findAll();
	}
	
	//To get the student by id
	@GetMapping("/getById={empid}")
	public Optional<EmpLdTech> getByEmployeeId(@PathVariable("empid") int empid)
	{
		return empLdTechRepository.findById(empid);
	}
	
	//To delete a record by id
    @DeleteMapping("/deleteById={empid}")
    public String deleteEmployee(@PathVariable("empid") int empid) 
    {
    	empLdTechRepository.deleteById(empid);
   		return "Record removed successfully";
    }

}
