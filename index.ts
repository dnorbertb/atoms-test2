import type { App, Component } from "vue";
import * as components from './src/components'

const componentsList: {[key: string]: Component} = components.default;
export default {
    install(app: App) {
        Object.keys(componentsList).forEach(componentName => {
            app.component(componentName, componentsList[componentName])
        });
    }
}