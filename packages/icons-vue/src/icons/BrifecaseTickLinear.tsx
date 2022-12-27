// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BrifecaseTickLinearSvg from '@ant-design/icons-svg/lib/asn/BrifecaseTickLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BrifecaseTickLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BrifecaseTickLinear: BrifecaseTickLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BrifecaseTickLinearSvg}></AntdIcon>;
};

BrifecaseTickLinear.displayName = 'BrifecaseTickLinear';
BrifecaseTickLinear.inheritAttrs = false;
export default BrifecaseTickLinear;