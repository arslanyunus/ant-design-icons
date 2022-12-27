// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HealthBrokenSvg from '@ant-design/icons-svg/lib/asn/HealthBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HealthBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HealthBroken: HealthBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HealthBrokenSvg}></AntdIcon>;
};

HealthBroken.displayName = 'HealthBroken';
HealthBroken.inheritAttrs = false;
export default HealthBroken;