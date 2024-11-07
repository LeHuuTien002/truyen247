package com.tien.truyen247be.controllers;

import com.tien.truyen247be.payload.request.ChapterRequest;
import com.tien.truyen247be.payload.request.ComicRequest;
import com.tien.truyen247be.security.services.ComicService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api/admin/comics")
public class ComicController {
    @Autowired
    private ComicService comicService;

    // Tạo một truyện tranh mới
    @PostMapping("/create")
    public ResponseEntity<?> createComic(@Valid @RequestPart("comicRequest") ComicRequest comicRequest, @RequestPart("file") MultipartFile file) throws IOException {
        return ResponseEntity.ok(comicService.createComic(comicRequest, file));
    }

    // Thêm thể loại vào truyện tranh
    @PostMapping("/{comicId}/genres")
    public ResponseEntity<?> addGenresToComic(@PathVariable Long comicId, @RequestBody List<Long> genresId) {
        return ResponseEntity.ok(comicService.addGenresToComic(comicId, genresId));
    }

    // Thêm một chương vào truyện tranh
    @PostMapping("/{comicId}/chapters")
    public ResponseEntity<?> addChapterToComic(@PathVariable Long comicId, @RequestBody ChapterRequest chapterRequest) {
        return ResponseEntity.ok(comicService.addChapterToComic(comicId, chapterRequest));
    }
}
