import { reactive } from "vue"

export const store = reactive({
    data() {
        return {
            filmList: [],
            tvSeriesList: [],
        }
    },
})