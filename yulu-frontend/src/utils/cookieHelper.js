export function getCookie(name) {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.startsWith(name + '=')) {
            const cookieValue = cookie.substring(name.length + 1);
            const decodedCookie = decodeURIComponent(cookieValue);
            const cookieData = JSON.parse(decodedCookie);

            if (cookieData.expires && new Date(cookieData.expires) < new Date()) {
                document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
                return null;
            }

            return cookieData.value;
        }
    }
    return null;
}

export function deleteCookie(name) {
    if (getCookie(name) !== null) {
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    }
}