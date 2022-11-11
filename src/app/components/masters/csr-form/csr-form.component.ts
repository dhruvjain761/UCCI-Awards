import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExcelService } from 'src/app/services/excel.service';

@Component({
  selector: 'app-csr-form',
  templateUrl: './csr-form.component.html',
  styleUrls: ['./csr-form.component.scss']
})
export class CsrFormComponent implements OnInit {
  sections: any = [];
  breadcrumb: any[] = [
    {
      title: 'form',
      subTitle: 'Masters',
    },
  ];
  constructor(private router: ActivatedRoute, private excelService:ExcelService) { }
  ngOnInit(): void {
    let slug = this.router.snapshot.params;
    console.log(slug);

    if (slug.slug == 'manufacturingForm') {
      this.sections = [
        {
          "title": "Basic Information ",
          "description": "/ मूल जानकारी",
          "state": "normal",
          "canEnter": true,
          "canExit": false,
          "controls": [
            {
              "id": "text",
              "name": "text",
              "placeholder": "Enter Text Here",
              "label": "1.1 Registered name of bussiness / व्यवसाय का पंजीकृत नाम",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "radio",
              "name": "radio",
              "label": "1.2 Type of company / कम्पनी का प्रकार",
              "tooltip": "",
              "value": "",
              "type": "radio",
              "required": true,
              "data": [
                {
                  "label": "Proprietorship / प्रोपराइटरशिप",
                  "value": "1"
                },
                {
                  "label": "Partnership / पार्टनरशिप",
                  "value": "2"
                },
                {
                  "label": "Private Limited / प्राईवेट लिमिटेड",
                  "value": "Another Label2"
                },
                {
                  "label": "Public Limited / पब्लिक लिमिटेड",
                  "value": "Another Label3"
                },
                {
                  "label": "Limited Liability Partnership / लिमिटेड लाईबिलिटी पार्टनरशिप",
                  "value": "Another Label4"
                },
                {
                  "label": "Others / अन्य",
                  "value": "Another Label5"
                }
              ],
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "Enter Text Here",
              "label": "1.3 GST Number(e.g. 08AABCX2183V1Z0) / जीएसटी नंबर",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "radio",
              "name": "radio",
              "label": "1.4 Composition scheme / कम्पोजीशन स्कीम",
              "tooltip": "",
              "value": "",
              "type": "radio",
              "required": true,
              "data": [
                {
                  "label": "Yes",
                  "value": "1"
                },
                {
                  "label": "No",
                  "value": "2"
                }
              ],
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "Enter Text Here",
              "label": "1.5.1 Address of registered office / पंजीकृत कार्यालय का पता",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "Enter Text Here",
              "label": "1.5.2 State / राज्य",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "Enter Text Here",
              "label": "1.5.3 District / जिला",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "Enter Text Here",
              "label": "1.5.4 Pincode / पिन कोड",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "Enter Text Here",
              "label": "1.6 Year of commencement of manufacturing operations / व्यावसायिक गतिविधियां शुरु करने का वर्ष",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "Enter Text Here",
              "label": "1.7 Website (http://example.com) / वेबसाईट",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "Enter Text Here",
              "label": "1.8 Number of manufacturing units / कुल निर्माण इकाइयों की संख्या",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "label",
              "name": "label",
              "label": "1.9 Location of manufacturing unit(s) / निर्माण इकाइयों का स्थान",
              "tooltip": "",
              "type": "Label",
              "required": true,
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "Enter Text Here",
              "label": "1.9.1 State / राज्य",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "Enter Text Here",
              "label": "1.9.2 City / शहर",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "Enter Text Here",
              "label": "1.9.3 Location / स्थान",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "Enter Text Here",
              "label": "1.9.4 State / राज्य",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "Enter Text Here",
              "label": "1.9.5 City / शहर",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "Enter Text Here",
              "label": "1.9.6 Location / स्थान",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "Enter Text Here",
              "label": "1.9.7 State / राज्य",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "Enter Text Here",
              "label": "1.9.8 City / शहर",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "Enter Text Here",
              "label": "1.9.9 Location / स्थान",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "label",
              "name": "label",
              "label": "1.10 Details of two key promoters or partners or directors / कम्पनी के दो प्रमुख प्रमोटर अथवा पार्टनर अथवा निदेशकों के बारे में जानकारी:",
              "tooltip": "",
              "type": "Label",
              "required": true,
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "Enter Text Here",
              "label": "1.10.1 Name / नाम",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "Designation / पद",
              "label": "1.10.2",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "Enter Text Here",
              "label": "1.10.3 Email id / ई-मेल आईडी",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "Enter Text Here",
              "label": "1.10.4 Mobile / मोबाईल नम्बर",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "Enter Text Here",
              "label": "1.10.5 Name / नाम",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "Enter Text Here",
              "label": "1.10.6 Designation / पद",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "Enter Text Here",
              "label": "1.10.7 Email id / ई-मेल आईडी",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "Enter Text Here",
              "label": "1.10.8 Mobile / मोबाईल नम्बर",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "label",
              "name": "label",
              "label": "1.11 Details of Key Contact for Communication/ मुख्य संपर्क का विवरण",
              "tooltip": "",
              "type": "Label",
              "required": true,
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "Enter Text Here",
              "label": "11.1 Name / नाम",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "Enter Text Here",
              "label": "11.2 Designation / पद",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "Enter Text Here",
              "label": "11.3 Email id / ई-मेल आईडी",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "Enter Text Here",
              "label": "11.4 Mobile / मोबाईल नम्बर",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            }
          ]
        },
        {
          "title": "Vision Statement / ",
          "description": "Enter discription",
          "state": "normal",
          "canEnter": true,
          "canExit": false,
          "controls": [
            {
              "id": "area",
              "name": "area",
              "placeholder": "Enter Description",
              "label": "2.1 Describe your organization’s strategic planning process viz., key activities and their frequency and participants in these process / आपके व्यवसाय सम्बन्धी मध्यम-अवधि नीतिगत कार्य योजना, व उसे तय करने की प्रक्रिया और उनकी पुनः निरिक्षण की योजना का वर्णन करें ।",
              "tooltip": "",
              "value": "",
              "type": "textarea",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "area",
              "name": "area",
              "placeholder": "Enter Description",
              "label": "2.2 What is your vision statement? / आपका विजन स्टेटमेंट क्या है?",
              "tooltip": "",
              "value": "",
              "type": "textarea",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "area",
              "name": "area",
              "placeholder": "Enter Description",
              "label": "2.3 What is your mission statement? / आपका मिशन स्टेटमेंट क्या है?",
              "tooltip": "",
              "value": "",
              "type": "textarea",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "area",
              "name": "area",
              "placeholder": "Enter Description",
              "label": "2.4 Please describe how do you communicate your company’s vision to your employees and stakeholders / आपकी कंपनी ने संगठन के भीतर किस - किस माध्यम से अपने विज़न को दर्शाया है",
              "tooltip": "",
              "value": "",
              "type": "textarea",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "radio",
              "name": "radio",
              "label": "2.5 Do you set timelines for achieving the company's goals and objectives ? क्या आप कंपनी के लक्ष्यों और उद्देश्यों को प्राप्त करने के लिए समय-सीमा निर्धारित करते हैं?",
              "tooltip": "",
              "value": "",
              "type": "radio",
              "required": true,
              "data": [
                {
                  "label": "Yes",
                  "value": "1"
                },
                {
                  "label": "No",
                  "value": "2"
                }
              ],
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "radio",
              "name": "radio",
              "label": "2.6 Do employees understand the purpose and the objectives (measurable) of the organization ? क्या कर्मचारी संगठन के उद्देश्य और उद्देश्यों (मापनीय) को समझते हैं? )",
              "tooltip": "",
              "value": "",
              "type": "radio",
              "required": true,
              "data": [
                {
                  "label": "Yes",
                  "value": "1"
                },
                {
                  "label": "No",
                  "value": "2"
                }
              ],
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "radio",
              "name": "radio",
              "label": "2.7 Do you assign each objective to some responsible person and outline his/her role and responsibilities ? क्या आप प्रत्येक उद्देश्य को किसी जिम्मेदार व्यक्ति को सौंपते हैं और उसकी भूमिका और जिम्मेदारियों की रूपरेखा तैयार करते हैं?",
              "tooltip": "",
              "value": "",
              "type": "radio",
              "required": true,
              "data": [
                {
                  "label": "Yes",
                  "value": "1"
                },
                {
                  "label": "No",
                  "value": "2"
                }
              ],
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "area",
              "name": "area",
              "placeholder": "Enter Description",
              "label": "2.8 Why do you think your organization is the best and should be selected to win this award ? / आपको क्यों लगता है कि आपका संगठन सबसे अच्छा है और इस पुरस्कार को जीतने के लिए चुना जाना चाहिए?",
              "tooltip": "",
              "value": "",
              "type": "textarea",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "area",
              "name": "area",
              "placeholder": "Enter Description",
              "label": "2.9 Does the company have any management system certification (ISO 9001/CMMi/ etc.)? Please list them? / क्या कंपनी के पास कोई प्रबंधन प्रणाली का प्रमाणन (आईएसओ 9001, सीएमएमआई इत्यादि) है? कृपया उन्हें सूचीबद्ध करें।",
              "tooltip": "",
              "value": "",
              "type": "textarea",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "label",
              "name": "label",
              "label": "Diversity of Management Team / प्रबंधन टीम की विविधता",
              "tooltip": "",
              "type": "Label",
              "required": true,
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "radio",
              "name": "radio",
              "label": "2.10 Does Your Company favour diversity in the executive team / क्या आपकी कंपनी कार्यकारी दल में विविधता के पक्ष में है",
              "tooltip": "",
              "value": "",
              "type": "radio",
              "required": true,
              "data": [
                {
                  "label": "Yes ",
                  "value": "1"
                },
                {
                  "label": "No",
                  "value": "2"
                }
              ],
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "label",
              "name": "label",
              "label": "2.11 Please list top ten decision making persons in the company (CEO, CFO, VP , Directors/Partners/Owners—who are involved in the business activities etc.) / आपके व्यवसाय में सम्मिलित निर्देशक मंडल के सदस्य, सांझेदारों, मालिकाना अधिकार वाले अन्य सदस्य या भागीदारों, जो भी आपके व्यवसाय गतिविधियों में शामिल हो उनके बारे में संक्षेप में वर्णन करें।:",
              "tooltip": "",
              "type": "Label",
              "required": true,
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "table",
              "name": "table",
              "label": "Table",
              "tooltip": "",
              "value": "",
              "type": "table",
              "required": true,
              "rows": [
                [
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "dropdown",
                    "name": "dropdown",
                    "label": "",
                    "tooltip": "",
                    "value": "",
                    "placeholder": "Please select",
                    "type": "dropdown",
                    "required": true,
                    "data": [
                      {
                        "label": "Technical or Engineering, Business Management, CA",
                        "value": "1"
                      },
                      {
                        "label": "PhD, MS, MTech, ME",
                        "value": "2"
                      },
                      {
                        "label": "College or vocational training",
                        "value": "Another Label2"
                      },
                      {
                        "label": "Others",
                        "value": "Another Label3"
                      }
                    ],
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "dropdown",
                    "name": "dropdown",
                    "label": "",
                    "tooltip": "",
                    "value": "",
                    "placeholder": "Please select",
                    "type": "dropdown",
                    "required": true,
                    "data": [
                      {
                        "label": "Yes / हां",
                        "value": "1"
                      },
                      {
                        "label": "No / नहीं",
                        "value": "2"
                      }
                    ],
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "dropdown",
                    "name": "dropdown",
                    "label": "",
                    "tooltip": "",
                    "value": "",
                    "placeholder": "Please select",
                    "type": "dropdown",
                    "required": true,
                    "data": [
                      {
                        "label": "Female / महिला ",
                        "value": "1"
                      },
                      {
                        "label": "Male / पुरुष ",
                        "value": "2"
                      },
                      {
                        "label": "Other / अन्य",
                        "value": "Another Label2"
                      }
                    ],
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  }
                ],
                [
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "dropdown",
                    "name": "dropdown",
                    "label": "",
                    "tooltip": "",
                    "value": "",
                    "placeholder": "Please select",
                    "type": "dropdown",
                    "required": true,
                    "data": [
                      {
                        "label": "Technical or Engineering, Business Management, CA",
                        "value": "1"
                      },
                      {
                        "label": "PhD, MS, MTech, ME",
                        "value": "2"
                      },
                      {
                        "label": "College or vocational training",
                        "value": "Another Label2"
                      },
                      {
                        "label": "Others",
                        "value": "Another Label3"
                      }
                    ],
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "dropdown",
                    "name": "dropdown",
                    "label": "",
                    "tooltip": "",
                    "value": "",
                    "placeholder": "Please select",
                    "type": "dropdown",
                    "required": true,
                    "data": [
                      {
                        "label": "Yes / हां",
                        "value": "1"
                      },
                      {
                        "label": "No / नहीं",
                        "value": "2"
                      }
                    ],
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "dropdown",
                    "name": "dropdown",
                    "label": "",
                    "tooltip": "",
                    "value": "",
                    "placeholder": "Please select",
                    "type": "dropdown",
                    "required": true,
                    "data": [
                      {
                        "label": "Female / महिला ",
                        "value": "1"
                      },
                      {
                        "label": "Male / पुरुष ",
                        "value": "2"
                      },
                      {
                        "label": "Other / अन्य",
                        "value": "Another Label2"
                      }
                    ],
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  }
                ],
                [
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "dropdown",
                    "name": "dropdown",
                    "label": "",
                    "tooltip": "",
                    "value": "",
                    "placeholder": "Please select",
                    "type": "dropdown",
                    "required": true,
                    "data": [
                      {
                        "label": "Technical or Engineering, Business Management, CA",
                        "value": "1"
                      },
                      {
                        "label": "PhD, MS, MTech, ME",
                        "value": "2"
                      },
                      {
                        "label": "College or vocational training",
                        "value": "Another Label2"
                      },
                      {
                        "label": "Others",
                        "value": "Another Label3"
                      }
                    ],
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "dropdown",
                    "name": "dropdown",
                    "label": "",
                    "tooltip": "",
                    "value": "",
                    "placeholder": "Please select",
                    "type": "dropdown",
                    "required": true,
                    "data": [
                      {
                        "label": "Yes / हां",
                        "value": "1"
                      },
                      {
                        "label": "No / नहीं",
                        "value": "2"
                      }
                    ],
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "dropdown",
                    "name": "dropdown",
                    "label": "",
                    "tooltip": "",
                    "value": "",
                    "placeholder": "Please select",
                    "type": "dropdown",
                    "required": true,
                    "data": [
                      {
                        "label": "Female / महिला ",
                        "value": "1"
                      },
                      {
                        "label": "Male / पुरुष ",
                        "value": "2"
                      },
                      {
                        "label": "Other / अन्य",
                        "value": "Another Label2"
                      }
                    ],
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  }
                ],
                [
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "dropdown",
                    "name": "dropdown",
                    "label": "",
                    "tooltip": "",
                    "value": "",
                    "placeholder": "Please select",
                    "type": "dropdown",
                    "required": true,
                    "data": [
                      {
                        "label": "Technical or Engineering, Business Management, CA",
                        "value": "1"
                      },
                      {
                        "label": "PhD, MS, MTech, ME",
                        "value": "2"
                      },
                      {
                        "label": "College or vocational training",
                        "value": "Another Label2"
                      },
                      {
                        "label": "Others",
                        "value": "Another Label3"
                      }
                    ],
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "dropdown",
                    "name": "dropdown",
                    "label": "",
                    "tooltip": "",
                    "value": "",
                    "placeholder": "Please select",
                    "type": "dropdown",
                    "required": true,
                    "data": [
                      {
                        "label": "Yes / हां",
                        "value": "1"
                      },
                      {
                        "label": "No / नहीं",
                        "value": "2"
                      }
                    ],
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "dropdown",
                    "name": "dropdown",
                    "label": "",
                    "tooltip": "",
                    "value": "",
                    "placeholder": "Please select",
                    "type": "dropdown",
                    "required": true,
                    "data": [
                      {
                        "label": "Female / महिला ",
                        "value": "1"
                      },
                      {
                        "label": "Male / पुरुष ",
                        "value": "2"
                      },
                      {
                        "label": "Other / अन्य",
                        "value": "Another Label2"
                      }
                    ],
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  }
                ],
                [
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "dropdown",
                    "name": "dropdown",
                    "label": "",
                    "tooltip": "",
                    "value": "",
                    "placeholder": "Please select",
                    "type": "dropdown",
                    "required": true,
                    "data": [
                      {
                        "label": "Technical or Engineering, Business Management, CA",
                        "value": "1"
                      },
                      {
                        "label": "PhD, MS, MTech, ME",
                        "value": "2"
                      },
                      {
                        "label": "College or vocational training",
                        "value": "Another Label2"
                      },
                      {
                        "label": "Others",
                        "value": "Another Label3"
                      }
                    ],
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "dropdown",
                    "name": "dropdown",
                    "label": "",
                    "tooltip": "",
                    "value": "",
                    "placeholder": "Please select",
                    "type": "dropdown",
                    "required": true,
                    "data": [
                      {
                        "label": "Yes / हां",
                        "value": "1"
                      },
                      {
                        "label": "No / नहीं",
                        "value": "2"
                      }
                    ],
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "dropdown",
                    "name": "dropdown",
                    "label": "",
                    "tooltip": "",
                    "value": "",
                    "placeholder": "Please select",
                    "type": "dropdown",
                    "required": true,
                    "data": [
                      {
                        "label": "Female / महिला ",
                        "value": "1"
                      },
                      {
                        "label": "Male / पुरुष ",
                        "value": "2"
                      },
                      {
                        "label": "Other / अन्य",
                        "value": "Another Label2"
                      }
                    ],
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  }
                ],
                [
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "dropdown",
                    "name": "dropdown",
                    "label": "",
                    "tooltip": "",
                    "value": "",
                    "placeholder": "Please select",
                    "type": "dropdown",
                    "required": true,
                    "data": [
                      {
                        "label": "Technical or Engineering, Business Management, CA",
                        "value": "1"
                      },
                      {
                        "label": "PhD, MS, MTech, ME",
                        "value": "2"
                      },
                      {
                        "label": "College or vocational training",
                        "value": "Another Label2"
                      },
                      {
                        "label": "Others",
                        "value": "Another Label3"
                      }
                    ],
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "dropdown",
                    "name": "dropdown",
                    "label": "",
                    "tooltip": "",
                    "value": "",
                    "placeholder": "Please select",
                    "type": "dropdown",
                    "required": true,
                    "data": [
                      {
                        "label": "Yes / हां",
                        "value": "1"
                      },
                      {
                        "label": "No / नहीं",
                        "value": "2"
                      }
                    ],
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "dropdown",
                    "name": "dropdown",
                    "label": "",
                    "tooltip": "",
                    "value": "",
                    "placeholder": "Please select",
                    "type": "dropdown",
                    "required": true,
                    "data": [
                      {
                        "label": "Female / महिला ",
                        "value": "1"
                      },
                      {
                        "label": "Male / पुरुष ",
                        "value": "2"
                      },
                      {
                        "label": "Other / अन्य",
                        "value": "Another Label2"
                      }
                    ],
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  }
                ],
                [
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "dropdown",
                    "name": "dropdown",
                    "label": "",
                    "tooltip": "",
                    "value": "",
                    "placeholder": "Please select",
                    "type": "dropdown",
                    "required": true,
                    "data": [
                      {
                        "label": "Technical or Engineering, Business Management, CA",
                        "value": "1"
                      },
                      {
                        "label": "PhD, MS, MTech, ME",
                        "value": "2"
                      },
                      {
                        "label": "College or vocational training",
                        "value": "Another Label2"
                      },
                      {
                        "label": "Others",
                        "value": "Another Label3"
                      }
                    ],
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "dropdown",
                    "name": "dropdown",
                    "label": "",
                    "tooltip": "",
                    "value": "",
                    "placeholder": "Please select",
                    "type": "dropdown",
                    "required": true,
                    "data": [
                      {
                        "label": "Yes / हां",
                        "value": "1"
                      },
                      {
                        "label": "No / नहीं",
                        "value": "2"
                      }
                    ],
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "dropdown",
                    "name": "dropdown",
                    "label": "",
                    "tooltip": "",
                    "value": "",
                    "placeholder": "Please select",
                    "type": "dropdown",
                    "required": true,
                    "data": [
                      {
                        "label": "Female / महिला ",
                        "value": "1"
                      },
                      {
                        "label": "Male / पुरुष ",
                        "value": "2"
                      },
                      {
                        "label": "Other / अन्य",
                        "value": "Another Label2"
                      }
                    ],
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  }
                ],
                [
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "dropdown",
                    "name": "dropdown",
                    "label": "",
                    "tooltip": "",
                    "value": "",
                    "placeholder": "Please select",
                    "type": "dropdown",
                    "required": true,
                    "data": [
                      {
                        "label": "Technical or Engineering, Business Management, CA",
                        "value": "1"
                      },
                      {
                        "label": "PhD, MS, MTech, ME",
                        "value": "2"
                      },
                      {
                        "label": "College or vocational training",
                        "value": "Another Label2"
                      },
                      {
                        "label": "Others",
                        "value": "Another Label3"
                      }
                    ],
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "dropdown",
                    "name": "dropdown",
                    "label": "",
                    "tooltip": "",
                    "value": "",
                    "placeholder": "Please select",
                    "type": "dropdown",
                    "required": true,
                    "data": [
                      {
                        "label": "Yes / हां",
                        "value": "1"
                      },
                      {
                        "label": "No / नहीं",
                        "value": "2"
                      }
                    ],
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "dropdown",
                    "name": "dropdown",
                    "label": "",
                    "tooltip": "",
                    "value": "",
                    "placeholder": "Please select",
                    "type": "dropdown",
                    "required": true,
                    "data": [
                      {
                        "label": "Female / महिला ",
                        "value": "1"
                      },
                      {
                        "label": "Male / पुरुष ",
                        "value": "2"
                      },
                      {
                        "label": "Other / अन्य",
                        "value": "Another Label2"
                      }
                    ],
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  }
                ],
                [
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "dropdown",
                    "name": "dropdown",
                    "label": "",
                    "tooltip": "",
                    "value": "",
                    "placeholder": "Please select",
                    "type": "dropdown",
                    "required": true,
                    "data": [
                      {
                        "label": "Technical or Engineering, Business Management, CA",
                        "value": "1"
                      },
                      {
                        "label": "PhD, MS, MTech, ME",
                        "value": "2"
                      },
                      {
                        "label": "College or vocational training",
                        "value": "Another Label2"
                      },
                      {
                        "label": "Others",
                        "value": "Another Label3"
                      }
                    ],
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "dropdown",
                    "name": "dropdown",
                    "label": "",
                    "tooltip": "",
                    "value": "",
                    "placeholder": "Please select",
                    "type": "dropdown",
                    "required": true,
                    "data": [
                      {
                        "label": "Yes / हां",
                        "value": "1"
                      },
                      {
                        "label": "No / नहीं",
                        "value": "2"
                      }
                    ],
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "dropdown",
                    "name": "dropdown",
                    "label": "",
                    "tooltip": "",
                    "value": "",
                    "placeholder": "Please select",
                    "type": "dropdown",
                    "required": true,
                    "data": [
                      {
                        "label": "Female / महिला ",
                        "value": "1"
                      },
                      {
                        "label": "Male / पुरुष ",
                        "value": "2"
                      },
                      {
                        "label": "Other / अन्य",
                        "value": "Another Label2"
                      }
                    ],
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  }
                ],
                [
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "dropdown",
                    "name": "dropdown",
                    "label": "",
                    "tooltip": "",
                    "value": "",
                    "placeholder": "Please select",
                    "type": "dropdown",
                    "required": true,
                    "data": [
                      {
                        "label": "Technical or Engineering, Business Management, CA",
                        "value": "1"
                      },
                      {
                        "label": "PhD, MS, MTech, ME",
                        "value": "2"
                      },
                      {
                        "label": "College or vocational training",
                        "value": "Another Label2"
                      },
                      {
                        "label": "Others",
                        "value": "Another Label3"
                      }
                    ],
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "dropdown",
                    "name": "dropdown",
                    "label": "",
                    "tooltip": "",
                    "value": "",
                    "placeholder": "Please select",
                    "type": "dropdown",
                    "required": true,
                    "data": [
                      {
                        "label": "Yes / हां",
                        "value": "1"
                      },
                      {
                        "label": "No / नहीं",
                        "value": "2"
                      }
                    ],
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "dropdown",
                    "name": "dropdown",
                    "label": "",
                    "tooltip": "",
                    "value": "",
                    "placeholder": "Please select",
                    "type": "dropdown",
                    "required": true,
                    "data": [
                      {
                        "label": "Female / महिला ",
                        "value": "1"
                      },
                      {
                        "label": "Male / पुरुष ",
                        "value": "2"
                      },
                      {
                        "label": "Other / अन्य",
                        "value": "Another Label2"
                      }
                    ],
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  }
                ]
              ],
              "columns": [
                {
                  "id": "label",
                  "name": "Column 1",
                  "label": "Name / नाम",
                  "type": "label"
                },
                {
                  "id": "label",
                  "label": "Designation / पद",
                  "name": "label",
                  "type": "label"
                },
                {
                  "id": "label",
                  "label": "Role / भूमिका",
                  "name": "label",
                  "type": "label"
                },
                {
                  "id": "label",
                  "label": "Qualifications / योग्यता",
                  "name": "label",
                  "type": "label"
                },
                {
                  "id": "label",
                  "label": "Relative of promoted ? / प्रमोटर के रिश्तेदार?",
                  "name": "label",
                  "type": "label"
                },
                {
                  "id": "label",
                  "label": "Gender / लिंग",
                  "name": "label",
                  "type": "label"
                }
              ],
              "rowHead": [
                {
                  "name": "row 1"
                }
              ],
              "validators": {},
              "layout": "col-lg-12"
            }
          ]
        },
        {
          "title": "Bussiness operation and performance ",
          "description": "व्यवसाय संचालन और प्रदर्शन",
          "state": "normal",
          "canEnter": true,
          "canExit": false,
          "controls": [
            {
              "id": "text",
              "name": "text",
              "placeholder": "Enter Text Here",
              "label": "3.1 Please Provide overview about your company's bussiness / कृपया अपनी कंपनी के व्यवसाय के बारे में अवलोकन प्रदान करें",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "area",
              "name": "area",
              "placeholder": "Enter Description",
              "label": "3.2 List of Major Products / प्रमुख उत्पादों की सूची",
              "tooltip": "",
              "value": "",
              "type": "textarea",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "label",
              "name": "label",
              "label": "3.3 Financial Performance at a glance / एक नज़र में वित्तीय प्रदर्शन : (audited financial statements for FY 2017-18 FY 2018-19 FY 2019-20 must be submitted with the form) / (वित्त वर्ष 2017-18 के लिए लेखा परीक्षित वित्तीय विवरण वित्त वर्ष 2018-19 वित्त वर्ष 2019-20 को फॉर्म के साथ जमा किया जाना चाहिए)",
              "tooltip": "",
              "type": "Label",
              "required": true,
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "table",
              "name": "table",
              "label": "",
              "tooltip": "",
              "value": "",
              "type": "table",
              "required": true,
              "rows": [
                [
                  {
                    "id": "label",
                    "name": "label",
                    "label": "Total turnover /sales / कुल टर्नओवर / विक्रय",
                    "type": "label",
                    "required": true,
                    "validators": {},
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  }
                ],
                [
                  {
                    "id": "label",
                    "name": "label",
                    "label": "Net profit (profit after tax) / शुद्ध लाभ (कर के बाद लाभ)",
                    "type": "label",
                    "required": true,
                    "validators": {},
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  }
                ],
                [
                  {
                    "id": "label",
                    "name": "label",
                    "label": "Profit before interest, taxes, and amortisation (EBITA) / ब्याज, करों और परिशोधन से पहले लाभ",
                    "type": "label",
                    "required": true,
                    "validators": {},
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  }
                ],
                [
                  {
                    "id": "label",
                    "name": "label",
                    "label": "Total exports sales / कुल निर्यात बिक्री",
                    "type": "label",
                    "required": true,
                    "validators": {},
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  }
                ],
                [
                  {
                    "id": "label",
                    "name": "label",
                    "label": "Equity (share capital)/Owner’s Capital / इक्पिटी (शेयर पूंजी) / मलिकाना पूंजी",
                    "type": "label",
                    "required": true,
                    "validators": {},
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  }
                ],
                [
                  {
                    "id": "label",
                    "name": "label",
                    "label": "Reserves and surplus / रिजर्व एवं अधिशेष",
                    "type": "label",
                    "required": true,
                    "validators": {},
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  }
                ],
                [
                  {
                    "id": "label",
                    "name": "label",
                    "label": "Total borrowings (long term + short term) / कुल उधार (दीर्घ अवधि $ लघु अवधि)",
                    "type": "label",
                    "required": true,
                    "validators": {},
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  }
                ],
                [
                  {
                    "id": "label",
                    "name": "label",
                    "label": "Fixed assets / अचल सम्पत्तियां",
                    "type": "label",
                    "required": true,
                    "validators": {},
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  }
                ],
                [
                  {
                    "id": "label",
                    "name": "label",
                    "label": "Total expenditure incurred on CSR activities / सामाजिक दायित्व की गतिविधियों पर कुल व्यय",
                    "type": "label",
                    "required": true,
                    "validators": {},
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  }
                ]
              ],
              "columns": [
                {
                  "id": "label",
                  "name": "Column 1",
                  "label": " Particulars / विवरण",
                  "type": "label"
                },
                {
                  "id": "label",
                  "label": "FY 2020-21 / वित्तीय वर्ष 2020-21 Rupees",
                  "name": "label",
                  "type": "label"
                },
                {
                  "id": "label",
                  "label": "FY 2019-20 / वित्तीय वर्ष 2019-20 Rupees",
                  "name": "label",
                  "type": "label"
                },
                {
                  "id": "label",
                  "label": "FY 2018-19 / वित्तीय वर्ष 2018-19 Rupees",
                  "name": "label",
                  "type": "label"
                }
              ],
              "rowHead": [
                {
                  "name": "row 1"
                }
              ],
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "label",
              "name": "label",
              "label": "Digital presence / डिजीटल उपस्थिति:",
              "tooltip": "",
              "type": "Label",
              "required": true,
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "radio",
              "name": "radio",
              "label": "3.4 Does your company manage all aspects of digital presence (website / blog / social / SMS / online content / email newsletters / etc) as an integrated strategy? / क्या आपकी कम्पनी डिजीटल उपस्थिति के सभी पहलुओं का प्रबन्धन करती है ?",
              "tooltip": "",
              "value": "",
              "type": "radio",
              "required": true,
              "data": [
                {
                  "label": "Yes",
                  "value": "1"
                },
                {
                  "label": "No",
                  "value": "2"
                }
              ],
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "area",
              "name": "area",
              "placeholder": "Enter Description",
              "label": "3.5 What is the goal of your digital strategy? / आपकी डिजीटल रणनीति का लक्ष्य क्या है ?",
              "tooltip": "",
              "value": "",
              "type": "textarea",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "radio",
              "name": "radio",
              "label": "3.6 Does your company have a website? / क्या आपकी कम्पनी की वेबसाईट है ?",
              "tooltip": "",
              "value": "",
              "type": "radio",
              "required": true,
              "data": [
                {
                  "label": "Yes",
                  "value": "1"
                },
                {
                  "label": "No",
                  "value": "2"
                }
              ],
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "Enter Text Here",
              "label": "3.7 If yes:(provide URL) (http://example.com) / यदि है तो कृपया विवरण देवें",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "label",
              "name": "label",
              "label": "3.8 URL to the following pages, if any? / निम्नलिखित पृष्ठों का URL, यदि कोई हो ?",
              "tooltip": "",
              "type": "Label",
              "required": true,
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "Enter Text Here",
              "label": "Instragram",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "Enter Text Here",
              "label": "Facebook",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "Enter Text Here",
              "label": "LinkedIn",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "Enter Text Here",
              "label": "Twitter",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "label",
              "name": "label",
              "label": "In case of any clarifications call, +91 6377205389",
              "tooltip": "",
              "type": "Label",
              "required": true,
              "validators": {},
              "layout": "col-lg-12"
            }
          ]
        },
        {
          "title": " Innovation measures ",
          "description": "/ नवाचार सम्बन्धी जानकारी:",
          "state": "normal",
          "canEnter": true,
          "canExit": false,
          "controls": [
            {
              "id": "label",
              "name": "label",
              "label": "Process and effort / प्रक्रिया और प्रयास:",
              "tooltip": "",
              "type": "Label",
              "required": true,
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "checkbox",
              "name": "checkbox",
              "label": "4.1 Do you have any formal processes that encourage innovation or new product development (select all options that apply to you) / क्या आपके पास कोई औपचारिक प्रक्रिया है जो नवाचार या नए उत्पादों के विकास को प्रोत्साहित करती है (उन सभी विकल्पों का चयन करें जो आपके लिए लागू होते हैं)",
              "tooltip": "",
              "value": [],
              "type": "checkbox",
              "required": true,
              "data": [
                {
                  "label": "There is a process for gathering ideas from employees / कर्मचारियों से विचार एकत्र करने के लिए एक प्रक्रिया है।",
                  "value": "Test1"
                },
                {
                  "label": "There is a formal meeting of executives to discuss innovative ideas / नवीन विचारों पर चर्चा करने के लिए अधिकारियों की एक औपचारिक बैठक होती है।",
                  "value": "Test2"
                },
                {
                  "label": "There is a budget allocation process for innovation initiatives / नवाचार की पहल के लिए एक बजट आवंटन प्रक्रिया है।",
                  "value": "Another Label2"
                },
                {
                  "label": "People have full time responsibility for innovation and development initiatives / लोगों के पास नवाचार और विकास की पहल के लिए पूर्णकालिक जिम्मेदारी है।",
                  "value": "Another Label3"
                }
              ],
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "area",
              "name": "area",
              "placeholder": "Enter Description",
              "label": "4.2 Provide details of any periodic,systematic and documented review of customer perception through survey, feedback, market share analysis, customer complaints analysis, etc / आपके व्यवसाय में मॉर्केटिंग और सम्बंधित क्षेत्रों के बारे में नियमित तरीके से रिसर्च करना, जानकारी इकठ्ठा करना, प्रतिस्पर्धा के बारे में समझना, कस्टमर फीडबैक लेना, कस्टमर कंप्लेंट को अटेंड करना - इन सब कार्यों की प्रक्रिया क्या है?",
              "tooltip": "",
              "value": "",
              "type": "textarea",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "radio",
              "name": "radio",
              "label": "4.3 Were any viable product, service or best practice developed out of internal innovation in the last 12 months / क्या पिछले 12 महीनों में आंतरिक नवाचार से कोई व्यवहारिक / उपयोगी उत्पाद, सेवा या बेस्ट प्रैक्टिस का विकास किया गया?",
              "tooltip": "",
              "value": "",
              "type": "radio",
              "required": true,
              "data": [
                {
                  "label": "Yes",
                  "value": "1"
                },
                {
                  "label": "No",
                  "value": "2"
                }
              ],
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "area",
              "name": "area",
              "placeholder": "Enter Description",
              "label": "4.4 If yes, please list them and write a short note about them / यदि हां तो कृपया सूचीबद्ध करें एवं उनके सम्बन्ध में संक्षिप्त टिप्पणी लिखें:",
              "tooltip": "",
              "value": "",
              "type": "textarea",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "radio",
              "name": "radio",
              "label": "4.5 Has your company purchased and deployed technology to aid or encourage innovation / क्या आपकी कंपनी ने नवाचार को सहायता या प्रोत्साहित करने के लिए प्रौद्योगिकी खरीदी और लागू की है ?",
              "tooltip": "",
              "value": "",
              "type": "radio",
              "required": true,
              "data": [
                {
                  "label": "Yes",
                  "value": "1"
                },
                {
                  "label": "No",
                  "value": "2"
                }
              ],
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "area",
              "name": "area",
              "placeholder": "Enter Description",
              "label": "4.6 Please provide details of the new products developed, quality improvement exercise undertaken, new technology adopted and technology agreements made. In short, please tell us of your efforts to innovate, improve quality and design of your products / कृपया नए उत्पादों के विकास, गुणवत्ता में सुधार, नई तकनीक को अपनाने और प्रौद्योगिकी के विकास हेतु किये गये प्रयासों का विवरण प्रदान करें। संक्षेप में, कृपया हमें अपने उत्पादों के नवाचार, गुणवत्ता और डिजाइन में सुधार करने के अपने प्रयासों के बारे में बताएं:",
              "tooltip": "",
              "value": "",
              "type": "textarea",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "label",
              "name": "label",
              "label": "4.7 List top three R&D or innovation initiatives for last 12 months or last FY / पिछले 12 महीनों अथवा पिछले वित्तीय वर्ष के दौरान शीर्ष तीन अनुसंधान और विकास अथवा नवाचार की पहल को सूचीबद्ध करें",
              "tooltip": "",
              "type": "Label",
              "required": true,
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "table",
              "name": "table",
              "label": "",
              "tooltip": "",
              "value": "",
              "type": "table",
              "required": true,
              "rows": [
                [
                  {
                    "id": "area",
                    "name": "area",
                    "placeholder": "Enter Description",
                    "label": "",
                    "value": "",
                    "type": "textarea",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "dropdown",
                    "name": "dropdown",
                    "label": "",
                    "tooltip": "",
                    "value": "",
                    "placeholder": "Please select",
                    "type": "dropdown",
                    "required": true,
                    "data": [
                      {
                        "label": "Product",
                        "value": "1"
                      },
                      {
                        "label": "Offerings",
                        "value": "2"
                      },
                      {
                        "label": "Process",
                        "value": "Another Label2"
                      },
                      {
                        "label": "Operations",
                        "value": "Another Label3"
                      },
                      {
                        "label": "Marketing",
                        "value": "Another Label4"
                      },
                      {
                        "label": "Reach",
                        "value": "Another Label5"
                      }
                    ],
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "radio",
                    "name": "radio",
                    "label": "",
                    "value": "",
                    "type": "radio",
                    "required": true,
                    "data": [
                      {
                        "label": "Low",
                        "value": "1"
                      },
                      {
                        "label": "Medium",
                        "value": "2"
                      },
                      {
                        "label": "High",
                        "value": "Another Label2"
                      }
                    ],
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "radio",
                    "name": "radio",
                    "label": "",
                    "value": "",
                    "type": "radio",
                    "required": true,
                    "data": [
                      {
                        "label": "Low",
                        "value": "1"
                      },
                      {
                        "label": "Medium",
                        "value": "2"
                      },
                      {
                        "label": "High",
                        "value": "Another Label2"
                      }
                    ],
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "radio",
                    "name": "radio",
                    "label": "",
                    "value": "",
                    "type": "radio",
                    "required": true,
                    "data": [
                      {
                        "label": "Low",
                        "value": "1"
                      },
                      {
                        "label": "Medium",
                        "value": "2"
                      },
                      {
                        "label": "High",
                        "value": "Another Label2"
                      }
                    ],
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  }
                ],
                [
                  {
                    "id": "area",
                    "name": "area",
                    "placeholder": "Enter Description",
                    "label": "",
                    "value": "",
                    "type": "textarea",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "dropdown",
                    "name": "dropdown",
                    "label": "",
                    "tooltip": "",
                    "value": "",
                    "placeholder": "Please select",
                    "type": "dropdown",
                    "required": true,
                    "data": [
                      {
                        "label": "Product",
                        "value": "1"
                      },
                      {
                        "label": "Offerings",
                        "value": "2"
                      },
                      {
                        "label": "Process",
                        "value": "Another Label2"
                      },
                      {
                        "label": "Operations",
                        "value": "Another Label3"
                      },
                      {
                        "label": "Marketing",
                        "value": "Another Label4"
                      },
                      {
                        "label": "Reach",
                        "value": "Another Label5"
                      }
                    ],
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "radio",
                    "name": "radio",
                    "label": "",
                    "value": "",
                    "type": "radio",
                    "required": true,
                    "data": [
                      {
                        "label": "Low",
                        "value": "1"
                      },
                      {
                        "label": "Medium",
                        "value": "2"
                      },
                      {
                        "label": "High",
                        "value": "Another Label2"
                      }
                    ],
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "radio",
                    "name": "radio",
                    "label": "",
                    "value": "",
                    "type": "radio",
                    "required": true,
                    "data": [
                      {
                        "label": "Low",
                        "value": "1"
                      },
                      {
                        "label": "Medium",
                        "value": "2"
                      },
                      {
                        "label": "High",
                        "value": "Another Label2"
                      }
                    ],
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "radio",
                    "name": "radio",
                    "label": "",
                    "value": "",
                    "type": "radio",
                    "required": true,
                    "data": [
                      {
                        "label": "Low",
                        "value": "1"
                      },
                      {
                        "label": "Medium",
                        "value": "2"
                      },
                      {
                        "label": "High",
                        "value": "Another Label2"
                      }
                    ],
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  }
                ],
                [
                  {
                    "id": "area",
                    "name": "area",
                    "placeholder": "Enter Description",
                    "label": "",
                    "value": "",
                    "type": "textarea",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "dropdown",
                    "name": "dropdown",
                    "label": "",
                    "tooltip": "",
                    "value": "",
                    "placeholder": "Please select",
                    "type": "dropdown",
                    "required": true,
                    "data": [
                      {
                        "label": "Product",
                        "value": "1"
                      },
                      {
                        "label": "Offerings",
                        "value": "2"
                      },
                      {
                        "label": "Process",
                        "value": "Another Label2"
                      },
                      {
                        "label": "Operations",
                        "value": "Another Label3"
                      },
                      {
                        "label": "Marketing",
                        "value": "Another Label4"
                      },
                      {
                        "label": "Reach",
                        "value": "Another Label5"
                      }
                    ],
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "radio",
                    "name": "radio",
                    "label": "",
                    "value": "",
                    "type": "radio",
                    "required": true,
                    "data": [
                      {
                        "label": "Low",
                        "value": "1"
                      },
                      {
                        "label": "Medium",
                        "value": "2"
                      },
                      {
                        "label": "High",
                        "value": "Another Label2"
                      }
                    ],
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "radio",
                    "name": "radio",
                    "label": "",
                    "value": "",
                    "type": "radio",
                    "required": true,
                    "data": [
                      {
                        "label": "Low",
                        "value": "1"
                      },
                      {
                        "label": "Medium",
                        "value": "2"
                      },
                      {
                        "label": "High",
                        "value": "Another Label2"
                      }
                    ],
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "radio",
                    "name": "radio",
                    "label": "",
                    "value": "",
                    "type": "radio",
                    "required": true,
                    "data": [
                      {
                        "label": "Low",
                        "value": "1"
                      },
                      {
                        "label": "Medium",
                        "value": "2"
                      },
                      {
                        "label": "High",
                        "value": "Another Label2"
                      }
                    ],
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  }
                ]
              ],
              "columns": [
                {
                  "id": "label",
                  "name": "Column 1",
                  "label": " Initiative / पहल",
                  "type": "label"
                },
                {
                  "id": "label",
                  "label": "Innovation in / नवाचार",
                  "name": "label",
                  "type": "label"
                },
                {
                  "id": "label",
                  "label": "Impact on / प्रभाव Customers (proportion impacted) / ग्राहक पर प्रभाव (प्रभाव अनुपात में)",
                  "name": "label",
                  "type": "label"
                },
                {
                  "id": "label",
                  "label": "Impact on Employees (proportion impacted) / कर्मचारियों पर प्रभाव (प्रभाव अनुपात में)",
                  "name": "label",
                  "type": "label"
                },
                {
                  "id": "label",
                  "label": "Impact on Revenue (overall growth) / राजस्व (समग्र विकास)",
                  "name": "label",
                  "type": "label"
                },
                {
                  "id": "label",
                  "label": "Approx. expenditure in the last year () / विगत वर्ष में अनुमानित व्यय",
                  "name": "label",
                  "type": "label"
                }
              ],
              "rowHead": [
                {
                  "name": "row 1"
                }
              ],
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "label",
              "name": "label",
              "label": " 4.8 Patents and trademarks applied and received / पेटेन्ट्स एवं ट्रेडमार्क जिनके लिये आवेदन किया गया हो अथवा प्राप्त हो चुके हों: Please provide details of the patents and trade-marks received or applied for. / कृपया प्राप्त अथवा आवेदन किए गए पेटेंट एवं ट्रेडमार्क का विवरण प्रदान करें:",
              "tooltip": "",
              "type": "Label",
              "required": true,
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "table",
              "name": "table",
              "label": "",
              "tooltip": "",
              "value": "",
              "type": "table",
              "required": true,
              "rows": [
                [
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "dropdown",
                    "name": "dropdown",
                    "label": "",
                    "tooltip": "",
                    "value": "",
                    "placeholder": "Please select",
                    "type": "dropdown",
                    "required": true,
                    "data": [
                      {
                        "label": "2022",
                        "value": "1"
                      },
                      {
                        "label": "2021",
                        "value": "2"
                      },
                      {
                        "label": "2020",
                        "value": "Another Label2"
                      },
                      {
                        "label": "2019",
                        "value": "Another Label3"
                      },
                      {
                        "label": "2018",
                        "value": "Another Label4"
                      },
                      {
                        "label": "2017",
                        "value": "Another Label5"
                      },
                      {
                        "label": "2016",
                        "value": "Another Label6"
                      },
                      {
                        "label": "2015",
                        "value": "Another Label7"
                      },
                      {
                        "label": "2014",
                        "value": "Another Label8"
                      }
                    ],
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  }
                ],
                [
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "Text Box",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "dropdown",
                    "name": "dropdown",
                    "label": "",
                    "tooltip": "",
                    "value": "",
                    "placeholder": "Please select",
                    "type": "dropdown",
                    "required": true,
                    "data": [
                      {
                        "label": "2022",
                        "value": "1"
                      },
                      {
                        "label": "2021",
                        "value": "2"
                      },
                      {
                        "label": "2020",
                        "value": "Another Label2"
                      },
                      {
                        "label": "2019",
                        "value": "Another Label3"
                      },
                      {
                        "label": "2018",
                        "value": "Another Label4"
                      },
                      {
                        "label": "2017",
                        "value": "Another Label5"
                      },
                      {
                        "label": "2016",
                        "value": "Another Label6"
                      },
                      {
                        "label": "2015",
                        "value": "Another Label7"
                      }
                    ],
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  }
                ],
                [
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "Text Box",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "dropdown",
                    "name": "dropdown",
                    "label": "",
                    "tooltip": "",
                    "value": "",
                    "placeholder": "Please select",
                    "type": "dropdown",
                    "required": true,
                    "data": [
                      {
                        "label": "2022",
                        "value": "1"
                      },
                      {
                        "label": "2021",
                        "value": "2"
                      },
                      {
                        "label": "2020",
                        "value": "Another Label2"
                      },
                      {
                        "label": "2019",
                        "value": "Another Label3"
                      },
                      {
                        "label": "2018",
                        "value": "Another Label4"
                      },
                      {
                        "label": "2017",
                        "value": "Another Label5"
                      },
                      {
                        "label": "2016",
                        "value": "Another Label6"
                      },
                      {
                        "label": "2015",
                        "value": "Another Label7"
                      }
                    ],
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  }
                ]
              ],
              "columns": [
                {
                  "id": "label",
                  "name": "Column 1",
                  "label": "Patent or trademark / पेटेन्ट अथवा ट्रेडमार्क",
                  "type": "label"
                },
                {
                  "id": "label",
                  "label": "\tStatus received or applied / वस्तुःस्थिति (प्राप्त हो चुका अथवा आवेदन किया गया)",
                  "name": "label",
                  "type": "label"
                },
                {
                  "id": "label",
                  "label": "Year in which received or applied / वर्ष जब प्राप्त हुआ अथवा आवेदन किया गया",
                  "name": "label",
                  "type": "label"
                }
              ],
              "rowHead": [
                {
                  "name": "row 1"
                }
              ],
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "label",
              "name": "label",
              "label": "In case of any clarifications call, +91 6377205389",
              "tooltip": "",
              "type": "Label",
              "required": true,
              "validators": {},
              "layout": "col-lg-12"
            }
          ]
        },
        {
          "title": "Employee base and People Measures ",
          "description": "/ मानव संसाधन",
          "state": "normal",
          "canEnter": true,
          "canExit": false,
          "controls": [
            {
              "id": "label",
              "name": "label",
              "label": "5.1 Full time employee / पूर्णकालिक कर्मचारी (Including temporary and contractual) / (अस्थाई एवं अनुबन्धित सहित)",
              "tooltip": "",
              "type": "Label",
              "required": true,
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "table",
              "name": "table",
              "label": "",
              "tooltip": "",
              "value": "",
              "type": "table",
              "required": true,
              "rows": [
                [
                  {
                    "id": "label",
                    "name": "label",
                    "label": "Male / पुरुष",
                    "type": "label",
                    "required": true,
                    "validators": {},
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  }
                ],
                [
                  {
                    "id": "label",
                    "name": "label",
                    "label": "Female / महिला",
                    "type": "label",
                    "required": true,
                    "validators": {},
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "Text Box",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "Text Box",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "Text Box",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  }
                ],
                [
                  {
                    "id": "label",
                    "name": "label",
                    "label": "Other / अन्य",
                    "type": "label",
                    "required": true,
                    "validators": {},
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "Text Box",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "Text Box",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "Text Box",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  }
                ],
                [
                  {
                    "id": "label",
                    "name": "label",
                    "label": "Total working persons including management, employees and contract staff/ labour. / आपके व्यवसाय में कार्यरत प्रबंधन और अनुबंध कर्मचारियों सहित सभी लोगो की संख्या।",
                    "type": "label",
                    "required": true,
                    "validators": {},
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "Text Box",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "Text Box",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "Text Box",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  }
                ]
              ],
              "columns": [
                {
                  "id": "label",
                  "name": "Column 1",
                  "label": "Region / क्षेत्र",
                  "type": "label"
                },
                {
                  "id": "label",
                  "label": "as on 31.03.2021 / दिनांक 31.3.2021",
                  "name": "label",
                  "type": "label"
                },
                {
                  "id": "label",
                  "label": "as on 31.03.2020 / दिनांक 31.3.2020",
                  "name": "label",
                  "type": "label"
                },
                {
                  "id": "label",
                  "label": "as on 31.03.2019 / दिनांक 31.3.2019",
                  "name": "label",
                  "type": "label"
                }
              ],
              "rowHead": [
                {
                  "name": "row 1"
                }
              ],
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "label",
              "name": "label",
              "label": "5.2 Total people costs (include management, staff and workman wages, salaries, benefits, welfare, perks etc.), / कुल लोगों की लागत (प्रबंधन, कर्मचारियों और श्रम मजदूरी, वेतन, लाभ, कल्याण, भत्तों आदि शामिल हैं)",
              "tooltip": "",
              "type": "Label",
              "required": true,
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "table",
              "name": "table",
              "label": "",
              "tooltip": "",
              "value": "",
              "type": "table",
              "required": true,
              "rows": [
                [
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  }
                ]
              ],
              "columns": [
                {
                  "id": "label",
                  "name": "Column 1",
                  "label": "",
                  "type": "label"
                },
                {
                  "id": "label",
                  "label": "",
                  "name": "label",
                  "type": "label"
                },
                {
                  "id": "label",
                  "label": "",
                  "name": "label",
                  "type": "label"
                }
              ],
              "rowHead": [
                {
                  "name": "row 1"
                }
              ],
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "Enter Text Here",
              "label": "5.3 How have the Covid-19 lockdowns affected your workforce strength? / कोविड -19 लॉकडाउन ने आपके कार्यबल की ताकत को कैसे प्रभावित किया है?",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "area",
              "name": "area",
              "placeholder": "Enter Description",
              "label": "5.4 Mention the top 3 measures and initiatives for Covid workforce relief benefits and employee wellbeing taken during the Covid-19 lockdown period. / कोविड-19 लॉकडाउन अवधि के दौरान कोविड कार्यबल राहत लाभों और कर्मचारियों की भलाई के लिए किए गए शीर्ष 3 उपायों और पहलों का उल्लेख करें।।",
              "tooltip": "",
              "value": "",
              "type": "textarea",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "Enter Text Here",
              "label": "5.5 Describe specific initiatives and facilities for women in the work force to augment their participation, comfort, safety, welfare and individual development and their responsibilities within the organisation. / आपकी कंपनी में कार्यरत महिलाओं के प्रोहत्साहन सम्बंधित नीतिगत पहल, उनकी सुरक्षा एवं सुश्रुषा के कार्यों का वर्णन करें।",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "Enter Text Here",
              "label": "5.6 How many people left your organisation in the last 12 months? / विगत 12 माह के दौरान कुल कितने कर्मचारियों ने कम्पनी छोड़ी है:",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "label",
              "name": "label",
              "label": "5.7 Educational break-up of the employee base / कर्मचारियों की शैक्षणिक योग्यता के विषय में जानकारी:",
              "tooltip": "",
              "type": "Label",
              "required": true,
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "Enter Text Here",
              "label": "5.7.1 Professional education (Technical or Engineering, Business Management, CA) / प्रोफेशनल शिक्षा (तकनीकी अथवा अभियांत्रिकी, व्यवसाय प्रबन्धन, चार्टर्ड अकाउनटेन्ट)",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "Enter Text Here",
              "label": "5.7.2 Higher technical and professional qualifications (PhD, MS, MTech, ME) / उच्च शैक्षणिक योग्यता तकनीकी एवं प्रोफेशनल (पी.एच.डी., एम.एस., एम.टेक., एम.ई)",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "Enter Text Here",
              "label": "5.7.3 College or vocational training / महाविद्यालय अथवा व्यावसायिक प्रशिक्षण",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "Enter Text Here",
              "label": "5.7.4 Others / अन्य",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "radio",
              "name": "radio",
              "label": "5.8 “What is the average frequency of training given to employees/ कर्मचारियों को दिए जाने वाले प्रशिक्षण की औसत आवृत्ति?",
              "tooltip": "",
              "value": "",
              "type": "radio",
              "required": true,
              "data": [
                {
                  "label": "Quarterly / त्रैमासिक",
                  "value": "1"
                },
                {
                  "label": "Half yearly / अर्धवार्षिक",
                  "value": "2"
                },
                {
                  "label": "Annually / वार्षिक",
                  "value": "Another Label2"
                },
                {
                  "label": "Every 2 years / प्रत्येक 2 वर्षों में",
                  "value": "Another Label3"
                }
              ],
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "radio",
              "name": "radio",
              "label": "5.9 What is the average time spent by employees (excluding trainees and apprentices) on training in a year/ वर्ष में प्रशिक्षण पर कर्मचारियों (प्रशिक्षुओं को छोड़कर) द्वारा बिताया औसत समय?",
              "tooltip": "",
              "value": "",
              "type": "radio",
              "required": true,
              "data": [
                {
                  "label": "<8 hours / 8 घण्टे",
                  "value": "1"
                },
                {
                  "label": "<20 hours / 20 घण्टे",
                  "value": "2"
                },
                {
                  "label": "<40 hours / 40 घण्टे",
                  "value": "Another Label2"
                },
                {
                  "label": "More then 40 hours / 40 घण्टे से अधिक",
                  "value": "Another Label3"
                }
              ],
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "Enter Text Here",
              "label": "5.10 What are the different methods used to train and develop employees? / कर्मचारियों के प्रशिक्षण एवं विकास हेतु अपनाई कौन-कौन सी विभिन्न पद्धतियां अपनाई जाती हैं ?",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "Enter Text Here",
              "label": "5.11 How much is spent on training and development of employees? / गत वर्ष प्रशिक्षण व विकास पर कुल खर्च ?",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "radio",
              "name": "radio",
              "label": "5.12 Do you have any employee feedback mechanism in place? / क्या कर्मचारियों का फीडबैक प्राप्त करने की निर्धारित प्रक्रिया है ?",
              "tooltip": "",
              "value": "",
              "type": "radio",
              "required": true,
              "data": [
                {
                  "label": "Yes / हां",
                  "value": "1"
                },
                {
                  "label": "No / नहीं",
                  "value": "2"
                }
              ],
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "Enter Text Here",
              "label": " 13. What employee appreciation mechanism(s) are in place? / कर्मचारियों की प्रशंसा / प्रोत्साहन हेतु क्या प्रक्रिया है ?",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "Enter Text Here",
              "label": "14. How do you measure employee satisfaction level? / आप कर्मचारियों की संतुष्टि के स्तर कैसे नापते है ?",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "label",
              "name": "label",
              "label": "In case of any clarifications call, +91 6377205389",
              "tooltip": "",
              "type": "Label",
              "required": true,
              "validators": {},
              "layout": "col-lg-12"
            }
          ]
        },
        {
          "title": "Key initiatives and achievements ",
          "description": "/ प्रमुख पहल एवं उपलब्धियां",
          "state": "normal",
          "canEnter": true,
          "canExit": false,
          "controls": [
            {
              "id": "label",
              "name": "label",
              "label": "Quality measures / गुणवत्ता मापन",
              "tooltip": "",
              "type": "Label",
              "required": true,
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "radio",
              "name": "radio",
              "label": "6.1 Do you have any specific program to improve quality in your organisation? / अपने संगठन की गुणवत्ता को और बेहतर बनाने हेतु क्या कोई निर्धारित कार्यक्रम है:",
              "tooltip": "",
              "value": "",
              "type": "radio",
              "required": true,
              "data": [
                {
                  "label": "Yes / हां",
                  "value": "1"
                },
                {
                  "label": "No / नहीं",
                  "value": "2"
                }
              ],
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "area",
              "name": "area",
              "placeholder": "Enter Description",
              "label": "6.2 How do you involve your employees in quality improvement programs? / आप गुणवत्ता सुधार कार्यक्रमों में कर्मचारियों को कैसे शामिल करते हैं ?",
              "tooltip": "",
              "value": "",
              "type": "textarea",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "radio",
              "name": "radio",
              "label": "6.3 Are you measuring compliance with quality standards? / क्या आपके यहां गुणवत्ता मानकों की अनुपालना को नापने की प्रक्रिया है?",
              "tooltip": "",
              "value": "",
              "type": "radio",
              "required": true,
              "data": [
                {
                  "label": "Yes / हां",
                  "value": "1"
                },
                {
                  "label": "No / नहीं",
                  "value": "2"
                }
              ],
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "area",
              "name": "area",
              "placeholder": "Enter Description",
              "label": "6.4 If yes, how do you do this? Do you have internal or external audits? Please write a 200 word note on your quality systems. / यदि है, तो आप यह किस प्रकार करते हैं? क्या आपके यहां आन्तरिक एवं बाहरी ऑडिट की प्रक्रिया है? कृपया आपके यहां विद्यमान गुणवत्ता प्रक्रिया पर 200 शब्दों की टिप्पणी लिखिये।",
              "tooltip": "",
              "value": "",
              "type": "textarea",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "label",
              "name": "label",
              "label": "6.5 Please list accreditations, quality and credit rating certifications that your company has obtained. / आपकी कम्पनी को प्राप्त प्रमाणन, गुणवत्ता एवं क्रेडिट रेटिंग प्रमाणीकरण की सूची देवें:",
              "tooltip": "",
              "type": "Label",
              "required": true,
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "table",
              "name": "table",
              "label": "",
              "tooltip": "",
              "value": "",
              "type": "table",
              "required": true,
              "rows": [
                [
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  }
                ],
                [
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  }
                ],
                [
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  }
                ],
                [
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  }
                ],
                [
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  }
                ]
              ],
              "columns": [
                {
                  "id": "label",
                  "name": "Column 1",
                  "label": "Name of the certification or rating / प्रमाणीकरण अथवा रेटिंग का नाम",
                  "type": "label"
                },
                {
                  "id": "label",
                  "label": "Year granted / वर्ष जब प्राप्त की गई",
                  "name": "label",
                  "type": "label"
                },
                {
                  "id": "label",
                  "label": "Certifying or accrediting agency / प्रमाणित करने अथवा मान्यता प्रदान करने वाली एजेन्सी का नाम",
                  "name": "label",
                  "type": "label"
                }
              ],
              "rowHead": [
                {
                  "name": "row 1"
                }
              ],
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "label",
              "name": "label",
              "label": "Awards / प्राप्त पुरस्कार",
              "tooltip": "",
              "type": "Label",
              "required": true,
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "label",
              "name": "label",
              "label": "6.6 Please provide details of any awards or accolades won in the past. / कृपया विगत में प्राप्त पुरस्कारों अथवा प्रशंसा पत्रों का विवरण देवें",
              "tooltip": "",
              "type": "Label",
              "required": true,
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "table",
              "name": "table",
              "label": "",
              "tooltip": "",
              "value": "",
              "type": "table",
              "required": true,
              "rows": [
                [
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  }
                ],
                [
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  }
                ],
                [
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  }
                ]
              ],
              "columns": [
                {
                  "id": "label",
                  "name": "Column 1",
                  "label": " Award / पुरस्कार",
                  "type": "label"
                },
                {
                  "id": "label",
                  "label": "Basic or category / श्रेणी अथवा आधार",
                  "name": "label",
                  "type": "label"
                },
                {
                  "id": "label",
                  "label": "Year / वर्ष",
                  "name": "label",
                  "type": "label"
                },
                {
                  "id": "label",
                  "label": "Additional Information / अतिरिक्त जानकारी",
                  "name": "label",
                  "type": "label"
                }
              ],
              "rowHead": [
                {
                  "name": "row 1"
                }
              ],
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "label",
              "name": "label",
              "label": "6.7 Award / पुरस्कार\tBasic or category / श्रेणी अथवा आधार\tYear / वर्ष\tAdditional Information / अतिरिक्त जानकारी 7. Environment (natural) Protection and safety of employees / पर्यावरण संरक्षण एवं कर्मचारी सुरक्षा नीतियां।:",
              "tooltip": "",
              "type": "Label",
              "required": true,
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "area",
              "name": "area",
              "placeholder": "Enter Description",
              "label": "6.7.1 What initiatives has your company undertaken related to safety in the workplace? / आपकी कंपनी ने कार्यस्थल में सुरक्षा से जुड़ी क्या पहल की है?",
              "tooltip": "",
              "value": "",
              "type": "textarea",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "area",
              "name": "area",
              "placeholder": "Enter Description",
              "label": "6.7.2 Have you met all the requirements of the environmental protection act? / क्या आपने पर्यावरण संरक्षण अधिनियम की सभी आवश्यकताओं को पूरा किया है?",
              "tooltip": "",
              "value": "",
              "type": "textarea",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "area",
              "name": "area",
              "placeholder": "Enter Description",
              "label": "6.7.3 Have you gone above and beyond the requirements and tailored your processes to be best in class? / क्या आप आवश्यकताओं से ऊपर और परे चले गए हैं और वर्ग में सर्वश्रेष्ठ होने के लिए आपने अपनी प्रक्रिया को अनुकूलित किया है ?",
              "tooltip": "",
              "value": "",
              "type": "textarea",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "label",
              "name": "label",
              "label": "6.8 Provide details of policy initiatives for safety of employees and corrective actions taken in case of mishaps, if any, in the last 3 years. / पिछले 3 वर्षों में कर्मचारियों की सुरक्षा के लिए नीतिगत पहलों और दुर्घटना की स्थिति में सुधारात्मक कार्रवाइयों, यदि कोई हो, का विवरण दें।”",
              "tooltip": "",
              "type": "Label",
              "required": true,
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "table",
              "name": "table",
              "label": "",
              "tooltip": "",
              "value": "",
              "type": "table",
              "required": true,
              "rows": [
                [
                  {
                    "id": "label",
                    "name": "label",
                    "label": "Number Of Incidents",
                    "type": "label",
                    "required": true,
                    "validators": {},
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  }
                ],
                [
                  {
                    "id": "label",
                    "name": "label",
                    "label": "Number of injuries",
                    "type": "label",
                    "required": true,
                    "validators": {},
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  }
                ],
                [
                  {
                    "id": "label",
                    "name": "label",
                    "label": "Number of deaths",
                    "type": "label",
                    "required": true,
                    "validators": {},
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  }
                ]
              ],
              "columns": [
                {
                  "id": "label",
                  "name": "Column 1",
                  "label": "Region",
                  "type": "label"
                },
                {
                  "id": "label",
                  "label": "2020-21",
                  "name": "label",
                  "type": "label"
                },
                {
                  "id": "label",
                  "label": "2019-20",
                  "name": "label",
                  "type": "label"
                },
                {
                  "id": "label",
                  "label": "\t2018-19",
                  "name": "label",
                  "type": "label"
                }
              ],
              "rowHead": [
                {
                  "name": "row 1"
                }
              ],
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "area",
              "name": "area",
              "placeholder": "Enter Description",
              "label": "6.9 Describe any initiatives for conservation of energy and water. / ऊर्जा और जल - संरक्षण के लिए किसी विशिष्ट प्रयास का वर्णन करें।",
              "tooltip": "",
              "value": "",
              "type": "textarea",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "label",
              "name": "label",
              "label": "Other initiatives and achievements / अन्य पहल एवं उपलब्धियां:",
              "tooltip": "",
              "type": "Label",
              "required": true,
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "area",
              "name": "area",
              "placeholder": "Enter Description",
              "label": "6.10 Please provide details of any initiatives, achievements relating to processes, productivity enhancement, marketing and sales promotion, customer satisfaction, people management, employee welfare, CSR activities, that you would like to mention to strengthen your application. / कृपया किसी भी पहल, प्रक्रियाओं से संबंधित उपलब्धियों, उत्पादकता बढ़ाने, विपणन और बिक्री को बढ़ावा देने, ग्राहकों की संतुष्टि, लोगों को प्रबंधन, कर्मचारी कल्याण, सीएसआर गतिविधियों से संबंधित विवरण प्रदान करें, जिसका उल्लेख आप अपने आवेदन को मजबूत करने के लिए करना चाहेंगे।",
              "tooltip": "",
              "value": "",
              "type": "textarea",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "label",
              "name": "label",
              "label": "Social impact measures / सामाजिक प्रभाव हेतु उपाय:",
              "tooltip": "",
              "type": "Label",
              "required": true,
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "label",
              "name": "label",
              "label": "6.11 List top three causes your organisation has championed (or initiatives taken) in last 12 months or last FY: / तीन प्रमुख कारकों को उल्लेख करें जिनके कारण पिछले 12 महिनों में अथवा विगत वित्तीय वर्ष के दौरान आपके संगठन को शीर्ष स्थान प्राप्त हुआ है अथवा आपके संगठन द्वारा पहल की गई है:",
              "tooltip": "",
              "type": "Label",
              "required": true,
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "table",
              "name": "table",
              "label": "Approx. expenditure for the cause / इस पर व्यय की गई लगभग राशि",
              "tooltip": "",
              "value": "",
              "type": "table",
              "required": true,
              "rows": [
                [
                  {
                    "id": "area",
                    "name": "area",
                    "placeholder": "Enter Description",
                    "label": "",
                    "value": "",
                    "type": "textarea",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "dropdown",
                    "name": "dropdown",
                    "label": "",
                    "tooltip": "",
                    "value": "",
                    "placeholder": "Please select",
                    "type": "dropdown",
                    "required": true,
                    "data": [
                      {
                        "label": "100-1000",
                        "value": "1"
                      },
                      {
                        "label": "1000+",
                        "value": "2"
                      },
                      {
                        "label": "10000+",
                        "value": "Another Label2"
                      }
                    ],
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "dropdown",
                    "name": "dropdown",
                    "label": "",
                    "tooltip": "",
                    "value": "",
                    "placeholder": "Please select",
                    "type": "dropdown",
                    "required": true,
                    "data": [
                      {
                        "label": "Environment",
                        "value": "1"
                      },
                      {
                        "label": "Quality of living",
                        "value": "2"
                      },
                      {
                        "label": "Health and nutrition",
                        "value": "Another Label2"
                      },
                      {
                        "label": "Skills and employment",
                        "value": "Another Label3"
                      },
                      {
                        "label": "Cultural",
                        "value": "Another Label4"
                      },
                      {
                        "label": "Others (specify)",
                        "value": "Another Label5"
                      }
                    ],
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  }
                ],
                [
                  {
                    "id": "area",
                    "name": "area",
                    "placeholder": "Enter Description",
                    "label": "",
                    "value": "",
                    "type": "textarea",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "dropdown",
                    "name": "dropdown",
                    "label": "",
                    "tooltip": "",
                    "value": "",
                    "placeholder": "Please select",
                    "type": "dropdown",
                    "required": true,
                    "data": [
                      {
                        "label": "100 - 1000",
                        "value": "1"
                      },
                      {
                        "label": "1000+",
                        "value": "2"
                      },
                      {
                        "label": "10000+",
                        "value": "Another Label2"
                      }
                    ],
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "dropdown",
                    "name": "dropdown",
                    "label": "",
                    "tooltip": "",
                    "value": "",
                    "placeholder": "Please select",
                    "type": "dropdown",
                    "required": true,
                    "data": [
                      {
                        "label": "Environment",
                        "value": "1"
                      },
                      {
                        "label": "Quality of living",
                        "value": "2"
                      },
                      {
                        "label": "Health and nutrition",
                        "value": "Another Label2"
                      },
                      {
                        "label": "Skills and employment",
                        "value": "Another Label3"
                      },
                      {
                        "label": "Cultural",
                        "value": "Another Label4"
                      },
                      {
                        "label": "Others (specify)",
                        "value": "Another Label5"
                      }
                    ],
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  }
                ],
                [
                  {
                    "id": "area",
                    "name": "area",
                    "placeholder": "Enter Description",
                    "label": "",
                    "value": "",
                    "type": "textarea",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "dropdown",
                    "name": "dropdown",
                    "label": "",
                    "tooltip": "",
                    "value": "",
                    "placeholder": "Please select",
                    "type": "dropdown",
                    "required": true,
                    "data": [
                      {
                        "label": "100-1000",
                        "value": "1"
                      },
                      {
                        "label": "1000+",
                        "value": "2"
                      },
                      {
                        "label": "10000+",
                        "value": "Another Label2"
                      }
                    ],
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "dropdown",
                    "name": "dropdown",
                    "label": "",
                    "tooltip": "",
                    "value": "",
                    "placeholder": "Please select",
                    "type": "dropdown",
                    "required": true,
                    "data": [
                      {
                        "label": "Environment",
                        "value": "1"
                      },
                      {
                        "label": "Quality of living",
                        "value": "2"
                      },
                      {
                        "label": "Health and nutrition",
                        "value": "Another Label2"
                      },
                      {
                        "label": "Skills and employment",
                        "value": "Another Label3"
                      },
                      {
                        "label": "Cultural",
                        "value": "Another Label4"
                      },
                      {
                        "label": "Others (specify)",
                        "value": "Another Label5"
                      }
                    ],
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  }
                ]
              ],
              "columns": [
                {
                  "id": "label",
                  "name": "Column 1",
                  "label": "Cause / Initiative / कारण / पहल",
                  "type": "label"
                },
                {
                  "id": "label",
                  "label": "Number of direct beneficiaries / लाभार्थियों की संख्या",
                  "name": "label",
                  "type": "label"
                },
                {
                  "id": "label",
                  "label": "Impact type / प्रभाव का प्रकार",
                  "name": "label",
                  "type": "label"
                },
                {
                  "id": "label",
                  "label": "Approx. expenditure for the cause / इस पर व्यय की गई लगभग राशि",
                  "name": "label",
                  "type": "label"
                }
              ],
              "rowHead": [
                {
                  "name": "row 1"
                }
              ],
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "area",
              "name": "area",
              "placeholder": "Enter Description",
              "label": "6.12 Measures taken to track and carry out continual evaluation of the initiatives/projects and how the impact is measured under your Corporate Social Responsibilities. Please provide details of the investments/expenditures, the target segments and anticipated/ realised benefits from the project(s). /पहल / परियोजनाओं के निरंतर मूल्यांकन को ट्रैक करने और अपने कॉर्पोरेट सामाजिक जिम्मेदारियों के तहत किये गए कार्यों के प्रभाव को कैसे मापा जाता है, इस पर नज़र रखने के लिए किए गए उपाय। कृपया निवेश / व्यय, लक्ष्य खंडों और परियोजना से अनुमानित प्रत्याशित / वास्तविक लाभ पर जानकारी प्रदन करें ।",
              "tooltip": "",
              "value": "",
              "type": "textarea",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "label",
              "name": "label",
              "label": "In case of any clarifications call, +91 6377205389",
              "tooltip": "",
              "type": "Label",
              "required": true,
              "validators": {},
              "layout": "col-lg-12"
            }
          ]
        },
        {
          "title": "Auditor",
          "description": " / ऑडिटर",
          "state": "normal",
          "canEnter": true,
          "canExit": false,
          "controls": [
            {
              "id": "text",
              "name": "text",
              "placeholder": "Enter Text Here",
              "label": "7.1 Name / नाम",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "Enter Text Here",
              "label": " 7.2 Contact number / सम्पर्क नम्बर",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "area",
              "name": "area",
              "placeholder": "Enter Description",
              "label": "7.3 Address / पता",
              "tooltip": "",
              "value": "",
              "type": "textarea",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "dropdown",
              "name": "dropdown",
              "label": "State / राज्य",
              "tooltip": "",
              "value": "",
              "placeholder": "Please select",
              "type": "dropdown",
              "required": true,
              "data": [
                {
                  "label": "Andhra Pradesh (New)",
                  "value": "1"
                },
                {
                  "label": "Arunachal Pradesh",
                  "value": "2"
                },
                {
                  "label": "Assam",
                  "value": "Another Label2"
                },
                {
                  "label": "Bihar",
                  "value": "Another Label3"
                },
                {
                  "label": "Goa",
                  "value": "Another Label4"
                },
                {
                  "label": "Gujarat",
                  "value": "Another Label5"
                }
              ],
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "dropdown",
              "name": "dropdown",
              "label": "District / जिला",
              "tooltip": "",
              "value": "",
              "placeholder": "Please select",
              "type": "dropdown",
              "required": true,
              "data": [
                {
                  "label": "Adilabad",
                  "value": "1"
                },
                {
                  "label": "Adoni",
                  "value": "2"
                }
              ],
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "Enter Text Here",
              "label": "Pincode / पिनकोड",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "checkbox",
              "name": "checkbox",
              "label": "7.4 Documents submitted – Please check financial statements for / संलग्न दस्तावेज - कृपया निम्नानुसार वर्षों का वित्तीय विवरण संलग्न करें:",
              "tooltip": "",
              "value": [],
              "type": "checkbox",
              "required": true,
              "data": [
                {
                  "label": "FY 18-19 / वित्तीय वर्ष 18-19",
                  "value": "Test1"
                },
                {
                  "label": "FY 19-20 / वित्तीय वर्ष 19-20",
                  "value": "Test2"
                },
                {
                  "label": "FY 20-21 / वित्तीय वर्ष 20-21",
                  "value": "Another Label2"
                }
              ],
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "label",
              "name": "label",
              "label": "Documents that are mandatory / उन दस्तावेजों की सूची, जो कि आवश्यक हैं:",
              "tooltip": "",
              "type": "Label",
              "required": true,
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "file",
              "name": "file",
              "label": "7.5 Audited financial statements of FY 20-21 / वित्तीय वर्ष 20-21 के लेखा परीक्षित वित्तीय विवरण",
              "tooltip": "",
              "type": "file",
              "value": "",
              "required": true,
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "file",
              "name": "file",
              "label": "7.6 Audited financial statements of FY 19-20 / वित्तीय वर्ष 19-20 के लेखा परीक्षित वित्तीय विवरण",
              "tooltip": "",
              "type": "file",
              "value": "",
              "required": true,
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "file",
              "name": "file",
              "label": "7.7 Audited financial statements of FY 18-19 / वित्तीय वर्ष 18-19 के लेखा परीक्षित वित्तीय विवरण",
              "tooltip": "",
              "type": "file",
              "value": "",
              "required": true,
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "file",
              "name": "file",
              "label": "7.8 Copy of any of these: / इनमें से किसी एक की प्रति: Company incorporation certificate, PAN, Udyog Aadhar / कम्पनी का निगमन प्रमाणपत्र, स्थाई लेखा संख्या, उद्योग आधार",
              "tooltip": "",
              "type": "file",
              "value": "",
              "required": true,
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "label",
              "name": "label",
              "label": "Documents will add weight to your application and are optional / अन्य वैकल्पिक दस्तावेज जिनसे आपके आवेदन को बल मिले:",
              "tooltip": "",
              "type": "Label",
              "required": true,
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "file",
              "name": "file",
              "label": "7.9 CSR budget and report / सामाजिक सरोकार गतिविधियों का बजट एवं विवरण:",
              "tooltip": "",
              "type": "file",
              "value": "",
              "required": true,
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "file",
              "name": "file",
              "label": "7.10 Copy of award certificates related to your industry / आपके उद्योग से सम्बन्धित पुरस्कारों/प्रशंसा पत्रों की प्रतिलिपियां:",
              "tooltip": "",
              "type": "file",
              "value": "",
              "required": true,
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "label",
              "name": "label",
              "label": "Please paste links to media coverage eg. News Paper Articles / Blog Posts / Videos. You may also upload files on Google Drive folder and share the link to the folder",
              "tooltip": "",
              "type": "Label",
              "required": true,
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "area",
              "name": "area",
              "placeholder": "Enter Description",
              "label": "7.11 Copies of media coverage received / मीडिया में प्रकाशित समाचारों की प्रतिलिपियां:",
              "tooltip": "",
              "value": "",
              "type": "textarea",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "file",
              "name": "file",
              "label": "7.12 Copies of internal and external quality audit reports / आन्तरिक एवं बाहरी गुणवत्ता ऑडिट रिपोर्ट की प्रतिलिपियां:",
              "tooltip": "",
              "type": "file",
              "value": "",
              "required": true,
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "file",
              "name": "file",
              "label": "7.13 List of patents owned (only publish and granted) / प्राप्त पेटेन्ट की सूची (केवल प्रकाशित एवं स्वीकृत)",
              "tooltip": "",
              "type": "file",
              "value": "",
              "required": true,
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "file",
              "name": "file",
              "label": "7.14 Appreciation letters from key clients / प्रमुख ग्राहकों से प्राप्त प्रशंसा पत्र",
              "tooltip": "",
              "type": "file",
              "value": "",
              "required": true,
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "label",
              "name": "label",
              "label": "Any additional documents can be sent on e-mail at ucciawards@gmail.com.",
              "tooltip": "",
              "type": "Label",
              "required": true,
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "label",
              "name": "label",
              "label": "Declaration / घोषणा",
              "tooltip": "",
              "type": "Label",
              "required": true,
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "label",
              "name": "label",
              "label": "7.15 We understand that we have shared this information in confidence and exclusively for the purpose of the Excellence Awards, and UCCI may use the information for its goals in anonymized or aggregated manner only without identifying any person or business, except if required by law or any relevant regulations. We understand and agree that UCCI would take reasonable steps to ensure data confidentiality, and would not be liable for any expenses, costs or damages in this regard. / हम समझते हैं कि हमने इस जानकारी को गोपनीयता के आश्वासन पर और विशेष रूप से उत्कृष्टता पुरस्कारों के उद्देश्य के लिए साझा किया है, और यूसीसीआई अपने लक्ष्यों के लिए जानकारी का उपयोग केवल किसी व्यक्ति या व्यवसाय की पहचान का खुलासा किये बिना गुमनाम रूप से या सामूहिक तरीके से कर सकता है, सिवाय इसके कि कानून या किसी प्रासंगिक विनियमों के प्रावधानों में आवश्यक हो । हम समझते हैं और सहमत हैं कि यूसीसीआई डेटा गोपनीयता सुनिश्चित करने के लिए उचित कदम उठाएगा, और इस संबंध में हुए किसी भी खर्च, लागत या नुकसान के लिए उत्तरदायी नहीं होगा।।",
              "tooltip": "",
              "type": "Label",
              "required": true,
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "Enter Text Here",
              "label": "7.15.1 Name of respondent / आवेदनकर्ता का नाम",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "Enter Text Here",
              "label": "7.15.2 Designation / पद",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "Enter Text Here",
              "label": "7.15.3 Email / ई-मेल",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "date",
              "name": "date",
              "label": "7.15.4 Date / दिनांक",
              "tooltip": "",
              "type": "date",
              "value": "",
              "required": true,
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "file",
              "name": "file",
              "label": "7.15.5 Signature / हस्ताक्षर",
              "tooltip": "",
              "type": "file",
              "value": "",
              "required": true,
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "file",
              "name": "file",
              "label": "7.15.6 Firm / Company Stamp / कम्पनी / फर्म की छाप",
              "tooltip": "",
              "type": "file",
              "value": "",
              "required": true,
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "area",
              "name": "area",
              "placeholder": "Enter Description",
              "label": "7.15.7 Remarks/ राय",
              "tooltip": "",
              "value": "",
              "type": "textarea",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "label",
              "name": "label",
              "label": "In case of any clarifications call, +91 6377205389",
              "tooltip": "",
              "type": "Label",
              "required": true,
              "validators": {},
              "layout": "col-lg-12"
            }
          ]
        }
      ];
    }
    else if (slug.slug == 'csrForm') {
      this.sections = [
        {
          "title": "1. Basic Information /",
          "description": "मूलभूत जानकारी",
          "state": "normal",
          "canEnter": true,
          "canExit": false,
          "controls": [
            {
              "id": "text",
              "name": "text",
              "placeholder": "",
              "label": "1.1 Name of the company / कम्पनी का नाम:",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "",
              "label": "1.2 CIN of the company / कम्पनी का सीआईएन",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "",
              "label": "1.3 GST number (e.g. 08AABCX2183V1Z0) / जी.एस.टी. संख्या",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "",
              "label": "1.4 Year and state of registration / पंजीकरण का वर्ष एवं राज्य",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "",
              "label": "1.5 Website (http://example.com) / वेबसाईट",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "",
              "label": "1.6 Phone number / फोन नम्बर",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "",
              "label": "1.7 Email Id / ई-मेल आईडी",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "",
              "label": "1.8 Address of registered office / पंजीकृत कार्यालय का पता",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "dropdown",
              "name": "dropdown",
              "label": "1.8.1 State / राज्य",
              "tooltip": "",
              "value": "",
              "placeholder": "Please select",
              "type": "dropdown",
              "required": true,
              "data": [
                {
                  "label": "Rajasthan",
                  "value": "1"
                },
                {
                  "label": "Punjab",
                  "value": "2"
                },
                {
                  "label": "Haryana",
                  "value": "Another Label2"
                },
                {
                  "label": "Jammu & Kashmir",
                  "value": "Another Label3"
                },
                {
                  "label": "Goa",
                  "value": "Another Label4"
                }
              ],
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "dropdown",
              "name": "dropdown",
              "label": "1.8.2 District / जिला",
              "tooltip": "",
              "value": "",
              "placeholder": "Please select",
              "type": "dropdown",
              "required": true,
              "data": [
                {
                  "label": "Udaipur",
                  "value": "1"
                },
                {
                  "label": "Jaipur",
                  "value": "2"
                },
                {
                  "label": "Sikar",
                  "value": "Another Label2"
                },
                {
                  "label": "Kota",
                  "value": "Another Label3"
                },
                {
                  "label": "Churu",
                  "value": "Another Label4"
                }
              ],
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "",
              "label": "1.8.3 Pincode / पिन कोड",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "",
              "label": "1.9 Correspondence address / पत्र व्यवहार का पता",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "dropdown",
              "name": "dropdown",
              "label": "1.9.1 State / राज्य",
              "tooltip": "",
              "value": "",
              "placeholder": "Please select",
              "type": "dropdown",
              "required": true,
              "data": [
                {
                  "label": "Rajasthan",
                  "value": "1"
                },
                {
                  "label": "Goa",
                  "value": "2"
                },
                {
                  "label": "Haryana",
                  "value": "Another Label2"
                },
                {
                  "label": "Punjab",
                  "value": "Another Label3"
                },
                {
                  "label": "Jammu & Kashmir",
                  "value": "Another Label4"
                }
              ],
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "dropdown",
              "name": "dropdown",
              "label": "1.9.2 District / जिला",
              "tooltip": "",
              "value": "",
              "placeholder": "Please select",
              "type": "dropdown",
              "required": true,
              "data": [
                {
                  "label": "Rajasthan",
                  "value": "1"
                },
                {
                  "label": "Goa",
                  "value": "2"
                },
                {
                  "label": "Haryana",
                  "value": "Another Label2"
                },
                {
                  "label": "Punjab",
                  "value": "Another Label3"
                },
                {
                  "label": "Jammu & Kashmir",
                  "value": "Another Label4"
                }
              ],
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "",
              "label": " 1.9.3 Pincode / पिन कोड",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "",
              "label": "1.10 Number of locations or plants / कुल निर्माण इकाइयों की संख्या",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "label",
              "name": "label",
              "label": "1.11 Location of manufacturing unit(s) / निर्माण इकाइयों का स्थान:",
              "tooltip": "",
              "type": "Label",
              "required": true,
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "dropdown",
              "name": "dropdown",
              "label": "1.11.1.1 State / राज्य",
              "tooltip": "",
              "value": "",
              "placeholder": "Please select",
              "type": "dropdown",
              "required": true,
              "data": [
                {
                  "label": "Rajasthan",
                  "value": "1"
                },
                {
                  "label": "Goa",
                  "value": "2"
                },
                {
                  "label": "Haryana",
                  "value": "Another Label2"
                }
              ],
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "dropdown",
              "name": "dropdown",
              "label": "1.11.1.2 District / जिला",
              "tooltip": "",
              "value": "",
              "placeholder": "Please select",
              "type": "dropdown",
              "required": true,
              "data": [
                {
                  "label": "Udaipur",
                  "value": "1"
                },
                {
                  "label": "Sikar",
                  "value": "2"
                },
                {
                  "label": "Jaipur",
                  "value": "Another Label2"
                }
              ],
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "",
              "label": "1.11.1.3 Location / स्थान",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "dropdown",
              "name": "dropdown",
              "label": "1.11.2.1 State / राज्य",
              "tooltip": "",
              "value": "",
              "placeholder": "Please select",
              "type": "dropdown",
              "required": true,
              "data": [
                {
                  "label": "Rajasthan",
                  "value": "1"
                },
                {
                  "label": "Haryana",
                  "value": "2"
                },
                {
                  "label": "Goa",
                  "value": "Another Label2"
                }
              ],
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "dropdown",
              "name": "dropdown",
              "label": "1.11.2.2 District / जिला",
              "tooltip": "",
              "value": "",
              "placeholder": "Please select",
              "type": "dropdown",
              "required": true,
              "data": [
                {
                  "label": "Udaipur",
                  "value": "1"
                },
                {
                  "label": "Sikar",
                  "value": "2"
                },
                {
                  "label": "Jaipur",
                  "value": "Another Label2"
                }
              ],
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "",
              "label": "1.11.2.3 Location / स्थान",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "dropdown",
              "name": "dropdown",
              "label": "1.11.3.1 State / राज्य",
              "tooltip": "",
              "value": "",
              "placeholder": "Please select",
              "type": "dropdown",
              "required": true,
              "data": [
                {
                  "label": "Rajasthan",
                  "value": "1"
                },
                {
                  "label": "Haryana",
                  "value": "2"
                },
                {
                  "label": "Goa",
                  "value": "Another Label2"
                }
              ],
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "dropdown",
              "name": "dropdown",
              "label": "1.11.3.2 District / जिला",
              "tooltip": "",
              "value": "",
              "placeholder": "Please select",
              "type": "dropdown",
              "required": true,
              "data": [
                {
                  "label": "Udaipur",
                  "value": "1"
                },
                {
                  "label": "Sikar",
                  "value": "2"
                },
                {
                  "label": "Jaipur",
                  "value": "Another Label2"
                }
              ],
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "",
              "label": "1.11.3.3 Location / स्थान",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "",
              "label": "1.12 Sector(s) in which the company operates / उन सेक्टर्स का नाम जिनमें कम्पनी व्यवसायरत है",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "label",
              "name": "label",
              "label": "1.13 Details of two main promoters or partners or directors / कम्पनी के दो प्रमुख प्रमोटर अथवा पार्टनर अथवा निदेशकों के बारे में जानकारी",
              "tooltip": "",
              "type": "Label",
              "required": true,
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "",
              "label": "1.13.1.1 Name / नाम",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "",
              "label": "1.13.1.2 Designation / पद",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "",
              "label": "1.13.1.3 Email id / ई-मेल आईडी",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "",
              "label": "1.13.1.4 Mobile / मोबाईल नम्बर",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "",
              "label": "1.13.2.1 Name / नाम",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "",
              "label": "1.13.2.2 Designation / पद",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "",
              "label": "1.13.2.3 Email id / ई-मेल आईडी",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "",
              "label": "1.13.2.4 Mobile / मोबाईल नम्बर",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "label",
              "name": "label",
              "label": "1.14 Please provide details of the person we should contact for any clarification or information / कृपया उस व्यक्ति का विवरण देवें जिससे हम किसी प्रकार के स्पष्टीकरण अथवा अन्य जानकारी प्राप्त करने के लिए संपर्क किया जा सके",
              "tooltip": "",
              "type": "Label",
              "required": true,
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "",
              "label": "1.14.1 Name / नाम",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "",
              "label": "1.14.2 Designation / पद",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "",
              "label": "1.14.3 Email id / ई-मेल आईडी",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "",
              "label": "1.14.4 Mobile / मोबाईल नम्बर",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "label",
              "name": "label",
              "label": "1.15. Financial performance at a glance / वित्तीय प्रदर्शन पर एक विहंगम दृष्टि:",
              "tooltip": "",
              "type": "Label",
              "required": true,
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "label",
              "name": "label",
              "label": "(audited financial statements for FY 2020-21, FY 2019-20 and FY 2018-19 must be submitted with the form) / (वित्तीय वर्ष 2020-21, 2019-20 एवं 2018-19 के ऑडिट किए गए वित्तीय विवरण इस फाॅर्म के साथ प्रस्तुत किए जाने चाहिए)",
              "tooltip": "",
              "type": "Label",
              "required": true,
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "table",
              "name": "table",
              "label": "",
              "tooltip": "",
              "value": "",
              "type": "table",
              "required": true,
              "rows": [
                [
                  {
                    "id": "label",
                    "name": "label",
                    "label": "Total turnover / sales / कुल टर्नओवर / विक्रय",
                    "type": "label",
                    "required": true,
                    "validators": {},
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  }
                ],
                [
                  {
                    "id": "label",
                    "name": "label",
                    "label": "Operating surplus / परिचालन अधिशेष",
                    "type": "label",
                    "required": true,
                    "validators": {},
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  }
                ],
                [
                  {
                    "id": "label",
                    "name": "label",
                    "label": "Profit before interest, taxes, and amortisation (EBITA) / ब्याज, करों और परिशोधन से पहले लाभ",
                    "type": "label",
                    "required": true,
                    "validators": {},
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  }
                ]
              ],
              "columns": [
                {
                  "id": "label",
                  "name": "Column 1",
                  "label": "Particulars / विवरण",
                  "type": "label"
                },
                {
                  "id": "label",
                  "label": "FY 2020-21 / वित्तीय वर्ष 2020-21 Rupees",
                  "name": "label",
                  "type": "label"
                },
                {
                  "id": "label",
                  "label": "FY 2019-20 / वित्तीय वर्ष 2019-20 Rupees",
                  "name": "label",
                  "type": "label"
                },
                {
                  "id": "label",
                  "label": "FY 2018-19 / वित्तीय वर्ष 2018-19 Rupees",
                  "name": "label",
                  "type": "label"
                }
              ],
              "rowHead": [
                {
                  "name": "row 1"
                }
              ],
              "validators": {},
              "layout": "col-lg-12"
            }
          ]
        },
        {
          "title": "2. Governance /",
          "description": "शासन",
          "state": "normal",
          "canEnter": true,
          "canExit": false,
          "controls": [
            {
              "id": "radio",
              "name": "radio",
              "label": "2.1 1. Do you have a CSR policy in place? / क्या आपके संगठन की निर्धारित सामाजिक उत्तरदायित्व नीति है?",
              "tooltip": "",
              "value": "",
              "type": "radio",
              "required": true,
              "data": [
                {
                  "label": "Yes / हां",
                  "value": "1"
                },
                {
                  "label": "No / नहीं",
                  "value": "2"
                }
              ],
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "area",
              "name": "area",
              "placeholder": "",
              "label": "2.1.1 If yes / यदि है, तो कृपया विवरण देवें:",
              "tooltip": "",
              "value": "",
              "type": "textarea",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "radio",
              "name": "radio",
              "label": "2.2 Has it been approved by your Board of Directors? / क्या यह आपके निदेशक मंडल द्वारा अनुमोदित किया गया है?",
              "tooltip": "",
              "value": "",
              "type": "radio",
              "required": true,
              "data": [
                {
                  "label": "Yes / हां",
                  "value": "1"
                },
                {
                  "label": "No / नहीं",
                  "value": "2"
                }
              ],
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "radio",
              "name": "radio",
              "label": "2.3 Has it been uploaded on your website? / क्या इसे कम्पनी की वेबसाईट पर दर्शाया गया है ?",
              "tooltip": "",
              "value": "",
              "type": "radio",
              "required": true,
              "data": [
                {
                  "label": "Yes / हां",
                  "value": "1"
                },
                {
                  "label": "No / नहीं",
                  "value": "2"
                }
              ],
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "radio",
              "name": "radio",
              "label": "2.4 Do you draw up a budget for your CSR activities? / क्या आप अपनी सामाजिक उत्तरदायित्व सम्बन्धी गतिविधियों के लिये बजट तैयार करते हैं ?",
              "tooltip": "",
              "value": "",
              "type": "radio",
              "required": true,
              "data": [
                {
                  "label": "Yes / हां",
                  "value": "1"
                },
                {
                  "label": "No / नहीं",
                  "value": "2"
                }
              ],
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "radio",
              "name": "radio",
              "label": "2.5 Do you conduct an audit of your CSR activities? / क्या आप अपनी सामाजिक उत्तरदायित्व सम्बन्धी गतिविधियों की ऑडिट करवाते हैं ?",
              "tooltip": "",
              "value": "",
              "type": "radio",
              "required": true,
              "data": [
                {
                  "label": "Yes / हां",
                  "value": "1"
                },
                {
                  "label": "No / नहीं",
                  "value": "2"
                }
              ],
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "radio",
              "name": "radio",
              "label": "2.6 Do you have a CSR committee with clearly defined roles and responsibilities? / क्या आपके संगठन में सामाजिक उत्तरदायित्व कमेटी है जो कि इस सम्बन्ध में भूमिका एवं जिम्मेदारियों का स्पष्ट निर्धारण करती है ?",
              "tooltip": "",
              "value": "",
              "type": "radio",
              "required": true,
              "data": [
                {
                  "label": "Yes / हां",
                  "value": "1"
                },
                {
                  "label": "No / नहीं",
                  "value": "2"
                }
              ],
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "area",
              "name": "area",
              "placeholder": "",
              "label": "2.6.1 What are the 3 most important criteria for including members on the CSR committee? / सामाजिक उत्तरदायित्व कमेटी में सदस्यों को सम्मिलित करने हेतु निर्धारित 3 प्रमुख मापदण्डों का उल्लेख करें:",
              "tooltip": "",
              "value": "",
              "type": "textarea",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "radio",
              "name": "radio",
              "label": "2.7 Does your CSR committee meet regularly? / क्या आपकी सामाजिक उत्तरदायित्व कमेटी की नियमित बैठक आयोजित की जाती है ?",
              "tooltip": "",
              "value": "",
              "type": "radio",
              "required": true,
              "data": [
                {
                  "label": "Yes / हां",
                  "value": "1"
                },
                {
                  "label": "No / नहीं",
                  "value": "2"
                }
              ],
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "radio",
              "name": "radio",
              "label": "2.8 Is the budget approved by the CSR committee? / क्या सीएसआर कमेटी द्वारा सामाजिक उत्तरदायित्व सम्बन्धी गतिविधियों के लिये बजट का अनुमोदन किया जाता है ?",
              "tooltip": "",
              "value": "",
              "type": "radio",
              "required": true,
              "data": [
                {
                  "label": "Yes / हां",
                  "value": "1"
                },
                {
                  "label": "No / नहीं",
                  "value": "2"
                }
              ],
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "radio",
              "name": "radio",
              "label": "2.9 Is the budget approved by the Board of Directors? / क्या इस बजट का कम्पनी के निदेशक मण्डल द्वारा अनुमोदन किया जाता है ?",
              "tooltip": "",
              "value": "",
              "type": "radio",
              "required": true,
              "data": [
                {
                  "label": "Yes / हां",
                  "value": "1"
                },
                {
                  "label": "No / नहीं",
                  "value": "2"
                }
              ],
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "area",
              "name": "area",
              "placeholder": "",
              "label": "2.10 How is the spend monitored against the budget monitored? / निर्धारित बजट के अनुसार व्यय की गई राशि की निगरानी किस प्रकार की जाती है ?",
              "tooltip": "",
              "value": "",
              "type": "textarea",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "radio",
              "name": "radio",
              "label": "2.11 Do you have a separate team responsible for running CSR activities? / क्या आपके यहां सामाजिक उत्तरदायित्व सम्बन्धी गतिविधियों के संचालन के लिये अलग से टीम है ?",
              "tooltip": "",
              "value": "",
              "type": "radio",
              "required": true,
              "data": [
                {
                  "label": "Yes / हां",
                  "value": "1"
                },
                {
                  "label": "No / नहीं",
                  "value": "2"
                }
              ],
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "radio",
              "name": "radio",
              "label": "2.12 Do you have a CSR committee with clearly defined roles and responsibilities? / क्या सीएसआर कमेटी उक्त सीएसआर टीम के लिये स्पष्ट रूप से जिम्मेदारी एवं टीम सदस्यों की भूमिका तय करती है ?",
              "tooltip": "",
              "value": "",
              "type": "radio",
              "required": true,
              "data": [
                {
                  "label": "Yes / हां",
                  "value": "1"
                },
                {
                  "label": "No / नहीं",
                  "value": "2"
                }
              ],
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "area",
              "name": "area",
              "placeholder": "",
              "label": "2.13 Why do you think your organisation should win this award? / आपको क्यों लगता है कि आपके संगठन को यह पुरस्कार जीतना चाहिए?",
              "tooltip": "",
              "value": "",
              "type": "textarea",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "",
              "label": "2.14 The name of the head of CSR / सामाजिक उत्तरदायित्व कमेटी के प्रमुख का नाम बतावें:",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "",
              "label": "2.15 Their position in the organisation hierarchy / संगठन के पदानुक्रम में उनकी स्थिति क्या है ?",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            }
          ]
        },
        {
          "title": "3. Strategy /",
          "description": "रणनीति",
          "state": "normal",
          "canEnter": true,
          "canExit": false,
          "controls": [
            {
              "id": "radio",
              "name": "radio",
              "label": "3.1 o you have long term strategic CSR goals? / क्या आपके संगठन के दीर्घकालीन सामाजिक उत्तरदायित्व सम्बन्धी लक्ष्य हैं ?",
              "tooltip": "",
              "value": "",
              "type": "radio",
              "required": true,
              "data": [
                {
                  "label": "Yes / हां",
                  "value": "1"
                },
                {
                  "label": "No / नहीं",
                  "value": "2"
                }
              ],
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "area",
              "name": "area",
              "placeholder": "",
              "label": "3.1.1 If yes, what are they? / यदि हैं, तो क्या-क्या हैं ?",
              "tooltip": "",
              "value": "",
              "type": "textarea",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "radio",
              "name": "radio",
              "label": "3.2 Do you conduct formal needs assessments and baseline studies to determine your CSR strategy? / क्या आप अपनी सामाजिक उत्तरदायित्व सम्बन्धी रणनीति निर्धारित करने के लिए औपचारिक जरूरतों का आकलन और आधारभूत अध्ययन करते हैं ?",
              "tooltip": "",
              "value": "",
              "type": "radio",
              "required": true,
              "data": [
                {
                  "label": "Yes / हां",
                  "value": "1"
                },
                {
                  "label": "No / नहीं",
                  "value": "2"
                }
              ],
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "radio",
              "name": "radio",
              "label": "3.3 Are the assessments conducted by a third party? / क्या यह आकलन किसी तीसरे पक्ष द्वारा किये जाते हैं ?",
              "tooltip": "",
              "value": "",
              "type": "radio",
              "required": true,
              "data": [
                {
                  "label": "Yes / हां",
                  "value": "1"
                },
                {
                  "label": "No / नहीं",
                  "value": "2"
                }
              ],
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "area",
              "name": "area",
              "placeholder": "",
              "label": "3.4 What is the duration between two sets of needs assessments or base-lining activities? / जरूरतों के आकलन करने एवं आधारभूत गतिविधियां संचालित करने के मध्य लगभग कितनी अवधि का अन्तर रहता है ?",
              "tooltip": "",
              "value": "",
              "type": "textarea",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "radio",
              "name": "radio",
              "label": "3.5 Are these goals supported by a year-on-year road map? / क्या निर्धारित लक्ष्यों को पूरा करने में सहायता हेतु प्रति वर्ष कोई दिशानिर्देष तय किये जाते हैं ?",
              "tooltip": "",
              "value": "",
              "type": "radio",
              "required": true,
              "data": [
                {
                  "label": "Yes / हां",
                  "value": "1"
                },
                {
                  "label": "No / नहीं",
                  "value": "2"
                }
              ],
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "table",
              "name": "table",
              "label": "3.6 Give a break-up of spends in last 3 years on you top three CSR programmes. (till FY 18-19) / पिछले तीन वर्षों की अवधि में (वित्तीय वर्ष 2018-19 तक) आपके द्वारा प्रमुख तीन सामाजिक उत्तरदायित्व सम्बन्धी गतिविधियों पर व्यय की गई राशि का विवरण देवें:",
              "tooltip": "",
              "value": "",
              "type": "table",
              "required": true,
              "rows": [
                [
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  }
                ]
              ],
              "columns": [
                {
                  "id": "label",
                  "name": "Column 1",
                  "label": "(Rupees)",
                  "type": "label"
                },
                {
                  "id": "label",
                  "label": "(Rupees)",
                  "name": "label",
                  "type": "label"
                },
                {
                  "id": "label",
                  "label": "(Rupees)",
                  "name": "label",
                  "type": "label"
                }
              ],
              "rowHead": [
                {
                  "name": "row 1"
                }
              ],
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "radio",
              "name": "radio",
              "label": "3.7 Is employee volunteering a part of your CSR strategy? / क्या आपके संगठन के कर्मचारी स्वेच्छा से सामाजिक उत्तरदायित्व सम्बन्धी गतिविधियों में अपना योगदान देते हैं ?",
              "tooltip": "",
              "value": "",
              "type": "radio",
              "required": true,
              "data": [
                {
                  "label": "Yes / हां",
                  "value": "1"
                },
                {
                  "label": "No / नहीं",
                  "value": "2"
                }
              ],
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "",
              "label": "3.8 If yes, how many employees have volunteered in the FY ending March 2019? / यदि हां तो दिनांक 31 मार्च 2019 को समाप्त हुए गत वित्तीय वर्ष 2018-19 के दौरान कुल कितने कर्मचारियों ने सामाजिक उत्तरदायित्व सम्बन्धी गतिविधियों में अपनी सेवाएं दी ?",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "area",
              "name": "area",
              "placeholder": "",
              "label": "3.9 How do you ensure the sustainability of your CSR programme? / आप अपने सामाजिक उत्तरदायित्व सम्बन्धी कार्यक्रमों का निरन्तर जारी रखने की प्रक्रिया को कैसे सुनिश्चित करते हैं ?",
              "tooltip": "",
              "value": "",
              "type": "textarea",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            }
          ]
        },
        {
          "title": "4. Stakeholder /",
          "description": "हितधारक",
          "state": "normal",
          "canEnter": true,
          "canExit": false,
          "controls": [
            {
              "id": "radio",
              "name": "radio",
              "label": "4.1 Is engaging stakeholders a part of your strategy? / क्या हितधारकों को सामाजिक उत्तरदायित्व की गतिविधियों में शामिल करना आपकी रणनीति का हिस्सा है ?",
              "tooltip": "",
              "value": "",
              "type": "radio",
              "required": true,
              "data": [
                {
                  "label": "Yes / हां",
                  "value": "1"
                },
                {
                  "label": "No / नहीं",
                  "value": "2"
                }
              ],
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "area",
              "name": "area",
              "placeholder": "",
              "label": "4.1.1 If yes, how do you engage them? / यदि है तो आप उन्हें कैसे सम्मिलित करते हैं ?",
              "tooltip": "",
              "value": "",
              "type": "textarea",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "radio",
              "name": "radio",
              "label": "4.2 Do you take feedback from the stakeholders and procedures to act on the feedback received? / क्या आप हितधारकों से फीडबैक प्राप्त करते हैं तथा हितधारकों द्वारा दिये गये फीडबैक पर कार्यवाही करने की आपके यहां पर प्रक्रिया है ?",
              "tooltip": "",
              "value": "",
              "type": "radio",
              "required": true,
              "data": [
                {
                  "label": "Yes / हां",
                  "value": "1"
                },
                {
                  "label": "No / नहीं",
                  "value": "2"
                }
              ],
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "area",
              "name": "area",
              "placeholder": "",
              "label": "4.2.1 If yes, describe them / यदि हां, तो विवरण दीजिये:",
              "tooltip": "",
              "value": "",
              "type": "textarea",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            }
          ]
        },
        {
          "title": "5. Monitoring and Evaluation /",
          "description": "जाचना और परखना",
          "state": "normal",
          "canEnter": true,
          "canExit": false,
          "controls": [
            {
              "id": "radio",
              "name": "radio",
              "label": "5.1 Do you define KPI's to monitor and evaluate the progress of the CSR projects? / क्या आप सामाजिक उत्तरदायित्व से जुडी परियोजनाओं की निगरानी और मूल्यांकन के लिए के.पी.आई. की सेवाएं प्राप्त करते हैं ?",
              "tooltip": "",
              "value": "",
              "type": "radio",
              "required": true,
              "data": [
                {
                  "label": "Yes / हां",
                  "value": "1"
                },
                {
                  "label": "No / नहीं",
                  "value": "2"
                }
              ],
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "radio",
              "name": "radio",
              "label": "5.2 Do you conduct periodic reviews to evaluate progress against defined KPIs? / क्या आप के.पी.आई. के दिशानिर्देशों के अनुरुप सामाजिक उत्तरदायित्व से जुडी परियोजनाओं की प्रगति का मूल्यांकन करने के लिये निष्चित समयावधि पर समीक्षा करते हैं ?",
              "tooltip": "",
              "value": "",
              "type": "radio",
              "required": true,
              "data": [
                {
                  "label": "Yes / हां",
                  "value": "1"
                },
                {
                  "label": "No / नहीं",
                  "value": "2"
                }
              ],
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "area",
              "name": "area",
              "placeholder": "",
              "label": "5.2.1 If yes, please give details / यदि हां, तो विवरण दीजिये",
              "tooltip": "",
              "value": "",
              "type": "textarea",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "radio",
              "name": "radio",
              "label": "5.3 Do you adopt a due diligence process before selecting implementation partners? / क्या आप सामाजिक उत्तरदायित्व परियोजनाओं का कार्यान्वयन करने के लिये साझेदारों का चयन करने से पहले निर्धारित प्रक्रिया को अपनाते हैं ?",
              "tooltip": "",
              "value": "",
              "type": "radio",
              "required": true,
              "data": [
                {
                  "label": "Yes / हां",
                  "value": "1"
                },
                {
                  "label": "No / नहीं",
                  "value": "2"
                }
              ],
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "area",
              "name": "area",
              "placeholder": "",
              "label": "5.3.1 If yes, please give details / यदि हां, तो विवरण दीजिये",
              "tooltip": "",
              "value": "",
              "type": "textarea",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            }
          ]
        },
        {
          "title": "6. Reporting and Projects /",
          "description": "रिपोर्टिंग और परियोजनाएं",
          "state": "normal",
          "canEnter": true,
          "canExit": false,
          "controls": [
            {
              "id": "radio",
              "name": "radio",
              "label": "6.1 In your annual report, do you disclose the number of meetings held and the attendance of the CSR committee? / अपनी वार्षिक रिपोर्ट में क्या आप सामाजिक उत्तरदायित्व सम्बन्धी बैठकों की संख्या एवं सीएसआर कमेटी के सदस्यों की उनमें उपस्थिति की संख्या का खुलासा करते हैं ?",
              "tooltip": "",
              "value": "",
              "type": "radio",
              "required": true,
              "data": [
                {
                  "label": "Yes / हां",
                  "value": "1"
                },
                {
                  "label": "No / नहीं",
                  "value": "2"
                }
              ],
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "label",
              "name": "label",
              "label": "Projects / परियोजनाएं",
              "tooltip": "",
              "type": "Label",
              "required": true,
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "label",
              "name": "label",
              "label": "Choose only one CSR Project you are running to showcase in this section. Answer all the following questions with reference to that project. If you do multiple projects, please select your strongest one. / इस अनुभाग में प्रदर्षित करने के लिये केवल एक परियोजना चुनें जो आप संचालित कर रहे हैं। उस परियोजना के संदर्भ में निम्नलिखित सभी प्रश्नों का उत्तर दें। यदि आप कई परियोजनाएँ संचालित कर रहे हैं, तो कृपया अपनी सबसे मजबूत परियोजना का चयन करें ।",
              "tooltip": "",
              "type": "Label",
              "required": true,
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "area",
              "name": "area",
              "placeholder": "",
              "label": "6.2 Project title / परियोजना का शीर्षक",
              "tooltip": "",
              "value": "",
              "type": "textarea",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "area",
              "name": "area",
              "placeholder": "",
              "label": "6.3 What are the goals of the project? / परियोजना के लक्ष्य क्या हैं ?",
              "tooltip": "",
              "value": "",
              "type": "textarea",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "area",
              "name": "area",
              "placeholder": "",
              "label": "6.4 What is the business case for the project? Why is it a good project for your company to be doing? / परियोजना का व्यावसायिक प्रकरण क्या है? यह आपकी कम्पनी द्वारा दान करने के लिये अच्छी परियोजना क्यों है ?",
              "tooltip": "",
              "value": "",
              "type": "textarea",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "area",
              "name": "area",
              "placeholder": "",
              "label": "6.5 Describe how the project runs / वर्णन करें कि यह परियोजना कैसे संचालित होती है?",
              "tooltip": "",
              "value": "",
              "type": "textarea",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "area",
              "name": "area",
              "placeholder": "",
              "label": "6.6 How is the community involved in the project? / परियोजना में समुदाय कैसे शामिल है ?",
              "tooltip": "",
              "value": "",
              "type": "textarea",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "area",
              "name": "area",
              "placeholder": "",
              "label": "6.7 What impact have you seen as a result of your project? / आपने अपनी परियोजना के परिणामस्वरूप क्या प्रभाव देखा है ?",
              "tooltip": "",
              "value": "",
              "type": "textarea",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "area",
              "name": "area",
              "placeholder": "",
              "label": "6.8 How have you measured the impact of the project against the goals you had set? / आपने अपने द्वारा निर्धारित लक्ष्यों के सन्दर्भ में परियोजना के प्रभाव को कैसे मापा है ?",
              "tooltip": "",
              "value": "",
              "type": "textarea",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "radio",
              "name": "radio",
              "label": "6.9 Is this measurement verified by an external party? / क्या यह माप किसी बाहरी पार्टी द्वारा सत्यापित है ?",
              "tooltip": "",
              "value": "",
              "type": "radio",
              "required": true,
              "data": [
                {
                  "label": "Yes / हां",
                  "value": "1"
                },
                {
                  "label": "No / नहीं",
                  "value": "2"
                }
              ],
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "area",
              "name": "area",
              "placeholder": "",
              "label": "6.9.1 If yes, please give details. / यदि हां, तो कृपया विवरण दीजिये",
              "tooltip": "",
              "value": "",
              "type": "textarea",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "",
              "label": "6.10 Number of direct beneficiaries / प्रत्यक्ष लाभार्थियों की संख्या",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "",
              "label": "6.11 Number of indirect beneficiaries / अप्रत्यक्ष लाभार्थियों की संख्या",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "",
              "label": "6.12 Direct expenditure on the project (this FY) / इस वित्तीय वर्ष के दौरान परियोजना पर प्रत्यक्ष व्यय",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "",
              "label": "6.13 Indirect expenditure on the project (this FY) / इस वित्तीय वर्ष के दौरान परियोजना पर अप्रत्यक्ष व्यय",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "",
              "label": "6.14 Please give details of anything that makes this project particularly innovative / कृपया इस परियोजना को विशेष रूप से अभिनव बनाने वाली किसी भी विषेशता का विवरण दें",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "radio",
              "name": "radio",
              "label": "6.15 Are you working with any external partners? / क्या आप इस परियोजना में अन्य बाहरी पार्टनर्स के साथ में काम कर रहे हैं ?",
              "tooltip": "",
              "value": "",
              "type": "radio",
              "required": true,
              "data": [
                {
                  "label": "Yes / हां",
                  "value": "1"
                },
                {
                  "label": "No / नहीं",
                  "value": "2"
                }
              ],
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "area",
              "name": "area",
              "placeholder": "",
              "label": "6.15.1 If yes, please give details. / यदि हां, तो कृपया विवरण देवें",
              "tooltip": "",
              "value": "",
              "type": "textarea",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "radio",
              "name": "radio",
              "label": "6.16 Are your employees involved in this project? / क्या आपके कर्मचारी इस परियोजना में शामिल हैं ?",
              "tooltip": "",
              "value": "",
              "type": "radio",
              "required": true,
              "data": [
                {
                  "label": "Yes / हां",
                  "value": "1"
                },
                {
                  "label": "No / नहीं",
                  "value": "2"
                }
              ],
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "area",
              "name": "area",
              "placeholder": "",
              "label": "6.16.1 If yes, please explain how they are involved, and what their contribution is. / यदि हां, तो कृपया विवरण देवें कृपया बताएं कि वे इस परियोजना में कैसे शामिल हैं और उनका योगदान क्या है ?",
              "tooltip": "",
              "value": "",
              "type": "textarea",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            }
          ]
        },
        {
          "title": "7. Auditor and Documents /",
          "description": "ऑडिटर और दस्तावेज",
          "state": "normal",
          "canEnter": true,
          "canExit": false,
          "controls": [
            {
              "id": "text",
              "name": "text",
              "placeholder": "",
              "label": "7.1 Name / नाम",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "",
              "label": "7.2 Contact number / सम्पर्क नम्बर",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "area",
              "name": "area",
              "placeholder": "",
              "label": "7.3 Address / पता",
              "tooltip": "",
              "value": "",
              "type": "textarea",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "dropdown",
              "name": "dropdown",
              "label": "7.3.1 State / राज्य",
              "tooltip": "",
              "value": "",
              "placeholder": "Please select",
              "type": "dropdown",
              "required": true,
              "data": [
                {
                  "label": "Rajasthan",
                  "value": "1"
                },
                {
                  "label": "Goa",
                  "value": "2"
                },
                {
                  "label": "Haryana",
                  "value": "Another Label2"
                },
                {
                  "label": "Punjab",
                  "value": "Another Label3"
                },
                {
                  "label": "Jammu & Kashmir",
                  "value": "Another Label4"
                }
              ],
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "dropdown",
              "name": "dropdown",
              "label": "7.3.2 District / जिला",
              "tooltip": "",
              "value": "",
              "placeholder": "Please select",
              "type": "dropdown",
              "required": true,
              "data": [
                {
                  "label": "Udaipur",
                  "value": "1"
                },
                {
                  "label": "Sikar",
                  "value": "2"
                },
                {
                  "label": "Churu",
                  "value": "Another Label2"
                },
                {
                  "label": "Jaipur",
                  "value": "Another Label3"
                },
                {
                  "label": "Kota",
                  "value": "Another Label4"
                }
              ],
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "",
              "label": "7.3.3 Pincode / पिनकोड",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "checkbox",
              "name": "checkbox",
              "label": "7.4 Documents submitted – Please check financial statements for / संलग्न दस्तावेज - कृपया निम्नानुसार वर्षों का वित्तीय विवरण संलग्न करें:",
              "tooltip": "",
              "value": [],
              "type": "checkbox",
              "required": true,
              "data": [
                {
                  "label": "FY 18-19 / वित्तीय वर्ष 18-19",
                  "value": "Test1"
                },
                {
                  "label": "FY 19-20 / वित्तीय वर्ष 19-20",
                  "value": "Test2"
                },
                {
                  "label": "FY 20-21 / वित्तीय वर्ष 20-21",
                  "value": "Another Label2"
                }
              ],
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "label",
              "name": "label",
              "label": "Documents that are mandatory / उन दस्तावेजों की सूची, जो कि आवश्यक हैं:",
              "tooltip": "",
              "type": "Label",
              "required": true,
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "file",
              "name": "file",
              "label": "7.5 Audited financial statements of FY 20-21 / वित्तीय वर्ष 20-21 के लेखा परीक्षित वित्तीय विवरण",
              "tooltip": "",
              "type": "file",
              "value": "",
              "required": true,
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "file",
              "name": "file",
              "label": "7.6 Audited financial statements of FY 19-20 / वित्तीय वर्ष 19-20 के लेखा परीक्षित वित्तीय विवरण",
              "tooltip": "",
              "type": "file",
              "value": "",
              "required": true,
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "file",
              "name": "file",
              "label": "7.7 Audited financial statements of FY 18-19 / वित्तीय वर्ष 18-19 के लेखा परीक्षित वित्तीय विवरण",
              "tooltip": "",
              "type": "file",
              "value": "",
              "required": true,
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "file",
              "name": "file",
              "label": "7.8 Copy of any of these: Company incorporation certificate, PAN, Udyog Aadhar / इनमें से किसी एक की प्रति कम्पनी का निगमन प्रमाणपत्र, स्थाई लेखा संख्या, उद्योग आधार",
              "tooltip": "",
              "type": "file",
              "value": "",
              "required": true,
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "label",
              "name": "label",
              "label": "Documents will add weight to your application and are optional / अन्य वैकल्पिक दस्तावेज जिनसे आपके आवेदन को बल मिले:",
              "tooltip": "",
              "type": "Label",
              "required": true,
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "file",
              "name": "file",
              "label": "7.9 CSR budget and report / सामाजिक सरोकार गतिविधियों का बजट एवं विवरण",
              "tooltip": "",
              "type": "file",
              "value": "",
              "required": true,
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "file",
              "name": "file",
              "label": "7.10 Copy of award certificates related to your CSR work / आपके सामाजिक उत्तरदायित्व से सम्बन्धित पुरस्कारों / प्रशंसा पत्रों की प्रतिलिपियां",
              "tooltip": "",
              "type": "file",
              "value": "",
              "required": true,
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "label",
              "name": "label",
              "label": "Please paste links to media coverage eg. News Paper Articles / Blog Posts / Videos. You may also upload files on Google Drive folder and share the link to the folder",
              "tooltip": "",
              "type": "Label",
              "required": true,
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "area",
              "name": "area",
              "placeholder": "",
              "label": "7.11 Copies of media coverage received / मीडिया में प्रकाशित समाचारों की प्रतिलिपियां:",
              "tooltip": "",
              "value": "",
              "type": "textarea",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "file",
              "name": "file",
              "label": "7.12 Copies of internal and external quality audit reports / आन्तरिक एवं बाहरी गुणवत्ता ऑडिट रिपोर्ट की प्रतिलिपियां",
              "tooltip": "",
              "type": "file",
              "value": "",
              "required": true,
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "file",
              "name": "file",
              "label": "7.13 Appreciation letters from key clients / प्रमुख ग्राहकों से प्राप्त प्रशंसा पत्र",
              "tooltip": "",
              "type": "file",
              "value": "",
              "required": true,
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "label",
              "name": "label",
              "label": "Any additional documents can be sent on e-mail at ucciawards@gmail.com.",
              "tooltip": "",
              "type": "Label",
              "required": true,
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "label",
              "name": "label",
              "label": "Declaration / घोषणा",
              "tooltip": "",
              "type": "Label",
              "required": true,
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "label",
              "name": "label",
              "label": "7.14 We understand that we have shared this information in confidence and exclusively for the purpose of the Excellence Awards, and UCCI may use the information for its goals in anonymized or aggregated manner only without identifying any person or business, except if required by law or any relevant regulations. We understand and agree that UCCI would take reasonable steps to ensure data confidentiality, and would not be liable for any expenses, costs or damages in this regard. / हम समझते हैं कि हमने इस जानकारी को गोपनीयता के आश्वासन पर और विशेष रूप से उत्कृष्टता पुरस्कारों के उद्देश्य के लिए साझा किया है, और यूसीसीआई अपने लक्ष्यों के लिए जानकारी का उपयोग केवल किसी व्यक्ति या व्यवसाय की पहचान का खुलासा किये बिना गुमनाम रूप से या सामूहिक तरीके से कर सकता है, सिवाय इसके कि कानून या किसी प्रासंगिक विनियमों के प्रावधानों में आवश्यक हो । हम समझते हैं और सहमत हैं कि यूसीसीआई डेटा गोपनीयता सुनिश्चित करने के लिए उचित कदम उठाएगा, और इस संबंध में हुए किसी भी खर्च, लागत या नुकसान के लिए उत्तरदायी नहीं होगा।।",
              "tooltip": "",
              "type": "Label",
              "required": true,
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "",
              "label": "7.14.1 Name of respondent / आवेदनकर्ता का नाम",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "",
              "label": "7.14.2 Designation / पद",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "",
              "label": "7.14.3 Email / ई-मेल",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "",
              "label": "7.14.4 Date / दिनांक",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "file",
              "name": "file",
              "label": "7.14.5 Signature / हस्ताक्षर",
              "tooltip": "",
              "type": "file",
              "value": "",
              "required": true,
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "file",
              "name": "file",
              "label": "7.14.6 Firm / Company Stamp / कम्पनी / फर्म की छाप",
              "tooltip": "",
              "type": "file",
              "value": "",
              "required": true,
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "area",
              "name": "area",
              "placeholder": "",
              "label": "7.14.7 Remarks/ राय",
              "tooltip": "",
              "value": "",
              "type": "textarea",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            }
          ]
        }
      ];
    }

    else if (slug.slug == 'servicesForm') {
      this.sections = [
        {
          "title": "1. Basic information /",
          "description": "मूलभूत जानकारी",
          "state": "normal",
          "canEnter": true,
          "canExit": false,
          "controls": [
            {
              "id": "text",
              "name": "text",
              "placeholder": "",
              "label": "1.1 Registered name of the business / व्यवसाय का पंजीकृत नाम:",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "radio",
              "name": "radio",
              "label": "1.2 Type of company / कम्पनी का प्रकार:",
              "tooltip": "",
              "value": "",
              "type": "radio",
              "required": true,
              "data": [
                {
                  "label": "Proprietorship / प्रोपराइटरशिप",
                  "value": "1"
                },
                {
                  "label": "Partnership / पार्टनरशिप",
                  "value": "2"
                },
                {
                  "label": "Private Limited / प्राईवेट लिमिटेड",
                  "value": "Another Label2"
                },
                {
                  "label": "Public Limited / पब्लिक लिमिटेड",
                  "value": "Another Label3"
                },
                {
                  "label": "Limited Liability Partnership / लिमिटेड लाईबिलिटी पार्टनरशिप",
                  "value": "Another Label4"
                },
                {
                  "label": "Registered society/Trust/AOP / पंजीकृत सोसायटी / ट्रस्ट / व्यक्तियों की एसोसिएशन",
                  "value": "Another Label5"
                }
              ],
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "",
              "label": "1.3 GST number (e.g. 08AABCX2183V1Z0) / जी.एस.टी. संख्या",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "radio",
              "name": "radio",
              "label": "1.4 Composition scheme / कम्पोजीशन स्कीम:",
              "tooltip": "",
              "value": "",
              "type": "radio",
              "required": true,
              "data": [
                {
                  "label": "Yes / हां",
                  "value": "1"
                },
                {
                  "label": "No / नहीं",
                  "value": "2"
                }
              ],
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "area",
              "name": "area",
              "placeholder": "",
              "label": "1.5 Address of registered office / पंजीकृत कार्यालय का पता:",
              "tooltip": "",
              "value": "",
              "type": "textarea",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "dropdown",
              "name": "dropdown",
              "label": "1.5.1 State / राज्य",
              "tooltip": "",
              "value": "",
              "placeholder": "Select",
              "type": "dropdown",
              "required": true,
              "data": [
                {
                  "label": "Arunachal Pradesh",
                  "value": "1"
                },
                {
                  "label": "Bihar",
                  "value": "2"
                },
                {
                  "label": "Gujarat",
                  "value": "Another Label2"
                },
                {
                  "label": "Haryana",
                  "value": "Another Label3"
                },
                {
                  "label": "Jammu & Kashmir",
                  "value": "Another Label4"
                },
                {
                  "label": "Rajasthan",
                  "value": "Another Label5"
                },
                {
                  "label": "Tamil Nadu",
                  "value": "Another Label6"
                },
                {
                  "label": "Uttar Pradesh",
                  "value": "Another Label7"
                }
              ],
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "dropdown",
              "name": "dropdown",
              "label": "1.5.2 City / शहर",
              "tooltip": "",
              "value": "",
              "placeholder": "Select",
              "type": "dropdown",
              "required": true,
              "data": [
                {
                  "label": "Bhilwara",
                  "value": "1"
                },
                {
                  "label": "Bikaner",
                  "value": "2"
                },
                {
                  "label": "Chittorgarh",
                  "value": "Another Label2"
                },
                {
                  "label": "Dausa",
                  "value": "Another Label3"
                },
                {
                  "label": "Dungarpur",
                  "value": "Another Label4"
                },
                {
                  "label": "Udaipur",
                  "value": "Another Label5"
                }
              ],
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "",
              "label": "1.5.3 Pincode / पिन कोड",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "dropdown",
              "name": "dropdown",
              "label": "1.6 Year of commencement of service sector operations / सेवा क्षेत्र की गतिविधियां शुरु करने का वर्ष:",
              "tooltip": "",
              "value": "",
              "placeholder": "",
              "type": "dropdown",
              "required": true,
              "data": [
                {
                  "label": "2022",
                  "value": "1"
                },
                {
                  "label": "2021",
                  "value": "2"
                },
                {
                  "label": "2020",
                  "value": "Another Label2"
                },
                {
                  "label": "2019",
                  "value": "Another Label3"
                },
                {
                  "label": "2018",
                  "value": "Another Label4"
                },
                {
                  "label": "2017",
                  "value": "Another Label5"
                },
                {
                  "label": "2016",
                  "value": "Another Label6"
                },
                {
                  "label": "2015",
                  "value": "Another Label7"
                }
              ],
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "",
              "label": "1.7 Website (http://example.com) / वेबसाईट",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "",
              "label": "1.8 Number of service sector units / कुल सेवा क्षेत्र इकाइयों की संख्या:",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "label",
              "name": "label",
              "label": "1.9 Location of service sector unit(s) / सेवा क्षेत्र इकाइयों का स्थान:",
              "tooltip": "",
              "type": "Label",
              "required": true,
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "dropdown",
              "name": "dropdown",
              "label": "1.9.1.1 State / राज्य",
              "tooltip": "",
              "value": "",
              "placeholder": "Please select",
              "type": "dropdown",
              "required": true,
              "data": [
                {
                  "label": "Arunachal Pradesh",
                  "value": "1"
                },
                {
                  "label": "Goa",
                  "value": "2"
                },
                {
                  "label": "Gujarat",
                  "value": "Another Label2"
                },
                {
                  "label": "Haryana",
                  "value": "Another Label3"
                },
                {
                  "label": "Himachal Pradesh",
                  "value": "Another Label4"
                }
              ],
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "dropdown",
              "name": "dropdown",
              "label": "1.9.1.2 City / शहर",
              "tooltip": "",
              "value": "",
              "placeholder": "Please select",
              "type": "dropdown",
              "required": true,
              "data": [
                {
                  "label": "Banswara",
                  "value": "1"
                },
                {
                  "label": "Barmer",
                  "value": "2"
                },
                {
                  "label": "Alwar",
                  "value": "Another Label2"
                },
                {
                  "label": "Bhilwara",
                  "value": "Another Label3"
                },
                {
                  "label": "Udaipur",
                  "value": "Another Label4"
                }
              ],
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "",
              "label": "1.9.1.3 Location / स्थान",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "dropdown",
              "name": "dropdown",
              "label": "1.9.2.1 State / राज्य",
              "tooltip": "",
              "value": "",
              "placeholder": "Please select",
              "type": "dropdown",
              "required": true,
              "data": [
                {
                  "label": "Goa",
                  "value": "1"
                },
                {
                  "label": "Rajsathan",
                  "value": "2"
                },
                {
                  "label": "Punjab",
                  "value": "Another Label2"
                },
                {
                  "label": "Haryana",
                  "value": "Another Label3"
                },
                {
                  "label": "Jammu & Kashmir",
                  "value": "Another Label4"
                }
              ],
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "dropdown",
              "name": "dropdown",
              "label": "1.9.2.2 City / शहर",
              "tooltip": "",
              "value": "",
              "placeholder": "Please select",
              "type": "dropdown",
              "required": true,
              "data": [
                {
                  "label": "Jaipur",
                  "value": "1"
                },
                {
                  "label": "Udaipur",
                  "value": "2"
                },
                {
                  "label": "Bundi",
                  "value": "Another Label2"
                },
                {
                  "label": "Dausa",
                  "value": "Another Label3"
                },
                {
                  "label": "Ajmer",
                  "value": "Another Label4"
                }
              ],
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "",
              "label": "1.9.2.3 Location / स्थान",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "dropdown",
              "name": "dropdown",
              "label": "1.9.3.1 State / राज्य",
              "tooltip": "",
              "value": "",
              "placeholder": "Please select",
              "type": "dropdown",
              "required": true,
              "data": [
                {
                  "label": "Rajasthan",
                  "value": "1"
                },
                {
                  "label": "Punjab",
                  "value": "2"
                },
                {
                  "label": "Goa",
                  "value": "Another Label2"
                },
                {
                  "label": "Haryana",
                  "value": "Another Label3"
                },
                {
                  "label": "Jammu & kashmir",
                  "value": "Another Label4"
                }
              ],
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "dropdown",
              "name": "dropdown",
              "label": "1.9.3.2 City / शहर",
              "tooltip": "",
              "value": "",
              "placeholder": "Please select",
              "type": "dropdown",
              "required": true,
              "data": [
                {
                  "label": "Udaipur",
                  "value": "1"
                },
                {
                  "label": "Sikar",
                  "value": "2"
                },
                {
                  "label": "Jaipur",
                  "value": "Another Label2"
                },
                {
                  "label": "Jodhpur",
                  "value": "Another Label3"
                },
                {
                  "label": "Ajmer",
                  "value": "Another Label4"
                }
              ],
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": " ",
              "label": "1.9.3.3 Location / स्थान",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "label",
              "name": "label",
              "label": "1.10 Details of two key promoters ( covering more than majority (67%) of the shareholding.) or partners or directors / कम्पनी के दो प्रमुख प्रमोटर अथवा पार्टनर अथवा निदेशकों के बारे में जानकारी:",
              "tooltip": "",
              "type": "Label",
              "required": true,
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "",
              "label": "1.10.1.1 Name / नाम",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "",
              "label": "1.10.1.2 Designation / पद",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "",
              "label": "1.10.1.3 Email id / ई-मेल आईडी",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "",
              "label": "1.10.1.4 Mobile / मोबाईल नम्बर",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "",
              "label": "1.10.2.1 Name / नाम",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "",
              "label": "1.10.2.2 Designation / पद",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "",
              "label": "1.10.2.3 Email id / ई-मेल आईडी",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "",
              "label": "1.10.2.4 Mobile / मोबाईल नम्बर",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "label",
              "name": "label",
              "label": "1.11 Details of Key Contact for Communication/ मुख्य संपर्क का विवरण:",
              "tooltip": "",
              "type": "Label",
              "required": true,
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "",
              "label": "1.11.1 Name / नाम",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "",
              "label": "1.11.2 Designation / पद",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "",
              "label": "1.11.3 Email id / ई-मेल आईडी",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "",
              "label": "1.11.4 Mobile / मोबाईल नम्बर",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            }
          ]
        },
        {
          "title": "2. Decision making /",
          "description": "नीतिगत निर्णय प्रक्रियाएँ",
          "state": "normal",
          "canEnter": true,
          "canExit": false,
          "controls": [
            {
              "id": "label",
              "name": "label",
              "label": "Vision Statement / कंपनी का दर्शन:",
              "tooltip": "",
              "type": "Label",
              "required": true,
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "area",
              "name": "area",
              "placeholder": "",
              "label": "2.1 Please describe how do you communicate your company’s vision to your employees and stakeholders / आपकी कंपनी ने संगठन के भीतर कौन-से माध्यम द्वारा अपने विजन को स्पष्ट किया है",
              "tooltip": "",
              "value": "",
              "type": "textarea",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "area",
              "name": "area",
              "placeholder": "",
              "label": "2.2 What is your vision statement? / आपका विजन स्टेटमेंट क्या है?",
              "tooltip": "",
              "value": "",
              "type": "textarea",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "area",
              "name": "area",
              "placeholder": "",
              "label": "2.3 What is your mission statement? / आपका मिशन स्टेटमेंट क्या है?",
              "tooltip": "",
              "value": "",
              "type": "textarea",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "radio",
              "name": "radio",
              "label": "2.4 Do you set timelines for achieving the company's goals and objectives? क्या आप कंपनी के लक्ष्यों और उद्देश्यों को प्राप्त करने के लिए एक समय सीमा निर्धारित करते हैं?",
              "tooltip": "",
              "value": "",
              "type": "radio",
              "required": true,
              "data": [
                {
                  "label": "Yes / हां",
                  "value": "1"
                },
                {
                  "label": "No / नहीं",
                  "value": "2"
                }
              ],
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "radio",
              "name": "radio",
              "label": "2.5 Do employees understand the purpose and the objectives (measurable) of the organisation? क्या कर्मचारी संगठन के उद्देश्यों और लक्ष्यों को समझते हैं ?",
              "tooltip": "",
              "value": "",
              "type": "radio",
              "required": true,
              "data": [
                {
                  "label": "Yes / हां",
                  "value": "1"
                },
                {
                  "label": "No / नहीं",
                  "value": "2"
                }
              ],
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "radio",
              "name": "radio",
              "label": "2.6 Do you assign each objective to some responsible person and outline his/her role and responsibilities? क्या आप प्रत्येक कार्य को किसी जिम्मेदार व्यक्ति को सौंपते हैं और उसकी भूमिका और जिम्मेदारियों को रेखांकित करते हैं?",
              "tooltip": "",
              "value": "",
              "type": "radio",
              "required": true,
              "data": [
                {
                  "label": "Yes / हां",
                  "value": "1"
                },
                {
                  "label": "No / नहीं",
                  "value": "2"
                }
              ],
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "area",
              "name": "area",
              "placeholder": "",
              "label": "2.7 Why do you think your organisation is the best and should be selected to win this award?/ आपको क्यों लगता है कि इस पुरस्कार को जीतने के लिए आपका संगठन सर्वथा श्रेष्ठ है?",
              "tooltip": "",
              "value": "",
              "type": "textarea",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "area",
              "name": "area",
              "placeholder": "",
              "label": "2.8 Does the company have any management system certification (ISO 9001/CMMi/ etc.)? Please list them? / क्या कंपनी के पास कोई प्रबंधन प्रणाली का प्रमाणन (आईएसओ 9001, सीएमएमआई इत्यादि) है? कृपया उन्हें सूचीबद्ध करें।",
              "tooltip": "",
              "value": "",
              "type": "textarea",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "area",
              "name": "area",
              "placeholder": "",
              "label": "2.9 Describe your organization’s strategic planning process viz., key activities and their frequency and participants in those? / आपके व्यवसाय सम्बन्धी मध्यम-अवधि नीतिगत कार्य योजना, व उसे तय करने की प्रक्रिया और उनकी पुनः निरिक्षण की योजना का वर्णन करें ।",
              "tooltip": "",
              "value": "",
              "type": "textarea",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "label",
              "name": "label",
              "label": "Diversity of Management Team / कार्यकारी टीम की विविधता:",
              "tooltip": "",
              "type": "Label",
              "required": true,
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "radio",
              "name": "radio",
              "label": "2.10 Does your company favour diversity in the executive team? / क्या आपकी कम्पनी कार्यकारी टीम में विविधता को प्रोत्साहन/बढावा देती है?",
              "tooltip": "",
              "value": "",
              "type": "radio",
              "required": true,
              "data": [
                {
                  "label": "Yes / हां",
                  "value": "1"
                },
                {
                  "label": "No / नहीं",
                  "value": "2"
                }
              ],
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "label",
              "name": "label",
              "label": "2.11 Please list top ten decision making persons in the company (CEO, CFO, VP , Directors/Partners/Owners—who are involved in the business activities etc.) / कृपया कंपनी में निर्णय लेने वाले प्रमुख दस व्यक्तियों को सूचीबद्ध करें (सीईओ, सीएफओ, वीपी,निदेशक/साझेदार/मालिक-जो व्यावसायिक गतिविधियों में शामिल हैं आदि)",
              "tooltip": "",
              "type": "Label",
              "required": true,
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "table",
              "name": "table",
              "label": "Table",
              "tooltip": "",
              "value": "",
              "type": "table",
              "required": true,
              "rows": [
                [
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "dropdown",
                    "name": "dropdown",
                    "label": "",
                    "tooltip": "",
                    "value": "",
                    "placeholder": "Please select",
                    "type": "dropdown",
                    "required": true,
                    "data": [
                      {
                        "label": "Technical or Engineering, Business Management, CA",
                        "value": "1"
                      },
                      {
                        "label": "PhD, MS, MTech, ME ",
                        "value": "2"
                      },
                      {
                        "label": "College or vocational training",
                        "value": "Another Label2"
                      },
                      {
                        "label": "Others",
                        "value": "Another Label3"
                      }
                    ],
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "dropdown",
                    "name": "dropdown",
                    "label": "",
                    "tooltip": "",
                    "value": "",
                    "placeholder": "Please select",
                    "type": "dropdown",
                    "required": true,
                    "data": [
                      {
                        "label": "Yes / हां",
                        "value": "1"
                      },
                      {
                        "label": "No / नहीं",
                        "value": "2"
                      }
                    ],
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "dropdown",
                    "name": "dropdown",
                    "label": "",
                    "tooltip": "",
                    "value": "",
                    "placeholder": "Please select",
                    "type": "dropdown",
                    "required": true,
                    "data": [
                      {
                        "label": "Female / महिला",
                        "value": "1"
                      },
                      {
                        "label": "Male / पुरुष ",
                        "value": "2"
                      },
                      {
                        "label": "Other / अन्य",
                        "value": "Another Label2"
                      }
                    ],
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  }
                ],
                [
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "dropdown",
                    "name": "dropdown",
                    "label": "",
                    "tooltip": "",
                    "value": "",
                    "placeholder": "Please select",
                    "type": "dropdown",
                    "required": true,
                    "data": [
                      {
                        "label": "Technical or Engineering, Business Management, CA",
                        "value": "1"
                      },
                      {
                        "label": "PhD, MS, MTech, ME",
                        "value": "2"
                      },
                      {
                        "label": "College or vocational training",
                        "value": "Another Label2"
                      },
                      {
                        "label": "Others",
                        "value": "Another Label3"
                      }
                    ],
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "dropdown",
                    "name": "dropdown",
                    "label": "",
                    "tooltip": "",
                    "value": "",
                    "placeholder": "Please select",
                    "type": "dropdown",
                    "required": true,
                    "data": [
                      {
                        "label": "Yes / हां",
                        "value": "1"
                      },
                      {
                        "label": "No / नहीं",
                        "value": "2"
                      }
                    ],
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "dropdown",
                    "name": "dropdown",
                    "label": "",
                    "tooltip": "",
                    "value": "",
                    "placeholder": "Please select",
                    "type": "dropdown",
                    "required": true,
                    "data": [
                      {
                        "label": "Female / महिला ",
                        "value": "1"
                      },
                      {
                        "label": "Male / पुरुष ",
                        "value": "2"
                      },
                      {
                        "label": "Other / अन्य ",
                        "value": "Another Label2"
                      }
                    ],
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  }
                ],
                [
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "dropdown",
                    "name": "dropdown",
                    "label": "",
                    "tooltip": "",
                    "value": "",
                    "placeholder": "Please select",
                    "type": "dropdown",
                    "required": true,
                    "data": [
                      {
                        "label": "Technical or Engineering, Business Management, CA",
                        "value": "1"
                      },
                      {
                        "label": "PhD, MS, MTech, ME",
                        "value": "2"
                      },
                      {
                        "label": "College or vocational training",
                        "value": "Another Label2"
                      },
                      {
                        "label": "Others",
                        "value": "Another Label3"
                      }
                    ],
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "dropdown",
                    "name": "dropdown",
                    "label": "",
                    "tooltip": "",
                    "value": "",
                    "placeholder": "Please select",
                    "type": "dropdown",
                    "required": true,
                    "data": [
                      {
                        "label": "Yes / हां",
                        "value": "1"
                      },
                      {
                        "label": "No / नहीं",
                        "value": "2"
                      }
                    ],
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "dropdown",
                    "name": "dropdown",
                    "label": "",
                    "tooltip": "",
                    "value": "",
                    "placeholder": "Please select",
                    "type": "dropdown",
                    "required": true,
                    "data": [
                      {
                        "label": "Female / महिला ",
                        "value": "1"
                      },
                      {
                        "label": "Male / पुरुष ",
                        "value": "2"
                      },
                      {
                        "label": "Other / अन्य",
                        "value": "Another Label2"
                      }
                    ],
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  }
                ],
                [
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "dropdown",
                    "name": "dropdown",
                    "label": "",
                    "tooltip": "",
                    "value": "",
                    "placeholder": "Please select",
                    "type": "dropdown",
                    "required": true,
                    "data": [
                      {
                        "label": "Technical or Engineering, Business Management, CA",
                        "value": "1"
                      },
                      {
                        "label": "PhD, MS, MTech, ME",
                        "value": "2"
                      },
                      {
                        "label": "College or vocational training",
                        "value": "Another Label2"
                      },
                      {
                        "label": "Others",
                        "value": "Another Label3"
                      }
                    ],
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "dropdown",
                    "name": "dropdown",
                    "label": "",
                    "tooltip": "",
                    "value": "",
                    "placeholder": "Please select",
                    "type": "dropdown",
                    "required": true,
                    "data": [
                      {
                        "label": "Yes / हां",
                        "value": "1"
                      },
                      {
                        "label": "No / नहीं",
                        "value": "2"
                      }
                    ],
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "dropdown",
                    "name": "dropdown",
                    "label": "",
                    "tooltip": "",
                    "value": "",
                    "placeholder": "Please select",
                    "type": "dropdown",
                    "required": true,
                    "data": [
                      {
                        "label": "Female / महिला ",
                        "value": "1"
                      },
                      {
                        "label": "Male / पुरुष ",
                        "value": "2"
                      },
                      {
                        "label": "Other / अन्य",
                        "value": "Another Label2"
                      }
                    ],
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  }
                ],
                [
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "dropdown",
                    "name": "dropdown",
                    "label": "",
                    "tooltip": "",
                    "value": "",
                    "placeholder": "Please select",
                    "type": "dropdown",
                    "required": true,
                    "data": [
                      {
                        "label": "Technical or Engineering, Business Management, CA",
                        "value": "1"
                      },
                      {
                        "label": "PhD, MS, MTech, ME",
                        "value": "2"
                      },
                      {
                        "label": "College or vocational training",
                        "value": "Another Label2"
                      },
                      {
                        "label": "Others",
                        "value": "Another Label3"
                      }
                    ],
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "dropdown",
                    "name": "dropdown",
                    "label": "",
                    "tooltip": "",
                    "value": "",
                    "placeholder": "Please select",
                    "type": "dropdown",
                    "required": true,
                    "data": [
                      {
                        "label": "Yes / हां",
                        "value": "1"
                      },
                      {
                        "label": "No / नहीं",
                        "value": "2"
                      }
                    ],
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "dropdown",
                    "name": "dropdown",
                    "label": "",
                    "tooltip": "",
                    "value": "",
                    "placeholder": "Please select",
                    "type": "dropdown",
                    "required": true,
                    "data": [
                      {
                        "label": "Female / महिला ",
                        "value": "1"
                      },
                      {
                        "label": "Male / पुरुष ",
                        "value": "2"
                      },
                      {
                        "label": "Other / अन्य",
                        "value": "Another Label2"
                      }
                    ],
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  }
                ],
                [
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "dropdown",
                    "name": "dropdown",
                    "label": "",
                    "tooltip": "",
                    "value": "",
                    "placeholder": "Please select",
                    "type": "dropdown",
                    "required": true,
                    "data": [
                      {
                        "label": "Technical or Engineering, Business Management, CA",
                        "value": "1"
                      },
                      {
                        "label": "PhD, MS, MTech, ME",
                        "value": "2"
                      },
                      {
                        "label": "College or vocational training",
                        "value": "Another Label2"
                      },
                      {
                        "label": "Others",
                        "value": "Another Label3"
                      }
                    ],
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "dropdown",
                    "name": "dropdown",
                    "label": "",
                    "tooltip": "",
                    "value": "",
                    "placeholder": "Please select",
                    "type": "dropdown",
                    "required": true,
                    "data": [
                      {
                        "label": "Yes / हां",
                        "value": "1"
                      },
                      {
                        "label": "No / नहीं",
                        "value": "2"
                      }
                    ],
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "dropdown",
                    "name": "dropdown",
                    "label": "",
                    "tooltip": "",
                    "value": "",
                    "placeholder": "Please select",
                    "type": "dropdown",
                    "required": true,
                    "data": [
                      {
                        "label": "Female / महिला ",
                        "value": "1"
                      },
                      {
                        "label": "Male / पुरुष ",
                        "value": "2"
                      },
                      {
                        "label": "Other / अन्य",
                        "value": "Another Label2"
                      }
                    ],
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  }
                ],
                [
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "dropdown",
                    "name": "dropdown",
                    "label": "",
                    "tooltip": "",
                    "value": "",
                    "placeholder": "Please select",
                    "type": "dropdown",
                    "required": true,
                    "data": [
                      {
                        "label": "Technical or Engineering, Business Management, CA",
                        "value": "1"
                      },
                      {
                        "label": "PhD, MS, MTech, ME",
                        "value": "2"
                      },
                      {
                        "label": "College or vocational training",
                        "value": "Another Label2"
                      },
                      {
                        "label": "Others",
                        "value": "Another Label3"
                      }
                    ],
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "dropdown",
                    "name": "dropdown",
                    "label": "",
                    "tooltip": "",
                    "value": "",
                    "placeholder": "Please select",
                    "type": "dropdown",
                    "required": true,
                    "data": [
                      {
                        "label": "Yes / हां",
                        "value": "1"
                      },
                      {
                        "label": "No / नहीं",
                        "value": "2"
                      }
                    ],
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "dropdown",
                    "name": "dropdown",
                    "label": "",
                    "tooltip": "",
                    "value": "",
                    "placeholder": "Please select",
                    "type": "dropdown",
                    "required": true,
                    "data": [
                      {
                        "label": "Female / महिला ",
                        "value": "1"
                      },
                      {
                        "label": "Male / पुरुष ",
                        "value": "2"
                      },
                      {
                        "label": "Other / अन्य",
                        "value": "Another Label2"
                      }
                    ],
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  }
                ],
                [
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "dropdown",
                    "name": "dropdown",
                    "label": "",
                    "tooltip": "",
                    "value": "",
                    "placeholder": "Please select",
                    "type": "dropdown",
                    "required": true,
                    "data": [
                      {
                        "label": "Technical or Engineering, Business Management, CA",
                        "value": "1"
                      },
                      {
                        "label": "PhD, MS, MTech, ME",
                        "value": "2"
                      },
                      {
                        "label": "College or vocational training",
                        "value": "Another Label2"
                      },
                      {
                        "label": "Others",
                        "value": "Another Label3"
                      }
                    ],
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "dropdown",
                    "name": "dropdown",
                    "label": "",
                    "tooltip": "",
                    "value": "",
                    "placeholder": "Please select",
                    "type": "dropdown",
                    "required": true,
                    "data": [
                      {
                        "label": "Yes / हां",
                        "value": "1"
                      },
                      {
                        "label": "No / नहीं",
                        "value": "2"
                      }
                    ],
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "dropdown",
                    "name": "dropdown",
                    "label": "",
                    "tooltip": "",
                    "value": "",
                    "placeholder": "Please select",
                    "type": "dropdown",
                    "required": true,
                    "data": [
                      {
                        "label": "Female / महिला ",
                        "value": "1"
                      },
                      {
                        "label": "Male / पुरुष ",
                        "value": "2"
                      },
                      {
                        "label": "Other / अन्य",
                        "value": "Another Label2"
                      }
                    ],
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  }
                ],
                [
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "dropdown",
                    "name": "dropdown",
                    "label": "",
                    "tooltip": "",
                    "value": "",
                    "placeholder": "Please select",
                    "type": "dropdown",
                    "required": true,
                    "data": [
                      {
                        "label": "Technical or Engineering, Business Management, CA",
                        "value": "1"
                      },
                      {
                        "label": "PhD, MS, MTech, ME",
                        "value": "2"
                      },
                      {
                        "label": "College or vocational training",
                        "value": "Another Label2"
                      },
                      {
                        "label": "Others",
                        "value": "Another Label3"
                      }
                    ],
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "dropdown",
                    "name": "dropdown",
                    "label": "",
                    "tooltip": "",
                    "value": "",
                    "placeholder": "Please select",
                    "type": "dropdown",
                    "required": true,
                    "data": [
                      {
                        "label": "Yes / हां",
                        "value": "1"
                      },
                      {
                        "label": "No / नहीं",
                        "value": "2"
                      }
                    ],
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "dropdown",
                    "name": "dropdown",
                    "label": "",
                    "tooltip": "",
                    "value": "",
                    "placeholder": "Please select",
                    "type": "dropdown",
                    "required": true,
                    "data": [
                      {
                        "label": "Female / महिला ",
                        "value": "1"
                      },
                      {
                        "label": "Male / पुरुष ",
                        "value": "2"
                      },
                      {
                        "label": "Other / अन्य",
                        "value": "Another Label2"
                      }
                    ],
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  }
                ],
                [
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "dropdown",
                    "name": "dropdown",
                    "label": "",
                    "tooltip": "",
                    "value": "",
                    "placeholder": "Please select",
                    "type": "dropdown",
                    "required": true,
                    "data": [
                      {
                        "label": "Technical or Engineering, Business Management, CA",
                        "value": "1"
                      },
                      {
                        "label": "PhD, MS, MTech, ME",
                        "value": "2"
                      },
                      {
                        "label": "College or vocational training",
                        "value": "Another Label2"
                      },
                      {
                        "label": "Others",
                        "value": "Another Label3"
                      }
                    ],
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "dropdown",
                    "name": "dropdown",
                    "label": "",
                    "tooltip": "",
                    "value": "",
                    "placeholder": "Please select",
                    "type": "dropdown",
                    "required": true,
                    "data": [
                      {
                        "label": "Yes / हां",
                        "value": "1"
                      },
                      {
                        "label": "No / नहीं",
                        "value": "2"
                      }
                    ],
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "dropdown",
                    "name": "dropdown",
                    "label": "",
                    "tooltip": "",
                    "value": "",
                    "placeholder": "Please select",
                    "type": "dropdown",
                    "required": true,
                    "data": [
                      {
                        "label": "Female / महिला ",
                        "value": "1"
                      },
                      {
                        "label": "Male / पुरुष ",
                        "value": "2"
                      },
                      {
                        "label": "Other / अन्य",
                        "value": "Another Label2"
                      }
                    ],
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  }
                ]
              ],
              "columns": [
                {
                  "id": "label",
                  "name": "Column 1",
                  "label": "Name / नाम",
                  "type": "label"
                },
                {
                  "id": "label",
                  "label": "Designation / पद",
                  "name": "label",
                  "type": "label"
                },
                {
                  "id": "label",
                  "label": "Role / भूमिका",
                  "name": "label",
                  "type": "label"
                },
                {
                  "id": "label",
                  "label": "Qualifications / शैक्षणिक योग्यता",
                  "name": "label",
                  "type": "label"
                },
                {
                  "id": "label",
                  "label": "Relative of promoter? / क्या प्रमोटर के सम्बन्धी हैं ?",
                  "name": "label",
                  "type": "label"
                },
                {
                  "id": "label",
                  "label": "Gender / लिंग",
                  "name": "label",
                  "type": "label"
                }
              ],
              "rowHead": [
                {
                  "name": "row 1"
                }
              ],
              "validators": {},
              "layout": "col-lg-12"
            }
          ]
        },
        {
          "title": "3. Business operations and performance /",
          "description": "व्यवसाय संचालन की प्रक्रियाएं एवं प्रगति",
          "state": "normal",
          "canEnter": true,
          "canExit": false,
          "controls": [
            {
              "id": "area",
              "name": "area",
              "placeholder": "",
              "label": "3.1 Please provide overview about your company’s business / कृपया अपनी कम्पनी के व्यवसाय के बारे में एक अवलोकन प्रदान करें:",
              "tooltip": "",
              "value": "",
              "type": "textarea",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "label",
              "name": "label",
              "label": "3.2 Company’s main services / प्रमुख सेवाओं की सूची:",
              "tooltip": "",
              "type": "Label",
              "required": true,
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "table",
              "name": "table",
              "label": "Table",
              "tooltip": "",
              "value": "",
              "type": "table",
              "required": true,
              "rows": [
                [
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  }
                ]
              ],
              "columns": [
                {
                  "id": "label",
                  "name": "Column 1",
                  "label": "",
                  "type": "label"
                },
                {
                  "id": "label",
                  "label": "",
                  "name": "label",
                  "type": "label"
                },
                {
                  "id": "label",
                  "label": "",
                  "name": "label",
                  "type": "label"
                }
              ],
              "rowHead": [
                {
                  "name": "row 1"
                }
              ],
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "label",
              "name": "label",
              "label": "3.3 Financial performance at a glance / वित्तीय प्रदर्शन पर एक विहंगम दृष्टि: (audited financial statements for FY 2020-21, FY 2019-20 and FY 2018-19 must be submitted with the form) / (वित्तीय वर्ष 2020-21, 2019-20 एवं 2018-19 के ऑडिट किए गए वित्तीय विवरण इस फाॅर्म के साथ प्रस्तुत किए जाने चाहिए)",
              "tooltip": "",
              "type": "Label",
              "required": true,
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "table",
              "name": "table",
              "label": "Table",
              "tooltip": "",
              "value": "",
              "type": "table",
              "required": true,
              "rows": [
                [
                  {
                    "id": "label",
                    "name": "label",
                    "label": "Total turnover / sales / कुल टर्नओवर / विक्रय",
                    "type": "label",
                    "required": true,
                    "validators": {},
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  }
                ],
                [
                  {
                    "id": "label",
                    "name": "label",
                    "label": "Operating surplus / परिचालन अधिशेष",
                    "type": "label",
                    "required": true,
                    "validators": {},
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  }
                ],
                [
                  {
                    "id": "label",
                    "name": "label",
                    "label": "Profit before interest, taxes, and amortisation (EBITA) / ब्याज, करों और परिशोधन से पहले लाभ",
                    "type": "label",
                    "required": true,
                    "validators": {},
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  }
                ]
              ],
              "columns": [
                {
                  "id": "label",
                  "name": "Column 1",
                  "label": "Particulars / विवरण",
                  "type": "label"
                },
                {
                  "id": "label",
                  "label": "FY 2020-21 / वित्तीय वर्ष 2020-21 Rupees",
                  "name": "label",
                  "type": "label"
                },
                {
                  "id": "label",
                  "label": "FY 2019-20 / वित्तीय वर्ष 2019-20 Rupees",
                  "name": "label",
                  "type": "label"
                },
                {
                  "id": "label",
                  "label": "FY 2018-19 / वित्तीय वर्ष 2018-19 Rupees",
                  "name": "label",
                  "type": "label"
                }
              ],
              "rowHead": [
                {
                  "name": "row 1"
                }
              ],
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "label",
              "name": "label",
              "label": "Digital presence / डिजीटल उपस्थिति:",
              "tooltip": "",
              "type": "Label",
              "required": true,
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "radio",
              "name": "radio",
              "label": "3.4 Does your company manage all aspects of digital presence (website / blog / social / SMS / online content / email newsletters / etc) as an integrated strategy? / क्या आपकी कम्पनी डिजीटल उपस्थिति के सभी पहलुओं का प्रबन्धन करती है ?",
              "tooltip": "",
              "value": "",
              "type": "radio",
              "required": true,
              "data": [
                {
                  "label": "Yes / हां",
                  "value": "1"
                },
                {
                  "label": "No / नहीं",
                  "value": "2"
                }
              ],
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "area",
              "name": "area",
              "placeholder": "",
              "label": "3.5 What is the goal of your digital strategy? / आपकी डिजीटल रणनीति का लक्ष्य क्या है ?",
              "tooltip": "",
              "value": "",
              "type": "textarea",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "radio",
              "name": "radio",
              "label": "3.6 Does your company have a website? / क्या आपकी कम्पनी की वेबसाईट है ?",
              "tooltip": "",
              "value": "",
              "type": "radio",
              "required": true,
              "data": [
                {
                  "label": "Yes / हां",
                  "value": "1"
                },
                {
                  "label": "No / नहीं",
                  "value": "2"
                }
              ],
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "",
              "label": "3.6.1 If yes:(provide URL) (http://example.com) / यदि है तो कृपया विवरण देवें",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "label",
              "name": "label",
              "label": "3.7 URL to the following pages, if any? / निम्नलिखित पृष्ठों का URL, यदि कोई हो ?",
              "tooltip": "",
              "type": "Label",
              "required": true,
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "",
              "label": "3.7.1 Instagram",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "",
              "label": "3.7.2 Facebook",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "",
              "label": "3.7.3 LinkedIn",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "",
              "label": "3.7.4 Twitter",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            }
          ]
        },
        {
          "title": "4. New ideas and procedures /",
          "description": "नवीन विचार एवं प्रक्रियाएं",
          "state": "normal",
          "canEnter": true,
          "canExit": false,
          "controls": [
            {
              "id": "label",
              "name": "label",
              "label": "Process and effort / प्रक्रिया और प्रयास:",
              "tooltip": "",
              "type": "Label",
              "required": true,
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "checkbox",
              "name": "checkbox",
              "label": "4.1 Do you have any formal processes that encourage innovation or new product development (select all options that apply to you) / क्या आपके पास कोई औपचारिक प्रक्रिया है जो नवाचार या नई सेवाओं/सेवा क्षेत्रों के विकास को प्रोत्साहित करती है (उन सभी विकल्पों का चयन करें जो आपके लिए लागू होते हैं)",
              "tooltip": "",
              "value": [],
              "type": "checkbox",
              "required": true,
              "data": [
                {
                  "label": "There is a process for gathering ideas from employees / कर्मचारियों से विचार एकत्र करने के लिए एक प्रक्रिया है।",
                  "value": "Test1"
                },
                {
                  "label": "There is a formal meeting of executives to discuss innovative ideas / नवीन विचारों पर चर्चा करने के लिए अधिकारियों की एक औपचारिक बैठक होती है।",
                  "value": "Test2"
                },
                {
                  "label": "There is a budget allocation process for innovation initiatives / नवाचार की पहल के लिए एक बजट आवंटन प्रक्रिया है।",
                  "value": "Another Label2"
                },
                {
                  "label": "People have full time responsibility for innovation and development initiatives / लोगों के पास नवाचार और विकास की पहल के लिए पूर्णकालिक जिम्मेदारी है।",
                  "value": "Another Label3"
                }
              ],
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "area",
              "name": "area",
              "placeholder": "",
              "label": "4.2 Provide details of any periodic,systematic and documented review of customer perception through survey, feedback, market share analysis, customer complaints analysis, etc / आपके व्यवसाय में मॉर्केटिंग और सम्बंधित क्षेत्रों के बारे में नियमित तरीके से रिसर्च करना, जानकारी इकठ्ठा करना, प्रतिस्पर्धा के बारे में समझना, कस्टमर फीडबैक लेना, कस्टमर कंप्लेंट को अटेंड करना - इन सब कार्यों की प्रक्रिया क्या है?",
              "tooltip": "",
              "value": "",
              "type": "textarea",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "radio",
              "name": "radio",
              "label": "4.3 Were any viable product, service or best practice developed out of internal innovation in the last 12 months / क्या पिछले 12 महीनों में आंतरिक नवाचार से कोई व्यवहारिक उपयोगी सेवा या बेस्ट प्रैक्टिस का विकास किया गया?",
              "tooltip": "",
              "value": "",
              "type": "radio",
              "required": true,
              "data": [
                {
                  "label": "Yes / हां",
                  "value": "1"
                },
                {
                  "label": "No / नहीं",
                  "value": "2"
                }
              ],
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "area",
              "name": "area",
              "placeholder": "",
              "label": "4.3.1 If yes, please list them and write a short note about them / यदि हां तो कृपया सूचीबद्ध करें एवं उनके सम्बन्ध में संक्षिप्त टिप्पणी लिखें:",
              "tooltip": "",
              "value": "",
              "type": "textarea",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "radio",
              "name": "radio",
              "label": "4.4 Has your company purchased and deployed technology to aid or encourage innovation / क्या आपकी कंपनी ने नवाचार को सहायता या प्रोत्साहित करने के लिए प्रौद्योगिकी खरीदी और लागू की है ?",
              "tooltip": "",
              "value": "",
              "type": "radio",
              "required": true,
              "data": [
                {
                  "label": "Yes / हां",
                  "value": "1"
                },
                {
                  "label": "No / नहीं",
                  "value": "2"
                }
              ],
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "area",
              "name": "area",
              "placeholder": "",
              "label": "4.5 Please provide details of the new products developed, quality improvement exercise undertaken, new technology adopted and technology agreements made. In short, please tell us of your efforts to innovate, improve quality and design of your products / कृपया नई सेवाओं के विकास, गुणवत्ता में सुधार, नई तकनीक को अपनाने और प्रौद्योगिकी के विकास हेतु किये गये प्रयासों का विवरण प्रदान करें। संक्षेप में, कृपया हमें अपनी सेवाओं के नवाचार और गुणवत्ता में सुधार करने के अपने प्रयासों के बारे में बताएं:",
              "tooltip": "",
              "value": "",
              "type": "textarea",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "label",
              "name": "label",
              "label": "4.6 List top three R&D or innovation initiatives for last 12 months or last FY / पिछले 12 महीनों अथवा पिछले वित्तीय वर्ष के दौरान शीर्ष तीन अनुसंधान और विकास अथवा नवाचार की पहल को सूचीबद्ध करें",
              "tooltip": "",
              "type": "Label",
              "required": true,
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "table",
              "name": "table",
              "label": "Table",
              "tooltip": "",
              "value": "",
              "type": "table",
              "required": true,
              "rows": [
                [
                  {
                    "id": "area",
                    "name": "area",
                    "placeholder": "",
                    "label": "",
                    "value": "",
                    "type": "textarea",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "dropdown",
                    "name": "dropdown",
                    "label": "",
                    "tooltip": "",
                    "value": "",
                    "placeholder": "Please select",
                    "type": "dropdown",
                    "required": true,
                    "data": [
                      {
                        "label": "Product",
                        "value": "1"
                      },
                      {
                        "label": "Offerings",
                        "value": "2"
                      },
                      {
                        "label": "Process",
                        "value": "Another Label2"
                      },
                      {
                        "label": "Operations",
                        "value": "Another Label3"
                      },
                      {
                        "label": "Marketing",
                        "value": "Another Label4"
                      },
                      {
                        "label": "Reach",
                        "value": "Another Label5"
                      }
                    ],
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "radio",
                    "name": "radio",
                    "label": "",
                    "value": "",
                    "type": "radio",
                    "required": true,
                    "data": [
                      {
                        "label": "Low",
                        "value": "1"
                      },
                      {
                        "label": "Medium",
                        "value": "2"
                      },
                      {
                        "label": "High",
                        "value": "Another Label2"
                      }
                    ],
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "radio",
                    "name": "radio",
                    "label": "",
                    "value": "",
                    "type": "radio",
                    "required": true,
                    "data": [
                      {
                        "label": "Low",
                        "value": "1"
                      },
                      {
                        "label": "Medium",
                        "value": "2"
                      },
                      {
                        "label": "High",
                        "value": "Another Label2"
                      }
                    ],
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "radio",
                    "name": "radio",
                    "label": "",
                    "value": "",
                    "type": "radio",
                    "required": true,
                    "data": [
                      {
                        "label": "Low",
                        "value": "1"
                      },
                      {
                        "label": "Medium",
                        "value": "2"
                      },
                      {
                        "label": "High",
                        "value": "Another Label2"
                      }
                    ],
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  }
                ],
                [
                  {
                    "id": "area",
                    "name": "area",
                    "placeholder": "",
                    "label": "",
                    "value": "",
                    "type": "textarea",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "dropdown",
                    "name": "dropdown",
                    "label": "",
                    "tooltip": "",
                    "value": "",
                    "placeholder": "Please select",
                    "type": "dropdown",
                    "required": true,
                    "data": [
                      {
                        "label": "Product",
                        "value": "1"
                      },
                      {
                        "label": "Offerings",
                        "value": "2"
                      },
                      {
                        "label": "Process",
                        "value": "Another Label2"
                      },
                      {
                        "label": "Operations",
                        "value": "Another Label3"
                      },
                      {
                        "label": "Marketing",
                        "value": "Another Label4"
                      },
                      {
                        "label": "Reach",
                        "value": "Another Label5"
                      }
                    ],
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "radio",
                    "name": "radio",
                    "label": "",
                    "value": "",
                    "type": "radio",
                    "required": true,
                    "data": [
                      {
                        "label": "Low",
                        "value": "1"
                      },
                      {
                        "label": "Medium",
                        "value": "2"
                      },
                      {
                        "label": "High",
                        "value": "Another Label2"
                      }
                    ],
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "radio",
                    "name": "radio",
                    "label": "",
                    "value": "",
                    "type": "radio",
                    "required": true,
                    "data": [
                      {
                        "label": "Low",
                        "value": "1"
                      },
                      {
                        "label": "Medium",
                        "value": "2"
                      },
                      {
                        "label": "High",
                        "value": "Another Label2"
                      }
                    ],
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "radio",
                    "name": "radio",
                    "label": "",
                    "value": "",
                    "type": "radio",
                    "required": true,
                    "data": [
                      {
                        "label": "Low",
                        "value": "1"
                      },
                      {
                        "label": "Medium",
                        "value": "2"
                      },
                      {
                        "label": "High",
                        "value": "Another Label2"
                      }
                    ],
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  }
                ],
                [
                  {
                    "id": "area",
                    "name": "area",
                    "placeholder": "",
                    "label": "",
                    "value": "",
                    "type": "textarea",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "dropdown",
                    "name": "dropdown",
                    "label": "",
                    "tooltip": "",
                    "value": "",
                    "placeholder": "Please select",
                    "type": "dropdown",
                    "required": true,
                    "data": [
                      {
                        "label": "Product",
                        "value": "1"
                      },
                      {
                        "label": "Offerings",
                        "value": "2"
                      },
                      {
                        "label": "Process",
                        "value": "Another Label2"
                      },
                      {
                        "label": "Operations",
                        "value": "Another Label3"
                      },
                      {
                        "label": "Marketing",
                        "value": "Another Label4"
                      },
                      {
                        "label": "Reach",
                        "value": "Another Label5"
                      }
                    ],
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "radio",
                    "name": "radio",
                    "label": "",
                    "value": "",
                    "type": "radio",
                    "required": true,
                    "data": [
                      {
                        "label": "Low",
                        "value": "1"
                      },
                      {
                        "label": "Medium",
                        "value": "2"
                      },
                      {
                        "label": "High",
                        "value": "Another Label2"
                      }
                    ],
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "radio",
                    "name": "radio",
                    "label": "",
                    "value": "",
                    "type": "radio",
                    "required": true,
                    "data": [
                      {
                        "label": "Low",
                        "value": "1"
                      },
                      {
                        "label": "Medium",
                        "value": "2"
                      },
                      {
                        "label": "High",
                        "value": "Another Label2"
                      }
                    ],
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "radio",
                    "name": "radio",
                    "label": "",
                    "value": "",
                    "type": "radio",
                    "required": true,
                    "data": [
                      {
                        "label": "Low",
                        "value": "1"
                      },
                      {
                        "label": "Medium",
                        "value": "2"
                      },
                      {
                        "label": "High",
                        "value": "Another Label2"
                      }
                    ],
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  }
                ]
              ],
              "columns": [
                {
                  "id": "label",
                  "name": "Column 1",
                  "label": " Initiative / पहल",
                  "type": "label"
                },
                {
                  "id": "label",
                  "label": "Innovation in / नवाचार",
                  "name": "label",
                  "type": "label"
                },
                {
                  "id": "label",
                  "label": "Impact on / प्रभाव Customers (proportion impacted) / ग्राहक पर प्रभाव (प्रभाव अनुपात में)",
                  "name": "label",
                  "type": "label"
                },
                {
                  "id": "label",
                  "label": "Impact on Employees (proportion impacted) / कर्मचारियों पर प्रभाव (प्रभाव अनुपात में)",
                  "name": "label",
                  "type": "label"
                },
                {
                  "id": "label",
                  "label": "Impact on Revenue (overall growth) / राजस्व (समग्र विकास)",
                  "name": "label",
                  "type": "label"
                },
                {
                  "id": "label",
                  "label": "Approx. expenditure in the last year () / विगत वर्ष में अनुमानित व्यय",
                  "name": "label",
                  "type": "label"
                }
              ],
              "rowHead": [
                {
                  "name": "row 1"
                }
              ],
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "label",
              "name": "label",
              "label": "Patents and trademarks applied and received / पेटेन्ट्स एवं ट्रेडमार्क जिनके लिये आवेदन किया गया हो अथवा प्राप्त हो चुके हों:",
              "tooltip": "",
              "type": "Label",
              "required": true,
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "label",
              "name": "label",
              "label": "4.7 Please provide details of the patents and trade-marks received or applied for. / कृपया प्राप्त अथवा आवेदन किए गए पेटेंट एवं ट्रेडमार्क का विवरण प्रदान करें:",
              "tooltip": "",
              "type": "Label",
              "required": true,
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "table",
              "name": "table",
              "label": "Table",
              "tooltip": "",
              "value": "",
              "type": "table",
              "required": true,
              "rows": [
                [
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "dropdown",
                    "name": "dropdown",
                    "label": "",
                    "tooltip": "",
                    "value": "",
                    "placeholder": "Please select",
                    "type": "dropdown",
                    "required": true,
                    "data": [
                      {
                        "label": "2022",
                        "value": "1"
                      },
                      {
                        "label": "2021",
                        "value": "2"
                      },
                      {
                        "label": "2020",
                        "value": "Another Label2"
                      },
                      {
                        "label": "2019",
                        "value": "Another Label3"
                      },
                      {
                        "label": "2018",
                        "value": "Another Label4"
                      },
                      {
                        "label": "2017",
                        "value": "Another Label5"
                      },
                      {
                        "label": "2016",
                        "value": "Another Label6"
                      }
                    ],
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  }
                ],
                [
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "dropdown",
                    "name": "dropdown",
                    "label": "",
                    "tooltip": "",
                    "value": "",
                    "placeholder": "Please select",
                    "type": "dropdown",
                    "required": true,
                    "data": [
                      {
                        "label": "2022",
                        "value": "1"
                      },
                      {
                        "label": "2021",
                        "value": "2"
                      },
                      {
                        "label": "2020",
                        "value": "Another Label2"
                      },
                      {
                        "label": "2019",
                        "value": "Another Label3"
                      },
                      {
                        "label": "2018",
                        "value": "Another Label4"
                      },
                      {
                        "label": "2017",
                        "value": "Another Label5"
                      },
                      {
                        "label": "2016",
                        "value": "Another Label6"
                      }
                    ],
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  }
                ],
                [
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "dropdown",
                    "name": "dropdown",
                    "label": "",
                    "tooltip": "",
                    "value": "",
                    "placeholder": "Please select",
                    "type": "dropdown",
                    "required": true,
                    "data": [
                      {
                        "label": "2022",
                        "value": "1"
                      },
                      {
                        "label": "2021",
                        "value": "2"
                      },
                      {
                        "label": "2020",
                        "value": "Another Label2"
                      },
                      {
                        "label": "2019",
                        "value": "Another Label3"
                      },
                      {
                        "label": "2018",
                        "value": "Another Label4"
                      },
                      {
                        "label": "2017",
                        "value": "Another Label5"
                      },
                      {
                        "label": "2016",
                        "value": "Another Label6"
                      }
                    ],
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  }
                ]
              ],
              "columns": [
                {
                  "id": "label",
                  "name": "Column 1",
                  "label": " Patent or trademark / पेटेन्ट अथवा ट्रेडमार्क",
                  "type": "label"
                },
                {
                  "id": "label",
                  "label": "\tStatus received or applied / वस्तुःस्थिति (प्राप्त हो चुका अथवा आवेदन किया गया)",
                  "name": "label",
                  "type": "label"
                },
                {
                  "id": "label",
                  "label": "Year in which received or applied / वर्ष जब प्राप्त हुआ अथवा आवेदन किया गया",
                  "name": "label",
                  "type": "label"
                }
              ],
              "rowHead": [
                {
                  "name": "row 1"
                }
              ],
              "validators": {},
              "layout": "col-lg-12"
            }
          ]
        },
        {
          "title": "5. Employee Base and People Measures /",
          "description": "कर्मचारी का आधार एवं व्यक्ति मापन",
          "state": "normal",
          "canEnter": true,
          "canExit": false,
          "controls": [
            {
              "id": "label",
              "name": "label",
              "label": "5.1 Full time employee / पूर्णकालिक कर्मचारी (Including temporary and contractual) /(अस्थाई एवं अनुबन्धित सहित)",
              "tooltip": "",
              "type": "Label",
              "required": true,
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "table",
              "name": "table",
              "label": "Table",
              "tooltip": "",
              "value": "",
              "type": "table",
              "required": true,
              "rows": [
                [
                  {
                    "id": "label",
                    "name": "label",
                    "label": "Male / पुरुष",
                    "type": "label",
                    "required": true,
                    "validators": {},
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  }
                ],
                [
                  {
                    "id": "label",
                    "name": "label",
                    "label": "Female / महिला",
                    "type": "label",
                    "required": true,
                    "validators": {},
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  }
                ],
                [
                  {
                    "id": "label",
                    "name": "label",
                    "label": "Other / अन्य",
                    "type": "label",
                    "required": true,
                    "validators": {},
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  }
                ],
                [
                  {
                    "id": "label",
                    "name": "label",
                    "label": "Total working persons including management, employees and contract staff/ labour. / आपके व्यवसाय में कार्यरत प्रबंधन और अनुबंध कर्मचारियों सहित सभी लोगो की संख्या।",
                    "type": "label",
                    "required": true,
                    "validators": {},
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  }
                ]
              ],
              "columns": [
                {
                  "id": "label",
                  "name": "Column 1",
                  "label": " Region / क्षेत्र",
                  "type": "label"
                },
                {
                  "id": "label",
                  "label": "as on 31.03.2021 / दिनांक 31.3.2021",
                  "name": "label",
                  "type": "label"
                },
                {
                  "id": "label",
                  "label": "as on 31.03.2020 / दिनांक 31.3.2020",
                  "name": "label",
                  "type": "label"
                },
                {
                  "id": "label",
                  "label": "as on 31.03.2019 / दिनांक 31.3.2019",
                  "name": "label",
                  "type": "label"
                }
              ],
              "rowHead": [
                {
                  "name": "row 1"
                }
              ],
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "label",
              "name": "label",
              "label": "5.2 Total people costs (include management, staff and workman wages, salaries, benefits, welfare, perks etc.), / कंपनी को वेतन से संबंधित खर्चों की कुल लागत, वेतनभोगी कर्मचारियों की कुल लागत का वर्णन करें।",
              "tooltip": "",
              "type": "Label",
              "required": true,
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "",
              "label": "",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "",
              "label": "",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "",
              "label": "",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "",
              "label": "5.3 How have the Covid-19 lockdowns affected your workforce strength? / कोविड -19 लॉकडाउन ने आपके कार्यबल की ताकत को कैसे प्रभावित किया है?",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "area",
              "name": "area",
              "placeholder": "",
              "label": "5.4 Mention the top 3 measures and initiatives for Covid workforce relief benefits and employee wellbeing taken during the Covid-19 lockdown period. / कोविड-19 लॉकडाउन अवधि के दौरान कोविड कार्यबल राहत लाभों और कर्मचारियों की भलाई के लिए किए गए शीर्ष 3 उपायों और पहलों का उल्लेख करें।।",
              "tooltip": "",
              "value": "",
              "type": "textarea",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "",
              "label": "5.5 How many people left your organisation in the last 12 months? / विगत 12 माह के दौरान कुल कितने कर्मचारियों ने कम्पनी छोड़ी है:",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "area",
              "name": "area",
              "placeholder": "",
              "label": "5.6 Describe specific initiatives and facilities for women in the work force to augment their participation, comfort, safety, welfare and individual development and their responsibilities within the organisation. / आपकी कंपनी में कार्यरत महिलाओं के प्रोहत्साहन सम्बंधित नीतिगत पहल, उनकी सुरक्षा एवं सुश्रुषा के कार्यों का वर्णन करें।",
              "tooltip": "",
              "value": "",
              "type": "textarea",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "label",
              "name": "label",
              "label": "5.7 Educational break-up of the employee base / कर्मचारियों की शैक्षणिक योग्यता के विषय में जानकारी:",
              "tooltip": "",
              "type": "Label",
              "required": true,
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "",
              "label": "5.7.1 Professional education (Technical or Engineering, Business Management, CA / प्रोफेशनल शिक्षा (तकनीकी अथवा अभियांत्रिकी, व्यवसाय प्रबन्धन, चार्टर्ड अकाउनटेन्ट)",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "",
              "label": "5.7.2 Higher technical and professional qualifications (PhD, MS, MTech, ME) / उच्च शैक्षणिक योग्यता तकनीकी एवं प्रोफेशनल (पी.एच.डी., एम.एस., एम.टेक., एम.ई)",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "",
              "label": "5.7.3 College or vocational training / महाविद्यालय अथवा व्यावसायिक प्रशिक्षण",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "",
              "label": "5.7.4 Others / अन्य",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "radio",
              "name": "radio",
              "label": "5.8 “What is the average frequency of training given to employees/ कर्मचारियों को दिए जाने वाले प्रशिक्षण की औसत आवृत्ति?",
              "tooltip": "",
              "value": "",
              "type": "radio",
              "required": true,
              "data": [
                {
                  "label": "Quarterly / त्रैमासिक",
                  "value": "1"
                },
                {
                  "label": "Half yearly / अर्धवार्षिक",
                  "value": "2"
                },
                {
                  "label": "Annually / वार्षिक",
                  "value": "Another Label2"
                },
                {
                  "label": "Every 2 years / प्रत्येक 2 वर्षों में",
                  "value": "Another Label3"
                }
              ],
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "radio",
              "name": "radio",
              "label": "5.9 What is the average time spent by employees (excluding trainees and apprentices) on training in a year/ वर्ष में प्रशिक्षण पर कर्मचारियों (प्रशिक्षुओं को छोड़कर) द्वारा बिताया औसत समय?",
              "tooltip": "",
              "value": "",
              "type": "radio",
              "required": true,
              "data": [
                {
                  "label": "<8 hours / 8 घण्टे",
                  "value": "1"
                },
                {
                  "label": "<20 hours / 20 घण्टे",
                  "value": "2"
                },
                {
                  "label": "<40 hours / 40 घण्टे",
                  "value": "Another Label2"
                },
                {
                  "label": "More then 40 hours / 40 घण्टे से अधिक",
                  "value": "Another Label3"
                }
              ],
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "",
              "label": "5.10 What are the different methods used to train and develop employees? / कर्मचारियों के प्रशिक्षण एवं विकास हेतु अपनाई कौन-कौन सी विभिन्न पद्धतियां अपनाई जाती हैं ?",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "",
              "label": "5.11 How much is spent on training and development of employees? / गत वर्ष प्रशिक्षण व विकास पर कुल खर्च ?",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "radio",
              "name": "radio",
              "label": "5.12 Do you have any employee feedback mechanism in place? / क्या कर्मचारियों का फीडबैक प्राप्त करने की निर्धारित प्रक्रिया है ?",
              "tooltip": "",
              "value": "",
              "type": "radio",
              "required": true,
              "data": [
                {
                  "label": "Yes / हां",
                  "value": "1"
                },
                {
                  "label": "No / नहीं",
                  "value": "2"
                }
              ],
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "",
              "label": "5.13 What employee appreciation mechanism(s) are in place? / कर्मचारियों की प्रशंसा / प्रोत्साहन हेतु क्या प्रक्रिया है ?",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "",
              "label": "5.14 How do you measure employee satisfaction level? / आप कर्मचारियों की संतुष्टि के स्तर कैसे नापते है ?",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "label",
              "name": "label",
              "label": "5.15 Has your company or product has been rated by any reputed organisation or industry body? / क्या आपकी कंपनी या सेवाओं को किसी प्रतिष्ठित संगठन या उद्योग निकाय द्वारा रेट किया गया है ?",
              "tooltip": "",
              "type": "Label",
              "required": true,
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "area",
              "name": "area",
              "placeholder": "",
              "label": "5.15.1 Please provide details of rating or ranking. / कृपया रेटिंग अथवा रैंकिंग का विवरण प्रदान करें:",
              "tooltip": "",
              "value": "",
              "type": "textarea",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "area",
              "name": "area",
              "placeholder": "",
              "label": "5.15.2 Please list ratings based on customer feedback on portals that relate to your industry. / कृपया पोर्टल पर ग्राहकों द्वारा व्यक्त की गई प्रतिक्रिया के आधार पर रेटिंग्स को सूचीबद्ध करें जो आपके सेवा उद्योग से संबंधित हैंः",
              "tooltip": "",
              "value": "",
              "type": "textarea",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "area",
              "name": "area",
              "placeholder": "",
              "label": "5.15.3 Do you have any customer feedback mechanism,if yes? / क्या आपके पास ग्राहकों का फीडबैक प्राप्त करने के लिये कोई निर्धारित प्रक्रिया है? विवरण देवें।",
              "tooltip": "",
              "value": "",
              "type": "textarea",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "area",
              "name": "area",
              "placeholder": "",
              "label": "5.15.4 What is the number of customers you seek feedback from as a % of your total customer base? / आपके द्वारा अपने जिन ग्राहको से फीडबैक प्राप्त किया जाता है, संख्या के आधार पर वह आपके कुल ग्राहकों का लगभग कितना प्रतिशत भाग है?",
              "tooltip": "",
              "value": "",
              "type": "textarea",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "area",
              "name": "area",
              "placeholder": "",
              "label": "5.15.5 How is customer feedback used to improve service delivery? Mention the instances, when customer feedback has been considered in improving services. / ग्राहक प्रतिक्रिया का उपयोग सेवा वितरण में सुधार के लिए कैसे किया जाता है? ऐसे उदाहरणों का उल्लेख करें, जब सेवाओं में सुधार के लिए ग्राहकों की प्रतिक्रिया/फीडबैक पर विचार किया गया है:",
              "tooltip": "",
              "value": "",
              "type": "textarea",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            }
          ]
        },
        {
          "title": "6. Key initiatives and achievements /",
          "description": "प्रमुख पहल एवं उपलब्धियां",
          "state": "normal",
          "canEnter": true,
          "canExit": false,
          "controls": [
            {
              "id": "label",
              "name": "label",
              "label": "Quality measures / गुणवत्ता मापन",
              "tooltip": "",
              "type": "Label",
              "required": true,
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "radio",
              "name": "radio",
              "label": "6.1 Do you have any specific program to improve quality in your organisation? / अपने संगठन की गुणवत्ता को और बेहतर बनाने हेतु क्या कोई निर्धारित कार्यक्रम है:",
              "tooltip": "",
              "value": "",
              "type": "radio",
              "required": true,
              "data": [
                {
                  "label": "Yes / हां",
                  "value": "1"
                },
                {
                  "label": "No / नहीं",
                  "value": "2"
                }
              ],
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "area",
              "name": "area",
              "placeholder": "",
              "label": "6.2 How do you involve your employees in quality improvement programs? / आप गुणवत्ता सुधार कार्यक्रमों में कर्मचारियों को कैसे शामिल करते हैं ?",
              "tooltip": "",
              "value": "",
              "type": "textarea",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "radio",
              "name": "radio",
              "label": "6.3 Are you measuring compliance with quality standards? / क्या आपके यहां गुणवत्ता मानकों की अनुपालना को नापने की प्रक्रिया है?",
              "tooltip": "",
              "value": "",
              "type": "radio",
              "required": true,
              "data": [
                {
                  "label": "Yes / हां",
                  "value": "1"
                },
                {
                  "label": "No / नहीं",
                  "value": "2"
                }
              ],
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "area",
              "name": "area",
              "placeholder": "",
              "label": "6.3.1 If yes, how do you do this? Do you have internal or external audits? Please write a 200 word note on your quality systems. / यदि है, तो आप यह किस प्रकार करते हैं? क्या आपके यहां आन्तरिक एवं बाहरी ऑडिट की प्रक्रिया है? कृपया आपके यहां विद्यमान गुणवत्ता प्रक्रिया पर 200 शब्दों की टिप्पणी लिखिये।",
              "tooltip": "",
              "value": "",
              "type": "textarea",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "label",
              "name": "label",
              "label": "6.4 Please list accreditations, quality and credit rating certifications that your company has obtained. / आपकी कम्पनी को प्राप्त प्रमाणन, गुणवत्ता एवं क्रेडिट रेटिंग प्रमाणीकरण की सूची देवें:",
              "tooltip": "",
              "type": "Label",
              "required": true,
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "table",
              "name": "table",
              "label": "Table",
              "tooltip": "",
              "value": "",
              "type": "table",
              "required": true,
              "rows": [
                [
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  }
                ],
                [
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  }
                ],
                [
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  }
                ],
                [
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  }
                ],
                [
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  }
                ]
              ],
              "columns": [
                {
                  "id": "label",
                  "name": "Column 1",
                  "label": "Name of the certification or rating / प्रमाणीकरण अथवा रेटिंग का नाम",
                  "type": "label"
                },
                {
                  "id": "label",
                  "label": "Year granted / वर्ष जब प्राप्त की गई",
                  "name": "label",
                  "type": "label"
                },
                {
                  "id": "label",
                  "label": "Certifying or accrediting agency / प्रमाणित करने अथवा मान्यता प्रदान करने वाली एजेन्सी का नाम",
                  "name": "label",
                  "type": "label"
                }
              ],
              "rowHead": [
                {
                  "name": "row 1"
                }
              ],
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "label",
              "name": "label",
              "label": "Awards / पुरस्कार:",
              "tooltip": "",
              "type": "Label",
              "required": true,
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "label",
              "name": "label",
              "label": "6.5 Please provide details of any awards or accolades won in the past. / कृपया विगत में प्राप्त पुरस्कारों अथवा प्रशंसा पत्रों का विवरण देवें:",
              "tooltip": "",
              "type": "Label",
              "required": true,
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "table",
              "name": "table",
              "label": "Table",
              "tooltip": "",
              "value": "",
              "type": "table",
              "required": true,
              "rows": [
                [
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  }
                ],
                [
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  }
                ],
                [
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  }
                ]
              ],
              "columns": [
                {
                  "id": "label",
                  "name": "Column 1",
                  "label": " Award / पुरस्कार",
                  "type": "label"
                },
                {
                  "id": "label",
                  "label": "Basis or category / श्रेणी अथवा आधार",
                  "name": "label",
                  "type": "label"
                },
                {
                  "id": "label",
                  "label": "Year / वर्ष",
                  "name": "label",
                  "type": "label"
                },
                {
                  "id": "label",
                  "label": "Additional Information / अतिरिक्त जानकारी",
                  "name": "label",
                  "type": "label"
                }
              ],
              "rowHead": [
                {
                  "name": "row 1"
                }
              ],
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "label",
              "name": "label",
              "label": "6.7 Environment and safety / पर्यावरण संरक्षण एवं कर्मचारी सुरक्षा नीतियां।",
              "tooltip": "",
              "type": "Label",
              "required": true,
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "area",
              "name": "area",
              "placeholder": "",
              "label": "6.7.1 What initiatives has your company undertaken related to safety in the workplace? / आपकी कम्पनी ने कार्यस्थल में सुरक्षा से जुड़ी क्या पहल की है?",
              "tooltip": "",
              "value": "",
              "type": "textarea",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "area",
              "name": "area",
              "placeholder": "",
              "label": "6.7.2 Have you met all the requirements of the environmental protection act? / क्या आपने पर्यावरण संरक्षण अधिनियम की सभी आवश्यकताओं को पूरा किया है?",
              "tooltip": "",
              "value": "",
              "type": "textarea",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "area",
              "name": "area",
              "placeholder": "",
              "label": "6.7.3 Have you gone above and beyond the requirements and tailored your processes to be best in class? / क्या आप आवश्यकताओं से ऊपर और परे चले गए हैं और वर्ग में सर्वश्रेष्ठ होने के लिए आपने अपनी प्रक्रिया को अनुकूलित किया है ?",
              "tooltip": "",
              "value": "",
              "type": "textarea",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "area",
              "name": "area",
              "placeholder": "",
              "label": "6.8 Describe any initiatives for conservation of energy and water. / ऊर्जा और जल - संरक्षण के लिए किसी विशिष्ट प्रयास का वर्णन करें।",
              "tooltip": "",
              "value": "",
              "type": "textarea",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "label",
              "name": "label",
              "label": "Social impact measures / सामाजिक प्रभाव हेतु उपाय:",
              "tooltip": "",
              "type": "Label",
              "required": true,
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "label",
              "name": "label",
              "label": "6.9 List top three causes your organisation has championed (or initiatives taken) in last 12 months or last FY: / तीन प्रमुख कारकों को उल्लेख करें जिनके कारण पिछले 12 महिनों में अथवा विगत वित्तीय वर्ष के दौरान आपके संगठन को शीर्ष स्थान प्राप्त हुआ है अथवा आपके संगठन द्वारा पहल की गई है:",
              "tooltip": "",
              "type": "Label",
              "required": true,
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "table",
              "name": "table",
              "label": "Table",
              "tooltip": "",
              "value": "",
              "type": "table",
              "required": true,
              "rows": [
                [
                  {
                    "id": "area",
                    "name": "area",
                    "placeholder": "",
                    "label": "",
                    "value": "",
                    "type": "textarea",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "dropdown",
                    "name": "dropdown",
                    "label": "",
                    "tooltip": "",
                    "value": "",
                    "placeholder": "Please select",
                    "type": "dropdown",
                    "required": true,
                    "data": [
                      {
                        "label": "100 -1000",
                        "value": "1"
                      },
                      {
                        "label": "1000+",
                        "value": "2"
                      },
                      {
                        "label": "10000+",
                        "value": "Another Label2"
                      }
                    ],
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "dropdown",
                    "name": "dropdown",
                    "label": "",
                    "tooltip": "",
                    "value": "",
                    "placeholder": "Please select",
                    "type": "dropdown",
                    "required": true,
                    "data": [
                      {
                        "label": "Environment",
                        "value": "1"
                      },
                      {
                        "label": "Quality of living",
                        "value": "2"
                      },
                      {
                        "label": "Health and nutrition",
                        "value": "Another Label2"
                      },
                      {
                        "label": "Skills and employment",
                        "value": "Another Label3"
                      },
                      {
                        "label": "Cultural",
                        "value": "Another Label4"
                      },
                      {
                        "label": "Others (specify)",
                        "value": "Another Label5"
                      }
                    ],
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  }
                ],
                [
                  {
                    "id": "area",
                    "name": "area",
                    "placeholder": "",
                    "label": "",
                    "value": "",
                    "type": "textarea",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "dropdown",
                    "name": "dropdown",
                    "label": "",
                    "tooltip": "",
                    "value": "",
                    "placeholder": "Please select",
                    "type": "dropdown",
                    "required": true,
                    "data": [
                      {
                        "label": "100 - 1000",
                        "value": "1"
                      },
                      {
                        "label": "1000+",
                        "value": "2"
                      },
                      {
                        "label": "10000+",
                        "value": "Another Label2"
                      }
                    ],
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "dropdown",
                    "name": "dropdown",
                    "label": "",
                    "tooltip": "",
                    "value": "",
                    "placeholder": "Please select",
                    "type": "dropdown",
                    "required": true,
                    "data": [
                      {
                        "label": "Environment",
                        "value": "1"
                      },
                      {
                        "label": "Quality of living",
                        "value": "2"
                      },
                      {
                        "label": "Health and nutrition",
                        "value": "Another Label2"
                      },
                      {
                        "label": "Skills and employment",
                        "value": "Another Label3"
                      },
                      {
                        "label": "Cultural",
                        "value": "Another Label4"
                      },
                      {
                        "label": "Others (specify)",
                        "value": "Another Label5"
                      }
                    ],
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  }
                ],
                [
                  {
                    "id": "area",
                    "name": "area",
                    "placeholder": "",
                    "label": "",
                    "value": "",
                    "type": "textarea",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "dropdown",
                    "name": "dropdown",
                    "label": "",
                    "tooltip": "",
                    "value": "",
                    "placeholder": "Please select",
                    "type": "dropdown",
                    "required": true,
                    "data": [
                      {
                        "label": "100 - 1000",
                        "value": "1"
                      },
                      {
                        "label": "1000+",
                        "value": "2"
                      },
                      {
                        "label": "10000+",
                        "value": "Another Label2"
                      }
                    ],
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "dropdown",
                    "name": "dropdown",
                    "label": "",
                    "tooltip": "",
                    "value": "",
                    "placeholder": "Please select",
                    "type": "dropdown",
                    "required": true,
                    "data": [
                      {
                        "label": "Environment",
                        "value": "1"
                      },
                      {
                        "label": "Quality of living",
                        "value": "2"
                      },
                      {
                        "label": "Health and nutrition",
                        "value": "Another Label2"
                      },
                      {
                        "label": "Skills and employment",
                        "value": "Another Label3"
                      },
                      {
                        "label": "Cultural",
                        "value": "Another Label4"
                      },
                      {
                        "label": "Others (specify)",
                        "value": "Another Label5"
                      }
                    ],
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  }
                ]
              ],
              "columns": [
                {
                  "id": "label",
                  "name": "Column 1",
                  "label": "Cause / Initiative / कारण / पहल",
                  "type": "label"
                },
                {
                  "id": "label",
                  "label": "Number of direct beneficiaries / लाभार्थियों की संख्या",
                  "name": "label",
                  "type": "label"
                },
                {
                  "id": "label",
                  "label": "Impact type / प्रभाव का प्रकार",
                  "name": "label",
                  "type": "label"
                },
                {
                  "id": "label",
                  "label": "Approx. expenditure for the cause / इस पर व्यय की गई लगभग राशि",
                  "name": "label",
                  "type": "label"
                }
              ],
              "rowHead": [
                {
                  "name": "row 1"
                }
              ],
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "area",
              "name": "area",
              "placeholder": "",
              "label": "6.10 Measures taken to track and carry out continual evaluation of the initiatives/projects and how the impact is measured under your Corporate Social Responsibilities. Please provide details of the investments/expenditures, the target segments and anticipated/ realised benefits from the project(s). /पहल / परियोजनाओं के निरंतर मूल्यांकन को ट्रैक करने और अपने कॉर्पोरेट सामाजिक जिम्मेदारियों के तहत किये गए कार्यों के प्रभाव को कैसे मापा जाता है, इस पर नज़र रखने के लिए किए गए उपाय। कृपया निवेश / व्यय, लक्ष्य खंडों और परियोजना से अनुमानित प्रत्याशित / वास्तविक लाभ पर जानकारी प्रदन करें ।",
              "tooltip": "",
              "value": "",
              "type": "textarea",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            }
          ]
        },
        {
          "title": "7. Auditor and documents /",
          "description": "ऑडिटर एवं दस्तावेज",
          "state": "normal",
          "canEnter": true,
          "canExit": false,
          "controls": [
            {
              "id": "label",
              "name": "label",
              "label": "Auditor / ऑडिटर",
              "tooltip": "",
              "type": "Label",
              "required": true,
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "",
              "label": "7.1 Name / नाम",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "",
              "label": "7.2 Contact number / सम्पर्क नम्बर",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "",
              "label": "7.3 Address / पता",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "dropdown",
              "name": "dropdown",
              "label": "7.3.1 State / राज्य",
              "tooltip": "",
              "value": "",
              "placeholder": "Please select",
              "type": "dropdown",
              "required": true,
              "data": [
                {
                  "label": "Rajasthan",
                  "value": "1"
                },
                {
                  "label": "Goa",
                  "value": "2"
                },
                {
                  "label": "Punjab",
                  "value": "Another Label2"
                }
              ],
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "dropdown",
              "name": "dropdown",
              "label": "7.3.2 District / जिला",
              "tooltip": "",
              "value": "",
              "placeholder": "Please select",
              "type": "dropdown",
              "required": true,
              "data": [
                {
                  "label": "Sikar",
                  "value": "1"
                },
                {
                  "label": "Jaipur",
                  "value": "2"
                },
                {
                  "label": "Udaipur",
                  "value": "Another Label2"
                }
              ],
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "",
              "label": "7.3.3 Pincode / पिनकोड",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "checkbox",
              "name": "checkbox",
              "label": "7.4 Documents submitted – Please check financial statements for / संलग्न दस्तावेज - कृपया निम्नानुसार वर्षों का वित्तीय विवरण संलग्न करें:",
              "tooltip": "",
              "value": [],
              "type": "checkbox",
              "required": true,
              "data": [
                {
                  "label": "FY 18-19 / वित्तीय वर्ष 18-19",
                  "value": "Test1"
                },
                {
                  "label": "FY 19-20 / वित्तीय वर्ष 19-20",
                  "value": "Test2"
                },
                {
                  "label": "FY 20-21 / वित्तीय वर्ष 20-21",
                  "value": "Another Label2"
                }
              ],
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "label",
              "name": "label",
              "label": "Documents that are mandatory / उन दस्तावेजों की सूची, जो कि आवश्यक हैं:",
              "tooltip": "",
              "type": "Label",
              "required": true,
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "file",
              "name": "file",
              "label": "7.5 Audited financial statements of FY 20-21 / वित्तीय वर्ष 20-21 के लेखा परीक्षित वित्तीय विवरण",
              "tooltip": "",
              "type": "file",
              "value": "",
              "required": true,
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "file",
              "name": "file",
              "label": "7.6 Audited financial statements of FY 19-20 / वित्तीय वर्ष 19-20 के लेखा परीक्षित वित्तीय विवरण",
              "tooltip": "",
              "type": "file",
              "value": "",
              "required": true,
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "file",
              "name": "file",
              "label": "7.7 Audited financial statements of FY 18-19 / वित्तीय वर्ष 18-19 के लेखा परीक्षित वित्तीय विवरण",
              "tooltip": "",
              "type": "file",
              "value": "",
              "required": true,
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "file",
              "name": "file",
              "label": "7.8 Copy of any of these: / इनमें से किसी एक की प्रति: Company incorporation certificate, PAN, Udyog Aadhar / कम्पनी का निगमन प्रमाणपत्र, स्थाई लेखा संख्या, उद्योग आधार",
              "tooltip": "",
              "type": "file",
              "value": "",
              "required": true,
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "label",
              "name": "label",
              "label": "Documents will add weight to your application and are optional / अन्य वैकल्पिक दस्तावेज जिनसे आपके आवेदन को बल मिले:",
              "tooltip": "",
              "type": "Label",
              "required": true,
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "file",
              "name": "file",
              "label": "7.9 CSR budget and report / सामाजिक सरोकार गतिविधियों का बजट एवं विवरण:",
              "tooltip": "",
              "type": "file",
              "value": "",
              "required": true,
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "file",
              "name": "file",
              "label": "7.10 Copy of award certificates related to your industry / आपके उद्योग से सम्बन्धित पुरस्कारों/प्रशंसा पत्रों की प्रतिलिपियां:",
              "tooltip": "",
              "type": "file",
              "value": "",
              "required": true,
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "label",
              "name": "label",
              "label": "Please paste links to media coverage eg. News Paper Articles / Blog Posts / Videos. You may also upload files on Google Drive folder and share the link to the folder",
              "tooltip": "",
              "type": "Label",
              "required": true,
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "area",
              "name": "area",
              "placeholder": "",
              "label": "7.11 Copies of media coverage received / मीडिया में प्रकाशित समाचारों की प्रतिलिपियां:",
              "tooltip": "",
              "value": "",
              "type": "textarea",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "file",
              "name": "file",
              "label": "7.12 Copies of internal and external quality audit reports / आन्तरिक एवं बाहरी गुणवत्ता ऑडिट रिपोर्ट की प्रतिलिपियां:",
              "tooltip": "",
              "type": "file",
              "value": "",
              "required": true,
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "file",
              "name": "file",
              "label": "7.13 List of patents owned (only publish and granted) / प्राप्त पेटेन्ट की सूची (केवल प्रकाशित एवं स्वीकृत)",
              "tooltip": "",
              "type": "file",
              "value": "",
              "required": true,
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "file",
              "name": "file",
              "label": "7.14 Appreciation letters from key clients / प्रमुख ग्राहकों से प्राप्त प्रशंसा पत्र",
              "tooltip": "",
              "type": "file",
              "value": "",
              "required": true,
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "label",
              "name": "label",
              "label": "Any additional documents can be sent on e-mail at ucciawards@gmail.com.",
              "tooltip": "",
              "type": "Label",
              "required": true,
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "label",
              "name": "label",
              "label": "Declaration / घोषणा",
              "tooltip": "",
              "type": "Label",
              "required": true,
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "label",
              "name": "label",
              "label": "7.15 We understand that we have shared this information in confidence and exclusively for the purpose of the Excellence Awards, and UCCI may use the information for its goals in anonymized or aggregated manner only without identifying any person or business, except if required by law or any relevant regulations. We understand and agree that UCCI would take reasonable steps to ensure data confidentiality, and would not be liable for any expenses, costs or damages in this regard. / हम समझते हैं कि हमने इस जानकारी को गोपनीयता के आश्वासन पर और विशेष रूप से उत्कृष्टता पुरस्कारों के उद्देश्य के लिए साझा किया है, और यूसीसीआई अपने लक्ष्यों के लिए जानकारी का उपयोग केवल किसी व्यक्ति या व्यवसाय की पहचान का खुलासा किये बिना गुमनाम रूप से या सामूहिक तरीके से कर सकता है, सिवाय इसके कि कानून या किसी प्रासंगिक विनियमों के प्रावधानों में आवश्यक हो । हम समझते हैं और सहमत हैं कि यूसीसीआई डेटा गोपनीयता सुनिश्चित करने के लिए उचित कदम उठाएगा, और इस संबंध में हुए किसी भी खर्च, लागत या नुकसान के लिए उत्तरदायी नहीं होगा।।",
              "tooltip": "",
              "type": "Label",
              "required": true,
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "",
              "label": "7.15.1 Name of respondent / आवेदनकर्ता का नाम",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "",
              "label": "7.15.2 Designation / पद",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "",
              "label": "7.15.3 Email / ई-मेल",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "date",
              "name": "date",
              "label": "7.15.4 Date / दिनांक",
              "tooltip": "",
              "type": "date",
              "value": "",
              "required": true,
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "file",
              "name": "file",
              "label": "7.15.5 Signature / हस्ताक्षर",
              "tooltip": "",
              "type": "file",
              "value": "",
              "required": true,
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "file",
              "name": "file",
              "label": "7.15.6 Firm /Company Stamp / कम्पनी / फर्म की छाप",
              "tooltip": "",
              "type": "file",
              "value": "",
              "required": true,
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "area",
              "name": "area",
              "placeholder": "",
              "label": "7.15.7 Remarks/ राय",
              "tooltip": "",
              "value": "",
              "type": "textarea",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            }
          ]
        }
      ];
    }

    else if (slug.slug == 'socialForm') {
      this.sections = [
        {
          "title": " Basic Information ",
          "description": "/ मूलभूत जानकारी",
          "state": "normal",
          "canEnter": true,
          "canExit": false,
          "controls": [
            {
              "id": "text",
              "name": "text",
              "placeholder": "Enter Text Here",
              "label": "1.1 Registered name of the business / व्यवसाय का पंजीकृत नाम",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "radio",
              "name": "radio",
              "label": "1.2 Ownership Pattern / स्वामित्व का प्रकार",
              "tooltip": "",
              "value": "",
              "type": "radio",
              "required": true,
              "data": [
                {
                  "label": "Proprietorship / प्रोपराइटरशिप",
                  "value": "1"
                },
                {
                  "label": "Partnership / पार्टनरशिप",
                  "value": "2"
                },
                {
                  "label": "Private Limited / प्राईवेट लिमिटेड",
                  "value": "Another Label2"
                },
                {
                  "label": "Public Limited / पब्लिक लिमिटेड",
                  "value": "Another Label3"
                },
                {
                  "label": "Limited Liability Partnership / लिमिटेड लाईबिलिटी पार्टनरशिप",
                  "value": "Another Label4"
                },
                {
                  "label": "Others / अन्य",
                  "value": "Another Label5"
                }
              ],
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "Enter Text Here",
              "label": "1.3 GST number (e.g. 08AABCX2183V1Z0) / जी.एस.टी. संख्या",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "Enter Text Here",
              "label": "1.4 Year of commencement of operations / जिस वर्ष से व्यावसायिक गतिविधियां आरम्भ हुई हैं",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "Enter Text Here",
              "label": "1.5 Address of registered office / पंजीकृत कार्यालय का पता",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "Enter Text Here",
              "label": "1.6 Number of Operation Locations / कुल व्यावसायिक केन्द्र/स्थान",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "label",
              "name": "label",
              "label": "1.7 Name of Locations / व्यावसायिक केन्द्र/स्थान का नाम",
              "tooltip": "",
              "type": "Label",
              "required": true,
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "dropdown",
              "name": "dropdown",
              "label": "1.7.1 State / राज्य",
              "tooltip": "",
              "value": "",
              "placeholder": "Please select",
              "type": "dropdown",
              "required": true,
              "data": [
                {
                  "label": "Rajasthan",
                  "value": "1"
                },
                {
                  "label": "Andhra Pradesh",
                  "value": "2"
                },
                {
                  "label": "Asam",
                  "value": "Another Label2"
                },
                {
                  "label": "Goa",
                  "value": "Another Label3"
                },
                {
                  "label": "Gujarat",
                  "value": "Another Label4"
                }
              ],
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "dropdown",
              "name": "dropdown",
              "label": "1.7.2 City / शहर",
              "tooltip": "",
              "value": "",
              "placeholder": "Please select",
              "type": "dropdown",
              "required": true,
              "data": [
                {
                  "label": "Ahemdabad",
                  "value": "1"
                },
                {
                  "label": "Jaipur",
                  "value": "2"
                },
                {
                  "label": "Kolhapur",
                  "value": "Another Label2"
                },
                {
                  "label": "Amravati",
                  "value": "Another Label3"
                }
              ],
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "Enter Text Here",
              "label": "1.7.3 Location / स्थान",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "dropdown",
              "name": "dropdown",
              "label": "1.7.4 State / राज्",
              "tooltip": "",
              "value": "",
              "placeholder": "Please select",
              "type": "dropdown",
              "required": true,
              "data": [
                {
                  "label": "Rajasthan",
                  "value": "1"
                },
                {
                  "label": "Andhra Pradesh",
                  "value": "2"
                },
                {
                  "label": "Asam",
                  "value": "Another Label2"
                },
                {
                  "label": "Goa",
                  "value": "Another Label3"
                },
                {
                  "label": "Gujarat",
                  "value": "Another Label4"
                }
              ],
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "dropdown",
              "name": "dropdown",
              "label": "1.7.5 City / शहर",
              "tooltip": "",
              "value": "",
              "placeholder": "Please select",
              "type": "dropdown",
              "required": true,
              "data": [
                {
                  "label": "Ahemdabad",
                  "value": "1"
                },
                {
                  "label": "Jaipur",
                  "value": "2"
                },
                {
                  "label": "Kolhapur",
                  "value": "Another Label2"
                },
                {
                  "label": "Amravati",
                  "value": "Another Label3"
                }
              ],
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "Enter Text Here",
              "label": "1.7.6 Location / स्थान",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "dropdown",
              "name": "dropdown",
              "label": "1.7.7 State / राज्",
              "tooltip": "",
              "value": "",
              "placeholder": "Please select",
              "type": "dropdown",
              "required": true,
              "data": [
                {
                  "label": "Rajasthan",
                  "value": "1"
                },
                {
                  "label": "Andhra Pradesh",
                  "value": "2"
                },
                {
                  "label": "Asam",
                  "value": "Another Label2"
                },
                {
                  "label": "Goa",
                  "value": "Another Label3"
                },
                {
                  "label": "Gujarat",
                  "value": "Another Label4"
                }
              ],
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "dropdown",
              "name": "dropdown",
              "label": "1.7.8 City / शहर",
              "tooltip": "",
              "value": "",
              "placeholder": "Please select",
              "type": "dropdown",
              "required": true,
              "data": [
                {
                  "label": "Ahemdabad",
                  "value": "1"
                },
                {
                  "label": "Jaipur",
                  "value": "2"
                },
                {
                  "label": "Kolhapur",
                  "value": "Another Label2"
                },
                {
                  "label": "Amravati",
                  "value": "Another Label3"
                }
              ],
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "Enter Text Here",
              "label": "1.7.9 Location / स्थान",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "label",
              "name": "label",
              "label": "1.8 Details of two main promoters or partners or directors / प्रमोटर / पार्टनर / निदेशकों का विवरण",
              "tooltip": "",
              "type": "Label",
              "required": true,
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "Enter Text Here",
              "label": "1.8.1 Name / नाम",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "Enter Text Here",
              "label": "1.8.2 Designation / पद",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "Enter Text Here",
              "label": "1.8.3 Email id / ई - मेल आई.डी.",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "Enter Text Here",
              "label": "1.8.4 Phone/Mobile / फोन/मोबाईल",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "Enter Text Here",
              "label": "1.8.5 Name / नाम",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "Enter Text Here",
              "label": "1.8.6 Designation / पद",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "Enter Text Here",
              "label": "1.8.7 Email id / ई - मेल आई.डी.",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "Enter Text Here",
              "label": "1.8.8 Phone/Mobile / फोन/मोबाईल",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "Enter Text Here",
              "label": "1.8.9 Name / नाम",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "Enter Text Here",
              "label": "1.8.10 Designation / पद",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "Enter Text Here",
              "label": "1.8.11 Email id / ई - मेल आई.डी.",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "Enter Text Here",
              "label": "1.8.12 Phone/Mobile / फोन/मोबाईल",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "label",
              "name": "label",
              "label": "1.10 Please provide details of the person we should contact for any clarification or information / कृपया उस व्यक्ति का विवरण देवें जिससे किसी भी प्रकार का स्पष्टीकरण प्राप्त करने अथवा अन्य जानकारी प्राप्त करने हेतु सम्पर्क किया जा सके:",
              "tooltip": "",
              "type": "Label",
              "required": true,
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "Enter Text Here",
              "label": "1.10.1 Name / नाम",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "Enter Text Here",
              "label": " 1.10.2 Designation / पद",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "Enter Text Here",
              "label": "1.10.3 Email id / ई - मेल आई.डी.",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "Enter Text Here",
              "label": "1.10.4 Phone/Mobile / फोन/मोबाईल",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "label",
              "name": "label",
              "label": "In case of any clarifications call, +91 6377205389",
              "tooltip": "",
              "type": "Label",
              "required": true,
              "validators": {},
              "layout": "col-lg-12"
            }
          ]
        },
        {
          "title": "Management ",
          "description": "/ प्रबन्धन",
          "state": "normal",
          "canEnter": true,
          "canExit": false,
          "controls": [
            {
              "id": "label",
              "name": "label",
              "label": "Vision Statement / कंपनी का दर्शन",
              "tooltip": "",
              "type": "Label",
              "required": true,
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "radio",
              "name": "radio",
              "label": "2.1 Does your company have documented future goals ? / क्या आपकी कम्पनी द्वारा भविष्य के लिये लक्ष्य निर्धारित किये गये हैं ?",
              "tooltip": "",
              "value": "",
              "type": "radio",
              "required": true,
              "data": [
                {
                  "label": "Yes / हां",
                  "value": "1"
                },
                {
                  "label": "No / नहीं",
                  "value": "2"
                }
              ],
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "radio",
              "name": "radio",
              "label": "2.2 Your company articulates company’s vision across the organisation through / आपकी कम्पनी का दृष्टिकोण समस्त संगठन में कौन-से माध्यम से प्रचारित किया गया है:",
              "tooltip": "",
              "value": "",
              "type": "radio",
              "required": true,
              "data": [
                {
                  "label": "Company's intranet / कम्पनी के इन्ट्रानेट द्वारा ",
                  "value": "1"
                },
                {
                  "label": "Speeches and press releases / वार्तालाप एवं प्रेस विज्ञप्ति द्वारा",
                  "value": "2"
                }
              ],
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "radio",
              "name": "radio",
              "label": "2.3 The articulation covers company goals / objectives, with timeline and purpose / आर्टिक्यूलेशन समय और उद्देश्य के साथ कंपनी के लक्ष्यों / उद्देश्यों को शामिल करता है",
              "tooltip": "",
              "value": "",
              "type": "radio",
              "required": true,
              "data": [
                {
                  "label": "Yes / हां",
                  "value": "1"
                },
                {
                  "label": "No / नहीं",
                  "value": "2"
                }
              ],
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "radio",
              "name": "radio",
              "label": "2.4 Employees clearly understand the purpose and primary measurable objectives of the organization / कर्मचारी संगठन के उद्देश्य और प्राथमिक मापे जा सकने वाले लक्ष्यों को स्पष्ट रूप से समझते हैं",
              "tooltip": "",
              "value": "",
              "type": "radio",
              "required": true,
              "data": [
                {
                  "label": "Yes / हां",
                  "value": "1"
                },
                {
                  "label": "No / नहीं",
                  "value": "2"
                }
              ],
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "radio",
              "name": "radio",
              "label": "2.5 Does your company have responsibilities identified and assigned for each objective? / क्या आपकी कंपनी द्वारा प्रत्येक लक्ष्य को पूरा करने के लिए जिम्मेदारियों को पहचान कर दायित्व सौंपा गया है?",
              "tooltip": "",
              "value": "",
              "type": "radio",
              "required": true,
              "data": [
                {
                  "label": "Yes / हां",
                  "value": "1"
                },
                {
                  "label": "No / नहीं",
                  "value": "2"
                }
              ],
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "area",
              "name": "area",
              "placeholder": "Enter Description",
              "label": "2.6 Please describe your company’s vision: / कृपया अपनी कम्पनी के विजन (दृष्टिकोण) का विवरण देवें:",
              "tooltip": "",
              "value": "",
              "type": "textarea",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "area",
              "name": "area",
              "placeholder": "Enter Description",
              "label": "2.7 Why do you think your organisation is the best and should be selected to win this award?/ आपको क्यों लगता है कि इस पुरस्कार को जीतने के लिए आपका संगठन सर्वथा श्रेष्ठ है?",
              "tooltip": "",
              "value": "",
              "type": "textarea",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "radio",
              "name": "radio",
              "label": "2.8 Does your company assess achievements against the vision? / क्या आपकी कम्पनी द्वारा विजन (दृष्टिकोण) की उपलब्धियों का आकलन किया जाता है ?",
              "tooltip": "",
              "value": "",
              "type": "radio",
              "required": true,
              "data": [
                {
                  "label": "Yes / हां",
                  "value": "1"
                },
                {
                  "label": "No / नहीं",
                  "value": "2"
                }
              ],
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "radio",
              "name": "radio",
              "label": "2.9 Do you believe your company is progressing well towards fulfilling its vision? / क्या आप मानते हैं कि आपकी कंपनी अपने विजन को पूरा करने की दिशा में अच्छी प्रगति कर रही है?",
              "tooltip": "",
              "value": "",
              "type": "radio",
              "required": true,
              "data": [
                {
                  "label": "Yes / हां",
                  "value": "1"
                },
                {
                  "label": "No / नहीं",
                  "value": "2"
                }
              ],
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "area",
              "name": "area",
              "placeholder": "Enter Description",
              "label": "2.10 Please describe how the company is progressing towards achieving the vision. (you can use examples to illustrate or support your point) / कृपया वर्णन करें कि कंपनी अपने विजन को प्राप्त करने की दिशा में कैसे आगे बढ़ रही है। (आप अपनी बात को स्पष्ट करने या इसका समर्थन करने के लिए उदाहरणों का उपयोग कर सकते हैं)",
              "tooltip": "",
              "value": "",
              "type": "textarea",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "area",
              "name": "area",
              "placeholder": "Enter Description",
              "label": "2.11 Does the company have any management system certification (ISO 9001/CMMi/ etc.)? Please list them? / क्या कंपनी के पास कोई प्रबंधन प्रणाली प्रमाणन (आईएसओ 9001/सीएमएमआई इत्यादि) है? कृपया निर्दिष्ट करें।",
              "tooltip": "",
              "value": "",
              "type": "textarea",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "area",
              "name": "area",
              "placeholder": "Enter Description",
              "label": "2.12 Describe the organization's strategic planning process, that is, key activities and their frequency and participants in those / आपके व्यवसाय की मध्यम अवधि के कार्य हेतु नीतिगत कार्य योजना, उसको बनाने की प्रक्रिया और उन योजनाओं की पुनः निरिक्षण की योजना का वर्णन करे।",
              "tooltip": "",
              "value": "",
              "type": "textarea",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "label",
              "name": "label",
              "label": "Diversity of Management Team / कार्यकारी टीम की विविधता",
              "tooltip": "",
              "type": "Label",
              "required": true,
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "label",
              "name": "label",
              "label": "2.13 Please list top ten decision making persons in the company (CEO, CFO, VP , Directors/Partners/Owners—who are involved in the business activities etc.) / आपके व्यवसाय में सम्मिलित निर्देशक मंडल के सदस्य, सांझेदारों, मालिकाना अधिकार वाले अन्य सदस्य या भागीदारों, जो भी आपके व्यवसाय गतिविधियों में शामिल हो उनके बारे में संक्षेप में वर्णन करें।:",
              "tooltip": "",
              "type": "Label",
              "required": true,
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "table",
              "name": "table",
              "label": "",
              "tooltip": "",
              "value": "",
              "type": "table",
              "required": true,
              "rows": [
                [
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "dropdown",
                    "name": "dropdown",
                    "label": "",
                    "tooltip": "",
                    "value": "",
                    "placeholder": "Please select",
                    "type": "dropdown",
                    "required": true,
                    "data": [
                      {
                        "label": "Technical or Engineering, Business Management, CA",
                        "value": "1"
                      },
                      {
                        "label": "PhD, MS, MTech, ME",
                        "value": "2"
                      },
                      {
                        "label": " College or vocational training",
                        "value": "Another Label2"
                      },
                      {
                        "label": " Others",
                        "value": "Another Label3"
                      }
                    ],
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "dropdown",
                    "name": "dropdown",
                    "label": "",
                    "tooltip": "",
                    "value": "",
                    "placeholder": "Please select",
                    "type": "dropdown",
                    "required": true,
                    "data": [
                      {
                        "label": "Yes / हां",
                        "value": "1"
                      },
                      {
                        "label": " No / नहीं",
                        "value": "2"
                      }
                    ],
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "dropdown",
                    "name": "dropdown",
                    "label": "",
                    "tooltip": "",
                    "value": "",
                    "placeholder": "Please select",
                    "type": "dropdown",
                    "required": true,
                    "data": [
                      {
                        "label": "Female",
                        "value": "1"
                      },
                      {
                        "label": "Male",
                        "value": "2"
                      },
                      {
                        "label": "Others",
                        "value": "Another Label2"
                      }
                    ],
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  }
                ],
                [
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "dropdown",
                    "name": "dropdown",
                    "label": "",
                    "tooltip": "",
                    "value": "",
                    "placeholder": "Please select",
                    "type": "dropdown",
                    "required": true,
                    "data": [
                      {
                        "label": "Technical or Engineering, Business Management, CA",
                        "value": "1"
                      },
                      {
                        "label": "PhD, MS, MTech, ME",
                        "value": "2"
                      },
                      {
                        "label": " College or vocational training",
                        "value": "Another Label2"
                      },
                      {
                        "label": " Others",
                        "value": "Another Label3"
                      }
                    ],
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "dropdown",
                    "name": "dropdown",
                    "label": "",
                    "tooltip": "",
                    "value": "",
                    "placeholder": "Please select",
                    "type": "dropdown",
                    "required": true,
                    "data": [
                      {
                        "label": "Yes / हां",
                        "value": "1"
                      },
                      {
                        "label": " No / नहीं",
                        "value": "2"
                      }
                    ],
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "dropdown",
                    "name": "dropdown",
                    "label": "",
                    "tooltip": "",
                    "value": "",
                    "placeholder": "Please select",
                    "type": "dropdown",
                    "required": true,
                    "data": [
                      {
                        "label": "Female",
                        "value": "1"
                      },
                      {
                        "label": "Male",
                        "value": "2"
                      },
                      {
                        "label": "Others",
                        "value": "Another Label2"
                      }
                    ],
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  }
                ],
                [
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "dropdown",
                    "name": "dropdown",
                    "label": "",
                    "tooltip": "",
                    "value": "",
                    "placeholder": "Please select",
                    "type": "dropdown",
                    "required": true,
                    "data": [
                      {
                        "label": "Technical or Engineering, Business Management, CA",
                        "value": "1"
                      },
                      {
                        "label": "PhD, MS, MTech, ME",
                        "value": "2"
                      },
                      {
                        "label": " College or vocational training",
                        "value": "Another Label2"
                      },
                      {
                        "label": " Others",
                        "value": "Another Label3"
                      }
                    ],
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "dropdown",
                    "name": "dropdown",
                    "label": "",
                    "tooltip": "",
                    "value": "",
                    "placeholder": "Please select",
                    "type": "dropdown",
                    "required": true,
                    "data": [
                      {
                        "label": "Yes / हां",
                        "value": "1"
                      },
                      {
                        "label": " No / नहीं",
                        "value": "2"
                      }
                    ],
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "dropdown",
                    "name": "dropdown",
                    "label": "",
                    "tooltip": "",
                    "value": "",
                    "placeholder": "Please select",
                    "type": "dropdown",
                    "required": true,
                    "data": [
                      {
                        "label": "Female",
                        "value": "1"
                      },
                      {
                        "label": "Male",
                        "value": "2"
                      },
                      {
                        "label": "Others",
                        "value": "Another Label2"
                      }
                    ],
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  }
                ],
                [
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "dropdown",
                    "name": "dropdown",
                    "label": "",
                    "tooltip": "",
                    "value": "",
                    "placeholder": "Please select",
                    "type": "dropdown",
                    "required": true,
                    "data": [
                      {
                        "label": "Technical or Engineering, Business Management, CA",
                        "value": "1"
                      },
                      {
                        "label": "PhD, MS, MTech, ME",
                        "value": "2"
                      },
                      {
                        "label": " College or vocational training",
                        "value": "Another Label2"
                      },
                      {
                        "label": " Others",
                        "value": "Another Label3"
                      }
                    ],
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "dropdown",
                    "name": "dropdown",
                    "label": "",
                    "tooltip": "",
                    "value": "",
                    "placeholder": "Please select",
                    "type": "dropdown",
                    "required": true,
                    "data": [
                      {
                        "label": "Yes / हां",
                        "value": "1"
                      },
                      {
                        "label": " No / नहीं",
                        "value": "2"
                      }
                    ],
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "dropdown",
                    "name": "dropdown",
                    "label": "",
                    "tooltip": "",
                    "value": "",
                    "placeholder": "Please select",
                    "type": "dropdown",
                    "required": true,
                    "data": [
                      {
                        "label": "Female",
                        "value": "1"
                      },
                      {
                        "label": "Male",
                        "value": "2"
                      },
                      {
                        "label": "Others",
                        "value": "Another Label2"
                      }
                    ],
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  }
                ],
                [
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "dropdown",
                    "name": "dropdown",
                    "label": "",
                    "tooltip": "",
                    "value": "",
                    "placeholder": "Please select",
                    "type": "dropdown",
                    "required": true,
                    "data": [
                      {
                        "label": "Technical or Engineering, Business Management, CA",
                        "value": "1"
                      },
                      {
                        "label": "PhD, MS, MTech, ME",
                        "value": "2"
                      },
                      {
                        "label": " College or vocational training",
                        "value": "Another Label2"
                      },
                      {
                        "label": " Others",
                        "value": "Another Label3"
                      }
                    ],
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "dropdown",
                    "name": "dropdown",
                    "label": "",
                    "tooltip": "",
                    "value": "",
                    "placeholder": "Please select",
                    "type": "dropdown",
                    "required": true,
                    "data": [
                      {
                        "label": "Yes / हां",
                        "value": "1"
                      },
                      {
                        "label": " No / नहीं",
                        "value": "2"
                      }
                    ],
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "dropdown",
                    "name": "dropdown",
                    "label": "",
                    "tooltip": "",
                    "value": "",
                    "placeholder": "Please select",
                    "type": "dropdown",
                    "required": true,
                    "data": [
                      {
                        "label": "Female",
                        "value": "1"
                      },
                      {
                        "label": "Male",
                        "value": "2"
                      },
                      {
                        "label": "Others",
                        "value": "Another Label2"
                      }
                    ],
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  }
                ],
                [
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "dropdown",
                    "name": "dropdown",
                    "label": "",
                    "tooltip": "",
                    "value": "",
                    "placeholder": "Please select",
                    "type": "dropdown",
                    "required": true,
                    "data": [
                      {
                        "label": "Technical or Engineering, Business Management, CA",
                        "value": "1"
                      },
                      {
                        "label": "PhD, MS, MTech, ME",
                        "value": "2"
                      },
                      {
                        "label": " College or vocational training",
                        "value": "Another Label2"
                      },
                      {
                        "label": " Others",
                        "value": "Another Label3"
                      }
                    ],
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "dropdown",
                    "name": "dropdown",
                    "label": "",
                    "tooltip": "",
                    "value": "",
                    "placeholder": "Please select",
                    "type": "dropdown",
                    "required": true,
                    "data": [
                      {
                        "label": "Yes / हां",
                        "value": "1"
                      },
                      {
                        "label": " No / नहीं",
                        "value": "2"
                      }
                    ],
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "dropdown",
                    "name": "dropdown",
                    "label": "",
                    "tooltip": "",
                    "value": "",
                    "placeholder": "Please select",
                    "type": "dropdown",
                    "required": true,
                    "data": [
                      {
                        "label": "Female",
                        "value": "1"
                      },
                      {
                        "label": "Male",
                        "value": "2"
                      },
                      {
                        "label": "Others",
                        "value": "Another Label2"
                      }
                    ],
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  }
                ],
                [
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "dropdown",
                    "name": "dropdown",
                    "label": "",
                    "tooltip": "",
                    "value": "",
                    "placeholder": "Please select",
                    "type": "dropdown",
                    "required": true,
                    "data": [
                      {
                        "label": "Technical or Engineering, Business Management, CA",
                        "value": "1"
                      },
                      {
                        "label": "PhD, MS, MTech, ME",
                        "value": "2"
                      },
                      {
                        "label": " College or vocational training",
                        "value": "Another Label2"
                      },
                      {
                        "label": " Others",
                        "value": "Another Label3"
                      }
                    ],
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "dropdown",
                    "name": "dropdown",
                    "label": "",
                    "tooltip": "",
                    "value": "",
                    "placeholder": "Please select",
                    "type": "dropdown",
                    "required": true,
                    "data": [
                      {
                        "label": "Yes / हां",
                        "value": "1"
                      },
                      {
                        "label": " No / नहीं",
                        "value": "2"
                      }
                    ],
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "dropdown",
                    "name": "dropdown",
                    "label": "",
                    "tooltip": "",
                    "value": "",
                    "placeholder": "Please select",
                    "type": "dropdown",
                    "required": true,
                    "data": [
                      {
                        "label": "Female",
                        "value": "1"
                      },
                      {
                        "label": "Male",
                        "value": "2"
                      },
                      {
                        "label": "Others",
                        "value": "Another Label2"
                      }
                    ],
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  }
                ],
                [
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "dropdown",
                    "name": "dropdown",
                    "label": "",
                    "tooltip": "",
                    "value": "",
                    "placeholder": "Please select",
                    "type": "dropdown",
                    "required": true,
                    "data": [
                      {
                        "label": "Technical or Engineering, Business Management, CA",
                        "value": "1"
                      },
                      {
                        "label": "PhD, MS, MTech, ME",
                        "value": "2"
                      },
                      {
                        "label": " College or vocational training",
                        "value": "Another Label2"
                      },
                      {
                        "label": " Others",
                        "value": "Another Label3"
                      }
                    ],
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "dropdown",
                    "name": "dropdown",
                    "label": "",
                    "tooltip": "",
                    "value": "",
                    "placeholder": "Please select",
                    "type": "dropdown",
                    "required": true,
                    "data": [
                      {
                        "label": "Yes / हां",
                        "value": "1"
                      },
                      {
                        "label": " No / नहीं",
                        "value": "2"
                      }
                    ],
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "dropdown",
                    "name": "dropdown",
                    "label": "",
                    "tooltip": "",
                    "value": "",
                    "placeholder": "Please select",
                    "type": "dropdown",
                    "required": true,
                    "data": [
                      {
                        "label": "Female",
                        "value": "1"
                      },
                      {
                        "label": "Male",
                        "value": "2"
                      },
                      {
                        "label": "Others",
                        "value": "Another Label2"
                      }
                    ],
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  }
                ],
                [
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "dropdown",
                    "name": "dropdown",
                    "label": "",
                    "tooltip": "",
                    "value": "",
                    "placeholder": "Please select",
                    "type": "dropdown",
                    "required": true,
                    "data": [
                      {
                        "label": "Technical or Engineering, Business Management, CA",
                        "value": "1"
                      },
                      {
                        "label": "PhD, MS, MTech, ME",
                        "value": "2"
                      },
                      {
                        "label": " College or vocational training",
                        "value": "Another Label2"
                      },
                      {
                        "label": " Others",
                        "value": "Another Label3"
                      }
                    ],
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "dropdown",
                    "name": "dropdown",
                    "label": "",
                    "tooltip": "",
                    "value": "",
                    "placeholder": "Please select",
                    "type": "dropdown",
                    "required": true,
                    "data": [
                      {
                        "label": "Yes / हां",
                        "value": "1"
                      },
                      {
                        "label": " No / नहीं",
                        "value": "2"
                      }
                    ],
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "dropdown",
                    "name": "dropdown",
                    "label": "",
                    "tooltip": "",
                    "value": "",
                    "placeholder": "Please select",
                    "type": "dropdown",
                    "required": true,
                    "data": [
                      {
                        "label": "Female",
                        "value": "1"
                      },
                      {
                        "label": "Male",
                        "value": "2"
                      },
                      {
                        "label": "Others",
                        "value": "Another Label2"
                      }
                    ],
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  }
                ],
                [
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "dropdown",
                    "name": "dropdown",
                    "label": "",
                    "tooltip": "",
                    "value": "",
                    "placeholder": "Please select",
                    "type": "dropdown",
                    "required": true,
                    "data": [
                      {
                        "label": "Technical or Engineering, Business Management, CA",
                        "value": "1"
                      },
                      {
                        "label": "PhD, MS, MTech, ME",
                        "value": "2"
                      },
                      {
                        "label": " College or vocational training",
                        "value": "Another Label2"
                      },
                      {
                        "label": " Others",
                        "value": "Another Label3"
                      }
                    ],
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "dropdown",
                    "name": "dropdown",
                    "label": "",
                    "tooltip": "",
                    "value": "",
                    "placeholder": "Please select",
                    "type": "dropdown",
                    "required": true,
                    "data": [
                      {
                        "label": "Yes / हां",
                        "value": "1"
                      },
                      {
                        "label": " No / नहीं",
                        "value": "2"
                      }
                    ],
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "dropdown",
                    "name": "dropdown",
                    "label": "",
                    "tooltip": "",
                    "value": "",
                    "placeholder": "Please select",
                    "type": "dropdown",
                    "required": true,
                    "data": [
                      {
                        "label": "Female",
                        "value": "1"
                      },
                      {
                        "label": "Male",
                        "value": "2"
                      },
                      {
                        "label": "Others",
                        "value": "Another Label2"
                      }
                    ],
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  }
                ]
              ],
              "columns": [
                {
                  "id": "label",
                  "name": "Column 1",
                  "label": "Name / नाम",
                  "type": "label"
                },
                {
                  "id": "label",
                  "label": "Designation / पद",
                  "name": "label",
                  "type": "label"
                },
                {
                  "id": "label",
                  "label": "Role / भूमिका",
                  "name": "label",
                  "type": "label"
                },
                {
                  "id": "label",
                  "label": "\tQualifications / योग्यता",
                  "name": "label",
                  "type": "label"
                },
                {
                  "id": "label",
                  "label": "Relative of promoter? / प्रमोटर के सम्बन्धी हैं ?",
                  "name": "label",
                  "type": "label"
                },
                {
                  "id": "label",
                  "label": "Gender / लिंग",
                  "name": "label",
                  "type": "label"
                }
              ],
              "rowHead": [
                {
                  "name": "row 1"
                }
              ],
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "label",
              "name": "label",
              "label": "In case of any clarifications call, +91 6377205389",
              "tooltip": "",
              "type": "Label",
              "required": true,
              "validators": {},
              "layout": "col-lg-12"
            }
          ]
        },
        {
          "title": " Social Impact ",
          "description": "/ सामाजिक प्रभाव",
          "state": "normal",
          "canEnter": true,
          "canExit": false,
          "controls": [
            {
              "id": "area",
              "name": "area",
              "placeholder": "Enter Description",
              "label": "3.1 Who are the direct beneficiaries of the company? / कंपनी के प्रत्यक्ष लाभार्थी कौन हैं ?",
              "tooltip": "",
              "value": "",
              "type": "textarea",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "area",
              "name": "area",
              "placeholder": "Enter Description",
              "label": "3.2 Measures taken to track and carry out continual evaluation of the initiatives/projects and how the impact is measured under your Corporate Social Responsibilities. Please provide details of the investments/expenditures, the target segments and anticipated/ realised benefits from the project(s). /पहल / परियोजनाओं के निरंतर मूल्यांकन को ट्रैक करने और अपने कॉर्पोरेट सामाजिक जिम्मेदारियों के तहत किये गए कार्यों के प्रभाव को कैसे मापा जाता है, इस पर नज़र रखने के लिए किए गए उपाय। कृपया निवेश / व्यय, लक्ष्य खंडों और परियोजना से अनुमानित प्रत्याशित / वास्तविक लाभ पर जानकारी प्रदन करें ।",
              "tooltip": "",
              "value": "",
              "type": "textarea",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "table",
              "name": "table",
              "label": "",
              "tooltip": "",
              "value": "",
              "type": "table",
              "required": true,
              "rows": [
                [
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  }
                ],
                [
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  }
                ],
                [
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  }
                ],
                [
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  }
                ]
              ],
              "columns": [
                {
                  "id": "label",
                  "name": "Column 1",
                  "label": " 1.3 Type of Beneficiaries / लाभार्थियों का प्रकार",
                  "type": "label"
                },
                {
                  "id": "label",
                  "label": "Outreach in last year (number) / गत वर्ष के दौरान पहुंच (संख्या)",
                  "name": "label",
                  "type": "label"
                },
                {
                  "id": "label",
                  "label": "Outreach women in last year (number) / महिला लाभार्थियों तक पहुंच (संख्या)",
                  "name": "label",
                  "type": "label"
                },
                {
                  "id": "label",
                  "label": "Outreach cumulative (number) / कुल लाभार्थियों की संख्या",
                  "name": "label",
                  "type": "label"
                },
                {
                  "id": "label",
                  "label": "Outreach women cumulative (number) / कुल महिला लाभार्थियों तक पहुंच (संख्या में)",
                  "name": "label",
                  "type": "label"
                }
              ],
              "rowHead": [
                {
                  "name": "row 1"
                }
              ],
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "area",
              "name": "area",
              "placeholder": "Enter Description",
              "label": "3.4 What is the social value generated by your company in last financial year? (Kindly give the calculation as an annexure with all assumption and references. You may be asked to verify the calculation if needed. If not possible to give, give zero) / विगत वित्तीय वर्ष के दौरान आपकी कम्पनी द्वारा कौन से सामाजिक मूल्यों की स्थापना की गई ? (कृपया सामाजिक मूल्यों के परिमाण की गणना अलग से प्रदान करें एवं इस गणना में लिये गये आधार इत्यादि का विवरण देवे। आवश्यकता होने पर आपसे इस गणना को सिद्ध करने हेतु कहा जा सकता है। यदि सम्भव नहीं है तो कृपया शून्य भरें)",
              "tooltip": "",
              "value": "",
              "type": "textarea",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "area",
              "name": "area",
              "placeholder": "Enter Description",
              "label": "3.5 Impact story [Provide the story of a beneficiary of your company / आपकी कम्पनी के माध्यम से किसी लाभार्थी के जीवन में आये परिवर्तन का उदाहरण सहित विवरण प्रस्तुत करें।",
              "tooltip": "",
              "value": "",
              "type": "textarea",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "area",
              "name": "area",
              "placeholder": "Enter Description",
              "label": "3.6 Describe the problem faced by the beneficiary / लाभार्थी को पेश आई समस्याओं का विवरण देवें:",
              "tooltip": "",
              "value": "",
              "type": "textarea",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "area",
              "name": "area",
              "placeholder": "Enter Description",
              "label": "3.7 Which barriers of the beneficiary your company addressed? / आपकी संस्था द्वारा लाभार्थी की कौन-सी दिक्कतों का समाधान किया गया ?",
              "tooltip": "",
              "value": "",
              "type": "textarea",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "area",
              "name": "area",
              "placeholder": "Enter Description",
              "label": "3.8 How did you make your produce accessible and affordable to the beneficiary? / आपके द्वारा उत्पादों तक लाभार्थियों की पहुंच केसे बनाई गई ?",
              "tooltip": "",
              "value": "",
              "type": "textarea",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "area",
              "name": "area",
              "placeholder": "Enter Description",
              "label": "3.9 Benefits the beneficiary incurred. Provide social value if possible. / लाभार्थियों को क्या लाभ हुए ? यदि संभव हो तो सामाजिक मूल्य का विवरण देवे।",
              "tooltip": "",
              "value": "",
              "type": "textarea",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "label",
              "name": "label",
              "label": "In case of any clarifications call, +91 6377205389",
              "tooltip": "",
              "type": "Label",
              "required": true,
              "validators": {},
              "layout": "col-lg-12"
            }
          ]
        },
        {
          "title": "Business operations and performance ",
          "description": "/ व्यव्साय सन्चलन एवं प्रदर्शन",
          "state": "normal",
          "canEnter": true,
          "canExit": false,
          "controls": [
            {
              "id": "area",
              "name": "area",
              "placeholder": "Enter Description",
              "label": "4.1 Please provide overview about your company’s business, the problem or need it hopes to address in society and the major products or services it delivers to do so / कृपया अपनी कंपनी के व्यवसाय के बारे में अवलोकन का विवरण प्रदान करें एवं उन समस्याओं का विवरण देवे जिन्हें कि आप अपने प्रमुख उत्पादों और सेवाओं द्वारा हल करना चाहते हैं",
              "tooltip": "",
              "value": "",
              "type": "textarea",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "label",
              "name": "label",
              "label": "Digital presence / डिजीटल उपस्थिति",
              "tooltip": "",
              "type": "Label",
              "required": true,
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "radio",
              "name": "radio",
              "label": "4.2 Does your company have a website? / क्या आपकी कम्पनी का वेबसाईट है ?",
              "tooltip": "",
              "value": "",
              "type": "radio",
              "required": true,
              "data": [
                {
                  "label": "Yes / हां",
                  "value": "1"
                },
                {
                  "label": "No / नहीं",
                  "value": "2"
                }
              ],
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "Enter Text Here",
              "label": "4.3 If yes, provide URL (http://example.com) / यदि हां, तो यूआरएल प्रदान करें:",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "radio",
              "name": "radio",
              "label": "4.4 Does your company have social media presence? / क्या आपकी कंपनी में सोशल मीडिया मौजूद है?",
              "tooltip": "",
              "value": "",
              "type": "radio",
              "required": true,
              "data": [
                {
                  "label": "Yes / हां",
                  "value": "1"
                },
                {
                  "label": " No / नहीं",
                  "value": "2"
                }
              ],
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "label",
              "name": "label",
              "label": "4.5 URL to the following pages, if any? / निम्नलिखित पृष्ठों का URL, यदि कोई हो ?",
              "tooltip": "",
              "type": "Label",
              "required": true,
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "Enter Text Here",
              "label": "Instagram",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "Enter Text Here",
              "label": "Facebook",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "Enter Text Here",
              "label": "LinkedIn",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "Enter Text Here",
              "label": "Twitter",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "label",
              "name": "label",
              "label": "4.6 Financial performance at a glance / वित्त सम्बन्धी प्रमुख बिन्दु (audited financial statements for FY 2020-21, FY 2019-20 and FY 2018-19 must be submitted with the form) / (वित्तीय वर्ष 2020-21, 2019-20 एवं 2018-19 के ऑडिट किए गए वित्तीय विवरण इस फाॅर्म के साथ प्रस्तुत किए जाने चाहिए)",
              "tooltip": "",
              "type": "Label",
              "required": true,
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "table",
              "name": "table",
              "label": "",
              "tooltip": "",
              "value": "",
              "type": "table",
              "required": true,
              "rows": [
                [
                  {
                    "id": "label",
                    "name": "label",
                    "label": "Total turnover / sales / कुल टर्न ओवर / विक्रय",
                    "type": "label",
                    "required": true,
                    "validators": {},
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  }
                ],
                [
                  {
                    "id": "label",
                    "name": "label",
                    "label": "Gross profit (Sales – Cost of goods Sold) / कुल लाभ (विक्रय - बेचे गये माल की कीमत)",
                    "type": "label",
                    "required": true,
                    "validators": {},
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  }
                ],
                [
                  {
                    "id": "label",
                    "name": "label",
                    "label": "Total expenditure incurred in CSR activities / सामाजिक दायित्व की गतिविधियो पर कुल व्यय",
                    "type": "label",
                    "required": true,
                    "validators": {},
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  }
                ]
              ],
              "columns": [
                {
                  "id": "label",
                  "name": "Column 1",
                  "label": " Particulars / विवरण",
                  "type": "label"
                },
                {
                  "id": "label",
                  "label": "FY 2020-21 / वित्तीय वर्ष 2020-21",
                  "name": "label",
                  "type": "label"
                },
                {
                  "id": "label",
                  "label": "FY 2019-20 / वित्तीय वर्ष 2019-20",
                  "name": "label",
                  "type": "label"
                },
                {
                  "id": "label",
                  "label": "FY 2018-19 / वित्तीय वर्ष 2018-19",
                  "name": "label",
                  "type": "label"
                }
              ],
              "rowHead": [
                {
                  "name": "row 1"
                }
              ],
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "label",
              "name": "label",
              "label": "Innovation measures / नवाचार हेतु उपाय",
              "tooltip": "",
              "type": "Label",
              "required": true,
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "label",
              "name": "label",
              "label": "Process and effort / प्रक्रिया एवं प्रयास",
              "tooltip": "",
              "type": "Label",
              "required": true,
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "radio",
              "name": "radio",
              "label": "4.7 Do you have any formal process that encourage innovation or new product development? / क्या आपके पास कोई औपचारिक प्रक्रिया है जो नवाचार या नए उत्पाद विकास को प्रोत्साहित करती है?",
              "tooltip": "",
              "value": "",
              "type": "radio",
              "required": true,
              "data": [
                {
                  "label": "Yes / हां",
                  "value": "1"
                },
                {
                  "label": " No / नहीं",
                  "value": "2"
                }
              ],
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "checkbox",
              "name": "checkbox",
              "label": "4.8 How does your company gather ideas on new products or services? Select options that apply to you: / आपकी कंपनी नए उत्पादों या सेवाओं पर कैसे विचार एकत्र करती है? उन विकल्पों का चयन करें जो आप पर लागू होते हैं:",
              "tooltip": "",
              "value": [],
              "type": "checkbox",
              "required": true,
              "data": [
                {
                  "label": "There is a process for gathering ideas from employees / कर्मचारियों से विचार एकत्र करने के लिए एक प्रक्रिया है।",
                  "value": "Test1"
                },
                {
                  "label": "There is a formal meeting of executives to discuss innovative ideas / नवीन विचारों पर चर्चा करने के लिए अधिकारियों की एक औपचारिक बैठक होती है।",
                  "value": "Test2"
                },
                {
                  "label": "There is a budget allocation process for innovation initiatives / नवाचार की पहल के लिए एक बजट आवंटन प्रक्रिया है।",
                  "value": "Another Label2"
                },
                {
                  "label": "People have full time responsibility for innovation and development initiatives / लोगों के पास नवाचार और विकास की पहल के लिए पूर्णकालिक जिम्मेदारी है।",
                  "value": "Another Label3"
                }
              ],
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "radio",
              "name": "radio",
              "label": "4.9 Were any viable product, service or best practice developed out of internal innovation in the last 12 months? / क्या पिछले 12 महीनों में आंतरिक नवाचार के माध्यम से कोई व्यवहारिक उत्पाद, सेवा या उत्तम नीति विकसित की गई?",
              "tooltip": "",
              "value": "",
              "type": "radio",
              "required": true,
              "data": [
                {
                  "label": "Yes / हां",
                  "value": "1"
                },
                {
                  "label": " No / नहीं",
                  "value": "2"
                }
              ],
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "area",
              "name": "area",
              "placeholder": "Enter Description",
              "label": "4.10 If yes, please list them and write a short note about them: / यदि हाँ, तो कृपया उन्हें सूचीबद्ध करें और उनके बारे में एक छोटी टिप्पणी लिखेंः",
              "tooltip": "",
              "value": "",
              "type": "textarea",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "area",
              "name": "area",
              "placeholder": "Enter Description",
              "label": "4.11 Provide details of any periodic, systematic and documented review of customer perception through survey, feedback, market share analysis, customer complaints analysis, etc. / आपके व्यवसाय में मॉर्केटिंग और सम्बंधित क्षेत्रों के बारे में नियमित तरीके से रिसर्च करना, जानकारी इकठ्ठा करना, प्रतिस्पर्धा के बारे में समझना, कस्टमर फीडबैक लेना, कस्टमर कंप्लेंट को अटेंड करना - इन सब कार्यों की प्रक्रिया क्या है?",
              "tooltip": "",
              "value": "",
              "type": "textarea",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "radio",
              "name": "radio",
              "label": "4.12 Has your company purchased and deployed technology to aid or encourage innovation? / क्या आपकी कंपनी ने नवाचार को सहायता या प्रोत्साहित करने के लिए प्रौद्योगिकी खरीदी और लागू की है?",
              "tooltip": "",
              "value": "",
              "type": "radio",
              "required": true,
              "data": [
                {
                  "label": " Yes / हां",
                  "value": "1"
                },
                {
                  "label": " No / नहीं",
                  "value": "2"
                }
              ],
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "area",
              "name": "area",
              "placeholder": "Enter Description",
              "label": " 4.13 If yes, please provide details of the new products developed, quality improvement exercise undertaken, new technology adopted and technology agreements made. In short, please tell us of your efforts to innovate, improve quality and design of your products to further the goal of helping society or the segment of society you have chosen to serve / यदि हाँ, तो कृपया विकसित किए गए नए उत्पादों, गुणवत्ता सुधार अभ्यास, नई तकनीक को अपनाया और प्रौद्योगिकी समझौतों का विवरण प्रदान करें। संक्षेप में, कृपया हमें समाज को या समाज के उस हिस्से की मदद करने के लिए अपने उत्पादों की नवीनता, गुणवत्ता और डिजाइन में सुधार करने के अपने प्रयासों के बारे में बताएं जिन्हें आपने चुना है।",
              "tooltip": "",
              "value": "",
              "type": "textarea",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "area",
              "name": "area",
              "placeholder": "Enter Description",
              "label": "4. 14 Provide details of the social value your company will provide through the innovation in the next 3 years: / आपकी कंपनी अगले 3 वर्षों में नवाचार के माध्यम से प्रदान करेगी सामाजिक मूल्य का विवरणः",
              "tooltip": "",
              "value": "",
              "type": "textarea",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "label",
              "name": "label",
              "label": "Employees / कर्मचारी",
              "tooltip": "",
              "type": "Label",
              "required": true,
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "table",
              "name": "table",
              "label": "4.15 Total number of employees / कर्मचारियों की संख्या (Including temporary and contractual) / (अस्थायी और अनुबंध सहित)",
              "tooltip": "",
              "value": "",
              "type": "table",
              "required": true,
              "rows": [
                [
                  {
                    "id": "label",
                    "name": "label",
                    "label": "Male / पुरुष",
                    "type": "label",
                    "required": true,
                    "validators": {},
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  }
                ],
                [
                  {
                    "id": "label",
                    "name": "label",
                    "label": "Female / महिलाएं",
                    "type": "label",
                    "required": true,
                    "validators": {},
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  }
                ],
                [
                  {
                    "id": "label",
                    "name": "label",
                    "label": "Other / अन्य",
                    "type": "label",
                    "required": true,
                    "validators": {},
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  }
                ],
                [
                  {
                    "id": "label",
                    "name": "label",
                    "label": "Total working persons including management, employees and contract staff/ labour. / आपके व्यवसाय में कार्यरत प्रबंधन और अनुबंध कर्मचारियों सहित सभी लोगो की संख्या ।",
                    "type": "label",
                    "required": true,
                    "validators": {},
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  }
                ]
              ],
              "columns": [
                {
                  "id": "label",
                  "name": "Column 1",
                  "label": " Particulars / विववरण",
                  "type": "label"
                },
                {
                  "id": "label",
                  "label": "as on 31.03.2019",
                  "name": "label",
                  "type": "label"
                },
                {
                  "id": "label",
                  "label": "\tas on 31.03.2020",
                  "name": "label",
                  "type": "label"
                },
                {
                  "id": "label",
                  "label": "\tas on 31.03.2021",
                  "name": "label",
                  "type": "label"
                }
              ],
              "rowHead": [
                {
                  "name": "row 1"
                }
              ],
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "table",
              "name": "table",
              "label": "4.16 Total number of employees with technical or professional qualifications (PhD, MS, M.Tech, ME, B.Tech, BE, MBA, CA etc.) / तकनीकी या व्यावसायिक योग्यता वाले कर्मचारियों की संख्या (पीएचडी, एमएस, एम.टेक, एमई, बी.टेक, बीई, एमबीए, सीए आदि)",
              "tooltip": "",
              "value": "",
              "type": "table",
              "required": true,
              "rows": [
                [
                  {
                    "id": "label",
                    "name": "label",
                    "label": "Male / पुरुष",
                    "type": "label",
                    "required": true,
                    "validators": {},
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  }
                ],
                [
                  {
                    "id": "label",
                    "name": "label",
                    "label": "Female / महिलाएं",
                    "type": "label",
                    "required": true,
                    "validators": {},
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  }
                ],
                [
                  {
                    "id": "label",
                    "name": "label",
                    "label": "Other / अन्य",
                    "type": "label",
                    "required": true,
                    "validators": {},
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  }
                ]
              ],
              "columns": [
                {
                  "id": "label",
                  "name": "Column 1",
                  "label": "Particulars / विववरण",
                  "type": "label"
                },
                {
                  "id": "label",
                  "label": "\tas on 31.03.2019",
                  "name": "label",
                  "type": "label"
                },
                {
                  "id": "label",
                  "label": "as on 31.03.2020",
                  "name": "label",
                  "type": "label"
                },
                {
                  "id": "label",
                  "label": "as on 31.03.2021",
                  "name": "label",
                  "type": "label"
                }
              ],
              "rowHead": [
                {
                  "name": "row 1"
                }
              ],
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "table",
              "name": "table",
              "label": "4.17 Total people costs (include management, staff and workman wages, salaries, benefits, welfare, perks etc.), / कुल लोगों की लागत (प्रबंधन, कर्मचारियों और श्रम मजदूरी, वेतन, लाभ, कल्याण, भत्तों आदि शामिल हैं)",
              "tooltip": "",
              "value": "",
              "type": "table",
              "required": true,
              "rows": [
                [
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  }
                ]
              ],
              "columns": [
                {
                  "id": "label",
                  "name": "Column 1",
                  "label": "",
                  "type": "label"
                },
                {
                  "id": "label",
                  "label": "",
                  "name": "label",
                  "type": "label"
                },
                {
                  "id": "label",
                  "label": "",
                  "name": "label",
                  "type": "label"
                }
              ],
              "rowHead": [
                {
                  "name": "row 1"
                }
              ],
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "area",
              "name": "area",
              "placeholder": "Enter Description",
              "label": "4.18 Describe specific initiatives and facilities for women in the work force to augment their participation, comfort, safety, welfare and individual development and their responsibilities within the organisation. / आपकी कंपनी में कार्यरत महिलाओं के प्रोहत्साहन सम्बंधित नीतिगत पहल, उनकी सुरक्षा एवं सुश्रुषा के कार्यों का वर्णन करें।",
              "tooltip": "",
              "value": "",
              "type": "textarea",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "Enter Text Here",
              "label": "4.19 How many people left your organisation in the last 12 months? / पिछले 12 महीनों में कितने लोगों ने आपका संगठन छोड़ा?",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "Enter Text Here",
              "label": "4.20 How many new people have joined your organization in the last 12 months? / पिछले 12 महीनों में आपके संगठन में कितने नए लोग शामिल हुए हैं?",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "label",
              "name": "label",
              "label": "In case of any clarifications call, +91 6377205389",
              "tooltip": "",
              "type": "Label",
              "required": true,
              "validators": {},
              "layout": "col-lg-12"
            }
          ]
        },
        {
          "title": "Key initiatives and achievements ",
          "description": "/ प्रमुख पहल और उपलब्धियां",
          "state": "normal",
          "canEnter": true,
          "canExit": false,
          "controls": [
            {
              "id": "label",
              "name": "label",
              "label": "Training and skill development / प्रशिक्षण और कौशल विकास:",
              "tooltip": "",
              "type": "Label",
              "required": true,
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "radio",
              "name": "radio",
              "label": "5.1 Do you provide any training to employees? / क्या आप कर्मचारियों को कोई प्रशिक्षण प्रदान करते हैं?",
              "tooltip": "",
              "value": "",
              "type": "radio",
              "required": true,
              "data": [
                {
                  "label": " Yes / हां",
                  "value": "1"
                },
                {
                  "label": "No / नहीं",
                  "value": "2"
                }
              ],
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "radio",
              "name": "radio",
              "label": "5.2 What is the average frequency of training given to employees/ कर्मचारियों को दिए जाने वाले प्रशिक्षण की औसत आवृत्ति?",
              "tooltip": "",
              "value": "",
              "type": "radio",
              "required": true,
              "data": [
                {
                  "label": "Quarterly / त्रैमासिक",
                  "value": "1"
                },
                {
                  "label": "Half yearly / अर्धवार्षिक",
                  "value": "2"
                },
                {
                  "label": "Annually / वार्षिक",
                  "value": "Another Label2"
                },
                {
                  "label": "Every 2 years / प्रत्येक 2 वर्षों में",
                  "value": "Another Label3"
                }
              ],
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "radio",
              "name": "radio",
              "label": "5.3 What is the average time spent by employees (excluding trainees and apprentices) on training in a year/ वर्ष में प्रशिक्षण पर कर्मचारियों (प्रशिक्षुओं को छोड़कर) द्वारा बिताया औसत समय?",
              "tooltip": "",
              "value": "",
              "type": "radio",
              "required": true,
              "data": [
                {
                  "label": "<8 hours / 8 घण्टे",
                  "value": "1"
                },
                {
                  "label": "<20 hours / 20 घण्टे",
                  "value": "2"
                },
                {
                  "label": "<40 hours / 40 घण्टे",
                  "value": "Another Label2"
                },
                {
                  "label": "More then 40 hours / 40 घण्टे से अधिक",
                  "value": "Another Label3"
                }
              ],
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "Enter Text Here",
              "label": "5.4 What are the different methods used to train and develop employees? / कर्मचारियों को प्रशिक्षित करने और विकसित करने के लिए उपयोग किए जाने वाले विभिन्न तरीके क्या हैं?",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "radio",
              "name": "radio",
              "label": "5.5 Do you have any employee feedback mechanism in place? / क्या आपके पास कर्मचारियों की प्रतिक्रिया प्राप्त करने का कोई तंत्र है?",
              "tooltip": "",
              "value": "",
              "type": "radio",
              "required": true,
              "data": [
                {
                  "label": "Yes / हां",
                  "value": "1"
                },
                {
                  "label": "No / नहीं",
                  "value": "2"
                }
              ],
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "Enter Text Here",
              "label": "5.6 What employee appreciation mechanism(s) are in place? / कर्मचारियों को प्रोत्साहन प्रदान करने हेतु क्या प्रक्रिया अपनाते हैं?",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "Enter Text Here",
              "label": "5.7 How do you measure employee satisfaction level? / आप कर्मचारी संतुष्टि के स्तर को कैसे मापते हैं?",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "label",
              "name": "label",
              "label": "Quality measures / गुणवत्ता के उपाय:",
              "tooltip": "",
              "type": "Label",
              "required": true,
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "area",
              "name": "area",
              "placeholder": "Enter Description",
              "label": "5.8 Describe any initiatives for conservation of energy and water. / ऊर्जा और जल - संरक्षण के लिए किसी विशिष्ट प्रयास का वर्णन करें।",
              "tooltip": "",
              "value": "",
              "type": "textarea",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "radio",
              "name": "radio",
              "label": "5.9 Do you have any specific program to improve quality in your organisation? / क्या आपके पास अपने संगठन में गुणवत्ता में सुधार करने के लिए कोई विशिष्ट कार्यक्रम है?",
              "tooltip": "",
              "value": "",
              "type": "radio",
              "required": true,
              "data": [
                {
                  "label": "Yes / हां",
                  "value": "1"
                },
                {
                  "label": " No / नहीं",
                  "value": "2"
                }
              ],
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "Enter Text Here",
              "label": "5.10 How do you involve your employees in quality improvement programmes? / गुणवत्ता सुधार कार्यक्रमों में आप अपने कर्मचारियों को कैसे शामिल करते हैं?",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "radio",
              "name": "radio",
              "label": "5.11 Are you measuring compliance with quality standards? / क्या आप गुणवत्ता मानकों के अनुपालन को माप रहे हैं?",
              "tooltip": "",
              "value": "",
              "type": "radio",
              "required": true,
              "data": [
                {
                  "label": " Yes / हां",
                  "value": "1"
                },
                {
                  "label": " No / नहीं",
                  "value": "2"
                }
              ],
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "area",
              "name": "area",
              "placeholder": "Enter Description",
              "label": "5.12. If yes, how do you do this? Do you have internal or external audits? Please write a 200 word note on your quality systems? / यदि हाँ, तो आप यह कैसे करते हैं? क्या आपके पास आंतरिक या बाहरी ऑडिट हैं? कृपया अपने गुणवत्ता प्रणालियों पर 200 शब्द का नोट लिखें?",
              "tooltip": "",
              "value": "",
              "type": "textarea",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "label",
              "name": "label",
              "label": "Patents and trademarks applied and received / पेटेन्ट एवं ट्रेडमार्क हेतु किये गये आवेदन",
              "tooltip": "",
              "type": "Label",
              "required": true,
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "label",
              "name": "label",
              "label": "5.13 Please provide details of the patents and trade-marks received or applied for. / पेटेंट और ट्रेडमार्क हेतु किये गये आवेदन अथवा प्राप्त किए गए पेटेंट और ट्रेडमार्क का विवरण प्रदान करें?",
              "tooltip": "",
              "type": "Label",
              "required": true,
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "table",
              "name": "table",
              "label": "",
              "tooltip": "",
              "value": "",
              "type": "table",
              "required": true,
              "rows": [
                [
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  }
                ],
                [
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  }
                ],
                [
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  }
                ]
              ],
              "columns": [
                {
                  "id": "label",
                  "name": "Column 1",
                  "label": " Patent or trademark / पेटेंट और ट्रेडमार्क",
                  "type": "label"
                },
                {
                  "id": "label",
                  "label": "Status received or applied / वस्तुस्थिति: प्राप्त या आवेदन किये गये",
                  "name": "label",
                  "type": "label"
                },
                {
                  "id": "label",
                  "label": "Year in which received or applied / प्राप्ति का वर्ष या किये गये आवेदन का वर्ष",
                  "name": "label",
                  "type": "label"
                }
              ],
              "rowHead": [
                {
                  "name": "row 1"
                }
              ],
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "label",
              "name": "label",
              "label": "Awards / प्राप्त पुरस्कार",
              "tooltip": "",
              "type": "Label",
              "required": true,
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "label",
              "name": "label",
              "label": "5.14 Please provide details of any awards or accolades won in the past. / अतीत में जीते गए किसी पुरस्कार या प्रशंसा पत्र के विवरण प्रदान करें।",
              "tooltip": "",
              "type": "Label",
              "required": true,
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "table",
              "name": "table",
              "label": "",
              "tooltip": "",
              "value": "",
              "type": "table",
              "required": true,
              "rows": [
                [
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  }
                ],
                [
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  }
                ],
                [
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  }
                ]
              ],
              "columns": [
                {
                  "id": "label",
                  "name": "Column 1",
                  "label": " Award / पुरस्कार का नाम",
                  "type": "label"
                },
                {
                  "id": "label",
                  "label": "Basis or category / आधार या श्रेणी",
                  "name": "label",
                  "type": "label"
                },
                {
                  "id": "label",
                  "label": "Year / वर्ष",
                  "name": "label",
                  "type": "label"
                },
                {
                  "id": "label",
                  "label": "Additional Information / अतिरिक्त जानकारी",
                  "name": "label",
                  "type": "label"
                }
              ],
              "rowHead": [
                {
                  "name": "row 1"
                }
              ],
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "label",
              "name": "label",
              "label": "Environment (natural) Protection and safety of employees / पर्यावरण संरक्षण एवं कर्मचारी सुरक्षा नीतियां।",
              "tooltip": "",
              "type": "Label",
              "required": true,
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "area",
              "name": "area",
              "placeholder": "Enter Description",
              "label": "5.15 Provide details of the initiatives undertaken and achievements relating to Environmental protection and safety / पर्यावरण संरक्षण और सुरक्षा से संबंधित पहलों और उपलब्धियों का विवरण प्रदान करेंः",
              "tooltip": "",
              "value": "",
              "type": "textarea",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "area",
              "name": "area",
              "placeholder": "Enter Description",
              "label": "5.16 Describe any initiatives for conservation of energy and water. / ऊर्जा और जल - संरक्षण के लिए किसी विशिष्ट प्रयास का वर्णन करें।",
              "tooltip": "",
              "value": "",
              "type": "textarea",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "table",
              "name": "table",
              "label": "5.17 Provide details of policy initiatives for safety of employees and corrective actions taken in case of mishaps, if any, in the last 3 years. / पिछले 3 वर्षों में कर्मचारियों की सुरक्षा के लिए नीतिगत पहलों और दुर्घटना की स्थिति में सुधारात्मक कार्रवाइयों, यदि कोई हो, का विवरण दें।”",
              "tooltip": "",
              "value": "",
              "type": "table",
              "required": true,
              "rows": [
                [
                  {
                    "id": "label",
                    "name": "label",
                    "label": "Number Of Incidents",
                    "type": "label",
                    "required": true,
                    "validators": {},
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  }
                ],
                [
                  {
                    "id": "label",
                    "name": "label",
                    "label": "Number of injuries\t",
                    "type": "label",
                    "required": true,
                    "validators": {},
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  }
                ],
                [
                  {
                    "id": "label",
                    "name": "label",
                    "label": "Number of deaths",
                    "type": "label",
                    "required": true,
                    "validators": {},
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  },
                  {
                    "id": "text",
                    "name": "text",
                    "placeholder": "Enter Text Here",
                    "label": "",
                    "value": "",
                    "type": "text",
                    "required": true,
                    "validators": {
                      "required": false
                    },
                    "layout": "col-lg-12"
                  }
                ]
              ],
              "columns": [
                {
                  "id": "label",
                  "name": "Column 1",
                  "label": " Region",
                  "type": "label"
                },
                {
                  "id": "label",
                  "label": "2020-21",
                  "name": "label",
                  "type": "label"
                },
                {
                  "id": "label",
                  "label": "2019-20",
                  "name": "label",
                  "type": "label"
                },
                {
                  "id": "label",
                  "label": "\t2018-19",
                  "name": "label",
                  "type": "label"
                }
              ],
              "rowHead": [
                {
                  "name": "row 1"
                }
              ],
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "label",
              "name": "label",
              "label": "In case of any clarifications call, +91 6377205389",
              "tooltip": "",
              "type": "Label",
              "required": true,
              "validators": {},
              "layout": "col-lg-12"
            }
          ]
        },
        {
          "title": "Auditor ",
          "description": "/ ऑडिटर",
          "state": "normal",
          "canEnter": true,
          "canExit": false,
          "controls": [
            {
              "id": "text",
              "name": "text",
              "placeholder": "Enter Text Here",
              "label": "7.1 Name / नाम",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "Enter Text Here",
              "label": "7.2 Contact number / सम्पर्क नम्बर",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "Enter Text Here",
              "label": "7.3 Address / पता",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "dropdown",
              "name": "dropdown",
              "label": "7.3.1 State / राज्य",
              "tooltip": "",
              "value": "",
              "placeholder": "Please select",
              "type": "dropdown",
              "required": true,
              "data": [
                {
                  "label": "Rajasthan",
                  "value": "1"
                },
                {
                  "label": "Andhra Pradesh",
                  "value": "2"
                },
                {
                  "label": "Asam",
                  "value": "Another Label2"
                },
                {
                  "label": "Goa",
                  "value": "Another Label3"
                },
                {
                  "label": "Gujarat",
                  "value": "Another Label4"
                }
              ],
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "dropdown",
              "name": "dropdown",
              "label": "7.3.2 District / जिला",
              "tooltip": "",
              "value": "",
              "placeholder": "Please select",
              "type": "dropdown",
              "required": true,
              "data": [
                {
                  "label": "Amguri",
                  "value": "1"
                },
                {
                  "label": "Anandnagaar",
                  "value": "2"
                },
                {
                  "label": "Barpeta",
                  "value": "Another Label2"
                },
                {
                  "label": "Barpeta Road",
                  "value": "Another Label3"
                }
              ],
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "Enter Text Here",
              "label": "7.3.3 Pincode / पिनकोड",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "checkbox",
              "name": "checkbox",
              "label": "7.4 Documents submitted – Please check financial statements for / संलग्न दस्तावेज - कृपया निम्नानुसार वर्षों का वित्तीय विवरण संलग्न करें:",
              "tooltip": "",
              "value": [],
              "type": "checkbox",
              "required": true,
              "data": [
                {
                  "label": "FY 18-19 / वित्तीय वर्ष 18-19",
                  "value": "Test1"
                },
                {
                  "label": "FY 19-20 / वित्तीय वर्ष 19-20",
                  "value": "Test2"
                },
                {
                  "label": "FY 20-21 / वित्तीय वर्ष 20-21",
                  "value": "Another Label2"
                }
              ],
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "label",
              "name": "label",
              "label": "Documents that are mandatory / उन दस्तावेजों की सूची, जो कि आवश्यक हैं:",
              "tooltip": "",
              "type": "Label",
              "required": true,
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "file",
              "name": "file",
              "label": "7.5 Audited financial statements of last 3 years / पिछले तीन वर्षों के अंकेक्षित वित्तीय विवरण",
              "tooltip": "",
              "type": "file",
              "value": "",
              "required": true,
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "file",
              "name": "file",
              "label": "7.6 Copy of any of these: / इनमें से किसी एक की प्रति: Company incorporation certificate, PAN, Udyog Aadhar / कम्पनी का निगमन प्रमाणपत्र, स्थाई लेखा संख्या, उद्योग आधार",
              "tooltip": "",
              "type": "file",
              "value": "",
              "required": true,
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "label",
              "name": "label",
              "label": "Documents will add weight to your application and are optional / अन्य वैकल्पिक दस्तावेज जिनसे आपके आवेदन को बल मिले",
              "tooltip": "",
              "type": "Label",
              "required": true,
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "file",
              "name": "file",
              "label": "7.7 Calculation of Social Value, Videos / Photos / सामाजिक मूल्य, वीडियो / तस्वीरें की गणना",
              "tooltip": "",
              "type": "file",
              "value": "",
              "required": true,
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "label",
              "name": "label",
              "label": "Declaration / घोषणा",
              "tooltip": "",
              "type": "Label",
              "required": true,
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "label",
              "name": "label",
              "label": "7.8 We understand that we have shared this information in confidence and exclusively for the purpose of the Excellence Awards, and UCCI may use the information for its goals in anonymized or aggregated manner only without identifying any person or business, except if required by law or any relevant regulations. We understand and agree that UCCI would take reasonable steps to ensure data confidentiality, and would not be liable for any expenses, costs or damages in this regard. / हम समझते हैं कि हमने इस जानकारी को गोपनीयता के आश्वासन पर और विशेष रूप से उत्कृष्टता पुरस्कारों के उद्देश्य के लिए साझा किया है, और यूसीसीआई अपने लक्ष्यों के लिए जानकारी का उपयोग केवल किसी व्यक्ति या व्यवसाय की पहचान का खुलासा किये बिना गुमनाम रूप से या सामूहिक तरीके से कर सकता है, सिवाय इसके कि कानून या किसी प्रासंगिक विनियमों के प्रावधानों में आवश्यक हो । हम समझते हैं और सहमत हैं कि यूसीसीआई डेटा गोपनीयता सुनिश्चित करने के लिए उचित कदम उठाएगा, और इस संबंध में हुए किसी भी खर्च, लागत या नुकसान के लिए उत्तरदायी नहीं होगा।।",
              "tooltip": "",
              "type": "Label",
              "required": true,
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "Enter Text Here",
              "label": "7.8.1 Name of respondent / आवेदनकर्ता का नाम:",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "Enter Text Here",
              "label": "7.8.2 Designation / पद",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "text",
              "name": "text",
              "placeholder": "Enter Text Here",
              "label": "7.8.3 Email / ई-मेल",
              "tooltip": "",
              "value": "",
              "type": "text",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "date",
              "name": "date",
              "label": "7.8.4 Date / दिनांक",
              "tooltip": "",
              "type": "date",
              "value": "",
              "required": true,
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "file",
              "name": "file",
              "label": "7.8.5 Signature / हस्ताक्षर",
              "tooltip": "",
              "type": "file",
              "value": "",
              "required": true,
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "file",
              "name": "file",
              "label": "7.8.6 Firm / Company Stamp / फर्म / कम्पनी की सील:",
              "tooltip": "",
              "type": "file",
              "value": "",
              "required": true,
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "area",
              "name": "area",
              "placeholder": "Enter Description",
              "label": "7.8.7 Remarks/ राय",
              "tooltip": "",
              "value": "",
              "type": "textarea",
              "required": true,
              "validators": {
                "required": false
              },
              "layout": "col-lg-12"
            },
            {
              "id": "label",
              "name": "label",
              "label": "In case of any clarifications call, +91 6377205389",
              "tooltip": "",
              "type": "Label",
              "required": true,
              "validators": {},
              "layout": "col-lg-12"
            }
          ]
        }
      ]
    }
    console.log(this.sections)
  }
  getExcelFromJson() {
    let data : any = [{}]
    data = Object.assign([],this.sections[3]?.controls);
    // this.sections[0]?.controls?.forEach((object:any,index:any) => {
    //   console.log(data, object)
    //   if('label' in object) {
    //     data[index].label = object.label;
    //   }
    //   else if('value' in object) {
    //     data[index].value = object.value;
    //   }
    // });
    // console.log(data)
    // data = [{
    //   name: 'test',
    //   subject: 'testing'
    // },{
    //   name: 'test1',
    //   subject: 'testing2'
    // }]
    this.excelService.exportAsExcelFile(data, 'export-to-excel');
  }

}
