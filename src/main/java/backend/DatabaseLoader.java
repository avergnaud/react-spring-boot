package backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements CommandLineRunner {

    private final EmployeeRepository repository;

    @Autowired
    public DatabaseLoader(EmployeeRepository repository) {
        this.repository = repository;
    }

    @Override
    public void run(String... strings) throws Exception {
        this.repository.save(new Employee("Thomas Jefferson", 47, 5));
        this.repository.save(new Employee("John Hancock", 54, 8));
        this.repository.save(new Employee("William Williams", 34, 12));
        this.repository.save(new Employee("John Adams", 33, 2));
    }
}
