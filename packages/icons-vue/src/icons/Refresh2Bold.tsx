// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Refresh2BoldSvg from '@ant-design/icons-svg/lib/asn/Refresh2Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Refresh2BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Refresh2Bold: Refresh2BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Refresh2BoldSvg}></AntdIcon>;
};

Refresh2Bold.displayName = 'Refresh2Bold';
Refresh2Bold.inheritAttrs = false;
export default Refresh2Bold;