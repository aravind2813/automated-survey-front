const surveyJSON = {
 "logoPosition": "right",
 "pages": [
  {
   "name": "page1",
   "elements": [
    {
     "type": "radiogroup",
     "name": "question1",
     "title": "Blockchain is a type of distributed ledger technology",
     "isRequired": true,
     "choices": [
      {
       "value": "Item 1",
       "text": "True"
      },
      {
       "value": "Item 2",
       "text": "False"
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "question2",
     "title": "All blockchain networks are public",
     "isRequired": true,
     "choices": [
      {
       "value": "Item 1",
       "text": "True"
      },
      {
       "value": "Item 2",
       "text": "False"
      }
     ]
    }
   ]
  }
 ]
};

const survey = new Survey.Model(surveyJSON);

function alertResults (sender) {
  $.ajax({
  type: "POST",
  url: "http://localhost:3000/productSurvey",
  data: sender.data // or {"on": true}
}).done(function (data, textStatus, jqXHR) {
  console.log(data);
});
}

survey.onComplete.add(alertResults);

$(function() {
    $("#surveyContainer").Survey({ model: survey });
});
