var moment = require('moment');

module.exports =   function timeStamp(tex) {

	var testNum =/[^0-9]{1,}/g,
		tesB = /^([j|f|m|a|s|o|n|d])([a-z]{2,7}([\s|\/|\-])([0-3][0-9]|[1-9])(\s|\,\s|\/|\-)\d{4}$)/gi,
		tesA =/^([0-9][0-2]|[0-9])(\s|\-|\/)([0-9][0-9]|[0-9])(\s|\-|\/)\d{4}$/g,
		tesC= /^([0-3][0-9]|[0-9])(\s|\-)([j|f|m|a|s|o|n|d])[a-z]{2,7}[\s|\-][0-9]{4}$/gi,
		ts,
		res;
	
  if(!testNum.test(tex)) {
     
    ts = moment.unix(tex).format('LL');
     
	 if(ts === 'Invalid date'){
	  return {
		  'unix':'null',
		  'natural':'null'
	  }	
	} else {
     return {
	'unix':tex,
	'natural':ts
	}  
	}
  }else if(tesB.test(tex)) {
    
    ts = moment(tex).format('LL')
    res = moment(ts).valueOf()/1000
	if(ts === 'Invalid date'){
	  return {
		  'unix':'null',
		  'natural':'null'
	  }	
	} else {
     return {
	'unix':res,
	'natural':ts
	}  
	}
  }else if(tesA.test(tex)) {
    
    res = moment(tex, 'MM DD YYYY').valueOf()/1000;
    ts = moment(tex, 'MM DD YYYY').format('LL')
	if(ts === 'Invalid date'){
	  return {
		  'unix':'null',
		  'natural':'null'
	  }	
	} else {
     return {
	'unix':res,
	'natural':ts
	}  
	}
  	 
   
  } else if(tesC.test(tex)) {
	res = moment(tex).valueOf()/1000;
    ts = moment(tex).format("DD MMMM YYYY");
	 
	if(ts === 'Invalid date'){
	  return {
		  'unix':'null',
		  'natural':'null'
	  }	
	} else {
     return {
	'unix':res,
	'natural':ts
	}  
	}
	
  } else {
    return {
	'unix':null,
	'natural':null
	}
  }
  
  }