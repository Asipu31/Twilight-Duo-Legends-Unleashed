// Get skill buttons
const jumpBtn = document.getElementById('jump-btn');
const dashBtn = document.getElementById('dash-btn');
const specialSkill1Btn = document.getElementById('special-skill-1-btn');
const specialSkill2Btn = document.getElementById('special-skill-2-btn');
const specialSkill3Btn = document.getElementById('special-skill-3-btn');
const ultimateBtn = document.getElementById('ultimate-btn');

// Add event listeners to skill buttons
jumpBtn.addEventListener('click', () => {
	console.log('Jump!');
});

dashBtn.addEventListener('click', () => {
	console.log('Dash!');
});

specialSkill1Btn.addEventListener('click', () => {
	console.log('Special Skill 1!');
});

specialSkill2Btn.addEventListener('click', () => {
	console.log('Special Skill 2!');
});

specialSkill3Btn.addEventListener('click', () => {
	console.log('Special Skill 3!');
});

ultimateBtn.addEventListener('click', () => {
	console.log('Ultimate!');
});

// Equipment data
const equipment = [
	{ name: "Daggers", rarity: "Common" },
	{ name: "Sword", rarity: "Rare" },
	{ name: "Arrow", rarity: "Epic" },
	{ name: "Spears", rarity: "Legendary" },
	{ name: "Magical Gloves", rarity: "Legendary" },
	{ name: "Axe", rarity: "Common" },
	{ name: "Shield", rarity: "Rare" },
	{ name: "Helmet", rarity: "Epic" },
	{ name: "Armor", rarity: "Legendary" },
	{ name: "Boots", rarity: "Legendary" },
	{ name: "Cape", rarity: "Legendary" }
];

// Function to get random rarity
function getRarity() {
	const rarityChance = Math.random();
	if (rarityChance < 0.5) {
		return 'Common';
	} else if (rarityChance < 0.7) {
		return 'Rare';
	} else if (rarityChance < 0.9) {
		return 'Epic';
	} else if (rarityChance < 0.95) {
		return 'Legendary';
	} else {
		return 'SSR';
	}
}

// Display equipment list
const equipmentList = document.getElementById('equipment-list');

equipment.forEach((item) => {
	const equipmentItem = document.createElement('li');
	const rarity = getRarity(); // Random rarity for each equipment item
	equipmentItem.textContent = `${item.name} (${rarity})`;
	equipmentList.appendChild(equipmentItem);
});
