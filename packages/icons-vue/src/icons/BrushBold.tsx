// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BrushBoldSvg from '@ant-design/icons-svg/lib/asn/BrushBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BrushBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BrushBold: BrushBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BrushBoldSvg}></AntdIcon>;
};

BrushBold.displayName = 'BrushBold';
BrushBold.inheritAttrs = false;
export default BrushBold;