package com.skilldistillery.library.controllers;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.library.entities.Novel;
import com.skilldistillery.library.services.NovelService;

@RequestMapping("api")
@RestController
public class NovelController {

	@Autowired
	private NovelService svc;
	
	
	
//	@GetMapping("ping")
//	public String ping() {
//		return "pong";
//	}
	
	@GetMapping("novels/{novelId}")
	public Novel getNovel(@PathVariable Integer novelId, HttpServletResponse response, HttpServletRequest request) {
		Novel novel = svc.getNovel(novelId);
		if (novel == null) {
			response.setStatus(404);
		}
		return novel;
	}
	
	@GetMapping("novels")
	public List<Novel> getAllNovels() {
		return svc.getAllNovels();
	}
	
	@GetMapping("novels/subgenre/{subGenre}")
	public List<Novel> getNovelsBySubGenre(@PathVariable String subGenre, HttpServletResponse response) {
		List<Novel> novels = svc.novelsBySubgenre(subGenre);
		if (novels == null) {
			response.setStatus(404);
		}
		return novels;
	}
	
	@PostMapping("novels")
	public Novel createNovel(@RequestBody Novel novel, HttpServletResponse response) {
		Novel novelAdded = null;
		try {
			novelAdded = svc.create(novel);
			response.setStatus(201);
			response.setHeader("Location", "http://localhost:8085/api/novels/" + novel.getId());
		} catch (Exception e) {
			response.setStatus(404);
		}
		
		return novelAdded;
	}
	
	
	@DeleteMapping("novels/delete/{novelId}")
	public void deleteNovelFromLibrary(@PathVariable Integer novelId, HttpServletResponse response) {
		if (svc.delete(novelId)) {
			response.setStatus(204);
		} else {
			response.setStatus(404);
		}
	}
	
	@PutMapping("novels/{novelId}")
	public Novel updateNovel(@RequestBody Novel novel, Integer novelId, HttpServletResponse response) {
		try {
			novel = svc.updateNovel(novelId, novel);
			if(novel == null) {
				response.setStatus(404);
			}
		} catch (Exception e) {
			response.setStatus(400);
		}
		return novel;
	}
	
	
	
	
	
	@GetMapping("novels/search/{keyword}")
	public List<Novel> getnNovelByKeyword(@PathVariable String keyword, HttpServletResponse response) {
		String keyword2 = keyword;
		String keyword3 = keyword;
		List <Novel> novels = svc.keywordSearch("%" + keyword + "%", "%" + keyword2 + "%", "%" + keyword3 + "%");
		
//		if (novels == null) {
//			response.setStatus(404);
//		}
		return novels;
	
	}
}
