// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Forward15SecondsLinearSvg from '@ant-design/icons-svg/lib/asn/Forward15SecondsLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Forward15SecondsLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Forward15SecondsLinear: Forward15SecondsLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Forward15SecondsLinearSvg}></AntdIcon>;
};

Forward15SecondsLinear.displayName = 'Forward15SecondsLinear';
Forward15SecondsLinear.inheritAttrs = false;
export default Forward15SecondsLinear;