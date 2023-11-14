package org.petrax.controllers;

import org.petrax.data.FileRepository;
import org.petrax.models.FileEntity;
import org.petrax.service.FileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@CrossOrigin(origins="http://localhost:4200")
@RestController
@RequestMapping("/api/v1/images")
public class FileController {
    @Autowired
    private FileService fileService;

    @Autowired
    private FileRepository fileRepository;

    @PostMapping("/upload")
    public FileEntity uploadFile(@RequestParam("file") MultipartFile file) throws IOException {
        FileEntity fileEntity = new FileEntity(file.getOriginalFilename(), file.getContentType(), file.getBytes());
        return fileRepository.save(fileEntity);
    }
}
