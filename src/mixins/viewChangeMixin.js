export default {
  provide () {
    return {
      setViewId: this.setViewId
    }
  },
  data () {
    return {
      defaultViewId: 'table',
      viewId: 'table',
      viewLimitsData: {
        simple: 50,
        table: 20,
        extended: 10
      }
    }
  },
  computed: {
    limit () {
      return this.viewLimitsData[
        this.viewId
      ]
    }
  },
  methods: {
    setViewId (
      value
    ) {
      this.viewId = value
    },
    resetViewId () {
      this.viewId =
        this.defaultViewId
    }
  }
}
