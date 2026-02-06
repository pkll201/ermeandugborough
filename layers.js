var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ErmeValleyandUgboroughMoorwaypoints_1 = new ol.format.GeoJSON();
var features_ErmeValleyandUgboroughMoorwaypoints_1 = format_ErmeValleyandUgboroughMoorwaypoints_1.readFeatures(json_ErmeValleyandUgboroughMoorwaypoints_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ErmeValleyandUgboroughMoorwaypoints_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ErmeValleyandUgboroughMoorwaypoints_1.addFeatures(features_ErmeValleyandUgboroughMoorwaypoints_1);
var lyr_ErmeValleyandUgboroughMoorwaypoints_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ErmeValleyandUgboroughMoorwaypoints_1, 
                style: style_ErmeValleyandUgboroughMoorwaypoints_1,
                popuplayertitle: 'Erme Valley and Ugborough Moor — waypoints',
                interactive: false,
                title: '<img src="styles/legend/ErmeValleyandUgboroughMoorwaypoints_1.png" /> Erme Valley and Ugborough Moor — waypoints'
            });
var format_ErmeValleyandUgboroughMoortracks_2 = new ol.format.GeoJSON();
var features_ErmeValleyandUgboroughMoortracks_2 = format_ErmeValleyandUgboroughMoortracks_2.readFeatures(json_ErmeValleyandUgboroughMoortracks_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ErmeValleyandUgboroughMoortracks_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ErmeValleyandUgboroughMoortracks_2.addFeatures(features_ErmeValleyandUgboroughMoortracks_2);
var lyr_ErmeValleyandUgboroughMoortracks_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ErmeValleyandUgboroughMoortracks_2, 
                style: style_ErmeValleyandUgboroughMoortracks_2,
                popuplayertitle: 'Erme Valley and Ugborough Moor — tracks',
                interactive: false,
                title: '<img src="styles/legend/ErmeValleyandUgboroughMoortracks_2.png" /> Erme Valley and Ugborough Moor — tracks'
            });
var format_ErmeValleyandUgboroughMoortrack_points_3 = new ol.format.GeoJSON();
var features_ErmeValleyandUgboroughMoortrack_points_3 = format_ErmeValleyandUgboroughMoortrack_points_3.readFeatures(json_ErmeValleyandUgboroughMoortrack_points_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ErmeValleyandUgboroughMoortrack_points_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ErmeValleyandUgboroughMoortrack_points_3.addFeatures(features_ErmeValleyandUgboroughMoortrack_points_3);
var lyr_ErmeValleyandUgboroughMoortrack_points_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ErmeValleyandUgboroughMoortrack_points_3, 
                style: style_ErmeValleyandUgboroughMoortrack_points_3,
                popuplayertitle: 'Erme Valley and Ugborough Moor — track_points',
                interactive: false,
                title: '<img src="styles/legend/ErmeValleyandUgboroughMoortrack_points_3.png" /> Erme Valley and Ugborough Moor — track_points'
            });
var format_ErmeValleyandUgboroughMoorroutes_4 = new ol.format.GeoJSON();
var features_ErmeValleyandUgboroughMoorroutes_4 = format_ErmeValleyandUgboroughMoorroutes_4.readFeatures(json_ErmeValleyandUgboroughMoorroutes_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ErmeValleyandUgboroughMoorroutes_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ErmeValleyandUgboroughMoorroutes_4.addFeatures(features_ErmeValleyandUgboroughMoorroutes_4);
var lyr_ErmeValleyandUgboroughMoorroutes_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ErmeValleyandUgboroughMoorroutes_4, 
                style: style_ErmeValleyandUgboroughMoorroutes_4,
                popuplayertitle: 'Erme Valley and Ugborough Moor — routes',
                interactive: false,
                title: '<img src="styles/legend/ErmeValleyandUgboroughMoorroutes_4.png" /> Erme Valley and Ugborough Moor — routes'
            });
var format_ErmeValleyandUgboroughMoorroute_points_5 = new ol.format.GeoJSON();
var features_ErmeValleyandUgboroughMoorroute_points_5 = format_ErmeValleyandUgboroughMoorroute_points_5.readFeatures(json_ErmeValleyandUgboroughMoorroute_points_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ErmeValleyandUgboroughMoorroute_points_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ErmeValleyandUgboroughMoorroute_points_5.addFeatures(features_ErmeValleyandUgboroughMoorroute_points_5);
var lyr_ErmeValleyandUgboroughMoorroute_points_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ErmeValleyandUgboroughMoorroute_points_5, 
                style: style_ErmeValleyandUgboroughMoorroute_points_5,
                popuplayertitle: 'Erme Valley and Ugborough Moor — route_points',
                interactive: false,
                title: '<img src="styles/legend/ErmeValleyandUgboroughMoorroute_points_5.png" /> Erme Valley and Ugborough Moor — route_points'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_ErmeValleyandUgboroughMoorwaypoints_1.setVisible(true);lyr_ErmeValleyandUgboroughMoortracks_2.setVisible(true);lyr_ErmeValleyandUgboroughMoortrack_points_3.setVisible(true);lyr_ErmeValleyandUgboroughMoorroutes_4.setVisible(true);lyr_ErmeValleyandUgboroughMoorroute_points_5.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_ErmeValleyandUgboroughMoorwaypoints_1,lyr_ErmeValleyandUgboroughMoortracks_2,lyr_ErmeValleyandUgboroughMoortrack_points_3,lyr_ErmeValleyandUgboroughMoorroutes_4,lyr_ErmeValleyandUgboroughMoorroute_points_5];
lyr_ErmeValleyandUgboroughMoorwaypoints_1.set('fieldAliases', {'ele': 'ele', 'time': 'time', 'magvar': 'magvar', 'geoidheight': 'geoidheight', 'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'sym': 'sym', 'type': 'type', 'fix': 'fix', 'sat': 'sat', 'hdop': 'hdop', 'vdop': 'vdop', 'pdop': 'pdop', 'ageofdgpsdata': 'ageofdgpsdata', 'dgpsid': 'dgpsid', });
lyr_ErmeValleyandUgboroughMoortracks_2.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_ErmeValleyandUgboroughMoortrack_points_3.set('fieldAliases', {'track_fid': 'track_fid', 'track_seg_id': 'track_seg_id', 'track_seg_point_id': 'track_seg_point_id', 'ele': 'ele', 'time': 'time', 'magvar': 'magvar', 'geoidheight': 'geoidheight', 'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'sym': 'sym', 'type': 'type', 'fix': 'fix', 'sat': 'sat', 'hdop': 'hdop', 'vdop': 'vdop', 'pdop': 'pdop', 'ageofdgpsdata': 'ageofdgpsdata', 'dgpsid': 'dgpsid', });
lyr_ErmeValleyandUgboroughMoorroutes_4.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_ErmeValleyandUgboroughMoorroute_points_5.set('fieldAliases', {'route_fid': 'route_fid', 'route_point_id': 'route_point_id', 'ele': 'ele', 'time': 'time', 'magvar': 'magvar', 'geoidheight': 'geoidheight', 'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'sym': 'sym', 'type': 'type', 'fix': 'fix', 'sat': 'sat', 'hdop': 'hdop', 'vdop': 'vdop', 'pdop': 'pdop', 'ageofdgpsdata': 'ageofdgpsdata', 'dgpsid': 'dgpsid', });
lyr_ErmeValleyandUgboroughMoorwaypoints_1.set('fieldImages', {'ele': '', 'time': '', 'magvar': '', 'geoidheight': '', 'name': '', 'cmt': '', 'desc': '', 'src': '', 'link1_href': '', 'link1_text': '', 'link1_type': '', 'link2_href': '', 'link2_text': '', 'link2_type': '', 'sym': '', 'type': '', 'fix': '', 'sat': '', 'hdop': '', 'vdop': '', 'pdop': '', 'ageofdgpsdata': '', 'dgpsid': '', });
lyr_ErmeValleyandUgboroughMoortracks_2.set('fieldImages', {'name': '', 'cmt': '', 'desc': '', 'src': '', 'link1_href': '', 'link1_text': '', 'link1_type': '', 'link2_href': '', 'link2_text': '', 'link2_type': '', 'number': '', 'type': '', });
lyr_ErmeValleyandUgboroughMoortrack_points_3.set('fieldImages', {'track_fid': '', 'track_seg_id': '', 'track_seg_point_id': '', 'ele': '', 'time': '', 'magvar': '', 'geoidheight': '', 'name': '', 'cmt': '', 'desc': '', 'src': '', 'link1_href': '', 'link1_text': '', 'link1_type': '', 'link2_href': '', 'link2_text': '', 'link2_type': '', 'sym': '', 'type': '', 'fix': '', 'sat': '', 'hdop': '', 'vdop': '', 'pdop': '', 'ageofdgpsdata': '', 'dgpsid': '', });
lyr_ErmeValleyandUgboroughMoorroutes_4.set('fieldImages', {'name': '', 'cmt': '', 'desc': '', 'src': '', 'link1_href': '', 'link1_text': '', 'link1_type': '', 'link2_href': '', 'link2_text': '', 'link2_type': '', 'number': '', 'type': '', });
lyr_ErmeValleyandUgboroughMoorroute_points_5.set('fieldImages', {'route_fid': '', 'route_point_id': '', 'ele': '', 'time': '', 'magvar': '', 'geoidheight': '', 'name': '', 'cmt': '', 'desc': '', 'src': '', 'link1_href': '', 'link1_text': '', 'link1_type': '', 'link2_href': '', 'link2_text': '', 'link2_type': '', 'sym': '', 'type': '', 'fix': '', 'sat': '', 'hdop': '', 'vdop': '', 'pdop': '', 'ageofdgpsdata': '', 'dgpsid': '', });
lyr_ErmeValleyandUgboroughMoorwaypoints_1.set('fieldLabels', {'ele': 'header label - visible with data', 'time': 'no label', 'magvar': 'no label', 'geoidheight': 'no label', 'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'sym': 'no label', 'type': 'no label', 'fix': 'no label', 'sat': 'no label', 'hdop': 'no label', 'vdop': 'no label', 'pdop': 'no label', 'ageofdgpsdata': 'no label', 'dgpsid': 'no label', });
lyr_ErmeValleyandUgboroughMoortracks_2.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_ErmeValleyandUgboroughMoortrack_points_3.set('fieldLabels', {'track_fid': 'no label', 'track_seg_id': 'no label', 'track_seg_point_id': 'no label', 'ele': 'no label', 'time': 'no label', 'magvar': 'no label', 'geoidheight': 'no label', 'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'sym': 'no label', 'type': 'no label', 'fix': 'no label', 'sat': 'no label', 'hdop': 'no label', 'vdop': 'no label', 'pdop': 'no label', 'ageofdgpsdata': 'no label', 'dgpsid': 'no label', });
lyr_ErmeValleyandUgboroughMoorroutes_4.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_ErmeValleyandUgboroughMoorroute_points_5.set('fieldLabels', {'route_fid': 'no label', 'route_point_id': 'no label', 'ele': 'no label', 'time': 'no label', 'magvar': 'no label', 'geoidheight': 'no label', 'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'sym': 'no label', 'type': 'no label', 'fix': 'no label', 'sat': 'no label', 'hdop': 'no label', 'vdop': 'no label', 'pdop': 'no label', 'ageofdgpsdata': 'no label', 'dgpsid': 'no label', });
lyr_ErmeValleyandUgboroughMoorroute_points_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});