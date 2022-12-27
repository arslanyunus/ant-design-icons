// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BackSquareLinearSvg from '@ant-design/icons-svg/lib/asn/BackSquareLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BackSquareLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BackSquareLinear: BackSquareLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BackSquareLinearSvg}></AntdIcon>;
};

BackSquareLinear.displayName = 'BackSquareLinear';
BackSquareLinear.inheritAttrs = false;
export default BackSquareLinear;