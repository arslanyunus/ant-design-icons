// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ColorsSquareLinearSvg from '@ant-design/icons-svg/lib/asn/ColorsSquareLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ColorsSquareLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ColorsSquareLinear: ColorsSquareLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ColorsSquareLinearSvg}></AntdIcon>;
};

ColorsSquareLinear.displayName = 'ColorsSquareLinear';
ColorsSquareLinear.inheritAttrs = false;
export default ColorsSquareLinear;