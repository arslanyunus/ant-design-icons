// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ComputingOutlineSvg from '@ant-design/icons-svg/lib/asn/ComputingOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ComputingOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ComputingOutline: ComputingOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ComputingOutlineSvg}></AntdIcon>;
};

ComputingOutline.displayName = 'ComputingOutline';
ComputingOutline.inheritAttrs = false;
export default ComputingOutline;