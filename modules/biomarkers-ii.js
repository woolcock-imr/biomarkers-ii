(function(){
    var modules={
        
        //the following are all biomarkers-ii-tasks
        "visit-dates-data":	  		                    {url:"$A/modules/b/biomarkers-ii-tasks/visit-dates-data.html",Table:"91000581",form_module:"visit-dates-form"},
        "visit-dates-form":	  		                    {url:"$A/modules/b/biomarkers-ii-tasks/visit-dates-form.html",Table:"91000581"},

        // Column 2, Screening visit
        "in-exclusion-criteria-data":                   {url:"$A/modules/b/biomarkers-ii-tasks/in-exclusion-criteria-data.html",Table:"91000582",form_module:"in-exclusion-criteria-form"},
        "in-exclusion-criteria-form":	 	            {url:"$A/modules/b/biomarkers-ii-tasks/in-exclusion-criteria-form.html",Table:"91000582"},
        "anthropometry-data":	                        {url:"$A/modules/b/biomarkers-ii-tasks/anthropometry-data.html",Table:"91000572",form_module:"anthropometry-form"},
        "anthropometry-form":	 	                    {url:"$A/modules/b/biomarkers-ii-tasks/anthropometry-form.html",Table:"91000572"},
        "education-data":	                            {url:"$A/modules/b/biomarkers-ii-tasks/education-data.html",Table:"91000583",form_module:"education-form"},
        "education-form":	 	                        {url:"$A/modules/b/biomarkers-ii-tasks/education-form.html",Table:"91000583"},
        // Column 2, Baseline psychometry
        "state-trait-anxiety-inventory-data":           {url:"$A/modules/b/biomarkers-ii-tasks/state-trait-anxiety-inventory-data.html",Table:"91000579",form_module:"state-trait-anxiety-inventory-form"},
        "state-trait-anxiety-inventory-form":           {url:"$A/modules/b/biomarkers-ii-tasks/state-trait-anxiety-inventory-form.html",Table:"91000579"},
        "thermoregulatory-index-data":                  {url:"$A/modules/b/biomarkers-ii-tasks/thermoregulatory-index-data.html",Table:"91000580",form_module:"thermoregulatory-index-form"},
        "thermoregulatory-index-form":                  {url:"$A/modules/b/biomarkers-ii-tasks/thermoregulatory-index-form.html",Table:"91000580"},
        "driving-accident-history-data":                {url:"$A/modules/b/biomarkers-ii-tasks/driving-accident-history-data.html",Table:"91000575",form_module:"driving-accident-history-form"},
        "driving-accident-history-form":                {url:"$A/modules/b/biomarkers-ii-tasks/driving-accident-history-form.html",Table:"91000575"},
        
        // Column 3, Ambulatory week
        "sleep-diary-d1-data":                          {url:"$A/modules/b/biomarkers-ii-tasks/sleep-diary-data.html",Table:"91000600",form_module:"sleep-diary-d1-form"},
        "sleep-diary-d1-form":                          {url:"$A/modules/b/biomarkers-ii-tasks/sleep-diary-form.html",Table:"91000600",task_name:"Sleep Diary - day 1, fill out in the morning"},
        "sleep-diary-d2-data":                          {url:"$A/modules/b/biomarkers-ii-tasks/sleep-diary-data.html",Table:"91000601",form_module:"sleep-diary-d2-form"},
        "sleep-diary-d2-form":                          {url:"$A/modules/b/biomarkers-ii-tasks/sleep-diary-form.html",Table:"91000601",task_name:"Sleep Diary - day 2, fill out in the morning"},
        "sleep-diary-d3-data":                          {url:"$A/modules/b/biomarkers-ii-tasks/sleep-diary-data.html",Table:"91000602",form_module:"sleep-diary-d3-form"},
        "sleep-diary-d3-form":                          {url:"$A/modules/b/biomarkers-ii-tasks/sleep-diary-form.html",Table:"91000602",task_name:"Sleep Diary - day 3, fill out in the morning"},
        "sleep-diary-d4-data":                          {url:"$A/modules/b/biomarkers-ii-tasks/sleep-diary-data.html",Table:"91000603",form_module:"sleep-diary-d4-form"},
        "sleep-diary-d4-form":                          {url:"$A/modules/b/biomarkers-ii-tasks/sleep-diary-form.html",Table:"91000603",task_name:"Sleep Diary - day 4, fill out in the morning"},
        "sleep-diary-d5-data":                          {url:"$A/modules/b/biomarkers-ii-tasks/sleep-diary-data.html",Table:"91000604",form_module:"sleep-diary-d5-form"},
        "sleep-diary-d5-form":                          {url:"$A/modules/b/biomarkers-ii-tasks/sleep-diary-form.html",Table:"91000604",task_name:"Sleep Diary - day 5, fill out in the morning"},
        "sleep-diary-d6-data":                          {url:"$A/modules/b/biomarkers-ii-tasks/sleep-diary-data.html",Table:"91000605",form_module:"sleep-diary-d6-form"},
        "sleep-diary-d6-form":                          {url:"$A/modules/b/biomarkers-ii-tasks/sleep-diary-form.html",Table:"91000605",task_name:"Sleep Diary - day 6, fill out in the morning"},
        "sleep-diary-d7-data":                          {url:"$A/modules/b/biomarkers-ii-tasks/sleep-diary-data.html",Table:"91000606",form_module:"sleep-diary-d7-form"},
        "sleep-diary-d7-form":                          {url:"$A/modules/b/biomarkers-ii-tasks/sleep-diary-form.html",Table:"91000606",task_name:"Sleep Diary - day 7, fill out in the morning"},
        "sleep-diary-d8-data":                          {url:"$A/modules/b/biomarkers-ii-tasks/sleep-diary-data.html",Table:"91000607",form_module:"sleep-diary-d8-form"},
        "sleep-diary-d8-form":                          {url:"$A/modules/b/biomarkers-ii-tasks/sleep-diary-form.html",Table:"91000607",task_name:"Sleep Diary - day 8, fill out in the morning"},
        "day-diary-d1-data":                            {url:"$A/modules/b/biomarkers-ii-tasks/day-diary-data.html",Table:"91000608",form_module:"day-diary-d1-form"},
        "day-diary-d1-form":                            {url:"$A/modules/b/biomarkers-ii-tasks/day-diary-form.html",Table:"91000608",task_name:"Day Diary - day 1, fill out in the evening",router:1},
        "day-diary-d2-data":                            {url:"$A/modules/b/biomarkers-ii-tasks/day-diary-data.html",Table:"91000609",form_module:"day-diary-d2-form"},
        "day-diary-d2-form":                            {url:"$A/modules/b/biomarkers-ii-tasks/day-diary-form.html",Table:"91000609",task_name:"Day Diary - day 2, fill out in the evening"},
        "day-diary-d3-data":                            {url:"$A/modules/b/biomarkers-ii-tasks/day-diary-data.html",Table:"91000610",form_module:"day-diary-d3-form"},
        "day-diary-d3-form":                            {url:"$A/modules/b/biomarkers-ii-tasks/day-diary-form.html",Table:"91000610",task_name:"Day Diary - day 3, fill out in the evening"},
        "day-diary-d4-data":                            {url:"$A/modules/b/biomarkers-ii-tasks/day-diary-data.html",Table:"91000611",form_module:"day-diary-d4-form"},
        "day-diary-d4-form":                            {url:"$A/modules/b/biomarkers-ii-tasks/day-diary-form.html",Table:"91000611",task_name:"Day Diary - day 4, fill out in the evening"},
        "day-diary-d5-data":                            {url:"$A/modules/b/biomarkers-ii-tasks/day-diary-data.html",Table:"91000612",form_module:"day-diary-d5-form"},
        "day-diary-d5-form":                            {url:"$A/modules/b/biomarkers-ii-tasks/day-diary-form.html",Table:"91000612",task_name:"Day Diary - day 5, fill out in the evening"},
        "day-diary-d6-data":                            {url:"$A/modules/b/biomarkers-ii-tasks/day-diary-data.html",Table:"91000613",form_module:"day-diary-d6-form"},
        "day-diary-d6-form":                            {url:"$A/modules/b/biomarkers-ii-tasks/day-diary-form.html",Table:"91000613",task_name:"Day Diary - day 6, fill out in the evening"},
        "day-diary-d7-data":                            {url:"$A/modules/b/biomarkers-ii-tasks/day-diary-data.html",Table:"91000614",form_module:"day-diary-d7-form"},
        "day-diary-d7-form":                            {url:"$A/modules/b/biomarkers-ii-tasks/day-diary-form.html",Table:"91000614",task_name:"Day Diary - day 7, fill out in the evening"},
        "actigraphy-ambulatory-data":                   {url:"$A/modules/b/biomarkers-ii-tasks/actigraphy-data.html",Table:"91000592",form_module:"actigraphy-ambulatory-form"},
        "actigraphy-ambulatory-form":                   {url:"$A/modules/b/biomarkers-ii-tasks/actigraphy-form.html",Table:"91000592"},
        
        // Column 4, Experimental visit
        "psg-evening-questionnaire-data":               {url:"$A/modules/b/biomarkers-ii-tasks/psg-evening-questionnaire-data.html",Table:"91000586",form_module:"psg-evening-questionnaire-form"},
        "psg-evening-questionnaire-form":               {url:"$A/modules/b/biomarkers-ii-tasks/psg-evening-questionnaire-form.html",Table:"91000586"},
        "psg-300-data":                                 {url:"$A/modules/b/biomarkers-ii-tasks/psg-300-data.html",Table:"91000591",form_module:'psg-300-form'},
        "psg-300-form":                                 {url:"$A/modules/b/biomarkers-ii-tasks/psg-300-form.html",Table:"91000591"},
        "actigraphy-laboratory-data":                   {url:"$A/modules/b/biomarkers-ii-tasks/actigraphy-data.html",Table:"91000593",form_module:"actigraphy-laboratory-form"},
        "actigraphy-laboratory-form":                   {url:"$A/modules/b/biomarkers-ii-tasks/actigraphy-form.html",Table:"91000593"},
        "psg-morning-questionnaire-data":               {url:"$A/modules/b/biomarkers-ii-tasks/psg-morning-questionnaire-data.html",Table:"91000587",form_module:"psg-morning-questionnaire-form"},
        "psg-morning-questionnaire-form":               {url:"$A/modules/b/biomarkers-ii-tasks/psg-morning-questionnaire-form.html",Table:"91000587"},
        "habitual-bedtimes-data":                       {url:"$A/modules/b/biomarkers-ii-tasks/habitual-bedtimes-data.html",Table:"91000588",form_module:"habitual-bedtimes-form"},
        "habitual-bedtimes-form":                       {url:"$A/modules/b/biomarkers-ii-tasks/habitual-bedtimes-form.html",Table:"91000588"},
        "karolinska-sleepiness-scale-data":             {url:"$A/modules/b/biomarkers-ii-tasks/karolinska-sleepiness-scale-data.html",Table:"91000589",form_module:"karolinska-sleepiness-scale-form"},
        "karolinska-sleepiness-scale-form":             {url:"$A/modules/b/biomarkers-ii-tasks/karolinska-sleepiness-scale-form.html",Table:"91000589"},
        "post-test-self-assessment-data":               {url:"$A/modules/b/biomarkers-ii-tasks/post-test-self-assessment-data.html",Table:"91000590",form_module:"post-test-self-assessment-form"},
        "post-test-self-assessment-form":               {url:"$A/modules/b/biomarkers-ii-tasks/post-test-self-assessment-form.html",Table:"91000590"},
        
        // Column 4, tasks
        "pvt-data":                                     {url:"$A/modules/b/biomarkers-ii-tasks/pvt-data.html",Table:"91000591",form_module:'pvt-form'},
        "pvt-form":                                     {url:"$A/modules/b/biomarkers-ii-tasks/pvt-form.html",Table:"91000591"},
        "choice-reaction-time-data":                    {url:"$A/modules/b/biomarkers-ii-tasks/choice-reaction-time-data.html",Table:"91000594",form_module:'choice-reaction-time-form'},
        "choice-reaction-time-form":                    {url:"$A/modules/b/biomarkers-ii-tasks/choice-reaction-time-form.html",Table:"91000594"},
        "digital-symbol-substitution-data":             {url:"$A/modules/b/biomarkers-ii-tasks/digital-symbol-substitution-data.html",Table:"91000621",form_module:'digital-symbol-substitution-task'},
        "digital-symbol-substitution-task":             {url:"$A/modules/b/biomarkers-ii-tasks/digital-symbol-substitution-task.html",Table:"91000621"},
        "karolinska-drowsiness-test-data":              {url:"$A/modules/b/biomarkers-ii-tasks/karolinska-drowsiness-test-data.html",Table:"91000595",form_module:'karolinska-drowsiness-test-form'},
        "karolinska-drowsiness-test-form":              {url:"$A/modules/b/biomarkers-ii-tasks/karolinska-drowsiness-test-form.html",Table:"91000595"},
        "maintenance-wakefulness-test-data":            {url:"$A/modules/b/biomarkers-ii-tasks/maintenance-wakefulness-test-data.html",Table:"91000596",form_module:'maintenance-wakefulness-test-form'},
        "maintenance-wakefulness-test-form":            {url:"$A/modules/b/biomarkers-ii-tasks/maintenance-wakefulness-test-form.html",Table:"91000596"},
        
    }
    for(m in modules){$vm.module_list[m]=modules[m];}
})();
