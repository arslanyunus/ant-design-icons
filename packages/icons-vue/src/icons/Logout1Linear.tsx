// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Logout1LinearSvg from '@ant-design/icons-svg/lib/asn/Logout1Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Logout1LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Logout1Linear: Logout1LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Logout1LinearSvg}></AntdIcon>;
};

Logout1Linear.displayName = 'Logout1Linear';
Logout1Linear.inheritAttrs = false;
export default Logout1Linear;