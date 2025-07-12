// ==UserScript==
// @name        SexyPorn - Vids Only Setting
// @description Automatically click the vids only checkbox
// @author      VoltronicAcid
// @version     2.0
// @homepageURL https://github.com/VoltronicAcid/sxyprn-vids-only
// @supportURL  https://github.com/VoltronicAcid/sxyprn-vids-only/issues
// @downloadURL https://github.com/VoltronicAcid/sxyprn-vids-only/raw/refs/heads/main/sxyprn-vidsonly.user.js
// @icon        https://www.google.com/s2/favicons?sz=64&domain=sxyprn.com
// @match       https://sxyprn.com/blog/all/*
// ==/UserScript==


(() => {
    "use strict";
    const settingKey = "vidsOnly";
    const saveCheckboxState = (checkbox) => localStorage.setItem(settingKey, checkbox.checked);

    new MutationObserver((mutations, observer) => {
        mutations.forEach(({ target }) => {
            if (target.tagName === "HTML") {
                const checkbox = target.querySelector("label.vocontainer > input[type=checkbox]");
                const currSetting = localStorage.getItem(settingKey);

                if (currSetting === null) saveCheckboxState(checkbox);

                checkbox.addEventListener("change", () => {
                    saveCheckboxState(checkbox);
                });

                if (currSetting && currSetting !== checkbox.checked.toString()) checkbox.click();

                observer.disconnect();
            }
        });
    }).observe(document, { childList: true, subtree: true, });
})();
