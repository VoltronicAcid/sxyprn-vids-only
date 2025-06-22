// ==UserScript==
// @name        SexyPorn - Vids Only Setting
// @description Automatically click the vids only checkbox
// @author      VoltronicAcid
// @version     1.0
// @homepageURL https://github.com/VoltronicAcid/sxyprn-vids-only
// @supportURL  https://github.com/VoltronicAcid/sxyprn-vids-only/issues
// @downloadURL https://github.com/VoltronicAcid/sxyprn-vids-only/raw/refs/heads/main/sxyprn-vidsonly.user.js
// @match       https://sxyprn.com/blog/all/*
// @run-at      document-idle
// @grant       GM.getValue
// @grant       GM.setValue
// @require     https://cdn.jsdelivr.net/gh/CoeJoder/waitForKeyElements.js@v1.3/waitForKeyElements.js
// ==/UserScript==

const SETTING_KEY = "vidsOnly";

(() => {
    waitForKeyElements("label.vocontainer > input[type=checkbox]", (checkbox) => {
        checkbox.addEventListener("change", () => {
            GM.setValue(SETTING_KEY, checkbox.checked)
                .catch((err) => console.error(err));
        });

        GM.getValue(SETTING_KEY, true)
            .then((vidSetting) => {
                if (checkbox.checked !== vidSetting) {
                    checkbox.click();
                }
            })
            .catch((err) => console.error(err));
    });
})();
