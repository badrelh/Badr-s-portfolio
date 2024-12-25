import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProjectCardComponent } from "../project-card/project-card.component";
import { CommonModule } from '@angular/common';
import { Project } from '../../_models/Projects'; 
import { Tag } from '../../_models/tag';



@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [RouterModule, ProjectCardComponent, CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  @Input() index!: number;
  projects: Project[] = [
    new Project(
      1, // ID unique du projet
      'Delivery Management System', // Titre du projet
      'Developed a database management system for delivery tracking using PostgreSQL and an interactive web interface with PHP, HTML, CSS, and JavaScript.', // Description courte
      [Tag.POSTGRESQL, Tag.PHP, Tag.HTML, Tag.CSS, Tag.JAVASCRIPT], // Tags associés
      '', // Lien GitHub (remplacez avec le lien réel)
      '', // Lien déployé (ajoutez un lien si applicable)
    
      `
      <h3 class="text-primary mt-4">Overview</h3>
      <p>
        This project focuses on developing a <strong>delivery management system</strong> that simplifies the management of logistics operations. It provides a centralized platform to manage drivers, trucks, deliveries, goods, depots, and cities efficiently.
      </p>
      
      <h3 class="text-primary mt-4">Key Features</h3>
      <ul class="list-unstyled">
        <li><strong>Database Design:</strong> Created an entity-relationship model converted into a relational schema, adhering to normalization rules (1NF, 2NF, 3NF, BCNF).</li>
        <li><strong>Interactive Interface:</strong> Built a user-friendly web interface using PHP, HTML, CSS, and JavaScript for CRUD operations on deliveries, drivers, and trucks.</li>
        <li><strong>Statistics and Reporting:</strong> Generated useful insights such as:
          <ul>
            <li>Average delivery weights per truck</li>
            <li>Driver rankings based on performance metrics</li>
            <li>Distances and proximity analysis between depots</li>
          </ul>
        </li>
        <li><strong>Security:</strong> Implemented SQL injection prevention using PostgreSQL functions and PHP mechanisms like <code>pg_escape_string</code>.</li>
      </ul>
      
      <h3 class="text-primary mt-4">Applications</h3>
      <ul class="list-unstyled">
        <li><strong>Fleet Management:</strong> Allows managers to oversee driver assignments and truck usage effectively.</li>
        <li><strong>Delivery Optimization:</strong> Enables better planning and organization of delivery routes and resources.</li>
        <li><strong>Decision Support:</strong> Provides data-driven insights for logistics decision-making.</li>
      </ul>
      
      <h3 class="text-primary mt-4">Results</h3>
      <ul class="list-unstyled">
        <li>Developed a robust and functional database system tailored for logistics management.</li>
        <li>Enhanced operational efficiency by automating data handling processes.</li>
        <li>Provided a user-friendly interface for interacting with the system.</li>
      </ul>
      
      <h3 class="text-primary mt-4">Technologies Used</h3>
      <ul class="list-unstyled">
        <li><strong>Database:</strong> PostgreSQL</li>
        <li><strong>Backend:</strong> PHP</li>
        <li><strong>Frontend:</strong> HTML, CSS, JavaScript</li>
        <li><strong>Tools:</strong> pg_query, pg_fetch_assoc, pg_escape_string</li>
      </ul>
      
      <p class="mt-4">
        This project highlights my skills in <strong>database management</strong>, secure web development, and creating solutions tailored to meet logistics challenges.
      </p>
      `
    ),    
    new Project(
      2, // ID unique du projet
      'Drone Delivery System', // Titre du projet
      'Designed and implemented a drone delivery system using Python and graph algorithms to optimize delivery routes.', // Description courte
      [Tag.PYTHON, Tag.GRAPH_ALGORITHMS, Tag.OPTIMIZATION], // Tags associés
      '', // Pas de lien GitHub
      '', // Pas de lien déployé
    
      `
      <h3 class="text-primary mt-4">Overview</h3>
      <p>
        This project focuses on designing an efficient <strong>drone delivery system</strong> that leverages graph algorithms to optimize delivery routes and reduce overall operational costs. It simulates real-world logistics challenges and proposes solutions to ensure timely and accurate deliveries.
      </p>
      
      <h3 class="text-primary mt-4">Key Features</h3>
      <ul class="list-unstyled">
        <li><strong>Route Optimization:</strong> Used graph algorithms such as Dijkstra’s algorithm and Minimum Spanning Tree (MST) for efficient delivery path planning.</li>
        <li><strong>Cost Analysis:</strong> Calculated the operational costs associated with different delivery routes to identify the most cost-effective solutions.</li>
        <li><strong>Delivery Scheduling:</strong> Developed scheduling models to handle multiple drones and deliveries simultaneously.</li>
        <li><strong>Simulation:</strong> Simulated drone movement and delivery processes to validate the algorithmic approaches.</li>
        <li><strong>Scalability:</strong> Designed the system to handle an increasing number of drones and delivery nodes.</li>
      </ul>
      
      <h3 class="text-primary mt-4">Applications</h3>
      <ul class="list-unstyled">
        <li><strong>Last-Mile Delivery:</strong> Optimizes the final stage of delivery to reduce costs and improve efficiency.</li>
        <li><strong>Logistics:</strong> Provides a scalable solution for urban and rural delivery challenges.</li>
        <li><strong>Emergency Supplies:</strong> Potential use cases in delivering medical supplies or essential items in critical situations.</li>
      </ul>
      
      <h3 class="text-primary mt-4">Results</h3>
      <ul class="list-unstyled">
        <li>Implemented a functional prototype of a drone delivery system.</li>
        <li>Reduced delivery times by an average of 20% through optimized routes.</li>
        <li>Demonstrated scalability and efficiency of the proposed solution in simulation environments.</li>
      </ul>
      
      <h3 class="text-primary mt-4">Technologies Used</h3>
      <ul class="list-unstyled">
        <li><strong>Programming Language:</strong> Python</li>
        <li><strong>Algorithms:</strong> Graph algorithms such as Dijkstra’s algorithm, Minimum Spanning Tree</li>
        <li><strong>Tools:</strong> Matplotlib for visualization, NumPy for numerical computation</li>
      </ul>
      
      <p class="mt-4">
        This project demonstrates my expertise in <strong>graph algorithms</strong>, logistics optimization, and developing scalable systems for real-world challenges. It highlights a practical approach to solving modern delivery problems using technology.
      </p>
      `
    ),
    new Project(
      3, // ID unique du projet
      'Music Recommendation System', // Titre du projet
      'Built a music recommendation system using Spotify’s database and Python, providing song recommendations based on user preferences.', // Description courte
      [Tag.PYTHON, Tag.SQL, Tag.MACHINE_LEARNING, Tag.ACP, Tag.CLUSTERING], // Tags associés
      '', // Pas de lien GitHub
      '', // Pas de lien déployé
    
      `
      <h3 class="text-primary mt-4">Overview</h3>
      <p>
        This project leverages publicly available music datasets from Spotify to build a <strong>music recommendation system</strong>. Using advanced data analysis techniques, the system provides song recommendations based on user preferences.
      </p>
      
      <h3 class="text-primary mt-4">Key Features</h3>
      <ul class="list-unstyled">
        <li><strong>Data Analysis:</strong> Processed and analyzed data features such as <i>acousticness</i>, <i>danceability</i>, <i>energy</i>, and <i>valence</i> to capture the musical essence.</li>
        <li><strong>Principal Component Analysis (PCA):</strong> Reduced data dimensionality while preserving key musical attributes for clustering and recommendation.</li>
        <li><strong>Clustering:</strong> Implemented K-means clustering to group songs with similar features and identify patterns in user preferences.</li>
        <li><strong>Recommendation Logic:</strong> Based on user input, the system identifies the closest clusters and suggests songs that match the desired profile.</li>
        <li><strong>Error Handling:</strong> Addressed normalization issues by refining PCA applications for better recommendations.</li>
      </ul>
      
      <h3 class="text-primary mt-4">Applications</h3>
      <ul class="list-unstyled">
        <li><strong>Personalized Music Recommendations:</strong> Helps users discover songs aligned with their musical tastes.</li>
        <li><strong>Data-Driven Insights:</strong> Provides valuable analytics for understanding trends and user preferences in music.</li>
        <li><strong>Scalable Solution:</strong> Adaptable to larger datasets and commercial recommendation platforms.</li>
      </ul>
      
      <h3 class="text-primary mt-4">Results</h3>
      <ul class="list-unstyled">
        <li>Successfully clustered songs into meaningful groups based on musical characteristics.</li>
        <li>Generated accurate recommendations in test scenarios, aligning with user preferences.</li>
        <li>Refined algorithms to handle edge cases and improve the overall accuracy of recommendations.</li>
      </ul>
      
      <h3 class="text-primary mt-4">Technologies Used</h3>
      <ul class="list-unstyled">
        <li><strong>Programming Language:</strong> Python</li>
        <li><strong>Algorithms:</strong> Principal Component Analysis (PCA), K-means clustering</li>
        <li><strong>Libraries:</strong> Pandas, NumPy, Scikit-learn, Matplotlib</li>
        <li><strong>Database:</strong> Spotify’s public dataset</li>
      </ul>
      
      <p class="mt-4">
        This project demonstrates expertise in <strong>data analysis</strong>, clustering algorithms, and building recommendation systems. It highlights a practical application of machine learning techniques in the music industry.
      </p>
      `
    )
    ,
    new Project(
      4, // ID unique du projet
      'Megalopolis Game Features', // Titre du projet
      'Programmed various game mechanics and features for Megalopolis using TypeScript, focusing on scalability and user experience.', // Description courte
      [Tag.TYPESCRIPT, Tag.GRAPH_ALGORITHMS, Tag.GAME_DEVELOPMENT, Tag.DATA_STRUCTURES], // Tags associés
      '', // Pas de lien GitHub
      '', // Pas de lien déployé
    
      `
      <h3 class="text-primary mt-4">Overview</h3>
      <p>
        This project implements core mechanics for the board game <strong>Megalopolis</strong> using TypeScript. Players strategically place tiles to build a city, earning points based on specific rules. The project emphasizes graph-based algorithms for scoring and efficient gameplay.
      </p>
      
      <h3 class="text-primary mt-4">Key Features</h3>
      <ul class="list-unstyled">
        <li><strong>Tile Placement:</strong> Implemented rules for tile adjacency and overlap validation, ensuring legal gameplay.</li>
        <li><strong>Scoring System:</strong> Developed a dynamic scoring algorithm using graph representations for districts and roads.</li>
        <li><strong>Graph Algorithms:</strong> Used adjacency matrices to calculate connected components, enabling score evaluation for city districts and road connectivity.</li>
        <li><strong>Strategy Optimization:</strong> Introduced probabilistic algorithms for efficient tile placement, improving game performance and player experience.</li>
        <li><strong>Data Structures:</strong> Transitioned from matrices to immutable structures for better performance and scalability.</li>
      </ul>
      
      <h3 class="text-primary mt-4">Applications</h3>
      <ul class="list-unstyled">
        <li><strong>Game Mechanics:</strong> Provides a scalable framework for implementing strategy games with complex rules.</li>
        <li><strong>Graph Theory:</strong> Demonstrates practical use of graph algorithms in game development.</li>
        <li><strong>Educational Use:</strong> Serves as a case study for applying data structures and algorithms in interactive systems.</li>
      </ul>
      
      <h3 class="text-primary mt-4">Results</h3>
      <ul class="list-unstyled">
        <li>Implemented a functional prototype with core gameplay mechanics.</li>
        <li>Optimized game performance by using probabilistic algorithms for tile placement.</li>
        <li>Achieved a test coverage of over 89%, ensuring robust and validated functionality.</li>
      </ul>
      
      <h3 class="text-primary mt-4">Technologies Used</h3>
      <ul class="list-unstyled">
        <li><strong>Programming Language:</strong> TypeScript</li>
        <li><strong>Libraries:</strong> Immutable.js for data structures, Jest for testing</li>
        <li><strong>Algorithms:</strong> Graph traversal, connected components analysis</li>
        <li><strong>Tools:</strong> ESLint for code quality, custom probabilistic placement algorithms</li>
      </ul>
      
      <p class="mt-4">
        This project showcases expertise in game mechanics design, graph-based algorithms, and scalable software development. It highlights a strong foundation in TypeScript and a practical application of data structures for complex systems.
      </p>
      `
    )
    ,
    new Project(
      5, // ID unique du projet
      'Carcassonne Game Development', // Titre du projet
      'Developed a digital adaptation of the board game Carcassonne, focusing on tile placement, scoring mechanics, and player interactions using the C programming language.', // Description courte
      [Tag.C, Tag.GAME_DEVELOPMENT, Tag.GRAPH_ALGORITHMS, Tag.DATA_STRUCTURES], // Tags associés
      '', // Pas de lien GitHub
      '', // Pas de lien déployé
    
      `
      <h3 class="text-primary mt-4">Overview</h3>
      <p>
        This project involves the development of a digital version of the strategic board game <strong>Carcassonne</strong>, focusing on implementing tile placement rules, calculating scores, and simulating player interactions. The game emphasizes graph-based algorithms and efficient data handling to recreate the experience of the original board game.
      </p>
      
      <h3 class="text-primary mt-4">Key Features</h3>
      <ul class="list-unstyled">
        <li><strong>Tile Placement Mechanics:</strong> Implemented adjacency rules to ensure valid placements and connect structures like cities, roads, and monasteries.</li>
        <li><strong>Scoring System:</strong> Developed algorithms to calculate points dynamically based on completed structures and player ownership.</li>
        <li><strong>Meeple Management:</strong> Added logic for player meeples, tracking ownership and usage across the board.</li>
        <li><strong>Graph-Based Representation:</strong> Used graph data structures to represent the game board, enabling efficient validation and scoring.</li>
        <li><strong>Turn-Based Gameplay:</strong> Simulated turns for multiple players, handling tile draws, placements, and scoring updates.</li>
      </ul>
      
      <h3 class="text-primary mt-4">Applications</h3>
      <ul class="list-unstyled">
        <li><strong>Board Game Simulation:</strong> Provides a foundation for digitizing board games with complex rules and interactions.</li>
        <li><strong>Algorithmic Learning:</strong> Demonstrates the practical application of graph algorithms in game mechanics.</li>
        <li><strong>Strategy Testing:</strong> Allows players to explore strategies and optimize gameplay decisions.</li>
      </ul>
      
      <h3 class="text-primary mt-4">Results</h3>
      <ul class="list-unstyled">
        <li>Successfully implemented core mechanics of Carcassonne, including tile placement and scoring rules.</li>
        <li>Validated gameplay interactions with a high degree of test coverage.</li>
        <li>Optimized graph traversal algorithms for efficient scoring and validation.</li>
      </ul>
      
      <h3 class="text-primary mt-4">Technologies Used</h3>
      <ul class="list-unstyled">
        <li><strong>Programming Language:</strong> C</li>
        <li><strong>Data Structures:</strong> Custom graph representations for tile and structure management</li>
        <li><strong>Algorithms:</strong> Graph traversal, adjacency validation, and connected components analysis</li>
        <li><strong>Tools:</strong> GCC for compilation, Valgrind for memory debugging</li>
      </ul>
      
      <p class="mt-4">
        This project highlights expertise in game mechanics implementation, graph-based algorithms, and scalable software design. It reflects a strong understanding of C programming for complex systems and interactive applications.
      </p>
      `
    )
    ,
    new Project(
      6, // ID unique du projet
      'Portfolio Website', // Titre du projet
      'Designed and implemented a personal portfolio website to showcase my skills, projects, and achievements using Angular, Bootstrap, and responsive design principles.', // Description courte
      [Tag.ANGULAR, Tag.BOOTSTRAP, Tag.HTML, Tag.CSS], // Tags associés
      '', // Lien GitHub (remplacez avec le lien réel)
      '', // Lien déployé (remplacez avec le lien réel si applicable)
    
      `
      <h3 class="text-primary mt-4">Overview</h3>
      <p>
        This portfolio project showcases my <strong>web development skills</strong> by presenting my projects, achievements, and resume in a visually appealing and user-friendly format.
      </p>
      
      <h3 class="text-primary mt-4">Key Features</h3>
      <ul class="list-unstyled">
        <li><strong>Project Gallery:</strong> An interactive gallery that highlights my projects, each with detailed descriptions and technologies used.</li>
        <li><strong>Responsive Design:</strong> Fully optimized for desktops, tablets, and mobile devices using modern <strong>CSS</strong> and <strong>Bootstrap</strong>.</li>
        <li><strong>Resume Section:</strong> A well-structured section that includes my education, skills, and work experience.</li>
        <li><strong>Contact Form:</strong> A functional form that allows visitors to contact me directly.</li>
        <li><strong>Deployment:</strong> Hosted on <strong>GitHub Pages</strong> with Angular's production build optimization for fast loading.</li>
      </ul>
      
      <h3 class="text-primary mt-4">Technologies Used</h3>
      <ul class="list-unstyled">
        <li><strong>Framework:</strong> Angular</li>
        <li><strong>Styling:</strong> Bootstrap, HTML, CSS</li>
        <li><strong>Hosting:</strong> GitHub Pages</li>
      </ul>
      
      <h3 class="text-primary mt-4">Results</h3>
      <ul class="list-unstyled">
        <li>Enhanced visibility of my skills and projects to potential employers.</li>
        <li>Improved user engagement through a responsive and clean design.</li>
      </ul>
      
      <p class="mt-4">
        This project not only highlights my technical expertise in <strong>web development</strong> but also demonstrates my ability to create user-focused designs and deploy production-ready applications.
      </p>
      `
    ),    
    new Project(
      6, // ID unique du projet
      'Bin Packing with Fragile Objects', // Titre du projet
      'Developed a mathematical model and implemented a solution for the bin-packing problem with fragile objects using Python and linear programming techniques.', // Description courte
      [Tag.PYTHON, Tag.LINEAR_PROGRAMMING, Tag.OPTIMIZATION], // Tags associés
      '', // Lien GitHub
      '', // Lien déployé (à ajouter si disponible)
    
      `
      <h3 class="text-primary mt-4">Overview</h3>
      <p>
        This project solves a challenging <strong>bin-packing problem</strong> where items, each characterized by weight and fragility constraints, must be packed into the minimum number of bins.
      </p>
      
      <h3 class="text-primary mt-4">Key Features</h3>
      <ul class="list-unstyled">
        <li><span class="fw-bold">Objective:</span> Minimize the number of bins while respecting weight and fragility constraints.</li>
        <li><span class="fw-bold">Formulations:</span>
          <ul>
            <li><span class="fw-semibold">Initial Formulation:</span> Utilizes binary variables to track bin usage and item assignments.</li>
            <li><span class="fw-semibold">Enhanced Formulation:</span> Optimizes the solution by reducing the number of bins from 9 to <strong>7</strong>.</li>
          </ul>
        </li>
        <li><span class="fw-bold">Optimization Techniques:</span> Leveraged <span class="fw-bold text-primary">Python's mip library</span> and <span class="fw-bold text-primary">integer linear programming</span> for modeling and solving.</li>
      </ul>
      
      <h3 class="text-primary mt-4">Applications</h3>
      <ul class="list-unstyled">
        <li><span class="fw-bold">Telecommunications:</span> Assigning channels under noise and interference constraints.</li>
        <li><span class="fw-bold">Resource Allocation:</span> Optimizing packing and distribution in logistics and operations.</li>
      </ul>
      
      <h3 class="text-primary mt-4">Results</h3>
      <ul class="list-unstyled">
        <li>Both formulations respected all constraints.</li>
        <li>The enhanced formulation achieved a more optimal and efficient solution.</li>
      </ul>
      
      <h3 class="text-primary mt-4">Technologies Used</h3>
      <ul class="list-unstyled">
        <li><span class="fw-bold">Language:</span> Python</li>
        <li><span class="fw-bold">Library:</span> mip (Mathematical Integer Programming)</li>
        <li><span class="fw-bold">Approach:</span> Mathematical modeling using integer linear programming</li>
      </ul>
      
      <p class="mt-4">
        This project demonstrates expertise in operational research, algorithm development, and solving real-world optimization challenges.
      </p>
      `
    ),
    new Project(
      7, // ID unique du projet
      'Weather Data Aggregator',
      'Developed a command-line tool for aggregating weather data using HTTP requests and object-oriented programming principles.',
      [Tag.JAVA, Tag.OOP, Tag.API],
      '', // Pas de lien GitHub
      '', // Pas de lien déployé
    
      `
      <h3>Overview</h3>
      <p>
        A command-line tool that retrieves and displays weather forecasts for specified cities using multiple APIs.
        This project demonstrates the application of core object-oriented programming concepts.
      </p>
      
      <h3>Key Features</h3>
      <ul>
        <li><strong>API Integration:</strong> Supports multiple APIs for weather data retrieval (e.g., OpenMeteo, OpenWeather).</li>
        <li><strong>Caching:</strong> Implements caching with a 24-hour time-to-live (TTL) to minimize redundant requests.</li>
        <li><strong>Object-Oriented Design:</strong> Encapsulation, inheritance, and polymorphism ensure modular and maintainable code.</li>
      </ul>
      
      <h3>Results</h3>
      <ul>
        <li>Efficient data retrieval and presentation in a user-friendly command-line interface.</li>
        <li>Improved performance through caching and modular class design.</li>
      </ul>
      
      <h3>Technologies Used</h3>
      <ul>
        <li><strong>Language:</strong> Java</li>
        <li><strong>API Handling:</strong> JSON parsing for API responses</li>
        <li><strong>Design:</strong> Encapsulation, delegation, and polymorphism</li>
      </ul>
      `
    ),
    new Project(
      8,
      'Aerodynamic Profile Analysis',
      'Developed a tool to model air flow and pressure around an aircraft wing using numerical integration and interpolation techniques.',
      [Tag.PYTHON, Tag.NUMERICAL_METHODS],
      '', // Pas de lien GitHub
      '', // Pas de lien déployé
    
      `
      <h3>Overview</h3>
      <p>
        This project focuses on modeling aerodynamic behavior around an aircraft wing. It combines cubic spline interpolation and numerical integration to estimate lift forces based on pressure differences above and below the wing.
      </p>
      
      <h3>Key Features</h3>
      <ul>
        <li><strong>Cubic Spline Interpolation:</strong> Ensures smooth aerodynamic profiles for complex datasets.</li>
        <li><strong>Numerical Integration:</strong> Uses techniques like Simpson’s method and Romberg’s method to compute pressure distributions and lift forces.</li>
        <li><strong>Pressure Mapping:</strong> Calculates pressure around the wing using Bernoulli’s principle.</li>
      </ul>
      
      <h3>Results</h3>
      <ul>
        <li>Accurately modeled lift forces for various wing profiles.</li>
        <li>Optimized algorithms for computational efficiency.</li>
      </ul>
      
      <h3>Technologies Used</h3>
      <ul>
        <li><strong>Language:</strong> Python</li>
        <li><strong>Libraries:</strong> NumPy, Matplotlib</li>
        <li><strong>Approaches:</strong> Numerical integration, Bernoulli's principle</li>
      </ul>
      `
    ),
    new Project(
      9,
      'Nonlinear Systems Solver',
      'Implemented numerical algorithms for solving nonlinear systems, with applications to Lagrange points and stability analysis.',
      [Tag.PYTHON, Tag.ALGORITHMS],
      '', // Pas de lien GitHub
      '', // Pas de lien déployé
    
      `
      <h3>Overview</h3>
      <p>
        This project implements numerical methods for solving nonlinear systems, focusing on Newton-Raphson's method for high-dimensional problems.
      </p>
      
      <h3>Key Features</h3>
      <ul>
        <li><strong>Newton-Raphson Algorithm:</strong> Solves complex systems with dynamic Jacobian calculations.</li>
        <li><strong>Applications:</strong> Stability analysis of Lagrange points in celestial mechanics.</li>
        <li><strong>Backtracking:</strong> Ensures convergence for challenging initial conditions.</li>
      </ul>
      
      <h3>Results</h3>
      <ul>
        <li>Validated solutions for high-dimensional nonlinear systems.</li>
        <li>Enhanced stability and convergence through algorithmic refinements.</li>
      </ul>
      
      <h3>Technologies Used</h3>
      <ul>
        <li><strong>Language:</strong> Python</li>
        <li><strong>Libraries:</strong> NumPy, SciPy</li>
        <li><strong>Approaches:</strong> Jacobian matrices, iterative methods</li>
      </ul>
      `
    )    
    
        
  ];
  
}
