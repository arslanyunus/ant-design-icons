// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PlayAddBulkSvg from '@ant-design/icons-svg/lib/asn/PlayAddBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PlayAddBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PlayAddBulk: PlayAddBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PlayAddBulkSvg}></AntdIcon>;
};

PlayAddBulk.displayName = 'PlayAddBulk';
PlayAddBulk.inheritAttrs = false;
export default PlayAddBulk;