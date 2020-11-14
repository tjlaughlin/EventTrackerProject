package com.skilldistillery.library.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.library.entities.Novel;
import com.skilldistillery.library.repositories.NovelRepository;

@Service
public class NovelServiceImpl implements NovelService {

	@Autowired
	private NovelRepository repo;
	
	
	@Override
	public List<Novel> getAllNovels() {
		// TODO Auto-generated method stub
		return null;
	}

}
