// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import VideoSlashBoldSvg from '@ant-design/icons-svg/lib/asn/VideoSlashBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface VideoSlashBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const VideoSlashBold: VideoSlashBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VideoSlashBoldSvg}></AntdIcon>;
};

VideoSlashBold.displayName = 'VideoSlashBold';
VideoSlashBold.inheritAttrs = false;
export default VideoSlashBold;