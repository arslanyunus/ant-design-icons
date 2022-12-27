// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MinusCirlceLinearSvg from '@ant-design/icons-svg/lib/asn/MinusCirlceLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MinusCirlceLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MinusCirlceLinear: MinusCirlceLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MinusCirlceLinearSvg}></AntdIcon>;
};

MinusCirlceLinear.displayName = 'MinusCirlceLinear';
MinusCirlceLinear.inheritAttrs = false;
export default MinusCirlceLinear;