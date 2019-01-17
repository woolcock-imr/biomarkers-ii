//-------------------------------------
//for auto select participant
var participant_tid =$vm.module_list['participant-data'].Table;
var participant_name =function(record){ if(record.Subject_Initials!=undefined) return record.Subject_Initials+' '+record.DOB; else return record.UID;}
//-------------------------------------
//auto select participant
var wait1=function(){
    var sql="with tb as (select UID,Subject_Initials=JSON_VALUE(Information,'$.Subject_Initials') from [TABLE-"+participant_tid+"])";
    sql+=" select top 10 UID,Subject_Initials from tb where Subject_Initials like '%'+@S1+'%' ";
    var autocomplete_list=function(records){
        var items=[];
        for(var i=0;i<records.length;i++){
            var obj={};
            obj.label=records[i].UID+' '+records[i].Subject_Initials;
            obj['UID']=records[i].UID;
            items.push(obj);
        }
        return items;
    }
    //-------------------------------------
    $vm.autocomplete_s($('#Participant__ID'),sql,autocomplete_list,function(items){
        $("#F__ID input[name=Participant_uid]").val(items["UID"]);
    })
}
var I=0, loop_1=setInterval(function (){
    if($vm['jquery-ui-min-js']!=undefined){  clearInterval(loop_1); wait1(); }
    I++; if(I>50){ clearInterval(loop_1); alert("jquery-ui.min.js is not installed.");}
},100);
//-------------------------------------
m.load=function(){
    //m.input=$vm.vm['__ID'].input; if(m.input==undefined) m.input={};
    $('#F__ID')[0].reset();
    $('#submit__ID').show();
    var task_record=m.input.record;
    $vm.deserialize_s(task_record,'#F__ID');
    //--------------------------
    //from new or questionnaire
    var participant_record=m.input.participant_record;
    if(task_record==undefined && participant_record!=undefined && participant_record.UID!=undefined){
        $("#F__ID input[name=Participant]").val(participant_name(participant_record));
        $("#F__ID input[name=Participant_uid]").val(participant_record.UID);
    }
    //--------------------------
    var wait2=function(){
        $('#F__ID input[name=Participant]').prop('readonly',false);
        $('#F__ID input[name=Participant]').autocomplete( "enable" );
        if($("#F__ID input[name=Participant_uid]").val()!=''){
            $('#F__ID input[name=Participant]').prop('readonly',true);
            $('#F__ID input[name=Participant]').autocomplete( "disable" );
        }
    }
    //--------------------------
    var I2=0, loop_2=setInterval(function (){
        if($vm['jquery-ui-min-js']!=undefined){  clearInterval(loop_2); wait2(); }
        I2++; if(I2>50){ clearInterval(loop_2); alert("jquery-ui.min.js is not installed.");}
    },100);
    //-------------------------------------
}
//-------------------------------------
m.before_submit=function(record,dbv){
   if(record.Participant_uid!=""){
       dbv.PUID=record.Participant_uid;
       dbv.S3=$vm.status_of_data(record);
   }
   return true;
};
//-------------------------------------
