// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Brush2LinearSvg from '@ant-design/icons-svg/lib/asn/Brush2Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Brush2LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Brush2Linear: Brush2LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Brush2LinearSvg}></AntdIcon>;
};

Brush2Linear.displayName = 'Brush2Linear';
Brush2Linear.inheritAttrs = false;
export default Brush2Linear;