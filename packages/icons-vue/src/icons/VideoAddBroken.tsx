// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import VideoAddBrokenSvg from '@ant-design/icons-svg/lib/asn/VideoAddBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface VideoAddBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const VideoAddBroken: VideoAddBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VideoAddBrokenSvg}></AntdIcon>;
};

VideoAddBroken.displayName = 'VideoAddBroken';
VideoAddBroken.inheritAttrs = false;
export default VideoAddBroken;