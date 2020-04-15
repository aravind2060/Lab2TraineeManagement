package com.cpg.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cpg.DAO.TraineeDAO;
import com.cpg.DTO.TraineeDTO;

@Service
public class TraineeServiceImpl implements TraineeService
{

	  @Autowired
	  TraineeDAO traineeDAO;
	  
	@Override
	public TraineeDTO getATrainee(int id) {
	
		return traineeDAO.findById(id).orElse(null);
	}

	@Override
	public void updateATrainee(TraineeDTO traineedto) {
		 
		traineeDAO.save(traineedto);
	}

	@Override
	public void deleteATrainee(int id) {
		traineeDAO.deleteById(id);
		
	}

	@Override
	public List<TraineeDTO> getAllTrainees() {
		return traineeDAO.findAll();
	}

	@Override
	public void addATrainee(TraineeDTO traineedto) {
		traineeDAO.save(traineedto);
		
	}

}
