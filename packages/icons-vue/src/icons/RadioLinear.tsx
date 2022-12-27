// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RadioLinearSvg from '@ant-design/icons-svg/lib/asn/RadioLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RadioLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RadioLinear: RadioLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RadioLinearSvg}></AntdIcon>;
};

RadioLinear.displayName = 'RadioLinear';
RadioLinear.inheritAttrs = false;
export default RadioLinear;