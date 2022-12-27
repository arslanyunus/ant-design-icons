// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import VideoCircleBrokenSvg from '@ant-design/icons-svg/lib/asn/VideoCircleBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface VideoCircleBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const VideoCircleBroken: VideoCircleBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VideoCircleBrokenSvg}></AntdIcon>;
};

VideoCircleBroken.displayName = 'VideoCircleBroken';
VideoCircleBroken.inheritAttrs = false;
export default VideoCircleBroken;