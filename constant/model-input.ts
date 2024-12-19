interface ResolutionConstraint {
  width: {
    min: number,
    max: number
  }
  height: number
}

enum I_Screen {
  desktop = "desktop",
  mobile = "mobile"
}

export const IMAGE_RESOLUTION: { [key in I_Screen]: ResolutionConstraint } = {
  desktop: {
    width: {
      min: 500,
      max: 1200
    },
    height: 800
  },
  mobile: {
    width: {
      min: 300,
      max: 500
    },
    height: 400
  }
}

