// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ConvertshapeLinearSvg from '@ant-design/icons-svg/lib/asn/ConvertshapeLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ConvertshapeLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ConvertshapeLinear: ConvertshapeLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ConvertshapeLinearSvg}></AntdIcon>;
};

ConvertshapeLinear.displayName = 'ConvertshapeLinear';
ConvertshapeLinear.inheritAttrs = false;
export default ConvertshapeLinear;