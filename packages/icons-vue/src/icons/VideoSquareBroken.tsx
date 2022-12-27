// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import VideoSquareBrokenSvg from '@ant-design/icons-svg/lib/asn/VideoSquareBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface VideoSquareBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const VideoSquareBroken: VideoSquareBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VideoSquareBrokenSvg}></AntdIcon>;
};

VideoSquareBroken.displayName = 'VideoSquareBroken';
VideoSquareBroken.inheritAttrs = false;
export default VideoSquareBroken;