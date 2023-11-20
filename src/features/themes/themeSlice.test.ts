import { StyleTheme, getActiveTheme } from "./themeSlice"
import { lightTheme } from "./light"

test('test basic style theme return works as expected', () => {
    const gotLightMode = getActiveTheme(StyleTheme.light)
    expect(gotLightMode.background === lightTheme.background)
    expect(gotLightMode.body === lightTheme.body)
    expect(gotLightMode.text === lightTheme.text)
    expect(gotLightMode.toggleBorder === lightTheme.toggleBorder)
})