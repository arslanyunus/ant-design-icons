// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Routing2LinearSvg from '@ant-design/icons-svg/lib/asn/Routing2Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Routing2LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Routing2Linear: Routing2LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Routing2LinearSvg}></AntdIcon>;
};

Routing2Linear.displayName = 'Routing2Linear';
Routing2Linear.inheritAttrs = false;
export default Routing2Linear;