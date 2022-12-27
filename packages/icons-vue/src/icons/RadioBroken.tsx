// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RadioBrokenSvg from '@ant-design/icons-svg/lib/asn/RadioBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RadioBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RadioBroken: RadioBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RadioBrokenSvg}></AntdIcon>;
};

RadioBroken.displayName = 'RadioBroken';
RadioBroken.inheritAttrs = false;
export default RadioBroken;