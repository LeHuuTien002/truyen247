package com.tien.truyen247be.security.services;

import com.tien.truyen247be.Exception.TheLoaiAlreadyExistsException;
import com.tien.truyen247be.models.Genre;
import com.tien.truyen247be.payload.request.GenreRequest;
import com.tien.truyen247be.payload.response.GenreResponse;
import com.tien.truyen247be.repository.GenreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class GenreService {
    @Autowired
    private GenreRepository genreRepository;

    public ResponseEntity<List<GenreResponse>> getAllGenre() {
        List<Genre> theLoaiList = genreRepository.findAll();
        if (!theLoaiList.isEmpty()) {
            List<GenreResponse> genreResponseList = new ArrayList<>();
            for (Genre genre : theLoaiList) {
                GenreResponse genreResponse = new GenreResponse();
                genreResponse.setId(genre.getId());
                genreResponse.setName(genre.getName());
                genreResponse.setDescription(genre.getDescription());
                genreResponse.setCreateAt(genre.getCreateAt());
                genreResponse.setUpdateAt(genre.getUpdateAt());
                genreResponseList.add(genreResponse);
            }
            return ResponseEntity.ok(genreResponseList);
        } else {
            return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
        }
    }

    public Optional<Genre> getGenreById(Long genreId) {
        return genreRepository.findById(genreId);
    }

    public ResponseEntity<?> createGenre(GenreRequest genreRequest) {
        if (!genreRepository.existsByName(genreRequest.getName())) {
            Genre genre = new Genre();
            genre.setName(genreRequest.getName());
            genre.setDescription(genreRequest.getDescription());
            genreRepository.save(genre);
            return ResponseEntity.ok("Tạo thể loại truyện thành công!");
        } else {
            throw new TheLoaiAlreadyExistsException("Tên thể loại đã tồn tại. Vui lòng chọn tên khác.");
        }
    }

    public ResponseEntity<?> updateGenre(Long genreId, GenreRequest genreRequest) {
        // Kiểm tra xem id có tồn tại trong cơ sở dữ liệu hay không
        Optional<Genre> genreOptional = genreRepository.findById(genreId);
        if (genreOptional.isEmpty()) {
            // Nếu id không tồn tại, trả về mã lỗi 404 (Not Found) cùng thông báo lỗi
            throw new TheLoaiAlreadyExistsException("Id thể loại truyện này không tồn tại!");
        } else {
            // Nếu id tồn tại, tiến hành cập nhật
            Genre genre = genreOptional.get();
            genre.setName(genreRequest.getName());
            genre.setDescription(genreRequest.getDescription());
            genreRepository.save(genre);
            return ResponseEntity.ok("Cập nhật thể loại truyện thành công!");
        }
    }

    public ResponseEntity<?> deleteGenre(Long theLoaiId) {
        // Kiểm tra xem ID có tồn tại trong cơ sở dữ liệu không
        if (!genreRepository.existsById(theLoaiId)) {
            // Nếu ID không tồn tại, trả về phản hồi lỗi
            throw new TheLoaiAlreadyExistsException("Id thể loại truyện này không tồn tại!");
        } else {
            genreRepository.deleteById(theLoaiId);
        }
        return ResponseEntity.ok("Đã xóa thành công!");
    }
}
