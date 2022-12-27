// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MiniMusicSqaureOutlineSvg from '@ant-design/icons-svg/lib/asn/MiniMusicSqaureOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MiniMusicSqaureOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MiniMusicSqaureOutline: MiniMusicSqaureOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MiniMusicSqaureOutlineSvg}></AntdIcon>;
};

MiniMusicSqaureOutline.displayName = 'MiniMusicSqaureOutline';
MiniMusicSqaureOutline.inheritAttrs = false;
export default MiniMusicSqaureOutline;