// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import VideoVerticalLinearSvg from '@ant-design/icons-svg/lib/asn/VideoVerticalLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface VideoVerticalLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const VideoVerticalLinear: VideoVerticalLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VideoVerticalLinearSvg}></AntdIcon>;
};

VideoVerticalLinear.displayName = 'VideoVerticalLinear';
VideoVerticalLinear.inheritAttrs = false;
export default VideoVerticalLinear;