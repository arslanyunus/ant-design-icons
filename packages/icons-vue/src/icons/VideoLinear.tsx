// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import VideoLinearSvg from '@ant-design/icons-svg/lib/asn/VideoLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface VideoLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const VideoLinear: VideoLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VideoLinearSvg}></AntdIcon>;
};

VideoLinear.displayName = 'VideoLinear';
VideoLinear.inheritAttrs = false;
export default VideoLinear;