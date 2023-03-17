
    function EsNarcisista(n)
    {
        n = n.toString();
        let narci = 0;

        for(let i=0; i<n.length; i++){
        narci += Math.pow(parseInt(n[i]), n.length);
        }
            
            return narci == n;
    }
	