(function(){
    var modules={
        "panel-permission":   			    {url:"$A/modules/p/panel-permission.html",router:1},
        "permission-check":                 {url:"$A/modules/p/permission-check.html"},
        "permission-role-login-data":       {url:"$A/modules/p/permission-role-login-data.html",Table:"91000570",form_module:"permission-role-login-form"},
        "permission-role-login-form":       {url:"$A/modules/p/permission-role-login-form.html",Table:"91000570"},
        "permission-role-table-group-data": {url:"$A/modules/p/permission-role-table-group-data.html",Table:"91000570",form_module:"permission-role-table-group-form"},
        "permission-role-table-group-form": {url:"$A/modules/p/permission-role-table-group-form.html",Table:"91000570"},
        "permission-query-data":            {url:"$A/modules/p/permission-query-data.html",Table:"91000569",form_module:"permission-query-form"},
        "permission-query-form":            {url:"$A/modules/p/permission-query-form.html",Table:"91000569"},
        
        "panel-main-b-ii":    			    {url:"$A/modules/p/panel-b-ii/panel-main.html",router:1},
        "panel-child-b-ii":    			    {url:"$A/modules/p/panel-b-ii/panel-child.html"},    
        "participant-data-b-ii":   		    {url:"$A/modules/p/participant-data-b-ii.html",Table:"91000570",form_module:"participant-form-b-ii",router:1,
                                                child_panel:"panel-child-b-ii",
                                                questionnaire_setup:"online-questionnaire-setup-b-ii",
                                                online_questionnaire:"online-questionnaire-app-b-ii"
                                            },
        "participant-form-b-ii":   		    {url:"$A/modules/p/participant-form-b-ii.html",Table:"91000570"},

        "edc-notes-data-b-ii":	  		    {url:"$A/modules/e/edc-notes-data.html",Table:"91000571",form_module:"edc-notes-form"},
        "edc-notes-form-b-ii":	  		    {url:"$A/modules/e/edc-notes-form.html",Table:"91000571"},

        "online-questionnaire-setup-b-ii": 	{url:"$A/modules/o/online-questionnaire-setup-b-ii.html",Table:"91000570"},


        "edc-notes-data":	  		        {url:"$A/modules/e/edc-notes-data.html",Table:"91000571",form_module:"edc-notes-form"},
        "edc-notes-form":	  		        {url:"$A/modules/e/edc-notes-form.html",Table:"91000571"},
        "participant-data":     	        {url:"$A/modules/p/participant-data.html", Table:"91000570",form_module:"participant-form"},
        "participant-form":     	        {url:"$A/modules/p/participant-form.html", Table:"91000570"},
        
        
        "bl-anthropometry":	 	            {url:"$A/modules/a/anthro-data.html",Table:"91000572",form_module:"bl-anthropometry-form"},
        "bl-anthropometry-form":	 	    {url:"$A/modules/a/anthro-form.html",Table:"91000572"},
        
        "bl-insomnia-severity-index-data":  {url:"$A/modules/i/insomnia-severity-index-data.html",Table:"91000573",form_module:"bl-insomnia-severity-index-form"},
        "bl-insomnia-severity-index-form":  {url:"$A/modules/i/insomnia-severity-index-form.html",Table:"91000573",router:1},


        "bl-dass":                          {url:"$A/modules/x/xxx-data.html",Table:"91000574",form_module:"bl-dass-form"},
        "bl-dass-form":                     {url:"$A/modules/x/xxx-form.html",Table:"91000574"},
        "bl-dhmva":                         {url:"$A/modules/x/xxx-data.html",Table:"91000575",form_module:"bl-dhmva-form"},
        "bl-dhmva-form":                    {url:"$A/modules/x/xxx-form.html",Table:"91000575"},
        "bl-ess":                           {url:"$A/modules/x/xxx-data.html",Table:"91000576",form_module:"bl-ess-form"},
        "bl-ess-form":                      {url:"$A/modules/x/xxx-form.html",Table:"91000576"},
        "bl-mec":                           {url:"$A/modules/x/xxx-data.html",Table:"91000577",form_module:"bl-mec-form"},
        "bl-mec-form":                      {url:"$A/modules/x/xxx-form.html",Table:"91000577"},
        "bl-psqi":                          {url:"$A/modules/x/xxx-data.html",Table:"91000578",form_module:"bl-psqi-form"},
        "bl-psqi-form":                     {url:"$A/modules/x/xxx-form.html",Table:"91000578"},
        "bl-sstai":                         {url:"$A/modules/x/xxx-data.html",Table:"91000579",form_module:"bl-sstai-form"},
        "bl-sstai-form":                    {url:"$A/modules/x/xxx-form.html",Table:"91000579"},
        "bl-ti":                            {url:"$A/modules/x/xxx-data.html",Table:"91000580",form_module:"bl-ti-form"},
        "bl-ti-form":                       {url:"$A/modules/x/xxx-form.html",Table:"91000580"},
    }
    for(m in modules){$vm.module_list[m]=modules[m];}
})();
