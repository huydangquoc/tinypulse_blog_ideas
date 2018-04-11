(function() {

    var __hs_cta_json = {"css":"a#cta_button_443262_8c0b4484-ed49-441b-bdb6-65d839e1684c {\n  cursor:pointer !important; \n}\na#cta_button_443262_8c0b4484-ed49-441b-bdb6-65d839e1684c:hover {\n}\na#cta_button_443262_8c0b4484-ed49-441b-bdb6-65d839e1684c:active, #cta_button_443262_8c0b4484-ed49-441b-bdb6-65d839e1684c:active:hover {\n}\n\n","image_html":"<a id=\"cta_button_443262_8c0b4484-ed49-441b-bdb6-65d839e1684c\" class=\"cta_button\" href=\"https://www.tinypulse.com/cs/c/?cta_guid=8c0b4484-ed49-441b-bdb6-65d839e1684c&placement_guid=bed16ad2-8d9f-4a42-9108-0a1a590142ec&portal_id=443262&redirect_url=APefjpHR8NSNtViUdPn2yIKS8pY7fCBbutlf-asgUED-DvObjgvSOvW5itT3H-l-0q4xRcT3EGecFPu5JVLz8KapeUfhT4vYFOC1_Wqhfw_huJr5oFjP-xZ14l2vzE_bQkjDosl9VDlnC7QZjuH-vTMdHrsb8mp1Hiur9CRgkd00HWpY3qwELtbam6t0XYCCSbXLS_CiRuIceJnvX1HBx3x-n1S1LozWWa4hQd2lKaXsuwA4LntO6Lu7MupM5_lH7f8rKcpOoNffR_KamSWWVYoCAB1nMCwEmSEnt_KBEM_pj6pNjYymn1s&hsutk=9f73e6f49998adfc40fa8a9bab51154b&canon=https%3A%2F%2Fwww.tinypulse.com%2Fblog%2Fsk-employee-engagement-survey-questions&click=58e6dc85-7d38-46c4-bec8-e3156e3be5e5&pageId=2923157270\"  target=\"_blank\"  cta_dest_link=\"https://www.tinypulse.com/fun-employee-survey-questions\"><img id=\"hs-cta-img-bed16ad2-8d9f-4a42-9108-0a1a590142ec\" class=\"hs-cta-img \" style=\"border-width: 0px; /*hs-extra-styles*/\" mce_noresize=\"1\" alt=\"25 Fun Employee Survey Questions\" src=\"https://cdn2.hubspot.net/hubshot/18/04/02/c0dfa5dc-6a8c-43d0-bb0d-f8cc67561edb.png\" /></a>","is_image":false,"placement_element_class":"hs-cta-bed16ad2-8d9f-4a42-9108-0a1a590142ec","raw_html":"<a id=\"cta_button_443262_8c0b4484-ed49-441b-bdb6-65d839e1684c\" class=\"cta_button \" href=\"https://www.tinypulse.com/cs/c/?cta_guid=8c0b4484-ed49-441b-bdb6-65d839e1684c&placement_guid=bed16ad2-8d9f-4a42-9108-0a1a590142ec&portal_id=443262&redirect_url=APefjpHR8NSNtViUdPn2yIKS8pY7fCBbutlf-asgUED-DvObjgvSOvW5itT3H-l-0q4xRcT3EGecFPu5JVLz8KapeUfhT4vYFOC1_Wqhfw_huJr5oFjP-xZ14l2vzE_bQkjDosl9VDlnC7QZjuH-vTMdHrsb8mp1Hiur9CRgkd00HWpY3qwELtbam6t0XYCCSbXLS_CiRuIceJnvX1HBx3x-n1S1LozWWa4hQd2lKaXsuwA4LntO6Lu7MupM5_lH7f8rKcpOoNffR_KamSWWVYoCAB1nMCwEmSEnt_KBEM_pj6pNjYymn1s&hsutk=9f73e6f49998adfc40fa8a9bab51154b&canon=https%3A%2F%2Fwww.tinypulse.com%2Fblog%2Fsk-employee-engagement-survey-questions&click=58e6dc85-7d38-46c4-bec8-e3156e3be5e5&pageId=2923157270\" target=\"_blank\" style=\"/*hs-extra-styles*/\" cta_dest_link=\"https://www.tinypulse.com/fun-employee-survey-questions\" title=\"25 Fun Employee Survey Questions\">25 Fun Employee Survey Questions</a>"};
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
            window.hbspt && hbspt.cta && hbspt.cta.afterLoad && hbspt.cta.afterLoad('bed16ad2-8d9f-4a42-9108-0a1a590142ec');
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
    window._hsq.push(['trackCtaView', 'bed16ad2-8d9f-4a42-9108-0a1a590142ec', '8c0b4484-ed49-441b-bdb6-65d839e1684c']);
}());
