const generateId = () => require('crypto').randomUUID();
const id = generateId();
console.log(`Application started. Persistent ID: ${id}`);
setInterval(() => {
    console.log(`${new Date().toISOString()}: ${id}`);
}, 5000);
process.stdin.resume();
