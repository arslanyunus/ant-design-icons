// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Logout1BoldSvg from '@ant-design/icons-svg/lib/asn/Logout1Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Logout1BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Logout1Bold: Logout1BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Logout1BoldSvg}></AntdIcon>;
};

Logout1Bold.displayName = 'Logout1Bold';
Logout1Bold.inheritAttrs = false;
export default Logout1Bold;