// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import VideoAddLinearSvg from '@ant-design/icons-svg/lib/asn/VideoAddLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface VideoAddLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const VideoAddLinear: VideoAddLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VideoAddLinearSvg}></AntdIcon>;
};

VideoAddLinear.displayName = 'VideoAddLinear';
VideoAddLinear.inheritAttrs = false;
export default VideoAddLinear;