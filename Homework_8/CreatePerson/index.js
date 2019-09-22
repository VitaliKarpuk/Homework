let v = [];
            Object.values(localStorage).map(function(obj, str) { 
              obj[str] = localStorage.getItem(str); 
                return v.push(obj)
            }, {});
            console.log(v)