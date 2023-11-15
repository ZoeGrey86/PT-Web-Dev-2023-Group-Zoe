package org.petrax.controllers;

import org.petrax.data.FileRepository;
import org.petrax.models.FileEntity;
import org.petrax.service.FileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins="http://localhost:4200")
@RestController
@RequestMapping("/api/v1/images")
public class FileController {
    @Autowired
    private FileService fileService;

    @Autowired
    private FileRepository fileRepository;

    @GetMapping("/all")
    public ResponseEntity<List<FileEntity>> getAllImages() {
        List<FileEntity> files= fileService.getAllFiles();
        return ResponseEntity.ok().body(files);
    }

    @PostMapping("/upload")
    public FileEntity uploadFile(@RequestParam("file") MultipartFile file) throws IOException {
        FileEntity fileEntity = new FileEntity(file.getOriginalFilename(), file.getContentType(), file.getBytes());
        return fileRepository.save(fileEntity);
    }
    @DeleteMapping("/{imageId}")
    public ResponseEntity<Map<String, String>> deleteFile(@PathVariable Long imageId) {
        try{
            fileService.deleteFile(imageId);
            Map<String,String> response = new HashMap<>();
            response.put("message", "File deleted successfully");
            return ResponseEntity.ok().body(response);
        } catch (Exception e){
            Map<String,String> errorResponse = new HashMap<>();
            errorResponse.put("error", "Error deleting file: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(errorResponse);
        }

    }
}
