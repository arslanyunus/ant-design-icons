// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MusicSquareOutlineSvg from '@ant-design/icons-svg/lib/asn/MusicSquareOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MusicSquareOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MusicSquareOutline: MusicSquareOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MusicSquareOutlineSvg}></AntdIcon>;
};

MusicSquareOutline.displayName = 'MusicSquareOutline';
MusicSquareOutline.inheritAttrs = false;
export default MusicSquareOutline;