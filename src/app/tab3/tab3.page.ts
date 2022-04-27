import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  public reports: any;
  constructor(private httpClient: HttpClient) { }


  ngOnInit() {
    this.reports = [];
    this.getReports().subscribe(async result => {
      this.reports = result["resourceLookup"];
    });
    // http://cloud.bukidnon.gov.ph:8060/jasperserver/rest/resources/PHO?type=reportUnit&recursive=1&j_username=pho&j_password=pho@123
  }
  viewreport(item){
    const cridentialparams = {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      j_username : 'jasperadmin',
      // eslint-disable-next-line @typescript-eslint/naming-convention
      j_password : 'jasperadmin'
    };
    const queryParamsString = new HttpParams({ fromObject: cridentialparams }).toString();
    // eslint-disable-next-line max-len
    window.open(`http://localhost:8080/jasperserver/flow.html?_flowId=viewReportFlow&_flowId=viewReportFlow&ParentFolderUri=/AppReports&reportUnit=${item.uri}&standAlone=true&${queryParamsString}`, '_blank', 'width=1024,height=600,scrollbars=no,menubar=no,toolbar=no,location=no,status=no,titlebar=no');
  }

  private getReports(): Observable<any[]> {
    // eslint-disable-next-line max-len
    return this.httpClient.get<any>('http://localhost:8080/jasperserver/rest_v2/resources?type=reportUnit&folderUri=/AppReports&j_username=jasperadmin&j_password=jasperadmin');
  }

}
