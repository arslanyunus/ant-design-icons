// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Mask2LinearSvg from '@ant-design/icons-svg/lib/asn/Mask2Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Mask2LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Mask2Linear: Mask2LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Mask2LinearSvg}></AntdIcon>;
};

Mask2Linear.displayName = 'Mask2Linear';
Mask2Linear.inheritAttrs = false;
export default Mask2Linear;