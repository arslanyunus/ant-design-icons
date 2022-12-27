// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Refresh2LinearSvg from '@ant-design/icons-svg/lib/asn/Refresh2Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Refresh2LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Refresh2Linear: Refresh2LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Refresh2LinearSvg}></AntdIcon>;
};

Refresh2Linear.displayName = 'Refresh2Linear';
Refresh2Linear.inheritAttrs = false;
export default Refresh2Linear;