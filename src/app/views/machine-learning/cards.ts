import { environment } from "../../../environments/environment";
import { ModelResult } from "../../models/model-result.model";
let baseUrl = environment.apiBaseUrl;

export let ML_CARDS = [
    // {
    //   title: 'NVIDIA Stock Predictor',
    //   imgLink: this.baseUrl + '/nvidia_prediction',
    //   description: 'Random Forest alrorithm to predict the cost of the NVIDA stock price today. ',
    //   plot: undefined,
    //   id: 'nvidia_stock_predictor',
    //   type: 'plot'
    // },
    {
      title: 'Fake or Not',
      description: 'Enter a comment for an item and the trained model will tell you if its fake or not.',
      plot: undefined,
      id: 'fake_or_not_single',
      type: 'input',
      links: [{ title: 'Go to Repo', link: 'https://github.com/AnthonyCalderaio/Machine-Learning/tree/main/Models/Fake_or_not' }],
    },
    {
      title: 'Fake or Not (Bulk)',
      description: 'Enter a CSV file where one column is \'review\'s. of all strings. This will output a column of \'fake\' with the value of 0 for real and 1 for fake.',
      plot: undefined,
      id: 'fake_or_not_bulk',
      type: 'upload',
      links: [{ title: 'Go to Repo', link: 'https://github.com/AnthonyCalderaio/Machine-Learning/tree/main/Models/Fake_or_not' }],
    },
    {
      title: 'Credit Card Fraud Detector',
      desription: '',
      id: 'credit_card_fraud_detector',
      type: 'ModelResult',
      resultLink: baseUrl+'/credit_card_fraud',
      links: [{ title: 'Go to Repo', link: 'https://github.com/AnthonyCalderaio/Machine-Learning/tree/main/Models/credit_card_fraud' }],
      results: [      ]
    } as ModelResult
  ]

