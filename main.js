
Webcam.set({
    width:350,
    height:300,
    image_format:'jpeg',
    jpeg_quality:85

})

camera=document.getElementById("camera")
Webcam.attach(camera)

function capture()
{
    Webcam.snap(function(xy){
     document.getElementById("result").innerHTML='<img id="Cap" src="'+xy+'">'  
    })

    
}

classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/nHQQY1PZ4//model.json',model_Loaded)

function model_Loaded(){
    console.log("Model is ready to use.")
}

function identify(){
    img=document.getElementById("Cap")
    classifier.classify(img,gotResult)
}

function gotResult(error,result){
    if(error){
        console.error(error)
    }

    else{
        console.log(result)
        document.getElementById("object_name").innerHTML=result[0].label
        document.getElementById("accuracy").innerHTML=result[0].confidence.toFixed(4)
    }
}
