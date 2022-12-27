// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import VideoOctagonBulkSvg from '@ant-design/icons-svg/lib/asn/VideoOctagonBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface VideoOctagonBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const VideoOctagonBulk: VideoOctagonBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VideoOctagonBulkSvg}></AntdIcon>;
};

VideoOctagonBulk.displayName = 'VideoOctagonBulk';
VideoOctagonBulk.inheritAttrs = false;
export default VideoOctagonBulk;