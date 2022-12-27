// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import VideoVerticalBrokenSvg from '@ant-design/icons-svg/lib/asn/VideoVerticalBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface VideoVerticalBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const VideoVerticalBroken: VideoVerticalBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VideoVerticalBrokenSvg}></AntdIcon>;
};

VideoVerticalBroken.displayName = 'VideoVerticalBroken';
VideoVerticalBroken.inheritAttrs = false;
export default VideoVerticalBroken;