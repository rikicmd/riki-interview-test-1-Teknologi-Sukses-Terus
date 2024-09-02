function isPalindrome(str) {
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    const reversedStr = cleanedStr.split('').reverse().join('');

    return cleanedStr === reversedStr;
}


// Unit Test
console.log("tattarrattat", isPalindrome('tattarrattat'));
console.log("Katak", isPalindrome('Katak'));
console.log("Pura Pura", isPalindrome('Pura Pura'));
console.log("Berhasil", isPalindrome('Berhasil'));