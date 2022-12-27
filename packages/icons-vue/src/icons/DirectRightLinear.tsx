// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DirectRightLinearSvg from '@ant-design/icons-svg/lib/asn/DirectRightLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DirectRightLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DirectRightLinear: DirectRightLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DirectRightLinearSvg}></AntdIcon>;
};

DirectRightLinear.displayName = 'DirectRightLinear';
DirectRightLinear.inheritAttrs = false;
export default DirectRightLinear;