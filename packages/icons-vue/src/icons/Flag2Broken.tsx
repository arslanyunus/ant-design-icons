// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Flag2BrokenSvg from '@ant-design/icons-svg/lib/asn/Flag2Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Flag2BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Flag2Broken: Flag2BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Flag2BrokenSvg}></AntdIcon>;
};

Flag2Broken.displayName = 'Flag2Broken';
Flag2Broken.inheritAttrs = false;
export default Flag2Broken;