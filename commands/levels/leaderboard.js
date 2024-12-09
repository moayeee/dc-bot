const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('leaderboard')
        .setDescription('Displays the top users.'),
    async execute(interaction) {
        db.all('SELECT * FROM levels ORDER BY level DESC, xp DESC LIMIT 10', [], (err, rows) => {
            if (err) throw err;

            if (!rows.length) {
                return interaction.reply('No users on the leaderboard yet!');
            }

            const leaderboard = rows.map((row, index) => 
                `**${index + 1}.** <@${row.user_id}> - Level ${row.level} (${row.xp} XP)`
            ).join('\n');

            interaction.reply({ content: `🏆 **Leaderboard**:\n${leaderboard}`, allowedMentions: { users: [] } });
        });
    },
};