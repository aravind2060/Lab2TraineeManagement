package com.cpg.DAO;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cpg.DTO.TraineeDTO;

public interface TraineeDAO extends JpaRepository<TraineeDTO, Integer> {

}
