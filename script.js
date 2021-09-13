
function ajax(){


    var xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange=function()
    {
        if(this.readyState==4&this.status==200)
        {
            var response=JSON.parse(this.responseText);
            //console.log(response);
            var product=response.product;
            //console.log(jpeople);
            var output="";
            for(i=0;i<product.length;i++)
            {
                  output+=`<tr>
                      <td>${product[i].SiNo}</td>
                      <td>${product[i].Item}</td>
                      <td>${product[i].Quantity}</td>
                      <td>${product[i].Unit}</td>
                      <td>${product[i].Department}</td>
                      <td>${product[i].Notes}</td>
                  </tr>`
        }
        document.getElementById("table").innerHTML=output;
        }
    }
    xhttp.open("Get","data.json",true);
    xhttp.send();
}