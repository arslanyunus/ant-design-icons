// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AquariusLinearSvg from '@ant-design/icons-svg/lib/asn/AquariusLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AquariusLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AquariusLinear: AquariusLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AquariusLinearSvg}></AntdIcon>;
};

AquariusLinear.displayName = 'AquariusLinear';
AquariusLinear.inheritAttrs = false;
export default AquariusLinear;