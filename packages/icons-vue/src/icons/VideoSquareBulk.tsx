// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import VideoSquareBulkSvg from '@ant-design/icons-svg/lib/asn/VideoSquareBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface VideoSquareBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const VideoSquareBulk: VideoSquareBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VideoSquareBulkSvg}></AntdIcon>;
};

VideoSquareBulk.displayName = 'VideoSquareBulk';
VideoSquareBulk.inheritAttrs = false;
export default VideoSquareBulk;