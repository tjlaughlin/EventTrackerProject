package com.skilldistillery.library.entities;

import static org.junit.jupiter.api.Assertions.*;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class NovelTest {

	private static EntityManagerFactory emf;
	
	private EntityManager em;
	
	private Novel novel;
	
	
	
	
	@BeforeAll
	static void setUpBeforeClass() throws Exception {
		emf = Persistence.createEntityManagerFactory("Sci-FiLibraryPU");
		
	}

	@AfterAll
	static void tearDownAfterClass() throws Exception {
		emf.close();
	}

	@BeforeEach
	void setUp() throws Exception {
		em = emf.createEntityManager();
		novel = em.find(Novel.class, 1);
	}

	@AfterEach
	void tearDown() throws Exception {
		em.close();
		novel = null;
	}

	@Test
	void test() {
		assertNotNull(novel);
		assertEquals(1, novel.getId());
		assertEquals("Dune", novel.getTitle());
		
	}

}
