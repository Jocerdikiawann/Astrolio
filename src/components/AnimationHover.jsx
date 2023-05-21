import {useRive,Alignment,Fit,Layout} from "@rive-app/react-canvas";
const SOURCE_FILE = "images/cat_rive.riv"
const STATE_MACHINE_NAME = "State Machine 1"

export const AnimationHover = ({className="w-80 h-80"}) => {
  const {RiveComponent } = useRive({
    src: SOURCE_FILE,
    autoplay: true,
    stateMachines: STATE_MACHINE_NAME,
    layout: new Layout({
        fit: Fit.FitHeight,
        alignment: Alignment.Center
    }),
  });

  return (
    <RiveComponent
      width={1200}
      height={1200}
      className={`border-black border-2 sm:mt-0 mt-5 ${className}`}
    />
  );
};
