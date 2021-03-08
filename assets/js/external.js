let searchParams = new URLSearchParams(window.location.search)
let year = searchParams.get("year")

if(year != null) $(".external .item[year!="+year+"]").remove();