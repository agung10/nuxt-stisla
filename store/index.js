export const state = () => ({
    pages: {
        current_page: "",
    }
})

export const mutations = {
    INITIAL_PAGE: (state, { page }) => {
        state.pages.current_page = page
    }
}

export const actions = {
    INITIAL_PAGE: async ({ commit }, { page }) => {
        try {
            commit("INITIAL_PAGE", { page: page})
        } catch (ex) {
            console.log(ex)
        }
    }
}