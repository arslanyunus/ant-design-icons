// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ComputingBoldSvg from '@ant-design/icons-svg/lib/asn/ComputingBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ComputingBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ComputingBold: ComputingBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ComputingBoldSvg}></AntdIcon>;
};

ComputingBold.displayName = 'ComputingBold';
ComputingBold.inheritAttrs = false;
export default ComputingBold;