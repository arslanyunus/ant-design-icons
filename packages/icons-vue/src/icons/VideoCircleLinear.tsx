// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import VideoCircleLinearSvg from '@ant-design/icons-svg/lib/asn/VideoCircleLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface VideoCircleLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const VideoCircleLinear: VideoCircleLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VideoCircleLinearSvg}></AntdIcon>;
};

VideoCircleLinear.displayName = 'VideoCircleLinear';
VideoCircleLinear.inheritAttrs = false;
export default VideoCircleLinear;