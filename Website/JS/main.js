function Collapser(item)
{
  if (!item.parentNode.getElementsByTagName("ul")[0]) return;
  var x = item.parentNode.getElementsByTagName("ul")[0];
  x.style.display = (x.style.display == "") ? 'block' : "";
}

