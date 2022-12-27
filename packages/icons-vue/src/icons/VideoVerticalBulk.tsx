// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import VideoVerticalBulkSvg from '@ant-design/icons-svg/lib/asn/VideoVerticalBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface VideoVerticalBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const VideoVerticalBulk: VideoVerticalBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VideoVerticalBulkSvg}></AntdIcon>;
};

VideoVerticalBulk.displayName = 'VideoVerticalBulk';
VideoVerticalBulk.inheritAttrs = false;
export default VideoVerticalBulk;