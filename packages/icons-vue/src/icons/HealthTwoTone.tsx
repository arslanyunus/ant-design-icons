// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HealthTwoToneSvg from '@ant-design/icons-svg/lib/asn/HealthTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HealthTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HealthTwoTone: HealthTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HealthTwoToneSvg}></AntdIcon>;
};

HealthTwoTone.displayName = 'HealthTwoTone';
HealthTwoTone.inheritAttrs = false;
export default HealthTwoTone;