package com.tien.truyen247be.controllers;

import com.tien.truyen247be.models.TheLoai;
import com.tien.truyen247be.payload.request.TheLoaiRequest;
import com.tien.truyen247be.payload.response.TheLoaiResponse;
import com.tien.truyen247be.security.services.TheLoaiService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/admin/theloais")
public class TheLoaiController {
    @Autowired
    private TheLoaiService theLoaiService;

    // Lấy danh sách của tất cả thể loại truyện
    @GetMapping
    public ResponseEntity<?> getAllTheLoai() {
        return theLoaiService.getAllTheLoai();
    }

    // Tạo thể loại truyện mới
    @PostMapping
    public ResponseEntity<?> createTheLoai(@Valid @RequestBody TheLoaiRequest theLoaiRequest) {
        return ResponseEntity.ok(theLoaiService.createTheLoai(theLoaiRequest));
    }

    // Cập nhật thể loại truyện theo id
    @PostMapping("/{id}")
    public ResponseEntity<?> updateTheLoai(@Valid @PathVariable Long id, @RequestBody TheLoaiRequest theLoaiRequest) {
        return ResponseEntity.ok(theLoaiService.updateTheLoai(id, theLoaiRequest));
    }

    // Xóa thể loại theo id
    @DeleteMapping("/{id}")
    public ResponseEntity<TheLoai> deleteTheLoai(@PathVariable Long id) {
        Optional<TheLoai> theLoai = theLoaiService.getTheLoaiById(id);
        return ResponseEntity.noContent().build();
    }
}
