

$(document).ready(function () {

    var entries = [

        { image: './img/logo_software/HTML5.png', width: '50', height: '50', url: 'http://jquery-plugins.net/', target: '_top', tooltip: 'Html' },
        { image: './img/logo_software/css.png', width: '50', height: '50', url: 'http://jquery-plugins.net/', target: '_top', tooltip: 'Css' },
        { image: './img/logo_software/java.png', width: '50', height: '50', url: 'http://jquery-plugins.net/', target: '_top', tooltip: 'Javascript' },
        { image: './img/logo_software/phpobject.png', width: '50', height: '50', url: 'http://jquery-plugins.net/', target: '_top', tooltip: 'Php' },
        { image: './img/logo_software/sql.png', width: '50', height: '50', url: 'http://jquery-plugins.net/', target: '_top', tooltip: 'Sql' },
        { image: './img/logo_software/scss.png', width: '50', height: '50', url: 'http://jquery-plugins.net/', target: '_top', tooltip: 'Scss' },
        { image: './img/logo_software/vue.png', width: '50', height: '50', url: 'http://jquery-plugins.net/', target: '_top', tooltip: 'Vue' },
        { image: './img/logo_software/tailwind.png', width: '50', height: '50', url: 'http://jquery-plugins.net/', target: '_top', tooltip: 'Tailwind' },
        { image: './img/logo_software/three.png', width: '50', height: '50', url: 'http://jquery-plugins.net/', target: '_top', tooltip: 'Three.js' },
        { image: './img/logo_software/spline.png', width: '50', height: '50', url: 'http://jquery-plugins.net/', target: '_top', tooltip: 'Spline' },
        { image: './img/logo_software/symfony.png', width: '50', height: '50', url: 'http://jquery-plugins.net/', target: '_top', tooltip: 'Symfony' },
        { image: './img/logo_software/nodejs.png', width: '50', height: '50', url: 'http://jquery-plugins.net/', target: '_top', tooltip: 'Node.js' },
        { image: './img/logo_software/Wordpress_Blue_logo.png', width: '50', height: '50', url: 'http://jquery-plugins.net/', target: '_top', tooltip: 'Wordpress' }
    ];

    var settings = {

        entries: entries,
        width: '100%',
        height: '100%',
        radius: '65%',
        radiusMin: 75,
        bgDraw: true,
        bgColor: 'none',
        opacityOver: 1.00,
        opacityOut: 0.05,
        opacitySpeed: 6,
        fov: 800,
        speed: 0.5,
        fontFamily: 'Oswald, Arial, sans-serif',
        fontSize: '15',
        fontColor: '#fff',
        fontWeight: 'normal',//bold
        fontStyle: 'normal',//italic 
        fontStretch: 'normal',//wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
        fontToUpperCase: true,
        tooltipFontFamily: 'Oswald, Arial, sans-serif',
        tooltipFontSize: '15',
        tooltipFontColor: '#000',
        tooltipFontWeight: 'normal',//bold
        tooltipFontStyle: 'normal',//italic 
        tooltipFontStretch: 'normal',//wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
        tooltipFontToUpperCase: false,
        tooltipTextAnchor: 'center',
        tooltipDiffX: 0,
        tooltipDiffY: 10

    };

    //var svg3DTagCloud = new SVG3DTagCloud( document.getElementById( 'holder'  ), settings );
    $('#competence').svg3DTagCloud(settings);

});


$(document).ready(function () {

    var entries = [

        { image: './img/logo_software/HTML5.png', width: '50', height: '50', url: 'http://jquery-plugins.net/', target: '_top', tooltip: 'Html' },
        { image: './img/logo_software/css.png', width: '50', height: '50', url: 'http://jquery-plugins.net/', target: '_top', tooltip: 'Css' },
        { image: './img/logo_software/java.png', width: '50', height: '50', url: 'http://jquery-plugins.net/', target: '_top', tooltip: 'Javascript' },
        { image: './img/logo_software/phpobject.png', width: '50', height: '50', url: 'http://jquery-plugins.net/', target: '_top', tooltip: 'Php' },
        { image: './img/logo_software/sql.png', width: '50', height: '50', url: 'http://jquery-plugins.net/', target: '_top', tooltip: 'Sql' },
        { image: './img/logo_software/scss.png', width: '50', height: '50', url: 'http://jquery-plugins.net/', target: '_top', tooltip: 'Scss' },
        { image: './img/logo_software/vue.png', width: '50', height: '50', url: 'http://jquery-plugins.net/', target: '_top', tooltip: 'Vue' },
        { image: './img/logo_software/tailwind.png', width: '50', height: '50', url: 'http://jquery-plugins.net/', target: '_top', tooltip: 'Tailwind' },
        { image: './img/logo_software/three.png', width: '50', height: '50', url: 'http://jquery-plugins.net/', target: '_top', tooltip: 'Three.js' },
        { image: './img/logo_software/spline.png', width: '50', height: '50', url: 'http://jquery-plugins.net/', target: '_top', tooltip: 'Spline' },
        { image: './img/logo_software/symfony.png', width: '50', height: '50', url: 'http://jquery-plugins.net/', target: '_top', tooltip: 'Symfony' },
        { image: './img/logo_software/nodejs.png', width: '50', height: '50', url: 'http://jquery-plugins.net/', target: '_top', tooltip: 'Node.js' },
        { image: './img/logo_software/Wordpress_Blue_logo.png', width: '50', height: '50', url: 'http://jquery-plugins.net/', target: '_top', tooltip: 'Wordpress' }
    ];

    var settings = {

        entries: entries,
        width: '350px',
        height: '350px',
        radius: '65%',
        radiusMin: 75,
        bgDraw: true,
        bgColor: 'none',
        opacityOver: 1.00,
        opacityOut: 0.05,
        opacitySpeed: 6,
        fov: 800,
        speed: 0.5,
        fontFamily: 'Oswald, Arial, sans-serif',
        fontSize: '15',
        fontColor: '#fff',
        fontWeight: 'normal',//bold
        fontStyle: 'normal',//italic 
        fontStretch: 'normal',//wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
        fontToUpperCase: true,
        tooltipFontFamily: 'Oswald, Arial, sans-serif',
        tooltipFontSize: '15',
        tooltipFontColor: '#000',
        tooltipFontWeight: 'normal',//bold
        tooltipFontStyle: 'normal',//italic 
        tooltipFontStretch: 'normal',//wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
        tooltipFontToUpperCase: false,
        tooltipTextAnchor: 'center',
        tooltipDiffX: 0,
        tooltipDiffY: 10

    };

    //var svg3DTagCloud = new SVG3DTagCloud( document.getElementById( 'holder'  ), settings );
    $('#competence-tel').svg3DTagCloud(settings);

});

$(document).ready(function () {

    var entries = [

        { image: './img/logo_software/affter.png', width: '50', height: '50', url: 'http://jquery-plugins.net/', target: '_top', tooltip: 'After effect' },
        { image: './img/logo_software/illustrator.png', width: '50', height: '50', url: 'http://jquery-plugins.net/', target: '_top', tooltip: 'Illustrator' },
        { image: './img/logo_software/indesign.png', width: '50', height: '50', url: 'http://jquery-plugins.net/', target: '_top', tooltip: 'Indesign' },
        { image: './img/logo_software/photoshop.png', width: '50', height: '50', url: 'http://jquery-plugins.net/', target: '_top', tooltip: 'Photoshop' },
        { image: './img/logo_software/premiere.png', width: '50', height: '50', url: 'http://jquery-plugins.net/', target: '_top', tooltip: 'Premiere pro' },
        { image: './img/logo_software/xd.png', width: '50', height: '50', url: 'http://jquery-plugins.net/', target: '_top', tooltip: 'Xd' },
        { image: './img/logo_software/figma.png', width: '50', height: '50', url: 'http://jquery-plugins.net/', target: '_top', tooltip: 'Figma' },
        { image: './img/logo_software/blender.png', width: '50', height: '50', url: 'http://jquery-plugins.net/', target: '_top', tooltip: 'Blender' },
        { image: './img/logo_software/3ds.png', width: '50', height: '50', url: 'http://jquery-plugins.net/', target: '_top', tooltip: '3ds max' }
    ];
 
    var settings = {

        entries: entries,
        width: '100%',
        height: '100%',
        radius: '65%',
        radiusMin: 75,
        bgDraw: true,
        bgColor: 'none',
        opacityOver: 1.00,
        opacityOut: 0.05,
        opacitySpeed: 6,
        fov: 800,
        speed: 0.5,
        fontFamily: 'Oswald, Arial, sans-serif',
        fontSize: '15',
        fontColor: '#fff',
        fontWeight: 'normal',//bold
        fontStyle: 'normal',//italic 
        fontStretch: 'normal',//wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
        fontToUpperCase: true,
        tooltipFontFamily: 'Oswald, Arial, sans-serif',
        tooltipFontSize: '15',
        tooltipFontColor: '#000',
        tooltipFontWeight: 'normal',//bold
        tooltipFontStyle: 'normal',//italic 
        tooltipFontStretch: 'normal',//wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
        tooltipFontToUpperCase: false,
        tooltipTextAnchor: 'center',
        tooltipDiffX: 0,
        tooltipDiffY: 10

    };

    //var svg3DTagCloud = new SVG3DTagCloud( document.getElementById( 'holder'  ), settings );
    $('#digital').svg3DTagCloud(settings);

});

$(document).ready(function () {

    var entries = [

        { image: './img/logo_software/affter.png', width: '50', height: '50', url: 'http://jquery-plugins.net/', target: '_top', tooltip: 'After effect' },
        { image: './img/logo_software/illustrator.png', width: '50', height: '50', url: 'http://jquery-plugins.net/', target: '_top', tooltip: 'Illustrator' },
        { image: './img/logo_software/indesign.png', width: '50', height: '50', url: 'http://jquery-plugins.net/', target: '_top', tooltip: 'Indesign' },
        { image: './img/logo_software/photoshop.png', width: '50', height: '50', url: 'http://jquery-plugins.net/', target: '_top', tooltip: 'Photoshop' },
        { image: './img/logo_software/premiere.png', width: '50', height: '50', url: 'http://jquery-plugins.net/', target: '_top', tooltip: 'Premiere pro' },
        { image: './img/logo_software/xd.png', width: '50', height: '50', url: 'http://jquery-plugins.net/', target: '_top', tooltip: 'Xd' },
        { image: './img/logo_software/figma.png', width: '50', height: '50', url: 'http://jquery-plugins.net/', target: '_top', tooltip: 'Figma' },
        { image: './img/logo_software/blender.png', width: '50', height: '50', url: 'http://jquery-plugins.net/', target: '_top', tooltip: 'Blender' },
        { image: './img/logo_software/3ds.png', width: '50', height: '50', url: 'http://jquery-plugins.net/', target: '_top', tooltip: '3ds max' }
    ];
 
    var settings = {

        entries: entries,
        width: '100%',
        height: '100%',
        radius: '65%',
        radiusMin: 75,
        bgDraw: true,
        bgColor: 'none',
        opacityOver: 1.00,
        opacityOut: 0.05,
        opacitySpeed: 6,
        fov: 800,
        speed: 0.5,
        fontFamily: 'Oswald, Arial, sans-serif',
        fontSize: '15',
        fontColor: '#fff',
        fontWeight: 'normal',//bold
        fontStyle: 'normal',//italic 
        fontStretch: 'normal',//wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
        fontToUpperCase: true,
        tooltipFontFamily: 'Oswald, Arial, sans-serif',
        tooltipFontSize: '15',
        tooltipFontColor: '#000',
        tooltipFontWeight: 'normal',//bold
        tooltipFontStyle: 'normal',//italic 
        tooltipFontStretch: 'normal',//wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
        tooltipFontToUpperCase: false,
        tooltipTextAnchor: 'center',
        tooltipDiffX: 0,
        tooltipDiffY: 10

    };

    //var svg3DTagCloud = new SVG3DTagCloud( document.getElementById( 'holder'  ), settings );
    $('#digitaux').svg3DTagCloud(settings);

});

