$('#leftCircle').animate(
    {'cx': '400'},
    {step:function(v1){$(this).attr("cx",v1)}}
  )