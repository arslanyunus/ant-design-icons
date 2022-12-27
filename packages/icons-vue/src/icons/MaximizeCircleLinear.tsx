// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MaximizeCircleLinearSvg from '@ant-design/icons-svg/lib/asn/MaximizeCircleLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MaximizeCircleLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MaximizeCircleLinear: MaximizeCircleLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MaximizeCircleLinearSvg}></AntdIcon>;
};

MaximizeCircleLinear.displayName = 'MaximizeCircleLinear';
MaximizeCircleLinear.inheritAttrs = false;
export default MaximizeCircleLinear;