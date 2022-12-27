// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import VideoCircleBulkSvg from '@ant-design/icons-svg/lib/asn/VideoCircleBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface VideoCircleBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const VideoCircleBulk: VideoCircleBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VideoCircleBulkSvg}></AntdIcon>;
};

VideoCircleBulk.displayName = 'VideoCircleBulk';
VideoCircleBulk.inheritAttrs = false;
export default VideoCircleBulk;