// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PercentageSquareBrokenSvg from '@ant-design/icons-svg/lib/asn/PercentageSquareBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PercentageSquareBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PercentageSquareBroken: PercentageSquareBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PercentageSquareBrokenSvg}></AntdIcon>;
};

PercentageSquareBroken.displayName = 'PercentageSquareBroken';
PercentageSquareBroken.inheritAttrs = false;
export default PercentageSquareBroken;