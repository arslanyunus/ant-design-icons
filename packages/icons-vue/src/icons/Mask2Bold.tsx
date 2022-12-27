// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Mask2BoldSvg from '@ant-design/icons-svg/lib/asn/Mask2Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Mask2BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Mask2Bold: Mask2BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Mask2BoldSvg}></AntdIcon>;
};

Mask2Bold.displayName = 'Mask2Bold';
Mask2Bold.inheritAttrs = false;
export default Mask2Bold;