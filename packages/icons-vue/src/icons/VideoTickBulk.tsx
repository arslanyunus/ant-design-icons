// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import VideoTickBulkSvg from '@ant-design/icons-svg/lib/asn/VideoTickBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface VideoTickBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const VideoTickBulk: VideoTickBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VideoTickBulkSvg}></AntdIcon>;
};

VideoTickBulk.displayName = 'VideoTickBulk';
VideoTickBulk.inheritAttrs = false;
export default VideoTickBulk;