function EsAbundante(n) {
           
    let sum_divisores = 0;

    for (let i = 0; i < n; i++) {
        if (n % i == 0) {
            sum_divisores += i;
        }
    }
    if (sum_divisores > n){
        return true;
    }   
}
