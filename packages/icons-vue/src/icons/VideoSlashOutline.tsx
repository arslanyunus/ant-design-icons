// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import VideoSlashOutlineSvg from '@ant-design/icons-svg/lib/asn/VideoSlashOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface VideoSlashOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const VideoSlashOutline: VideoSlashOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VideoSlashOutlineSvg}></AntdIcon>;
};

VideoSlashOutline.displayName = 'VideoSlashOutline';
VideoSlashOutline.inheritAttrs = false;
export default VideoSlashOutline;