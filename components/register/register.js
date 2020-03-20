Component({
    properties: {},
    data: {
        user_name: "shixiao1029",
        password: 123456,
        isHide: true
    },
    methods: {
        formSubmit() {
            this.setData({
                isHide: true
            })
            console.log(this.data.user_name);
            
        },

        formReset() {
            this.setData({
                isHide: true
            })
            console.log(this.data.password);
        },

        openMask() {
            this.setData({
                isHide: false
            })
        }
    }
})