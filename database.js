const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./levels.db');

// Initialize database
db.run(`CREATE TABLE IF NOT EXISTS levels (
    user_id TEXT PRIMARY KEY,
    xp INTEGER DEFAULT 0,
    level INTEGER DEFAULT 1
)`);

module.exports = db;