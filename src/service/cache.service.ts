import Cookie from 'js-cookie'

const CacheService = {
    setCookie(data: string): void{
        Cookie.set('wc_c', data, { expires: 1 })
    },
    getCookie(): string | undefined {
        return Cookie.get('wc_c')
    },
    alreadyCached(data: string){
        const cityCached = this.getCookie()

        if(cityCached && cityCached === data) return true
        return false
    }
}

export default CacheService