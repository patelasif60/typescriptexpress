import { config } from 'dotenv';
config();

let env: String = process.env.NODE_ENV!;

class Environment {
    private environment;

    constructor(environment : String) {
        this.environment = environment;
    }

    getPort(): Number { 
        if (this.environment === 'prod') {
            return 8081;
        } else if (this.environment === 'dev') {
            return 8082;
        } else if (this.environment === 'qa') {
            return 8083;
        } else {
            return 3001;
        }
    }
}

export default new Environment(env);
