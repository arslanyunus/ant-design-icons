// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Forward5SecondsLinearSvg from '@ant-design/icons-svg/lib/asn/Forward5SecondsLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Forward5SecondsLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Forward5SecondsLinear: Forward5SecondsLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Forward5SecondsLinearSvg}></AntdIcon>;
};

Forward5SecondsLinear.displayName = 'Forward5SecondsLinear';
Forward5SecondsLinear.inheritAttrs = false;
export default Forward5SecondsLinear;