
const states = [
  {
    id: 'AL',
    name: 'Alabama',
    votes2016Rep: 9,
    votes2016Dem: 0,
    voteCount: 9,
    battleground: false,
    inplay: false,
  },
  {
    id: 'AK',
    name: 'Alaska',
    votes2016Rep: 3,
    votes2016Dem: 0,
    voteCount: 3,
    battleground: false,
    inplay: false,
  },
  {
    id: 'AZ',
    name: 'Arizona',
    votes2016Rep: 11,
    votes2016Dem: 0,
    voteCount: 11,
    battleground: true,
    inplay: false,
    articles: [
      'Arizona article',
      'And yet another article title',
    ],
  },
  {
    id: 'AR',
    name: 'Arkansas',
    votes2016Rep: 6,
    votes2016Dem: 0,
    voteCount: 6,
    battleground: false,
    inplay: false,
  },
  {
    id: 'CA',
    name: 'California',
    votes2016Rep: 0,
    votes2016Dem: 55,
    voteCount: 55,
    battleground: false,
    inplay: false,
  },
  {
    id: 'CO',
    name: 'Colorado',
    votes2016Rep: 0,
    votes2016Dem: 9,
    voteCount: 9,
    battleground: false,
    inplay: false,
  },
  {
    id: 'CT',
    name: 'Connecticut',
    votes2016Rep: 0,
    votes2016Dem: 7,
    voteCount: 7,
    battleground: false,
    inplay: false,
  },
  {
    id: 'DE',
    name: 'Delaware',
    votes2016Rep: 0,
    votes2016Dem: 3,
    voteCount: 3,
    battleground: false,
    inplay: false,
  },
  {
    id: 'FL',
    name: 'Florida',
    votes2016Rep: 29,
    votes2016Dem: 0,
    voteCount: 29,
    battleground: true,
    inplay: false,
    articles: [
      'An 11-year-old changed election results on a replica Florida state website in under 10 minutes',
      'Some other article title',
      'And yet another article title',
    ],
  },
  {
    id: 'GA',
    name: 'Georgia',
    votes2016Rep: 16,
    votes2016Dem: 0,
    voteCount: 16,
    battleground: true,
    inplay: false,
    articles: [
      'Wisconsin article title',
      'Some other article title',
    ],
  },
  {
    id: 'HI',
    name: 'Hawaii',
    votes2016Rep: 0,
    votes2016Dem: 3,
    voteCount: 4,
    battleground: false,
    inplay: false,
  },
  {
    id: 'ID',
    name: 'Idaho',
    votes2016Rep: 4,
    votes2016Dem: 0,
    voteCount: 4,
    battleground: false,
    inplay: false,
  },
  {
    id: 'IL',
    name: 'Illinois',
    votes2016Rep: 0,
    votes2016Dem: 20,
    voteCount: 20,
    battleground: false,
    inplay: false,
  },
  {
    id: 'IN',
    name: 'Indiana',
    votes2016Rep: 11,
    votes2016Dem: 0,
    voteCount: 11,
    battleground: false,
    inplay: false,
  },
  {
    id: 'IA',
    name: 'Iowa',
    votes2016Rep: 6,
    votes2016Dem: 0,
    voteCount: 6,
    battleground: false,
    inplay: true,
  },
  {
    id: 'KS',
    name: 'Kansas',
    votes2016Rep: 6,
    votes2016Dem: 0,
    voteCount: 6,
    battleground: false,
    inplay: false,
  },
  {
    id: 'KY',
    name: 'Kentucky',
    votes2016Rep: 8,
    votes2016Dem: 0,
    voteCount: 8,
    battleground: false,
    inplay: false,
  },
  {
    id: 'LA',
    name: 'Louisiana',
    votes2016Rep: 8,
    votes2016Dem: 0,
    voteCount: 8,
    battleground: false,
    inplay: false,
  },
  {
    id: 'ME',
    name: 'Maine',
    votes2016Rep: 1,
    votes2016Dem: 3,
    voteCount: 4,
    battleground: true,
    inplay: false,
    articles: [
      'Some article about Maine',
      'And yet another article title',
    ],
  },
  {
    id: 'MD',
    name: 'Maryland',
    votes2016Rep: 0,
    votes2016Dem: 10,
    voteCount: 10,
    battleground: false,
    inplay: false,
  },
  {
    id: 'MA',
    name: 'Massachusetts',
    votes2016Rep: 0,
    votes2016Dem: 11,
    voteCount: 11,
    battleground: false,
    inplay: false,
  },
  {
    id: 'MI',
    name: 'Michigan',
    votes2016Rep: 16,
    votes2016Dem: 0,
    voteCount: 16,
    battleground: true,
    inplay: false,
    articles: [
      'Some article about Michigan',
      'And yet another article title',
    ],
  },
  {
    id: 'MN',
    name: 'Minnesota',
    votes2016Rep: 0,
    votes2016Dem: 10,
    voteCount: 10,
    battleground: true,
    inplay: false,
    articles: [
      'Some article about Minnesota',
      'And yet another article title',
    ],
  },
  {
    id: 'MS',
    name: 'Mississippi',
    votes2016Rep: 6,
    votes2016Dem: 0,
    voteCount: 6,
    battleground: false,
    inplay: false,
  },
  {
    id: 'MO',
    name: 'Missouri',
    votes2016Rep: 10,
    votes2016Dem: 0,
    voteCount: 10,
    battleground: false,
    inplay: false,
  },
  {
    id: 'MT',
    name: 'Montana',
    votes2016Rep: 3,
    votes2016Dem: 0,
    voteCount: 3,
    battleground: false,
    inplay: false,
  },
  {
    id: 'NE',
    name: 'Nebraska',
    votes2016Rep: 5,
    votes2016Dem: 0,
    voteCount: 5,
    battleground: false,
    inplay: false,
  },
  {
    id: 'NV',
    name: 'Nevada',
    votes2016Rep: 6,
    votes2016Dem: 0,
    voteCount: 6,
    battleground: true,
    inplay: false,
    articles: [
      'An article about voting in Nevada',
      'And yet another article title',
    ],
  },
  {
    id: 'NH',
    name: 'New Hampshire',
    votes2016Rep: 4,
    votes2016Dem: 0,
    voteCount: 4,
    battleground: true,
    inplay: false,
  },
  {
    id: 'NJ',
    name: 'New Jersey',
    votes2016Rep: 0,
    votes2016Dem: 14,
    voteCount: 14,
    battleground: false,
    inplay: false,
  },
  {
    id: 'NM',
    name: 'New Mexico',
    votes2016Rep: 0,
    votes2016Dem: 5,
    voteCount: 5,
    battleground: false,
    inplay: true,
  },
  {
    id: 'NY',
    name: 'New York',
    votes2016Rep: 0,
    votes2016Dem: 29,
    voteCount: 29,
    battleground: false,
    inplay: false,
  },
  {
    id: 'NC',
    name: 'North Carolina',
    votes2016Rep: 15,
    votes2016Dem: 0,
    voteCount: 15,
    battleground: true,
    inplay: false,
    articles: [
      'Some article about North Carolina',
      'And yet another article title',
      'Another article',
      'And a different one about North Carolina',
    ],
  },
  {
    id: 'ND',
    name: 'North Dakota',
    votes2016Rep: 3,
    votes2016Dem: 0,
    voteCount: 3,
    battleground: false,
    inplay: false,
  },
  {
    id: 'OH',
    name: 'Ohio',
    votes2016Rep: 18,
    votes2016Dem: 0,
    voteCount: 18,
    battleground: false,
    inplay: true,
  },
  {
    id: 'OK',
    name: 'Oklahoma',
    votes2016Rep: 7,
    votes2016Dem: 0,
    voteCount: 7,
    battleground: false,
    inplay: false,
  },
  {
    id: 'OR',
    name: 'Oregon',
    votes2016Rep: 0,
    votes2016Dem: 7,
    voteCount: 7,
    battleground: false,
    inplay: false,
  },
  {
    id: 'PA',
    name: 'Pennsylvania',
    votes2016Rep: 20,
    votes2016Dem: 0,
    voteCount: 20,
    battleground: true,
    inplay: false,
    articles: [
      'Some article about Pennsylvania',
      'And yet another article title',
    ],
  },
  {
    id: 'RI',
    name: 'Rhode Island',
    votes2016Rep: 0,
    votes2016Dem: 4,
    voteCount: 4,
    battleground: false,
    inplay: false,
  },
  {
    id: 'SC',
    name: 'South Carolina',
    votes2016Rep: 9,
    votes2016Dem: 0,
    voteCount: 9,
    battleground: false,
    inplay: false,
  },
  {
    id: 'SD',
    name: 'South Dakota',
    votes2016Rep: 3,
    votes2016Dem: 0,
    voteCount: 3,
    battleground: false,
    inplay: false,
  },
  {
    id: 'TN',
    name: 'Tennessee',
    votes2016Rep: 11,
    votes2016Dem: 0,
    voteCount: 11,
    battleground: false,
    inplay: false,
  },
  {
    id: 'TX',
    name: 'Texas',
    votes2016Rep: 36,
    votes2016Dem: 0,
    voteCount: 38,
    battleground: false,
    inplay: true,
  },
  {
    id: 'UT',
    name: 'Utah',
    votes2016Rep: 6,
    votes2016Dem: 0,
    voteCount: 6,
    battleground: false,
    inplay: false,
  },
  {
    id: 'VT',
    name: 'Vermont',
    votes2016Rep: 0,
    votes2016Dem: 3,
    voteCount: 3,
    battleground: false,
    inplay: false,
  },
  {
    id: 'VA',
    name: 'Virginia',
    votes2016Rep: 0,
    votes2016Dem: 13,
    voteCount: 13,
    battleground: false,
    inplay: true,
  },
  {
    id: 'WA',
    name: 'Washington',
    votes2016Rep: 0,
    votes2016Dem: 8,
    voteCount: 12,
    battleground: false,
    inplay: false,
  },
  {
    id: 'WV',
    name: 'West Virginia',
    votes2016Rep: 5,
    votes2016Dem: 0,
    voteCount: 5,
    battleground: false,
    inplay: false,
  },
  {
    id: 'WI',
    name: 'Wisconsin',
    votes2016Rep: 10,
    votes2016Dem: 0,
    voteCount: 10,
    battleground: true,
    inplay: false,
    articles: [
      'Wisconsin article title',
      'Some other article title',
    ],
  },
  {
    id: 'WY',
    name: 'Wyoming',
    votes2016Rep: 3,
    votes2016Dem: 0,
    voteCount: 3,
    battleground: false,
    inplay: false,
  },
  {
    id: 'DC',
    name: 'Washington, DC',
    votes2016Rep: 0,
    votes2016Dem: 3,
    voteCount: 3,
    battleground: false,
    inplay: false,
  },
];

export {
  states,

};
