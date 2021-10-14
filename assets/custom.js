window.addEventListener('DOMContentLoaded', (event) => {
    const siteUrl = window.location.origin;

    if (siteUrl.includes('test')) {
        siteColor = 'site-color-test';
    } else if (siteUrl.includes('adm.')) {
        siteColor = 'site-color-000';
    } else {
        siteColor = 'site-color-111';
    }

    document.querySelector('h2').classList.add(`${siteColor}`);

    const fieldset = document.createElement('fieldset');
    fieldset.addEventListener('click', () => {
        location.reload();
    });

    Object.assign(fieldset, {
        innerText: "Refresh",
        className: "db-refresh"
    });

    document.querySelector('body').appendChild(fieldset);

    const urlTableLinks = document.querySelectorAll('table tbody th a');
    for (const changeLink of urlTableLinks) {
        const urlLink = changeLink.href;
        const newLink = urlLink.replace('table=', 'select=');
        changeLink.href = newLink;
    }
    
    setTimeout(() => {
        const urlSidebarLinks = document.querySelectorAll('#tables li a:not(.select)');
        for (const changeSidebarLink of urlSidebarLinks) {
            const urlSidebarLink = changeSidebarLink.href;
            const newSidebarLink = urlSidebarLink.replace('table=', 'select=');
            changeSidebarLink.href = newSidebarLink;
        }
    }, 500);

});