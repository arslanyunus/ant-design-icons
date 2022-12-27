// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import VideoPlayBulkSvg from '@ant-design/icons-svg/lib/asn/VideoPlayBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface VideoPlayBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const VideoPlayBulk: VideoPlayBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VideoPlayBulkSvg}></AntdIcon>;
};

VideoPlayBulk.displayName = 'VideoPlayBulk';
VideoPlayBulk.inheritAttrs = false;
export default VideoPlayBulk;