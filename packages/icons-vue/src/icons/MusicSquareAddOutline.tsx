// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MusicSquareAddOutlineSvg from '@ant-design/icons-svg/lib/asn/MusicSquareAddOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MusicSquareAddOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MusicSquareAddOutline: MusicSquareAddOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MusicSquareAddOutlineSvg}></AntdIcon>;
};

MusicSquareAddOutline.displayName = 'MusicSquareAddOutline';
MusicSquareAddOutline.inheritAttrs = false;
export default MusicSquareAddOutline;