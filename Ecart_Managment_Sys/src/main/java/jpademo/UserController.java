package jpademo;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
@CrossOrigin(origins = "http://localhost:4200")

public class UserController {
     
		@Autowired
		private UserRepository userRepository;
		
		@GetMapping("/users")
		public List<User> getUsers(){
			return (List<User>) userRepository.findAll();
		}
		
		/*@GetMapping("/users/{id}")
		public User getById(@PathVariable int id) {
			return userRepository.findById(id).get();
		}*/
		
		@PostMapping("/users")
		void addUser(@RequestBody User user) {
			userRepository.save(user);	
		}
		
		// update Product
		
		@PutMapping("/users/{id}")
		public ResponseEntity<User> updateUser(@PathVariable int id, @RequestBody User userDetails){
			User user = userRepository.findById(id)
					.orElseThrow(() -> new  ResourceNotFoundException("User not exist with id :" + id));
			
			user.setItem(userDetails.getItem());
			user.setCategory(userDetails.getCategory());
			user.setPrice(userDetails.getPrice());
			user.setQty(userDetails.getQty());
			
			User updatedProduct = userRepository.save(user);
			return ResponseEntity.ok(updatedProduct);
		}
		
		// delete employee rest api
		@DeleteMapping("/users/{id}")
		public ResponseEntity<Map<String, Boolean>> deleteUser(@PathVariable int id){
			User user = userRepository.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + id));
			
			userRepository.delete(user);
			Map<String, Boolean> response = new HashMap<>();
			response.put("deleted", Boolean.TRUE);
			return ResponseEntity.ok(response);
		}

		
	}
