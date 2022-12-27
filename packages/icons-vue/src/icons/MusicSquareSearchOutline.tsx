// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MusicSquareSearchOutlineSvg from '@ant-design/icons-svg/lib/asn/MusicSquareSearchOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MusicSquareSearchOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MusicSquareSearchOutline: MusicSquareSearchOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MusicSquareSearchOutlineSvg}></AntdIcon>;
};

MusicSquareSearchOutline.displayName = 'MusicSquareSearchOutline';
MusicSquareSearchOutline.inheritAttrs = false;
export default MusicSquareSearchOutline;