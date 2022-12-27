// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MiniMusicSqaureBulkSvg from '@ant-design/icons-svg/lib/asn/MiniMusicSqaureBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MiniMusicSqaureBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MiniMusicSqaureBulk: MiniMusicSqaureBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MiniMusicSqaureBulkSvg}></AntdIcon>;
};

MiniMusicSqaureBulk.displayName = 'MiniMusicSqaureBulk';
MiniMusicSqaureBulk.inheritAttrs = false;
export default MiniMusicSqaureBulk;