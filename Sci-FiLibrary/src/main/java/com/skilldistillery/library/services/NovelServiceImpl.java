package com.skilldistillery.library.services;

import java.util.List;
import java.util.Optional;

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
		return repo.findAll();
	}

	@Override
	public List<Novel> novelsBySubgenre(String subgenre) {
		return repo.findBySubGenre(subgenre);
	}

	@Override
	public Novel getNovel(Integer novelId) {
		Optional<Novel> novelOpt = repo.findById(novelId);
		Novel novel = null;
		if (novelOpt.isPresent()) {
			novel = novelOpt.get();

		}

		return novel;
	}

	@Override
	public Novel create(Novel novel) {
		repo.saveAndFlush(novel);
		return novel;
	}

	@Override
	public boolean delete(Integer novelId) {
		boolean deleted = false;
		Optional<Novel> novelOpt = repo.findById(novelId);
		Novel novel = null;
		if(novelOpt.isPresent()) {
			novel = novelOpt.get();
			repo.delete(novel);
			deleted = true;
		}
		
		return deleted;
	}

	@Override
	public Novel updateNovel(Integer novelId, Novel novel) {
		Optional<Novel> novelOpt = repo.findById(novelId);
		Novel oldNovel = null;
		if (novelOpt.isPresent()) {
			oldNovel = novelOpt.get();
			if(novel.getTitle() != null) {
			oldNovel.setTitle(novel.getTitle());
			}
			if (novel.getAuthor() != null) {
			oldNovel.setAuthor(novel.getAuthor());
			}
			if (novel.getCoverImageUrl() != null) {
				oldNovel.setCoverImageUrl(novel.getCoverImageUrl());
			}
			if (novel.getDescription() != null) {
				oldNovel.setDescription(novel.getDescription());
			}
			if (novel.getNumberOfChapters() != null) {
			oldNovel.setNumberOfChapters(novel.getNumberOfChapters());
			}
			if (novel.getSubGenre() != null) {
				
				oldNovel.setSubGenre(novel.getSubGenre());
			}
			if (novel.getYearPublished() != null) {
			oldNovel.setYearPublished(novel.getYearPublished());
			}
		}
		return oldNovel;
	}

	@Override
	public List<Novel> keywordSearch(String keyword, String keyword2, String keyword3) {
		return repo.findByTitleLikeOrSubGenreLikeOrAuthorLike(keyword, keyword2, keyword3);
	}

}
