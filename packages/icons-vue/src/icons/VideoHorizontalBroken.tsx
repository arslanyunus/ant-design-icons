// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import VideoHorizontalBrokenSvg from '@ant-design/icons-svg/lib/asn/VideoHorizontalBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface VideoHorizontalBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const VideoHorizontalBroken: VideoHorizontalBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VideoHorizontalBrokenSvg}></AntdIcon>;
};

VideoHorizontalBroken.displayName = 'VideoHorizontalBroken';
VideoHorizontalBroken.inheritAttrs = false;
export default VideoHorizontalBroken;