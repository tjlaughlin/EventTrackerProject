package com.skilldistillery.library.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


@Entity
public class Novel {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	private String title;

	private String author;
	
	@Column(name = "cover_image_url")
	private String coverImageUrl;
	
	@Column(name = "number_of_chapters")
	private Integer numberOfChapters;
	
	@Column(name = "year_published")
	private Integer yearPublished;
	
	private String description;
	
	@Column(name = "sub_genre")
	private String subGenre;
	
	
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public Novel() {
		super();
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + id;
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Novel other = (Novel) obj;
		if (id != other.id)
			return false;
		return true;
	}

	public Novel(int id, String title) {
		super();
		this.id = id;
		this.title = title;
	}

	public String getAuthor() {
		return author;
	}

	public void setAuthor(String author) {
		this.author = author;
	}

	

	public Integer getNumberOfChapters() {
		return numberOfChapters;
	}

	public void setNumberOfChapters(Integer numberOfChapters) {
		this.numberOfChapters = numberOfChapters;
	}

	public Integer getYearPublished() {
		return yearPublished;
	}

	public void setYearPublished(Integer yearPublished) {
		this.yearPublished = yearPublished;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getSubGenre() {
		return subGenre;
	}

	public void setSubGenre(String subGenre) {
		this.subGenre = subGenre;
	}

	public String getCoverImageUrl() {
		return coverImageUrl;
	}

	public void setCoverImageUrl(String coverImageUrl) {
		this.coverImageUrl = coverImageUrl;
	}

	@Override
	public String toString() {
		return "Novel [id=" + id + ", title=" + title + ", author=" + author + ", coverImageUrl=" + coverImageUrl
				+ ", numberOfChapters=" + numberOfChapters + ", yearPublished=" + yearPublished + ", description="
				+ description + ", subGenre=" + subGenre + "]";
	}

	public Novel(int id, String title, String author, String coverImageUrl, Integer numberOfChapters,
			Integer yearPublished, String description, String subGenre) {
		super();
		this.id = id;
		this.title = title;
		this.author = author;
		this.coverImageUrl = coverImageUrl;
		this.numberOfChapters = numberOfChapters;
		this.yearPublished = yearPublished;
		this.description = description;
		this.subGenre = subGenre;
	}



	
	
	
}
