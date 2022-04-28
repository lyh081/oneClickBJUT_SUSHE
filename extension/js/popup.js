
let post = document.getElementById("post")
let save = document.getElementById("save")
let reset = document.getElementById("reset")

checkPlaceHolder();

post.addEventListener("click", () => {
    post.style.backgroundColor = "#cecece";
    lgn2sushe();
});

save.addEventListener("click", () => {
    save.style.backgroundColor = "#3264B7";
    save.setAttribute("disabled", "disabled");
    var sid = document.getElementById("sid").value;
    var sushe = document.getElementById("sushe").value;
    var bjut = document.getElementById("bjut").value;
    if (bjut.length === 0) {
        bjut = sushe;
    };
    chrome.storage.local.set({ sid: sid, sushe: sushe, bjut: bjut }, () => {
        checkPlaceHolder();
        alert("保存成功!");
    });

});

reset.addEventListener("click", () => {
    chrome.storage.local.remove(["sid", "sushe", "bjut"], () => {
        checkPlaceHolder();
        alert("重置成功，请重新保存学号密码!");
        inputs = ["sid", "sushe", "bjut"]
        for (let i of inputs) {
            let input = document.getElementById(i);
            input.removeAttribute("disabled");
            if (i !== "sid") {
                input.setAttribute("type", "text")
            }
        }
    });
});

function checkPlaceHolder() {
    chrome.storage.local.get(["sid", "sushe", "bjut"], (data) => {
        // 未保存学号密码
        if (data["sid"] === undefined || data["sushe"] === undefined || data["bjut"] === undefined) {
            reset.style.backgroundColor = "#cecece";
            reset.setAttribute("disabled", "disabled")
            save.style.backgroundColor = "#4285f4";
            save.removeAttribute("disabled");
            // 已经保存学号密码
        } else {
            inputs = ["sid", "sushe", "bjut"]
            for (let i of inputs) {
                let input = document.getElementById(i);
                input.setAttribute("value", data[i]);
                input.setAttribute("disabled", "disabled");
                if (i !== "sid") {
                    input.setAttribute("type", "password")
                }
            }
            save.style.backgroundColor = "#cecece";
            save.setAttribute("disabled", "disabled");
            reset.style.backgroundColor = "#4285f4";
            reset.removeAttribute("disabled");
        }
    });
};



function lgn2sushe() {
    chrome.storage.local.get(["sid", "sushe"], (data) => {
        let sid = data["sid"];
        let sushe = data["sushe"];
        let url = "http://10.21.221.98:801/eportal/?c=Portal&a=login&callback=dr1651022956866&login_method=1&user_account=" + sid + "@campus&user_password=" + sushe + "&jsVersion=3.0&_=1651022938835";
        let options = {
            method: "GET",
            header: {
                Accept: "*/*"
            }
        }
        fetch(url, options)
            .then((res) => {
                if (res.status === 200) {
                    lgn2bjut();
                } else {
                    alert("登录BJUT_SUSHE失败,请检查学号密码是否准确")
                }
            })
    })
}

function lgn2bjut() {

    chrome.storage.local.get(["sid", "bjut"], (data) => {
        let sid = data["sid"];
        let bjut = data["bjut"];
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://lgn.bjut.edu.cn/', true);
        xhr.send("DDDDD="+ sid + "&upass="+ bjut +"&0MKKey=");

        xhr.onreadystatechange = function () {
            if(xhr.readyState === 4 && xhr.status === 200){
                alert("登录成功！")
                post.style.backgroundColor = "#4285f4"
            }else if(xhr.status !== 200){
                alert("登录lgn.bjut.edu.cn失败,请检查账号密码");
            }

        }       
    })

}

