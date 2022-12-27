// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Discover1BoldSvg from '@ant-design/icons-svg/lib/asn/Discover1Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Discover1BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Discover1Bold: Discover1BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Discover1BoldSvg}></AntdIcon>;
};

Discover1Bold.displayName = 'Discover1Bold';
Discover1Bold.inheritAttrs = false;
export default Discover1Bold;