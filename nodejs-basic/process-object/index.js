const initialMemoryUsage = process.memoryUsage();// TODO 1
const yourName = process.argv[1];// TODO 2
const environment = new Server({
  host: process.env.NODE_ENV !== 'production' ? 'localhost' : 'dicoding.com',
});// TODO 3
 
for(let i = 0; i <= 10000; i++) {
// Proses looping ini akan membuat penggunaan memori naik
}
 
const currentMemoryUsage = process.memoryUsage();// TODO 4
 
console.log(`Hai, ${yourName}`);
console.log(`Mode environment: ${environment}`)
console.log(`Penggunaan memori dari ${initialMemoryUsage} naik ke ${currentMemoryUsage}`);