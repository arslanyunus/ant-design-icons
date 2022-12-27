// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Shapes2LinearSvg from '@ant-design/icons-svg/lib/asn/Shapes2Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Shapes2LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Shapes2Linear: Shapes2LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Shapes2LinearSvg}></AntdIcon>;
};

Shapes2Linear.displayName = 'Shapes2Linear';
Shapes2Linear.inheritAttrs = false;
export default Shapes2Linear;