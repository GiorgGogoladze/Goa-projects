const fs = require('fs');
const path = require('path');

// შექმენით 20 ფაილი
const words = ["გამარჯობა", "სალამი", "ალო", "ჰელო", "გიჟური", "თვალთახედვა", "შეხვედრა", "პასუხი", "კარგი", "დიდი", "ხანგრძლივი", "პროექტი", "სტარტი", "დასაწყისი", "დამარცხება", "ლეგენდა", "თანამშრომლობა", "მშობლიური", "წინსვლა", "წიგნი"];

for (let i = 0; i < 20; i++) {
  const fileName = path.join(__dirname, `file${i + 1}.txt`);
  fs.writeFileSync(fileName, words[i], 'utf8');
}
