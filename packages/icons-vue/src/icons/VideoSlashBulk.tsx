// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import VideoSlashBulkSvg from '@ant-design/icons-svg/lib/asn/VideoSlashBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface VideoSlashBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const VideoSlashBulk: VideoSlashBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VideoSlashBulkSvg}></AntdIcon>;
};

VideoSlashBulk.displayName = 'VideoSlashBulk';
VideoSlashBulk.inheritAttrs = false;
export default VideoSlashBulk;