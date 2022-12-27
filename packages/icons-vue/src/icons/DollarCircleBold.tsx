// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DollarCircleBoldSvg from '@ant-design/icons-svg/lib/asn/DollarCircleBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DollarCircleBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DollarCircleBold: DollarCircleBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DollarCircleBoldSvg}></AntdIcon>;
};

DollarCircleBold.displayName = 'DollarCircleBold';
DollarCircleBold.inheritAttrs = false;
export default DollarCircleBold;