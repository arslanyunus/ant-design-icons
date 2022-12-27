// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HealthBoldSvg from '@ant-design/icons-svg/lib/asn/HealthBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HealthBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HealthBold: HealthBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HealthBoldSvg}></AntdIcon>;
};

HealthBold.displayName = 'HealthBold';
HealthBold.inheritAttrs = false;
export default HealthBold;