// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import VideoAddBulkSvg from '@ant-design/icons-svg/lib/asn/VideoAddBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface VideoAddBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const VideoAddBulk: VideoAddBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VideoAddBulkSvg}></AntdIcon>;
};

VideoAddBulk.displayName = 'VideoAddBulk';
VideoAddBulk.inheritAttrs = false;
export default VideoAddBulk;