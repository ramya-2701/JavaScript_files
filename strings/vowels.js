function vowelCount() {
    this.s = this.s.toLowerCase();
    let count = 0;
    for (let i = 0; i < this.s.length; i++) {
        let c = this.s.charAt(i);
        if (c === 'a' || c === 'e' || c === 'i' || c === 'o' || c === 'u') {
            count++;
        }
    }
    return count;
}

