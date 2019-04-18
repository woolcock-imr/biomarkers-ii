
/*
$vm.autocomplete_s=function($input,sql,autocomplete_list,callback){
    var field=$input.attr('data-id');
    $input.focus(function(){$input.autocomplete("search","");});
    return $input.autocomplete({
        minLength:0,
        source:function(request,response){
            $VmAPI.request({data:{cmd:'read',qid:$vm.qid,s1:request.term,sql:sql,minLength:0},callback:function(res){
                response(autocomplete_list(res.records));
            }});
        },
        select: function(event,ui){
            if(callback!=undefined){
                callback(ui.item);
            }
        }
    })
}
//-------------------------------------
*/


//-------------------------------------
//for auto select participant
var participant_tid =$vm.module_list['participant-data'].Table;
// var participant_name =function(record){ if(record.Subject_Initials!=undefined) return record.UID+" "+record.Subject_Initials+" "+record.Screening_Number; else return record.UID; }
var participant_name =function(record) { 
    if(record.Screening_Number!=undefined) { 
        return record.Screening_Number + "-" + record.UID; 
    } else if(record.Data!=undefined) {
        return record.Data.Screening_Number + "-" + record.Data.UID; 
    } else {
        return record.UID; 
    }
}
//-------------------------------------
//auto select participant
var wait1=function(){
    var sql="with tb as (select UID,Subject_Initials=JSON_VALUE(Information,'$.Subject_Initials'),Screening_Number=JSON_VALUE(Information,'$.Screening_Number') from [TABLE-"+participant_tid+"])";
    sql+=" select top 10 UID,Subject_Initials,Screening_Number from tb where Subject_Initials like '%'+@S1+'%' ";
    var autocomplete_list=function(records){
        var items=[];
        for(var i=0;i<records.length;i++){
            var obj={};
            // obj.label=records[i].UID+' '+records[i].Subject_Initials+' '+records[i].Screening_Number;
            obj.label=records[i].Screening_Number+'-'+records[i].UID;
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
	if($vm.online_questionnaire===1) $('#row_participant__ID').hide();
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
    // $('#F__ID .sh__ID').hide();
    $('#F__ID .select-area').each(function() {
        m.show_hide(this);
    });
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
m.show_hide=function(el){
    var $rd=$(el).find('input[type=radio]:checked');
    var nm=$rd.attr('name');
    var v=$($rd).val();
    if(v==0){
        $('#F__ID input[name*='+nm+'_]').each(function() { 
            if (this.type == 'radio') { 
                this.checked = false; 
            } else { 
                $(this).val(null); 
            }
        });
        $('#F__ID input[name*='+nm+'_]').closest('div.sh__ID').slideUp(200);
    } else if(v==1){
        $('#F__ID input[name*='+nm+'_]').closest('div.sh__ID').slideDown(200);
    } else {
        nm=$(el).find('input[type=radio]').attr('name');
        $('#F__ID input[name*='+nm+'_]').closest('div.sh__ID').slideUp(200);
    }
}

$('#F__ID .select-area').each(function() {
    $(this).on('click',function() {
        var $rd=$(this).find('input[type=radio]');
        var $cb=$(this).find('input[type=checkbox]');
        if ($rd.length > 0) {
            $rd[0].checked = true;
            m.show_hide(this);
        }
        if ($cb.length > 0) {
            $cb[0].checked = !$cb[0].checked;
        }
    });
});

$('#F__ID input[type=checkbox]').each(function() {
    $(this).on('click',function() {
        this.checked = !this.checked;
    });
});
