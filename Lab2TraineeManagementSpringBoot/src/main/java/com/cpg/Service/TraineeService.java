package com.cpg.Service;

import java.util.List;

import com.cpg.DTO.TraineeDTO;

public interface TraineeService {

	public TraineeDTO getATrainee(int id);
	public void updateATrainee(TraineeDTO traineedto);
	public void deleteATrainee(int id);
	public List<TraineeDTO> getAllTrainees(); 
	public void addATrainee(TraineeDTO traineedto);
}
