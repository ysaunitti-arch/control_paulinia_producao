var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_EsriLightGray_1 = new ol.layer.Tile({
            'title': 'Esri Light Gray',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/arcgis/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_loteamentos_c_atributos_2 = new ol.format.GeoJSON();
var features_loteamentos_c_atributos_2 = format_loteamentos_c_atributos_2.readFeatures(json_loteamentos_c_atributos_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_loteamentos_c_atributos_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_loteamentos_c_atributos_2.addFeatures(features_loteamentos_c_atributos_2);
var lyr_loteamentos_c_atributos_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_loteamentos_c_atributos_2, 
                style: style_loteamentos_c_atributos_2,
                popuplayertitle: 'loteamentos_c_atributos',
                interactive: true,
    title: 'loteamentos_c_atributos<br />\
    <img src="styles/legend/loteamentos_c_atributos_2_0.png" /> Base_CAD<br />\
    <img src="styles/legend/loteamentos_c_atributos_2_1.png" /> <br />' });
var group_loteamentos_controle_producao = new ol.layer.Group({
                                layers: [lyr_loteamentos_c_atributos_2,],
                                fold: 'open',
                                title: 'loteamentos_controle_producao'});
var group_bases = new ol.layer.Group({
                                layers: [lyr_GoogleSatellite_0,lyr_EsriLightGray_1,],
                                fold: 'close',
                                title: 'bases'});

lyr_GoogleSatellite_0.setVisible(true);lyr_EsriLightGray_1.setVisible(true);lyr_loteamentos_c_atributos_2.setVisible(true);
var layersList = [group_bases,group_loteamentos_controle_producao];
lyr_loteamentos_c_atributos_2.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Ano': 'Ano', 'Aprovaçã': 'Aprovaçã', 'Matricula': 'Matricula', 'Cadastro': 'Cadastro', 'Nº_Lotes': 'Nº_Lotes', 'Área_m²': 'Área_m²', 'Prop__Inic': 'Prop__Inic', 'Área_QGis': 'Área_QGis', 'Década': 'Década', 'descript_1': 'descript_1', 'altitude_1': 'altitude_1', 'layer': 'layer', 'path': 'path', 'NM_LOTEAME': 'NM_LOTEAME', 'controle': 'controle', 'Loteamento': 'Loteamento', 'Contagem D': 'Contagem D', 'Contagem_1': 'Contagem_1', 'shp': 'shp', 'pdf': 'pdf', 'OBS': 'OBS', 'field_7': 'field_7', 'loteamentos_analise_Con_dist_Quadra': 'loteamentos_analise_Con_dist_Quadra', 'loteamentos_analise_Com_de_Lote': 'loteamentos_analise_Com_de_Lote', 'loteamentos_analise_shp': 'loteamentos_analise_shp', 'loteamentos_analise_pdf': 'loteamentos_analise_pdf', 'loteamentos_analise_OBS_analise_loteamento': 'loteamentos_analise_OBS_analise_loteamento', 'loteamentos_analise_ortofoto_base_CAD': 'loteamentos_analise_ortofoto_base_CAD', 'loteamentos_analise_vetorizacao_CAD': 'loteamentos_analise_vetorizacao_CAD', 'loteamentos_analise_data_inicio': 'loteamentos_analise_data_inicio', 'loteamentos_analise_data_termino': 'loteamentos_analise_data_termino', 'loteamentos_analise_OBS_vetorizacao': 'loteamentos_analise_OBS_vetorizacao', 'loteamentos_analise_analista': 'loteamentos_analise_analista', 'loteamentos_analise_compatibilização': 'loteamentos_analise_compatibilização', 'loteamentos_analise_revisao_cadastral': 'loteamentos_analise_revisao_cadastral', 'loteamentos_analise_data_inicio_1': 'loteamentos_analise_data_inicio_1', 'loteamentos_analise_data_termino_1': 'loteamentos_analise_data_termino_1', 'loteamentos_analise_revisor': 'loteamentos_analise_revisor', 'loteamentos_analise_OBS_revisao_cadastral': 'loteamentos_analise_OBS_revisao_cadastral', });
lyr_loteamentos_c_atributos_2.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'Ano': 'TextEdit', 'Aprovaçã': 'TextEdit', 'Matricula': 'TextEdit', 'Cadastro': 'TextEdit', 'Nº_Lotes': 'TextEdit', 'Área_m²': 'TextEdit', 'Prop__Inic': 'TextEdit', 'Área_QGis': 'TextEdit', 'Década': 'TextEdit', 'descript_1': 'TextEdit', 'altitude_1': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'NM_LOTEAME': 'TextEdit', 'controle': 'TextEdit', 'Loteamento': 'TextEdit', 'Contagem D': 'TextEdit', 'Contagem_1': 'TextEdit', 'shp': 'TextEdit', 'pdf': 'TextEdit', 'OBS': 'TextEdit', 'field_7': 'TextEdit', 'loteamentos_analise_Con_dist_Quadra': 'TextEdit', 'loteamentos_analise_Com_de_Lote': 'TextEdit', 'loteamentos_analise_shp': 'TextEdit', 'loteamentos_analise_pdf': 'TextEdit', 'loteamentos_analise_OBS_analise_loteamento': 'TextEdit', 'loteamentos_analise_ortofoto_base_CAD': 'TextEdit', 'loteamentos_analise_vetorizacao_CAD': 'TextEdit', 'loteamentos_analise_data_inicio': 'TextEdit', 'loteamentos_analise_data_termino': 'TextEdit', 'loteamentos_analise_OBS_vetorizacao': 'TextEdit', 'loteamentos_analise_analista': 'TextEdit', 'loteamentos_analise_compatibilização': 'TextEdit', 'loteamentos_analise_revisao_cadastral': 'TextEdit', 'loteamentos_analise_data_inicio_1': 'TextEdit', 'loteamentos_analise_data_termino_1': 'TextEdit', 'loteamentos_analise_revisor': 'TextEdit', 'loteamentos_analise_OBS_revisao_cadastral': 'TextEdit', });
lyr_loteamentos_c_atributos_2.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Ano': 'no label', 'Aprovaçã': 'no label', 'Matricula': 'no label', 'Cadastro': 'no label', 'Nº_Lotes': 'no label', 'Área_m²': 'no label', 'Prop__Inic': 'no label', 'Área_QGis': 'no label', 'Década': 'no label', 'descript_1': 'no label', 'altitude_1': 'no label', 'layer': 'no label', 'path': 'no label', 'NM_LOTEAME': 'inline label - always visible', 'controle': 'no label', 'Loteamento': 'no label', 'Contagem D': 'no label', 'Contagem_1': 'no label', 'shp': 'no label', 'pdf': 'no label', 'OBS': 'no label', 'field_7': 'no label', 'loteamentos_analise_Con_dist_Quadra': 'no label', 'loteamentos_analise_Com_de_Lote': 'no label', 'loteamentos_analise_shp': 'no label', 'loteamentos_analise_pdf': 'no label', 'loteamentos_analise_OBS_analise_loteamento': 'no label', 'loteamentos_analise_ortofoto_base_CAD': 'no label', 'loteamentos_analise_vetorizacao_CAD': 'no label', 'loteamentos_analise_data_inicio': 'no label', 'loteamentos_analise_data_termino': 'no label', 'loteamentos_analise_OBS_vetorizacao': 'no label', 'loteamentos_analise_analista': 'no label', 'loteamentos_analise_compatibilização': 'no label', 'loteamentos_analise_revisao_cadastral': 'no label', 'loteamentos_analise_data_inicio_1': 'no label', 'loteamentos_analise_data_termino_1': 'no label', 'loteamentos_analise_revisor': 'no label', 'loteamentos_analise_OBS_revisao_cadastral': 'no label', });
lyr_loteamentos_c_atributos_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});