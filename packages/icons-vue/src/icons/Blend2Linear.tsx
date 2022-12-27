// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Blend2LinearSvg from '@ant-design/icons-svg/lib/asn/Blend2Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Blend2LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Blend2Linear: Blend2LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Blend2LinearSvg}></AntdIcon>;
};

Blend2Linear.displayName = 'Blend2Linear';
Blend2Linear.inheritAttrs = false;
export default Blend2Linear;