const db = require('../database.js'); // Import the database

module.exports = {
    name: 'messageCreate',
    async execute(message) {
        if (message.author.bot) return;

        const randomXP = Math.floor(Math.random() * 11) + 5;
        const userId = message.author.id;

        db.get('SELECT * FROM levels WHERE user_id = ?', [userId], (err, row) => {
            if (err) throw err;

            if (!row) {
                db.run('INSERT INTO levels (user_id, xp, level) VALUES (?, ?, ?)', [userId, randomXP, 1]);
            } else {
                const newXP = row.xp + randomXP;
                let newLevel = row.level;

                if (newXP >= newLevel * 100) {
                    newLevel++;
                    message.channel.send(`${message.author} has leveled up to **Level ${newLevel}!** 🎉`);
                }

                db.run('UPDATE levels SET xp = ?, level = ? WHERE user_id = ?', [newXP, newLevel, userId]);
            }
        });
    },
};