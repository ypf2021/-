function Ajax(url) {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", url);

        xhr.onreadystatechange = function () {
            if (this.readyState !== 4) {
                return;
            }
            if ((this.status = 200)) {
                resolve(this.response);
            } else {
                reject(xhr.statusText);
            }
        };

        xhr.onerror = function () {
            reject(new Error(xhr.statusText));
        };
        xhr.setRequestHeader("Accept", "application/json");
        xhr.responseType("json");
        xhr.send();
    });
}
