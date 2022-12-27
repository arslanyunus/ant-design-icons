// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Hierarchy2LinearSvg from '@ant-design/icons-svg/lib/asn/Hierarchy2Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Hierarchy2LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Hierarchy2Linear: Hierarchy2LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Hierarchy2LinearSvg}></AntdIcon>;
};

Hierarchy2Linear.displayName = 'Hierarchy2Linear';
Hierarchy2Linear.inheritAttrs = false;
export default Hierarchy2Linear;