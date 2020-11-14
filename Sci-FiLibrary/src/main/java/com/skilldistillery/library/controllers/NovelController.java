package com.skilldistillery.library.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.library.services.NovelService;

@RequestMapping("api")
@RestController
public class NovelController {

	@Autowired
	private NovelService svc;
	
	
	
	@GetMapping("ping")
	public String ping() {
		return "pong";
	}
	
	
	
	
}
