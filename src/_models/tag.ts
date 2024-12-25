export class Tag {
    static readonly ANGULAR = new Tag('Angular', 'red');
    static readonly HTML = new Tag('HTML', 'blue');
    static readonly CSS = new Tag('CSS', 'green');
    static readonly JAVASCRIPT = new Tag('JavaScript', 'yellow');
    static readonly TYPESCRIPT = new Tag('TypeScript', 'purple');
    static readonly NODEJS = new Tag('NodeJS', 'orange');
    static readonly C = new Tag('C', 'brown');
    static readonly JAVA = new Tag('Java', 'black');
    static readonly PYTHON = new Tag('Python', 'gray');
    static readonly PHP = new Tag('PHP', 'pink');
    static readonly SQL = new Tag('SQL', 'darkblue');
    static readonly POSTGRESQL = new Tag('PostgreSQL', 'teal');
    static readonly BOOTSTRAP = new Tag('Bootstrap', 'magenta');
    static readonly ALGORITHMS = new Tag('Algorithms', 'lightblue');
    static readonly GRAPH_ALGORITHMS = new Tag('Graph', 'lime');
    static readonly OPTIMIZATION = new Tag('Optimization', 'gold');
    static readonly LINEAR_PROGRAMMING = new Tag('Linear Programming', 'darkpurple');
    static readonly MACHINE_LEARNING = new Tag('Machine Learning', 'darkorange');
    static readonly ACP = new Tag('ACP', 'chocolate');
    static readonly CLUSTERING = new Tag('Clustering', 'darkslategray');
    static readonly GAME_DEVELOPMENT = new Tag('Game Development', 'darkviolet');
    static readonly DATA_STRUCTURES = new Tag('Data Structures', 'salmon');
    static readonly OOP = new Tag('OOP', 'cyan');
    static readonly API = new Tag('API', 'skyblue');
    static readonly NUMERICAL_METHODS = new Tag('Numerical Methods', 'steelblue');

    private constructor(private readonly key: string, private readonly color: string) {}

    getKey(): string {
        return this.key;
    }

    getColor(): string {
        return this.color;
    }
}
