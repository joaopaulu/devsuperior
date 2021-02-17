package com.devsuperior.dslearn.services.iface;

import com.devsuperior.dslearn.dto.UserDTO;
import com.devsuperior.dslearn.dto.UserInsertDTO;
import com.devsuperior.dslearn.dto.UserUpdateDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;

public interface IUserService {

    Page<UserDTO> findAllPaged(PageRequest pageRequest);

    UserDTO findById(Long id);

    UserDTO insert(UserInsertDTO dto);

    UserDTO update(Long id, UserUpdateDTO dto);

    void delete(Long id);
}
