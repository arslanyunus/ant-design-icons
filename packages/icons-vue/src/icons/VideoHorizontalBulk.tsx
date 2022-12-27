// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import VideoHorizontalBulkSvg from '@ant-design/icons-svg/lib/asn/VideoHorizontalBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface VideoHorizontalBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const VideoHorizontalBulk: VideoHorizontalBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VideoHorizontalBulkSvg}></AntdIcon>;
};

VideoHorizontalBulk.displayName = 'VideoHorizontalBulk';
VideoHorizontalBulk.inheritAttrs = false;
export default VideoHorizontalBulk;