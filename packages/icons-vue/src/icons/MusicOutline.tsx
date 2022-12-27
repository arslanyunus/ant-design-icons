// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MusicOutlineSvg from '@ant-design/icons-svg/lib/asn/MusicOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MusicOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MusicOutline: MusicOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MusicOutlineSvg}></AntdIcon>;
};

MusicOutline.displayName = 'MusicOutline';
MusicOutline.inheritAttrs = false;
export default MusicOutline;