package com.skilldistillery.library.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.library.entities.Novel;

public interface NovelRepository extends JpaRepository<Novel, Integer> {

	List<Novel> findBySubGenre(String subGenre);
	
	
	List<Novel> findByTitleLikeOrSubGenreLikeOrAuthorLike(String keyword, String keyword2, String keyword3);
	
}
