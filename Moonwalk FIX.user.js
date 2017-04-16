// ==UserScript==
// @name            Moonwalk FIX
// @namespace       ebuchiyMoonwalk
// @version         1.0
// @description     Заебался с этим ебучим Moonwalk и убрал эту ебучую рекламу
// @match           *://*/*
// @run-at          document-end
// @grant           unsafeWindow
// @author          hydra_fuzzy
// @updateURL       https://github.com/RobertFuzzy/Moonwalk-FIX/raw/master/Moonwalk%20FIX.user.js
// ==/UserScript==

/* RELEASE NOTES
  1.0
    + Нихуя нового ) Это финальная версия скрипта
*/

(function() {
    'use strict';
    var win = (unsafeWindow || window), tmp;
    function log (e) {
        console.log('Moonwalk FIX: ' + e + ' player in ' + win.location.href);
    }
    if (win.adv_enabled !== undefined && win.condition_detected !== undefined) { // moonwalk
        log('Moonwalk');
        win.adv_enabled = false;
        win.condition_detected = false;
    } else if (win.banner_second !== undefined && win.$banner_ads !== undefined) { // hdgo
        log('HDGo');
        tmp = document.querySelector('#swtf');
        if (tmp) tmp.style.display = 'none';
        win.banner_second = 0;
        win.$banner_ads = false;
        if (win.$new_ads !== undefined) win.$new_ads = false;
        if (win.canRunAds !== undefined && win.canRunAds !== true) win.canRunAds = true;
    } else if (win.MXoverrollCallback !== undefined && win.iframeSearch !== undefined) { // kodik
        log('Kodik');
        tmp = document.querySelector('.play_button');
        if (tmp) tmp.onclick = win.MXoverrollCallback.bind(win);
        win.IsAdBlock = false;
    }
})();
