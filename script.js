var arr = ["john","John","muharram","arthur","said","Jack"];

for(var index in arr)
{
    if(arr[index][0]=="j" ||arr[index][0]=="J" )
    {
        console.log("Goodbye "+arr[index]);
    }

    else
    {
        console.log("Hello "+arr[index]);
    }
}