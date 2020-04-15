package com.cpg.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.cpg.DTO.TraineeDTO;
import com.cpg.Service.TraineeService;

@CrossOrigin
@RestController
public class TraineeController {

	@Autowired
	TraineeService traineeService;
	
	@RequestMapping(value = "/getatrainee/{id}",method=RequestMethod.GET)
	public TraineeDTO getTrainee(@PathVariable("id") int id)
	{
		return traineeService.getATrainee(id);
	}
	
	@RequestMapping(value="/getalltrainees",method=RequestMethod.GET)
	public List<TraineeDTO> getAllTrainees()
	{
		return traineeService.getAllTrainees();
	}
	
	@RequestMapping(value="/updateatrainee/{id}",method = RequestMethod.PUT)
	public void updateTrainee(TraineeDTO trainee)
	{
		traineeService.updateATrainee(trainee);
	}
	
	@RequestMapping(value="/deleteatrainee/{id}",method=RequestMethod.DELETE)
	public void deleteTrainee(@PathVariable("id") int id)
	{
		traineeService.deleteATrainee(id);
	}
	
	@RequestMapping(value="/addatrainee",method=RequestMethod.POST)
	public void addATrainee(TraineeDTO traineedto)
	{
	  traineeService.addATrainee(traineedto);	
	}
	
}
