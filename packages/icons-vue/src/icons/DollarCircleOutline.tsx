// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DollarCircleOutlineSvg from '@ant-design/icons-svg/lib/asn/DollarCircleOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DollarCircleOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DollarCircleOutline: DollarCircleOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DollarCircleOutlineSvg}></AntdIcon>;
};

DollarCircleOutline.displayName = 'DollarCircleOutline';
DollarCircleOutline.inheritAttrs = false;
export default DollarCircleOutline;