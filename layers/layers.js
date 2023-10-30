var wms_layers = [];


        var lyr_Positronretina_0 = new ol.layer.Tile({
            'title': 'Positron (retina)',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}@2x.png'
            })
        });
var format_PlanilhasemttuloPgina1_1 = new ol.format.GeoJSON();
var features_PlanilhasemttuloPgina1_1 = format_PlanilhasemttuloPgina1_1.readFeatures(json_PlanilhasemttuloPgina1_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PlanilhasemttuloPgina1_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PlanilhasemttuloPgina1_1.addFeatures(features_PlanilhasemttuloPgina1_1);
var lyr_PlanilhasemttuloPgina1_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PlanilhasemttuloPgina1_1, 
                style: style_PlanilhasemttuloPgina1_1,
                interactive: true,
                title: '<img src="styles/legend/PlanilhasemttuloPgina1_1.png" /> Planilha sem título-Página1'
            });

lyr_Positronretina_0.setVisible(true);lyr_PlanilhasemttuloPgina1_1.setVisible(true);
var layersList = [lyr_Positronretina_0,lyr_PlanilhasemttuloPgina1_1];
lyr_PlanilhasemttuloPgina1_1.set('fieldAliases', {'Evento': 'Evento', 'Assunto': 'Assunto', 'Data': 'Data', 'Ano': 'Ano', 'Pasta': 'Pasta', 'Página': 'Página', 'Local de atuação': 'Local de atuação', 'Arquivo': 'Arquivo', 'Prática': 'Prática', 'Atores (genérico)': 'Atores (genérico)', 'Resumo': 'Resumo', 'Ciclo': 'Ciclo', });
lyr_PlanilhasemttuloPgina1_1.set('fieldImages', {'Evento': 'TextEdit', 'Assunto': 'TextEdit', 'Data': 'DateTime', 'Ano': 'Range', 'Pasta': 'TextEdit', 'Página': 'TextEdit', 'Local de atuação': 'TextEdit', 'Arquivo': 'TextEdit', 'Prática': 'TextEdit', 'Atores (genérico)': 'TextEdit', 'Resumo': 'TextEdit', 'Ciclo': 'TextEdit', });
lyr_PlanilhasemttuloPgina1_1.set('fieldLabels', {'Evento': 'inline label', 'Assunto': 'inline label', 'Data': 'inline label', 'Ano': 'inline label', 'Pasta': 'inline label', 'Página': 'inline label', 'Local de atuação': 'inline label', 'Arquivo': 'inline label', 'Prática': 'inline label', 'Atores (genérico)': 'inline label', 'Resumo': 'inline label', 'Ciclo': 'inline label', });
lyr_PlanilhasemttuloPgina1_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});