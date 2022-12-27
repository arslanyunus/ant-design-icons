// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MusicPlayOutlineSvg from '@ant-design/icons-svg/lib/asn/MusicPlayOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MusicPlayOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MusicPlayOutline: MusicPlayOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MusicPlayOutlineSvg}></AntdIcon>;
};

MusicPlayOutline.displayName = 'MusicPlayOutline';
MusicPlayOutline.inheritAttrs = false;
export default MusicPlayOutline;