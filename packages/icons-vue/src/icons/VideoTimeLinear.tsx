// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import VideoTimeLinearSvg from '@ant-design/icons-svg/lib/asn/VideoTimeLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface VideoTimeLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const VideoTimeLinear: VideoTimeLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VideoTimeLinearSvg}></AntdIcon>;
};

VideoTimeLinear.displayName = 'VideoTimeLinear';
VideoTimeLinear.inheritAttrs = false;
export default VideoTimeLinear;