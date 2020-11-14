package com.skilldistillery.library.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.library.entities.Novel;

public interface NovelRepository extends JpaRepository<Novel, Integer> {

	
	
	
}
