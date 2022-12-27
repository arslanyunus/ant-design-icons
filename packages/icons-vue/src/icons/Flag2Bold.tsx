// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Flag2BoldSvg from '@ant-design/icons-svg/lib/asn/Flag2Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Flag2BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Flag2Bold: Flag2BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Flag2BoldSvg}></AntdIcon>;
};

Flag2Bold.displayName = 'Flag2Bold';
Flag2Bold.inheritAttrs = false;
export default Flag2Bold;