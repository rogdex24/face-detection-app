const calcFaceLoc = (data) => {
  const regions = data.outputs[0].data.regions;
  const image = document.getElementById("inputImage");
  const width = Number(image.width);
  const height = Number(image.height);
  const allBoxes = [];
  let boxLoc;
  for (let i = 0; i < regions.length; i += 1) {
    boxLoc = regions[i].region_info.bounding_box;
    allBoxes.push({
      leftCol: boxLoc.left_col * width,
      rightCol: width - boxLoc.right_col * width,
      topRow: boxLoc.top_row * height,
      bottomRow: height - boxLoc.bottom_row * height,
    });
  }
  return allBoxes;
};

const data = {
  status: {
    code: 10000,
    description: "Ok",
    req_id: "54b93c45176b23b5a120f912ca5cd0e5",
  },
  outputs: [
    {
      id: "f47736ac20ad47e1ab9eea0fe5aa4b89",
      status: {
        code: 10000,
        description: "Ok",
      },
      created_at: "2021-11-29T17:00:36.806077279Z",
      model: {
        id: "a403429f2ddf4b49b307e318f00e528b",
        name: "face",
        created_at: "2016-10-25T19:30:38.541073Z",
        modified_at: "2016-10-25T19:30:38.541073Z",
        app_id: "main",
        output_info: {
          output_config: {
            concepts_mutually_exclusive: false,
            closed_environment: false,
            max_concepts: 0,
            min_value: 0,
          },
          message: "Show output_info with: GET /models/{model_id}/output_info",
          type: "detect-concept",
          type_ext: "detect-concept",
        },
        model_version: {
          id: "34ce21a40cc24b6b96ffee54aabff139",
          created_at: "2019-01-17T19:45:49.087547Z",
          status: {
            code: 21100,
            description: "Model is trained and ready",
          },
          visibility: {
            gettable: 10,
          },
          app_id: "main",
          user_id: "clarifai",
          metadata: {},
        },
        display_name: "Face Detection",
        user_id: "clarifai",
        input_info: {},
        train_info: {},
        model_type_id: "visual-detector",
        visibility: {
          gettable: 10,
        },
        metadata: {},
        toolkits: [],
        use_cases: [],
        import_info: {},
      },
      input: {
        id: "708215ad98584ab19b7cb11558ef1590",
        data: {
          image: {
            url: "https://i.imgur.com/TTHS1VR.jpg",
          },
        },
      },
      data: {
        regions: [
          {
            id: "0939ded0997d554bdcf9adb315034bfc",
            region_info: {
              bounding_box: {
                top_row: 0.103733964,
                left_col: 0.14762118,
                bottom_row: 0.34314308,
                right_col: 0.23814502,
              },
            },
            data: {
              concepts: [
                {
                  id: "ai_8jtPl3Xj",
                  name: "face",
                  value: 0.9996536,
                  app_id: "main",
                },
              ],
            },
            value: 0.9996536,
          },
          {
            id: "e30aca0690b1f5c5088596301511965b",
            region_info: {
              bounding_box: {
                top_row: 0.5015219,
                left_col: 0.42593184,
                bottom_row: 0.72341585,
                right_col: 0.51478136,
              },
            },
            data: {
              concepts: [
                {
                  id: "ai_8jtPl3Xj",
                  name: "face",
                  value: 0.99957734,
                  app_id: "main",
                },
              ],
            },
            value: 0.99957734,
          },
          {
            id: "66e7749cca6a581c4e4671555e7c7ca9",
            region_info: {
              bounding_box: {
                top_row: 0.49003378,
                left_col: 0.6330695,
                bottom_row: 0.74703044,
                right_col: 0.7217947,
              },
            },
            data: {
              concepts: [
                {
                  id: "ai_8jtPl3Xj",
                  name: "face",
                  value: 0.9992213,
                  app_id: "main",
                },
              ],
            },
            value: 0.9992213,
          },
          {
            id: "d0f4cd3f365ce59d907177ee83306007",
            region_info: {
              bounding_box: {
                top_row: 0.1877458,
                left_col: 0.79649675,
                bottom_row: 0.41453674,
                right_col: 0.88048977,
              },
            },
            data: {
              concepts: [
                {
                  id: "ai_8jtPl3Xj",
                  name: "face",
                  value: 0.9991385,
                  app_id: "main",
                },
              ],
            },
            value: 0.9991385,
          },
        ],
      },
    },
  ],
};
