const tabs = document.querySelectorAll(".tab")

tabs.forEach(tab => {
    tab.addEventListener("click", function () {
        if (tab.classList.contains("selected")) {
            return
        }

        selectTab(tab)

        showTabInfo(tab)
    })
})

function selectTab(tab) {
    const selectedTab = document.querySelector(".tab.selected")
    selectedTab.classList.remove("selected")

    tab.classList.add("selected")
}

function showTabInfo(tab) {
    const selectedInfo = document.querySelector(".info.selected")
    selectedInfo.classList.remove("selected")

    const idTabInfo = `${tab.id}Info`

    const infoView = document.getElementById(idTabInfo)

    infoView.classList.add("selected")
}