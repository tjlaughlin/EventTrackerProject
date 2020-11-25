package com.skilldistillery.library;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.skilldistillery.library.entities.Novel;
import com.skilldistillery.library.repositories.NovelRepository;


@SpringBootTest
class NovelRepoTest {

	
	@Autowired
	private NovelRepository repo;
	
	@Test
	@DisplayName("this is to test the repo query for novel")
	void test1() {
		Optional<Novel> novelOpt = repo.findById(1);
		assertTrue(novelOpt.isPresent());
		Novel novel = novelOpt.get();
		assertEquals("Dune", novel.getTitle());
	}

	
	@Test
	@DisplayName("this is to test the spring JPA query created to find sub genres")
	void test2() {
		List<Novel> novels = repo.findBySubGenre("alternate history");
		assertEquals(2, novels.size());
	}
	
	
	@Test
	@DisplayName("this is to test the spring JPA query created to find titles by keyword")
	void test3() {
		String keyword = "%" + "ne" + "%";
		String keyword2 = keyword;
		String keyword3 = keyword;
		List<Novel> novels = repo.findByTitleLikeOrSubGenreLikeOrAuthorLike(keyword, keyword2, keyword3);
//		assertEquals(6, novels.size());
	}
	
	
}
