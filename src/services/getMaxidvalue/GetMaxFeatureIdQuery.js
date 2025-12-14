const GetMaxFeatureIdQuery = (layer) => {
  return [
    {
      dataSource: {id: layer.id},
      orderBy: [
        {
          fieldName:"id_0",
          ascDesc: "DESC",
        }
      ],
        returns: [
      {
        fieldName: "id" 
      }
    ],
          filter: {
    conditionList: [
      {
      tabularCondition: {
        key: "id_0",
          operator: ">=",
          value: 0,
      }
    },
  ],
  }, 

      crs: layer.crs,
    
    },
  ];
};

export default GetMaxFeatureIdQuery;