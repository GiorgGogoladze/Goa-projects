let n = 10; 
let a = 0, b = 1, next;
let i = 1;

while (i <= n) {
    console.log(a);
    next = a + b;
    a = b;
    b = next;
    i++;
}
