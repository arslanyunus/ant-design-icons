// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HealthOutlineSvg from '@ant-design/icons-svg/lib/asn/HealthOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HealthOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HealthOutline: HealthOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HealthOutlineSvg}></AntdIcon>;
};

HealthOutline.displayName = 'HealthOutline';
HealthOutline.inheritAttrs = false;
export default HealthOutline;