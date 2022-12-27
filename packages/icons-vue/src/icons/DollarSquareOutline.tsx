// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DollarSquareOutlineSvg from '@ant-design/icons-svg/lib/asn/DollarSquareOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DollarSquareOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DollarSquareOutline: DollarSquareOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DollarSquareOutlineSvg}></AntdIcon>;
};

DollarSquareOutline.displayName = 'DollarSquareOutline';
DollarSquareOutline.inheritAttrs = false;
export default DollarSquareOutline;