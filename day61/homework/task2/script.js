function isValidCoupon(couponCode, totalAmount) {
    if ((couponCode === "SALE" || couponCode === "BIGSALE") && totalAmount >= 50) {
        return true;
    } else if (couponCode === "LILSALE" && totalAmount > 0) {
        return true;
    } else {
        return false;
    }
}

// mag
console.log(isValidCoupon("SALE", 60));    // true
console.log(isValidCoupon("BIGSALE", 50)); // true
console.log(isValidCoupon("LILSALE", 10)); // true
console.log(isValidCoupon("SALE", 40));    // false
console.log(isValidCoupon("BIGSALE", 45)); // false
console.log(isValidCoupon("LILSALE", 0));  // false
console.log(isValidCoupon("SUMMER", 100)); // false
