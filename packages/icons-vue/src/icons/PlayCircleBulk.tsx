// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PlayCircleBulkSvg from '@ant-design/icons-svg/lib/asn/PlayCircleBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PlayCircleBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PlayCircleBulk: PlayCircleBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PlayCircleBulkSvg}></AntdIcon>;
};

PlayCircleBulk.displayName = 'PlayCircleBulk';
PlayCircleBulk.inheritAttrs = false;
export default PlayCircleBulk;