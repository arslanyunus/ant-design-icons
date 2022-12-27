// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RadioBoldSvg from '@ant-design/icons-svg/lib/asn/RadioBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RadioBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RadioBold: RadioBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RadioBoldSvg}></AntdIcon>;
};

RadioBold.displayName = 'RadioBold';
RadioBold.inheritAttrs = false;
export default RadioBold;