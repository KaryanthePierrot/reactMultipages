import * as SQLite from 'expo-sqlite';
let banco;
export async function conn() {
    if (!banco){
        banco = await SQLite.openDatabaseAsync('useColorScheme.db');
        await banco.execAsync(`PRAGMA journal_mode = WAL`);

    }
    return banco;
}


export async function createTableUsers() {
  const db = await conn();
  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user TEXT UNIQUE NOT NULL, 
      pass TEXT NOT NULL
    );
  `);
}

export async function createUser(user, pass) {
  const db = await conn();
  await db.runAsync(
    'INSERT INTO users (user, pass) VALUES (?, ?)',
    user,
    pass
  );
}

export async function delBd() {
  const db = await conn();
  await db.runAsync('DROP TABLE IF EXISTS users');
}

export async function getUser(user, pass) {
  try {
    const db = await conn();
    const users = await db.getAllAsync(
      'SELECT * FROM users WHERE user = ? AND pass = ?',
      user, 
      pass
    );
    return users.length > 0;
  } catch (error) {
    console.log('Erro ao buscar usuário:', error);
    return false;
  }
}

export async function userExiste(user) {
  try {
    const db = await conn();
    const users = await db.getAllAsync(
      'SELECT * FROM users WHERE user = ?',
      user
    );
    return users.length > 0;
  } catch (error) {
    console.log('Erro ao verificar usuário:', error);
    return false;
  }
}