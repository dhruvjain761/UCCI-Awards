import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-csr-form',
  templateUrl: './csr-form.component.html',
  styleUrls: ['./csr-form.component.scss']
})
export class CsrFormComponent implements OnInit {
  sections : any = [];
  breadcrumb: any[] = [
    {
      title: 'form',
      subTitle: 'Masters',
    },
  ];
  constructor(private router : ActivatedRoute) { }
  ngOnInit(): void {
    let slug = this.router.snapshot.params;
    console.log(slug);
    
    if(slug.slug == 'manufacturingForm'){
      this.sections  = [
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
              "label": "1.2 Type of company",
              "tooltip": "",
              "value": "",
              "type": "radio",
              "required": true,
              "data": [
                {
                  "label": "Proprietorship",
                  "value": "1"
                },
                {
                  "label": "Partnership",
                  "value": "2"
                },
                {
                  "label": "Private Limited",
                  "value": "Another Label2"
                },
                {
                  "label": "Public Limited",
                  "value": "Another Label3"
                },
                {
                  "label": "Limited Liability Partnership",
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
              "id": "label",
              "name": "label",
              "label": "2.1 Describe your organization's strategic planning process viz , key activities & their frequency and participants in these process",
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
              "id": "label",
              "name": "label",
              "label": "2.2 Please Describe how do you communicate your company's vision to your employees and stakeholders",
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
              "id": "radio",
              "name": "radio",
              "label": "2.3 Do you set timelines for achieving the company's goals and objectives ? क्या आप कंपनी के लक्ष्यों और उद्देश्यों को प्राप्त करने के लिए समय-सीमा निर्धारित करते हैं?",
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
              "label": "2.4 Do employees understand the purpose and the objectives (measurable) of the organization ? क्या कर्मचारी संगठन के उद्देश्य और उद्देश्यों (मापनीय) को समझते हैं? )",
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
              "label": "2.5 Do you assign each objective to some responsible person and outline his/her role and responsibilities ? क्या आप प्रत्येक उद्देश्य को किसी जिम्मेदार व्यक्ति को सौंपते हैं और उसकी भूमिका और जिम्मेदारियों की रूपरेखा तैयार करते हैं?",
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
              "label": "2.6 Why do you think your organization is the best and should be selected to win this award ? / आपको क्यों लगता है कि आपका संगठन सबसे अच्छा है और इस पुरस्कार को जीतने के लिए चुना जाना चाहिए?",
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
              "label": "2.7 Does Company have any management system certification (ISO 9001 / CMMi / etc.) ? Please list them",
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
              "id": "label",
              "name": "label",
              "label": "2.8 Diversity of Management Team / प्रबंधन टीम की विविधता",
              "tooltip": "",
              "type": "Label",
              "required": true,
              "validators": {},
              "layout": "col-lg-12"
            },
            {
              "id": "radio",
              "name": "radio",
              "label": "2.8.1 Does Your Company favour diversity in the executive team / क्या आपकी कंपनी कार्यकारी दल में विविधता के पक्ष में है",
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
                        "label": "Female / महिला ",
                        "value": "1"
                      },
                      {
                        "label": "Male / पुरुष",
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
                        "label": "Female / महिला ",
                        "value": "1"
                      },
                      {
                        "label": "Male / पुरुष",
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
                    "placeholder": "",
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
    else if(slug.slug == 'csrForm'){
      this.sections = [];
    }

    else if(slug.slug == 'servicesForm'){
      this.sections = [];
    }

    else if(slug.slug == 'socialForm'){
      this.sections = [];
    }
    

    console.log(this.sections)
  }

}
