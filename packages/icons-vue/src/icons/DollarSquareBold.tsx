// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DollarSquareBoldSvg from '@ant-design/icons-svg/lib/asn/DollarSquareBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DollarSquareBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DollarSquareBold: DollarSquareBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DollarSquareBoldSvg}></AntdIcon>;
};

DollarSquareBold.displayName = 'DollarSquareBold';
DollarSquareBold.inheritAttrs = false;
export default DollarSquareBold;