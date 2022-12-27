// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Routing2BoldSvg from '@ant-design/icons-svg/lib/asn/Routing2Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Routing2BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Routing2Bold: Routing2BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Routing2BoldSvg}></AntdIcon>;
};

Routing2Bold.displayName = 'Routing2Bold';
Routing2Bold.inheritAttrs = false;
export default Routing2Bold;