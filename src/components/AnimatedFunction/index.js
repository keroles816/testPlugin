import gsap from "gsap";

export function animateOLFeature(feature, newCoord, duration = 1) {
  const geom = feature.getGeometry();
  const startCoord = geom.getCoordinates();

  
  gsap.to(startCoord, {
    0: newCoord[0], 
    1: newCoord[1], 
    duration: duration,
    ease: "power1.inOut",
    onUpdate: () => {
      geom.setCoordinates([startCoord[0], startCoord[1]]);
    },
  });
}
