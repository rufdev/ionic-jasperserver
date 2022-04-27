import { Component } from '@angular/core';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() { }

  viewReport() {
    // Report ireport = new Report();
    const cridentialparams = {
      j_username: 'jasperadmin',
      j_password: 'jasperadmin',
      CONTESTID : 14
    };
    const queryParamsString = new HttpParams({ fromObject: cridentialparams }).toString();
    window.open(`http://localhost:8080/jasperserver/flow.html?_flowId=viewReportFlow&_flowId=viewReportFlow&ParentFolderUri=%2FAppReports&reportUnit=%2FAppReports%2FSampleReport&standAlone=true&${queryParamsString}`, '_blank', 'width=1024,height=600,scrollbars=no,menubar=no,toolbar=no,location=no,status=no,titlebar=no');
  }

}
