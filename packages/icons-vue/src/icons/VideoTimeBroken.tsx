// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import VideoTimeBrokenSvg from '@ant-design/icons-svg/lib/asn/VideoTimeBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface VideoTimeBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const VideoTimeBroken: VideoTimeBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VideoTimeBrokenSvg}></AntdIcon>;
};

VideoTimeBroken.displayName = 'VideoTimeBroken';
VideoTimeBroken.inheritAttrs = false;
export default VideoTimeBroken;