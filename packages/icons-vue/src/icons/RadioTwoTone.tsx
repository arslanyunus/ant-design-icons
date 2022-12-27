// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RadioTwoToneSvg from '@ant-design/icons-svg/lib/asn/RadioTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RadioTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RadioTwoTone: RadioTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RadioTwoToneSvg}></AntdIcon>;
};

RadioTwoTone.displayName = 'RadioTwoTone';
RadioTwoTone.inheritAttrs = false;
export default RadioTwoTone;