import { Component, OnInit, forwardRef, Input, ViewEncapsulation } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
// import * as customBuild from '../ckCustomBuild/build/ckEditor';
import * as customEditor from '../ckeditor';
import data from './data.json';

@Component({
  selector: 'app-my-ck-editor',
  templateUrl: './my-ck-editor.component.html',
  styleUrls: ['./my-ck-editor.component.css'],
  encapsulation:ViewEncapsulation.None,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MyCkEditorComponent),
      multi: true
    }
  ]
})
export class MyCkEditorComponent implements OnInit {

  public Editor = customEditor;
 

  private _value: string = '';

  constructor() { }

  title = 'ckeditorAngular10';

  public config:any=null;

  public htmlV=`<div style="display: flex;flex-direction: column;align-items: center;justify-content: center;">
      <div
          style="max-width: 21cm;min-width:21cm;background-color: white;padding-left:50px;padding-right:50px;padding-top:20px;padding-bottom:100px;">

          <div style="text-align: right;">
              <span>[LLP Form - III]</span>
          </div>

          <div style="display: flex;flex-direction: column;align-items: center;justify-content: center;">
              <h4 style="font-weight: bold;">LIMITED LIABILITY PARTNERSHIP REGULATIONS, 2018</h4>
              <h4 style="font-weight: bold;">See Regulation 8</h4>
              <h4 style="font-weight: bold;">APPLICATION FOR INCORPORATION OF LIMITED LIABILITY PARTNERSHIP</h4>
              <h4 style="font-weight: bold;  text-decoration: underline;">PART-I</h4>
          </div>

          <p style="font-size: 15px;font-style: italic;color:#C0C0C0;">To be completed by the applicant in block
              letters.
          </p>


          <div style="display: flex;margin-top:10px;">
              <div style="padding: 5px;">1.1 Name of the LLP</div>
              <div style="border: 1px solid black;margin-left:100px;padding: 5px;min-width:536px;max-width:536px;overflow-wrap: break-word;"> <span class="restricted-editing-exception" id="nameLlp">${data.nameLlp}</span> </div>
          </div>


          <div style="display:flex;margin-top:10px;padding: 5px;">
              <div> 1.2 Fee Payment Details</div>
          </div>


          <div style="display:flex;margin-top:10px;">
              <div style="padding: 5px;">Challan No.</div>
              <div
                  style="margin-left: 158px;padding: 5px;border: 1px solid black;min-width: 150px;max-width: 150px;overflow-wrap: break-word;align-self: flex-start;">
                  <span class="restricted-editing-exception">   E-2023-1474299 </span></div>
              <div style="margin-left: 45px;padding: 5px;">Challan Amount (Rs.)</div>
              <div
                  style="margin-left: 45px;border: 1px solid black;padding: 5px;min-width: 133px;max-width: 133px;overflow-wrap: break-word;align-self: flex-start;">
                  <span class="restricted-editing-exception">1000</span></div>
          </div>

          <div style="display:flex;flex-direction: column;align-items: center;justify-content: center;">
              <h4 style="font-weight: bold;  text-decoration: underline;">PART-II</h4>
          </div>

          <div style="text-align: left;">
              <h4>Section-A-LLP Information</h4>
          </div>

          <div style="display:flex;margin-top:10px;">
              <div style="padding: 5px;width:250px;">2.1 Registered Office Address</div>
              <div style="border: 1px solid black;padding: 5px;margin-left: 55px;    min-width: 498px;
              overflow-wrap: break-word;
              max-width: 498px;"> <span class="restricted-editing-exception"> Office # 458 Block A Punjab
                  University Town 2, Lahore, PK, Lahore, LAHORE, Punjab </span></div>
          </div>

          <div style="display:flex;margin-top:10px;">
              <div style="padding: 5px;">3.2 Sector</div>
              <div style="border: 1px solid black;padding: 5px;margin-left: 209px;    min-width: 497px;
              max-width: 497px;
              overflow-wrap: break-word;"><span class="restricted-editing-exception"> --CONSULTANCY
                  SERVICES </span></div>
          </div>


          <div style="display:flex;margin-top:10px;">
              <div style="padding: 5px;">3.3 Ancillary Objects, if any</div>
              <div style="border: 1px solid black;padding: 5px;margin-left: 92px;    min-width: 497px;
              max-width: 497px;
              overflow-wrap: break-word;"><span class="restricted-editing-exception"></span></div>
          </div>

          <div style="text-align: left;">
              <h4>Section-C-Details of Partners</h4>
          </div>


          <div style="display:flex;margin-top:10px;">
              <div style="padding: 5px;">4.1 Natural Persons</div>
          </div>


          <div style="padding: 5px;">
              <table
                  style="margin-top:10px;border: 1px solid black;width:100%;table-layout: fixed;word-break: break-all; font-size: smaller;">
                  <tr style="border: 1px solid black;">
                      <td style="border: 1px solid black;padding: 5px;">Name</th>
                      <td style="border: 1px solid black;padding: 5px;">Father/Husband Name</td>
                      <td style="border: 1px solid black;padding: 5px;">NIC/Passport No</td>
                      <td style="border: 1px solid black;padding: 5px;">Nationality</td>
                      <td style="border: 1px solid black;padding: 5px;">Occupation</td>
                      <td style="border: 1px solid black;padding: 5px;">Residentail Address</td>
                      <td style="border: 1px solid black;padding: 5px;">Signatures</td>
                  </tr>
                  <tr style="border: 1px solid black;">
                      <td style="border: 1px solid black;padding: 5px;">MUHAMMAD ADIL RIZWAN</th>
                      <td style="border: 1px solid black;padding: 5px;">RIZWAN AKBAR</td>
                      <td style="border: 1px solid black;padding: 5px;">3660370742235</td>
                      <td style="border: 1px solid black;padding: 5px;">Pakistan</td>
                      <td style="border: 1px solid black;padding: 5px;">BAR AT LAW / ADVOCATE</td>
                      <td style="border: 1px solid black;padding: 5px;">225/D MILITARYACCOUNTS CHSLAHORE</td>
                      <td style="border: 1px solid black;padding: 5px;">Electronicallysigned byMUHAMMADADIL RIZWAN
                      </td>
                  </tr>
                  <tr style="border: 1px solid black;">
                      <td style="border: 1px solid black;padding: 5px;">RIZWAN AKBAR</th>
                      <td style="border: 1px solid black;padding: 5px;">SARDAR MUHAMMAD</td>
                      <td style="border: 1px solid black;padding: 5px;">3660313803613</td>
                      <td style="border: 1px solid black;padding: 5px;">Pakistan</td>
                      <td style="border: 1px solid black;padding: 5px;">n BAR AT LAW / ADVOCATE</td>
                      <td style="border: 1px solid black;padding: 5px;">225/D MILITARYACCOUNTS CHSLAHORE</td>
                      <td style="border: 1px solid black;padding: 5px;">Electronicallysigned by RIZWAN</td>
                  </tr>
              </table>
          </div>


          <div style="display:flex;margin-top:10px;">
              <div style="padding: 5px;">4.2 Body Corporate</div>
          </div>


          <div style="padding: 5px;">
              <table
                  style="margin-top:10px;border: 1px solid black;width:100%;table-layout: fixed;word-break: break-all; font-size: smaller;">
                  <tr style="border: 1px solid black;">
                      <td style="border: 1px solid black;padding: 5px;">Name</th>
                      <td style="border: 1px solid black;padding: 5px;">CUIN/Registration No</td>
                      <td style="border: 1px solid black;padding: 5px;">Place of Incorporation/Registration</td>
                      <td style="border: 1px solid black;padding: 5px;">Name and Address of Registering Body/Authority
                      </td>
                      <td style="border: 1px solid black;padding: 5px;">Registered Office Authorized</td>
                      <td style="border: 1px solid black;padding: 5px;">AuthorizedSignatory on Behalf of Body
                          Corporate</td>
                  </tr>
                  <tr style="border: 1px solid black;">
                      <td style="border: 1px solid black;height: 25px;width: 25px;">
                          </th>
                      <td style="border: 1px solid black;height: 25px;width: 25px;"></td>
                      <td style="border: 1px solid black;height: 25px;width: 25px;"></td>
                      <td style="border: 1px solid black;height: 25px;width: 25px;"></td>
                      <td style="border: 1px solid black;height: 25px;width: 25px;"></td>
                      <td style="border: 1px solid black;height: 25px;width: 25px;"></td>
                  </tr>
              </table>
          </div>

          <div style="text-align: left;">
              <h4>Section-D-Details of Designated Partners, if any</h4>
          </div>

          <div style="display:flex;margin-top:10px;">
              <div style="padding: 5px;">5.1</div>
          </div>

          <div style="padding: 5px;">
              <table
                  style="margin-top:10px;border: 1px solid black;width:100%;table-layout: fixed;word-break: break-all; font-size: smaller;">
                  <tr style="border: 1px solid black;">
                      <td style="border: 1px solid black;padding: 5px;">Name</th>
                      <td style="border: 1px solid black;padding: 5px;">Father/Husband Name</td>
                      <td style="border: 1px solid black;padding: 5px;">CNIC/Passport No</td>
                      <td style="border: 1px solid black;padding: 5px;">Nationality</td>
                      <td style="border: 1px solid black;padding: 5px;">Occupation</td>
                      <td style="border: 1px solid black;padding: 5px;">Residentail Address</td>
                      <td style="border: 1px solid black;padding: 5px;">Whether Partner or Nominee of Partner</td>
                      <td style="border: 1px solid black;padding: 5px;">Signatures</td>
                  </tr>
                  <tr style="border: 1px solid black;">
                      <td style="border: 1px solid black;padding: 5px;">MUHAMMAD ADIL RIZWAN</th>
                      <td style="border: 1px solid black;padding: 5px;">RIZWAN AKBAR</td>
                      <td style="border: 1px solid black;padding: 5px;">3660370742235</td>
                      <td style="border: 1px solid black;padding: 5px;">Pakistan</td>
                      <td style="border: 1px solid black;padding: 5px;">BAR AT LAW / ADVOCATE</td>
                      <td style="border: 1px solid black;padding: 5px;">225/D MILITARYACCOUNTS CHSLAHORE</td>
                      <td style="border: 1px solid black;padding: 5px;">Partner</td>
                      <td style="border: 1px solid black;padding: 5px;">Electronicallysigned byMUHAMMADADIL RIZWAN
                      </td>
                  </tr>
                  <tr style="border: 1px solid black;">
                      <td style="border: 1px solid black;padding: 5px;">RIZWAN AKBAR</th>
                      <td style="border: 1px solid black;padding: 5px;">SARDAR MUHAMMAD</td>
                      <td style="border: 1px solid black;padding: 5px;">3660313803613</td>
                      <td style="border: 1px solid black;padding: 5px;">Pakistan</td>
                      <td style="border: 1px solid black;padding: 5px;">n BAR AT LAW / ADVOCATE</td>
                      <td style="border: 1px solid black;padding: 5px;">225/D MILITARYACCOUNTS CHSLAHORE</td>
                      <td style="border: 1px solid black;padding: 5px;">Partner</td>
                      <td style="border: 1px solid black;padding: 5px;">Electronicallysigned by RIZWAN</td>
                  </tr>
              </table>
          </div>

          <p>
              The partners hereby solemnly and sincerely declare that in case no designated partner is specified in
              table above then every person who from time to time is apartner of the limited liability partnership
              shall be a designated partner.
          </p>

          <div style="text-align: left;">
              <h4>Section-E-Liability of Partners</h4>
          </div>
          <div style="display:flex;margin-top:10px;">
              <div style="padding: 5px;">6.1 The liability of partners of Muhammad Adil Rizwan shall be limited</div>
          </div>
          <div style="display:flex;flex-direction: column;align-items: center;justify-content: center;">
              <h4 style="font-weight: bold;  text-decoration: underline;">PART-III</h4>
          </div>
          <div style="text-align: left;">
              <h4>Statement of application under section 5(d) of the Act.</h4>
          </div>


          <div style="display: flex;gap:167px;margin-top:10px;">
              <div style="padding: 5px;">7.1 Name of person making the statement</div>
              <div style="border: 1px solid black;padding: 5px;min-width: 337px;
              max-width: 337px;
              overflow-wrap: break-word;">Muhammad Adil Rizwan</div>
          </div>

          <div style="display: flex;gap:60px;margin-top:10px;">
              <div style="padding: 5px;">7.2 Father / husband name of person making the statement</div>
              <div style="border: 1px solid black;padding: 5px;min-width: 337px;
              max-width: 337px;
              overflow-wrap: break-word;">RIZWAN AKBAR</div>
          </div>

          <div style="display: flex;gap:25px;margin-top:10px;">
              <div style="padding: 5px;">7.3 Profession / Designation of the person making the statement</div>
              <div style="border: 1px solid black;padding: 5px;min-width: 336px;
              max-width: 336px;
              overflow-wrap: break-word;">Partner of the Proposed Company</div>
          </div>

          <div style="display: flex;margin-top:10px;">
              <div style="padding: 5px;min-width:90px;">7.4 Statement</div>
              <div style="border: 1px solid black;padding: 5px;min-width: 681px;
              max-width: 681px;
              overflow-wrap: break-word;">
              <ul style="list-style: none;padding:0;">
                  <li>I do hereby solemnly and sincerely declare that:</li>
                  <li>a) I have been authorized by the subscribers to the incorporation document of proposed LLP to give this statement;</li>
                  <li>b) All the requirements of the Limited Liability Partnership, 2017, and the rules, the regulations made there under inrespect of matters precedent to the registration of the said LLP and incidental thereto have been complied with;</li>
                  <li> c) necessary information about the ultimate beneficial owners of the proposed LLP, if any, as specified in regulation 14A, and as defined in these Regulations, has been obtained and is available on record; and</li>
                  <li>d) I make this solemn statement conscientiously believing the same to be true.</li>
              </ul>
</div>
          </div>

          <div style="display: flex;margin-top:10px;">
              <div style="padding: 5px;">7.5 Signature of person making the statement </div>
              <div style="border: 1px solid black;flex-grow: 1;padding: 5px;min-width: 421px;
              margin-left: 60px;
              overflow-wrap: break-word;">Electronically Signed By MUHAMMAD ADIL
                  RIZWAN</div>
          </div>

          <div style="text-align: left;">
              <h4>Enclosures:</h4>
          </div>

          <p>Before submitting your application please check that all required documents are attached and the same are
              complete in all respects;</p>

          <ul style="list-style:lower-roman;list-style-position: inside;">
              <li>
                  Original copy of paid bank challan or any other evidence of payment of fee. (in case of physical
                  filing only).
              </li>
              <li>
                  Copies of NICs/passport of the partners/designated partners and of the person making the statement.
              </li>
              <li>
                  Attested copy of LLP agreement duly signed, notarized and witnessed.
              </li>
              <li>
                  Consent of designated partners, if any
              </li>
              <li>
                  Authority letter signed by all the partners in favour of the person who has been authorized to file
                  documents
              </li>
              <li>
                  Name availability letter
              </li>
              <li>
                  Any other document deemed necessary by the Registrar
              </li>
          </ul>

          <p>Witness to above signatures: (For the documents submitted in physical form)</p>

          <div style="display: flex;margin-top:10px;">
              <div style="padding: 5px;">Signatures</div>
              <div style="border: 1px solid black;padding: 5px;min-width: 558px;
              max-width: 558px;
              padding: 5px;
              margin-left: 146px;
              overflow-wrap: break-word;"></div>
          </div>

          <div style="display: flex;margin-top:10px;">
              <div style="padding: 5px;">Full Name (in Block Letters) </div>
              <div style="border: 1px solid black;padding: 5px;    min-width: 557px;
              max-width: 557px;
              padding: 5px;
              margin-left: 28px;
              overflow-wrap: break-word;"></div>
          </div>

          <div style="display: flex;margin-top:10px;">
              <div style="padding: 5px;">Father's/Husband's Name</div>
              <div style="border: 1px solid black;padding: 5px;    min-width: 557px;
              max-width: 557px;
              padding: 5px;
              margin-left: 51px;
              overflow-wrap: break-word;"></div>
          </div>

          <div style="display: flex;margin-top:10px;">
              <div style="padding: 5px;">Nationality</div>
              <div style="border: 1px solid black;padding: 5px;min-width: 558px;
              max-width: 558px;
              padding: 5px;
              margin-left: 141px;
              overflow-wrap: break-word;"></div>
          </div>

          <div style="display: flex;margin-top:10px;">
              <div style="padding: 5px;">NIC No</div>
              <div style="border: 1px solid black;padding: 5px;min-width: 558px;
              max-width: 558px;
              padding: 5px;
              margin-left: 161px;
              overflow-wrap: break-word;"></div>
          </div>

          <div style="display: flex;margin-top:10px;">
              <div style="padding: 5px;">Usual Residential Address</div>
              <div style="border: 1px solid black;padding: 5px;min-width: 558px;
              max-width: 558px;
              padding: 5px;
              margin-left: 42px;
              overflow-wrap: break-word;"></div>
          </div>
      </div>
  </div>`;


  ngOnInit() {
    this.config = {
      htmlSupport: {
        allow: [
            {
                name:/.*/,
                attributes: true,
                classes: true,
                styles: true
            }
        ]
    }
    ,
      toolbar: {
        items: [
        'heading',
        '|',
        'fontSize',
        'fontFamily',
        '|',
        'bold',
        'italic',
        'underline',
        'strikethrough',
        'highlight',
        '|',
        'alignment',
        '|',
        'numberedList',
        'bulletedList',
        '|',
        'indent',
        'outdent',
        '|',
        'todoList',
        'link',
        'blockQuote',
        'imageUpload',
        'insertTable',
        '|',
        'undo',
        'redo' ,
        'restrictedEditing',
    ]
      },
      restrictedEditing: {
        allowedCommands: [         
        'heading',
        '|',
        'fontSize',
        'fontFamily',
        '|',
        'bold',
        'italic',
        'underline',
        'strikethrough',
        'highlight',
        '|',
        'alignment',
        '|',
        'numberedList',
        'bulletedList',
        '|',
        'indent',
        'outdent',
        '|',
        'todoList',
        'link',
        'blockQuote',
        'imageUpload',
        'insertTable',
        '|',
        'undo',
        'redo' , ]
    },
      language: 'en',
      image: {
        toolbar: [
          'imageTextAlternative',
          'imageStyle:full',
          'imageStyle:side'
        ]
      },
      table: {
        contentToolbar: [
          'tableColumn',
          'tableRow',
          'mergeTableCells'
        ]
      },
      licenseKey: '',
    }


  }

  onReady(editor) {
    editor.config.allowedContent = true;

    if (editor.model.schema.isRegistered('image')) {
      editor.model.schema.extend('image', { allowAttributes: 'blockIndent' });
    }


  }


}
function ngAfterViewInit() {
    throw new Error('Function not implemented.');
}

