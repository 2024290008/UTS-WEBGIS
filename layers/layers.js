var wms_layers = [];

var format_ADMINISTRASIKECAMATAN_AR_50K_0 = new ol.format.GeoJSON();
var features_ADMINISTRASIKECAMATAN_AR_50K_0 = format_ADMINISTRASIKECAMATAN_AR_50K_0.readFeatures(json_ADMINISTRASIKECAMATAN_AR_50K_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASIKECAMATAN_AR_50K_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASIKECAMATAN_AR_50K_0.addFeatures(features_ADMINISTRASIKECAMATAN_AR_50K_0);
var lyr_ADMINISTRASIKECAMATAN_AR_50K_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADMINISTRASIKECAMATAN_AR_50K_0, 
                style: style_ADMINISTRASIKECAMATAN_AR_50K_0,
                popuplayertitle: 'ADMINISTRASIKECAMATAN_AR_50K',
                interactive: true,
    title: 'ADMINISTRASIKECAMATAN_AR_50K<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_0_0.png" /> ALANG-ALANGLEBAR<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_0_1.png" /> BANYUASIN SATU<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_0_2.png" /> BUKITKECIL<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_0_3.png" /> GANDUS<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_0_4.png" /> ILIRBARAT DUA<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_0_5.png" /> ILIRBARAT SATU<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_0_6.png" /> ILIRTIMUR DUA<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_0_7.png" /> ILIRTIMUR SATU<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_0_8.png" /> INDRALAYA UTARA<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_0_9.png" /> KALIDONI<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_0_10.png" /> KEMUNING<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_0_11.png" /> KERTAPATI<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_0_12.png" /> PEMULUTAN<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_0_13.png" /> PLAJU<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_0_14.png" /> RAMBUTAN<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_0_15.png" /> RANTAUBAYUR<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_0_16.png" /> SAKO<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_0_17.png" /> SEBERANGULU DUA<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_0_18.png" /> SEBERANGULU SATU<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_0_19.png" /> SEMATANGBORANG<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_0_20.png" /> SEMBAWA<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_0_21.png" /> SUKARAMI<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_0_22.png" /> TALANGKELAPA<br />' });
var format_AIRPORT_PT_50K_1 = new ol.format.GeoJSON();
var features_AIRPORT_PT_50K_1 = format_AIRPORT_PT_50K_1.readFeatures(json_AIRPORT_PT_50K_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AIRPORT_PT_50K_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AIRPORT_PT_50K_1.addFeatures(features_AIRPORT_PT_50K_1);
var lyr_AIRPORT_PT_50K_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AIRPORT_PT_50K_1, 
                style: style_AIRPORT_PT_50K_1,
                popuplayertitle: 'AIRPORT_PT_50K',
                interactive: true,
                title: '<img src="styles/legend/AIRPORT_PT_50K_1.png" /> AIRPORT_PT_50K'
            });

lyr_ADMINISTRASIKECAMATAN_AR_50K_0.setVisible(true);lyr_AIRPORT_PT_50K_1.setVisible(true);
var layersList = [lyr_ADMINISTRASIKECAMATAN_AR_50K_0,lyr_AIRPORT_PT_50K_1];
lyr_ADMINISTRASIKECAMATAN_AR_50K_0.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'foto': 'foto', });
lyr_AIRPORT_PT_50K_1.set('fieldAliases', {'KOBDMI': 'KOBDMI', 'KDICAO': 'KDICAO', 'KDIATA': 'KDIATA', 'ELEVAS': 'ELEVAS', 'MAVBMI': 'MAVBMI', 'LGTBMI': 'LGTBMI', 'KLSBMI': 'KLSBMI', 'ADABMI': 'ADABMI', 'ADRBMI': 'ADRBMI', 'REMARK': 'REMARK', 'TIPAIP': 'TIPAIP', 'TIPLOK': 'TIPLOK', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'KATKBM': 'KATKBM', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'foto': 'foto', });
lyr_ADMINISTRASIKECAMATAN_AR_50K_0.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'foto': '', });
lyr_AIRPORT_PT_50K_1.set('fieldImages', {'KOBDMI': 'TextEdit', 'KDICAO': 'TextEdit', 'KDIATA': 'TextEdit', 'ELEVAS': 'TextEdit', 'MAVBMI': 'TextEdit', 'LGTBMI': 'TextEdit', 'KLSBMI': 'TextEdit', 'ADABMI': 'TextEdit', 'ADRBMI': 'TextEdit', 'REMARK': 'TextEdit', 'TIPAIP': 'TextEdit', 'TIPLOK': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'KATKBM': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'foto': 'ExternalResource', });
lyr_ADMINISTRASIKECAMATAN_AR_50K_0.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'foto': 'no label', });
lyr_AIRPORT_PT_50K_1.set('fieldLabels', {'KOBDMI': 'no label', 'KDICAO': 'no label', 'KDIATA': 'no label', 'ELEVAS': 'no label', 'MAVBMI': 'no label', 'LGTBMI': 'no label', 'KLSBMI': 'no label', 'ADABMI': 'no label', 'ADRBMI': 'no label', 'REMARK': 'no label', 'TIPAIP': 'no label', 'TIPLOK': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'KATKBM': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'foto': 'inline label - visible with data', });
lyr_AIRPORT_PT_50K_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});