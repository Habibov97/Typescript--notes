import path from 'path';
import { DataSource } from 'typeorm';
import { User } from './entities/User.entity';
import { Note } from './entities/Note.entity';

const sqlitePath = path.join(__dirname, '../../database.sqlite');

const dataSource = new DataSource({
  type: 'sqlite',
  database: sqlitePath,
  synchronize: true,
  logging: true,
  entities: [User, Note],
});

dataSource
  .initialize()
  .then(() => {
    console.log('Successfully connected to database');
  })
  .catch((error) => {
    console.log('Cannot connect to database', error);
  });

export default dataSource;
