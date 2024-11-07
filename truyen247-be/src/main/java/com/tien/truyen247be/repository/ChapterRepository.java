package com.tien.truyen247be.repository;

import com.tien.truyen247be.models.Chapter;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ChapterRepository extends JpaRepository<Chapter, Long> {
    boolean existsByTitle(String title);
    boolean existsByChapterNumber(int chapterNumber);
}
