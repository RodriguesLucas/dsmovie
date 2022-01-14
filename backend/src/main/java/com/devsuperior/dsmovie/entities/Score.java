package com.devsuperior.dsmovie.entities;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "tb_score")
public class Score {
	
	@EmbeddedId
	private ScorePK scorePK = new ScorePK();
	private Double value;

	public Score() {
	}

	public void setMovie(Movie movie) {
		scorePK.setMovie(movie);
	}

	public void setUser(User user) {
		scorePK.setUser(user);
	}

	public ScorePK getScorePK() {
		return scorePK;
	}

	public void setScorePK(ScorePK scorePK) {
		this.scorePK = scorePK;
	}

	public Double getValue() {
		return value;
	}

	public void setValue(Double value) {
		this.value = value;
	}
}