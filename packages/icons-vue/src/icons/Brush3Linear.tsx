// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Brush3LinearSvg from '@ant-design/icons-svg/lib/asn/Brush3Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Brush3LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Brush3Linear: Brush3LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Brush3LinearSvg}></AntdIcon>;
};

Brush3Linear.displayName = 'Brush3Linear';
Brush3Linear.inheritAttrs = false;
export default Brush3Linear;