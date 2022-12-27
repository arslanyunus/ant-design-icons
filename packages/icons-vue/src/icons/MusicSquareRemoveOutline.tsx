// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MusicSquareRemoveOutlineSvg from '@ant-design/icons-svg/lib/asn/MusicSquareRemoveOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MusicSquareRemoveOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MusicSquareRemoveOutline: MusicSquareRemoveOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MusicSquareRemoveOutlineSvg}></AntdIcon>;
};

MusicSquareRemoveOutline.displayName = 'MusicSquareRemoveOutline';
MusicSquareRemoveOutline.inheritAttrs = false;
export default MusicSquareRemoveOutline;