package com.tien.truyen247be.Exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(TheLoaiAlreadyExistsException.class)
    public ResponseEntity<ErrorResponse> handleTheLoaiAlreadyExistsException(TheLoaiAlreadyExistsException ex) {
        ErrorResponse errorResponse = new ErrorResponse(
                ex.getMessage(),
                HttpStatus.CONFLICT.value(),
                "THELOAI_ALREADY_EXISTS" // Mã lỗi cho loại thể loại đã tồn tại
        );
        return new ResponseEntity<>(errorResponse, HttpStatus.CONFLICT);
    }
}