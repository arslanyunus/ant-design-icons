// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import VideoTickLinearSvg from '@ant-design/icons-svg/lib/asn/VideoTickLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface VideoTickLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const VideoTickLinear: VideoTickLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VideoTickLinearSvg}></AntdIcon>;
};

VideoTickLinear.displayName = 'VideoTickLinear';
VideoTickLinear.inheritAttrs = false;
export default VideoTickLinear;