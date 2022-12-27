// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PlayBulkSvg from '@ant-design/icons-svg/lib/asn/PlayBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PlayBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PlayBulk: PlayBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PlayBulkSvg}></AntdIcon>;
};

PlayBulk.displayName = 'PlayBulk';
PlayBulk.inheritAttrs = false;
export default PlayBulk;