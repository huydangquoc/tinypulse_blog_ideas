(function() {

    var __hs_cta_json = {"css":"a#cta_button_443262_d7d4ac3c-4cb4-46f0-bf50-db974dd4a0f4 {\n  cursor:pointer !important; \n}\na#cta_button_443262_d7d4ac3c-4cb4-46f0-bf50-db974dd4a0f4:hover {\n}\na#cta_button_443262_d7d4ac3c-4cb4-46f0-bf50-db974dd4a0f4:active, #cta_button_443262_d7d4ac3c-4cb4-46f0-bf50-db974dd4a0f4:active:hover {\n}\n\n","image_html":"<a id=\"cta_button_443262_d7d4ac3c-4cb4-46f0-bf50-db974dd4a0f4\" class=\"cta_button\" href=\"https://www.tinypulse.com/cs/c/?cta_guid=d7d4ac3c-4cb4-46f0-bf50-db974dd4a0f4&placement_guid=e8f0baf8-61d4-4e5a-92e5-6bc0a1703964&portal_id=443262&redirect_url=APefjpHO7c1pOoy3NWU-DDo8Ip2be44QO1JAixKI3_KqIFBxLfp4mNI9NisSk_9VnxqxrChjJB3DPI4aJTG3cIwzIfBC0Smr19LpaUuofnYr9xaqWRpHPDT-WQMahECejfJOVa4Zv-JTezB5gS4Kdus4CWz0z_3HvDkht65ohN0MXNgkdNWYboxHntNHBd_3g-HC7xHAXBoJp6qDWRgCriqb50SijcS8UpyL_WgNm1627KnRDgb2_10adGpARQdySX2ssjF_5UtYYbv6FJcd_t_6J_6FVbwMFx09D0mGo0iNCO2LTPwG0Y1DCpQ02oeRdwTIfbtEV4eZNxAiazkFDrGAW3fSzL7mFQ&hsutk=9f73e6f49998adfc40fa8a9bab51154b&canon=https%3A%2F%2Fwww.tinypulse.com%2Fblog%2Fsk-employee-engagement-survey-questions&click=39b82f7c-31b8-492e-9f3e-e17dd9f43917&pageId=2923157270\"  cta_dest_link=\"https://www.tinypulse.com/advanced-guide-to-pulsing-employee-engagement-surveys\"><img id=\"hs-cta-img-e8f0baf8-61d4-4e5a-92e5-6bc0a1703964\" class=\"hs-cta-img \" style=\"border-width: 0px; /*hs-extra-styles*/\" mce_noresize=\"1\" alt=\"The Advanced Guide to Pulsing\" src=\"https://cdn2.hubspot.net/hubshot/18/04/02/9d7f0678-b706-4634-add4-358593022e03.png\" /></a>","is_image":false,"placement_element_class":"hs-cta-e8f0baf8-61d4-4e5a-92e5-6bc0a1703964","raw_html":"<a id=\"cta_button_443262_d7d4ac3c-4cb4-46f0-bf50-db974dd4a0f4\" class=\"cta_button \" href=\"https://www.tinypulse.com/cs/c/?cta_guid=d7d4ac3c-4cb4-46f0-bf50-db974dd4a0f4&placement_guid=e8f0baf8-61d4-4e5a-92e5-6bc0a1703964&portal_id=443262&redirect_url=APefjpHO7c1pOoy3NWU-DDo8Ip2be44QO1JAixKI3_KqIFBxLfp4mNI9NisSk_9VnxqxrChjJB3DPI4aJTG3cIwzIfBC0Smr19LpaUuofnYr9xaqWRpHPDT-WQMahECejfJOVa4Zv-JTezB5gS4Kdus4CWz0z_3HvDkht65ohN0MXNgkdNWYboxHntNHBd_3g-HC7xHAXBoJp6qDWRgCriqb50SijcS8UpyL_WgNm1627KnRDgb2_10adGpARQdySX2ssjF_5UtYYbv6FJcd_t_6J_6FVbwMFx09D0mGo0iNCO2LTPwG0Y1DCpQ02oeRdwTIfbtEV4eZNxAiazkFDrGAW3fSzL7mFQ&hsutk=9f73e6f49998adfc40fa8a9bab51154b&canon=https%3A%2F%2Fwww.tinypulse.com%2Fblog%2Fsk-employee-engagement-survey-questions&click=39b82f7c-31b8-492e-9f3e-e17dd9f43917&pageId=2923157270\"  style=\"/*hs-extra-styles*/\" cta_dest_link=\"https://www.tinypulse.com/advanced-guide-to-pulsing-employee-engagement-surveys\" title=\"The Advanced Guide to Pulsing\">The Advanced Guide to Pulsing</a>"};
    var __hs_cta = {};

    __hs_cta.drop = function() {
        var is_legacy = document.getElementById('hs-cta-ie-element') && true || false,
            html = __hs_cta_json.image_html,
            tags = __hs_cta.getTags(),
            is_image = __hs_cta_json.is_image,
            parent, _style;

        if (!is_legacy && !is_image) {
            parent = (document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0]);

            _style = document.createElement('style');
            parent.insertBefore(_style, parent.childNodes[0]);
            try {
                default_css = ".hs-cta-wrapper p, .hs-cta-wrapper div { margin: 0; padding: 0; }";
                cta_css = default_css + " " + __hs_cta_json.css;
                // http://blog.coderlab.us/2005/09/22/using-the-innertext-property-with-firefox/
                _style[document.all ? 'innerText' : 'textContent'] = cta_css;
            } catch (e) {
                // addressing an ie9 issue
                _style.styleSheet.cssText = cta_css;
            }

            html = __hs_cta_json.raw_html;
        }

        for (var i = 0; i < tags.length; ++i) {

            var tag = tags[i];
            var images = tag.getElementsByTagName('img');
            var cssText = "";
            var align = "";
            for (var j = 0; j < images.length; j++) {
                align = images[j].align;
                images[j].style.border = '';
                images[j].style.display = '';
                cssText = images[j].style.cssText;
            }

            if (align == "right") {
                tag.style.display = "block";
                tag.style.textAlign = "right";
            } else if (align == "middle") {
                tag.style.display = "block";
                tag.style.textAlign = "center";
            }

            tag.innerHTML = html.replace('/*hs-extra-styles*/', cssText);
            tag.style.visibility = 'visible';
            tag.setAttribute('data-hs-drop', 'true');
            window.hbspt && hbspt.cta && hbspt.cta.afterLoad && hbspt.cta.afterLoad('e8f0baf8-61d4-4e5a-92e5-6bc0a1703964');
        }

        return tags;
    };

    __hs_cta.getTags = function() {
        var allTags, check, i, divTags, spanTags,
            tags = [];
            if (document.getElementsByClassName) {
                allTags = document.getElementsByClassName(__hs_cta_json.placement_element_class);
                check = function(ele) {
                    return (ele.nodeName == 'DIV' || ele.nodeName == 'SPAN') && (!ele.getAttribute('data-hs-drop'));
                };
            } else {
                allTags = [];
                divTags = document.getElementsByTagName("div");
                spanTags = document.getElementsByTagName("span");
                for (i = 0; i < spanTags.length; i++) {
                    allTags.push(spanTags[i]);
                }
                for (i = 0; i < divTags.length; i++) {
                    allTags.push(divTags[i]);
                }

                check = function(ele) {
                    return (ele.className.indexOf(__hs_cta_json.placement_element_class) > -1) && (!ele.getAttribute('data-hs-drop'));
                };
            }
            for (i = 0; i < allTags.length; ++i) {
                if (check(allTags[i])) {
                    tags.push(allTags[i]);
                }
            }
        return tags;
    };

    // need to do a slight timeout so IE has time to react
    setTimeout(__hs_cta.drop, 10);
    window._hsq = window._hsq || [];
    window._hsq.push(['trackCtaView', 'e8f0baf8-61d4-4e5a-92e5-6bc0a1703964', 'd7d4ac3c-4cb4-46f0-bf50-db974dd4a0f4']);
}());
