import Route from '@ember/routing/route';

export default Route.extend({
  buildRouteInfoMetadata() {
    console.log('building route info metadata')
    return {
      title: 'My Cool WebPage'
    }
  }
})
