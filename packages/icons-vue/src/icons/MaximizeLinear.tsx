// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MaximizeLinearSvg from '@ant-design/icons-svg/lib/asn/MaximizeLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MaximizeLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MaximizeLinear: MaximizeLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MaximizeLinearSvg}></AntdIcon>;
};

MaximizeLinear.displayName = 'MaximizeLinear';
MaximizeLinear.inheritAttrs = false;
export default MaximizeLinear;