// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import VideoRemoveBulkSvg from '@ant-design/icons-svg/lib/asn/VideoRemoveBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface VideoRemoveBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const VideoRemoveBulk: VideoRemoveBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VideoRemoveBulkSvg}></AntdIcon>;
};

VideoRemoveBulk.displayName = 'VideoRemoveBulk';
VideoRemoveBulk.inheritAttrs = false;
export default VideoRemoveBulk;