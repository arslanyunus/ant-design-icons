// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import VideoPlayBrokenSvg from '@ant-design/icons-svg/lib/asn/VideoPlayBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface VideoPlayBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const VideoPlayBroken: VideoPlayBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VideoPlayBrokenSvg}></AntdIcon>;
};

VideoPlayBroken.displayName = 'VideoPlayBroken';
VideoPlayBroken.inheritAttrs = false;
export default VideoPlayBroken;