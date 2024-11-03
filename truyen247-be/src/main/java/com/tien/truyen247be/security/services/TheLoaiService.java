package com.tien.truyen247be.security.services;

import com.tien.truyen247be.Exception.TheLoaiAlreadyExistsException;
import com.tien.truyen247be.models.TheLoai;
import com.tien.truyen247be.payload.request.TheLoaiRequest;
import com.tien.truyen247be.payload.response.TheLoaiResponse;
import com.tien.truyen247be.repository.TheLoaiRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class TheLoaiService {
    @Autowired
    private TheLoaiRepository theLoaiRepository;

    public ResponseEntity<List<TheLoaiResponse>> getAllTheLoai() {
        List<TheLoai> theLoaiList = theLoaiRepository.findAll();
        if (!theLoaiList.isEmpty()) {
            List<TheLoaiResponse> theLoaiResponseList = new ArrayList<>();
            for (TheLoai theLoai : theLoaiList) {
                TheLoaiResponse theLoaiResponse = new TheLoaiResponse();
                theLoaiResponse.setId(theLoai.getId());
                theLoaiResponse.setTenTheLoai(theLoai.getTenTheLoai());
                theLoaiResponse.setMota(theLoai.getMota());
                theLoaiResponse.setNgaytao(theLoai.getNgaytao());
                theLoaiResponse.setNgaycapnhat(theLoai.getNgaycapnhat());
                theLoaiResponseList.add(theLoaiResponse);
            }
            return ResponseEntity.ok(theLoaiResponseList);
        } else {
            return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
        }
    }

    public Optional<TheLoai> getTheLoaiById(Long theLoaiId) {
        return theLoaiRepository.findById(theLoaiId);
    }

    public ResponseEntity<?> createTheLoai(TheLoaiRequest theLoaiRequest) {
        TheLoaiResponse theLoaiResponse = new TheLoaiResponse();
        if (!theLoaiRepository.existsByTenTheLoai(theLoaiRequest.getTenTheLoai())) {
            TheLoai theLoai = new TheLoai();
            theLoai.setTenTheLoai(theLoaiRequest.getTenTheLoai());
            theLoai.setMota(theLoaiRequest.getMota());
            theLoaiRepository.save(theLoai);
            return ResponseEntity.ok("Tạo thể loại truyện thành công!");
        } else {
            throw new TheLoaiAlreadyExistsException("Tên thể loại đã tồn tại. Vui lòng chọn tên khác.");
        }
    }

    public ResponseEntity<?> updateTheLoai(Long theLoaiId, TheLoaiRequest theLoaiRequest) {
        // Kiểm tra xem id có tồn tại trong cơ sở dữ liệu hay không
        Optional<TheLoai> theLoaiOptional = theLoaiRepository.findById(theLoaiId);
        if (theLoaiOptional.isEmpty()) {
            // Nếu id không tồn tại, trả về mã lỗi 404 (Not Found) cùng thông báo lỗi
            throw new TheLoaiAlreadyExistsException("Id thể loại truyện này không tồn tại!");
        } else {
            // Nếu id tồn tại, tiến hành cập nhật
            TheLoai theLoai = theLoaiOptional.get();
            theLoai.setTenTheLoai(theLoaiRequest.getTenTheLoai());
            theLoai.setMota(theLoaiRequest.getMota());
            theLoaiRepository.save(theLoai);
            return ResponseEntity.ok("Cập nhật thể loại truyện thành công!");
        }
    }

    public ResponseEntity<?> delteTheLoai(Long theLoaiId) {
        // Kiểm tra xem ID có tồn tại trong cơ sở dữ liệu không
        if (!theLoaiRepository.existsById(theLoaiId)) {
            // Nếu ID không tồn tại, trả về phản hồi lỗi
            throw new TheLoaiAlreadyExistsException("Id thể loại truyện này không tồn tại!");
        } else {
            theLoaiRepository.deleteById(theLoaiId);
        }
        return ResponseEntity.ok("Đã xóa thành công!");
    }
}
