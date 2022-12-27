// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import VideoSlashBrokenSvg from '@ant-design/icons-svg/lib/asn/VideoSlashBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface VideoSlashBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const VideoSlashBroken: VideoSlashBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VideoSlashBrokenSvg}></AntdIcon>;
};

VideoSlashBroken.displayName = 'VideoSlashBroken';
VideoSlashBroken.inheritAttrs = false;
export default VideoSlashBroken;