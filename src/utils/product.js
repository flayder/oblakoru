const periods = {
    '1': 'period%3D1%26',
    '3': 'period%3D3%26',
    '6': 'period%3D6%26',
    '12': 'period%3D12%26'
}

const silver = {
    'pricelist' : 'pricelist%3D41%26',
    'memory'    : '%26addon_44='
}

const gold = {
    'pricelist' : 'pricelist%3D47%26',
    'memory'    : '%26addon_50='
}

const platinum = {
    'pricelist' : 'pricelist%3D53%26',
    'memory'    : '%26addon_56='
}

const palladium = {
    'pricelist' : 'pricelist%3D59%26',
    'memory'    : '%26addon_62='
}

const iridium = {
    'pricelist' : 'pricelist%3D65%26',
    'memory'    : '%26addon_68='
}

const options = {
    'ram': '%26addon_94=',
    'processor': '%26addon_96=',
    'memory': '%26addon_90=',
    'ip': '%26addon_97='
}

export default {
    generateBaseLink(pricelist, memory, period) {
        var url = `https://my.oblakoru.ru/billmgr?func=register&redirect=startpage%3Dvds%26startform%3Dvds%252Eorder%252Eparam%26`

        if(pricelist == 'silver') {
            url += `${silver.pricelist}${periods[period]}project%3D2${silver.memory}${memory}`
        }

        if(pricelist == 'gold') {
            url += `${gold.pricelist}${periods[period]}project%3D2${gold.memory}${memory}`
        }

        if(pricelist == 'platinum') {
            url += `${platinum.pricelist}${periods[period]}project%3D2${platinum.memory}${memory}`
        }

        if(pricelist == 'palladium') {
            url += `${palladium.pricelist}${periods[period]}project%3D2${palladium.memory}${memory}`
        }

        if(pricelist == 'iridium') {
            url += `${iridium.pricelist}${periods[period]}project%3D2${iridium.memory}${memory}`
        }
        window.open(url, "_blank");
    },
    generateConfigLink(period, ram, processor, memory, ipaddr) {
        var url = `https://my.oblakoru.ru/billmgr?func=register&redirect=startpage%3Dvds%26startform%3Dvds%252Eorder%252Eparam%26pricelist%3D89%26`

        url += `${periods[period]}project%3D2%26addon_94=${ram}%26addon_96=${processor}%26addon_90=${memory}%26addon_97=${ipaddr}`

        //console.log('url', url)
        window.open(url, "_blank");
    }
}

//https://my.oblakoru.ru/billmgr?func=register&redirect=startpage%3Dvds%26startform%3Dvds%252Eorder%252Eparam%26pricelist%3D65%26period%3D1%26project%3D2%26addon_68=120