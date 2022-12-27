// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import VideoPlayLinearSvg from '@ant-design/icons-svg/lib/asn/VideoPlayLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface VideoPlayLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const VideoPlayLinear: VideoPlayLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VideoPlayLinearSvg}></AntdIcon>;
};

VideoPlayLinear.displayName = 'VideoPlayLinear';
VideoPlayLinear.inheritAttrs = false;
export default VideoPlayLinear;