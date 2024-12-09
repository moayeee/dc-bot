const { SlashCommandBuilder } = require('discord.js');
const db = require('/Users/moaye/Documents/Code/new discord bot/database.js'); // Adjust the path based on your project structure

module.exports = {
    data: new SlashCommandBuilder()
        .setName('rank')
        .setDescription('Check your level and XP.')
        .addUserOption(option =>
            option.setName('user')
                .setDescription('View another user\'s level.')
        ),
    async execute(interaction) {
        const user = interaction.options.getUser('user') || interaction.user;

        db.get('SELECT * FROM levels WHERE user_id = ?', [user.id], (err, row) => {
            if (err) {
                console.error(err);
                return interaction.reply('An error occurred while retrieving data.');
            }

            if (!row) {
                return interaction.reply(`${user.username} has no levels yet.`);
            }

            return interaction.reply(`${user.username} is Level **${row.level}** with **${row.xp} XP**.`);
        });
    },
};