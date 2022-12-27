// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import NextLinearSvg from '@ant-design/icons-svg/lib/asn/NextLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface NextLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const NextLinear: NextLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={NextLinearSvg}></AntdIcon>;
};

NextLinear.displayName = 'NextLinear';
NextLinear.inheritAttrs = false;
export default NextLinear;