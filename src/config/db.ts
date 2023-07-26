import { Sequelize } from 'sequelize';
import  mysql2  from 'mysql2/promise';
import { config } from 'dotenv';
config();

// interface DBConfig {
//     database: string;
//     username: string;
//     password: string;
//     host: string;
//     port: number;
//   }
export class DB {
    private sequelize: Sequelize;
    
  constructor() {
    const config = {
        database: String(process.env.DB_NAME),
        username: String(process.env.DB_USER),
        password: String(process.env.DB_PASSWORD),
        host: String(process.env.DB_HOST),
        port: Number(process.env.DB_PORT),
    };
    
    const { database, username, password, host, port } = config;
    
    const sequelize = new Sequelize(database, username, password, {
      dialect: 'mysql',
      dialectModule: require('mysql2'),
      host,
      port,
    });
    this.sequelize = sequelize;
    this.sequelize
      .authenticate()
      .then(() => {
        console.log('Connection has been established successfully.');
      })
      .catch((err: Error) => {
        console.error('Unable to connect to the database:', err);
      });
  }

  public getSequelize(): Sequelize {
    return this.sequelize;
  }
}





