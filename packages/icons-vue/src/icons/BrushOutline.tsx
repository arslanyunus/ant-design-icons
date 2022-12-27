// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BrushOutlineSvg from '@ant-design/icons-svg/lib/asn/BrushOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BrushOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BrushOutline: BrushOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BrushOutlineSvg}></AntdIcon>;
};

BrushOutline.displayName = 'BrushOutline';
BrushOutline.inheritAttrs = false;
export default BrushOutline;