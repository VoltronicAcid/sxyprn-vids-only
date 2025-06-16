// ==UserScript==
// @name        SxyPrn Vids Only
// @description Automatically click the vids only checkbox
// @author      VoltronicAcid
// @version     0.1
// @homepageURL https://github.com/VoltronicAcid/sxyprn-vids-only
// @match       https://sxyprn.com/blog/all/*
// @run-at      document-idle
// @grant       GM.getValue
// @grant       GM.setValue
// @require     https://cdn.jsdelivr.net/gh/CoeJoder/waitForKeyElements.js@v1.3/waitForKeyElements.js
// ==/UserScript==

const SETTING_KEY = "vidsOnly";

(() => {
    waitForKeyElements("label.vocontainer > input[type=checkbox]", (checkbox) => {
        console.clear();
        console.log(checkbox);
        checkbox.addEventListener("click", () => {
            GM.setValue(SETTING_KEY, checkbox.checked).then(() => console.log("Value set to:\t", checkbox.checked));
        });

    });
})();
