package org.petrax.service;

import org.petrax.data.FileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.petrax.models.FileEntity;

import java.io.IOException;
import java.util.List;

@Service
public class FileService {
    @Autowired
    private FileRepository fileRepository;

    public FileEntity saveFile(MultipartFile file) throws IOException {
        FileEntity fileEntity = new FileEntity();
        fileEntity.setFileName(file.getOriginalFilename());
        fileEntity.setFileType(file.getContentType());
        fileEntity.setData(file.getBytes());

        return fileRepository.save(fileEntity);
    }

    public void deleteFile(Long fileId) {
        fileRepository.deleteById(fileId);
    }

    public List<FileEntity> getAllFiles() {
        return (List<FileEntity>) fileRepository.findAll();
    }
}
