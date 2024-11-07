package com.tien.truyen247be.security.services;

import com.tien.truyen247be.Exception.TheLoaiAlreadyExistsException;
import com.tien.truyen247be.models.Chapter;
import com.tien.truyen247be.models.Comic;
import com.tien.truyen247be.models.Genre;
import com.tien.truyen247be.payload.request.ChapterRequest;
import com.tien.truyen247be.payload.request.ComicRequest;
import com.tien.truyen247be.repository.ChapterRepository;
import com.tien.truyen247be.repository.ComicRepository;
import com.tien.truyen247be.repository.GenreRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;


@Service
public class ComicService {
    @Autowired
    private ComicRepository comicRepository;

    @Autowired
    private GenreRepository genreRepository;

    @Autowired
    private ChapterRepository chapterRepository;

    @Autowired
    S3Service s3Service;

    public ResponseEntity<?> createComic(ComicRequest comicRequest, MultipartFile file) throws IOException {
        if (!comicRepository.existsByName(comicRequest.getName())) {
            Comic comic = new Comic();
            String thumbnail = s3Service.uploadFile(file);
            comic.setName(comicRequest.getName());
            comic.setOtherName(comicRequest.getOtherName());
            comic.setAuthor(comicRequest.getAuthor());
            comic.setContent(comicRequest.getContent());
            comic.setStatus(comicRequest.getStatus());
            comic.setActivate(comicRequest.isActivate());
            comic.setThumbnail(thumbnail);
            comicRepository.save(comic);
            return ResponseEntity.ok("Tạo truyện mới thành công!");
        } else {
            throw new TheLoaiAlreadyExistsException("Tên truyện đã tồn tại. Vui lòng chọn tên khác.");
        }
    }

    // Lấy truyện tranh theo ID
    public Comic getComicById(Long id) {
        return comicRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Comic not found with id: " + id));
    }

    // Thêm thể loại vào truyện tranh
    @Transactional
    public Comic addGenresToComic(Long comicId, List<Long> genreIds) {
        Comic comic = getComicById(comicId);
        Set<Genre> genres = genreIds.stream()
                .map(id -> genreRepository.findById(id)
                        .orElseThrow(() -> new RuntimeException("Thể loại không tìm thấy với id: " + id)))
                .collect(Collectors.toSet());
        comic.getGenres().addAll(genres);
        return comicRepository.save(comic);
    }

    // Thêm chương vào truyện tranh
    @Transactional
    public ResponseEntity<?> addChapterToComic(Long comicId, ChapterRequest chapterRequest) {
        if (!chapterRepository.existsByTitle(chapterRequest.getTitle()) && !chapterRepository.existsByChapterNumber(chapterRequest.getChapterNumber())) {
            Comic comic = getComicById(comicId);
            Chapter chapter = new Chapter();
            chapter.setComic(comic);
            chapter.setTitle(chapterRequest.getTitle());
            chapter.setChapterNumber(chapterRequest.getChapterNumber());
            chapterRepository.save(chapter);
            return ResponseEntity.ok("Thêm chương mới thành công!");
        }
        throw new TheLoaiAlreadyExistsException("Tiêu đề hoặc số chương đã tồn tại!");
    }
}
