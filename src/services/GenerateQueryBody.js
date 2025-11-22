const GenerateQueryBody = (layer,bufferPolygon) => {
  return [
    {
      dataSource: {id: layer.id},
          filter: {
    conditionList: [{
      spatialCondition: {
        key: layer.geometryField.fieldName,
        geometry: JSON.stringify(bufferPolygon),
        spatialRelation: "INTERSECT"
      }
    }],

    logicalOperation: "AND"
  }, 
      crs: layer.crs,
    
    },
  ];
};

export default GenerateQueryBody;