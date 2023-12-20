var date = new Date().getFullYear()
        var yearSpan = document.getElementById('currentYear')
        yearSpan.innerHTML = date

        function clickMenu() {
            var items = document.getElementById('items')

            if (items.style.display == 'block') {
                items.style.display = 'none'
            } else {
                items.style.display = 'block'
            }
        }

        function sizeChange() {
            if (window.innerWidth >= 992) {
                items.style.display = 'block'
            } else {
                items.style.display = 'none'
            }
        }    