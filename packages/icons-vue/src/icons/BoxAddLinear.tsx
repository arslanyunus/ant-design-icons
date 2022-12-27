// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BoxAddLinearSvg from '@ant-design/icons-svg/lib/asn/BoxAddLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BoxAddLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BoxAddLinear: BoxAddLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BoxAddLinearSvg}></AntdIcon>;
};

BoxAddLinear.displayName = 'BoxAddLinear';
BoxAddLinear.inheritAttrs = false;
export default BoxAddLinear;