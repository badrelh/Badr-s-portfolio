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
    static readonly SQL = new Tag('SQL', 'white');
    static readonly POSTGRESQL = new Tag('MySQL', 'cyan');

   

    private constructor(private readonly key: string,private readonly color: string) {
    }

    getKey(): string {  
        return this.key;
    }

    getColor(): string {
        return this.color;
    }



}
