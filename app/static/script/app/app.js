var app = new gxp.Viewer({
    proxy: "/geoserver/rest/proxy?url=",

    // the application layout
    portalConfig: {
        layout: "border",
        defaults: {border: true},
        items: ["mymap", {
            id: "tree",
            region: "west",
            layout: "fit",
            width: 200
        }, {
            id: "legend",
            region: "east",
            layout: "fit",
            width: 200
        }, {
            id: "grid",
            region: "south",
            layout: "fit",
            height: 200
        }]
    },
    
    mapItems: [{
        xtype: "gx_zoomslider",
        vertical: true,
        height: 100
    }],

    // configuration of all tool plugins for this application
    tools: [{
        ptype: "gxp_addlayers"
    }, {
        ptype: "gxp_layertree",
        outputTarget: "tree",
        outputConfig: {
            title: "Layers"
        }
    }, {
        ptype: "gxp_removelayer"
    }, {
        ptype: "gxp_wmsgetfeatureinfo"
    }, {
        ptype: "gxp_legend",
        outputTarget: "legend"
    }, {
        ptype: "gxp_featuremanager",
        id: "featuremanager",
        autoLoadFeatures: true
    }, {
        ptype: "gxp_featuregrid",
        featureManager: "featuremanager",
        outputTarget: "grid"
    }, {
        ptype: "gxp_featureeditor",
        featureManager: "featuremanager",
        autoLoadFeatures: true
    }],
    
    // layer sources
    defaultSourceType: "gxp_wmssource",
    sources: {
        local: {
            url: "/geoserver/wms",
            version: "1.1.1"
        }
    },
    
    // map and layers
    map: {
        id: "mymap", // id needed to reference map in portalConfig above
        extent: [
            -122.911, 42.291,
            -122.787,42.398
        ],
        layers: [{
            source: "local",
            name: "medford",
            group: "background"
        }]
    }
});
