// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CloseSquareLinearSvg from '@ant-design/icons-svg/lib/asn/CloseSquareLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CloseSquareLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CloseSquareLinear: CloseSquareLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CloseSquareLinearSvg}></AntdIcon>;
};

CloseSquareLinear.displayName = 'CloseSquareLinear';
CloseSquareLinear.inheritAttrs = false;
export default CloseSquareLinear;