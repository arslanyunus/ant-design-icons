// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import VideoTimeBulkSvg from '@ant-design/icons-svg/lib/asn/VideoTimeBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface VideoTimeBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const VideoTimeBulk: VideoTimeBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VideoTimeBulkSvg}></AntdIcon>;
};

VideoTimeBulk.displayName = 'VideoTimeBulk';
VideoTimeBulk.inheritAttrs = false;
export default VideoTimeBulk;