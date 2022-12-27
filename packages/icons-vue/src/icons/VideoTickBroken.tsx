// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import VideoTickBrokenSvg from '@ant-design/icons-svg/lib/asn/VideoTickBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface VideoTickBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const VideoTickBroken: VideoTickBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VideoTickBrokenSvg}></AntdIcon>;
};

VideoTickBroken.displayName = 'VideoTickBroken';
VideoTickBroken.inheritAttrs = false;
export default VideoTickBroken;