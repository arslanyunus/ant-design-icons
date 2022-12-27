// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RadioOutlineSvg from '@ant-design/icons-svg/lib/asn/RadioOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RadioOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RadioOutline: RadioOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RadioOutlineSvg}></AntdIcon>;
};

RadioOutline.displayName = 'RadioOutline';
RadioOutline.inheritAttrs = false;
export default RadioOutline;