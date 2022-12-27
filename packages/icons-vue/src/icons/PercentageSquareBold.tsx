// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PercentageSquareBoldSvg from '@ant-design/icons-svg/lib/asn/PercentageSquareBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PercentageSquareBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PercentageSquareBold: PercentageSquareBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PercentageSquareBoldSvg}></AntdIcon>;
};

PercentageSquareBold.displayName = 'PercentageSquareBold';
PercentageSquareBold.inheritAttrs = false;
export default PercentageSquareBold;