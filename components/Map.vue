<template>
  <div>
    <div
      id="map"
      style="width: 100%; height: 100%"
      class="rounded-lg cursor-grab mb-4"
    ></div>
    <DigitalClock />
  </div>
</template>

<style>
#map {
  width: 100%;
  height: 100%;
  border: solid 1px rgb(40, 40, 40);
}
</style>

<script setup>
import { onMounted } from 'vue'
import maplibregl from 'maplibre-gl'

onMounted(() => {
  const config = useRuntimeConfig()
  const apiKey = config.public.MAP_API_KEY

  const map = new maplibregl.Map({
    container: 'map',
    style: `https://api.maptiler.com/maps/darkmatter/style.json?key=${apiKey}`,
    center: [123.9355, 10.3322],
    zoom: 11,
    attributionControl: false,
  })

  const size = 100 // Smaller size for the pulsing dot

  // const pulsingDot = {
  //   width: size,
  //   height: size,
  //   data: new Uint8Array(size * size * 4),
  //   onAdd() {
  //     const canvas = document.createElement('canvas')
  //     canvas.width = this.width
  //     canvas.height = this.height
  //     this.context = canvas.getContext('2d')
  //   },
  //   render() {
  //     const duration = 1000
  //     const t = (performance.now() % duration) / duration

  //     const radius = (size / 2) * 0.2 // Smaller radius
  //     const outerRadius = (size / 2) * 0.5 * t + radius // Smaller outer radius
  //     const context = this.context

  //     context.clearRect(0, 0, this.width, this.height)
  //     context.beginPath()
  //     context.arc(this.width / 2, this.height / 2, outerRadius, 0, Math.PI * 2)
  //     context.fillStyle = `rgba(100, 150, 255, ${1 - t})` // Blue color
  //     context.fill()

  //     context.beginPath()
  //     context.arc(this.width / 2, this.height / 2, radius, 0, Math.PI * 2)
  //     context.fillStyle = 'rgba(50, 100, 255, 1)' // Inner blue circle
  //     context.strokeStyle = 'white'
  //     context.lineWidth = 2 + 4 * (1 - t)
  //     context.fill()
  //     context.stroke()

  //     this.data = context.getImageData(0, 0, this.width, this.height).data

  //     map.triggerRepaint()

  //     return true
  //   },
  // }

  const pulsingDot = {
    width: size,
    height: size,
    data: new Uint8Array(size * size * 4),
    staticCanvas: null,

    onAdd() {
      // Create main canvas for the inner circle
      const canvas = document.createElement('canvas')
      canvas.width = this.width
      canvas.height = this.height
      this.context = canvas.getContext('2d')

      // Pre-render the static inner circle
      const radius = (size / 2) * 0.2 // Inner circle radius
      const staticCanvas = document.createElement('canvas')
      staticCanvas.width = this.width
      staticCanvas.height = this.height
      const staticContext = staticCanvas.getContext('2d')

      staticContext.beginPath()
      staticContext.arc(this.width / 2, this.height / 2, radius, 0, Math.PI * 2)
      staticContext.fillStyle = 'rgba(50, 100, 255, 1)' // Blue inner circle
      staticContext.strokeStyle = 'white'
      staticContext.lineWidth = 2
      staticContext.fill()
      staticContext.stroke()

      this.staticCanvas = staticCanvas
    },

    render() {
      // Render the static inner circle onto the main canvas
      const context = this.context

      context.clearRect(0, 0, this.width, this.height)
      context.drawImage(this.staticCanvas, 0, 0)

      // Update the data buffer for the map
      this.data = context.getImageData(0, 0, this.width, this.height).data

      // Trigger map repaint
      map.triggerRepaint()

      return true
    },

    onRemove() {
      // Remove the outer circle from the DOM when the layer is removed
      if (this.outerCircleElement) {
        this.outerCircleElement.remove()
      }
    },
  }

  map.on('load', () => {
    map.addImage('pulsing-dot', pulsingDot, { pixelRatio: 2 })

    map.addSource('points', {
      type: 'geojson',
      data: {
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [123.9355, 10.3322], // Cebu coordinates
            },
          },
        ],
      },
    })

    map.addLayer({
      id: 'points',
      type: 'symbol',
      source: 'points',
      layout: {
        'icon-image': 'pulsing-dot',
      },
    })
  })
})
</script>
