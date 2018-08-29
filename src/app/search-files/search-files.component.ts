import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-files',
  templateUrl: './search-files.component.html',
  styleUrls: ['./search-files.component.css']
})
export class SearchFilesComponent implements OnInit {
  envirnmentsrc : any = [];
  selectfile : any = [];
  selctedDate : any = '08/29/2018';
  Site  :any [];
  partnerslist : any [];
  availablefiles : any [];
  Isfilesavailable :boolean = false;
  constructor() {

    this.envirnmentsrc = [
      { 'id':'1', 'name' : 'DEV'  },
      { 'id':'2', 'name' : 'IT'  },
      { 'id':'3', 'name' : 'UAT'  }
    ];

    this.selectfile = [
      { 'id':'1', 'name' : 'CORR BANK FILES'  },
      { 'id':'2', 'name' : 'FED FILES'  },
      { 'id':'3', 'name' : 'RDM FILES'  },
      { 'id':'4', 'name' : 'LOCKBOX FILES'  },
      { 'id':'5', 'name' : 'XATM FILES'  }
    ];

     this.Site = [
      { 'id':'1', 'name' : 'All Sites'  },
      { 'id':'2', 'name' : 'St Paul'  },
      { 'id':'3', 'name' : 'St Louis'  },
      { 'id':'4', 'name' : 'Milwaukee'  },
      { 'id':'5', 'name' : 'Chicago'  }
    ];

    this.partnerslist = [
      { 'id':'1', 'name' : 'All Partner'  },
      { 'id':'2', 'name' : 'ABC'  },
      { 'id':'3', 'name' : 'XYZ'  },
      { 'id':'4', 'name' : 'MiABC'  },
      { 'id':'5', 'name' : 'Data'  }
    ];
   }

   getfiles(){
     
     this.availablefiles = [
       { 'id':'1313', 'FileName' : 'rbonca.w900.0882218.141932.035.x937','UCD':'1','TP':'I','OriginRT': '649400825','DestinationRT':'091408501','CreationDate':'20180822','CreationTime':'1401','FileIDModifier':'A','SiteID':'ana','ItemCount':'00000002','TotalAmount':'000000345345322'},
      { 'id':'1313', 'FileName' : 'rbonca.w900.0882218.141932.035.x937','UCD':'1','TP':'I','OriginRT': '649400825','DestinationRT':'091408501','CreationDate':'20180822','CreationTime':'1401','FileIDModifier':'A','SiteID':'ana','ItemCount':'00000002','TotalAmount':'000000345345322'},
      { 'id':'1313', 'FileName' : 'rbonca.w900.0882218.141932.035.x937','UCD':'1','TP':'I','OriginRT': '649400825','DestinationRT':'091408501','CreationDate':'20180822','CreationTime':'1401','FileIDModifier':'A','SiteID':'ana','ItemCount':'00000002','TotalAmount':'000000345345322'},
      { 'id':'1313', 'FileName' : 'rbonca.w900.0882218.141932.035.x937','UCD':'1','TP':'I','OriginRT': '649400825','DestinationRT':'091408501','CreationDate':'20180822','CreationTime':'1401','FileIDModifier':'A','SiteID':'ana','ItemCount':'00000002','TotalAmount':'000000345345322'},
      { 'id':'1313', 'FileName' : 'rbonca.w900.0882218.141932.035.x937','UCD':'1','TP':'I','OriginRT': '649400825','DestinationRT':'091408501','CreationDate':'20180822','CreationTime':'1401','FileIDModifier':'A','SiteID':'ana','ItemCount':'00000002','TotalAmount':'000000345345322'},
      { 'id':'1313', 'FileName' : 'rbonca.w900.0882218.141932.035.x937','UCD':'1','TP':'I','OriginRT': '649400825','DestinationRT':'091408501','CreationDate':'20180822','CreationTime':'1401','FileIDModifier':'A','SiteID':'ana','ItemCount':'00000002','TotalAmount':'000000345345322'},
           { 'id':'1313', 'FileName' : 'rbonca.w900.0882218.141932.035.x937','UCD':'1','TP':'I','OriginRT': '649400825','DestinationRT':'091408501','CreationDate':'20180822','CreationTime':'1401','FileIDModifier':'A','SiteID':'ana','ItemCount':'00000002','TotalAmount':'000000345345322'},
            { 'id':'1313', 'FileName' : 'rbonca.w900.0882218.141932.035.x937','UCD':'1','TP':'I','OriginRT': '649400825','DestinationRT':'091408501','CreationDate':'20180822','CreationTime':'1401','FileIDModifier':'A','SiteID':'ana','ItemCount':'00000002','TotalAmount':'000000345345322'},
             { 'id':'1313', 'FileName' : 'rbonca.w900.0882218.141932.035.x937','UCD':'1','TP':'I','OriginRT': '649400825','DestinationRT':'091408501','CreationDate':'20180822','CreationTime':'1401','FileIDModifier':'A','SiteID':'ana','ItemCount':'00000002','TotalAmount':'000000345345322'},
              { 'id':'1313', 'FileName' : 'rbonca.w900.0882218.141932.035.x937','UCD':'1','TP':'I','OriginRT': '649400825','DestinationRT':'091408501','CreationDate':'20180822','CreationTime':'1401','FileIDModifier':'A','SiteID':'ana','ItemCount':'00000002','TotalAmount':'000000345345322'},
               { 'id':'1313', 'FileName' : 'rbonca.w900.0882218.141932.035.x937','UCD':'1','TP':'I','OriginRT': '649400825','DestinationRT':'091408501','CreationDate':'20180822','CreationTime':'1401','FileIDModifier':'A','SiteID':'ana','ItemCount':'00000002','TotalAmount':'000000345345322'},
                { 'id':'1313', 'FileName' : 'rbonca.w900.0882218.141932.035.x937','UCD':'1','TP':'I','OriginRT': '649400825','DestinationRT':'091408501','CreationDate':'20180822','CreationTime':'1401','FileIDModifier':'A','SiteID':'ana','ItemCount':'00000002','TotalAmount':'000000345345322'}, 
                 { 'id':'1313', 'FileName' : 'rbonca.w900.0882218.141932.035.x937','UCD':'1','TP':'I','OriginRT': '649400825','DestinationRT':'091408501','CreationDate':'20180822','CreationTime':'1401','FileIDModifier':'A','SiteID':'ana','ItemCount':'00000002','TotalAmount':'000000345345322'},
                  { 'id':'1313', 'FileName' : 'rbonca.w900.0882218.141932.035.x937','UCD':'1','TP':'I','OriginRT': '649400825','DestinationRT':'091408501','CreationDate':'20180822','CreationTime':'1401','FileIDModifier':'A','SiteID':'ana','ItemCount':'00000002','TotalAmount':'000000345345322'},
                   { 'id':'1313', 'FileName' : 'rbonca.w900.0882218.141932.035.x937','UCD':'1','TP':'I','OriginRT': '649400825','DestinationRT':'091408501','CreationDate':'20180822','CreationTime':'1401','FileIDModifier':'A','SiteID':'ana','ItemCount':'00000002','TotalAmount':'000000345345322'},
                    { 'id':'1313', 'FileName' : 'rbonca.w900.0882218.141932.035.x937','UCD':'1','TP':'I','OriginRT': '649400825','DestinationRT':'091408501','CreationDate':'20180822','CreationTime':'1401','FileIDModifier':'A','SiteID':'ana','ItemCount':'00000002','TotalAmount':'000000345345322'},
                     { 'id':'1313', 'FileName' : 'rbonca.w900.0882218.141932.035.x937','UCD':'1','TP':'I','OriginRT': '649400825','DestinationRT':'091408501','CreationDate':'20180822','CreationTime':'1401','FileIDModifier':'A','SiteID':'ana','ItemCount':'00000002','TotalAmount':'000000345345322'}
     ];
    
     this.Isfilesavailable =true;
   }
  ngOnInit() {
  }

}
