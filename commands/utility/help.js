const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('Displays a list of commands'),
	async execute(interaction) {
				const sent = await interaction.reply({ content: 'Help', fetchReply: true });
		await interaction.editReply('Help List \n \n /ping - shows user latency \n /kick - useless shit \n /prune - delete up to 99 messages sent in the last 2 weeks \n /avatar - provides a link to a users avatar \n /server - provides information on the server \n /user - provides information on a user');
	},
};