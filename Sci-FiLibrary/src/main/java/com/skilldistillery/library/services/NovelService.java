package com.skilldistillery.library.services;

import java.util.List;

import com.skilldistillery.library.entities.Novel;

public interface NovelService {

	List<Novel> getAllNovels();

	List<Novel> novelsBySubgenre(String subgenre);

	Novel getNovel(Integer novelId);

	Novel create(Novel novel);

	boolean delete(Integer novelId);

	Novel updateNovel(Integer novelId, Novel novel);

	List<Novel> keywordSearch(String keyword, String keyword2, String keyword3);

}
