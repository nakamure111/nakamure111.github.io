const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')


const verification = () => {
    var inputValue = document.getElementById('exampleInputEmail1').value
    if (inputValue === "AN01hP") {
        window.location.href = "https://nakamure111.github.io/main.html";

    }else{
        if (toastTrigger) {
        const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
        toastTrigger.addEventListener('click', () => {
            toastBootstrap.show()
        })
        }
    }
}



    