var rect=require('./rectangle')
function solveRect(l,b)
{
    console.log("Solving for rect with l = "+l +"and b = "+b);
    if(l<=0 || b<=0)
    {
        console.log("Dimension should be greater than 0");
    }
    else{
        console.log("Area of rect = "+rect.area(l,b));
        console.log("Perimeter of rect = "+rect.perimeter(l,b));
        
    }
}
solveRect(2,4);
solveRect(1,2);
solveRect(4,6);
solveRect(8,7);
solveRect(-1,3);
